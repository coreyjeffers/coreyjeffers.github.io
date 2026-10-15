import {spawnSync} from 'node:child_process';
import {readdirSync,readFileSync} from 'node:fs';
for(const folder of ['app','backend'])for(const name of readdirSync(folder).filter(n=>n.endsWith('.js'))){const p=spawnSync(process.execPath,['--check',folder+'/'+name],{stdio:'inherit'});if(p.status)process.exit(p.status);}
const manifest=JSON.parse(readFileSync('app/manifest.webmanifest','utf8'));if(manifest.scope!=='/app/')throw Error('Service worker must remain scoped to /app/');
if(readFileSync('CNAME','utf8').trim()!=='katyakersohio.com')throw Error('Unexpected production domain');
console.log('JavaScript syntax, manifest scope and domain checks passed.');
