// Deploy as Supabase Edge Function named "tournament". JWT verification is
// performed below so Stripe can reach its signature-verified webhook route.
import postgres from 'npm:postgres@3.4.7';
import {tournamentApi} from './core.js';
import {databaseAdapter} from './postgres-adapter.js';
const dbUrl=Deno.env.get('SUPABASE_DB_URL')!;
const supabase=Deno.env.get('SUPABASE_URL')!;
const serviceKey=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const siteOrigin=Deno.env.get('TOURNAMENT_SITE_ORIGIN')||'https://app.katyakersohio.com';
const sql=postgres(dbUrl,{prepare:false,max:1,idle_timeout:20,connect_timeout:10,ssl:'require'});
const execute=async(query:string,values:unknown[])=>{const r=await sql.unsafe(query,values as never[]);return {rows:Array.from(r),count:r.count};};
const db=databaseAdapter(execute,async(fn:any)=>sql.begin(async tx=>fn(async(query:string,values:unknown[])=>{const r=await tx.unsafe(query,values as never[]);return {rows:Array.from(r),count:r.count};})));
const bucket='tournament-originals';
function objectUrl(key:string){return supabase+'/storage/v1/object/'+bucket+'/'+key.split('/').map(encodeURIComponent).join('/');}
const storage={async put(key:string,bytes:Uint8Array,options:any={}){const r=await fetch(objectUrl(key),{method:'POST',headers:{Authorization:'Bearer '+serviceKey,apikey:serviceKey,'Content-Type':options.httpMetadata?.contentType||'application/octet-stream','x-upsert':'true'},body:bytes});if(!r.ok)throw new Error('Private storage write failed');},async get(key:string){const r=await fetch(objectUrl(key),{headers:{Authorization:'Bearer '+serviceKey,apikey:serviceKey}});if(r.status===404)return null;if(!r.ok)throw new Error('Private storage read failed');return {body:r.body,arrayBuffer:()=>r.arrayBuffer()};}};
Deno.serve(async request=>{
 const origin=request.headers.get('Origin');const url=new URL(request.url);const suffix=url.pathname.replace(/^\/functions\/v1\/tournament/,'').replace(/^\/tournament/,'');
 const allowedOrigins=[siteOrigin,'https://katyakers-tournament-app.katyakers-9737.chatgpt.site'];
 const cors={'Access-Control-Allow-Origin':origin&&allowedOrigins.includes(origin)?origin:siteOrigin,'Access-Control-Allow-Headers':'authorization, apikey, content-type','Access-Control-Allow-Methods':'GET,POST,PUT,OPTIONS','Vary':'Origin','Cache-Control':'no-store'};
 if(origin&&!allowedOrigins.includes(origin))return new Response('Origin not allowed',{status:403});
 if(request.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
 const headers=new Headers(request.headers);for(const name of [...headers.keys()])if(name.startsWith('oai-authenticated-'))headers.delete(name);
 if(suffix!=='/webhook'){
  const authorization=request.headers.get('Authorization')||'';if(!authorization.startsWith('Bearer '))return Response.json({error:'Sign in to continue.'},{status:401,headers:cors});
  const verified=await fetch(supabase+'/auth/v1/user',{headers:{Authorization:authorization,apikey:serviceKey}});
  if(!verified.ok)return Response.json({error:'Sign in again to sync your saved fish.'},{status:401,headers:cors});
  const user=await verified.json();if(!user.id||!user.email_confirmed_at)return Response.json({error:'Confirm your email before registering.'},{status:403,headers:cors});
  headers.set('oai-authenticated-user-id',user.id);headers.set('oai-authenticated-user-email',user.email||'');headers.set('oai-authenticated-user-full-name',encodeURIComponent(user.user_metadata?.full_name||user.email?.split('@')[0]||'Angler'));headers.set('oai-authenticated-user-full-name-encoding','percent-encoded-utf-8');
 }
 if(origin)headers.set('Origin',siteOrigin);
 const internal=new Request(siteOrigin+'/api/tournament'+suffix,{method:request.method,headers,body:['GET','HEAD'].includes(request.method)?undefined:request.body,duplex:'half'} as RequestInit);
 const env={DB:db,TOURNAMENT_FILES:storage,TOURNAMENT_ADMIN_EMAILS:Deno.env.get('TOURNAMENT_ADMIN_EMAILS')||'corey@katyakersohio.com',STRIPE_TEST_SECRET_KEY:Deno.env.get('STRIPE_TEST_SECRET_KEY')||'',STRIPE_WEBHOOK_SECRET:Deno.env.get('STRIPE_WEBHOOK_SECRET')||''};
 const response=await tournamentApi(internal,env);const result=new Response(response.body,response);for(const [key,value] of Object.entries(cors))result.headers.set(key,value);return result;
});


