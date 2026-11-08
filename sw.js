/* The complete single-player chapter is kept on this device only after every file verifies. */
'use strict';
const EDITION='v6-20261108',CACHE='jianghu-single-player-'+EDITION;
const FILES=[
 'index.html','style.css','mobile.css','offline.css','manifest.webmanifest',
 'compat.js','story.js','story-triggers.js','encounters.js','exploration-layouts.js',
 'progression.js','adventure-content.js','map.js','combat.js','game.js','offline.js',
 'assets/app-icon.png','assets/app-icon.svg','assets/a.svg','assets/b.svg',
 'assets/portraits.png','assets/portrait-a.png','assets/portrait-b.png',
 'assets/walk-a.png','assets/walk-b.png','assets/world-people.png','assets/world-enemies.png',
 'assets/world-town.png','assets/world-forest.png','assets/world-heyang.png',
 'assets/world-temple.png','assets/world-interiors.png','assets/world-outskirts.png',
 'assets/world-riverwoods.png','assets/world-hilltrail.png','assets/world-forestcave.png',
 'assets/world-wisp.png','assets/battle-forest.png','assets/battle-village.png'
];
const ROOT=new URL('./',self.location.href),URLS=FILES.map(path=>new URL(path,ROOT).href),ALLOWED=new Set(URLS);
let downloadPromise=null,previousCompletePromise=null;const listeners=new Set(),clientEditions=new Map();
const MARKER=new URL('__offline-complete__',ROOT).href;
const urlOf=request=>{
 const url=new URL(typeof request==='string'?request:request.url,ROOT);
 if(url.origin!==ROOT.origin)return null;
 url.search='';url.hash='';
 if(url.pathname===ROOT.pathname)url.pathname+='index.html';
 return ALLOWED.has(url.href)?url.href:null;
};
async function valid(response,url){
 if(!response||!response.ok||response.type==='opaque'||response.redirected)return false;
 const type=(response.headers.get('content-type')||'').toLowerCase(),path=new URL(url).pathname;
 if(/\.(png|svg)$/.test(path))return type.startsWith('image/');
 if(path.endsWith('index.html')){if(!type.includes('text/html'))return false;const text=await response.clone().text();return text.includes('id="world"')&&text.includes('game.js');}
 if(path.endsWith('.js')){if(!/javascript|ecmascript|text\/plain/.test(type))return false;const text=await response.clone().text();return text.trim().length>10&&!/^\s*(?:<!doctype|<html)/i.test(text);}
 if(path.endsWith('.css'))return type.includes('text/css');
 if(path.endsWith('.webmanifest')){try{return /json|manifest/.test(type)&&typeof(await response.clone().json()).name==='string';}catch{return false;}}
 return false;
}
async function status(){
 const cache=await caches.open(CACHE),present=await Promise.all(URLS.map(async url=>!!await cache.match(url)));
 const done=present.filter(Boolean).length;
 return{version:EDITION,total:FILES.length,done,ready:done===FILES.length,downloading:!!downloadPromise};
}
async function previousComplete(){
 if(!previousCompletePromise)previousCompletePromise=(async()=>{
  const names=(await caches.keys()).filter(name=>name.startsWith('jianghu-single-player-')&&name!==CACHE).reverse();
  for(const name of names){
   const cache=await caches.open(name),marker=await cache.match(MARKER);if(!marker)continue;
   try{const data=await marker.json();if(!Array.isArray(data.urls)||!data.urls.length||data.urls.length>150)continue;
    if((await Promise.all(data.urls.map(url=>cache.match(url)))).every(Boolean))return{name,cache};
   }catch{}
  }
  return null;
 })();
 return previousCompletePromise;
}
function post(data){for(const port of listeners){try{port.postMessage(data);}catch{listeners.delete(port);}}}
function explain(error){return error?.name==='QuotaExceededError'?'设备空间不足，请先导出存档，腾出空间后重试。':'尚有文件没有下载成功。保持联网后点重试，已经下载的内容会保留。';}
async function download(){
 const cache=await caches.open(CACHE),failed=[];let cursor=0;
 const initial=await status();post({kind:'progress',...initial,downloading:true});
 async function worker(){
  while(cursor<URLS.length){const index=cursor++,url=URLS[index],path=FILES[index];
   try{
    const existing=await cache.match(url);if(existing&&await valid(existing,url))continue;
    if(existing)await cache.delete(url);
    const response=await fetch(new Request(url,{cache:'reload',credentials:'same-origin',redirect:'follow'}));
    if(!await valid(response,url))throw new Error('File unavailable: '+path);
    await cache.put(url,response);
    post({kind:'progress',...await status(),downloading:true,file:path});
   }catch(error){failed.push(path);post({kind:'file-error',file:path,message:explain(error)});}
  }
 }
 await Promise.all([worker(),worker()]);
 const result=await status();
 if(result.ready){
  // Older complete editions remain usable until the new edition is entirely present.
  await cache.put(MARKER,new Response(JSON.stringify({version:EDITION,urls:URLS}),{headers:{'content-type':'application/json'}}));
  const previous=await previousComplete();
  for(const name of await caches.keys())if(name.startsWith('jianghu-single-player-')&&name!==CACHE&&name!==previous?.name&&![...clientEditions.values()].includes(name))await caches.delete(name);
 }
 return{kind:'complete',...result,downloading:false,failed,message:result.ready?'整章已下载，可断网继续游玩。':explain()};
}
self.addEventListener('install',event=>{event.waitUntil(self.skipWaiting());});
self.addEventListener('activate',event=>{event.waitUntil(self.clients.claim());});
self.addEventListener('message',event=>{
 const port=event.ports?.[0];if(!port)return;
 if(event.data?.type==='OFFLINE_STATUS'){event.waitUntil(status().then(s=>port.postMessage({kind:'status',...s})).catch(()=>port.postMessage({kind:'error',message:'暂时无法读取离线空间，请重新打开浏览器后重试。'})));return;}
 if(event.data?.type!=='OFFLINE_DOWNLOAD')return;
 listeners.add(port);
 if(!downloadPromise){downloadPromise=download().catch(error=>({kind:'error',ready:false,message:explain(error)})).then(result=>{downloadPromise=null;post(result);listeners.clear();return result;});}
 event.waitUntil(downloadPromise);
});
self.addEventListener('fetch',event=>{
 const request=event.request;if(request.method!=='GET')return;
 const key=urlOf(request);if(!key)return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE),cached=await cache.match(key),navigation=request.mode==='navigate'||key===new URL('index.html',ROOT).href;
  const clientId=event.resultingClientId||event.clientId,selected=clientEditions.get(event.clientId);
  // An interrupted update must start the previous complete chapter as a whole.
  if(!navigation&&selected&&selected!==CACHE){const old=await(await caches.open(selected)).match(key);if(old)return old;}
  if(cached&&!navigation)return cached;
  async function fallback(){
   if(navigation&&!(await status()).ready){
    const previous=await previousComplete(),old=await previous?.cache.match(key);
    if(old){if(clientId)clientEditions.set(clientId,previous.name);return old;}
   }
   if(cached){if(navigation&&clientId)clientEditions.set(clientId,CACHE);return cached;}
   const previous=await previousComplete(),old=await previous?.cache.match(key);if(old)return old;
   return null;
  }
  try{
   const response=await fetch(request);
   if(await valid(response,key)){await cache.put(key,response.clone());if(navigation&&clientId)clientEditions.set(clientId,CACHE);return response;}
   return await fallback()||response;
  }catch(error){const saved=await fallback();if(saved)return saved;throw error;}
 })());
});
