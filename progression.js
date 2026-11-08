/* Shared growth and authored martial arts. No save or interface side effects. */
(function(){
  'use strict';
  const MAX_LEVEL=30;
  const XP=x=>Number.isFinite(Number(x))?Math.max(0,Math.floor(Number(x))):0;
  const threshold=level=>50*Math.max(0,level-1)*level;
  function level(xp){let value=1,x=XP(xp);while(value<MAX_LEVEL&&x>=threshold(value+1))value++;return value;}
  function nextXP(xp){const current=level(xp);return current===MAX_LEVEL?null:threshold(current+1);}
  function stats(actor,xp){const lv=level(xp),growth=lv-1,isB=actor==='B';return{level:lv,maxHP:(isB?88:100)+growth*(isB?12:14),maxMP:40+growth*4,attackBonus:growth*3,defenseBonus:Math.floor(growth/2)};}
  const registry=Object.freeze({
    a_flurry:Object.freeze({id:'a_flurry',name:'掠影连击',actor:'A',cost:8,kind:'damage',power:30,description:'迅速连击，稳定命中，能压住野兔的侧跳。',manual:null}),
    b_breeze:Object.freeze({id:'b_breeze',name:'清风拂袖',actor:'B',cost:7,kind:'damage',power:26,description:'运劲于折扇，借清风卸力并反击。',manual:null}),
    shadow_step:Object.freeze({id:'shadow_step',name:'踏影',actor:'A',cost:6,kind:'evade',power:0,description:'施展轻功，闪避下一次敌方攻击；未受击前持续。',manual:'manual'}),
    fan_sweep:Object.freeze({id:'fan_sweep',name:'清风回旋',actor:'B',cost:11,kind:'sweep',power:38,description:'回旋扇风命中敌人，并击退一名助战帮众。',manual:'manual_fan'}),
    stone_breaker:Object.freeze({id:'stone_breaker',name:'破石劲',actor:'A',cost:12,kind:'heavy',power:47,description:'凝聚掌劲重击，并打断野猪王的蓄力。',manual:'manual_blade'})
  });
  const learnable=['shadow_step','fan_sweep','stone_breaker'];
  function normalizeLearned(value,legacyFlags){
    let ids=Array.isArray(value)?value:Array.isArray(value?.learnedSkills)?value.learnedSkills:[];
    const flags=legacyFlags||(!Array.isArray(value)?value?.flags||value:{});
    if(flags?.SKILL_SHADOW)ids=[...ids,'shadow_step'];
    return [...new Set(ids.filter(id=>learnable.includes(id)))];
  }
  function skills(learned,actor){const available=new Set(normalizeLearned(learned));return Object.values(registry).filter(skill=>skill.actor===actor&&(!skill.manual||available.has(skill.id)));}
  function skillForManual(item){return Object.values(registry).find(skill=>skill.manual===item)||null;}
  window.JianghuProgression=Object.freeze({MAX_LEVEL,level,nextXP,threshold,stats,skills,normalizeLearned,skillForManual,registry});
})();
