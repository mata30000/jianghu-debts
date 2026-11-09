/* Original RPG exploration engine: art-backed worlds, road navigation, and searchable rooms. */
(function(){
'use strict';
const T=20,RADIUS=8;
const MAP_FONT='"PingFang SC","Noto Sans SC","Noto Sans CJK SC","Microsoft YaHei",sans-serif';
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
const SCENES={
 town:{name:'青石镇',width:2400,height:1600,spawn:{x:850,y:1380},asset:'town'},
 forest:{name:'野猪林',width:2400,height:1600,spawn:{x:850,y:1380},asset:'forest'},
 heyang:{name:'河阳镇',width:2400,height:1600,spawn:{x:850,y:1380},asset:'heyang'},
 temple:{name:'荒山破庙',width:2400,height:1600,spawn:{x:850,y:1380},asset:'temple'},
 outskirts:{name:'镇东田埂',width:2400,height:1600,spawn:{x:850,y:1380},asset:'outskirts'},
 riverwoods:{name:'林中河岸',width:2400,height:1600,spawn:{x:850,y:1380},asset:'riverwoods'},
 hilltrail:{name:'青岚山径',width:2400,height:1600,spawn:{x:710,y:1420},asset:'hilltrail'},
 forestcave:{name:'野猪林 · 藏玉洞',width:1200,height:800,spawn:{x:600,y:690},indoor:true,cave:true,outdoor:'forest',asset:'forestcave',returnPos:{x:1800,y:365}},
 inn:{name:'悦来客栈 · 客房',width:1200,height:800,spawn:{x:600,y:670},indoor:true,outdoor:'town',atlas:0,returnPos:{x:500,y:590}},
 home:{name:'民居 · 内室',width:1200,height:800,spawn:{x:600,y:670},indoor:true,outdoor:'town',atlas:1,returnPos:{x:1660,y:495}},
 store:{name:'杂货铺 · 内堂',width:1200,height:800,spawn:{x:600,y:670},indoor:true,outdoor:'town',atlas:2,returnPos:{x:1110,y:1050}},
 pawnroom:{name:'周记当铺 · 内堂',width:1200,height:800,spawn:{x:600,y:670},indoor:true,outdoor:'heyang',atlas:3,returnPos:{x:470,y:505}},
 flowerroom:{name:'醉花楼 · 雅间',width:1200,height:800,spawn:{x:600,y:670},indoor:true,outdoor:'heyang',atlas:4,returnPos:{x:1810,y:490}},
 templehall:{name:'山神庙 · 正殿',width:1200,height:800,spawn:{x:600,y:670},indoor:true,outdoor:'temple',atlas:5,returnPos:{x:1070,y:805}},
 oldcave:{name:'山神旧窟',width:1200,height:800,spawn:{x:600,y:670},indoor:true,outdoor:'riverwoods',atlas:5,returnPos:{x:1800,y:365}},
 watersidehut:{name:'山溪猎户小屋',width:1200,height:800,spawn:{x:600,y:670},indoor:true,outdoor:'hilltrail',atlas:1,returnPos:{x:1185,y:910}}
};
const door=(id,name,x,y,target,outdoor)=>({id,name,x,y,type:'door',target,returnOutdoor:outdoor,returnPos:{x,y:y+40}});
const SPOTS={
 town:[{id:'chicken',name:'大公鸡',type:'story',x:1050,y:1100},{id:'kid',name:'豆子',type:'npc',x:850,y:1130},{id:'aunt',name:'王大娘',type:'npc',x:980,y:1200},{id:'cart',name:'陈车夫',type:'story',x:2240,y:1180},door('door:inn','悦来客栈',500,550,'inn','town'),door('door:home','民居',1660,455,'home','town'),door('door:store','杂货铺',1110,1010,'store','town'),door('door:east','河东人家',2280,1000,'home','town')],
 forest:[{id:'boar',name:'野猪王',type:'battle',x:1580,y:1150},{id:'herb',name:'止血草',type:'gather',x:1140,y:970},{id:'cave',name:'进入藏玉洞',type:'door',target:'forestcave',returnOutdoor:'forest',returnPos:{x:1800,y:365},x:1800,y:325},{id:'hunter',name:'林猎户',type:'npc',x:470,y:440}],
 heyang:[{id:'pawnshop',name:'周掌柜',type:'story',x:560,y:540},{id:'flower',name:'阿绫',type:'story',x:1770,y:530},{id:'fair',name:'庙会摊主',type:'npc',kind:'cart',x:500,y:1060},{id:'thief',name:'灰衣人',type:'npc',x:1580,y:1200},door('door:pawnroom','周记当铺',470,465,'pawnroom','heyang'),door('door:flowerroom','醉花楼',1810,450,'flowerroom','heyang'),door('door:heyangstore','茶铺',1110,930,'store','heyang')],
 temple:[
 {id:'fire',name:'篝火',type:'anchor',anchorOnly:true,x:1080,y:1260},
 {id:'mechanism',name:'旧机关',type:'anchor',anchorOnly:true,x:365,y:590},
 {id:'cellar',name:'地窖',type:'anchor',anchorOnly:true,x:1710,y:925},
 {id:'rest',name:'草席',type:'anchor',anchorOnly:true,x:1500,y:1230},
 {id:'camp:window',name:'修补窗户',type:'camp',action:'window',x:930,y:825},
 {id:'camp:debris',name:'清理阶前杂物',type:'camp',action:'debris',x:820,y:900},
 {id:'camp:firewood',name:'拾取干柴',type:'camp',action:'firewood',x:365,y:660},
 {id:'camp:fire',name:'照看篝火',type:'camp',action:'fire',x:1080,y:1260},
 {id:'camp:medicine',name:'煎制药汤',type:'camp',action:'medicine',x:1280,y:1250},
 {id:'camp:mechanism',name:'调查旧机关',type:'camp',action:'mechanism',x:1630,y:980},
 {id:'camp:rest',name:'草席休息',type:'camp',action:'rest',x:1500,y:1230},
 door('door:templehall','山神庙',1070,765,'templehall','temple')
]
};
const areaExit=(id,name,x,y,target,returnPos)=>({id,name,x,y,type:'exit-area',target,returnPos});
SPOTS.town.push(areaExit('exit:outskirts','前往镇东田埂',700,1460,'outskirts',{x:850,y:1380}));
SPOTS.forest.push(areaExit('exit:riverwoods','前往林中河岸',850,1470,'riverwoods',{x:850,y:1380}));
SPOTS.town.push({...areaExit('exit:forest','前往野猪林',850,100,'forest',{x:850,y:1380}),unlock:3});
SPOTS.forest.push(areaExit('exit:town','返回青石镇',650,1460,'town',{x:850,y:140}),{...areaExit('exit:heyang','前往河阳镇',850,100,'heyang',{x:850,y:1380}),unlock:4});
SPOTS.heyang.push(areaExit('exit:forest','返回野猪林',650,1480,'forest',{x:850,y:140}),{...areaExit('exit:temple','前往荒山破庙',850,100,'temple',{x:850,y:1380}),unlock:5});
SPOTS.temple.push(areaExit('exit:heyang','返回河阳镇',650,1480,'heyang',{x:850,y:140}));
SPOTS.outskirts=[areaExit('exit:town','返回青石镇',850,1480,'town',{x:700,y:1420}),door('door:fieldhome','田间农舍',1315,945,'home','outskirts')];
SPOTS.riverwoods=[areaExit('exit:forest','返回野猪林',850,1480,'forest',{x:850,y:1430}),door('door:oldcave','进入山神旧窟',1800,325,'oldcave','riverwoods')];
SPOTS.outskirts.push(areaExit('exit:hilltrail','通往青岚山径',850,100,'hilltrail',{x:710,y:1420}));
SPOTS.riverwoods.push(areaExit('exit:hilltrail','循山路向西',1120,1030,'hilltrail',{x:2180,y:1120}));
SPOTS.hilltrail=[areaExit('exit:outskirts','返回镇东田埂',650,1520,'outskirts',{x:850,y:150}),areaExit('exit:riverwoods','沿溪前往林中河岸',2320,1130,'riverwoods',{x:1120,y:1050}),door('door:watersidehut','猎户小屋',1185,875,'watersidehut','hilltrail'),...(window.OUTDOOR_SEARCH_LAYOUTS?.hilltrail||[])];
// Search silhouettes belong to the furniture art, never to a map badge. Keeping
// the old container IDs lets existing saves retain their already-searched state.
const ROOM_SEARCH_LAYOUTS=window.ROOM_SEARCH_LAYOUTS||{};
for(const [id,s]of Object.entries(SCENES))if(s.indoor)SPOTS[id]=[
 ...(ROOM_SEARCH_LAYOUTS[id]||[]).map(h=>({...h,concealed:true})),
 {id:'exit:'+id,name:'离开房间',type:'exit',target:s.outdoor,returnOutdoor:s.outdoor,returnPos:{...s.returnPos},x:600,y:740}
];
SPOTS.forestcave=[
 {id:'cave:open',name:'洞口木箱',type:'chest',x:295,y:580,bounds:[219,434,145,113]},
 {id:'cave:sealed',name:'玄纹封匣',type:'chest',locked:true,x:890,y:283,bounds:[812,121,153,102]},
 {id:'exit:forestcave',name:'返回野猪林',type:'exit',target:'forest',returnOutdoor:'forest',returnPos:{x:1800,y:365},x:600,y:740}
];
// Navigation is traced against each illustration. Coordinates below use its 1200×800
// composition, then scale to the larger world; trees, roofs, water and furniture stay solid.
const WORLD_GEOMETRY={
 town:{paths:[
  [[365,0],[500,0],[510,150],[470,225],[590,245],[710,230],[850,230],[922,247],[910,310],[845,335],[850,460],[901,500],[925,545],[920,630],[840,660],[710,665],[610,648],[510,680],[510,730],[465,800],[295,800],[290,745],[315,685],[270,665],[250,613],[172,580],[188,540],[275,517],[300,450],[290,377],[320,326],[340,290],[350,240],[390,188]],
  [[150,303],[330,278],[382,260],[420,300],[367,355],[280,365],[210,350],[152,350]],
  [[1025,520],[1080,510],[1105,490],[1188,492],[1200,540],[1200,620],[1145,652],[1085,640],[1050,603],[1020,592]],
  [[445,495],[580,488],[660,520],[850,513],[925,545],[920,650],[850,679],[665,666],[540,662],[480,690],[350,685],[275,650],[235,580],[270,520]]
 ],blocks:[
  [[0,105],[230,28],[355,120],[365,235],[315,272],[190,314],[40,333],[0,287]],
  [[705,50],[827,18],[938,90],[940,214],[875,241],[727,243],[675,211],[682,145]],
  [[440,326],[570,250],[815,350],[825,480],[772,504],[690,546],[530,506],[452,465]],
  [[1055,369],[1136,307],[1200,350],[1200,487],[1155,500],[1070,484]],
  [[0,474],[92,424],[178,470],[188,552],[246,581],[248,667],[126,711],[0,655]],
  [[620,750],[745,684],[884,757],[910,800],[600,800]],
  [[556,606],[565,593],[587,592],[607,604],[611,636],[591,647],[563,636]]
 ],water:[[982,0],[1060,0],[1040,130],[1016,220],[1014,355],[1018,440],[1045,549],[1042,609],[1070,710],[1123,800],[1058,800],[1015,710],[958,617],[918,559],[921,460],[940,337],[955,224],[978,102]],bridge:[[922,552],[1040,552],[1040,597],[922,597]]},
 forest:{paths:[
  [[351,0],[500,0],[489,101],[465,183],[480,226],[569,239],[693,220],[805,211],[850,185],[880,151],[916,145],[942,173],[902,216],[870,254],[852,317],[872,382],[868,437],[912,465],[958,482],[985,510],[971,552],[915,568],[901,619],[914,679],[873,728],[821,724],[770,690],[700,677],[650,680],[575,716],[487,752],[438,800],[283,800],[290,724],[339,664],[335,607],[285,570],[242,539],[170,532],[145,509],[210,476],[303,478],[344,443],[349,368],[321,305],[300,270],[215,265],[140,240],[135,210],[188,196],[260,210],[317,224],[351,188],[362,132]],
  [[1059,484],[1121,474],[1200,466],[1200,550],[1153,576],[1080,564],[1055,541]],
  [[414,509],[531,471],[651,475],[758,481],[845,480],[915,508],[910,615],[859,653],[773,652],[679,643],[583,682],[479,711],[420,660]]
 ],blocks:[
  [[130,145],[188,64],[253,111],[278,195],[242,213],[170,214]],
  [[475,268],[601,263],[699,287],[775,325],[763,400],[710,445],[599,460],[507,428],[467,363]],
  [[75,572],[145,548],[222,578],[253,654],[222,685],[137,695],[74,657]],
  [[455,748],[550,711],[614,730],[633,800],[450,800]]
 ],water:[[1081,0],[1164,0],[1125,130],[1093,220],[1068,330],[1074,440],[1099,596],[1127,710],[1169,800],[1060,800],[1040,701],[1006,610],[967,514],[968,421],[994,309],[1021,207],[1050,110]],bridge:[[970,495],[1082,495],[1082,540],[970,540]]},
 heyang:{paths:[
  [[348,0],[478,0],[488,101],[473,173],[481,215],[590,229],[681,218],[736,215],[769,217],[849,222],[932,223],[976,247],[978,294],[923,314],[864,325],[844,363],[844,450],[907,493],[981,516],[1010,545],[1000,597],[929,627],[888,646],[860,670],[779,674],[711,661],[640,660],[560,672],[485,697],[463,744],[467,800],[291,800],[301,748],[326,674],[281,652],[251,602],[213,563],[190,526],[226,489],[285,489],[324,452],[332,389],[313,334],[327,293],[305,269],[214,277],[159,260],[163,229],[246,223],[307,222],[350,182],[359,101]],
  [[1038,538],[1120,520],[1200,495],[1200,576],[1158,610],[1082,617],[1040,588]],
  [[375,504],[500,481],[616,496],[745,504],[906,502],[990,535],[980,624],[899,648],[812,668],[728,664],[648,660],[556,684],[471,707],[379,656],[321,598],[310,551]]
 ],blocks:[
  [[0,109],[222,26],[349,129],[349,229],[302,250],[176,264],[64,291],[0,268]],
  [[511,0],[794,0],[798,71],[707,109],[558,72]],
  [[741,111],[918,58],[1027,143],[1027,211],[974,244],[861,251],[753,211]],
  [[432,315],[569,248],[748,337],[759,451],[690,484],[591,508],[441,457]],
  [[0,380],[85,343],[172,390],[187,472],[239,482],[246,520],[127,530],[0,478]],
  [[0,709],[85,654],[149,701],[232,713],[236,781],[139,800],[0,800]],
  [[635,760],[796,691],[904,754],[919,800],[605,800]],
  [[575,695],[588,680],[611,680],[629,693],[629,724],[605,740],[579,724]]
 ],water:[[1046,0],[1130,0],[1102,118],[1084,228],[1093,329],[1063,443],[1103,560],[1094,647],[1123,723],[1180,800],[1069,800],[1040,731],[1012,654],[987,564],[1006,452],[1029,339],[1021,228],[1030,106]],bridge:[[985,535],[1124,535],[1124,588],[985,588]]},
 temple:{paths:[
  [[270,0],[405,0],[431,75],[420,155],[411,217],[381,252],[330,263],[282,264],[245,287],[239,341],[250,397],[300,424],[373,431],[461,426],[518,404],[582,403],[653,435],[727,423],[783,390],[804,327],[807,276],[836,246],[888,220],[941,196],[977,170],[1020,160],[1027,203],[1002,241],[954,266],[923,312],[900,369],[899,431],[945,461],[972,504],[1000,538],[998,593],[970,634],[930,666],[848,682],[768,667],[682,662],[610,671],[547,697],[507,740],[459,800],[287,800],[292,745],[323,677],[280,650],[231,628],[186,593],[154,550],[137,504],[135,452],[155,401],[154,352],[147,320],[114,315],[110,276],[159,260],[188,234],[236,229],[275,179],[286,117]],
  [[1030,540],[1100,526],[1200,497],[1200,570],[1159,600],[1085,610],[1037,590]],
  [[350,492],[458,433],[545,409],[650,442],[744,457],[837,463],[921,497],[979,542],[975,614],[901,651],[815,665],[735,659],[648,652],[563,680],[480,710],[382,657],[300,590],[275,549]]
 ],blocks:[
  [[403,164],[573,34],[720,53],[894,180],[915,245],[854,273],[824,362],[700,417],[589,407],[543,389],[489,409],[422,373]],
  [[138,284],[173,270],[215,291],[218,328],[186,343],[149,330]],
  [[810,466],[823,448],[855,445],[884,456],[871,489],[833,500]],
  [[517,618],[532,601],[555,603],[569,621],[561,642],[533,648]],
  [[0,676],[136,650],[204,689],[219,774],[131,800],[0,800]],
  [[897,703],[1003,656],[1038,705],[1038,800],[906,800]]
 ],water:[[1036,0],[1121,0],[1080,120],[1079,223],[1104,309],[1072,397],[1062,480],[1091,560],[1089,640],[1116,726],[1164,800],[1060,800],[1035,718],[1011,637],[989,564],[1004,477],[1018,394],[1044,312],[1022,228],[1019,122]],bridge:[[985,537],[1100,537],[1100,591],[985,591]]}
};
for(const g of Object.values(WORLD_GEOMETRY))for(const key of ['paths','blocks'])g[key]=g[key].map(p=>p.map(([x,y])=>[x*2,y*2]));
for(const g of Object.values(WORLD_GEOMETRY)){g.water=g.water.map(([x,y])=>[x*2,y*2]);g.bridge=g.bridge.map(([x,y])=>[x*2,y*2]);}
WORLD_GEOMETRY.riverwoods=WORLD_GEOMETRY.forest;
WORLD_GEOMETRY.outskirts={paths:[
 [[650,0],[1050,0],[1080,110],[1030,220],[920,360],[890,510],[830,650],[860,790],[1020,920],[1250,930],[1600,900],[1790,900],[1880,950],[1890,1100],[1780,1140],[1580,1160],[1350,1140],[1180,1150],[1020,1200],[900,1360],[930,1500],[880,1600],[600,1600],[600,1500],[570,1400],[590,1300],[650,1200],[610,1130],[400,1130],[200,1120],[0,1100],[0,930],[200,920],[400,900],[550,870],[600,800],[590,650],[600,500],[620,350],[650,220]],
 [[2140,900],[2400,880],[2400,1160],[2180,1150],[2100,1090],[2100,950]],
 [[1060,920],[1330,900],[1550,920],[1660,1020],[1650,1110],[1170,1130],[1000,1040]]
],blocks:[
 [[940,630],[970,410],[1270,370],[1650,630],[1650,850],[1420,930],[1160,920],[940,820]],
 [[0,160],[525,160],[570,460],[560,720],[360,790],[0,750]],
 [[1120,1210],[1390,1140],[1680,1250],[1760,1520],[1620,1600],[1100,1600]]
],water:[[1980,0],[2105,0],[2110,350],[2090,600],[2100,850],[2140,1050],[2220,1250],[2250,1430],[2340,1600],[2180,1600],[2130,1430],[2080,1300],[2020,1160],[1880,1080],[1860,950],[1900,800],[1900,600],[1910,350]],bridge:[[1870,940],[2150,940],[2150,1090],[1870,1090]]};
// Traced in source-image pixels (1536×1024), then converted to world units.
// The two forks meet again below the cottage; solid roofs, trees and banks never
// become walkable merely because they sit between the roads.
WORLD_GEOMETRY.hilltrail={paths:[
 [[500,0],[640,0],[620,65],[575,130],[550,165],[555,195],[520,235],[500,275],[470,320],[430,365],[405,420],[385,470],[370,530],[390,585],[430,635],[475,680],[530,715],[595,735],[640,780],[615,830],[550,880],[490,930],[460,1024],[330,1024],[345,960],[395,895],[460,830],[495,780],[485,750],[435,720],[390,680],[345,635],[315,580],[300,530],[310,475],[325,420],[335,370],[355,325],[340,300],[305,290],[250,285],[205,280],[175,260],[145,245],[120,240],[110,210],[135,195],[165,210],[190,235],[225,250],[280,250],[330,230],[365,205],[405,180],[420,150],[450,115],[475,75]],
 [[0,700],[200,695],[340,705],[480,710],[610,700],[760,695],[920,700],[1095,690],[1180,692],[1330,695],[1536,685],[1536,765],[1350,765],[1160,765],[970,775],[780,770],[620,780],[475,775],[325,770],[165,765],[0,785]],
 [[445,325],[475,280],[520,250],[575,225],[650,215],[725,205],[785,195],[820,210],[835,255],[855,290],[900,305],[960,295],[1045,280],[1085,285],[1085,315],[1040,340],[985,360],[940,390],[935,450],[950,505],[950,565],[915,605],[850,625],[780,620],[750,600],[780,570],[850,575],[890,555],[900,505],[880,470],[870,420],[890,380],[930,350],[960,330],[915,340],[870,330],[835,305],[805,265],[785,235],[730,245],[680,260],[625,275],[575,290],[525,310],[490,345]],
 [[725,540],[780,540],[770,575],[750,615],[725,650],[690,685],[655,715],[595,735],[585,700],[630,670],[665,630],[700,585]],
 [[910,555],[965,535],[1035,550],[1065,575],[1065,620],[1015,625],[965,605],[910,605]]
],blocks:[
 [[570,425],[610,355],[785,335],[875,390],[905,470],[890,535],[850,565],[660,570],[600,535]],
 [[990,110],[1100,100],[1170,145],[1165,260],[1090,270],[1015,260]],
 [[900,170],[980,155],[1010,230],[990,265],[925,270],[885,245]],
 [[525,300],[560,270],[675,260],[735,285],[760,330],[735,370],[660,390],[610,415],[550,390]],
 [[100,120],[265,110],[330,180],[290,250],[235,245],[180,205],[130,210]],
 [[955,520],[1020,510],[1080,540],[1095,560],[1040,580],[990,560]]
],water:[[1290,0],[1420,0],[1400,130],[1340,250],[1350,350],[1330,440],[1290,535],[1270,620],[1300,700],[1325,820],[1330,940],[1410,1024],[1300,1024],[1240,940],[1220,830],[1190,740],[1190,650],[1205,540],[1250,430],[1270,335],[1260,240],[1300,140]],bridge:[[1185,697],[1325,697],[1325,754],[1185,754]]};
for(const key of ['paths','blocks'])WORLD_GEOMETRY.hilltrail[key]=WORLD_GEOMETRY.hilltrail[key].map(p=>p.map(([x,y])=>[x*25/16,y*25/16]));
for(const key of ['water','bridge'])WORLD_GEOMETRY.hilltrail[key]=WORLD_GEOMETRY.hilltrail[key].map(([x,y])=>[x*25/16,y*25/16]);

function inside(x,y,p){let hit=false;for(let i=0,j=p.length-1;i<p.length;j=i++){const [xi,yi]=p[i],[xj,yj]=p[j];if((yi>y)!==(yj>y)&&x<(xj-xi)*(y-yi)/(yj-yi)+xi)hit=!hit;}return hit;}
const PEOPLES={a:0,b:1,kid:2,aunt:3,hunter:4,pawnshop:5,flower:6,thief:7,cart:8,fair:8,boar:9,chicken:10};
const ENEMIES={rabbit:0,snake:1,wildboar:2,bandit:3,boarking:4,tigerboss:5,chicken:6,dog:7};
const ASSETS={town:'assets/world-town.png',forest:'assets/world-forest.png',heyang:'assets/world-heyang.png',temple:'assets/world-temple.png',interiors:'assets/world-interiors.png',people:'assets/world-people.png',enemies:'assets/world-enemies.png',outskirts:'assets/world-outskirts.png',riverwoods:'assets/world-riverwoods.png',hilltrail:'assets/world-hilltrail.png',forestcave:'assets/world-forestcave.png',wisp:'assets/world-wisp.png',herb:'assets/world-herb.png',walkA:'assets/walk-a.png',walkB:'assets/walk-b.png'};
function rect(c,x,y,w,h,col){c.fillStyle=col;c.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h));}
function ellipse(c,x,y,rx,ry,color){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fillStyle=color;c.fill();}
function poly(c,ps,fill,stroke,width=1.5){c.beginPath();ps.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}}
function line(c,ps,color,width=1.5){c.beginPath();ps.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.strokeStyle=color;c.lineWidth=width;c.lineCap='round';c.lineJoin='round';c.stroke();}
function shadow(c,x,y,w=20){ellipse(c,x+2,y+3,w,7,'#392d253c');}
function makeGrid(id){
 const s=SCENES[id],cols=Math.ceil(s.width/T),rows=Math.ceil(s.height/T),cells=Array.from({length:rows},()=>Array(cols).fill(0)),water=Array.from({length:rows},()=>Array(cols).fill(false));
 const area=(x,y,w,h,value)=>{for(let gy=Math.max(0,Math.floor(y/T));gy<Math.min(rows,Math.ceil((y+h)/T));gy++)for(let gx=Math.max(0,Math.floor(x/T));gx<Math.min(cols,Math.ceil((x+w)/T));gx++){const cx=gx*T+T/2,cy=gy*T+T/2;if(cx>=x&&cx<x+w&&cy>=y&&cy<y+h)cells[gy][gx]=value;}};
 if(s.cave){
  const scale=25/32,main=[[490,245],[660,210],[790,215],[865,250],[925,300],[990,340],[1180,385],[1300,390],[1420,430],[1390,530],[1340,620],[1300,710],[1250,760],[1290,820],[1200,870],[990,910],[970,950],[920,1024],[620,1024],[590,940],[520,920],[450,880],[310,860],[200,800],[180,730],[150,660],[180,620],[170,550],[160,500],[120,450],[120,400],[200,370],[240,320],[350,300],[390,260]].map(([x,y])=>[x*scale,y*scale]),platform=[[980,270],[1250,270],[1260,330],[1210,385],[1000,380],[950,330]].map(([x,y])=>[x*scale,y*scale]);
  for(let gy=0;gy<rows;gy++)for(let gx=0;gx<cols;gx++){const x=gx*T+T/2,y=gy*T+T/2;if(inside(x,y,main)||inside(x,y,platform))cells[gy][gx]=1;}
  area(219,434,145,113,0);area(812,121,153,102,0);
 }else if(s.indoor){
  area(120,300,960,420,1);area(520,700,160,80,1);
  const furniture={
   inn:[[110,280,210,390],[210,150,260,160],[470,320,360,270],[940,195,140,120],[1000,320,100,350]],
   home:[[110,290,210,310],[170,150,260,160],[510,360,280,165],[940,195,140,120],[1010,340,90,320]],
   store:[[120,280,190,390],[150,140,240,170],[400,150,470,150],[530,360,280,165],[940,195,140,120],[1010,330,90,350]],
   pawnroom:[[120,150,270,200],[340,260,550,90],[120,360,90,180],[480,400,300,200],[940,195,140,125],[1020,350,80,350]],
   flowerroom:[[170,150,240,190],[120,460,160,180],[490,400,270,170],[900,200,150,130],[1000,440,100,180]],
   templehall:[[180,150,200,190],[480,190,360,150],[500,400,280,170],[920,200,150,140],[120,360,90,320],[1000,360,80,340]],
   oldcave:[[180,150,200,190],[480,190,360,150],[500,400,280,170],[920,200,150,140],[120,360,90,320],[1000,360,80,340]],
   watersidehut:[[110,290,210,310],[170,150,260,160],[510,360,280,165],[940,195,140,120],[1010,340,90,320]]
  };
  for(const b of furniture[id]||[])area(...b,0);
 }else{
  const geometry=WORLD_GEOMETRY[id];
  for(let gy=0;gy<rows;gy++)for(let gx=0;gx<cols;gx++){
   const x=gx*T+T/2,y=gy*T+T/2;
   if(geometry.paths.some(p=>inside(x,y,p)))cells[gy][gx]=1;
   if(geometry.blocks.some(p=>inside(x,y,p)))cells[gy][gx]=0;
   if(inside(x,y,geometry.water)){water[gy][gx]=true;cells[gy][gx]=0;}
   if(inside(x,y,geometry.bridge))cells[gy][gx]=2;
  }
 }
 // Give roads a forgiving one-tile verge while preserving solid scenery and banks.
 if(!s.indoor){const geometry=WORLD_GEOMETRY[id],source=cells.map(row=>row.slice());
  for(let gy=1;gy<rows-1;gy++)for(let gx=1;gx<cols-1;gx++){
   if(source[gy][gx]||water[gy][gx])continue;const x=gx*T+T/2,y=gy*T+T/2;
   if(geometry.blocks.some(p=>inside(x,y,p)))continue;
   if([-1,0,1].some(dy=>[-1,0,1].some(dx=>source[gy+dy]?.[gx+dx]===1)))cells[gy][gx]=1;
  }
 }
 // Keep one contiguous navigable region. Decorative path fragments beyond trees,
 // fences or banks are never valid destinations and cannot strand a loaded save.
 let seed=null,nearest=Infinity;
 for(let y=0;y<rows;y++)for(let x=0;x<cols;x++)if(cells[y][x]){const d=(x*T+10-s.spawn.x)**2+(y*T+10-s.spawn.y)**2;if(d<nearest){nearest=d;seed=[x,y];}}
 if(seed){const connected=new Set(),queue=[seed];for(let i=0;i<queue.length;i++){const [x,y]=queue[i],k=y*cols+x;if(connected.has(k))continue;connected.add(k);for(const[dx,dy]of[[0,1],[0,-1],[1,0],[-1,0]]){const xx=x+dx,yy=y+dy;if(cells[yy]?.[xx]&&!connected.has(yy*cols+xx))queue.push([xx,yy]);}}for(let y=0;y<rows;y++)for(let x=0;x<cols;x++)if(cells[y][x]&&!connected.has(y*cols+x))cells[y][x]=0;}
 return{tile:T,cols,rows,width:s.width,height:s.height,cells,water};
}
function drawFallback(c,id,nav){
 const s=SCENES[id];rect(c,0,0,s.width,s.height,s.indoor?'#342b23':id==='forest'?'#426444':'#638052');
 if(s.indoor){rect(c,100,200,1000,560,'#68503a');rect(c,120,260,960,460,'#a18760');for(let x=120;x<1080;x+=80)line(c,[[x,260],[x,720]],'#6d56394a',2);for(let y=260;y<720;y+=80)line(c,[[120,y],[1080,y]],'#6d56394a',1);for(const b of[[160,260,160,100],[870,280,140,90],[520,365,160,110]]){rect(c,...b,'#63452e');rect(c,b[0]+7,b[1]+7,b[2]-14,b[3]-14,'#927049');}return;}
 for(let y=0;y<nav.rows;y++)for(let x=0;x<nav.cols;x++){
  const v=nav.cells[y][x],xx=x*T,yy=y*T;if(nav.water[y][x])rect(c,xx,yy,T,T,'#407b7e');if(v===1)rect(c,xx,yy,T,T,'#c8b07c');if(v===2){rect(c,xx,yy,T,T,'#9b784e');line(c,[[xx,yy+T-2],[xx+T,yy+T-2]],'#624d36',2);}
 }
 c.fillStyle='#aa91655c';for(let i=0;i<700;i++){let x=(i*179)%2400,y=(i*271)%1600;if(nav.cells[Math.floor(y/T)]?.[Math.floor(x/T)]===1)c.fillRect(x,y,2+(i%5),1);}
 const buildings=id==='temple'?[[870,200,540,620]]:[[150,120,520,400],[1550,130,390,320],[870,550,540,390],[2180,650,200,320]];
 for(const [x,y,w,h]of buildings){rect(c,x+15,y+100,w-30,h-100,'#b39b70');rect(c,x+25,y+h-80,w-50,80,'#72513a');poly(c,[[x-20,y+130],[x+40,y+10],[x+w-90,y],[x+w+20,y+130]],'#b0a066','#493e2e',4);for(let i=0;i<w;i+=22)line(c,[[x+i,y+25],[x+i-30,y+118]],'#d1bd7b',2);rect(c,x+w/2-35,y+h-90,70,90,'#40382c');}
}
// Hand-drawn fallback sprites; the original transparent character atlas is used when it is ready.
function person(c,x,y,kind,time,walking,dir){
 let sw=walking?Math.sin(time*13)*3:0,bob=walking?Math.abs(Math.sin(time*13)):0;
 const colors={a:['#6f6a54','#9d9273','#3b3b30'],b:['#29282b','#713f35','#171c20'],kid:['#6d7d43','#a6af71','#43512f'],aunt:['#995b50','#c2866f','#603d36'],hunter:['#4a6e5a','#879579','#354c40'],pawnshop:['#3e6875','#74959b','#2c404c'],flower:['#a47186','#cba5b5','#634251'],thief:['#66665e','#959287','#3c443e'],cart:['#816f50','#b4a07a','#4d493d']};const p=colors[kind]||colors.a,child=kind==='kid';
 c.save();c.translate(x,y-bob);if(child)c.scale(.81,.81);shadow(c,0,0,19);
 // Boots, split trousers, and asymmetrical cloth folds have a readable silhouette at phone scale.
 poly(c,[[-12,-27],[-2,-26],[-3,-7+sw],[-18,-5+sw],[-18,-11+sw],[-13,-13+sw]],'#3e3e33','#272c28');poly(c,[[2,-27],[13,-28],[13,-13-sw],[20,-8-sw],[19,-4-sw],[3,-5-sw]],'#45463a','#272c28');line(c,[[-12,-21],[-5,-17],[-12,-12]],'#88846a',2);line(c,[[6,-22],[12,-18],[7,-13]],'#88846a',2);
 poly(c,[[-14,-65],[-24,-57],[-25,-43],[-18,-36],[-13,-44],[-16,-24],[-9,-23],[-5,-27],[0,-22],[6,-26],[17,-23],[13,-45],[20,-37],[25,-43],[25,-56],[12,-65]],p[0],'#35362d');
 poly(c,[[-9,-63],[1,-56],[10,-64],[9,-42],[1,-34],[-10,-43]],p[1]);line(c,[[-9,-63],[-1,-48],[10,-39]],'#c4b28b',2);line(c,[[9,-63],[3,-50],[-4,-41]],'#514a3a',2);
 poly(c,[[-15,-39],[14,-39],[16,-33],[-16,-33]],p[2]);line(c,[[-13,-36],[13,-36]],'#ad8d55',2);ellipse(c,4,-36,3,3,'#c6a15b');poly(c,[[8,-34],[14,-32],[18,-17],[13,-18]],'#a0784d','#513f2e');
 ellipse(c,-21,-37,4.5,6,'#d4a574');ellipse(c,22,-37,4.5,6,'#dbb483');line(c,[[-23,-45],[-19,-44]],'#ba9766',2);line(c,[[20,-45],[24,-46]],'#ba9766',2);
 // Neck and face are shaped separately from the irregular fringe.
 rect(c,-5,-72,10,12,'#c99d73');ellipse(c,0,-81,17,20,'#262c29');poly(c,[[-13,-88],[-8,-98],[8,-99],[15,-90],[15,-75],[10,-66],[0,-63],[-11,-68],[-15,-77]],'#e0b78b','#7c6650',1);poly(c,[[8,-96],[15,-88],[14,-73],[8,-67],[3,-66],[7,-73]],'#c99e76');ellipse(c,-15,-78,3,5,'#d4a575');ellipse(c,15,-78,3,5,'#deb184');
 poly(c,[[-18,-82],[-19,-93],[-11,-104],[2,-107],[15,-99],[20,-90],[17,-80],[9,-90],[4,-85],[-2,-92],[-9,-84],[-10,-74],[-16,-69]],'#272c28','#1c231f');
 line(c,[[-15,-94],[-5,-100],[6,-100]],'#545248',1.5);line(c,[[10,-98],[14,-92],[13,-87]],'#4d4d43',1);line(c,[[-5,-99],[-9,-90],[-11,-85]],'#605a4c',1);line(c,[[-9,-79],[-4,-80]],'#403c32',1.8);line(c,[[4,-80],[10,-79]],'#403c32',1.8);ellipse(c,-6,-77,1.3,1.7,'#282e29');ellipse(c,7,-77,1.3,1.7,'#282e29');line(c,[[0,-77],[-1,-73],[2,-73]],'#b28c66',1);line(c,[[-3,-69],[4,-69]],'#9a6850',1.2);
 if(kind==='a'){poly(c,[[0,-105],[5,-117],[15,-119],[22,-110],[24,-96],[21,-89],[28,-77],[23,-57],[16,-45],[17,-70],[14,-89],[9,-102]],'#292d29','#202521');line(c,[[10,-114],[19,-105],[18,-83]],'#524d41',1.5);line(c,[[7,-109],[16,-109]],'#9b5f41',3);poly(c,[[-16,-24],[-12,-17],[-7,-23],[-2,-18],[3,-24],[8,-19],[15,-23],[16,-29]],'#655f4d');line(c,[[-18,-53],[-11,-50]],'#c6b392',1);line(c,[[13,-53],[20,-50]],'#bea681',1);rect(c,-23,-49,8,9,'#514b3c');ellipse(c,17,-25,8,11,'#9b7c50');line(c,[[12,-32],[22,-31]],'#4e4332',2);ellipse(c,-2,-51,2.5,3,'#b48c54');}
 if(kind==='b'){poly(c,[[4,-104],[8,-115],[17,-112],[23,-103],[20,-73],[22,-54],[17,-41],[13,-72],[13,-99]],'#222926');line(c,[[9,-107],[19,-106]],'#935239',2);poly(c,[[-15,-61],[-9,-57],[-4,-42],[-11,-27],[-17,-30]],'#783b32');poly(c,[[13,-60],[9,-50],[9,-34],[17,-26],[18,-20],[8,-23],[5,-39]],'#8b4939');line(c,[[-11,-55],[-8,-43],[-13,-31]],'#b58b5d',1);line(c,[[10,-53],[12,-38],[14,-33]],'#b58b5d',1);poly(c,[[20,-40],[27,-63],[42,-54],[42,-34],[23,-34]],'#d8c9a4','#786343');for(let k=0;k<5;k++)line(c,[[23,-35],[27+k*3.3,-59+k*1.2]],'#97805b',.8);ellipse(c,6,-29,3,5,'#a4b69b');}
 if(kind==='aunt'){ellipse(c,-13,-100,7,6,'#33392f');poly(c,[[-13,-51],[13,-51],[17,-25],[-18,-25]],'#bf8871','#6c4940');line(c,[[-10,-45],[9,-44]],'#d5ac88',1.5);}
 if(kind==='pawnshop'){poly(c,[[-20,-95],[-14,-107],[13,-107],[20,-95]],'#354d52','#223a40');rect(c,-19,-97,38,6,'#496c70');ellipse(c,-7,-77,5,4,'#d7c197');ellipse(c,7,-77,5,4,'#d7c197');line(c,[[-2,-77],[2,-77]],'#5a5241',1);line(c,[[-4,-66],[3,-66],[0,-59]],'#464238',1);}
 if(kind==='hunter'||kind==='cart'){poly(c,[[-28,-95],[-17,-102],[-7,-112],[8,-112],[18,-101],[30,-95],[18,-89],[-19,-89]],'#9c8c58','#4e4d34');line(c,[[-23,-95],[24,-95]],'#bca972',2);line(c,[[-22,-61],[-10,-32]],'#b49b67',3);line(c,[[27,-74],[27,2]],'#6b5134',4);}
 if(kind==='flower'){ellipse(c,-16,-96,7,8,'#31312c');ellipse(c,16,-95,7,8,'#31312c');ellipse(c,18,-97,4,4,'#dba0a4');poly(c,[[-12,-35],[12,-35],[20,-18],[-18,-18]],'#b7849f');}
 if(kind==='thief'){poly(c,[[-19,-89],[-13,-105],[8,-109],[20,-95],[19,-83],[9,-91],[-11,-87]],'#53564c','#303c32');rect(c,-11,-74,24,6,'#6e7061');}
 c.restore();
}
function chicken(c,x,y,time){c.save();c.translate(x,y+Math.sin(time*2)*1);shadow(c,0,0,20);poly(c,[[-11,-21],[-31,-44],[-34,-28],[-26,-11],[-13,-6]],'#573f2e','#3a3427');poly(c,[[-24,-31],[-21,-40],[-14,-28],[-9,-23]],'#9b4f2f');ellipse(c,0,-16,23,17,'#b57336');ellipse(c,6,-14,15,13,'#bd843d');for(let i=0;i<6;i++)line(c,[[-9+i*3,-24],[-5+i*3,-12]],'#d8a24c',1);ellipse(c,17,-34,10,13,'#b9833b');poly(c,[[12,-47],[13,-55],[18,-50],[22,-55],[25,-47]],'#b64830');poly(c,[[25,-35],[35,-30],[25,-27]],'#c99b4c');ellipse(c,21,-36,2,2,'#242d24');ellipse(c,20,-23,4,7,'#ae422a');line(c,[[-8,-1],[-9,10],[-16,11]],'#a37435',2);line(c,[[9,-1],[10,9],[17,10]],'#a37435',2);c.restore();}
function boar(c,x,y){shadow(c,x,y,40);ellipse(c,-6,-28,42,28,'#725e45');poly(c,[[-41,-39],[-33,-56],[-23,-44],[-10,-56],[2,-44],[18,-47],[32,-29]],'#554a38');ellipse(c,32,-18,24,23,'#8c7456');ellipse(c,50,-13,12,9,'#ae8c65');rect(c,-31,-9,9,16,'#493f32');rect(c,15,-9,9,16,'#493f32');poly(c,[[23,-35],[19,-54],[35,-44]],'#614e3a','#3e3d2d');ellipse(c,35,-29,2.5,2.5,'#242d24');line(c,[[42,-5],[45,7],[54,-4]],'#dfcba2',3);for(let i=0;i<9;i++)line(c,[[-34+i*7,-35],[-30+i*7,-27]],'#9f8360',1);}
function object(c,h,t,searched){const{x,y,id}=h;
 if(h.type==='door'||h.type==='exit'||h.type==='search'||id==='cave')return;
 if(id==='chicken')chicken(c,x,y,t);else if(id==='boar')boar(c,x,y);
 else if(id==='herb'){shadow(c,x,y,14);for(let i=0;i<5;i++){const a=(i-2)*.65;line(c,[[x,y],[x+Math.sin(a)*16,y-25-Math.cos(a)*5]],'#365d36',3);ellipse(c,x+Math.sin(a)*16,y-25-Math.cos(a)*5,5,9,'#8eac60');}ellipse(c,x,y-24,4,4,'#c9ae68');}
 else if(id==='fire'){shadow(c,x,y,28);line(c,[[x-22,y],[x+23,y-8]],'#6c4b2f',8);line(c,[[x-18,y-9],[x+19,y+1]],'#987047',7);poly(c,[[x-21,y-4],[x-13,y-35],[x-3,y-24],[x+7,y-48+Math.sin(t*7)*4],[x+17,y-24],[x+24,y-4]],'#d28536');poly(c,[[x-9,y-5],[x-1,y-31],[x+10,y-18],[x+12,y-4]],'#f5c96b');}
 else if(id==='mechanism'){shadow(c,x,y,26);rect(c,x-25,y-32,50,32,'#8a6c41');rect(c,x-21,y-28,42,24,'#b99b64');ellipse(c,x,y-16,13,13,'#5e523a');ellipse(c,x,y-16,8,8,'#b89757');line(c,[[x-11,y-16],[x+11,y-16]],'#73613d',3);}
 else if(id==='cellar'){rect(c,x-34,y-28,68,30,'#6e5940');rect(c,x-28,y-24,56,22,'#9e8055');for(let i=0;i<5;i++)line(c,[[x-23+i*11,y-23],[x-23+i*11,y-3]],'#66513b',2);ellipse(c,x+14,y-13,3,3,'#4f4937');}
 else if(id==='rest'){shadow(c,x,y,30);poly(c,[[x-35,y-24],[x+23,y-32],[x+36,y-2],[x-21,y+6]],'#bca774','#796a48');for(let i=0;i<6;i++)line(c,[[x-29+i*9,y-22-i],[x-16+i*9,y+1-i]],'#d4c18e',2);}
 else if(id==='fair'){shadow(c,x,y,40);rect(c,x-45,y-41,90,36,'#7d5434');rect(c,x-49,y-47,98,9,'#b6915a');for(let i=0;i<7;i++)rect(c,x-39+i*12,y-48,8,6,i%2?'#b45e3d':'#bea573');rect(c,x-38,y-3,6,8,'#59452e');rect(c,x+32,y-3,6,8,'#59452e');}
}
class RPGMap{
 constructor(canvas,options={}){
  this.canvas=canvas;this.ctx=canvas.getContext('2d');this.onInteract=options.onInteract||(()=>{});this.onMove=options.onMove||(()=>{});this.onBlocked=options.onBlocked||(()=>{});
  this.player={x:850,y:1380};this.follower={x:850,y:1420};this.companion=false;this.paused=false;this.visited=new Set();this.searched=new Set();this.hidden=new Set();this.worldEntities=new Map();this.staticHotspots=[];this.storyTarget=null;this.caveState={open:false,sealed:false,unlocked:false};this.spawnCache=new Map();
  this.assets={};this.assetState={};this.spriteBounds={};this.enemyBounds={};this.wispBounds=null;this.walkBounds={};this.assetQueue=[];this.assetRequests=new Map();this.assetSequence=0;this.assetPumpScheduled=false;this.assetDisposed=false;this.path=[];this.pending=null;this.time=0;this.last=0;this.lastInteract=-1000;this.facing={x:0,y:1};this.followerFacing={x:0,y:1};this.walkDistance=0;this.followerDistance=0;this.trail=[];this.failAt=-1000;
  this.background=document.createElement('canvas');this.bctx=this.background.getContext('2d');this.pointerHandler=e=>this.pointer(e);canvas.addEventListener('pointerdown',this.pointerHandler);canvas.setAttribute('role','img');canvas.style.touchAction='none';this.setScene('town');this.resize();this.resizeHandler=()=>this.resize();window.addEventListener?.('resize',this.resizeHandler);
  if(typeof ResizeObserver!=='undefined'){this.observer=new ResizeObserver(this.resizeHandler);this.observer.observe(canvas);}this.tick=this.tick.bind(this);this.frame=requestAnimationFrame(this.tick);
 }
 get hotspots(){
  const all=new Map(this.staticHotspots.map(h=>[h.id,h]));for(const h of this.worldEntities.values())all.set(h.id,h);
  if(this.companion)all.set('partner',{id:'partner',name:'B',type:'npc',kind:'b',x:this.follower.x,y:this.follower.y,companion:true});
  return [...all.values()].filter(h=>!this.hidden.has(h.id));
 }
 getRequiredAssetKeys(){const s=SCENES[this.scene];return[s.asset||(s.indoor?'interiors':this.scene),'people'];}
 getSceneAssetKeys(){const keys=[...this.getRequiredAssetKeys(),'walkA'];if(this.companion)keys.push('walkB');if(!SCENES[this.scene].indoor){keys.push('herb');if(this.scene!=='town'&&this.scene!=='heyang')keys.push('enemies');if(this.scene==='temple')keys.push('wisp');}return [...new Set(keys)];}
 loadAssets(){this.ensureSceneAssets(true);}
 ensureSceneAssets(retry=false){
  if(this.assetDisposed||typeof Image==='undefined')return;
  const wanted=this.getSceneAssetKeys(),required=this.getRequiredAssetKeys();
  this.assetQueue=this.assetQueue.filter(key=>wanted.includes(key));
  // Scene changes release old downloads so the new background can start at once.
  for(const[key,request]of this.assetRequests)if(!wanted.includes(key)||retry||(!required.includes(key)&&required.some(id=>this.assetState[id]!=='ready')))request.cancel();
  for(const key of wanted){if(this.assetState[key]==='ready'||this.assetRequests.has(key))continue;if(this.assetState[key]==='unavailable'&&!retry)continue;this.assetState[key]='queued';}
  this.assetQueue=wanted.filter(key=>this.assetState[key]==='queued');this.pumpAssetQueue();
 }
 scheduleAssetPump(){if(this.assetPumpScheduled||this.assetDisposed)return;this.assetPumpScheduled=true;Promise.resolve().then(()=>{this.assetPumpScheduled=false;this.pumpAssetQueue();});}
 pumpAssetQueue(){
  if(this.assetDisposed)return;const required=this.getRequiredAssetKeys();
  this.assetQueue.sort((a,b)=>(required.includes(a)?0:1)-(required.includes(b)?0:1));
  while(this.assetRequests.size<2&&this.assetQueue.length){const id=this.assetQueue.shift();if(this.assetState[id]!=='queued'||this.assets[id])continue;
   // Optional sheets wait until both pieces needed to enter the map have settled.
   if(!required.includes(id)&&required.some(key=>['queued','loading'].includes(this.assetState[key]))){this.assetQueue.unshift(id);break;}
   this.startAssetRequest(id);
  }
 }
 startAssetRequest(id){
  const img=new Image(),serial=++this.assetSequence;let settled=false,timer;
  const finish=(okay,canceled=false)=>{
   if(settled)return;settled=true;clearTimeout(timer);img.onload=null;img.onerror=null;const active=this.assetRequests.get(id);if(!active||active.serial!==serial)return;this.assetRequests.delete(id);
   if(okay){this.assets[id]=img;this.assetState[id]='ready';try{if(id==='people')this.measureSprites(img);else if(id==='enemies')this.measureEnemySprites(img);else if(id==='walkA'||id==='walkB')this.measureWalkSprites(id,img);else if(id==='wisp')this.measureWispSprite(img);}catch{}const current=this.getRequiredAssetKeys()[0];if(id===current)this.refreshBackground();}
   else{this.assetState[id]=canceled?'idle':'unavailable';try{img.src='';}catch{}}
   this.scheduleAssetPump();
  };
  this.assetState[id]='loading';this.assetRequests.set(id,{serial,image:img,cancel:()=>finish(false,true)});
  img.onload=()=>finish(true);img.onerror=()=>finish(false);
  timer=setTimeout(()=>finish(false),45000);
  try{img.decoding='async';img.fetchPriority=this.getRequiredAssetKeys().includes(id)?'high':'low';img.src=ASSETS[id];}catch{finish(false);}
 }
 measureWispSprite(img){
  try{const temp=document.createElement('canvas');temp.width=img.naturalWidth||img.width;temp.height=img.naturalHeight||img.height;const c=temp.getContext('2d');c.drawImage(img,0,0);const data=c.getImageData(0,0,temp.width,temp.height).data;let left=temp.width,top=temp.height,right=0,bottom=0;
   for(let y=0;y<temp.height;y+=2)for(let x=0;x<temp.width;x+=2)if(data[(y*temp.width+x)*4+3]>64){left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);}
   if(right>left&&bottom>top)this.wispBounds={x:Math.max(0,left-3),y:Math.max(0,top-3),width:right-left+7,height:bottom-top+7};
  }catch{}
 }
 measureEnemySprites(img){
  try{const temp=document.createElement('canvas');temp.width=img.naturalWidth||img.width;temp.height=img.naturalHeight||img.height;const c=temp.getContext('2d');c.drawImage(img,0,0);const data=c.getImageData(0,0,temp.width,temp.height).data,cw=temp.width/4,ch=temp.height/2;
   for(let id=0;id<8;id++){let left=cw,top=ch,right=0,bottom=0,count=0;const ox=Math.floor(id%4*cw),oy=Math.floor(Math.floor(id/4)*ch);for(let y=1;y<ch-1;y+=2)for(let x=1;x<cw-1;x+=2){if(data[((oy+y)*temp.width+ox+x)*4+3]>64){left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);count++;}}if(count)this.enemyBounds[id]={x:ox+Math.max(0,left-3),y:oy+Math.max(0,top-3),width:Math.min(cw,right-left+7),height:Math.min(ch,bottom-top+7)};}
  }catch{}
 }
 measureSprites(img){
  try{const temp=document.createElement('canvas');temp.width=img.naturalWidth||img.width;temp.height=img.naturalHeight||img.height;const c=temp.getContext('2d');c.drawImage(img,0,0);const d=c.getImageData(0,0,temp.width,temp.height).data,cw=temp.width/4,ch=temp.height/3;
   for(let id=0;id<12;id++){let minX=cw,minY=ch,maxX=0,maxY=0,count=0;const ox=Math.floor(id%4*cw),oy=Math.floor(Math.floor(id/4)*ch);for(let y=1;y<ch-1;y+=2)for(let x=1;x<cw-1;x+=2){if(d[((oy+y)*temp.width+ox+x)*4+3]>64){minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);count++;}}if(count&&maxX-minX<cw*.98&&maxY-minY<ch*.98)this.spriteBounds[id]={x:ox+Math.max(0,minX-3),y:oy+Math.max(0,minY-3),width:Math.min(cw,maxX-minX+7),height:Math.min(ch,maxY-minY+7)};}
  }catch{}
 }
 measureWalkSprites(id,img){
  try{const temp=document.createElement('canvas');temp.width=img.naturalWidth||img.width;temp.height=img.naturalHeight||img.height;const c=temp.getContext('2d');c.drawImage(img,0,0);const data=c.getImageData(0,0,temp.width,temp.height).data,cw=temp.width/4,ch=temp.height/4,frames=[];let maxHeight=0;
   for(let i=0;i<16;i++){let left=cw,top=ch,right=0,bottom=0,count=0;const ox=Math.floor(i%4*cw),oy=Math.floor(Math.floor(i/4)*ch);for(let y=1;y<ch-1;y+=2)for(let x=1;x<cw-1;x+=2){if(data[((oy+y)*temp.width+ox+x)*4+3]>64){left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);count++;}}const b=count?{left,top,right,bottom}:{left:cw*.18,top:ch*.06,right:cw*.82,bottom:ch*.95};frames.push(b);maxHeight=Math.max(maxHeight,b.bottom-b.top);}
   this.walkBounds[id]={frames,maxHeight:maxHeight||ch*.85};
  }catch{}
 }
 refreshBackground(){const s=SCENES[this.scene];if(this.background.width!==s.width)this.background.width=s.width;if(this.background.height!==s.height)this.background.height=s.height;const c=this.bctx;c.imageSmoothingEnabled=true;const img=this.assets[s.asset||(s.indoor?'interiors':s.asset)];if(img){if(s.indoor&&!s.asset){const iw=(img.naturalWidth||img.width)/3,ih=(img.naturalHeight||img.height)/2;c.drawImage(img,s.atlas%3*iw,Math.floor(s.atlas/3)*ih,iw,ih,0,0,s.width,s.height);}else c.drawImage(img,0,0,s.width,s.height);}else drawFallback(c,this.scene,this.nav);}
 setScene(id){
  this.scene=SCENES[id]?id:'town';const s=SCENES[this.scene];this.nav=makeGrid(this.scene);this.worldEntities=new Map();this.staticHotspots=SPOTS[this.scene].map(h=>({...h,...(h.returnPos?{returnPos:{...h.returnPos}}:{})}));
  for(const h of this.staticHotspots)if(h.type==='exit-area'){const p=this.nearestRoad(h);h.x=p.x;h.y=p.y;}
  this.path=[];this.pending=null;this.player=this.nearestRoad(s.spawn);this.follower=this.nearestRoad({x:this.player.x,y:this.player.y+50});this.trail=[];this.walkDistance=0;this.followerDistance=0;this.refreshBackground();this.canvas.setAttribute('aria-label',s.name+'，'+(s.indoor?'观察室内陈设并点击调查；从门口离开。':'沿道路和木桥移动；点击人物交谈、采集草药或调查道路出口。'));this.updateView();this.onMove({...this.player});this.ensureSceneAssets();
 }
 getSceneInfo(){const s=SCENES[this.scene];return{id:this.scene,...s,isIndoor:!!s.indoor,parentScene:s.outdoor||null,spawn:{...s.spawn},returnPos:s.returnPos?{...s.returnPos}:null};}
 getSceneSize(){const s=SCENES[this.scene];return{width:s.width,height:s.height};}
 getWalkableGrid(){return{tile:T,cols:this.nav.cols,rows:this.nav.rows,width:this.nav.width,height:this.nav.height,cells:this.nav.cells.map(r=>r.slice()),water:this.nav.water.map(r=>r.slice())};}
 setSearched(ids){this.searched=new Set(ids||[]);}
 setCaveState(value={}){this.caveState={open:!!value.open,sealed:!!value.sealed,unlocked:!!value.unlocked};}
 setHidden(ids){this.hidden=new Set(ids||[]);if(this.pending&&this.hidden.has(this.pending.id)){this.pending=null;this.path=[];}}
 setStoryTarget(target){this.storyTarget=target?{...target}:null;}
 setWorldEntities(entities){
  const previous=this.worldEntities,next=new Map();for(const input of Array.isArray(entities)?entities:[]){if(!input||typeof input.id!=='string'||!Number.isFinite(input.x)||!Number.isFinite(input.y))continue;if(input.scene&&input.scene!==this.scene)continue;const old=previous.get(input.id),h={...input};
   if(old&&old.type==='monster'&&h.type==='monster'){h.x=old.x;h.y=old.y;h.home={...old.home};h.wander=old.wander;h.wanderAt=old.wanderAt;h.facing=old.facing;h.walkDistance=old.walkDistance||0;h.walking=old.walking;}
   else{const p=this.nearestRoad(h);h.x=p.x;h.y=p.y;h.home={x:p.x,y:p.y};h.wander=[];h.wanderAt=this.time+1+Math.random()*3;h.facing={x:0,y:1};h.walkDistance=0;}
   next.set(h.id,h);
  }this.worldEntities=next;if(this.pending&&previous.has(this.pending.id)){if(next.has(this.pending.id))this.pending=next.get(this.pending.id);else{this.pending=null;this.path=[];}}
 }
 getEntityPosition(id){if(id==='partner'&&this.companion)return{...this.follower};const h=this.worldEntities.get(id)||this.staticHotspots.find(h=>h.id===id);return h?{x:h.x,y:h.y}:null;}
 getSpawnPoints(kind='monster'){
  if(SCENES[this.scene].indoor)return[];const cacheKey=this.scene+':'+kind;if(this.spawnCache.has(cacheKey))return this.spawnCache.get(cacheKey).map(p=>({...p}));const points=[],spawn=SCENES[this.scene].spawn;
  for(let row=1;row<this.nav.rows-1;row+=2)for(let col=1;col<this.nav.cols-1;col+=2){if(this.nav.cells[row][col]!==1)continue;const x=col*T+T/2,y=row*T+T/2;if(!this.isWalkable(x,y)||Math.hypot(x-spawn.x,y-spawn.y)<180)continue;if(this.staticHotspots.some(h=>Math.hypot(x-h.x,y-h.y)<(kind==='monster'?165:85)))continue;if(kind==='gather'&&this.isWalkable(x-40,y)&&this.isWalkable(x+40,y)&&this.isWalkable(x,y-40)&&this.isWalkable(x,y+40))continue;points.push({x,y});}
  this.spawnCache.set(cacheKey,points);return points.map(p=>({...p}));
 }
 isWalkable(x,y,r=RADIUS){const n=this.nav;if(!Number.isFinite(x)||!Number.isFinite(y)||x-r<0||y-r<0||x+r>=n.width||y+r>=n.height)return false;for(const [dx,dy]of[[0,0],[-r,0],[r,0],[0,-r],[0,r],[-r*.71,-r*.71],[r*.71,-r*.71],[-r*.71,r*.71],[r*.71,r*.71]])if(!n.cells[Math.floor((y+dy)/T)]?.[Math.floor((x+dx)/T)])return false;return true;}
 nearestRoad(p){if(this.isWalkable(p.x,p.y))return{x:p.x,y:p.y};let best=null,dist=Infinity;for(let y=0;y<this.nav.rows;y++)for(let x=0;x<this.nav.cols;x++)if(this.nav.cells[y][x]){const q={x:x*T+T/2,y:y*T+T/2},d=(q.x-p.x)**2+(q.y-p.y)**2;if(d<dist&&this.isWalkable(q.x,q.y)){best=q;dist=d;}}return best||{...SCENES[this.scene].spawn};}
 snapDestination(p,radius=64){
  if(this.isWalkable(p.x,p.y))return{x:p.x,y:p.y};const row=Math.floor(p.y/T),col=Math.floor(p.x/T);if(this.nav.water[row]?.[col]&&this.nav.cells[row]?.[col]!==2)return null;
  let best=null,distance=Infinity;const reach=Math.ceil(radius/T);
  for(let dy=-reach;dy<=reach;dy++)for(let dx=-reach;dx<=reach;dx++){const q={x:(col+dx)*T+T/2,y:(row+dy)*T+T/2},d=Math.hypot(q.x-p.x,q.y-p.y);if(d<=radius&&d<distance&&this.isWalkable(q.x,q.y)){best=q;distance=d;}}
  return best;
 }
 findPath(from,to){
  if(!this.isWalkable(to.x,to.y))return[];const n=this.nav,start=this.nearestRoad(from),ax=Math.floor(start.x/T),ay=Math.floor(start.y/T),bx=Math.floor(to.x/T),by=Math.floor(to.y/T),cols=n.cols,key=(x,y)=>y*cols+x,queue=[{x:ax,y:ay}],prev=new Map([[key(ax,ay),null]]);let head=0;
  while(head<queue.length){const q=queue[head++];if(q.x===bx&&q.y===by)break;for(const[dx,dy]of[[0,-1],[1,0],[0,1],[-1,0]]){const x=q.x+dx,y=q.y+dy,k=key(x,y);if(x<0||x>=n.cols||y<0||y>=n.rows||!n.cells[y][x]||prev.has(k)||!this.isWalkable(x*T+10,y*T+10))continue;prev.set(k,q);queue.push({x,y});}}
  if(!prev.has(key(bx,by)))return[];let node={x:bx,y:by},result=[];while(node){result.push({x:node.x*T+10,y:node.y*T+10});node=prev.get(key(node.x,node.y));}result.reverse();result.push({x:to.x,y:to.y});return result;
 }
 setPlayer(x,y){const spawn=SCENES[this.scene].spawn;this.player=this.nearestRoad({x:Number.isFinite(x)?x:spawn.x,y:Number.isFinite(y)?y:spawn.y});this.follower=this.nearestRoad({x:this.player.x,y:this.player.y+50});this.path=[];this.pending=null;this.trail=[];this.updateView();this.onMove({...this.player});}
 getPlayer(){return{...this.player};}getView(){return{...this.view};}
 setPaused(v){this.paused=!!v;if(v){this.path=[];this.pending=null;}}setCompanion(v){const changed=this.companion!==!!v;this.companion=!!v;if(changed)this.ensureSceneAssets();}markVisited(id){this.visited.add(this.scene+':'+id);}
 getNearby(){let best=Infinity,nearest=null;for(const h of this.hotspots){if(h.anchorOnly||h.concealed||h.type==='search')continue;const d=Math.hypot(h.x-this.player.x,h.y-this.player.y);if(d>=125)continue;const score=d+(h.companion?80:0)-(this.isStorySpot(h)?110:0);if(score<best){best=score;nearest=h;}}return nearest;}
 interactNearest(){const h=this.getNearby();if(h&&!this.paused){this.trigger(h);return h;}return null;}
 getInspectableNearby(){
  if(this.paused)return null;let nearest=null,best=Infinity;
  for(const h of this.hotspots){if(h.type!=='search')continue;const dx=h.x-this.player.x,dy=h.y-this.player.y,d=Math.hypot(dx,dy);if(d>125)continue;
   const facing=this.facing||{x:0,y:-1},dot=d?(dx*facing.x+dy*facing.y)/d:1,score=d+(dot<-.25?32:0)+(this.searched.has(h.id)?18:0);
   if(score<best){best=score;nearest=h;}}
  return nearest;
 }
 interactInspectable(){const h=this.getInspectableNearby();if(!h)return false;this.trigger(h);return true;}
 trigger(h){if(performance.now()-this.lastInteract<450||this.hidden.has(h.id))return;this.lastInteract=performance.now();this.path=[];this.pending=null;this.visited.add(this.scene+':'+h.id);this.onInteract({...h,searched:this.searched.has(h.id)});}
 trace(p){this.trail.push({...p});if(this.trail.length>240)this.trail.shift();let d=0;for(let i=this.trail.length-1;i>0;i--){d+=Math.hypot(this.trail[i].x-this.trail[i-1].x,this.trail[i].y-this.trail[i-1].y);if(d>=70){const q=this.trail[i-1];if(this.isWalkable(q.x,q.y)){const moved=Math.hypot(q.x-this.follower.x,q.y-this.follower.y);if(moved>.1){this.followerFacing={x:q.x-this.follower.x,y:q.y-this.follower.y};this.followerDistance+=moved;this.followerWalkUntil=performance.now()+110;}this.follower={...q};}break;}}}
 advance(dx,dy){const d=Math.hypot(dx,dy);if(!d)return false;const steps=Math.ceil(d/2),sx=dx/steps,sy=dy/steps;let changed=false,moved=0;for(let i=0;i<steps;i++){const x=this.player.x+sx,y=this.player.y+sy;if(!this.isWalkable(x,y))break;this.player={x,y};this.trace(this.player);changed=true;moved+=Math.hypot(sx,sy);}if(changed){this.facing={x:dx,y:dy};this.walkDistance+=moved;this.walkUntil=performance.now()+110;this.updateView();this.onMove({...this.player});}return changed;}
 move(dx,dy){if(this.paused||!Number.isFinite(dx)||!Number.isFinite(dy))return;this.path=[];this.pending=null;const d=Math.hypot(dx,dy);if(d)this.advance(dx*Math.min(4,d)/d,dy*Math.min(4,d)/d);}
 isNameplateVisible(h){
  if(h.anchorOnly||h.concealed||h.type==='search')return false;
  const near=Math.hypot(h.x-this.player.x,h.y-this.player.y)<125,quest=this.isStorySpot(h);
  if((h.companion||h.type==='camp')&&!near&&!quest)return false;
  if(h.companion&&!quest&&this.hotspots.some(q=>q.id!==h.id&&!q.anchorOnly&&q.type!=='search'&&['camp','door','exit','chest','npc','story'].includes(q.type)&&Math.hypot(q.x-this.player.x,q.y-this.player.y)<125))return false;
  return true;
 }
 getNameplateRect(h){const scale=this.view?.scale||1,font=12/scale,height=24/scale;const name=h.name||'行人',width=Math.max(40,name.length*12+14)/scale;const object=['door','exit','exit-area','search','gather','drop','camp','chest'].includes(h.type)||['herb','fire','mechanism','cellar','rest','cave'].includes(h.id);const offset=object?(h.type==='door'?20:h.type==='exit'||h.type==='exit-area'?12:h.type==='drop'?33:52):h.kind==='wildboar'||h.kind==='boar'||h.id==='boar'?92:h.id==='chicken'?78:126;return{x:h.x-width/2,y:h.y-offset-height,width,height,font};}
 approach(h){let best=null,dist=Infinity;for(let dy=-100;dy<=100;dy+=T)for(let dx=-100;dx<=100;dx+=T){const p={x:Math.floor((h.x+dx)/T)*T+T/2,y:Math.floor((h.y+dy)/T)*T+T/2},d=Math.hypot(p.x-h.x,p.y-h.y);if(d>115||!this.isWalkable(p.x,p.y))continue;const score=d+Math.hypot(this.player.x-p.x,this.player.y-p.y)*.08+(dy<0?14:0);if(score<dist){best=p;dist=score;}}return best;}
 pointer(e){if(this.paused)return;e.preventDefault?.();const r=this.canvas.getBoundingClientRect();this.updateView();const x=this.view.x+(e.clientX-r.left)/this.view.scale,y=this.view.y+(e.clientY-r.top)/this.view.scale;let hit=null,best=Infinity;for(const h of this.hotspots){
   if(h.anchorOnly)continue;
   if(h.concealed||h.type==='search'){
    const b=h.bounds,pad=8/this.view.scale,onObject=Array.isArray(h.region)?inside(x,y,h.region):Array.isArray(b)&&x>=b[0]-pad&&x<=b[0]+b[2]+pad&&y>=b[1]-pad&&y<=b[1]+b[3]+pad;
    // Small objects (a letter on a desk, for example) take precedence over the
    // larger supporting furniture. Their floor anchor is never a hit target.
    if(onObject){const area=b?b[2]*b[3]:10000,score=-20000+Math.sqrt(area)/100;if(score<best){hit=h;best=score;}}continue;
   }
   const b=this.getNameplateRect(h),onLabel=this.isNameplateVisible(h)&&x>=b.x&&x<=b.x+b.width&&y>=b.y&&y<=b.y+b.height;const object=['door','exit','exit-area','gather','drop','camp','chest'].includes(h.type),dx=x-h.x,dy=y-(h.y-(object?14:50)),d=Math.hypot(dx,dy*.65);const physical=h.type==='chest'&&Array.isArray(h.bounds)&&x>=h.bounds[0]&&x<=h.bounds[0]+h.bounds[2]&&y>=h.bounds[1]&&y<=h.bounds[1]+h.bounds[3];const opened=h.id==='cave:open'?this.caveState.open:h.id==='cave:sealed'?this.caveState.sealed:false;const score=physical?(opened?-15000:-40000):onLabel?Math.hypot(x-(b.x+b.width/2),y-(b.y+b.height/2))-(this.isStorySpot(h)?30000:10000):d;if((physical||onLabel||d<(object?42:45))&&score<best){hit=h;best=score;}}
  if(hit){if(Math.hypot(this.player.x-hit.x,this.player.y-hit.y)<125){this.trigger(hit);return;}const dest=this.approach(hit);this.pending=hit;this.path=dest?this.findPath(this.player,dest):[];if(!this.path.length){this.pending=null;this.blocked(x,y);}}else{const dest=this.snapDestination({x,y});this.pending=null;this.path=dest?this.findPath(this.player,dest):[];if(!this.path.length)this.blocked(x,y);}}
 blocked(x,y){this.failAt=performance.now();this.failPoint={x,y};this.onBlocked(SCENES[this.scene].indoor?'家具挡住了去路，请从旁边绕行。':'只能沿道路和桥梁行走。');}
 resize(){const r=this.canvas.getBoundingClientRect?.()||{width:1200,height:780};this.cssWidth=Math.max(1,r.width||1200);this.cssHeight=Math.max(1,r.height||780);this.dpr=Math.min(window.devicePixelRatio||1,2);const w=Math.round(this.cssWidth*this.dpr),h=Math.round(this.cssHeight*this.dpr);if(this.canvas.width!==w||this.canvas.height!==h){this.canvas.width=w;this.canvas.height=h;}this.ctx.imageSmoothingEnabled=true;this.updateView();}
 updateView(){const s=SCENES[this.scene],cw=this.cssWidth||1200,ch=this.cssHeight||780,ratio=cw/ch;let vw=cw<700?650:(s.indoor?1200:1500),vh=vw/ratio;if(vh>s.height){vh=s.height;vw=vh*ratio;}if(vw>s.width){vw=s.width;vh=vw/ratio;}const scale=Math.min(cw/vw,ch/vh);this.view={x:clamp(this.player.x-vw/2,0,s.width-vw),y:clamp(this.player.y-vh*.61,0,s.height-vh),width:vw,height:vh,scale,cssWidth:cw,cssHeight:ch};}
 wander(dt){
  if(this.paused||SCENES[this.scene].indoor)return;for(const h of this.worldEntities.values()){h.walking=false;if(h.type!=='monster'||this.hidden.has(h.id)||this.pending?.id===h.id||Math.hypot(this.player.x-h.x,this.player.y-h.y)<130)continue;
   if(!h.wander?.length&&this.time>=(h.wanderAt||0)){h.wanderAt=this.time+3+Math.random()*5;for(let i=0;i<6;i++){const p={x:h.home.x+(Math.random()-.5)*240,y:h.home.y+(Math.random()-.5)*240};if(!this.isWalkable(p.x,p.y))continue;const path=this.findPath(h,p);if(path.length){h.wander=path;break;}}}
   if(h.wander?.length){const p=h.wander[0],dx=p.x-h.x,dy=p.y-h.y,d=Math.hypot(dx,dy);if(d<1){h.wander.shift();continue;}const amount=Math.min(d,dt*(h.kind==='rabbit'?35:24)),x=h.x+dx/d*amount,y=h.y+dy/d*amount;if(this.isWalkable(x,y)){h.x=x;h.y=y;h.facing={x:dx,y:dy};h.walkDistance=(h.walkDistance||0)+amount;h.walking=true;}else h.wander=[];}
  }
 }
 tick(now){const dt=Math.min(.05,Math.max(0,(now-(this.last||now))/1000));this.last=now;this.time+=dt;this.wander(dt);if(!this.paused&&this.path.length){const dest=this.path[0],dx=dest.x-this.player.x,dy=dest.y-this.player.y,d=Math.hypot(dx,dy);if(d<.1){if(d)this.advance(dx,dy);this.path.shift();}else{const amount=Math.min(d,dt*190);if(!this.advance(dx/d*amount,dy/d*amount)){this.path=[];this.pending=null;}}if(!this.path.length&&this.pending&&Math.hypot(this.player.x-this.pending.x,this.player.y-this.pending.y)<135)this.trigger(this.pending);}this.draw();this.frame=requestAnimationFrame(this.tick);}
 drawEnemySprite(c,x,y,kind,walking=false,dir={x:0,y:1},distance=0){
  const img=this.assets.enemies,id=ENEMIES[kind];if(!img||!Number.isInteger(id))return false;
  const cw=(img.naturalWidth||img.width)/4,ch=(img.naturalHeight||img.height)/2,b=this.enemyBounds[id]||{x:id%4*cw,y:Math.floor(id/4)*ch,width:cw,height:ch},heights={rabbit:72,snake:51,wildboar:97,bandit:120,boarking:128,tigerboss:135,chicken:66,dog:83},height=heights[kind]||100,width=b.width/b.height*height,hop=walking&&kind==='rabbit'?Math.abs(Math.sin(distance/8))*3:walking?Math.abs(Math.sin(distance/14)):0;
  shadow(c,x,y,Math.min(42,width*.32));c.save();c.translate(x,y-hop);if(dir.x<-.1)c.scale(-1,1);c.drawImage(img,b.x,b.y,b.width,b.height,-width/2,-height,width,height);c.restore();return true;
 }
 drawSprite(c,x,y,kind,t,walking,dir={x:0,y:1},distance=0){
  if((kind==='boar'||kind==='chicken')&&this.drawEnemySprite(c,x,y,kind==='boar'?'boarking':kind,walking,dir,distance))return;
  const walkKey=kind==='a'?'walkA':kind==='b'?'walkB':null,walk=walkKey&&this.assets[walkKey];
  if(walk){const row=Math.abs(dir.x)>Math.abs(dir.y)?(dir.x<0?1:2):(dir.y<0?3:0),frame=walking?Math.floor(distance/13)%4:0,iw=(walk.naturalWidth||walk.width)/4,ih=(walk.naturalHeight||walk.height)/4,bounds=this.walkBounds[walkKey],b=bounds?.frames[row*4+frame]||{left:iw*.1,top:ih*.05,right:iw*.9,bottom:ih*.96},scale=120/(bounds?.maxHeight||ih*.91),center=(b.left+b.right)/2;shadow(c,x,y,20);c.drawImage(walk,frame*iw,row*ih,iw,ih,x-center*scale,y-b.bottom*scale,iw*scale,ih*scale);return;}
  const img=this.assets.people,id=PEOPLES[kind];if(img&&Number.isInteger(id)){const cw=(img.naturalWidth||img.width)/4,ch=(img.naturalHeight||img.height)/3,b=this.spriteBounds[id]||{x:id%4*cw,y:Math.floor(id/4)*ch,width:cw,height:ch},height=kind==='chicken'?68:kind==='boar'?93:kind==='kid'?94:120,width=b.width/b.height*height;shadow(c,x,y,kind==='boar'?42:20);
   c.save();c.translate(x,y);if(dir.x<-.1)c.scale(-1,1);if(walking&&['a','b','thief','hunter'].includes(kind)){
    // Fallback uses a hinged lower body, alternating feet and an opposite torso sway.
    // Full four-direction authored sheets replace this once available.
    const phase=distance/13*Math.PI/2,swing=Math.sin(phase),split=.72,legH=height*(1-split),legSource=b.height*(1-split);
    for(const side of [-1,1]){c.save();c.translate(side*width*.16,-legH);c.rotate(side*swing*.11);c.drawImage(img,b.x+(side===1?b.width/2:0),b.y+b.height*split,b.width/2,legSource,-width*.25,0,width/2,legH);c.restore();}
    c.save();c.rotate(-swing*.025);c.drawImage(img,b.x,b.y,b.width,b.height*split,-width/2,-height,width,height*split);c.restore();
   }else{const bob=walking?Math.abs(Math.sin(distance/13))*1.4:0;c.drawImage(img,b.x,b.y,b.width,b.height,-width/2,-height-bob,width,height);}c.restore();return;
  }if(kind==='chicken')chicken(c,x,y,t);else if(kind==='boar')boar(c,x,y);else person(c,x,y,kind,t,walking,dir);
 }
 drawEntity(c,h,t){
  if(h.hiddenSprite)return;
  if(h.type==='monster'&&h.kind==='wisp'){
   const img=this.assets.wisp,hover=Math.sin(t*2.3+h.x*.01)*7;shadow(c,h.x,h.y,20);
   c.save();const glow=c.createRadialGradient(h.x,h.y-48-hover,2,h.x,h.y-48-hover,52);glow.addColorStop(0,'#a2edc344');glow.addColorStop(1,'#72d3b300');c.fillStyle=glow;c.fillRect(h.x-52,h.y-100-hover,104,104);
   if(img){const b=this.wispBounds||{x:269,y:144,width:659,height:894},height=92,width=b.width/b.height*height;c.drawImage(img,b.x,b.y,b.width,b.height,h.x-width/2,h.y-105-hover,width,height);}c.restore();return;
  }
  if(h.type==='monster'){
   if(this.drawEnemySprite(c,h.x,h.y,h.kind,!!h.walking,h.facing||{x:0,y:1},h.walkDistance||0))return;
   // During loading keep only a soft ground shadow for the small creatures;
   // their painted silhouettes replace it as soon as the shared atlas is ready.
   if(h.kind==='rabbit'||h.kind==='snake')shadow(c,h.x,h.y,20);
   else this.drawSprite(c,h.x,h.y,h.kind==='bandit'?'thief':'boar',t,!!h.walking,h.facing||{x:0,y:1},h.walkDistance||0);return;
  }
  if(h.type==='gather'){const img=this.assets.herb;if(img){const height=52,width=907/548*height;shadow(c,h.x,h.y,18);c.drawImage(img,184,356,907,548,h.x-width/2,h.y-height,width,height);}return;}
  if(h.type==='drop'){shadow(c,h.x,h.y,17);poly(c,[[h.x-16,h.y],[h.x-18,h.y-20],[h.x-8,h.y-33],[h.x+5,h.y-35],[h.x+18,h.y-21],[h.x+16,h.y]],'#aa8450','#635039',2);line(c,[[h.x-10,h.y-27],[h.x+12,h.y-27]],'#d8bd78',3);ellipse(c,h.x,h.y-13,6,7,'#d2b568');const glow=.5+Math.sin(t*3+h.x)*.2;ellipse(c,h.x+21,h.y-34,2,2,'rgba(255,230,157,'+glow+')');return;}
  const kind=h.kind||h.id;this.drawSprite(c,h.x,h.y,PEOPLES[kind]!==undefined?kind:'hunter',t,false,this.facing);
 }
 isStorySpot(h){return !!this.storyTarget&&(this.storyTarget.scene===this.scene&&this.storyTarget.id===h.id||h.type==='exit-area'&&h.target===this.storyTarget.scene);}
 draw(){
  const c=this.ctx,v=this.view,t=this.time;if(!v)return;c.setTransform(this.dpr,0,0,this.dpr,0,0);c.clearRect(0,0,this.cssWidth,this.cssHeight);rect(c,0,0,this.cssWidth,this.cssHeight,'#3b4935');c.save();c.scale(v.scale,v.scale);c.translate(-v.x,-v.y);c.drawImage(this.background,0,0);
  const people=new Set(['chicken','boar','kid','aunt','hunter','pawnshop','flower','thief','cart','fair']),illustrated=!!this.assets[SCENES[this.scene].asset],actors=[];
  for(const h of this.hotspots){if(h.anchorOnly||h.companion||['door','exit','exit-area','search','camp','chest'].includes(h.type)||h.id==='cave'||illustrated&&['fire','mechanism','cellar','rest'].includes(h.id))continue;actors.push({y:h.y,draw:()=>this.worldEntities.has(h.id)?this.drawEntity(c,h,t):people.has(h.id)?this.drawSprite(c,h.x,h.y,h.id,t,false,this.facing):object(c,h,t,this.searched.has(h.id))});}
  if(this.companion)actors.push({y:this.follower.y,draw:()=>this.drawSprite(c,this.follower.x,this.follower.y,'b',t,performance.now()<(this.followerWalkUntil||0),this.followerFacing,this.followerDistance)});
  actors.push({y:this.player.y,draw:()=>{ellipse(c,this.player.x,this.player.y+3,22,8,'#eee1a52e');c.beginPath();c.ellipse(this.player.x,this.player.y+3,22,8,0,0,Math.PI*2);c.strokeStyle='#f4d992';c.lineWidth=2;c.stroke();this.drawSprite(c,this.player.x,this.player.y,'a',t,performance.now()<(this.walkUntil||0),this.facing,this.walkDistance);}});actors.sort((a,b)=>a.y-b.y).forEach(a=>a.draw());
  if(this.path.length){const p=this.path[this.path.length-1];c.beginPath();c.ellipse(p.x,p.y,12,6,0,0,Math.PI*2);c.strokeStyle='#e7d498';c.lineWidth=2;c.stroke();}
  for(const h of this.hotspots){if(!this.isNameplateVisible(h))continue;const sx=(h.x-v.x)*v.scale,sy=(h.y-v.y)*v.scale;if(sx<-90||sx>this.cssWidth+90||sy<-30||sy>this.cssHeight+160)continue;const near=Math.hypot(h.x-this.player.x,h.y-this.player.y)<125,searched=this.searched.has(h.id),quest=this.isStorySpot(h),b=this.getNameplateRect(h);
   c.font=(near||quest?'600 ':'500 ')+b.font+'px '+MAP_FONT;c.textAlign='center';c.textBaseline='middle';const opened=h.id==='cave:open'?this.caveState.open:h.id==='cave:sealed'?this.caveState.sealed:false;const label=opened?(h.id==='cave:sealed'?'已开启的铜匣':'已开启的木箱'):h.id==='cave:sealed'&&!this.caveState.unlocked?'玄纹封匣 · 锁着':searched?'已搜寻':h.name;c.fillStyle=quest?'#57432aee':near?'#312b23df':['monster','drop'].includes(h.type)?'#342d25d4':'#2e3029cf';const radius=4/v.scale;if(c.roundRect){c.beginPath();c.roundRect(b.x,b.y,b.width,b.height,radius);c.fill();}else rect(c,b.x,b.y,b.width,b.height,c.fillStyle);c.fillStyle=searched?'#b7ae91':quest?'#ffe0a1':h.type==='monster'?'#edc1a6':near?'#f7dea4':'#f1e8cb';c.fillText(label,h.x,b.y+b.height/2+.5/v.scale);
   if(quest){const xx=h.x,yy=b.y-10/v.scale+Math.sin(t*3)*2/v.scale;poly(c,[[xx,yy-7/v.scale],[xx+5/v.scale,yy],[xx,yy+7/v.scale],[xx-5/v.scale,yy]],'#f1c66e','#78522d',1/v.scale);}
   if(near){const yy=b.y+b.height;poly(c,[[h.x-4/v.scale,yy+2/v.scale],[h.x+4/v.scale,yy+2/v.scale],[h.x,yy+6/v.scale]],quest?'#f1c66e':'#e6c77f');}
  }
  if(performance.now()-this.failAt<700&&this.failPoint){const p=this.failPoint;line(c,[[p.x-8,p.y-8],[p.x+8,p.y+8]],'#b76c54',2);line(c,[[p.x+8,p.y-8],[p.x-8,p.y+8]],'#b76c54',2);}c.restore();c.setTransform(1,0,0,1,0,0);
 }
 destroy(){this.assetDisposed=true;for(const request of this.assetRequests.values())request.cancel();this.assetQueue=[];cancelAnimationFrame(this.frame);this.canvas.removeEventListener('pointerdown',this.pointerHandler);window.removeEventListener?.('resize',this.resizeHandler);this.observer?.disconnect();}
}
window.RPGMap=RPGMap;
})();
