/* Painted battle presentation and turn-based rules for 江湖多情债. */
(() => {
  'use strict';
  const STYLES = `
  .rpg-battle.battle-painted{--ink:#3e382b;--paper:#e9dfc5;--wood:#8d7450;--red:#a64d39;position:relative;isolation:isolate;width:100%;overflow:hidden;border:1px solid #7d6c4d;border-radius:5px;background:var(--paper);color:var(--ink);font-family:inherit;box-shadow:0 20px 70px #17221866}
  .battle-painted .battle-header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:13px 22px!important;background:#ede4ce;border-bottom:1px solid #9d896455}
  .battle-painted .battle-header h2{margin:3px 0 0!important;padding:0!important;font:500 23px/1.3 serif!important;letter-spacing:3px;color:#423b2d}
  .battle-painted .battle-kicker{font-size:9px!important;letter-spacing:3px;color:#847358}
  .battle-painted .battle-round{text-align:right;font-size:12px;color:#786747;white-space:nowrap}
  .battle-painted .battle-round small{display:block;margin-top:4px;font-size:9px;color:#97876b;letter-spacing:1px}
  .battle-painted .battle-arena{height:326px!important;position:relative;overflow:hidden;isolation:isolate;background-color:#818b61;background-image:url('assets/battle-forest.png'),url('assets/world-forest.png');background-repeat:no-repeat;background-size:cover;background-position:center 12%;border-bottom:3px solid #87714c}
  .battle-painted .battle-arena.bandit{background-color:#b8a47a;background-image:url('assets/battle-village.png'),url('assets/world-town.png');background-position:center 12%}
  .battle-painted .battle-arena:before,.battle-painted .battle-arena:after{content:none!important}
  .battle-painted .battle-turns{position:absolute;left:15px;top:14px;display:flex;align-items:center;gap:7px;z-index:3;font-size:10px;color:#f5edcf;text-shadow:0 1px 2px #2c3228}
  .battle-painted .battle-turns span{display:flex;align-items:center;justify-content:center;gap:4px;min-width:32px;height:26px;border:1px solid #e6d7a63b;background:#3c4035b5;border-radius:2px;padding:0 7px}
  .battle-painted .battle-turns span.current{color:#fff2c5;border-color:#f1d99d;background:#655138df;box-shadow:0 0 0 2px #e7c78315}
  .battle-painted .battle-turns b{font-size:11px;font-weight:500}.battle-painted .battle-turns i{font-style:normal;opacity:.75}
  .battle-painted .battle-enemy-info{position:absolute;right:18px;top:14px;width:210px;z-index:3;color:#fff6db;text-shadow:0 1px 3px #293429;background:#333a2ec2;border:1px solid #c8ba8d66;border-radius:2px;padding:10px 12px 8px;box-sizing:border-box}
  .battle-painted .battle-enemy-title{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px;margin:0 0 7px;letter-spacing:1px}
  .battle-painted .battle-enemy-title small{font-size:9px;color:#d2c39d;letter-spacing:0;white-space:nowrap}
  .battle-painted .battle-hp-track{height:5px;overflow:hidden;background:#151e1877;border:1px solid #dec59566;border-radius:1px}
  .battle-painted .battle-hp-track i{display:block;height:100%;background:#c2955d;transition:width .3s}
  .battle-painted .battle-enemy-hp{display:block;margin-top:5px;text-align:right;color:#eadbb7;font-size:10px;font-variant-numeric:tabular-nums}
  .battle-painted .battle-party{position:absolute;left:9%;bottom:28px!important;display:flex;align-items:flex-end;gap:12px;z-index:2}
  .battle-painted .battle-hero{position:relative;width:114px;height:184px!important;transform:none;animation:none;transition:opacity .2s;will-change:transform}
  .battle-painted .battle-hero:first-child{margin-bottom:5px}
  .battle-painted .battle-hero.active:after{content:'';position:absolute;left:50%;bottom:-5px;width:42px;height:7px;margin-left:-21px;border:1px solid #f7d484b8;border-radius:50%;background:#e9d39138;box-shadow:0 0 8px #f4d5895c}
  .battle-painted .battle-hero.fallen{opacity:.38;transform:none!important;filter:grayscale(.65)}
  .battle-painted .battle-hero.striking{animation:painted-hero-strike .4s ease-out}
  .battle-painted .battle-hero.guarding canvas{filter:drop-shadow(0 0 7px #cce1b5aa) drop-shadow(0 3px 2px #1e241f44)}
  .battle-painted .battle-hero.taking-hit{animation:painted-hero-hit .36s ease-out}
  .battle-painted .battle-character-name{position:absolute;bottom:-16px;left:50%;transform:translateX(-50%);padding:1px 8px;background:#32382bc9;border:1px solid #d9c7995e;border-radius:2px;color:#f2e4c0;text-align:center;font-size:10px;line-height:16px;white-space:nowrap}
  .battle-painted .battle-hero.active .battle-character-name{color:#ffe5a8;border-color:#dbc283b0}
  .battle-painted .battle-enemy{position:absolute;right:12%;bottom:31px!important;width:218px;height:203px!important;z-index:2;transform:none;animation:none;transition:opacity .3s;will-change:transform}
  .battle-painted .battle-enemy.small-animal{width:104px;height:94px!important;right:19%}
  .battle-painted .battle-enemy.boar-chief{width:245px;height:219px!important;right:10%}
  .battle-painted .battle-enemy.hit{animation:painted-enemy-hit .38s ease-out;filter:brightness(1.12)}
  .battle-painted .battle-enemy.striking{animation:painted-enemy-strike .4s ease-out}
  .battle-painted .battle-enemy.dead{opacity:.25;filter:grayscale(.8);transform:none!important;animation:none}
  .battle-painted [data-battle-sprite]{width:100%;height:100%;display:block;object-fit:contain;object-position:center bottom;filter:drop-shadow(0 4px 2px #222a2244);transform:none!important}
  .battle-painted .battle-intent{position:absolute;top:99px;right:18px;z-index:3;max-width:210px;box-sizing:border-box;padding:6px 9px;color:#ffe7ab;background:#63482bcf;border:1px solid #c7a467bd;border-radius:2px;font-size:10px;line-height:1.5;letter-spacing:.5px;text-shadow:0 1px #443626}
  .battle-painted .battle-intent.poison{color:#e7edb8;background:#435c3cdb;border-color:#a4b17d}
  .battle-painted .battle-intent.rabbit{color:#f0e2bb;background:#6a6045d9;border-color:#c1ae7b}
  .battle-painted .battle-intent.rage{color:#f7d2b1;background:#7a4332dc;border-color:#d3a27a}
  .battle-painted .battle-float{position:absolute;right:25%;top:38%;z-index:4;pointer-events:none;color:#fff1c9;font:600 28px/1.2 serif;text-shadow:0 2px 2px #493828,1px 0 #493828,-1px 0 #493828;animation:painted-damage .65s ease-out forwards}
  .battle-painted .battle-allies{position:absolute;right:0;bottom:40px;display:flex;gap:0;z-index:1}
  .battle-painted .battle-minion{width:76px;height:120px;background:none;border:0;border-radius:0;padding:0;box-shadow:none;font-size:9px;text-align:center;color:#f3e5c6}
  .battle-painted .battle-minion:before{content:none}
  .battle-painted .battle-minion canvas{height:108px;object-fit:contain}
  .battle-painted .battle-stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0;padding:0!important;border-bottom:1px solid #b5a17a77;background:#e9dfc5}
  .battle-painted .battle-stats.solo{grid-template-columns:1fr}
  .battle-painted .battle-stat{min-width:0;padding:11px 20px!important;background:transparent;border:0;border-radius:0;border-left:1px solid #aa98713b;transition:background .15s}
  .battle-painted .battle-stat:first-child{border-left:0}.battle-painted .battle-stat.current{background:#f6edd7;box-shadow:inset 0 2px #ae8a4f}.battle-painted .battle-stat.poisoned{box-shadow:inset 0 2px #7d8d54}
  .battle-painted .battle-stat-head{display:flex;justify-content:space-between;align-items:center;gap:5px;margin-bottom:7px;font-size:12px;min-height:18px}
  .battle-painted .battle-stat-head strong{font:500 15px serif;letter-spacing:1px;white-space:nowrap}
  .battle-painted .battle-stat-head small{font-size:10px;color:#8d7850;white-space:nowrap}
  .battle-painted .battle-resource{display:grid;grid-template-columns:24px minmax(0,1fr) 45px;align-items:center;gap:7px;margin-top:5px;font-size:9px;color:#887a5d}
  .battle-painted .battle-bar{height:4px;overflow:hidden;background:#b7ac8d66;border-radius:0}
  .battle-painted .battle-bar i{display:block;height:100%;background:#71825a;transition:width .25s}
  .battle-painted .battle-bar.mp i{background:#799394}
  .battle-painted .battle-resource span:last-child{text-align:right;font-variant-numeric:tabular-nums}
  .battle-painted .battle-bottom{padding:12px 20px 15px!important;background:#f0e7d1}
  .battle-painted .battle-log{min-height:39px!important;padding:0 0 9px!important;font-size:12px!important;line-height:1.65;color:#8c7b5b;max-height:50px;overflow:hidden}
  .battle-painted .battle-log .latest{color:#554d39}
  .battle-painted .battle-controls{display:grid;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:8px!important}
  .battle-painted .battle-action{appearance:none;display:block;min-width:0;min-height:58px!important;margin:0;padding:10px 5px!important;border:1px solid #af9870;border-radius:2px;background:#f7eed9;color:#5e5239;box-shadow:inset 0 1px #fff8e8;cursor:pointer;font:inherit;touch-action:manipulation;transition:background .15s,border-color .15s}
  .battle-painted .battle-action strong{display:block;font-size:13px!important;font-weight:500;letter-spacing:1px;line-height:1.4}
  .battle-painted .battle-action small{display:block;font-size:9px!important;line-height:1.4;margin-top:3px;color:#9b8662}
  .battle-painted .battle-action.primary{background:#656c4c;border-color:#656c4c;color:#fff4d8;box-shadow:inset 0 1px #d7d5a947}
  .battle-painted .battle-action.primary small{color:#ded7b9}.battle-painted .battle-action:disabled{opacity:.42;cursor:default}.battle-painted .battle-action:hover:not(:disabled){transform:none;background:#e5d7b7;border-color:#8e7a53}.battle-painted .battle-action.primary:hover:not(:disabled){background:#78815b}
  .battle-painted .battle-action:focus-visible,.battle-painted .battle-result button:focus-visible{outline:3px solid #a88e57;outline-offset:2px}
  .battle-painted .battle-footer{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:9px!important;font-size:10px!important;line-height:1.4;color:#a08d68;letter-spacing:.5px}
  .battle-painted .battle-status{color:#756945}
  .battle-painted .battle-result{position:absolute;inset:0;z-index:10;background:#263026be;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(2px)}
  .battle-painted .battle-result-card{box-sizing:border-box;width:min(340px,100%);padding:28px!important;background:#efe5cc;border:1px solid #b69d70;border-radius:3px;box-shadow:0 15px 45px #151d1b50;text-align:center}
  .battle-painted .battle-result-eyebrow{display:block;color:#9b7e4f;letter-spacing:5px;font-size:11px;padding-bottom:13px;margin-bottom:16px;border-bottom:1px solid #b39b6e66}
  .battle-painted .battle-result h3{margin:0 0 12px;font:500 24px serif;letter-spacing:3px;color:#565a3c}
  .battle-painted .battle-result p{margin:0 0 15px;color:#8a7756;font-size:12px;line-height:1.9}
  .battle-painted .battle-reward{margin:16px 0 18px;padding:12px 5px;background:#e0d3b4;border-top:1px solid #b8a27966;border-bottom:1px solid #b8a27966;color:#76613f;font-size:12px;line-height:1.9;white-space:pre-line}
  .battle-painted .battle-reward small{font-size:10px;color:#96805a}
  .battle-painted .battle-result button{width:100%;min-height:46px!important;padding:11px 12px;border:1px solid #696f4b;border-radius:2px;background:#696f4b;color:#fff2d1;cursor:pointer;font:inherit;font-size:13px;letter-spacing:2px;touch-action:manipulation}
  .battle-painted .battle-result button+button{margin-top:9px;background:transparent;border-color:#b7a178;color:#7b7254}
  @keyframes painted-hero-strike{0%,100%{transform:translateX(0)}45%{transform:translateX(17px)}}
  @keyframes painted-enemy-strike{0%,100%{transform:translateX(0)}45%{transform:translateX(-16px)}}
  @keyframes painted-enemy-hit{0%,100%{transform:translateX(0)}25%{transform:translateX(6px)}65%{transform:translateX(2px)}}
  @keyframes painted-hero-hit{0%,100%{transform:translateX(0)}30%{transform:translateX(-5px)}65%{transform:translateX(-2px)}}
  @keyframes painted-damage{0%{opacity:0;transform:translateY(7px)}18%{opacity:1}100%{opacity:0;transform:translateY(-27px)}}
  @media(max-width:600px){
   .battle-painted .battle-header{padding:10px 13px!important}.battle-painted .battle-header h2{font-size:19px!important;letter-spacing:2px}.battle-painted .battle-kicker{font-size:8px!important;letter-spacing:2px}.battle-painted .battle-round{font-size:10px}.battle-painted .battle-round small{font-size:8px}
   .battle-painted .battle-arena{height:240px!important;background-position:center 20%}.battle-painted .battle-arena.bandit{background-position:center 20%}
   .battle-painted .battle-turns{left:10px;top:11px;gap:4px;font-size:9px}.battle-painted .battle-turns span{min-width:21px;height:23px;padding:0 5px;gap:3px}.battle-painted .battle-turns b{font-size:10px}
   .battle-painted .battle-enemy-info{right:10px;top:11px;width:158px;padding:8px 9px 6px}.battle-painted .battle-enemy-title{font-size:11px;letter-spacing:0;gap:4px;margin-bottom:6px}.battle-painted .battle-enemy-title small{font-size:8px}.battle-painted .battle-enemy-hp{font-size:9px}
   .battle-painted .battle-party{left:3%;bottom:26px!important;gap:0}.battle-painted .battle-hero{width:76px;height:132px!important}.battle-painted .battle-hero:first-child{margin-bottom:7px}.battle-painted .battle-character-name{font-size:9px;line-height:14px;bottom:-15px;padding:0 6px}
   .battle-painted .battle-enemy{width:145px;height:151px!important;right:8%;bottom:27px!important}.battle-painted .battle-enemy.small-animal{width:74px;height:72px!important;right:16%}.battle-painted .battle-enemy.boar-chief{width:165px;height:160px!important;right:4%}
   .battle-painted .battle-intent{top:91px;right:10px;max-width:168px;font-size:9px;padding:4px 7px}.battle-painted .battle-float{font-size:25px;right:23%;top:44%}.battle-painted .battle-allies{right:0;bottom:34px}.battle-painted .battle-minion{width:46px;height:84px}.battle-painted .battle-minion canvas{height:74px}
   .battle-painted .battle-stats{padding:0!important}.battle-painted .battle-stat{padding:9px 11px!important}.battle-painted .battle-stat-head{margin-bottom:5px;gap:3px}.battle-painted .battle-stat-head strong{font-size:13px}.battle-painted .battle-stat-head small{font-size:9px}.battle-painted .battle-resource{grid-template-columns:21px minmax(0,1fr) 40px;gap:5px;font-size:8px;margin-top:5px}
   .battle-painted .battle-bottom{padding:9px 11px 12px!important}.battle-painted .battle-log{min-height:37px!important;max-height:45px;font-size:11px!important;padding-bottom:7px!important;line-height:1.6}
   .battle-painted .battle-controls{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:7px!important}.battle-painted .battle-action{min-height:53px!important;padding:8px 4px!important}.battle-painted .battle-action strong{font-size:13px!important;letter-spacing:1px}.battle-painted .battle-action small{font-size:9px!important}.battle-painted .battle-footer{margin-top:7px!important;font-size:9px!important}
   .battle-painted .battle-result-card{padding:23px!important}.battle-painted .battle-result h3{font-size:21px}
  }
  @media(max-height:740px) and (max-width:600px){.battle-painted .battle-header{padding:8px 12px!important}.battle-painted .battle-arena{height:197px!important}.battle-painted .battle-party{bottom:23px!important}.battle-painted .battle-hero{width:68px;height:115px!important}.battle-painted .battle-enemy{height:125px!important;width:125px;bottom:24px!important}.battle-painted .battle-enemy.small-animal{height:64px!important;width:68px}.battle-painted .battle-enemy.boar-chief{height:137px!important;width:148px}.battle-painted .battle-enemy-info{top:9px}.battle-painted .battle-intent{top:85px}.battle-painted .battle-stat{padding:7px 10px!important}.battle-painted .battle-bottom{padding:8px 10px!important}.battle-painted .battle-action{min-height:48px!important}.battle-painted .battle-log{font-size:10px!important;min-height:33px!important;line-height:1.55}.battle-painted .battle-footer{margin-top:6px!important}}
  @media(max-height:500px) and (min-width:601px){.battle-painted .battle-header{padding:7px 16px!important}.battle-painted .battle-header h2{font-size:18px!important}.battle-painted .battle-kicker{display:none}.battle-painted .battle-arena{height:166px!important}.battle-painted .battle-hero{height:112px!important;width:72px}.battle-painted .battle-party{bottom:21px!important;left:15%;gap:7px}.battle-painted .battle-enemy{height:127px!important;width:139px;right:16%;bottom:19px!important}.battle-painted .battle-enemy.small-animal{width:78px;height:74px!important;right:20%}.battle-painted .battle-enemy.boar-chief{width:157px;height:137px!important}.battle-painted .battle-enemy-info{width:180px;top:8px;padding:6px 9px}.battle-painted .battle-enemy-title{font-size:11px;margin-bottom:4px}.battle-painted .battle-enemy-hp{margin-top:3px;font-size:8px}.battle-painted .battle-intent{top:77px;font-size:9px;padding:4px 7px}.battle-painted .battle-turns{top:8px}.battle-painted .battle-stat{padding:6px 16px!important}.battle-painted .battle-stat-head{margin-bottom:2px;min-height:15px}.battle-painted .battle-resource{margin-top:3px}.battle-painted .battle-stat-head strong{font-size:13px}.battle-painted .battle-bottom{padding:6px 16px 8px!important}.battle-painted .battle-log{min-height:19px!important;max-height:21px;padding:0 0 4px!important;font-size:10px!important}.battle-painted .battle-log div:not(.latest){display:none}.battle-painted .battle-action{min-height:45px!important;padding:5px!important}.battle-painted .battle-action strong{font-size:12px!important}.battle-painted .battle-action small{font-size:8px!important;margin-top:1px}.battle-painted .battle-footer{margin-top:4px!important;font-size:8px!important}.battle-painted .battle-result-card{padding:18px 25px!important}.battle-painted .battle-result-eyebrow{padding-bottom:8px;margin-bottom:9px}.battle-painted .battle-reward{margin:10px 0 12px;padding:7px}.battle-painted .battle-result p{margin-bottom:10px}}
  .battle-painted .battle-learned-skills{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px;margin-top:7px;padding-top:7px;border-top:1px solid #b5a17a55}
  .battle-painted .battle-learned-skills .battle-action{min-height:47px!important;background:#e5e4cd;border-color:#9c9c76}
  .battle-painted .battle-new-art{font-size:8px;margin-left:6px;padding:1px 3px;border:1px solid #aaa17a;color:#8a7755;font-weight:400}
  .battle-painted .battle-level{font:9px sans-serif;color:#9b865f;margin-left:4px;font-style:normal}
  .battle-painted .battle-arena.haunted{background-image:linear-gradient(#182d4699,#263a4f66),url('assets/battle-forest.png');background-color:#293e42}
  .battle-painted .battle-enemy.wisp{width:126px;height:136px!important;bottom:55px!important;right:16%}
  .battle-painted .battle-enemy.wisp:not(.striking):not(.hit):not(.dead){animation:painted-wisp-drift 2.8s ease-in-out infinite;filter:drop-shadow(0 0 11px #97e7ee80)}
  .battle-painted .battle-intent.ghost{color:#c9eeed;background:#2c4b5fdb;border-color:#85bbbd}
  @keyframes painted-wisp-drift{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
  @media(max-width:600px){.battle-painted .battle-learned-skills{grid-template-columns:repeat(2,minmax(0,1fr))}.battle-painted .battle-enemy.wisp{width:93px;height:105px!important;bottom:49px!important;right:14%}.battle-painted .battle-learned-skills .battle-action strong{font-size:12px!important}}
  @media(max-height:500px) and (min-width:601px){.battle-painted .battle-learned-skills{grid-template-columns:repeat(3,minmax(0,1fr));padding-top:4px;margin-top:4px}.battle-painted .battle-learned-skills .battle-action{min-height:42px!important}.battle-painted .battle-enemy.wisp{height:97px!important;width:97px;bottom:34px!important}}
  @media(prefers-reduced-motion:reduce){.battle-painted *{animation:none!important;transition:none!important}}
  `;

  // Atlas bounds are measured once, so painted figures keep their proportions and
  // stand on the same ground even when their source cells have different margins.
  const ART = Object.create(null);
  const ART_PROMISES = Object.create(null);
  const ATLAS = {
    people:{src:'assets/world-people.png',cols:4,rows:3},
    enemies:{src:'assets/world-enemies.png',cols:4,rows:2},
    wisp:{src:'assets/world-wisp.png',cols:1,rows:1}
  };
  const ENEMY_CELL = {rabbit:0,snake:1,wild:2,banditSmall:3,boar:4,bandit:5};
  function loadAtlas(key){
    if(ART_PROMISES[key])return ART_PROMISES[key];
    const spec=ATLAS[key];
    ART_PROMISES[key]=new Promise(resolve=>{
      if(typeof Image==='undefined'){resolve(null);return;}
      const picture=new Image();picture.decoding='async';
      picture.onload=()=>{
        const cells=[],cw=picture.naturalWidth/spec.cols,ch=picture.naturalHeight/spec.rows;
        let pixels=null;
        try{const probe=document.createElement('canvas');probe.width=picture.naturalWidth;probe.height=picture.naturalHeight;const ctx=probe.getContext('2d');if(ctx){ctx.drawImage(picture,0,0);pixels=ctx.getImageData(0,0,probe.width,probe.height).data;}}catch(_){/* Cell bounds still preserve the original painting. */}
        for(let n=0;n<spec.cols*spec.rows;n++){
          const ox=Math.round((n%spec.cols)*cw),oy=Math.round(Math.floor(n/spec.cols)*ch),ex=Math.round((n%spec.cols+1)*cw),ey=Math.round((Math.floor(n/spec.cols)+1)*ch);
          let left=ex,top=ey,right=ox,bottom=oy;
          if(pixels)for(let y=oy;y<ey;y+=2)for(let x=ox;x<ex;x+=2){if(pixels[(y*picture.naturalWidth+x)*4+3]>32){left=Math.min(left,x);top=Math.min(top,y);right=Math.max(right,x+2);bottom=Math.max(bottom,y+2);}}
          cells.push(pixels&&right>left?{x:Math.max(ox,left-2),y:Math.max(oy,top-2),w:Math.min(ex,right+2)-Math.max(ox,left-2),h:Math.min(ey,bottom+2)-Math.max(oy,top-2)}:{x:ox,y:oy,w:ex-ox,h:ey-oy});
        }
        ART[key]={picture,cells};resolve(ART[key]);
      };
      picture.onerror=()=>resolve(null);picture.src=spec.src;
    });
    return ART_PROMISES[key];
  }
  function paintSprite(canvas,key,index){
    const atlas=ART[key];if(!atlas)return;
    const cell=atlas.cells[index];if(!cell)return;
    let ctx;try{ctx=canvas.getContext('2d');}catch(_){return;}if(!ctx)return;
    const w=canvas.width,h=canvas.height,pad=6,scale=Math.min((w-pad*2)/cell.w,(h-pad*2)/cell.h),dw=cell.w*scale,dh=cell.h*scale;
    ctx.clearRect(0,0,w,h);ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';ctx.save();if(key==='enemies'||key==='wisp'){ctx.translate(w,0);ctx.scale(-1,1);}ctx.drawImage(atlas.picture,cell.x,cell.y,cell.w,cell.h,(w-dw)/2,h-pad-dh,dw,dh);ctx.restore();
  }
  function sprite(key,index,label,portrait=false){return `<canvas width="${portrait?300:384}" height="${portrait?420:384}" data-battle-sprite="${key}" data-cell="${index}" role="img" aria-label="${label}"></canvas>`;}
  const configs = {
    wild: {name:'林间野猪',label:'初试身手',max:45,atk:9,coins:18,xp:20,items:['野猪皮']},
    wisp: {name:'游荡鬼火',label:'破庙异火',max:48,atk:8,coins:14,xp:24,items:['幽灯灰']},
    snake: {name:'林间毒蛇',label:'野外遭遇',max:42,atk:7,coins:13,xp:18,items:['蛇胆']},
    rabbit: {name:'机敏野兔',label:'野外遭遇',max:30,atk:5,coins:8,xp:12,items:['止血草']},
    banditSmall: {name:'游荡山贼',label:'野外遭遇',max:65,atk:11,coins:23,xp:28,items:['止血草']},
    boar: {name:'野猪王',label:'可选首领',max:180,atk:14,coins:65,xp:80,items:['猪王獠牙','猪王皮','猎风护腕']},
    bandit: {name:'黑虎帮二当家',label:'第一章首领',max:260,atk:17,coins:120,xp:150,items:['黑虎令','武功残页']}
  };
  const growth=()=>window.JianghuProgression||{
    level:()=>1,stats:actor=>({level:1,maxHP:actor==='B'?88:100,maxMP:40,attackBonus:0,defenseBonus:0}),
    normalizeLearned:value=>Array.isArray(value)?value:[],
    skills:(_learned,actor)=>[{id:actor==='A'?'a_flurry':'b_breeze',name:actor==='A'?'掠影连击':'清风拂袖',actor,cost:actor==='A'?8:7,kind:'damage',power:actor==='A'?30:26,description:'运劲出招。'}]
  };
  class Battle {
    constructor(container, callbacks = {}) {
      this.container=container;this.onEnd=callbacks.onEnd||(()=>{});this.onChange=callbacks.onChange||(()=>{});this.timers=[];this.destroyed=false;
      Promise.all([loadAtlas('people'),loadAtlas('enemies'),loadAtlas('wisp')]).then(()=>{if(!this.destroyed)this.paintSprites();});
      if(!document.getElementById('rpg-battle-styles')) {const s=document.createElement('style');s.id='rpg-battle-styles';s.textContent=STYLES;document.head.appendChild(s);}
    }
    start(type='wild',party={}) {
      this.timers.forEach(clearTimeout);this.timers=[];this.destroyed=false;this.finished=false;this.type=configs[type]?type:'wild';this.cfg=configs[this.type];
      const progression=growth(),xp=Math.max(0,Number(party.xp)||0),a=progression.stats('A',xp),b=progression.stats('B',xp);
      const learnedSkills=progression.normalizeLearned(party.learnedSkills||[],{SKILL_SHADOW:party.shadowStep});
      this.retryParty={herbs:Math.max(0,Math.floor(party.herbs??3)),defenseBonus:Math.max(0,Number(party.defenseBonus)||0),shadowStep:!!party.shadowStep,hasB:party.hasB!==false,groundDrops:!!party.groundDrops,xp,learnedSkills};
      const hasB=this.retryParty.hasB;if(!hasB){this.retryParty.hpB=party.hpB??b.maxHP;this.retryParty.mpB=party.mpB??b.maxMP;}
      this.state={type:this.type,enemyHP:this.cfg.max,enemyMax:this.cfg.max,hpA:Math.max(1,Math.min(a.maxHP,party.hpA??a.maxHP)),hpB:Math.max(hasB?1:0,Math.min(b.maxHP,party.hpB??b.maxHP)),mpA:Math.max(0,Math.min(a.maxMP,party.mpA??a.maxMP)),mpB:Math.max(0,Math.min(b.maxMP,party.mpB??b.maxMP)),maxHPA:a.maxHP,maxHPB:b.maxHP,maxMPA:a.maxMP,maxMPB:b.maxMP,xp,level:a.level,learnedSkills,statsA:a,statsB:b,herbs:this.retryParty.herbs,defenseBonus:this.retryParty.defenseBonus,shadowStep:this.retryParty.shadowStep,hasB,groundDrops:this.retryParty.groundDrops,turn:0,round:1,busy:false,done:false,defendA:false,defendB:false,evadeA:false,evadeB:false,poisonA:0,poisonB:0,charging:false,allies:0,summoned:false,evaded:false,rabbitDodgeUsed:false,damage:'',log:[this.type==='bandit'?'黑虎帮二当家拦住去路。B悄悄收拢了折扇。':this.type==='wisp'?'一团幽蓝鬼火从断墙边浮起，冰冷的灯焰忽近忽远。':hasB?'林间动静骤起。两人稳住脚步，准备迎敌。':'A收住脚步，观察着眼前的对手。']};
      this.render();this.notify();return this;
    }
    later(fn,delay=400){const t=setTimeout(()=>{if(!this.destroyed)fn();},delay);this.timers.push(t);}
    notify(){this.onChange({hpA:this.state.hpA,hpB:this.state.hpB,mpA:this.state.mpA,mpB:this.state.mpB});}
    log(text){this.state.log.push(text);if(this.state.log.length>8)this.state.log.shift();}
    partyKeys(){return this.state.hasB?['A','B']:['A'];}
    availableSkills(actor){return growth().skills(this.state.learnedSkills,actor);}
    act(action,skillId){
      const s=this.state;if(!s||s.busy||s.done)return false;
      if(typeof action==='string'&&action.startsWith('skill:')){skillId=action.slice(6);action='skill';}
      if(!['attack','skill','defend','herb'].includes(action))return false;
      const key=s.turn===0?'A':'B';if((key==='B'&&!s.hasB)||s['hp'+key]<=0)return false;
      const known=this.availableSkills(key),skill=action==='skill'?known.find(v=>v.id===(skillId||known[0]?.id)):null;
      if(action==='skill'&&!skill)return false;
      if(skill&&s['mp'+key]<skill.cost){this.log('内力不足，换一招试试。');this.render();return false;}
      if(action==='herb'&&s.herbs<=0){this.log('草药已经用完了。');this.render();return false;}
      if(action==='skill'&&skill.kind==='evade'){
        s['mp'+key]-=skill.cost;s['evade'+key]=true;this.log(`${key}施展「${skill.name}」，脚下轻灵，将闪避下一次敌方攻击。`);
      }else if(action==='attack'||action==='skill'){
        let damage;const bonus=s['stats'+key].attackBonus;
        if(skill){
          damage=skill.power+Math.floor(bonus*1.2)+(key==='A'&&s.shadowStep?3:0);s['mp'+key]-=skill.cost;
          this.log(`${key}使出「${skill.name}」，造成 ${damage} 点伤害。`);
          if(skill.kind==='sweep'&&s.allies>0){s.allies--;this.log('回旋扇风扫开一名帮众，对方不敢再近身。');}
          if(skill.kind==='heavy'&&s.charging){s.charging=false;this.log('掌劲震散冲势，野猪王的蓄力被打断了！');}
        }else{
          damage=18+Math.floor(Math.random()*10)+bonus+(key==='A'&&s.shadowStep?3:0);
          if(this.type==='rabbit'&&s.round%3===1&&!s.rabbitDodgeUsed){damage=Math.max(1,Math.ceil(damage/2));s.rabbitDodgeUsed=true;this.log(`野兔侧跳卸去半数力道，${key}仍造成 ${damage} 点伤害。`);}else this.log(`${key}抓住空隙，造成 ${damage} 点伤害。`);
        }
        s.enemyHP=Math.max(0,s.enemyHP-damage);s.damage='−'+damage;
      }else if(action==='defend'){s['defend'+key]=true;this.log(`${key}稳住身形，下次受到的伤害减半。`);}else{
        s.herbs--;const target=!s.hasB||s.hpA/s.maxHPA<=s.hpB/s.maxHPB?'A':'B',max=s['maxHP'+target],old=s['hp'+target];s['hp'+target]=Math.min(max,old+40);const poisoned=s.poisonA>0||s.poisonB>0;s.poisonA=0;s.poisonB=0;this.log(`${key}替${target}敷上草药，恢复 ${s['hp'+target]-old} 点气血${poisoned?'，并清除了蛇毒':''}。`);
      }
      s.visualAction=action;s.visualActor=key;s.visualTarget='';
      this.notify();if(s.enemyHP<=0){this.win();return true;}
      s.busy=true;this.render();this.later(()=>{s.damage='';s.visualAction='';if(s.hasB&&s.turn===0&&s.hpB>0){s.turn=1;s.busy=false;this.render();}else this.enemyTurn();});return true;
    }
    enemyTurn(){
      const s=this.state;if(s.done)return;let attack=this.cfg.atk,target=!s.hasB?'A':this.type==='bandit'&&s.summoned?'B':(s.round%2?'A':'B');if(s['hp'+target]<=0)target=target==='A'?'B':'A';
      if(this.type==='bandit'&&!s.summoned&&s.enemyHP<=s.enemyMax*.65){s.summoned=true;s.allies=2;this.log('二当家一声呼哨，两名帮众赶来助阵！');}
      if(this.type==='bandit'&&s.hasB&&s.summoned&&!s.evaded&&target==='B'){
        s.evaded=true;attack=3;this.log('「这块玉……」刀锋转向B。他足下一错，竟掠出数尺。');
      }else if(s.charging){attack=32;s.charging=false;this.log('野猪王猛然冲撞！此时防御能挡住大半冲力。');}
      else if(this.type==='boar'&&s.enemyHP<90&&s.round%2===0){s.charging=true;attack=0;this.log('野猪王刨着地面蓄力。下一回合将发动冲撞！');}
      else if(this.type==='wisp'){this.log(`鬼火曳出一线冷焰，袭向${target}！`);}
      else if(this.type==='snake'){this.log(`毒蛇疾咬，攻击${target}！`);}
      else if(this.type==='rabbit'){this.log(`野兔蹬地回身，撞向${target}！`);}
      else this.log(`${this.cfg.name}${this.type==='boar'&&s.enemyHP<54?'陷入狂暴，':'扑上前来，'}攻击${target}！`);
      if(this.type==='banditSmall'&&s.round===1)this.log('山贼佯装退后，突然挥刀抢道！');
      if(this.type==='boar'&&s.enemyHP<54&&attack>0)attack+=4;
      attack+=s.allies*2;if(s['defend'+target]){attack=Math.ceil(attack/2);s['defend'+target]=false;}
      const avoided=attack>0&&s['evade'+target];
      if(avoided){s['evade'+target]=false;attack=0;this.log(`${target}踏影错步，闪开了这次攻击。`);}
      if(attack>0){attack=Math.max(1,attack-s.defenseBonus-s['stats'+target].defenseBonus);s['hp'+target]=Math.max(0,s['hp'+target]-attack);this.log(`${target}受到 ${attack} 点伤害。`);}
      if(this.type==='wisp'&&attack>0&&s['hp'+target]>0&&s.round%2===1){const drained=Math.min(4,s['mp'+target]);s['mp'+target]-=drained;this.log(`幽焰令${target}气息一滞，内力减少 ${drained} 点。`);}
      if(this.type==='snake'&&!avoided&&s['hp'+target]>0&&s.round%3===1){s['poison'+target]=3;this.log(`${target}中了蛇毒。草药可一并清除蛇毒。`);}
      for(const key of this.partyKeys())if(s['poison'+key]>0&&s['hp'+key]>0){s['poison'+key]--;s['hp'+key]=Math.max(0,s['hp'+key]-3);this.log(`${key}受到3点蛇毒伤害。`);}
      s.visualAction=attack>0?'enemy':'';s.visualTarget=target;
      this.notify();this.render();if(s.hpA<=0&&(!s.hasB||s.hpB<=0)){this.later(()=>this.lose());return;}
      this.later(()=>{s.visualAction='';s.visualTarget='';s.turn=s.hpA>0?0:1;s.round++;s.rabbitDodgeUsed=false;s.busy=false;this.render();});
    }
    win(){this.state.done=true;this.state.busy=false;this.state.poisonA=0;this.state.poisonB=0;this.log(this.state.hasB?'尘埃落定。两个人都还好好站着。':'尘埃落定。A拂去衣上的尘土。');this.notify();this.render();this.later(()=>this.result(true),500);}
    lose(){this.state.done=true;this.state.busy=false;this.state.poisonA=0;this.state.poisonB=0;this.render();this.result(false);}
    reward(){return{coins:this.cfg.coins,xp:this.cfg.xp,items:[...this.cfg.items]};}
    finish(won){if(this.finished)return;this.finished=true;this.onEnd({won,type:this.type,reward:won?this.reward():{coins:0,xp:0,items:[]}});}
    result(won){
      const s=this.state,r=this.reward(),layer=document.createElement('div');layer.className='battle-result';layer.innerHTML=`<div class="battle-result-card"><span class="battle-result-eyebrow">${won?'交锋已定':'江湖再会'}</span><h3>${won?(s.hasB?'并肩同行':'初露锋芒'):'暂避锋芒'}</h3><p>${won?(s.hasB?'A：「还行，没给我丢人。」<br>B：「这句话，该本公子说才对。」':'A：「这点小场面，还难不倒我。」'):'胜败乃兵家常事。歇一口气，再来。'}</p>${won?`<div class="battle-reward">铜钱 ${r.coins} 文　·　经验 ${r.xp}<br>${r.items.join(' · ')}${s.groundDrops?'<br><small>经验立即结算；钱物留在交锋处，返回地图拾取。</small>':''}</div>`:''}<button data-result="${won?'claim':'retry'}">${won?(s.groundDrops?'返回地图拾取':'收下战利品'):'重整旗鼓 · 重新挑战'}</button>${won?'':'<button data-result="leave">回到地图</button>'}</div>`;
      const battle=this.container.querySelector('.rpg-battle');if(!battle)return;battle.appendChild(layer);layer.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{if(b.dataset.result==='retry'){this.finished=false;this.start(this.type,{...this.retryParty});}else this.finish(won);}));layer.querySelector('button').focus();
    }
    paintSprites(){
      if(!this.state||this.destroyed)return;
      this.container.querySelectorAll('[data-battle-sprite]').forEach(canvas=>paintSprite(canvas,canvas.dataset.battleSprite,Number(canvas.dataset.cell)));
    }
    render(){
      const s=this.state,c=this.cfg;if(!s)return;const current=s.turn===0?'A':'B',known=this.availableSkills(current),baseSkill=known[0],mps=baseSkill.cost,keys=this.partyKeys(),enemyMoving=s.visualAction==='enemy';
      const learnedButtons=known.slice(1).map(v=>`<button class="battle-action learned" data-action="skill:${v.id}" ${s.busy||s.done||s['mp'+current]<v.cost?'disabled':''}><strong>${v.name}<span class="battle-new-art">秘籍</span></strong><small>内力 ${v.cost} · ${v.kind==='evade'?'闪避下次攻击':v.kind==='sweep'?'击退帮众':v.kind==='heavy'?'重击 · 打断蓄力':'运劲出招'}</small></button>`).join('');
      const intent=this.type==='wisp'?'<div class="battle-intent ghost">幽焰 · 隔回合灼去少量内力</div>':s.charging?'<div class="battle-intent">蓄力冲撞 · 下一回合留意防御</div>':this.type==='snake'?'<div class="battle-intent poison">毒牙 · 草药可清除蛇毒</div>':this.type==='rabbit'&&s.round%3===1&&!s.rabbitDodgeUsed?'<div class="battle-intent rabbit">侧跳闪避 · 用招式寻找破绽</div>':this.type==='boar'&&s.enemyHP<54?'<div class="battle-intent rage">狂暴 · 冲势愈发凶猛</div>':'';
      const enemyClass=(this.type==='rabbit'||this.type==='snake'?' small-animal':'')+(this.type==='boar'?' boar-chief':'')+(this.type==='wisp'?' wisp':'');
      const actorName=k=>k==='A'?'A · 掠影':'B · 清风';
      const hero=k=>`<div class="battle-hero ${current===k&&!s.busy&&!s.done?'active':''} ${s['hp'+k]<=0?'fallen':''} ${s.visualAction&&s.visualAction!=='enemy'&&s.visualActor===k&&(s.visualAction==='attack'||s.visualAction==='skill')?'striking':''} ${s['defend'+k]?'guarding':''} ${enemyMoving&&s.visualTarget===k?'taking-hit':''}">${sprite('people',k==='A'?0:1,k==='A'?'A，灰褐色江湖行装':'B，黑红色长袍与折扇',true)}<span class="battle-character-name">${k}${s['evade'+k]?' · 影':s['defend'+k]?' · 守':s['poison'+k]?' · 毒':''}</span></div>`;
      this.container.innerHTML=`<section class="rpg-battle battle-painted" aria-label="回合制战斗"><header class="battle-header"><div><div class="battle-kicker">${s.hasB?'江 湖 同 行':'江 湖 初 行'}</div><h2 id="modal-title">${c.name}</h2></div><div class="battle-round">第 ${s.round} 回合<small>${c.label}</small></div></header><div class="battle-arena ${this.type==='bandit'||this.type==='banditSmall'?'bandit':this.type==='wisp'?'haunted':''}"><div class="battle-turns" aria-label="行动顺序：${s.hasB?'A、B、敌方':'A、敌方'}">${keys.map(k=>`<span class="${current===k&&!s.busy&&!s.done?'current':''}"><b>${k}</b></span><i>›</i>`).join('')}<span class="${enemyMoving?'current':''}">敌方</span></div><div class="battle-party">${keys.map(hero).join('')}</div><div class="battle-enemy-info"><div class="battle-enemy-title">${c.name}<small>${s.enemyHP<=0?'已退败':s.allies?'帮众助阵':''}</small></div><div class="battle-hp-track"><i style="width:${s.enemyHP/s.enemyMax*100}%"></i></div><span class="battle-enemy-hp">气血 ${s.enemyHP} / ${s.enemyMax}</span></div><div class="battle-enemy${enemyClass} ${s.damage?'hit':''} ${enemyMoving?'striking':''} ${s.enemyHP<=0?'dead':''}">${sprite(this.type==='wisp'?'wisp':'enemies',this.type==='wisp'?0:ENEMY_CELL[this.type],c.name)}</div>${s.damage?`<div class="battle-float" aria-hidden="true">${s.damage}</div>`:''}${intent}${s.allies?`<div class="battle-allies" aria-label="${s.allies}名黑虎帮众">${Array.from({length:s.allies}).map(()=>`<div class="battle-minion">${sprite('enemies',3,'黑虎帮众',true)}<span>帮众</span></div>`).join('')}</div>`:''}</div><div class="battle-stats ${s.hasB?'':'solo'}">${keys.map(k=>`<div class="battle-stat ${current===k&&!s.busy&&!s.done?'current':''} ${s['poison'+k]?'poisoned':''}"><div class="battle-stat-head"><strong>${actorName(k)} <em class="battle-level">Lv.${s.level}</em></strong><small>${s['hp'+k]<=0?'暂时倒下':s['poison'+k]?'蛇毒 · '+s['poison'+k]+'回合':s['evade'+k]?'踏影护身':s['defend'+k]?'守势':current===k&&!s.busy&&!s.done?'正在行动':''}</small></div><div class="battle-resource"><span>气血</span><div class="battle-bar"><i style="width:${s['hp'+k]/s['maxHP'+k]*100}%"></i></div><span>${s['hp'+k]}/${s['maxHP'+k]}</span></div><div class="battle-resource"><span>内力</span><div class="battle-bar mp"><i style="width:${s['mp'+k]/s['maxMP'+k]*100}%"></i></div><span>${s['mp'+k]}/${s['maxMP'+k]}</span></div></div>`).join('')}</div><div class="battle-bottom"><div class="battle-log" aria-live="polite">${s.log.slice(-2).map((l,i,a)=>`<div class="${i===a.length-1?'latest':''}">${l}</div>`).join('')}</div><div class="battle-controls"><button class="battle-action primary" data-action="attack" ${s.busy||s.done?'disabled':''}><strong>普通攻击</strong><small>稳扎稳打</small></button><button class="battle-action" data-action="skill" ${s.busy||s.done||s['mp'+current]<mps?'disabled':''}><strong>${baseSkill.name}</strong><small>耗费 ${mps} 点内力</small></button><button class="battle-action" data-action="defend" ${s.busy||s.done?'disabled':''}><strong>凝神防御</strong><small>化解下次冲击</small></button><button class="battle-action" data-action="herb" ${s.busy||s.done||s.herbs<=0?'disabled':''}><strong>敷用草药</strong><small>恢复 · 解毒　余 ${s.herbs}</small></button></div>${learnedButtons?'<div class="battle-learned-skills" aria-label="已习得的秘籍招式">'+learnedButtons+'</div>':''}<div class="battle-footer"><span>${s.hasB?'你来我往 · 并肩迎敌':'凝神定气 · 见招拆招'}</span><span class="battle-status">${s.done?'交锋已定':s.busy?'招式交锋中…':'轮到 '+current+' · 选择招式'}</span></div></div></section>`;
      this.container.querySelectorAll('[data-action]').forEach(b=>b.addEventListener('click',()=>this.act(b.dataset.action)));
      this.paintSprites();
    }
    destroy(){this.destroyed=true;this.timers.forEach(clearTimeout);this.timers=[];this.container.innerHTML='';}
  }
  window.Battle=Battle;
})();
