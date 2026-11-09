/* The complete single-player chapter is kept on this device only after every file verifies. */
'use strict';
const EDITION='v8-20261109-8997e4e18023',CACHE='jianghu-single-player-'+EDITION;
const FILES=[
 "index.html",
 "game-v8-e2cfe0c324b2.css",
 "manifest.webmanifest",
 "app-v8-358925154c4d.js",
 "assets/a.svg",
 "assets/app-icon.png",
 "assets/app-icon.svg",
 "assets/b.svg",
 "assets/battle-forest.webp",
 "assets/battle-village.webp",
 "assets/portrait-a.webp",
 "assets/portrait-b.webp",
 "assets/portraits.webp",
 "assets/walk-a.webp",
 "assets/walk-b.webp",
 "assets/world-enemies.webp",
 "assets/world-forest.webp",
 "assets/world-forestcave.webp",
 "assets/world-herb.webp",
 "assets/world-heyang.webp",
 "assets/world-hilltrail.webp",
 "assets/world-interiors.webp",
 "assets/world-outskirts.webp",
 "assets/world-people.webp",
 "assets/world-riverwoods.webp",
 "assets/world-temple.webp",
 "assets/world-town.webp",
 "assets/world-wisp.webp"
];
const ROOT=new URL('./',self.location.href),URLS=FILES.map(path=>new URL(path,ROOT).href),ALLOWED=new Set(URLS);
const LEGACY_FILES=['style.css','mobile.css','offline.css','compat.js','story.js','story-triggers.js','encounters.js','exploration-layouts.js','progression.js','adventure-content.js','map.js','combat.js','game.js','offline.js'];
const LEGACY_URLS=new Set(LEGACY_FILES.map(path=>new URL(path,ROOT).href));
let downloadPromise=null,previousCompletePromise=null;const listeners=new Set(),clientEditions=new Map();
const MARKER=new URL('__offline-complete__',ROOT).href;
const urlOf=request=>{
 const url=new URL(typeof request==='string'?request:request.url,ROOT);
 if(url.origin!==ROOT.origin)return null;
 url.search='';url.hash='';
 if(url.pathname===ROOT.pathname)url.pathname+='index.html';
 const relative=url.pathname.startsWith(ROOT.pathname)?url.pathname.slice(ROOT.pathname.length):'';return ALLOWED.has(url.href)||LEGACY_URLS.has(url.href)||/^(?:app|game)-v\d+-[a-f0-9]{12}\.(?:js|css)$/.test(relative)?url.href:null;
};
async function valid(response,url){
 if(!response||!response.ok||response.type==='opaque')return false;
 const requested=new URL(url),indexURL=new URL('index.html',ROOT);
 if(response.redirected){
  // Static hosts may canonicalize index.html to this game's directory. Keep
  // accepting only that real game document, never sign-in or asset redirects.
  if(requested.href!==indexURL.href)return false;
  let finalURL;try{finalURL=new URL(response.url);}catch{return false;}
  if(finalURL.origin!==ROOT.origin||![ROOT.pathname,indexURL.pathname].includes(finalURL.pathname))return false;
 }
 const type=(response.headers.get('content-type')||'').toLowerCase(),path=requested.pathname;
 if(/\.(png|webp|svg)$/.test(path))return type.startsWith('image/');
 if(path.endsWith('index.html')){if(!type.includes('text/html'))return false;const text=await response.clone().text();return text.includes('id="world"')&&text.includes('game.js');}
 if(path.endsWith('.js')){if(!/javascript|ecmascript|text\/plain/.test(type))return false;const text=await response.clone().text();return text.trim().length>10&&!/^\s*(?:<!doctype|<html)/i.test(text);}
 if(path.endsWith('.css'))return type.includes('text/css');
 if(path.endsWith('.webmanifest')){try{return /json|manifest/.test(type)&&typeof(await response.clone().json()).name==='string';}catch{return false;}}
 return false;
}
async function currentDocument(response){
 if(!response)return false;const html=await response.clone().text(),runtime=FILES.filter(path=>/^(?:app|game)-v\d+-[a-f0-9]{12}\.(?:js|css)$/.test(path));
 return runtime.every(path=>html.includes(path));
}
async function documentDependenciesCached(cache){
 const document=await cache.match(new URL('index.html',ROOT).href);if(!document)return false;
 const html=await document.clone().text(),dependencies=[];
 for(const match of html.matchAll(/<(script|link)\b[^>]*>/gi)){
  const tag=match[0],kind=match[1].toLowerCase();
  if(kind==='link'&&!/\brel\s*=\s*["'][^"']*stylesheet/i.test(tag))continue;
  const value=tag.match(kind==='script'?/\bsrc\s*=\s*["']([^"']+)["']/i:/\bhref\s*=\s*["']([^"']+)["']/i);if(!value)continue;
  const url=new URL(value[1],ROOT);if(url.origin!==ROOT.origin||!url.pathname.startsWith(ROOT.pathname))return false;url.search='';url.hash='';dependencies.push(url.href);
 }
 return dependencies.length>0&&(await Promise.all(dependencies.map(url=>cache.match(url)))).every(Boolean);
}
function fetchBound(request,ms,consume=response=>response){
 const controller=typeof AbortController==='function'?new AbortController():null;let timer;
 const deadline=new Promise((resolve,reject)=>{timer=setTimeout(()=>{controller?.abort();const error=new Error('Network request timed out');error.name='TimeoutError';reject(error);},ms);});
 const network=Promise.resolve().then(()=>fetch(request,controller?{signal:controller.signal}:undefined)).then(consume);
 return Promise.race([network,deadline]).finally(()=>clearTimeout(timer));
}
function keepInBackground(event,cache,key,response){
 // Display the received image immediately. CacheStorage can be slow or full on
 // iPhone and must never hold an otherwise successful map/sprite request open.
 let timer;const deadline=new Promise(resolve=>{timer=setTimeout(resolve,10000);});
 const write=Promise.resolve().then(()=>cache.put(key,response)).catch(()=>{});
 event.waitUntil(Promise.race([write,deadline]).finally(()=>clearTimeout(timer)));
}
function storageBound(operation,ms=1200){
 let timer;const deadline=new Promise((resolve,reject)=>{timer=setTimeout(()=>{const error=new Error('Offline storage is unavailable');error.name='StorageUnavailableError';reject(error);},ms);});
 return Promise.race([operation,deadline]).catch(error=>{if(error?.name==='QuotaExceededError')throw error;const unavailable=new Error('Offline storage is unavailable');unavailable.name='StorageUnavailableError';throw unavailable;}).finally(()=>clearTimeout(timer));
}
async function status(){return storageBound((async()=>{
 const cache=await caches.open(CACHE),present=await Promise.all(URLS.map(async url=>!!await cache.match(url))),done=present.filter(Boolean).length;
 const ready=done===FILES.length&&await currentDocument(await cache.match(new URL('index.html',ROOT).href))&&await documentDependenciesCached(cache);
 return{version:EDITION,total:FILES.length,done,ready,downloading:!!downloadPromise};
})(),2000);}
async function previousComplete(){
 if(!previousCompletePromise)previousCompletePromise=storageBound((async()=>{
  const names=(await caches.keys()).filter(name=>name.startsWith('jianghu-single-player-')&&name!==CACHE).reverse();
  for(const name of names){
   const cache=await caches.open(name),marker=await cache.match(MARKER);if(!marker)continue;
   try{const data=await marker.json();if(!Array.isArray(data.urls)||!data.urls.length||data.urls.length>150)continue;
    if((await Promise.all(data.urls.map(url=>cache.match(url)))).every(Boolean)&&await documentDependenciesCached(cache))return{name,cache};
   }catch{}
  }
  return null;
 })()).catch(()=>null);
 return previousCompletePromise;
}
function post(data){for(const port of listeners){try{port.postMessage(data);}catch{listeners.delete(port);}}}
function explain(error){return error?.name==='QuotaExceededError'?'设备空间不足，请先导出存档，腾出空间后重试。':error?.name==='StorageUnavailableError'?'当前浏览器暂时无法使用离线空间，仍可联网游玩。':'尚有文件没有下载成功。保持联网后点重试，已经下载的内容会保留。';}
async function download(){
 const cache=await storageBound(caches.open(CACHE),2000),failed=[];let cursor=0;
 const initial=await status();post({kind:'progress',...initial,downloading:true});
 async function worker(){
  while(cursor<URLS.length){const index=cursor++,url=URLS[index],path=FILES[index];
   try{
    const existing=await cache.match(url);if(existing&&await valid(existing,url)&&(url!==new URL('index.html',ROOT).href||await currentDocument(existing)))continue;
    if(existing)await cache.delete(url);
    await fetchBound(new Request(url,{cache:'reload',credentials:'same-origin',redirect:'follow'}),60000,async response=>{
     if(!await valid(response,url)||(path==='index.html'&&!await currentDocument(response)))throw new Error('File unavailable or updating: '+path);
     await cache.put(url,response);
    });
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
  const navigation=request.mode==='navigate'||key===new URL('index.html',ROOT).href;let cache,cached;
  try{cache=await storageBound(caches.open(CACHE));cached=await storageBound(cache.match(key));}
  catch{return fetchBound(request,navigation?20000:40000);}
  const clientId=event.resultingClientId||event.clientId,selected=clientEditions.get(event.clientId);
  // An interrupted update must start the previous complete chapter as a whole.
  if(!navigation&&selected&&selected!==CACHE){const old=await(await caches.open(selected)).match(key);if(old)return old;}
  if(cached&&!navigation)return cached;
  async function fallback(){
   if(navigation&&!(await status()).ready){
    const previous=await previousComplete(),old=await previous?.cache.match(key);
    if(old){if(clientId)clientEditions.set(clientId,previous.name);return old;}
   }
   if(cached&&(!navigation||await documentDependenciesCached(cache))){if(navigation&&clientId)clientEditions.set(clientId,CACHE);return cached;}
   const previous=await previousComplete(),old=await previous?.cache.match(key);if(old)return old;
   return null;
  }
  try{
   const timeout=navigation?(cached||await previousComplete()?3500:20000):40000;
   const result=await fetchBound(request,timeout,async response=>{
    if(!await valid(response,key))return{response,accepted:false};
    const sameEdition=!navigation||await currentDocument(response);if(sameEdition)keepInBackground(event,cache,key,response.clone());
    return{response,accepted:true,sameEdition};
   });
   if(result.accepted){if(navigation&&clientId){if(result.sameEdition)clientEditions.set(clientId,CACHE);else clientEditions.delete(clientId);}return result.response;}
   return await fallback()||result.response;
  }catch(error){const saved=await fallback();if(saved)return saved;throw error;}
 })());
});
