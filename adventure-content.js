/* Building-specific finds and useful travel items, independent of dialogue. */
(function(){
'use strict';
const items=[
 {id:'bun',name:'热馒头',type:'干粮',description:'客栈与农家常备的干粮。为在队人物恢复20点气血。'},
 {id:'wine',name:'桂花酿',type:'酒饮',description:'封口完好的小酒壶。恢复在队人物全部内力。'},
 {id:'ricecake',name:'桂花糕',type:'点心',description:'茶案上留下的软糕。为在队人物恢复25点气血。'},
 {id:'dried_meat',name:'风干肉',type:'干粮',description:'猎户出门常带的干肉。为在队人物恢复40点气血。'},
 {id:'tea_leaf',name:'山茶包',type:'茶饮',description:'一包焙好的山茶。为在队人物恢复18点内力。'},
 {id:'cotton',name:'干净布条',type:'伤药',description:'橱柜中收好的干净布料。包扎伤口，为在队人物恢复25点气血。'},
 {id:'lamp_oil',name:'灯油',type:'材料',description:'仍能燃烧的桐油，可在破庙点燃篝火。'},
 {id:'incense',name:'安神香',type:'消耗品',description:'香气清淡，定心安神。为在队人物恢复12点内力。'},
 {id:'spirit_ash',name:'幽灯灰',type:'材料',description:'鬼火熄灭后留下的细灰。可在破庙药锅边配成解毒散。'},
 {id:'manual_fan',name:'回风扇诀',type:'秘籍',description:'研读后B学会「清风回旋」，在战斗中运扇攻击，并击退助阵帮众。'},
 {id:'manual_blade',name:'破石掌谱',type:'秘籍',description:'研读后A学会「破石劲」，重击并打断野猪王的蓄力。'},
 {id:'mechanism_pin',name:'燕尾铜机括',type:'机关钥匙',description:'许账房交付的小铜件，正能嵌入野猪林山洞封纹箱的燕尾锁孔。'}
];
for(const item of items)if(!window.CHAPTER_DATA.items.some(v=>v.id===item.id))window.CHAPTER_DATA.items.push(item);
const pools={
 inn:{cabinet:['cotton','tea_leaf'],chest:['wood','herb'],table:['bun','ricecake'],food:['bun','wine','ricecake'],materials:['wood','cotton'],default:['cotton','tea_leaf','herb']},
 home:{cabinet:['cotton','herb'],chest:['wood','cotton'],table:['bun','ricecake'],food:['bun','dried_meat'],medicine:['herb'],materials:['wood'],default:['bun','cotton']},
 store:{cabinet:['herb','tea_leaf'],chest:['antidote','cotton'],table:['bun','ricecake'],food:['bun','tea_leaf'],medicine:['herb','antidote'],materials:['wood','cotton'],default:['cotton','herb','tea_leaf']},
 pawnroom:{cabinet:['tea_leaf','cotton'],chest:['manual_blade'],table:['tea_leaf'],clue:['manual','tea_leaf'],default:['herb','cotton','tea_leaf']},
 flowerroom:{cabinet:['cotton','incense'],chest:['manual_fan'],table:['ricecake','tea_leaf'],food:['wine','ricecake','tea_leaf'],medicine:['incense'],default:['cotton','incense']},
 templehall:{cabinet:['cotton','incense'],chest:['antidote','manual'],table:['lamp_oil','incense'],medicine:['herb','incense'],materials:['wood'],clue:['incense','manual'],default:['lamp_oil','cotton']},
 oldcave:{cabinet:['manual','incense'],chest:['antidote','manual'],table:['lamp_oil','herb'],medicine:['herb','antidote'],materials:['wood'],default:['incense','cotton']},
 watersidehut:{bedding:['cotton','dried_meat'],stove:['bun','dried_meat'],cupboard:['herb','cotton'],food:['dried_meat','bun'],materials:['wood'],clue:['tea_leaf'],default:['cotton','herb']},
 hilltrail:{clue:['incense','tea_leaf'],materials:['wood','cotton'],default:['herb']}
};
function primary(h){return /:(cabinet|chest|table|bedding|stove|cupboard)$/.test(h.id);}
function find(room,h,random){
 const pool=pools[room]||pools.home,key=h.id.split(':').pop(),options=pool[key]||pool[h.lootCategory]||pool.default;
 const id=options[Math.floor(random()*options.length)],count=/^manual/.test(id)||['wine','antidote','lamp_oil'].includes(id)?1:1+(random()>.55?1:0);
 const coins=/chest|valuables/.test(key+' '+h.lootCategory)?5+Math.floor(random()*17):0;
 return{empty:false,coins,items:{[id]:count},text:'查看'+h.name+'，找到了收在这里的'+(items.find(v=>v.id===id)||window.CHAPTER_DATA.items.find(v=>v.id===id))?.name+'。'};
}
window.JianghuContent={items,pools,primary,find};
})();
