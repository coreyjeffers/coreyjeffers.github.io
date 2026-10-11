const CACHE='katyakers-app-v5';
const SHELL=['/app/','/app/app.css','/app/app.js','/app/db.js','/app/home.js','/app/auth.js','/app/config.js','/app/manifest.webmanifest','/app/icon.svg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL).then(()=>self.skipWaiting()))));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{const u=new URL(event.request.url);if(event.request.method!=='GET'||u.origin!==self.location.origin||!u.pathname.startsWith('/app/'))return;if(event.request.mode==='navigate'){event.respondWith(fetch(event.request).then(response=>response.ok?response:caches.match('/app/')).catch(()=>caches.match('/app/')));return;}if(SHELL.includes(u.pathname))event.respondWith(caches.match(event.request,{ignoreSearch:true}).then(cached=>cached||fetch(event.request)));});





