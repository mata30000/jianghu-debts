/* The chicken chase uses the same authored world and walking sprites as exploration. */
(function(){
'use strict';
const W=600,H=500,images=new Map(),clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
function ready(img){return img&&img.complete!==false&&(img.naturalWidth||img.width)>0;}
function load(name,shared){
 if(ready(shared))return shared;
 if(images.has(name))return images.get(name);
 const img=new Image();images.set(name,img);img.decoding='async';let fallback=false;img.onerror=()=>{if(!fallback){fallback=true;img.src='assets/'+name+'.png';}};img.src='assets/'+name+'.webp';return img;
}
function ellipse(c,x,y,rx,ry,color){c.fillStyle=color;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fill();}
function round(c,x,y,w,h,r,fill,stroke){c.beginPath();c.moveTo(x+r,y);c.lineTo(x+w-r,y);c.quadraticCurveTo(x+w,y,x+w,y+r);c.lineTo(x+w,y+h-r);c.quadraticCurveTo(x+w,y+h,x+w-r,y+h);c.lineTo(x+r,y+h);c.quadraticCurveTo(x,y+h,x,y+h-r);c.lineTo(x,y+r);c.quadraticCurveTo(x,y,x+r,y);c.closePath();if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.stroke();}}
function chicken(c,x,y,t,scale=1){c.save();c.translate(x,y);c.scale(scale,scale);c.rotate(Math.sin(t*10)*.055);ellipse(c,0,1,21,9,'#3f2e1a37');ellipse(c,0,-13,22,16,'#aa7139');ellipse(c,-5,-16,14,12,'#dcab60');ellipse(c,14,-28,9,10,'#c39652');c.fillStyle='#9b382c';c.beginPath();c.moveTo(9,-36);c.lineTo(11,-43);c.lineTo(16,-38);c.lineTo(20,-42);c.lineTo(21,-33);c.fill();c.fillStyle='#e0b659';c.beginPath();c.moveTo(20,-30);c.lineTo(29,-26);c.lineTo(19,-25);c.fill();ellipse(c,17,-30,1.5,1.8,'#28251c');c.fillStyle='#414e38';c.beginPath();c.moveTo(-17,-17);c.quadraticCurveTo(-37,-37,-31,-9);c.quadraticCurveTo(-25,-27,-17,-17);c.fill();c.strokeStyle='#79542e';c.lineWidth=2;c.beginPath();c.moveTo(-6,-2);c.lineTo(-7,6);c.moveTo(5,-2);c.lineTo(6,6);c.stroke();c.restore();}
function fallbackHero(c,x,y,t){const run=Math.sin(t*15);c.save();c.translate(x,y);ellipse(c,0,2,27,9,'#33281945');c.strokeStyle='#3a3328';c.lineWidth=15;c.lineCap='round';c.beginPath();c.moveTo(-9,-32);c.lineTo(-12+run*8,-7);c.moveTo(9,-32);c.lineTo(12-run*8,-7);c.stroke();c.fillStyle='#535146';c.beginPath();c.moveTo(-17,-67);c.lineTo(15,-68);c.lineTo(23,-31);c.lineTo(-23,-30);c.fill();c.fillStyle='#98674b';c.fillRect(-21,-40,44,7);c.beginPath();c.moveTo(14,-40);c.lineTo(30,-17);c.lineTo(16,-24);c.fill();ellipse(c,0,-82,22,25,'#e0ba87');c.fillStyle='#302c24';c.beginPath();c.moveTo(-24,-82);c.quadraticCurveTo(-29,-119,6,-110);c.quadraticCurveTo(33,-103,22,-74);c.lineTo(14,-94);c.lineTo(6,-88);c.lineTo(6,-99);c.lineTo(-16,-81);c.fill();ellipse(c,7,-111,14,11,'#302c24');c.fillStyle='#e7bd8b';c.beginPath();c.moveTo(-15,-68);c.lineTo(-29,-47+run*3);c.lineTo(-19,-40);c.lineTo(-3,-62);c.moveTo(16,-67);c.lineTo(28,-51-run*3);c.lineTo(18,-45);c.lineTo(4,-61);c.fill();c.fillStyle='#302c24';c.fillRect(-12,-84,5,3);c.fillRect(8,-84,5,3);c.strokeStyle='#98674b';c.lineWidth=2;c.beginPath();c.arc(0,-76,8,.2,Math.PI-.2);c.stroke();c.restore();}
function woodBox(c,x,y,scale){c.save();c.translate(x,y);c.scale(scale,scale);ellipse(c,0,5,43,12,'#31251b45');const top=c.createLinearGradient(0,-60,0,0);top.addColorStop(0,'#ad8b55');top.addColorStop(1,'#755330');c.lineWidth=2;c.strokeStyle='#483a26';c.fillStyle='#5f452b';c.beginPath();c.moveTo(31,-51);c.lineTo(43,-63);c.lineTo(43,-9);c.lineTo(31,3);c.closePath();c.fill();c.stroke();c.fillStyle='#b3945e';c.beginPath();c.moveTo(-35,-54);c.lineTo(-24,-67);c.lineTo(43,-63);c.lineTo(31,-51);c.closePath();c.fill();c.stroke();round(c,-35,-54,66,57,2,top,'#4d3b26');c.strokeStyle='#65482c';c.lineWidth=1.6;for(let yy=-40;yy<-1;yy+=13){c.beginPath();c.moveTo(-31,yy);c.lineTo(27,yy+2);c.stroke();}c.strokeStyle='#c2a16b';c.lineWidth=6;c.beginPath();c.moveTo(-28,-47);c.lineTo(24,-3);c.moveTo(-28,-2);c.lineTo(24,-46);c.stroke();c.strokeStyle='#5c472d';c.lineWidth=1.4;c.strokeRect(-30,-49,56,47);for(const xx of[-27,24])for(const yy of[-46,-4])ellipse(c,xx,yy,1.5,1.5,'#443b2b');c.restore();}
function basket(c,x,y,scale){c.save();c.translate(x,y);c.scale(scale,scale);ellipse(c,0,3,43,11,'#31251b45');c.strokeStyle='#5f4b2b';c.lineWidth=2;c.fillStyle='#9c7c43';c.beginPath();c.moveTo(-37,-31);c.quadraticCurveTo(-33,2,0,2);c.quadraticCurveTo(33,2,37,-31);c.fill();c.stroke();c.strokeStyle='#c1a36c';for(let yy=-22;yy<1;yy+=6){c.beginPath();c.moveTo(-33,yy);c.quadraticCurveTo(0,yy+10,33,yy);c.stroke();}for(let xx=-24;xx<=24;xx+=10){c.beginPath();c.moveTo(xx,-31);c.lineTo(xx*.72,0);c.stroke();}ellipse(c,0,-31,38,11,'#574d2e');for(let i=0;i<8;i++){const xx=Math.sin(i*3.2)*25,yy=-35+Math.cos(i*2.4)*8;ellipse(c,xx,yy,10,8,i%3===0?'#aeb875':i%3===1?'#748e4a':'#cf9951');c.strokeStyle='#53633c';c.beginPath();c.moveTo(xx,yy-5);c.lineTo(xx+2,yy-13);c.stroke();}c.strokeStyle='#c3a26a';c.lineWidth=4;c.beginPath();c.ellipse(0,-29,38,12,0,0,Math.PI*2);c.stroke();c.restore();}
function start({arena,progress,onCollision=()=>{},onComplete=()=>{}}){
 if(!arena)throw new Error('Chase arena is required');
 arena.replaceChildren();arena.classList.add('chase-scene');
 const canvas=document.createElement('canvas');canvas.className='chase-canvas';canvas.width=W*2;canvas.height=H*2;canvas.setAttribute('aria-label','A抱着公鸡沿青石镇街道奔跑。轻点左右换道，躲过木箱和菜筐。');arena.append(canvas);
 const c=canvas.getContext('2d');c.scale(2,2);c.imageSmoothingEnabled=true;
 const map=window.JianghuGame?.map,shared=map?.assets||{},town=load('world-town',shared.town),walk=load('walk-a',shared.walkA),people=load('world-people',shared.people);
 let alive=true,last=performance.now(),elapsed=0,frame=0,lane=1,runnerX=300,hits=0,nextSpawn=.8,obstacles=[],lastDust=0,flash=0,downX=0,swiped=false;
 const lanes=[177,300,423];
 function move(delta){if(alive)lane=clamp(lane+delta,0,2);}
 const key=e=>{if(['ArrowLeft','a','A'].includes(e.key)){e.preventDefault();move(-1);}else if(['ArrowRight','d','D'].includes(e.key)){e.preventDefault();move(1);}};
 const pointerDown=e=>{e.preventDefault();downX=e.clientX;swiped=false;try{canvas.setPointerCapture(e.pointerId);}catch{}};
 const pointerUp=e=>{e.preventDefault();if(Math.abs(e.clientX-downX)>18){move(e.clientX>downX?1:-1);swiped=true;}if(!swiped){const rect=canvas.getBoundingClientRect();move(e.clientX<rect.left+rect.width/2?-1:1);}};
 document.addEventListener('keydown',key);canvas.addEventListener('pointerdown',pointerDown);canvas.addEventListener('pointerup',pointerUp);
 function backdrop(t){
  c.fillStyle='#b6a077';c.fillRect(0,0,W,H);
  if(ready(town)){const shift=Math.sin(t*.23)*11;c.drawImage(town,180,160,1050,850,-17,shift-58,635,565);}
  // The center is actual empty road texture, fully opaque over the scenery.
  // Side buildings remain scenery; crates only occupy the broad earth street.
  c.save();c.beginPath();c.moveTo(105,0);c.lineTo(493,0);c.lineTo(508,230);c.lineTo(493,H);c.lineTo(94,H);c.lineTo(83,255);c.closePath();c.clip();c.fillStyle='#c3ac7f';c.fillRect(75,0,445,H);
  if(ready(town)){const scroll=(t*95)%280;for(let y=-280;y<H+280;y+=280)c.drawImage(town,420,680,260,200,75,y+scroll,445,280);}
  else{for(let i=0;i<55;i++){const xx=95+(Math.sin(i*31.7)+1)*200,yy=((i*47.3+t*95)%580)-40;c.fillStyle=i%3?'#a48b6228':'#ede0b12a';c.beginPath();c.ellipse(xx,yy,14+i%11,3+i%3,-.2,0,Math.PI*2);c.fill();}}
  c.restore();
  const left=c.createLinearGradient(72,0,118,0);left.addColorStop(0,'#c8b18800');left.addColorStop(1,'#c8b188');c.fillStyle=left;c.fillRect(72,0,46,H);
  const right=c.createLinearGradient(480,0,525,0);right.addColorStop(0,'#c8b188');right.addColorStop(1,'#c8b18800');c.fillStyle=right;c.fillRect(480,0,45,H);
  const shade=c.createLinearGradient(0,0,W,0);shade.addColorStop(0,'#19302044');shade.addColorStop(.16,'#19302000');shade.addColorStop(.84,'#19302000');shade.addColorStop(1,'#19302044');c.fillStyle=shade;c.fillRect(0,0,W,H);

 }
 function hero(t){const bob=Math.abs(Math.sin(t*15))*2;ellipse(c,runnerX,418,31,10,'#3a30274d');if(ready(walk)){const cw=(walk.naturalWidth||walk.width)/4,ch=(walk.naturalHeight||walk.height)/4,f=Math.floor(t*9)%4;const bounds=map?.walkBounds?.walkA,b=bounds?.frames?.[f],scale=134/(bounds?.maxHeight||ch*.94),center=b?(b.left+b.right)/2:cw*.5,bottom=b?.bottom||ch*.98;c.drawImage(walk,f*cw,0,cw,ch,runnerX-center*scale,418-bottom*scale-bob,cw*scale,ch*scale);}else fallbackHero(c,runnerX,414-bob,t);
  // The rescued rooster stays visibly tucked against A instead of vanishing.
  if(ready(people)){const cw=(people.naturalWidth||people.width)/4,ch=(people.naturalHeight||people.height)/3;c.save();c.translate(runnerX+24,366-bob);c.rotate(-.18);c.drawImage(people,2*cw,2*ch,cw,ch,-21,-34,52,52);c.restore();}else chicken(c,runnerX+25,370-bob,t,.72);
 }
 function draw(t,dt){backdrop(t);const before=obstacles.filter(o=>o.y<413),after=obstacles.filter(o=>o.y>=413);for(const o of before){const scale=.56+o.y/H*.56;(o.kind?basket:woodBox)(c,lanes[o.lane],o.y,scale);}hero(t);for(const o of after)(o.kind?basket:woodBox)(c,lanes[o.lane],o.y,.56+o.y/H*.56);
  // Small warm dust puffs make running legible at phone size.
  if(t-lastDust>.08)lastDust=t;for(let i=0;i<4;i++){const age=(t*3+i*.25)%1;ellipse(c,runnerX+(i%2?1:-1)*(10+age*19),423+age*27,6+age*7,2+age*3,`rgba(230,211,166,${.24*(1-age)})`);}
  if(flash>0){flash-=dt;c.fillStyle=`rgba(157,76,38,${Math.max(0,flash)*.18})`;c.fillRect(0,0,W,H);}
  const vignette=c.createLinearGradient(0,0,0,H);vignette.addColorStop(0,'#23352155');vignette.addColorStop(.19,'#23352100');vignette.addColorStop(.85,'#332a1a00');vignette.addColorStop(1,'#332a1a45');c.fillStyle=vignette;c.fillRect(0,0,W,H);
 }
 function tick(now){if(!alive)return;const dt=document.hidden?0:Math.min(.05,Math.max(0,(now-last)/1000));last=now;elapsed+=dt;runnerX+=(lanes[lane]-runnerX)*Math.min(1,dt*14);if(elapsed>=nextSpawn&&elapsed<9.6){obstacles.push({lane:Math.floor(Math.random()*3),kind:Math.random()>.55,y:-30,hit:false});nextSpawn+=1.22;}for(const o of obstacles){o.y+=dt*147;if(!o.hit&&o.y>375&&o.y<430&&Math.abs(lanes[o.lane]-runnerX)<50){o.hit=true;hits++;flash=.7;onCollision({hits,kind:o.kind?'basket':'crate'});}}obstacles=obstacles.filter(o=>o.y<565);draw(elapsed,dt);if(progress){progress.style.width=Math.max(0,100-elapsed/12*100)+'%';progress.setAttribute('aria-valuenow',String(Math.ceil(Math.max(0,12-elapsed))));}if(elapsed>=12){cleanup();onComplete({hits});return;}frame=requestAnimationFrame(tick);}
 function cleanup(){if(!alive)return;alive=false;cancelAnimationFrame(frame);document.removeEventListener('keydown',key);canvas.removeEventListener('pointerdown',pointerDown);canvas.removeEventListener('pointerup',pointerUp);}
 cleanup.move=move;cleanup.getState=()=>({hits,lane,elapsed,alive});draw(0,0);frame=requestAnimationFrame(tick);return cleanup;
}
window.JianghuChase={start};
})();
