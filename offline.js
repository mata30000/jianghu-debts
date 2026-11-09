/* Offline download is explicit; game saves never leave this browser. */
(()=>{
 'use strict';
 const $=id=>document.getElementById(id),panel=$('offline-panel'),button=$('offline-open'),downloadButton=$('offline-download');
 let registration=null,bootPromise=null,current={ready:false,done:0,total:0,downloading:false},opened=false,previousPaused=false,previousFocus=null;
 const supported='serviceWorker'in navigator&&window.isSecureContext;
 function update(data){
  current={...current,...data};
  const ready=!!current.ready,pending=!!current.downloading,total=current.total||1,done=current.done||0;
  $('offline-progress').max=total;$('offline-progress').value=done;
  $('offline-count').textContent=current.total?done+' / '+current.total+' 份内容':'';
  $('offline-state').textContent=ready?'离线版已备好':pending?'正在把江湖装进口袋…':current.done?'下载尚未完成':'下载后，可断网游玩';
  $('offline-message').textContent=data.message||(ready?'整章场景、人物与战斗内容已保存在此设备。':pending?'请保持联网。可关闭此面板继续游玩，进度会保留。':'无需 GPT 账号。先联网下载整章，再添加到主屏幕。');
  downloadButton.disabled=pending||!supported;downloadButton.textContent=pending?'正在下载…':ready?'检查离线内容':done?'继续下载 / 重试':'下载离线单机版';
  button.classList.toggle('offline-ready',ready);button.classList.toggle('offline-downloading',pending);
  button.title=ready?'单机版已下载，可离线游玩':'下载离线单机版';button.setAttribute('aria-label',button.title);
 }
 async function boot(){
  if(!supported){update({message:location.protocol==='file:'?'请先运行本地启动脚本，或用 Safari 打开云端试玩网址。':location.protocol==='http:'?'当前是局域网 HTTP 模式，可直接游玩。iPhone 离线安装需要 HTTPS，请从云端试玩地址下载。':'当前浏览器不支持离线安装。请用 iPhone 的 Safari 打开云端试玩网址。'});return null;}
  if(!bootPromise)bootPromise=navigator.serviceWorker.register('./sw.js',{scope:'./',updateViaCache:'none'}).then(async reg=>{registration=reg;await navigator.serviceWorker.ready;return reg;}).catch(()=>{bootPromise=null;update({message:'离线功能暂未载入。联网后点下载重试。'});return null;});
  return bootPromise;
 }
 async function command(type,onProgress){
  const reg=await boot();if(!reg)return null;
  const worker=reg.active||navigator.serviceWorker.controller||reg.waiting;if(!worker){update({message:'离线功能正在准备，请稍后重试。'});return null;}
  return new Promise(resolve=>{
   const channel=new MessageChannel();let timer;
   const finish=data=>{clearTimeout(timer);channel.port1.close();resolve(data);};
   const refreshTimeout=()=>{clearTimeout(timer);timer=setTimeout(()=>finish({kind:'error',ready:false,downloading:false,message:'下载暂时中断。保持联网后重试，已下载的内容会保留。'}),90000);};
   channel.port1.onmessage=event=>{const data=event.data||{};refreshTimeout();if(data.kind==='progress'){onProgress?.(data);return;}if(data.kind==='file-error'){onProgress?.({message:data.message});return;}finish(data);};
   refreshTimeout();worker.postMessage({type},[channel.port2]);
  });
 }
 async function refresh(){const result=await command('OFFLINE_STATUS');if(result)update(result);return result;}
 async function download(){if(current.downloading)return;update({downloading:true,message:'正在检查已下载的内容…'});const result=await command('OFFLINE_DOWNLOAD',update);if(result)update({...result,downloading:false});else update({downloading:false});return result;}
 function open(){
  if(opened)return;opened=true;previousFocus=document.activeElement;window.dispatchEvent(new Event('blur'));
  previousPaused=!!window.JianghuGame?.map?.paused;window.JianghuGame?.map?.setPaused(true);
  if(panel.showModal)panel.showModal();else panel.setAttribute('open','');
  document.body.classList.add('offline-panel-open');window.dispatchEvent(new CustomEvent('jianghu-offline-panel',{detail:{open:true}}));
  $('offline-close').focus();refresh();
 }
 function close(){
  if(!opened)return;opened=false;if(panel.close)panel.close();else panel.removeAttribute('open');
  document.body.classList.remove('offline-panel-open');
  const otherDialog=!document.getElementById('modal')?.hidden,conversation=window.JianghuGame?.getConversation?.();
  window.JianghuGame?.map?.setPaused(previousPaused||otherDialog||!!conversation);window.dispatchEvent(new CustomEvent('jianghu-offline-panel',{detail:{open:false}}));previousFocus?.focus?.();
 }
 button.addEventListener('click',open);$('offline-close').addEventListener('click',close);downloadButton.addEventListener('click',download);
 panel.addEventListener('cancel',event=>{event.preventDefault();close();});
 panel.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();close();}event.stopPropagation();});
 panel.addEventListener('keyup',event=>event.stopPropagation());
 window.addEventListener('online',()=>{if(!current.downloading)refresh();});
 window.addEventListener('offline',()=>{if(!current.ready)$('offline-message').textContent='当前已断网。完整下载后，整章才能离线游玩。';});
 if(navigator.serviceWorker)navigator.serviceWorker.addEventListener('controllerchange',()=>{const map=window.JianghuGame?.map;if(map?.getRequiredAssetKeys?.().some(key=>map.assetState[key]!=='ready'))map.loadAssets?.();if(!current.downloading)refresh();});
 window.JianghuOffline={download,status:refresh,open,close,getState:()=>({...current})};
 update({});boot().then(reg=>{if(reg)refresh();});
})();
