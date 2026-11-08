/* Persistent exploration objects. Rendering and battle UI stay in their own modules. */
(function(){
  'use strict';
  const HERB_COUNTS={town:2,forest:5,temple:3,outskirts:6,riverwoods:6,hilltrail:7,oldcave:2};
  const HOSTILE=new Set(['forest','temple','outskirts','riverwoods','hilltrail']);
  const KNOWN_SCENES=new Set(['town','forest','temple','heyang','outskirts','riverwoods','hilltrail','oldcave','inn','home','store','pawnroom','flowerroom','templehall','watersidehut','forestcave']);
  const SPECIES={
    wisp:{name:'游荡鬼火',kind:'wisp',battleType:'wisp'},
    wildboar:{name:'林间野猪',kind:'wildboar',battleType:'wild'},
    snake:{name:'毒蛇',kind:'snake',battleType:'snake'},
    bandit:{name:'游荡山贼',kind:'bandit',battleType:'banditSmall'},
    rabbit:{name:'野兔',kind:'rabbit',battleType:'rabbit'}
  };
  const POOLS={forest:['wildboar','wildboar','snake','rabbit'],temple:['wisp','wisp','wisp','snake'],outskirts:['rabbit','rabbit','wildboar','snake'],riverwoods:['snake','wildboar','bandit','rabbit'],hilltrail:['rabbit','snake','wildboar','bandit']};
  const ITEM_ALIASES={'草药':'herb','止血草':'herb','解毒散':'antidote','蛇胆':'snake_gall','硬木':'wood','野猪皮':'boar_hide','猪王獠牙':'tusk','猪王皮':'king_hide','猎风护腕':'wristguard','山行护腕':'wristguard','武功残页':'manual','热馒头':'bun','馒头':'bun','桂花酿':'wine','黑虎令':'黑虎令','幽灯灰':'spirit_ash'};
  const VALID_ITEMS=new Set(['herb','antidote','snake_gall','wood','boar_hide','tusk','king_hide','wristguard','manual','bun','wine','spirit_ash','黑虎令']);
  const copy=value=>JSON.parse(JSON.stringify(value));
  const num=(value,fallback=0,max=1e15)=>typeof value==='number'&&Number.isFinite(value)&&value>=0&&value<=max?value:fallback;
  const point=value=>value&&Number.isFinite(value.x)&&Number.isFinite(value.y)&&value.x>=0&&value.y>=0&&value.x<10000&&value.y<10000?{x:value.x,y:value.y}:null;
  const safeId=value=>typeof value==='string'&&/^world:[a-zA-Z0-9:_-]{1,100}$/.test(value)?value:null;
  function rewardOf(raw){
    const reward={coins:Math.floor(num(raw?.coins,0,1000000)),xp:Math.floor(num(raw?.xp,0,1000000)),items:{}};
    const add=(name,count=1)=>{const id=ITEM_ALIASES[name]||name,n=Math.floor(num(count,0,999));if(VALID_ITEMS.has(id)&&n>0)reward.items[id]=(reward.items[id]||0)+n;};
    if(Array.isArray(raw?.items))for(const item of raw.items){if(typeof item==='string')add(item);else if(item&&typeof item==='object')add(item.id||item.name,item.count??1);}
    else if(raw?.items&&typeof raw.items==='object')for(const [id,count]of Object.entries(raw.items))add(id,count);
    return reward;
  }
  function readState(raw){
    const state={version:1,sequence:Math.floor(num(raw?.sequence,0,1e9)),scenes:{}};
    if(raw?.version!==1||!raw.scenes||typeof raw.scenes!=='object')return state;
    const seen=new Set();
    for(const [scene,value]of Object.entries(raw.scenes)){
      if(!KNOWN_SCENES.has(scene)||!value||typeof value!=='object')continue;
      const data={wispIntroduced:!!value.wispIntroduced,initialized:!!value.initialized,herbsInitialized:!!value.herbsInitialized,cap:Math.max(2,Math.min(4,Math.floor(num(value.cap,3,4)))),nextSpawnAt:num(value.nextSpawnAt),herbs:[],monsters:[],drops:[]};
      const take=(item,type)=>{const p=point(item),id=safeId(item?.id);if(!p||!id||seen.has(id))return null;seen.add(id);const serial=Number(id.split(':').pop());if(Number.isInteger(serial))state.sequence=Math.max(state.sequence,serial);return{id,...p,scene,type};};
      if(Array.isArray(value.herbs))for(const item of value.herbs.slice(0,20)){const entity=take(item,'gather');if(entity)data.herbs.push({...entity,kind:'herb',name:'止血草',collected:!!item.collected,amount:Math.max(1,Math.min(2,Math.floor(num(item.amount,1,2))))});}
      if(HOSTILE.has(scene)&&Array.isArray(value.monsters))for(const item of value.monsters.slice(0,data.cap)){const entity=take(item,'monster'),species=SPECIES[item?.kind];if(entity&&species)data.monsters.push({...entity,...species});}
      if(Array.isArray(value.drops))for(const item of value.drops.slice(0,60)){const entity=take(item,'drop');if(entity)data.drops.push({...entity,kind:'bag',name:'战利品',reward:rewardOf(item.reward),collected:!!item.collected});}
      state.scenes[scene]=data;
    }
    return state;
  }
  class JianghuWorld{
    constructor({saved,now,random}={}){
      this.now=typeof now==='function'?now:()=>Date.now();this.random=typeof random==='function'?random:Math.random;
      this.state=readState(saved);this.scene=null;this.map=null;this.points=new Map();
    }
    rand(){const v=Number(this.random());return Number.isFinite(v)?Math.max(0,Math.min(.999999999,v)):0;}
    time(){return num(this.now(),Date.now());}
    delay(){return 45000+Math.floor(this.rand()*30001);}
    sceneState(scene){
      if(!this.state.scenes[scene])this.state.scenes[scene]={initialized:false,herbsInitialized:false,cap:3,nextSpawnAt:0,herbs:[],monsters:[],drops:[]};
      return this.state.scenes[scene];
    }
    setScene(scene,map){
      if(!KNOWN_SCENES.has(scene)||!map)return false;
      this.scene=scene;this.map=map;this.points.delete(scene);const data=this.sceneState(scene);
      this.cachePoints(scene,map);
      if(!data.herbsInitialized){this.placeHerbs(data,scene);data.herbsInitialized=true;}
      if(!data.initialized){data.initialized=true;data.cap=HOSTILE.has(scene)?2+Math.floor(this.rand()*3):2;if(HOSTILE.has(scene)){this.spawnMonster(data,scene,scene==='temple'?'wisp':null);this.spawnMonster(data,scene);}data.nextSpawnAt=this.time()+this.delay();}
      if(scene==='temple'&&!data.wispIntroduced){if(!data.monsters.some(m=>m.kind==='wisp')){const old=data.monsters[0];if(old)Object.assign(old,SPECIES.wisp);else this.spawnMonster(data,scene,'wisp');}data.wispIntroduced=true;}
      // Village streets and all occupied rooms remain safe, even if an imported save disagrees.
      if(!HOSTILE.has(scene))data.monsters=[];
      return true;
    }
    cachePoints(scene,map){
      const spots=(map.hotspots||[]).filter(h=>h&&typeof h.id==='string'&&!h.id.startsWith('world:')&&Number.isFinite(h.x)&&Number.isFinite(h.y));
      const fromGrid=()=>{const nav=map.getWalkableGrid?.();if(!nav?.cells||!nav.tile)return[];const points=[];for(let row=0;row<nav.cells.length;row+=3)for(let col=0;col<nav.cells[row].length;col+=3){if(!nav.cells[row][col])continue;const p={x:(col+.5)*nav.tile,y:(row+.5)*nav.tile};if(!map.isWalkable||map.isWalkable(p.x,p.y))points.push(p);}return points;};
      const fallback=fromGrid();
      const get=kind=>{
        let raw=map.getSpawnPoints?.(kind);if(!Array.isArray(raw)||!raw.length)raw=fallback;
        const seen=new Set();return raw.map(point).filter(p=>{if(!p||map.isWalkable&&!map.isWalkable(p.x,p.y))return false;const key=Math.round(p.x)+','+Math.round(p.y);if(seen.has(key))return false;seen.add(key);return!spots.some(h=>Math.hypot(h.x-p.x,h.y-p.y)<160);});
      };
      this.points.set(scene,{gather:get('gather'),monster:get('monster')});
    }
    legalPoint(p){return!!p&&(!this.map?.isWalkable||this.map.isWalkable(p.x,p.y));}
    pickPosition(scene,kind,occupied=[]){
      const source=this.points.get(scene)?.[kind]||[],player=this.map?.getPlayer?.(),candidates=[];
      for(const p of source){if(kind==='monster'&&player&&Math.hypot(p.x-player.x,p.y-player.y)<250)continue;if(occupied.some(q=>Math.hypot(q.x-p.x,q.y-p.y)<(kind==='gather'?185:180)))continue;candidates.push(p);}
      if(!candidates.length)return null;
      const start=Math.floor(this.rand()*candidates.length);
      for(let i=0;i<candidates.length;i++){const p=candidates[(start+i)%candidates.length];if(this.legalPoint(p)){if(player&&typeof this.map?.findPath==='function'&&!this.map.findPath(player,p).length)continue;return{...p};}}
      return null;
    }
    placeHerbs(data,scene){
      const count=HERB_COUNTS[scene]||0;
      for(let i=0;i<count;i++){const p=this.pickPosition(scene,'gather',data.herbs);if(!p)break;data.herbs.push({id:'world:herb:'+scene+':'+i,type:'gather',kind:'herb',name:'止血草',scene,...p,collected:false,amount:1});}
    }
    spawnMonster(data,scene,forcedKind=null){
      if(!HOSTILE.has(scene)||data.monsters.length>=data.cap)return null;
      const occupied=[...data.monsters,...data.herbs.filter(h=>!h.collected),...data.drops.filter(d=>!d.collected)];
      const p=this.pickPosition(scene,'monster',occupied);if(!p)return null;
      const pool=POOLS[scene],species=SPECIES[forcedKind||pool[Math.floor(this.rand()*pool.length)]];
      const entity={id:'world:monster:'+scene+':'+(++this.state.sequence),type:'monster',scene,...species,...p};data.monsters.push(entity);return entity;
    }
    syncPositions(){
      if(!this.scene||!this.map?.getEntityPosition)return;
      const data=this.sceneState(this.scene);
      for(const entity of data.monsters){const p=point(this.map.getEntityPosition(entity.id));if(this.legalPoint(p)){entity.x=p.x;entity.y=p.y;}}
    }
    update({paused=false}={}){
      if(paused||!this.scene||!this.map)return false;
      this.syncPositions();const data=this.sceneState(this.scene),now=this.time();
      if(!HOSTILE.has(this.scene)||now<data.nextSpawnAt)return false;
      const entity=this.spawnMonster(data,this.scene);data.nextSpawnAt=now+this.delay();return!!entity;
    }
    entities(scene=this.scene){
      const data=this.state.scenes[scene];if(!data)return[];
      return copy([...data.herbs.filter(h=>!h.collected),...data.monsters,...data.drops.filter(d=>!d.collected)]);
    }
    find(id,key){if(!safeId(id))return null;for(const [scene,data]of Object.entries(this.state.scenes)){const index=data[key].findIndex(entity=>entity.id===id);if(index>=0)return{scene,data,index,entity:data[key][index]};}return null;}
    getMonster(id){const found=this.find(id,'monsters');if(!found)return null;if(found.scene===this.scene)this.syncPositions();return copy(found.entity);}
    collect(id){
      const herb=this.find(id,'herbs');
      if(herb){if(herb.entity.collected)return null;herb.entity.collected=true;return{id,scene:herb.scene,type:'gather',kind:'herb',coins:0,xp:0,items:{herb:herb.entity.amount}};}
      const drop=this.find(id,'drops');
      if(!drop||drop.entity.collected)return null;drop.entity.collected=true;return{id,scene:drop.scene,type:'drop',kind:'drop',...copy(drop.entity.reward)};
    }
    defeat(id,reward,position){
      const monster=this.getMonster(id),found=this.find(id,'monsters');if(!monster||!found)return null;
      found.data.monsters.splice(found.index,1);
      const defeatedAt=point(position),dropPoint=defeatedAt&&(found.scene!==this.scene||this.legalPoint(defeatedAt))?defeatedAt:monster;
      const drop={id:'world:drop:'+found.scene+':'+(++this.state.sequence),scene:found.scene,type:'drop',kind:'bag',name:'战利品',x:dropPoint.x,y:dropPoint.y,reward:rewardOf(reward),collected:false};
      found.data.drops.push(drop);if(found.data.drops.length>60)found.data.drops=found.data.drops.filter(d=>!d.collected).slice(-60);
      // A defeat starts its own replacement delay; repeatedly revisiting cannot refill it immediately.
      found.data.nextSpawnAt=this.time()+this.delay();return copy(drop);
    }
    export(){this.syncPositions();return copy(this.state);}
  }
  window.JianghuWorld=JianghuWorld;
})();
