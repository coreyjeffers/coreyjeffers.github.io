import http from 'node:http';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {PGlite} from '@electric-sql/pglite';
import {databaseAdapter} from '../backend/postgres-adapter.js';
import {tournamentApi} from '../backend/core.js';
const root=process.cwd(),port=4173,origin=`http://localhost:${port}`;
await mkdir('.local',{recursive:true});
const pg=new PGlite('.local/database');
if(!(await pg.query("SELECT to_regclass('public.tournament_users') AS present")).rows[0].present){
 await pg.exec('CREATE ROLE anon; CREATE ROLE authenticated;');
 await pg.exec(await readFile('backend/schema.sql','utf8'));
}
const adapt=async(target,q,v)=>{const r=await target.query(q,v);return {...r,count:r.affectedRows};};
const DB=databaseAdapter((q,v)=>adapt(pg,q,v),fn=>pg.transaction(tx=>fn((q,v)=>adapt(tx,q,v))));
const identities={director:'11111111-1111-4111-8111-111111111111',angler:'22222222-2222-4222-8222-222222222222',judge:'33333333-3333-4333-8333-333333333333'};
const objectPath=key=>{if(!/^[a-zA-Z0-9/._-]+$/.test(key)||key.includes('..'))throw Error('Invalid object');return path.join(root,'.local/photos',key);};
const env={DB,TOURNAMENT_ADMIN_EMAILS:'director@preview.local',TOURNAMENT_FILES:{async put(key,bytes){const p=objectPath(key);await mkdir(path.dirname(p),{recursive:true});await writeFile(p,bytes);},async get(key){try{const bytes=await readFile(objectPath(key));return {body:bytes,arrayBuffer:async()=>bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength)};}catch(e){if(e.code==='ENOENT')return null;throw e;}}}};
http.createServer(async(req,res)=>{
 try{
  if(!['localhost:4173','127.0.0.1:4173'].includes(req.headers.host)){res.writeHead(403).end();return;}
  const url=new URL(req.url,origin);
  if(url.pathname.startsWith('/api/tournament')){
   const chunks=[];let size=0;for await(const chunk of req){size+=chunk.length;if(size>11*1024*1024)throw Error('Request too large');chunks.push(chunk);}
   const headers=new Headers(req.headers);for(const name of [...headers.keys()])if(name.startsWith('oai-authenticated-'))headers.delete(name);
   const role=(headers.get('authorization')||'').replace('Bearer dev-','');
   if(identities[role]){headers.set('oai-authenticated-user-id',identities[role]);headers.set('oai-authenticated-user-email',role+'@preview.local');headers.set('oai-authenticated-user-full-name','Preview '+role);}
   const result=await tournamentApi(new Request(url,{method:req.method,headers,body:['GET','HEAD'].includes(req.method)?undefined:Buffer.concat(chunks)}),env);
   res.writeHead(result.status,Object.fromEntries(result.headers));res.end(Buffer.from(await result.arrayBuffer()));return;
  }
  if(url.pathname==='/'){res.writeHead(302,{Location:'/app/'}).end();return;}
  const file=path.resolve(root,'.'+decodeURIComponent(url.pathname)+(url.pathname.endsWith('/')?'index.html':''));
  if(!file.startsWith(root+path.sep)||!['app','assets'].includes(path.relative(root,file).split(path.sep)[0])){res.writeHead(404).end();return;}
  const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.webmanifest':'application/manifest+json','.svg':'image/svg+xml','.png':'image/png'};
  res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(await readFile(file));
 }catch(e){res.writeHead(500,{'Content-Type':'text/plain'});res.end('Preview request failed');console.error(e);}
}).listen(port,'127.0.0.1',()=>console.log(`Local practice preview: ${origin}/app/`));
