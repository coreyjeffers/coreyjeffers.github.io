-- KATYAKERS first practice milestone. Dedicated Supabase project, one trail.
-- All client access goes through the authenticated edge service; deny direct writes.
BEGIN;
CREATE TABLE public.tournament_users (id uuid PRIMARY KEY, name text NOT NULL, created_at timestamptz NOT NULL);
CREATE TABLE public.tournament_events (
 id uuid PRIMARY KEY, name text NOT NULL, water text NOT NULL,
 starts_at timestamptz NOT NULL, ends_at timestamptz NOT NULL, upload_deadline timestamptz NOT NULL,
 identifier text NOT NULL, state text NOT NULL DEFAULT 'open' CHECK(state IN ('open','final')),
 mode text NOT NULL DEFAULT 'practice' CHECK(mode='practice'), fee_cents integer NOT NULL DEFAULT 0 CHECK(fee_cents>=0 AND fee_cents<=100000),
 rules_json text NOT NULL CHECK(jsonb_typeof(rules_json::jsonb)='object'), version integer NOT NULL DEFAULT 1,
 final_json text, created_by uuid NOT NULL REFERENCES public.tournament_users(id), created_at timestamptz NOT NULL,
 CHECK(starts_at<ends_at AND ends_at<=upload_deadline)
);
CREATE TABLE public.tournament_entries (
 id uuid PRIMARY KEY, event_id uuid NOT NULL REFERENCES public.tournament_events(id), user_id uuid NOT NULL REFERENCES public.tournament_users(id),
 display_name text NOT NULL, method text NOT NULL CHECK(method IN ('kayak','boat','bank')),
 status text NOT NULL CHECK(status IN ('active','payment_pending')), rule_version integer NOT NULL,
 acknowledged_at timestamptz NOT NULL, created_at timestamptz NOT NULL,
 UNIQUE(event_id,user_id), UNIQUE(event_id,id,user_id)
);
CREATE TABLE public.tournament_staff (event_id uuid NOT NULL REFERENCES public.tournament_events(id), user_id uuid NOT NULL REFERENCES public.tournament_users(id), PRIMARY KEY(event_id,user_id));
CREATE TABLE public.tournament_submissions (
 id uuid PRIMARY KEY, event_id uuid NOT NULL REFERENCES public.tournament_events(id), entry_id uuid NOT NULL, user_id uuid NOT NULL,
 client_id uuid NOT NULL, payload_hash text NOT NULL, image_hash text NOT NULL,
 image_size integer NOT NULL CHECK(image_size>0 AND image_size<=10485760), image_type text NOT NULL CHECK(image_type IN ('image/jpeg','image/png','image/webp')),
 species text NOT NULL CHECK(species IN ('blue','channel','flathead')), claimed_ticks integer NOT NULL CHECK(claimed_ticks>0 AND claimed_ticks<=100000),
 captured_at timestamptz NOT NULL, received_at timestamptz,
 status text NOT NULL DEFAULT 'uploading' CHECK(status IN ('uploading','pending','approved','rejected')),
 late integer NOT NULL DEFAULT 0 CHECK(late IN (0,1)), object_key text, judge_id uuid REFERENCES public.tournament_users(id),
 measured_ticks integer, penalty_ticks integer NOT NULL DEFAULT 0 CHECK(penalty_ticks IN (0,1000)), adjusted_ticks integer,
 reason text NOT NULL DEFAULT '', version integer NOT NULL DEFAULT 1, created_at timestamptz NOT NULL,
 UNIQUE(entry_id,client_id), FOREIGN KEY(event_id,entry_id,user_id) REFERENCES public.tournament_entries(event_id,id,user_id),
 CHECK(status='uploading' OR (received_at IS NOT NULL AND object_key IS NOT NULL))
);
CREATE TABLE public.tournament_chunks (
 submission_id uuid NOT NULL REFERENCES public.tournament_submissions(id), part integer NOT NULL CHECK(part>=0 AND part<10),
 hash text NOT NULL, bytes integer NOT NULL CHECK(bytes>0 AND bytes<=1048576), object_key text NOT NULL, PRIMARY KEY(submission_id,part)
);
CREATE TABLE public.tournament_decisions (
 id uuid PRIMARY KEY, submission_id uuid NOT NULL REFERENCES public.tournament_submissions(id), judge_id uuid NOT NULL REFERENCES public.tournament_users(id),
 verdict text NOT NULL CHECK(verdict IN ('approved','rejected')), measured_ticks integer NOT NULL CHECK(measured_ticks>0 AND measured_ticks<=100000),
 penalty_ticks integer NOT NULL CHECK(penalty_ticks IN (0,1000)), adjusted_ticks integer NOT NULL CHECK(adjusted_ticks>=0),
 reason text NOT NULL, previous_version integer NOT NULL, created_at timestamptz NOT NULL, UNIQUE(submission_id,previous_version),
 CHECK(adjusted_ticks=greatest(0,(measured_ticks/250)*250-penalty_ticks))
);
CREATE TABLE public.tournament_payments (
 id uuid PRIMARY KEY, entry_id uuid NOT NULL UNIQUE REFERENCES public.tournament_entries(id), session_id text UNIQUE,
 amount_cents integer NOT NULL CHECK(amount_cents>=0), status text NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','paid')),
 created_at timestamptz NOT NULL
);
CREATE TABLE public.tournament_webhooks (id text PRIMARY KEY, received_at timestamptz NOT NULL);
CREATE TABLE public.tournament_audit (id uuid PRIMARY KEY, event_id uuid NOT NULL REFERENCES public.tournament_events(id), actor_id uuid NOT NULL REFERENCES public.tournament_users(id), action text NOT NULL, detail text NOT NULL, created_at timestamptz NOT NULL);
CREATE INDEX tournament_queue ON public.tournament_submissions(event_id,status,received_at);
CREATE INDEX tournament_owner ON public.tournament_submissions(user_id,event_id);
CREATE INDEX tournament_decisions_history ON public.tournament_decisions(submission_id,previous_version DESC);
CREATE INDEX tournament_audit_event ON public.tournament_audit(event_id,created_at DESC);
CREATE FUNCTION public.guard_tournament_submission() RETURNS trigger LANGUAGE plpgsql SET search_path=public,pg_temp AS $$
BEGIN
 PERFORM 1 FROM tournament_events WHERE id=NEW.event_id AND state='open' FOR UPDATE;
 IF NOT FOUND THEN RAISE EXCEPTION 'Event is final'; END IF;
 PERFORM 1 FROM tournament_entries WHERE id=NEW.entry_id AND event_id=NEW.event_id AND user_id=NEW.user_id AND status='active';
 IF NOT FOUND THEN RAISE EXCEPTION 'Entry is not active'; END IF;
 UPDATE tournament_events SET version=version+1 WHERE id=NEW.event_id;
 RETURN NEW;
