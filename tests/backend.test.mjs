import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {PGlite} from '@electric-sql/pglite';
import {databaseAdapter} from '../backend/postgres-adapter.js';
import {tournamentApi,calculateStandings} from '../backend/core.js';

test('best five includes approved fish only and preserves unresolved ties',()=>{
 const entries=['a','b'].map(id=>({id,status:'active',display_name:id,method:'kayak'}));
 const fish=entries.flatMap(e=>[10000,11000,12000,13000,14000,15000].map((length,i)=>({id:e.id+i,entry_id:e.id,status:'approved',adjusted_ticks:length})));
 fish.push({id:'pending',entry_id:'a',status:'pending',adjusted_ticks:99999});
 const rows=calculateStandings(entries,fish);
 assert.deepEqual(rows.map(r=>[r.total,r.count,r.rank,r.tied]),[[65000,5,1,true],[65000,5,1,true]]);
});

test('PostgreSQL schema, verified identity, director permissions and private tables',async()=>{
 const pg=new PGlite();
 try {
  await pg.exec('CREATE ROLE anon; CREATE ROLE authenticated;');
  await pg.exec(await readFile(new URL('../backend/schema.sql',import.meta.url),'utf8'));
  const exec=async(sql,args)=>{const r=await pg.query(sql,args);return {...r,count:r.affectedRows};};
  const DB=databaseAdapter(exec,fn=>pg.transaction(tx=>fn(async(sql,args)=>{const r=await tx.query(sql,args);return {...r,count:r.affectedRows};})));
  const env={DB,TOURNAMENT_ADMIN_EMAILS:'director@example.test'};
  const call=(path,identity,body)=>tournamentApi(new Request('https://app.katyakersohio.com/api/tournament'+path,{method:body?'POST':'GET',headers:{Origin:'https://app.katyakersohio.com',...(identity?{'oai-authenticated-user-id':identity.id,'oai-authenticated-user-email':identity.email}:{})},body:body?JSON.stringify(body):undefined}),env);
  assert.equal((await call('/session')).status,401);
  const director={id:'11111111-1111-4111-8111-111111111111',email:'director@example.test'};
  const angler={id:'22222222-2222-4222-8222-222222222222',email:'angler@example.test'};
  const event={name:'Integration practice',startsAt:'2027-01-01T12:00:00Z',endsAt:'2027-01-01T21:00:00Z',uploadDeadline:'2027-01-01T22:00:00Z'};
  assert.equal((await call('/events',angler,event)).status,403);
  const created=await call('/events',director,event);
  assert.equal(created.status,201,await created.clone().text());
  const list=await (await call('/events',angler)).json();
  assert.equal(list.events.length,1);
  const flags=await pg.query("SELECT relrowsecurity, relforcerowsecurity FROM pg_class WHERE relname='tournament_submissions'");
  assert.deepEqual(flags.rows[0],{relrowsecurity:true,relforcerowsecurity:true});
  await pg.exec('SET ROLE anon');
  await assert.rejects(pg.query('SELECT * FROM tournament_submissions'),/permission denied/);
  await pg.exec('RESET ROLE');
 } finally {await pg.close();}
});
