-- Run only in Supabase after schema.sql. This is a PRIVATE bucket.
INSERT INTO storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
VALUES ('tournament-originals','tournament-originals',false,10485760,ARRAY['image/jpeg','image/png','image/webp','application/octet-stream'])
ON CONFLICT(id) DO NOTHING;
-- No anon/authenticated object policies: all reads/writes are authorized by
-- the edge service, which checks event assignment or submission ownership.