END $$;
CREATE TRIGGER tournament_submission_entry_guard BEFORE INSERT ON public.tournament_submissions FOR EACH ROW EXECUTE FUNCTION public.guard_tournament_submission();
CREATE FUNCTION public.guard_tournament_decision() RETURNS trigger LANGUAGE plpgsql SET search_path=public,pg_temp AS $$
DECLARE target_event uuid;
BEGIN
 SELECT event_id INTO target_event FROM tournament_submissions WHERE id=NEW.submission_id;
 PERFORM 1 FROM tournament_events WHERE id=target_event AND state='open' FOR UPDATE;
 IF NOT FOUND THEN RAISE EXCEPTION 'Decision conflict'; END IF;
 PERFORM 1 FROM tournament_submissions WHERE id=NEW.submission_id AND version=NEW.previous_version AND status<>'uploading' AND user_id<>NEW.judge_id FOR UPDATE;
 IF NOT FOUND THEN RAISE EXCEPTION 'Decision conflict'; END IF;
 RETURN NEW;
END $$;
CREATE FUNCTION public.apply_tournament_decision() RETURNS trigger LANGUAGE plpgsql SET search_path=public,pg_temp AS $$
BEGIN
 UPDATE tournament_submissions SET status=NEW.verdict,measured_ticks=NEW.measured_ticks,penalty_ticks=NEW.penalty_ticks,adjusted_ticks=NEW.adjusted_ticks,reason=NEW.reason,judge_id=NEW.judge_id,version=version+1 WHERE id=NEW.submission_id;
 UPDATE tournament_events SET version=version+1 WHERE id=(SELECT event_id FROM tournament_submissions WHERE id=NEW.submission_id);
 RETURN NEW;
END $$;
CREATE TRIGGER tournament_decision_guard BEFORE INSERT ON public.tournament_decisions FOR EACH ROW EXECUTE FUNCTION public.guard_tournament_decision();
CREATE TRIGGER tournament_decision_apply AFTER INSERT ON public.tournament_decisions FOR EACH ROW EXECUTE FUNCTION public.apply_tournament_decision();
CREATE FUNCTION public.prevent_tournament_audit_change() RETURNS trigger LANGUAGE plpgsql SET search_path=public,pg_temp AS $$ BEGIN RAISE EXCEPTION 'Audit history is immutable'; END $$;
CREATE TRIGGER tournament_decisions_immutable BEFORE UPDATE OR DELETE ON public.tournament_decisions FOR EACH ROW EXECUTE FUNCTION public.prevent_tournament_audit_change();
CREATE TRIGGER tournament_audit_immutable BEFORE UPDATE OR DELETE ON public.tournament_audit FOR EACH ROW EXECUTE FUNCTION public.prevent_tournament_audit_change();
DO $$ DECLARE t text; BEGIN
 FOREACH t IN ARRAY ARRAY['tournament_users','tournament_events','tournament_entries','tournament_staff','tournament_submissions','tournament_chunks','tournament_decisions','tournament_payments','tournament_webhooks','tournament_audit'] LOOP
  EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY',t);
  EXECUTE format('ALTER TABLE public.%I FORCE ROW LEVEL SECURITY',t);
  EXECUTE format('REVOKE ALL ON public.%I FROM PUBLIC, anon, authenticated',t);
 END LOOP;
END $$;
-- Supabase roles exist in production. Tests create them before applying this migration.

REVOKE ALL ON FUNCTION public.guard_tournament_submission() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.guard_tournament_decision() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.apply_tournament_decision() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.prevent_tournament_audit_change() FROM PUBLIC;
COMMIT;


