/* Exploration gates. Dialogue indexes remain in story.js; saved progress stays act/step. */
(function(){
  'use strict';

  // A stage can begin only by talking to its NPC in its scene. The engine must
  // end the conversation at `to`, then return control until the next NPC is met.
  // An anchor requires both the NPC interaction and being near the named place.
  window.STORY_TRIGGERS = {
    1: [
      {id:'market-child',from:0,to:5,scene:'town',npc:'kid',label:'去菜市场，和豆子说话'},
      {id:'chicken-chase',from:6,to:8,scene:'town',npc:'aunt',label:'去找王大娘，收拾这场偷鸡风波'},
      {id:'carriage-meeting',from:9,to:11,scene:'town',npc:'cart',label:'到河东的马车旁，和陈车夫交谈'}
    ],
    2: [
      {id:'poor-alliance',from:0,to:18,scene:'town',npc:'cart',label:'回到马车旁，听听这位公子的解释'}
    ],
    3: [
      {id:'forest-companions',from:0,to:2,scene:'forest',npc:'partner',label:'进入野猪林后，和B商量接下来的路'},
      {id:'hunter-warning',from:3,to:6,scene:'forest',npc:'hunter',label:'找到林猎户，打听林中野兽的习性'},
      {id:'boar-rescue',from:7,to:12,scene:'forest',npc:'boar',label:'到野猪王面前，准备并肩应敌'},
      {id:'cave-jade',from:13,to:15,scene:'forestcave',npc:'partner',anchor:'cave:open',radius:240,label:'在洞口木箱旁和B聊聊青玉，然后出洞前往河阳镇'}
    ],
    4: [
      {id:'heyang-plan',from:0,to:2,scene:'heyang',npc:'partner',label:'到河阳镇，和B商量盘缠的事'},
      {id:'pawnshop-credit',from:3,to:11,scene:'heyang',npc:'pawnshop',label:'找到周掌柜，听B如何开口赊账'},
      {id:'flowerhouse-letter',from:12,to:20,scene:'heyang',npc:'flower',label:'去醉花楼门前，和阿绫交谈'}
    ],
    5: [
      {id:'temple-shelter',from:0,to:3,scene:'temple',npc:'partner',label:'到荒山破庙，和B看看这处落脚地'},
      {id:'cellar-accountant',from:4,to:11,scene:'temple',npc:'accountant',label:'靠近地窖，回应地下传来的人声'},
      {id:'temple-nighttalk',from:12,to:17,scene:'temple',npc:'partner',anchor:'fire',radius:240,label:'回到篝火旁，和B吃饭夜谈'}
    ],
    6: [
      {id:'fair-business',from:0,to:7,scene:'heyang',npc:'partner',anchor:'fair',radius:220,label:'到庙会摊位旁，和B商量做一桩江湖生意'},
      {id:'fair-rumours',from:8,to:8,scene:'heyang',npc:'flower',label:'再问问阿绫，庙会上有哪些新鲜事'},
      {id:'tiger-blockade',from:9,to:18,scene:'heyang',npc:'tiger',label:'找到拦路的黑虎帮二当家，面对真正的麻烦'}
    ],
    7: [
      {id:'sugar-memory',from:0,to:7,scene:'temple',npc:'partner',anchor:'fire',radius:240,label:'回破庙的篝火旁，和B共进晚饭'},
      {id:'young-master-secret',from:8,to:17,scene:'temple',npc:'masked',label:'夜深后，去庙外见一见树后的蒙面人'}
    ]
  };

  // Spawn only the actor needed by the current stage. Resolve anchor against
  // the map's actual hotspot position and snap the offset onto a legal road.
  window.STORY_ACTORS = [
    {scene:'temple',id:'accountant',kind:'pawnshop',name:'许账房',anchor:'cellar',offset:{x:-45,y:70},act:5,stage:'cellar-accountant',unrevealedName:'地下的声音',revealEvent:'temple'},
    {scene:'heyang',id:'tiger',kind:'thief',name:'黑虎帮二当家',anchor:'fair',offset:{x:190,y:95},act:6,stage:'tiger-blockade'},
    {scene:'temple',id:'masked',kind:'thief',name:'蒙面人',anchor:'rest',offset:{x:180,y:55},act:7,stage:'young-master-secret'}
  ];
})();
