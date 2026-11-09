/* Jianghu iPhone release v8. Readable modules are retained in the repository. */
/* Saves contain plain JSON values; support iPhones on older Safari releases. */
if(typeof window.structuredClone!=='function')window.structuredClone=function(value){return JSON.parse(JSON.stringify(value));};
if(typeof Object.hasOwn!=='function')Object.hasOwn=function(object,key){return Object.prototype.hasOwnProperty.call(object,key);};

;
/* Chapter data is deliberately separate from the game engine and saved choices. */
window.CHAPTER_DATA = {
  title: '江湖多情债',
  chapter: '第一章 · 鸡飞狗跳下江湖',
  epigraph: '江湖路远，先从一只鸡开始。',
  acts: [
    {
      id: 1, title: '偷鸡这件小事', location: '青石镇', subtitle: '清晨 · 菜市场',
      objective: '到菜市场看看那只大公鸡。',
      steps: [
        { speaker: '旁白', text: '青石镇的清晨，总是先被鸡叫唤醒，然后才是商贩的吆喝与孩童的笑声。一个年轻人蹲在菜摊后，目不转睛地盯着一只肥鸡。' },
        { speaker: 'A', text: '好家伙，这鸡少说也有五斤。要是炖了，够吃三天。' },
        { speaker: '小孩', text: '哥哥，你在干什么？' },
        { speaker: 'A', text: '嘘。哥哥在跟它谈人生。' },
        { speaker: '小孩', text: '鸡也听得懂人生吗？可是……那是王大娘家的鸡。' },
        { speaker: 'A', text: '你这孩子，怎么这么不懂江湖规矩。', choices: [
          { text: '趁王大娘不注意，直接抱走。', flag: 'CHICKEN_METHOD', value: 'grab' },
          { text: '用半块馒头把鸡骗过来。', flag: 'CHICKEN_METHOD', value: 'bait' },
          { text: '跟鸡商量，让它自愿跟自己走。', flag: 'CHICKEN_METHOD', value: 'persuade' }
        ] },
        { speaker: '王大娘', text: '抓贼啊！有人偷鸡啦！前头那个抱鸡的，你给我站住！' },
        { speaker: 'A', text: '跟你走当然要站住，逃命哪能站住！这镇上的路怎么修得跟迷宫似的！' },
        { speaker: '旁白', text: 'A抱着鸡穿过窄巷，绕开菜筐，翻过木箱。一辆停在路边的马车，成了他眼前唯一的藏身处。' },
        { speaker: 'B', text: '阁下这是……' },
        { speaker: 'A', text: '借个地方躲躲！——鸡也借你抱一会儿。' },
        { speaker: 'B', text: '在下倒是第一次见到，有人逃命还带着晚饭的。' }
      ]
    },
    {
      id: 2, title: '两个骗子的第一次合作', location: '青石镇郊外', subtitle: '晨光 · 路边马车',
      objective: '和马车里的公子谈谈，一起离开青石镇。',
      steps: [
        { speaker: 'B', text: '外面可是有人追你？' },
        { speaker: 'A', text: '没有。至于这只鸡……它是我的朋友。' },
        { speaker: 'B', text: '阁下交友倒是广泛。' },
        { speaker: '旁白', text: '持扇的公子瞥过车外追来的王大娘，不紧不慢地理了理衣袖，换上一副富家公子的腔调。' },
        { speaker: 'B', text: '大娘消消气。这鸡的钱记在我账上，照价赔你。老陈，烦请作个见证。' },
        { speaker: '王大娘', text: '看在陈车夫的面子上，午后来结！鸡也得还我，那可是我家报晓的！' },
        { speaker: 'A', text: '鸡都没留下，倒欠下一笔。你还真有钱？' },
        { speaker: 'B', text: '自然。——现在，十两银子。刚才替你解围，十两。' },
        { speaker: 'A', text: '我只有八文。你不是说你有钱吗？' },
        { speaker: 'B', text: '那是对外说的。你偷鸡的时候倒是挺有志气。' },
        { speaker: '陈车夫', text: '裴公子，等等！你写的赊账凭据，那个印是画上去的吧？上回的钱还没结！' },
        { speaker: '旁白', text: 'B的笑意略滞，随后取出一块玄纹玉佩。陈车夫盯着那纹样，忽然压低了声音。' },
        { speaker: '陈车夫', text: '这个纹……我师父从前提过。罢了，看旧商号的面子，这回暂且记账。下次可不能再拖。' },
        { speaker: 'A', text: '原来你也是个穷鬼。你到底是什么人？' },
        { speaker: 'B', text: '在下姓裴，名……算了，名字不重要。你叫我公子就行。' },
        { speaker: 'A', text: '穷公子？' },
        { speaker: 'B', text: '你这人真的很讨厌。……往前是野猪林，追债的暂时追不到。同行？' },
        { speaker: 'A', text: '同行归同行，我的八文借给你给大娘垫鸡钱。写张欠条，可别赖。', choices: [
          { text: '把欠条收好。江湖上，口说无凭。', flag: 'AB_DEBT', value: 'kept' },
          { text: '把欠条折成小船，再收好。', flag: 'AB_DEBT', value: 'boat' }
        ] },
        { speaker: 'B', text: '八文钱都写欠条，你是穷怕了吧。放心，本公子一言九鼎。' }
      ]
    },
    {
      id: 3, title: '野猪林的穷鬼联盟', location: '野猪林', subtitle: '午后 · 林间小道',
      objective: '采集草药，探索林间小道，挑战守洞的野猪王。',
      steps: [
        { speaker: 'B', text: '我看你这人也不像坏人，就是穷了些。你知道吗？我最讨厌穷人。' },
        { speaker: 'A', text: '巧了，我最讨厌骗子。——那我们还挺般配。' },
        { speaker: '旁白', text: '林间小道通向河边营地，再往里是一处山洞。草药与硬木散落其间，草丛里却也藏着毒蛇和野猪。' },
        { speaker: '猎户', text: '洞口有只野猪王。普通野猪冲撞之前会刨地，那大家伙也一样。看见它蓄力，先护住自己！' },
        { speaker: 'A', text: '听见没有？说你呢，别光顾着摆扇子。' },
        { speaker: 'B', text: '本公子这是在观察敌情。' },
        { speaker: '旁白', text: '穿过密林后，洞口的巨兽缓缓抬头。野猪王的獠牙刮过树干，发出刺耳的响声。' },
        { speaker: 'A', event: 'boarBattle', text: '它刨地了！先防住这一撞，等它收势再打！' },
        { speaker: '旁白', text: '一番恶斗，野猪王终于轰然倒下。断枝被撞落，B来不及避开，膝头一软。林子深处，又传来一声低吼。' },
        { speaker: 'A', text: '还有一只……得把他带出去！', choices: [
          { text: '挡在B面前：「躲后面去！」', flag: 'AB_RESCUE', value: 'trust' },
          { text: '扶起B：「站得起来吗？咱们一起上。」', flag: 'AB_RESCUE', value: 'partner' },
          { text: '绕到侧面引开野猪，再回来接B。', flag: 'AB_RESCUE', value: 'return' }
        ] },
        { speaker: '旁白', text: '两人终于脱险。A把B扶到石边，仔细听过周围动静，才松了口气。B低头拍着衣上的泥，许久没有开口。' },
        { speaker: 'B', text: '……今日算我欠你一回。这个可不写欠条。' },
        { speaker: 'A', text: '放心，我记性好着呢。还能走吗？洞里说不定有值钱的东西。' },
        { speaker: '旁白', text: '洞中旧箱里躺着半块青玉。纹样与B的玄纹玉佩有些相似，却又不尽相同。B看见它，手中的折扇停了一瞬。' },
        { speaker: 'A', text: '你认识？' },
        { speaker: 'B', text: '不认识。这东西看起来挺值钱。……咳，开个玩笑，先收着吧。' }
      ]
    },
    {
      id: 4, title: '赊账少主', location: '河阳镇', subtitle: '傍晚 · 老当铺与醉花楼',
      objective: '拜访周记当铺，去醉花楼门前打听落脚处。',
      steps: [
        { speaker: 'A', text: '打猎换钱，总比张嘴喝风强。' },
        { speaker: 'B', text: '赚钱这种事情，怎么能只靠卖苦力？靠脑子。' },
        { speaker: 'A', text: '你有吗？' },
        { speaker: '周掌柜', text: '又是你？上次的账还没还。' },
        { speaker: 'B', text: '老板，好久不见。这不是特地来还人情了吗？咱们从前的往来，你也都记着。' },
        { speaker: '周掌柜', text: '人情我记着，银钱也记着。你先别笑，钱呢？' },
        { speaker: '旁白', text: 'B轻轻把玄纹玉佩放在桌上。周掌柜的脸色倏地变了。' },
        { speaker: '周掌柜', text: '这东西……你父亲……' },
        { speaker: 'B', text: '家传。老板，做生意就做生意，不该问的别问。' },
        { speaker: '周掌柜', event: 'merchant', text: '十二两，连同两包药材，记在你的名下。这份情面，只在我店里算数。旧事，你自己当心。' },
        { speaker: 'A', text: '你这玉佩真能当钱用？' },
        { speaker: 'B', text: '换个不认识我的掌柜，怕是连杯茶都换不来。人情这门买卖，可比玉佩难攒。' },
        { speaker: '阿绫', text: '哟，这不是我们的小裴吗？以前扫地洗衣服，跑得比谁都快！' },
        { speaker: 'B', text: '姑娘认错人了。' },
        { speaker: 'A', text: '小裴？哈哈哈哈……', choices: [
          { text: '收住笑，不再追问他的过去。', flag: 'AB_RESPECT', value: true },
          { text: '问一句：「你以前在这里做事？」', flag: 'AB_RESPECT', value: false }
        ] },
        { speaker: 'B', text: '旧事而已，改天再说。阿绫，妈妈最近身体可好？' },
        { speaker: '阿绫', text: '好着呢。正巧有人捎信来，叫我们留心你。这信封上写的是——「臭小子，活着就回来看看。」' },
        { speaker: '旁白', text: '落款只有三个字：凤妈妈。B把信折好，收入贴身的衣袋。' },
        { speaker: 'A', text: '你家里还有人？一个很凶的女人？……你娘？' },
        { speaker: 'B', text: '差不多吧。' },
        { speaker: '旁白', text: 'A没有再问。暮色落上河阳镇的屋脊，这一回，B的笑容里没有讨好谁的意思。' }
      ]
    },
    {
      id: 5, title: '破庙里的秘密', location: '荒山破庙', subtitle: '入夜 · 雨将至',
      objective: '修好窗户、点起篝火，查明地下的怪声。',
      steps: [
        { speaker: 'A', text: '这地方不错。总比睡树上好。' },
        { speaker: 'B', text: '漏风。地上还有老鼠。' },
        { speaker: 'A', text: '那正好，你睡地上，老鼠跟你作伴。' },
        { speaker: 'B', text: '我现在后悔认识你了。' },
        { speaker: '旁白', text: '清出一块干地，收些木柴，再用硬木补上破窗。这座荒庙，总算有了能让人安心坐下的地方。供桌后的旧机关也露出了轮轴。' },
        { speaker: '神秘声音', text: '还……我……' },
        { speaker: 'A', text: '你怕鬼？怎么站我后面去了？' },
        { speaker: 'B', text: '笑话，本少主什么场面没见过？我这是在保护你。' },
        { speaker: '旁白', event: 'temple', text: '扳开修好的机关，石板缓缓移开。地下没有鬼，只有一个饿得几乎说不出话的老人。' },
        { speaker: '许账房', text: '还……我……的水袋。多谢。别往外说我在这儿，有人一直在找这本东西。' },
        { speaker: '旁白', text: '老人曾是旧商号的账房先生。他交出一张残缺账页，墨迹间夹着一个陌生的符号。B看了一眼，忽然握紧折扇。' },
        { speaker: 'B', text: '先给老人留些水粮。账页，我们暂且替他收好。' },
        { speaker: '旁白', text: '夜更深了。两人坐在庙门口，分着一锅没什么油水的热汤。屋里的老人已经睡去。' },
        { speaker: 'A', text: '你以前过得很好吗？看起来不像。……我就是随便问问。' },
        { speaker: 'B', text: '还行。你倒是很会看人。你呢，家里还有人吗？' },
        { speaker: 'A', text: '没有了。很多年前就没有了。', choices: [
          { text: '「他们以前种菜。邻里后来照顾了我不少。」', flag: 'AB_CONFIDE', value: 'confide' },
          { text: '望着篝火，说一句：「都过去了。」', flag: 'AB_CONFIDE', value: 'past' },
          { text: '「所以这锅汤你少喝点，我还在长身体。」', flag: 'AB_CONFIDE', value: 'joke' }
        ] },
        { speaker: '旁白', text: 'B没有继续问。他只是把手边的汤碗往A那边推了推。风穿过补好的窗缝，已不似刚来时那样冷。' },
        { speaker: 'B', text: '明日河阳有庙会。先睡吧，明天再想办法。' }
      ]
    },
    {
      id: 6, title: '江湖第一神功', location: '河阳庙会', subtitle: '次日 · 灯彩满街',
      objective: '经营一次摊位，帮助庙会上的人，迎战黑虎帮。',
      steps: [
        { speaker: '旁白', text: '铜锣一响，庙会开场。彩棚、灯笼、卖糖人的、打把式的，把长街挤得水泄不通。B望了一圈，忽然合上折扇。' },
        { speaker: 'B', text: '机会来了。赚钱的机会。什么叫骗？这叫江湖生意。' },
        { speaker: 'A', text: '那我干什么？我觉得我们俩迟早要被抓。' },
        { speaker: 'B', text: '你眼睛尖，替我打个下手。咱们今日先做哪桩生意？', choices: [
          { text: '绝世秘籍：备好道具，听B编神功故事。', flag: 'FAIR_BUSINESS', value: 'manual' },
          { text: '江湖测字：留心客人的话，给B递消息。', flag: 'FAIR_BUSINESS', value: 'fortune' },
          { text: '武林表演：配合演一出「隔山打牛」。', flag: 'FAIR_BUSINESS', value: 'show' }
        ] },
        { speaker: 'B', event: 'fair', text: '诸位乡亲！习武也好，行路也好，讲究的就是一个「眼明心亮」！' },
        { speaker: 'A', text: '小声提醒你：那位姑娘刚才说，她已经成亲了。别又拿桃花运说事。' },
        { speaker: 'B', text: '……本公子说的自然是夫妻和美，花开并蒂。' },
        { speaker: '旁白', text: '几枚铜钱落进木盘。笑声中，两人第一次把彼此的眼力与口才，凑成了一桩像样的合作。' },
        { speaker: '阿绫', text: '西街有人丢了钱袋，擂台上又在招亲。还有个醉汉正满街找玉佩。你们得空，也去看看吧。' },
        { speaker: '黑虎帮众', text: '二当家，就是他！拿一块旧玉佩在周记赊账，今日还在这儿装神弄鬼。' },
        { speaker: '黑虎帮二当家', text: '小子，把玉佩交出来。那上头的纹样，我见过。你跟那群死人，是什么关系？' },
        { speaker: 'B', text: '做生意的，先讲个价钱。伸手就要，不怕坏了河阳的规矩？' },
        { speaker: '黑虎帮二当家', event: 'finalBattle', text: '我的刀，就是规矩！' },
        { speaker: 'A', text: '先清掉他叫来的帮众！他盯上你了——小心！' },
        { speaker: '旁白', text: '刀光朝B颈侧逼近。只在一瞬间，B脚下掠出一道极快的身影，避开的角度与先前判若两人。A看得清清楚楚。' },
        { speaker: 'A', text: '你刚才那一下……挺快啊。你不是说自己不会武功吗？' },
        { speaker: 'B', text: '练过。本少主说的是，不会高深武功。' },
        { speaker: 'A', text: '你这个人，说话怎么总留半句？' },
        { speaker: 'B', text: '这叫语言的艺术。先回破庙，剩下半句，改日再议。' }
      ]
    },
    {
      id: 7, title: '少主的秘密', location: '荒山破庙', subtitle: '第三夜 · 月上残檐',
      objective: '与B共进晚饭，结束这几日的江湖冒险。',
      steps: [
        { speaker: 'A', text: '你还欠我钱。别装不记得，三天前，八文。有凭据！' },
        { speaker: 'B', text: '字写得真丑。……本少主一言九鼎。下次还。' },
        { speaker: 'A', text: '我看你是九个鼎，八个都漏。' },
        { speaker: '旁白', text: '分饭时，一枚用旧糖纸包着的糖，从A的衣袋里滚了出来。他拾得很快，却仍被B看见。' },
        { speaker: 'B', text: '你怎么总带着它？喜欢怎么不吃？留到什么时候？' },
        { speaker: 'A', text: '喜欢。留着。', choices: [
          { text: '把糖纸重新折好，贴身收起。', flag: 'A_SUGAR', value: 'kept' },
          { text: '看一会儿糖纸，再轻轻收起。', flag: 'A_SUGAR', value: 'remembered' }
        ] },
        { speaker: '妹妹的声音', text: '哥哥，记得给我买糖！' },
        { speaker: '旁白', text: '菜篮旁，小女孩的笑容一闪而过。回到眼前，只有灯火与一碗渐凉的汤。B不再问，只替他把倾斜的灯芯拨正。' },
        { speaker: '旁白', text: '夜深，A已经睡着。B独自走出庙门，取出玄纹玉佩。树后的影子无声地跪了下去。' },
        { speaker: '蒙面人', text: '少主。栖云旧案，有新的线索了。有人在找当年的幸存者，也有人开始调查那本账册。' },
        { speaker: 'B', text: '不是说了，不要来找我吗？……我父亲留下的东西呢？' },
        { speaker: '蒙面人', text: '还在。' },
        { speaker: 'B', text: '那就继续查。这件事，不要让任何人知道。' },
        { speaker: '蒙面人', text: '包括您身边那位？' },
        { speaker: '旁白', text: 'B没有回答。隔着破窗，A在梦里翻了个身。' },
        { speaker: 'A', text: '鸡腿……别抢我的……' },
        { speaker: '旁白', text: 'B忍不住笑了一下，收起玉佩。山风拂过门前的草叶。这条江湖路，他们已经不再各走各的。' },
        { speaker: '旁白', text: '第一章 · 完\n江湖路远，先从一只鸡开始。' }
      ]
    }
  ],
  characters: [
    { id: 'A', name: 'A', role: '身手灵活的穷游侠', age: 25, description: '菜农家的孩子。嘴贫、贪财，观察敏锐，擅长潜行与顺手牵羊；对在乎的人，行动总比漂亮话快。' },
    { id: 'B', name: '裴公子', role: '藏着来路的赊账公子', age: 25, description: '圆滑爱面子，最会察言观色。幼时被凤妈妈收留，在醉花楼做杂役长大。擅长照顾别人的情绪，却不知道怎么接受关心。' },
    { id: 'wang', name: '王大娘', role: '青石镇菜贩', description: '嗓门大，心不坏。鸡必须还，账必须算，赔礼也会认真收下。' },
    { id: 'child', name: '豆子', role: '菜市场小孩', description: '对江湖规矩一窍不通，对谁家丢了什么却门儿清。' },
    { id: 'chen', name: '陈车夫', role: '老商号出身的车夫', description: '认得少数旧商号的纹样。愿意给一次面子，却不会无限赊账。' },
    { id: 'hunter', name: '林猎户', role: '野猪林猎人', description: '熟悉野兽习性，愿意传授观察冲撞的窍门。' },
    { id: 'herbalist', name: '采药婆婆', role: '林间采药人', description: '只求安全回家。认得能制解毒药的草药，也认得人嘴上的逞强。' },
    { id: 'zhou', name: '周掌柜', role: '周记当铺掌柜', description: '谨慎、念旧、账目分明。对B有所怀疑，认得玄纹玉佩，但没有说破。' },
    { id: 'aling', name: '阿绫', role: '醉花楼旧识', description: '嘴上逗趣，心里有分寸。知道B小时候的窘事，也替凤妈妈留意他的平安。' },
    { id: 'feng', name: '凤妈妈', role: 'B的养育者 · 本章仅书信出场', description: '凶得有理，护短也有底线。她有自己的生意、人脉与旧账，绝非只为解释B身世而存在。' },
    { id: 'xu', name: '许账房', role: '藏身破庙的旧商号账房', description: '随身护着一张残缺账页。比起传闻，更相信自己算过的账。' },
    { id: 'wine', name: '醉客', role: '庙会寻玉人', description: '酒醉误事，对祖传的玉佩却始终放心不下。' },
    { id: 'pocket', name: '钱嫂', role: '庙会游客', description: '钱袋不见了，里面还有替孩子买药的钱。' },
    { id: 'arena', name: '赵姑娘', role: '擂台守擂者', description: '擂台上的规矩她自己定。赢一场比武，不等于替任何人决定婚事。' },
    { id: 'tiger', name: '黑虎帮二当家', role: '本章最终敌人', description: '骄横多疑，见过与玄纹玉佩相关的旧物，试图逼问B的来历。' }
  ],
  items: [
    { id: 'herb', name: '止血草', type: '药材', description: '林间常见的草药。可恢复35点气血，也可用于破庙制药。' },
    { id: 'antidote', name: '解毒散', type: '消耗品', description: '以蛇胆和草药制成，清除中毒。' },
    { id: 'snake_gall', name: '蛇胆', type: '材料', description: '制作解毒药的材料。' },
    { id: 'wood', name: '硬木', type: '材料', description: '可补窗、修复机关，也可加固武器。' },
    { id: 'boar_hide', name: '野猪皮', type: '材料', description: '质地厚实，可制作基础防具。' },
    { id: 'tusk', name: '猪王獠牙', type: '战利品', description: '击败野猪王所得，可用于制作或卖给猎户。' },
    { id: 'king_hide', name: '猪王皮', type: '稀有材料', description: '比普通猪皮更坚韧。' },
    { id: 'wristguard', name: '山行护腕', type: '装备', description: '缝有厚皮衬里的护腕，防御力增加3点。' },
    { id: 'manual', name: '武功残页', type: '秘籍', description: '记着一套粗浅却管用的步法，可解锁「踏影」。' },
    { id: 'jade', name: '玄纹玉佩', type: '剧情道具', description: 'B父亲留下的旧玉。少数旧商号认得纹样，真正用途尚不明。不能出售，也不代表所有商人都愿意赊账。' },
    { id: 'half_jade', name: '半块青玉佩', type: '旧案线索', description: '野猪林山洞所得。纹样与玄纹玉佩有些相似，却不完全一样。暂时无人愿意解释。' },
    { id: 'letter', name: '凤妈妈的信', type: '书信', description: '「臭小子，活着就回来看看。」纸角被B抚平了好几次。' },
    { id: 'ledger', name: '残缺账页', type: '旧案线索', description: '许账房保管的旧账，残存几笔商号往来与一个陌生符号。' },
    { id: 'sugar', name: '一颗糖', type: '贴身旧物', description: '糖纸折得整整齐齐。A一直留着，尚未解释原因。' },
    { id: 'debt_note', name: '八文欠条', type: '凭据', description: 'B亲笔立下的借据。钱不多，字也算不上好看，A却收得十分认真。' },
    { id: 'pouch', name: '旧香囊', type: '贴身旧物', description: '布边补过两次，装着朴素的驱虫草。角上缝着一个小小的凤字。' },
    { id: 'wine_jade', name: '醉客的玉佩', type: '支线道具', description: '普通家传玉件，与两块剧情玉佩的纹样没有关系。' }
  ],
  quests: [
    { id: 'q_chicken', title: '一只鸡的人情', location: '青石镇', description: '把鸡还给王大娘，并补上一句赔礼。她会记得你是如何收场的。', reward: '王大娘的人情、馒头×2', optional: true, flag: 'Q_CHICKEN_APOLOGY' },
    { id: 'q_herb', title: '林间一把草', location: '野猪林', description: '替采药婆婆找来三株草药，送她到安全的河边营地。', reward: '解毒散×2、采药提示', optional: true, flag: 'Q_HERBALIST' },
    { id: 'q_pouch', title: '不值钱的香囊', location: '野猪林', description: '在河岸拾到B掉落的旧香囊。直接还给他，不拿旧物取笑。', reward: '羁绊记录「AB_POUCH」', optional: true, flag: 'AB_POUCH' },
    { id: 'q_boar', title: '洞口的大家伙', location: '野猪林', description: '听完猎户的提醒，打败守住山洞的野猪王。', reward: '猪王獠牙、猪王皮、山行护腕', optional: true, flag: 'Q_BOAR_KING' },
    { id: 'q_window', title: '一夜好梦', location: '荒山破庙', description: '用两根硬木补好窗户，再点起篝火。休息后恢复气血。', reward: '安全休息、修理机关的线索', optional: true, flag: 'Q_TEMPLE_REPAIR' },
    { id: 'q_purse', title: '谁偷了我的钱袋', location: '河阳庙会', description: '询问摊主，观察衣角沾着糖浆的人，找回钱嫂丢失的钱袋。', reward: '铜钱×35、钱嫂的谢意', optional: true, flag: 'Q_PURSE' },
    { id: 'q_arena', title: '比武招亲', location: '河阳庙会', description: 'A误入擂台，B在台下笑得收不住。与赵姑娘切磋，说明误会。', reward: '武功残页、擂台名声', optional: true, flag: 'Q_ARENA' },
    { id: 'q_wine', title: '酒鬼的遗失物', location: '河阳庙会', description: '顺着醉客走过的路线寻找玉佩。先问清纹样，避免与自己的玉佩混淆。', reward: '铜钱×25、桂花酿', optional: true, flag: 'Q_WINE_JADE' }
  ],
  npcMemoryDefaults: {
    zhou: { name: '周掌柜', temperament: '谨慎念旧', identityUsed: [], debtLiang: 0, returnedLiang: 0, fraudAttempts: 0, exposed: false, remembered: false, recognizedJade: false, knowsIdentity: '未知', notes: [] },
    chen: { name: '陈车夫', temperament: '讲情面，也要养家', identityUsed: [], debtLiang: 0, returnedLiang: 0, fraudAttempts: 0, exposed: false, remembered: false, recognizedJade: false, knowsIdentity: '未知', notes: [] },
    tea: { name: '茶摊孙掌柜', temperament: '爱热闹，账目认真', identityUsed: [], debtLiang: 0, returnedLiang: 0, fraudAttempts: 0, exposed: false, remembered: false, recognizedJade: false, knowsIdentity: '未知', notes: [] }
  },
  bondLabels: {
    AB_RESCUE: { title: '患难与共', values: { trust: '你挡在他身前。解锁 AB_TRUST_01。', partner: '你扶起他，并肩应敌。解锁 AB_PARTNER_01。', return: '你引开野猪，再回来接他。解锁 AB_RETURN_01。' } },
    AB_POUCH: { title: '旧香囊', description: '有些不值钱的东西，会被人一直带在身上。' },
    AB_DEBT: { title: '八文欠条', description: '写得不好看的凭据，记录着一段刚开始的同行。' },
    AB_CONFIDE: { title: '破庙夜谈', values: { confide: '你提起了家人与乡亲，尚未讲出完整往事。', past: '你暂时不想多说，他没有追问。', joke: '你用玩笑收起往事，他接住了这份沉默。' } },
    A_SUGAR: { title: '一颗糖', description: '留着，还不是吃它的时候。' },
    B_JADE: { title: '玉佩旧纹', description: '商号认得纹样，但B没有解释它的来历。' },
    AB_RESPECT: { title: '留一点余地', values: { true: '你收住追问。解锁 AB_RESPECT_01。', false: '你问了一句，他暂时回避。以后还有理解彼此的机会。' } }
  },
  flagRules: {
    AB_RESCUE: '三个取值均为成功救援，不换算为善恶或惩罚。',
    AB_RESPECT: '只有 true 解锁 AB_RESPECT_01；false 不是永久关系失败。',
    AB_CONFIDE: '本章所有选项都不完整披露栖云惨案。',
    ITEM_JADE: '始终属于B，不可消费或出售。',
    OLD_CASE_CLUE: '线索只记录发现，不提前给出幕后真相。'
  }
};

;
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

;
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

;
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

;
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

;
/* Furniture is inspected by touching its painted silhouette. Nothing is highlighted. */
(function(){
'use strict';
const object=(room,key,name,x,y,bounds,lootCategory,emptyText)=>({
 id:'loot:'+room+':'+key,room,object:key,name,type:'search',concealed:true,
 x,y,bounds,lootCategory,emptyText:emptyText||'仔细翻看了一阵，没有发现可带走的东西。'
});
const make=(room,rows)=>rows.map(row=>object(room,...row));
window.ROOM_SEARCH_LAYOUTS={
 inn:make('inn',[
  ['cabinet','客房衣柜',430,330,[205,90,255,212],'supplies','柜里叠着供客人换洗的旧布，没别的东西。'],
  ['chest','床尾木箱',925,325,[940,190,145,120],'valuables','木箱只余一股樟木香。'],
  ['table','茶桌',675,610,[475,355,355,235],'food','茶壶早已空了，杯底也很干净。'],
  ['pillow','下铺枕边',345,600,[85,540,210,88],'valuables','枕头下面只有一块补过的床单。'],
  ['winejar','墙边酒坛',945,455,[1000,323,118,165],'food','坛口封得很严，里面只剩酒香。'],
  ['basket','木桶与竹筒',930,675,[1055,590,105,133],'materials','竹筒里都是用过的筷子。']
 ]),
 home:make('home',[
  ['cabinet','农家木橱',410,330,[135,82,260,205],'supplies','橱里收着主人家过冬的旧衣。'],
  ['chest','靠墙木箱',925,325,[935,185,143,120],'valuables','箱底垫着报旧账的纸，已经褪色了。'],
  ['table','饭桌碗碟',640,565,[510,360,285,165],'food','碗里只剩几粒冷饭。'],
  ['stove','灶台灰缝',560,330,[410,190,225,110],'medicine','灰里埋着几块烧尽的炭。'],
  ['firewood','墙角柴堆',950,660,[1000,550,150,125],'materials','翻过柴堆，只有几片干叶。']
 ]),
 store:make('store',[
  ['cabinet','货铺木柜',400,330,[150,85,260,205],'supplies','柜门后是一摞等着结算的货单。'],
  ['chest','货铺木箱',925,325,[940,190,145,120],'valuables','箱子里只剩垫底的碎布。'],
  ['table','菜蔬桌案',650,560,[525,355,300,170],'food','菜叶还新鲜，主人显然刚收拾过。'],
  ['counter','柜台账纸',345,570,[105,290,200,330],'valuables','账纸上都是零碎的赊欠，没夹别物。'],
  ['shelf','药罐货架',790,330,[680,75,220,215],'medicine','罐底贴着价签，里面已经空了。'],
  ['sack','米袋夹层',945,605,[1025,440,145,180],'materials','袋里装着谷壳，没有可用的材料。'],
  ['lowcrate','墙边货篓',930,700,[1070,620,115,115],'supplies','篓子里只有垫货的稻草。']
 ]),
 pawnroom:make('pawnroom',[
  ['cabinet','当铺旧柜',410,355,[130,100,250,240],'valuables','柜内的典当物都被牢牢锁着。'],
  ['chest','铜扣木箱',925,355,[935,200,145,120],'supplies','箱里是些不成套的旧盒子。'],
  ['table','账房书桌',650,635,[475,405,310,190],'clue','摊开的账本只有近日流水，没有旧案的消息。'],
  ['ledger','柜台抽屉',820,375,[665,230,220,110],'clue','抽屉里是一叠空白当票。'],
  ['sideboxes','右墙旧匣',945,675,[1040,420,140,245],'valuables','几只空匣散着旧绒布的气味。']
 ]),
 flowerroom:make('flowerroom',[
  ['cabinet','雕花衣柜',420,365,[165,115,250,220],'supplies','柜里有淡淡的熏香，衣裳收得很齐整。'],
  ['chest','窗边妆箱',900,365,[900,210,155,135],'valuables','妆箱里都是些用空的胭脂盒。'],
  ['table','雅间茶案',650,610,[480,415,285,165],'food','茶盏还带着余温，碟中已空。'],
  ['cushion','坐榻软垫',325,620,[85,475,185,190],'valuables','软垫下面铺着干净的棉布。'],
  ['letter','案上信封',790,535,[620,430,120,85],'clue','只是一封尚未写字的素笺。'],
  ['planter','花盆底沿',945,610,[1060,450,125,105],'medicine','花土湿润，盆底没有藏物。']
 ]),
 templehall:make('templehall',[
  ['cabinet','褪色木柜',410,355,[170,120,220,215],'supplies','柜里只有虫蛀过的旧经布。'],
  ['chest','破庙木箱',905,360,[900,215,155,135],'valuables','木箱空空，锁也早坏了。'],
  ['table','残旧供桌',650,615,[505,420,280,165],'medicine','香灰积了厚厚一层，什么也没有。'],
  ['altar','神龛石缝',720,365,[480,120,330,220],'clue','石缝中夹着枯叶，没有发现文字。'],
  ['weststones','西墙碎石',270,610,[75,425,160,250],'materials','石块下只有潮湿的泥土。'],
  ['pillar','东侧断柱',930,650,[1050,470,125,220],'materials','柱根边散着碎石和枯草。']
 ]),
 oldcave:make('oldcave',[
  ['cabinet','洞中残柜',410,355,[170,120,220,215],'clue','柜门一碰便落下灰尘，里面已经空了。'],
  ['chest','石窟旧箱',905,360,[900,215,155,135],'valuables','旧箱里只留下一层霉味。'],
  ['table','石窟香案',650,615,[505,420,280,165],'medicine','干涸的灯油黏在桌角，没有别的东西。'],
  ['offering','神像脚下',680,365,[530,235,200,100],'clue','神像脚下压着许多风化的纸屑。'],
  ['westcrack','西壁石隙',280,440,[90,335,125,120],'materials','裂缝很浅，只摸到冰凉的石头。'],
  ['rubble','南侧乱石',345,690,[95,570,180,160],'materials','挪开碎石，下面仍是碎石。'],
  ['eastvines','断柱藤根',930,690,[1060,570,110,145],'medicine','藤根太老，已经不能入药了。']
 ]),
 watersidehut:make('watersidehut',[
  ['bedding','草褥夹层',355,510,[85,450,215,125],'supplies','草褥已经晒干，下面没有东西。'],
  ['stove','渔家灶膛',560,330,[410,190,225,110],'food','灶膛里只留着昨夜的灰。'],
  ['ricejar','右墙粮篓',945,460,[1010,330,140,180],'food','粮篓中只剩零星米糠。'],
  ['woodpile','灶旁短柴',745,330,[620,225,100,80],'materials','短柴被人仔细捆好了。'],
  ['cupboard','渔家木橱',410,330,[135,82,260,205],'valuables','木橱里是些旧碗，没有藏物。'],
  ['letterbox','桌下旧纸',830,525,[735,455,80,70],'clue','旧纸浸过水，字迹已经看不清了。']
 ])
};
window.OUTDOOR_SEARCH_LAYOUTS={
 hilltrail:[
  object('hilltrail','shrine','路边小龛',1705,485,[1550,165,280,285],'clue','龛前的石碗里只有几片落叶。'),
  object('hilltrail','cart','废弃木车',1600,955,[1480,790,235,120],'materials','车板翘起一角，底下只剩一些枯草。')
 ]
};
})();

;
/* Tiny authored scenery and people, bundled so slow networks never show an empty world.
 * Generated by prepare_previews.py; full-resolution assets replace these after loading.
 * SVG wrappers retain original intrinsic dimensions, preserving atlas crop coordinates.
 */
(function(){
'use strict';
const data={"town":[1536,1024,"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"],"forest":[1536,1024,"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"],"heyang":[1536,1024,"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"],"temple":[1536,1024,"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"],"interiors":[1881,836,"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"],"outskirts":[1536,1024,"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"],"riverwoods":[1536,1024,"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"],"hilltrail":[1536,1024,"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"],"forestcave":[1536,1024,"UklGRrARAABXRUJQVlA4IKQRAAAwZgCdASoAAasAPsFUoUwnpKMiLhOLyPAYCWVm515n4o8Ns6BhOpwpmXkyRG12OfG5fq/rsfJE+ntseDRcw3s2TCbM0h4WUXkobswz5/Cay8Hju3X62n6neDpr9UzFsDbHUEwnKZ9ylRpTgTQ9wMtezW/GKzD2vlzb5oXGFXa14Gm38E/vLSoGiHkuH0hghMpesVAv3uHd7NshCKIFzSTodJDwaJOB40A9WAB9xX1NV48r6OgheuqT+Q963aUYcThd+d5T4dZ0yq4femU1czv7C58ZUWYJda7upZpQcDlaI6QpJX+Le6CINrQT507UL8uipAuppffK/gRCmZg/JVCCcLmoC0CgIfmDWkix3/EUT8QaRPtnpokxktF+yJezeTMKMmXxl1EI4FFaaeVYjthv8J/QsjSluv3X5tzGam4zdfVh7wQHWBI7wv3hw7ONzCyqpxIJIlDwuAYw7K+uo6bczP5PvU/OLoVDvnklq4bnE23yk91U0GXVLM+7VHOdtclHSoUrccbyPm8x1dfrC6Ge00sfSwoEoJm2TqEkrBOLgF2B4eaWSM2KQYb2s/xbLDi9XRC8XPjiTg5z/6dp37Q/YZ6QUx/D9bFqJHLazIQ2DWnQzBo2wyYenIhFEUq9hEq2KiMn8I6hQlXJWRKwlJaA9ZCkxawlxrbA2oQBXsjqDvkhtI5Oeecif7oreB+1C9VUCsXfJFSOfnfPqym03qmSH2dL69a8AJxqYtNXqHz3M/n140fik7x9PdRj1pO9xladhEkjrHAz9T6KrqyyzxS1iBxu4LuevXdU+TNN20oGC5ClBN1fry0x8We/qqbZHuwblxcR06mt3hG1JGnycXDJQ4bCVwAHyVMqzd14G2BS31P/TyRnZZG/d5N/Z2WfFgzYKsngUqBKFTmVMy8GQojlbzNY8m2hD1rCCOq/Xy+sFqpT8f38En+iWv4CZObsVSkR+JE34oGt4a+8gCEFpFflLTRSJzKET2jr4cuPdF+CSYOmZ2Yy3v8CB3tN9ft/I/haMVp3q4UYEU8i67exNVed1Ee39HysmmWql1k2DO0me3GN1q+yJkAxOPxTFoeZfOkoSZfF7Tg9vkAAAP7ivJSWOjyX+gzq6wrX9VXV2/A6DtoeLQuHwSiNnmk+OrmJkTYiqs6MJCuoyYZTKos4aVmTtq9HIs6OynLjLtC7YmuFBgFLc5aDebhi+TBXg6DJJpwDN0G4hgLKXdMNnG2lzlvoQrY6vyVY9/JZtkp9/zxzII64mVxgw9uOO+7dpn2rRF1yV58d4VA8LWu8suDpmc8nO1ndXNxiSvM5fcEg15UvTb7qa4/GDWRNUSCzDdz2ZqBTe1vNO0dSTtomj+rqBSDjmok8cWYm+j861DU1+C/U8YObelW2pPDO6rBj0dENGmsie06D5BbcaFqXWMgP0rOQU60MernSYE74/IuH2HgS+8jOSD/RBnKwxZu0MYmZ1EFcoEQ8rzeKub6vyffiQ2bqVUvMsCNVJnwzz3Gn6zsZVA6I2QseSgG6gDp52YabI4mXwoXgi9D1ds1YQIE1g/hz5u4/YtlovpiVwyzJFWxxvNVchwkqW0SvccRLDyqihZbMP/OKF6Jk697GLsGmxeUSsM2tpEWoNMjrSuZED/ZpgEYyYHDU1usJLzZZsna87MLBlcdLlmCI4RdwDtoDVHtxobj+HA5s1m4L7x+DDVkE8TenCbrcCnjvyBxXZ3L69M5Fv6s8kgGItwbVNqnICUw9qtcmWBtThg7Vhn0ARXX8JLxF6G5d4JFELxwOYLm1Nt5XgKPe7hb5xMgqg3a6CxZX+DFHmEzKh6wHpyvxoJZPBZ4yBUFyjruA44rRX3g4krGp9EIctFlexc+UYqmamk+G+oXSk25TjG2J2wgDn7VqCx82dOrNT8CqboSrFNLH9/rxOpOqmUWnIyFHBbfGj+DzOHGNaSjQ9KfCJ0JnIk3jxkbcF2WlkSANAsFHFL0C3W8mkVdYbtx6ir+M2hH/euU8VaUoWyqbIXPogqEwWF0nv1tnZVHg9ek5tEmUHD2RicD2cf8OqDjlaPoGXsP+dmdHCtTKm5CjfDAHJahdCg7fijA2Othbu0ujwMKPp7Olqq952vEd9IzMim5r4F5L1wSOPgspcFHPnPTCgFbvxR5IC5YgZNZSYgQVO3kZ2AcdG//+4zGqOgmuQzOhPvuNk7LTHU5ATXqaeJJH4CQjL7dWKlNKzaUXMg5vLxbAebQkOhhtB73oyE33GOIBtCZww34XwgnIAa5ymZsVAcI7KMABxGADaCHbEBx1pfrUhS8k/+7PDHTgLj1muSHGILcgqHl49f60Uo35fx4vdshXv6fiMtf1NpvEZ/IbYnMqu56jNpa+BqI7szZDdmOr3F59q2pIygjroGxau/JUpNdxha6i9FZRiGUk2r/+hg9sk519/+vzSL5PKaDcRsguAiPzsteqgHrRXtITxX+OJDsXBR1FVPzcW5PbdMvMHIadaSCQAABQlXBt2QHM+r6sAnh1EKDDLvzuYCbdeTfSy1L5U65Y3kZLodo2O+PqdeH3mPSyz5ScJ8oMdVBJygA2CkVWuX6BXsC5amNax0c7c/RXejpSs0AKUD9M+u9S5+L7FgH70iWLBeRatly7b/QDfw0PGszPdc/x21fmLc6plhIoQk3gIVSsjE9N9KGTZSHsuQqnaog7sT77QtaIU0CYYmX8yotYmETOeRairs1dQj8wVkHC7FjY65v7PAJkH61t9oyFSwse88WtfCWAmGn2GyRsiI+mUuvmybgnqtksSXImSV1e6YCNr9qI6obxJ/wPHuAKVOA9Z3UZr7KCzd6beIBbcx3/FXvi9AE/TNYqQm4LxjRyeftk4v13qywWRJ7a8mb33F+EdzZI9eDICsqQBzgj+9I+gZbNwaZQ0iOQqeJUPnfEh3HsAvHb+h5B9MrQAIF4JGhJD4HqXpC6MxYI8r5UVW+y0aQVrfkvyqkU0YTVLH8/UTNAJl5mXFNa5TAjHX4gR/GTulwhVQGVy57ZZ1crh4KJFU8efmWfdQF/F428h9bLV4WwVLVuZT+te/+f+NrpGF2J6ymB83ofxoabZ90GtljntPrqMBpH68xLyu/QJ66U4W2q1dhNBuloNymZCn54OXlgXJc2+Y4h8VBFCcu9IO+xOuPWgam+/WrKOxyNCufJSLO5/1Fz8p3XNlpOhi3uokISbQ7bT2ROMNjDyn70w8Q58eyS2ihSpwLG/FsbmTITXDZzqr6B2Yp/yxl4kPcOPdOsmT/EyumrdhROr8k0YLpe8JW3D2uEVog9GYmMR3l4rDEPhQrWdC/1TYHD96Mfgj9T7aRJB5gzyKXvR6PTREK4BCMWIzM9bgY6YHyKuRb3lR3trZBf1FGXggdWta7D+2PX9dz8IZDUhXOC+BTI5h2Y7+xxdd3u6oP3GdLZ1HCUo74XII7Gp8kZIhp9T8P7yZ4usuDLIJmAWqeRm+fvQ6MuSyjhnSalsn5RGTfTrZ+sV6DavvudR5Qctm5nzbAcXNP25Kgft5oiufFD45m/yr2JbDUU6rNF5u8H1b0oySSQOm0VgOHhWmxDwER0jiazSXf6TxNe6sc342OP2QgP+YdMj5W5rgfYelqacECA8LD8fhYgpeMG6FiVN+ONXU/SK8zQ1kbWfmLXEl2HBiG2uu22RFhgVIG1XBgM+lv4N6iRK/YMofVES1AecY31GQ47scR8SWjJLkpRjNqr1Fjg4Lw8ljHE9Dh9pID1QEVexaXIWr/BAUAh4adV1W30cy7Z84vkpdY5hSt6yZpJDBjJ6YGbL2sV1sPl1gHGw03pMRk4JnSC0qXtTKJEAz/SlzgVJ6EZBbHEJPT3MxNQYWh053uhs7OsyZZK/5F24BQMgktZewtX2uH8fdBf/KnCaHMHgSWtxbWr65UWPZrXcIar7YVSdZjagRLcUvNxQacWnE0XrpG0QJ08iM704c1iPZWZzBQYOPFKQjGbM7sE3Kf9nhQ9CzWLcYqev3HZHsFXBNR99v8vRddoDqKtaxsvB4ML+CWvKU6oBK30y76rYnL8TYN0w/lAvYQ6QyDEf5l6I5PziQB5A+Yg/uAmR6wChPkRfATaeImbDiPe7OR0k3J6NOqQCfpSWnWeEppWxq2YZe1Gh6XSsxH8ND56oag1fgEqAj2xVT8Va9DfT3sM53BGDD5ItoSzjpJ1AGfGn0Q+IulG02Ki0irRGzAwbxqYIuLRAI00Oe3k3Ak97yjgHBXLHSm2FwlGJKLDAFDGBGYvJFW6KnKlcMwkEmr29NAbxyshi2u1GwLouZ/7GWZB5tvDZ2CoE8yBd0g+8b1i3Y9gnbkMVODlrtkxxIPcjQ5SX2hlFg/3vnvC+7FU+8gG804Ylx80HMgciBuc0L1X4Y8PydzQSTRuB3wYNp29XO0ypNrCaYSdm0ENrBhB2Xm8wDMPwYnzAidhl4qtC7BEkduJn4h6gmQ6HqIVQf5Uuhja+mTs1pze2oeVK7DN+XuPL4Bo8PxzWdh5pF6lfUaIqJ05NqFkOBzeTQSlJU+VOaU2RTjSjmYOtIdCB3KGI7p75h7JECqoXmqv+F5MiUP22lmy6l3o5YucUITMtGO8m6//lm85p1JX2d/1SMTaTgM23ANKl9QBdS9XxlClkyk5QRrznRwegtSV50oru++xjF/hefufxXcCo8JmJ+h7Vnp4/Eskiq0X3oOv9TDguiAVI7CRBRL2HhUjnWpn2FyixnLvMI39HBZCY8C5dxg4oVQVSJ83F5/IYGdi3ZgOWcak/4G0tc4xgFDVwL9qwLekuTs0O1FNoGbP37fZhQ8tTWWPAMMByWMVNim6Z5uLeriHLWYugSAwXVJVOa000byQTeaI4NcBnk7SGFd1wpn/2FePor1vTz/t0Xq0EuzFWse70gREy5ePjMmYds3m3k/kYEVklB1e43ah699F3mxOuOsIBGDYPXR7orc1SbsUkLnMh3QyN19kLZ4ZwiEaMfK3J3wLKmtm/LchYQQ9Jc1m7IY1rZks5zuo0iRhMCtdvZ/ZUzhvixZzBYvQytLDmiNi6xVRy/IDrTpfWTPKvWgoMRIxKRioM8dx8Ys0iD1SWN0rgOLtUOJD8WcYbmcS9KOdbTQxJQwzrIt2ji7yyHuHOK0+9+w/qjh5g4yad5yPXNmQ56dQpes8aowPhY4ffApZ/kJjgM/eEZxnEIpXFggH4TMXzd4IDS9rm0Z+Xw0IFfQvTw6oY2eiNSWAdyQN36voeLj87vd/OmQAalEnXle9P10mti6c3wyDKanewRQsbAXSkyV+p30kJIdoINM09XSAndeproWuLpoxie8ctTGDuv619XZPz8CPgTO6xDZ56kIvamzCcWGN+ZPbM9NffOop2bteNzkVcFY0JkSHmiib1hnXLK9bWeHOwADkSyvUxbCPka8IzPejg/W6Fu7HoxyhI0Ptxlv0sylf25Ms3GeWnCZrvN0e7xm56sIHbp2iy5lNANkIFRqRwjZOKY1Y+4tvCknyu6r62nkzq5NhBxQhNZHi4qmBxRHSSf+2Exl1/+u2CO4il+vCyLJxTbDgJKiKrdP0O8E98lpcHuS/gaCoqEzb3Q8SQjSMpEMAucG1ydWhQ+lkbuQLkp39E+7jDK6RcDEZKfxw6+dfTQn1BRBvNXPtjziBt8sp7OTviEMeg/KxLAqHxYDjkO3J8kvrmyGJQGEAWuSpItIQU/3Q7yKzPdehBScRpSDgD9jzl484ZEfAGTklUXbC0RMPc/tzH6rXu9e3JIX39UMXHxfcNe2yj70g1JRgaExZI1gzHyqEAaD4FVdLqk9pmyyzXN9qGhxqVC5vovnYioW/pPPJYE42iz0r+hGnr6WNLLI3EZcycqYn/2wPCt4VHLeiKkqWd7UfM+AcSkIlgCjG9J+9ZGv0+nOOgM9aNuEQm8uqRG/UFIHZYGl8uueecr/gkHVlwCRZqAaaTPoGtfgA/2CBY9yvOV7kq6u6QtoMoQDZOfDk7McSS4gLWUkbowbNNu5U2NxIymXopcHwQg21uwAA"],"people":[1448,1086,"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"]},images=new Map(),listeners=new Set();
function request(key){
 if(!data[key])return null;
 if(images.has(key))return images.get(key);
 const [width,height,pixels]=data[key],img=new Image();
 images.set(key,img);
 img.decoding='async';
 img.onload=()=>{for(const listener of listeners){try{listener(key,img);}catch{}}};
 img.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="'+width+'" height="'+height+'" viewBox="0 0 '+width+' '+height+'"><image width="'+width+'" height="'+height+'" preserveAspectRatio="none" href="data:image/webp;base64,'+pixels+'"/></svg>');
 return img;
}
window.JianghuPreviews={
 getImage(key){const img=request(key);return img&&img.complete&&img.naturalWidth>0?img:null;},
 subscribe(listener){listeners.add(listener);return()=>listeners.delete(listener);}
};
// The initial scene and NPCs begin decoding alongside the rest of the program.
request('town');request('people');
})();

;
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
const ATLAS_BOUNDS={"people":{"width":1448,"height":1086,"frames":[{"x":116,"y":13,"width":171,"height":346,"left":116,"top":13,"right":287,"bottom":359},{"x":455,"y":10,"width":217,"height":349,"left":93,"top":10,"right":310,"bottom":359},{"x":837,"y":52,"width":139,"height":304,"left":113,"top":52,"right":252,"bottom":356},{"x":1170,"y":35,"width":230,"height":324,"left":84,"top":35,"right":314,"bottom":359},{"x":82,"y":376,"width":227,"height":345,"left":82,"top":14,"right":309,"bottom":359},{"x":466,"y":384,"width":183,"height":336,"left":104,"top":22,"right":287,"bottom":358},{"x":824,"y":379,"width":159,"height":341,"left":100,"top":17,"right":259,"bottom":358},{"x":1182,"y":403,"width":173,"height":316,"left":96,"top":41,"right":269,"bottom":357},{"x":81,"y":744,"width":230,"height":308,"left":81,"top":20,"right":311,"bottom":328},{"x":392,"y":791,"width":293,"height":249,"left":30,"top":67,"right":323,"bottom":316},{"x":795,"y":810,"width":181,"height":231,"left":71,"top":86,"right":252,"bottom":317},{"x":1164,"y":814,"width":201,"height":229,"left":78,"top":90,"right":279,"bottom":319}],"maxHeight":349},"enemies":{"width":1536,"height":1024,"frames":[{"x":98,"y":103,"width":224,"height":280,"left":98,"top":103,"right":322,"bottom":383},{"x":455,"y":138,"width":241,"height":248,"left":71,"top":138,"right":312,"bottom":386},{"x":791,"y":115,"width":321,"height":280,"left":23,"top":115,"right":344,"bottom":395},{"x":1185,"y":65,"width":304,"height":376,"left":33,"top":65,"right":337,"bottom":441},{"x":49,"y":609,"width":316,"height":298,"left":49,"top":97,"right":365,"bottom":395},{"x":467,"y":559,"width":259,"height":381,"left":83,"top":47,"right":342,"bottom":428},{"x":821,"y":601,"width":266,"height":332,"left":53,"top":89,"right":319,"bottom":421},{"x":1188,"y":609,"width":299,"height":323,"left":36,"top":97,"right":335,"bottom":420}],"maxHeight":381},"walkA":{"width":1254,"height":1254,"frames":[{"x":98,"y":9,"width":145,"height":298,"left":98,"top":9,"right":243,"bottom":307},{"x":408,"y":9,"width":139,"height":295,"left":95,"top":9,"right":234,"bottom":304},{"x":721,"y":9,"width":140,"height":295,"left":95,"top":9,"right":235,"bottom":304},{"x":1035,"y":9,"width":137,"height":291,"left":96,"top":9,"right":233,"bottom":300},{"x":83,"y":318,"width":172,"height":295,"left":83,"top":5,"right":255,"bottom":300},{"x":405,"y":318,"width":159,"height":292,"left":92,"top":5,"right":251,"bottom":297},{"x":707,"y":318,"width":172,"height":295,"left":81,"top":5,"right":253,"bottom":300},{"x":1035,"y":319,"width":157,"height":292,"left":96,"top":6,"right":253,"bottom":298},{"x":69,"y":636,"width":188,"height":289,"left":69,"top":10,"right":257,"bottom":299},{"x":392,"y":636,"width":156,"height":290,"left":79,"top":10,"right":235,"bottom":300},{"x":704,"y":637,"width":183,"height":288,"left":78,"top":11,"right":261,"bottom":299},{"x":1021,"y":637,"width":159,"height":290,"left":82,"top":11,"right":241,"bottom":301},{"x":89,"y":948,"width":144,"height":293,"left":89,"top":9,"right":233,"bottom":302},{"x":419,"y":949,"width":126,"height":290,"left":106,"top":10,"right":232,"bottom":300},{"x":718,"y":949,"width":139,"height":291,"left":92,"top":10,"right":231,"bottom":301},{"x":1043,"y":949,"width":127,"height":290,"left":104,"top":10,"right":231,"bottom":300}],"maxHeight":298},"walkB":{"width":1254,"height":1254,"frames":[{"x":96,"y":3,"width":166,"height":306,"left":96,"top":3,"right":262,"bottom":309},{"x":395,"y":3,"width":152,"height":306,"left":82,"top":3,"right":234,"bottom":309},{"x":712,"y":5,"width":154,"height":303,"left":86,"top":5,"right":240,"bottom":308},{"x":1024,"y":3,"width":148,"height":305,"left":85,"top":3,"right":233,"bottom":308},{"x":71,"y":315,"width":187,"height":302,"left":71,"top":2,"right":258,"bottom":304},{"x":399,"y":317,"width":147,"height":301,"left":86,"top":4,"right":233,"bottom":305},{"x":693,"y":316,"width":177,"height":301,"left":67,"top":3,"right":244,"bottom":304},{"x":1027,"y":316,"width":146,"height":302,"left":88,"top":3,"right":234,"bottom":305},{"x":78,"y":628,"width":182,"height":296,"left":78,"top":2,"right":260,"bottom":298},{"x":401,"y":627,"width":139,"height":297,"left":88,"top":1,"right":227,"bottom":298},{"x":702,"y":629,"width":175,"height":294,"left":76,"top":3,"right":251,"bottom":297},{"x":1028,"y":626,"width":140,"height":297,"left":89,"top":0,"right":229,"bottom":297},{"x":83,"y":944,"width":168,"height":296,"left":83,"top":5,"right":251,"bottom":301},{"x":400,"y":941,"width":155,"height":292,"left":87,"top":2,"right":242,"bottom":294},{"x":705,"y":943,"width":163,"height":293,"left":79,"top":4,"right":242,"bottom":297},{"x":1030,"y":941,"width":151,"height":291,"left":91,"top":2,"right":242,"bottom":293}],"maxHeight":306},"wisp":{"width":1254,"height":1254,"frames":[{"x":266,"y":141,"width":665,"height":900,"left":266,"top":141,"right":931,"bottom":1041}],"maxHeight":900}};
const PEOPLES={a:0,b:1,kid:2,aunt:3,hunter:4,pawnshop:5,flower:6,thief:7,cart:8,fair:8,boar:9,chicken:10};
const ENEMIES={rabbit:0,snake:1,wildboar:2,bandit:3,boarking:4,tigerboss:5,chicken:6,dog:7};
const ASSETS={town:'assets/world-town.webp',forest:'assets/world-forest.webp',heyang:'assets/world-heyang.webp',temple:'assets/world-temple.webp',interiors:'assets/world-interiors.webp',people:'assets/world-people.webp',enemies:'assets/world-enemies.webp',outskirts:'assets/world-outskirts.webp',riverwoods:'assets/world-riverwoods.webp',hilltrail:'assets/world-hilltrail.webp',forestcave:'assets/world-forestcave.webp',wisp:'assets/world-wisp.webp',herb:'assets/world-herb.webp',walkA:'assets/walk-a.webp',walkB:'assets/walk-b.webp'};
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
 if(h.type==='chest'){const locked=h.id==='cave:sealed';shadow(c,x,y,42);poly(c,[[x-46,y-53],[x-33,y-69],[x+40,y-69],[x+49,y-53]],locked?'#716641':'#9b7047','#392e24',2);rect(c,x-46,y-53,95,48,locked?'#756b45':'#8d5b36');rect(c,x-40,y-48,83,36,locked?'#92835a':'#b0814b');line(c,[[x-43,y-30],[x+46,y-30]],'#493d29',3);for(const dx of[-29,29]){rect(c,x+dx-4,y-63,8,56,locked?'#c2b080':'#be9e59');line(c,[[x+dx,y-62],[x+dx,y-9]],'#e2c989',1);}rect(c,x-7,y-35,14,17,'#d0ad61');ellipse(c,x,y-28,2.5,4,'#4a3b27');return;}
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
  this.assets={};this.assetState={};this.spriteBounds={};this.enemyBounds={};this.wispBounds=null;this.walkBounds={};this.assetQueue=[];this.assetRequests=new Map();this.assetRetries={};this.assetRetryTimers=new Map();this.assetSequence=0;this.assetPumpScheduled=false;this.assetDisposed=false;this.path=[];this.pending=null;this.time=0;this.last=0;this.lastInteract=-1000;this.facing={x:0,y:1};this.followerFacing={x:0,y:1};this.walkDistance=0;this.followerDistance=0;this.trail=[];this.failAt=-1000;
  this.background=document.createElement('canvas');this.bctx=this.background.getContext('2d');this.pointerHandler=e=>this.pointer(e);canvas.addEventListener('pointerdown',this.pointerHandler);canvas.setAttribute('role','img');canvas.style.touchAction='none';this.setScene('town');this.resize();this.resizeHandler=()=>this.resize();window.addEventListener?.('resize',this.resizeHandler);
  if(typeof ResizeObserver!=='undefined'){this.observer=new ResizeObserver(this.resizeHandler);this.observer.observe(canvas);}this.tick=this.tick.bind(this);this.frame=requestAnimationFrame(this.tick);this.previewOff=window.JianghuPreviews?.subscribe?.((key)=>{if(key===this.getRequiredAssetKeys()[0])this.refreshBackground();});
 }
 get hotspots(){
  const all=new Map(this.staticHotspots.map(h=>[h.id,h]));for(const h of this.worldEntities.values())all.set(h.id,h);
  if(this.companion)all.set('partner',{id:'partner',name:'B',type:'npc',kind:'b',x:this.follower.x,y:this.follower.y,companion:true});
  return [...all.values()].filter(h=>!this.hidden.has(h.id));
 }
 getRequiredAssetKeys(){const s=SCENES[this.scene];return[s.asset||(s.indoor?'interiors':this.scene),'people'];}
 getSceneAssetKeys(){const keys=[...this.getRequiredAssetKeys(),'walkA'];if(this.companion)keys.push('walkB');if(!SCENES[this.scene].indoor){keys.push('herb');if(this.scene!=='town'&&this.scene!=='heyang')keys.push('enemies');if(this.scene==='temple')keys.push('wisp');}return [...new Set(keys)];}
 getPrefetchAssetKeys(){
  if(window.navigator?.connection?.saveData)return[];
  const neighbors=this.staticHotspots.filter(h=>h.target&&SCENES[h.target]).sort((a,b)=>Math.hypot(a.x-this.player.x,a.y-this.player.y)-Math.hypot(b.x-this.player.x,b.y-this.player.y));
  return [...new Set(neighbors.map(h=>{const s=SCENES[h.target];return s.asset||(s.indoor?'interiors':h.target);}))].slice(0,3);
 }
 loadAssets(){for(const timer of this.assetRetryTimers.values())clearTimeout(timer);this.assetRetryTimers.clear();this.assetRetries={};this.ensureSceneAssets(true);}
 ensureSceneAssets(retry=false){
  if(this.assetDisposed||typeof Image==='undefined')return;
  const current=this.getSceneAssetKeys(),wanted=[...new Set([...current,...this.getPrefetchAssetKeys()])],required=this.getRequiredAssetKeys();
  this.assetQueue=this.assetQueue.filter(key=>wanted.includes(key));
  // Scene changes release old downloads so the new background can start at once.
  for(const[key,request]of this.assetRequests)if(!wanted.includes(key)||retry||(!required.includes(key)&&required.some(id=>this.assetState[id]!=='ready')))request.cancel();
  for(const key of wanted){if(this.assetState[key]==='ready'||this.assetRequests.has(key)||this.assetRetryTimers.has(key))continue;if(this.assetState[key]==='unavailable'&&!retry)continue;this.assetState[key]='queued';}
  this.assetQueue=wanted.filter(key=>this.assetState[key]==='queued');this.pumpAssetQueue();
 }
 scheduleAssetPump(){if(this.assetPumpScheduled||this.assetDisposed)return;this.assetPumpScheduled=true;Promise.resolve().then(()=>{this.assetPumpScheduled=false;this.pumpAssetQueue();});}
 pumpAssetQueue(){
  if(this.assetDisposed)return;const required=this.getRequiredAssetKeys(),current=this.getSceneAssetKeys(),priority=id=>required.includes(id)?0:current.includes(id)?1:2;
  this.assetQueue.sort((a,b)=>priority(a)-priority(b));
  while(this.assetRequests.size<2&&this.assetQueue.length){const id=this.assetQueue.shift();if(this.assetState[id]!=='queued'||this.assets[id])continue;
   // Optional sheets wait until both pieces needed to enter the map have settled.
   if(!required.includes(id)&&required.some(key=>['queued','loading','retrying'].includes(this.assetState[key]))){this.assetQueue.unshift(id);break;}
   if(!current.includes(id)&&current.some(key=>['queued','loading','retrying'].includes(this.assetState[key]))){this.assetQueue.unshift(id);break;}
   this.startAssetRequest(id);
  }
 }
 startAssetRequest(id){
  const img=new Image(),serial=++this.assetSequence;let settled=false,timer;
  const finish=(okay,canceled=false)=>{
   if(settled)return;settled=true;clearTimeout(timer);img.onload=null;img.onerror=null;const active=this.assetRequests.get(id);if(!active||active.serial!==serial)return;this.assetRequests.delete(id);
   if(okay){this.assets[id]=img;this.assetState[id]='ready';this.assetRetries[id]=0;try{if(id==='people')this.measureSprites(img);else if(id==='enemies')this.measureEnemySprites(img);else if(id==='walkA'||id==='walkB')this.measureWalkSprites(id,img);else if(id==='wisp')this.measureWispSprite(img);}catch{}const current=this.getRequiredAssetKeys()[0];if(id===current)this.refreshBackground();}
   else{this.assetState[id]=canceled?'idle':'unavailable';try{img.src='';}catch{}if(!canceled&&this.getSceneAssetKeys().includes(id)&&(this.assetRetries[id]||0)<2){const attempt=this.assetRetries[id]=(this.assetRetries[id]||0)+1;this.assetState[id]='retrying';this.assetRetryTimers.set(id,setTimeout(()=>{this.assetRetryTimers.delete(id);if(this.assetDisposed)return;this.assetState[id]='idle';this.ensureSceneAssets();},1200*2**(attempt-1)));}}
   this.scheduleAssetPump();
  };
  this.assetState[id]='loading';this.assetRequests.set(id,{serial,image:img,cancel:()=>finish(false,true)});
  img.onload=()=>finish(true);img.onerror=()=>finish(false);
  timer=setTimeout(()=>finish(false),20000);
  try{img.decoding='async';img.fetchPriority=this.getRequiredAssetKeys().includes(id)?'high':'low';img.src=ASSETS[id];}catch{finish(false);}
 }
 // These bounds are measured from the source alpha channel at build time. Safari
 // no longer allocates a full-sheet readback canvas each time art becomes ready.
 measureWispSprite(img){this.wispBounds=ATLAS_BOUNDS.wisp.frames[0];}
 measureEnemySprites(img){this.enemyBounds=Object.fromEntries(ATLAS_BOUNDS.enemies.frames.map((b,i)=>[i,b]));}
 measureSprites(img){this.spriteBounds=Object.fromEntries(ATLAS_BOUNDS.people.frames.map((b,i)=>[i,b]));}
 measureWalkSprites(id,img){this.walkBounds[id]=ATLAS_BOUNDS[id];}
 refreshBackground(){const s=SCENES[this.scene];if(this.background.width!==s.width)this.background.width=s.width;if(this.background.height!==s.height)this.background.height=s.height;const c=this.bctx;c.imageSmoothingEnabled=true;const key=s.asset||(s.indoor?'interiors':this.scene),img=this.assets[key]||window.JianghuPreviews?.getImage?.(key);if(img){if(s.indoor&&!s.asset){const iw=(img.naturalWidth||img.width)/3,ih=(img.naturalHeight||img.height)/2;c.drawImage(img,s.atlas%3*iw,Math.floor(s.atlas/3)*ih,iw,ih,0,0,s.width,s.height);}else c.drawImage(img,0,0,s.width,s.height);}else drawFallback(c,this.scene,this.nav);}
 setScene(id){
  this.scene=SCENES[id]?id:'town';const s=SCENES[this.scene];this.nav=makeGrid(this.scene);this.worldEntities=new Map();this.staticHotspots=SPOTS[this.scene].map(h=>({...h,...(h.returnPos?{returnPos:{...h.returnPos}}:{})}));
  for(const h of this.staticHotspots)if(h.type==='exit-area'){const p=this.nearestRoad(h);h.x=p.x;h.y=p.y;}
  this.path=[];this.pending=null;this.player=this.nearestRoad(s.spawn);this.follower=this.nearestRoad({x:this.player.x+75,y:this.player.y+50});this.trail=[];this.walkDistance=0;this.followerDistance=0;this.refreshBackground();this.canvas.setAttribute('aria-label',s.name+'，'+(s.indoor?'观察室内陈设并点击调查；从门口离开。':'沿道路和木桥移动；点击人物交谈、采集草药或调查道路出口。'));this.updateView();this.onMove({...this.player});this.ensureSceneAssets();
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
 setPlayer(x,y){const spawn=SCENES[this.scene].spawn;this.player=this.nearestRoad({x:Number.isFinite(x)?x:spawn.x,y:Number.isFinite(y)?y:spawn.y});this.follower=this.nearestRoad({x:this.player.x+75,y:this.player.y+50});this.path=[];this.pending=null;this.trail=[];this.updateView();this.onMove({...this.player});}
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
 trace(p){this.trail.push({...p});if(this.trail.length>240)this.trail.shift();let d=0;for(let i=this.trail.length-1;i>0;i--){d+=Math.hypot(this.trail[i].x-this.trail[i-1].x,this.trail[i].y-this.trail[i-1].y);if(d>=105){const q=this.trail[i-1];if(this.isWalkable(q.x,q.y)){const moved=Math.hypot(q.x-this.follower.x,q.y-this.follower.y);if(moved>.1){this.followerFacing={x:q.x-this.follower.x,y:q.y-this.follower.y};this.followerDistance+=moved;this.followerWalkUntil=performance.now()+110;}this.follower={...q};}break;}}}
 advance(dx,dy){const d=Math.hypot(dx,dy);if(!d)return false;const steps=Math.ceil(d/2),sx=dx/steps,sy=dy/steps;let changed=false,moved=0;for(let i=0;i<steps;i++){const x=this.player.x+sx,y=this.player.y+sy;if(!this.isWalkable(x,y))break;this.player={x,y};this.trace(this.player);changed=true;moved+=Math.hypot(sx,sy);}if(changed){this.facing={x:dx,y:dy};this.walkDistance+=moved;this.walkUntil=performance.now()+110;this.updateView();this.onMove({...this.player});}return changed;}
 move(dx,dy){if(this.paused||!Number.isFinite(dx)||!Number.isFinite(dy))return;this.path=[];this.pending=null;const d=Math.hypot(dx,dy);if(d)this.advance(dx*Math.min(4,d)/d,dy*Math.min(4,d)/d);}
 isNameplateVisible(h){
  if(h.anchorOnly||h.concealed||h.type==='search')return false;
  const distance=Math.hypot(h.x-this.player.x,h.y-this.player.y),near=distance<125,quest=this.isStorySpot(h);
  if(quest||h.type==='exit'||h.type==='exit-area')return true;
  if(distance>200)return false;
  if((h.companion||h.type==='camp')&&!near)return false;
  if(h.companion&&this.hotspots.some(q=>q.id!==h.id&&!q.anchorOnly&&q.type!=='search'&&['camp','door','exit','chest','npc','story'].includes(q.type)&&Math.hypot(q.x-this.player.x,q.y-this.player.y)<125))return false;
  return true;
 }
 baseNameplateRect(h){
  const scale=this.view?.scale||1,font=11/scale,height=21/scale,name=h.name||'行人',width=Math.max(36,name.length*11+14)/scale;
  const object=['door','exit','exit-area','search','gather','drop','camp','chest'].includes(h.type)||['herb','fire','mechanism','cellar','rest','cave'].includes(h.id),offset=object?(h.type==='door'?20:h.type==='drop'?33:52):h.kind==='wildboar'||h.kind==='boar'||h.id==='boar'?92:h.id==='chicken'?78:126;
  const y=h.type==='exit'||h.type==='exit-area'?h.y+12/scale:h.type==='chest'&&h.bounds?h.bounds[1]-height-8/scale:h.y-offset-height;
  return{x:h.x-width/2,y,width,height,font};
 }
 layoutNameplates(){
  const result=new Map(),placed=[],scale=this.view?.scale||1,pad=4/scale;
  const visible=this.hotspots.filter(h=>this.isNameplateVisible(h)).sort((a,b)=>(this.isStorySpot(b)?1:0)-(this.isStorySpot(a)?1:0)||a.y-b.y||a.x-b.x);
  for(const h of visible){const b=this.baseNameplateRect(h);for(let n=0;n<5;n++){const overlap=placed.find(q=>b.x<q.x+q.width+pad&&b.x+b.width+pad>q.x&&b.y<q.y+q.height+pad&&b.y+b.height+pad>q.y);if(!overlap)break;b.y=overlap.y-b.height-pad;}placed.push(b);result.set(h.id,b);}
  return result;
 }
 getNameplateRect(h){if(!this.nameplateLayout)this.nameplateLayout=this.layoutNameplates();return this.nameplateLayout.get(h.id)||this.baseNameplateRect(h);}
 approach(h){let best=null,dist=Infinity;for(let dy=-100;dy<=100;dy+=T)for(let dx=-100;dx<=100;dx+=T){const p={x:Math.floor((h.x+dx)/T)*T+T/2,y:Math.floor((h.y+dy)/T)*T+T/2},d=Math.hypot(p.x-h.x,p.y-h.y);if(d>115||!this.isWalkable(p.x,p.y))continue;const score=d+Math.hypot(this.player.x-p.x,this.player.y-p.y)*.08+(dy<0?14:0);if(score<dist){best=p;dist=score;}}return best;}
 pointer(e){if(this.paused)return;e.preventDefault?.();const r=this.canvas.getBoundingClientRect();this.updateView();this.nameplateLayout=this.layoutNameplates();const x=this.view.x+(e.clientX-r.left)/this.view.scale,y=this.view.y+(e.clientY-r.top)/this.view.scale;let hit=null,best=Infinity;for(const h of this.hotspots){
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
 updateView(){
  const s=SCENES[this.scene],cw=this.cssWidth||1200,ch=this.cssHeight||780,ratio=cw/ch;
  let vw=cw<700?(s.indoor?1100:900):(s.indoor?1200:1500),vh=vw/ratio;
  // Portrait rooms keep their horizontal span. Letterboxing is deliberate:
  // squeezing a whole room vertically used to crop both chests off-screen.
  if(!s.indoor){if(vh>s.height){vh=s.height;vw=vh*ratio;}if(vw>s.width){vw=s.width;vh=vw/ratio;}}
  const scale=Math.min(cw/vw,ch/vh),x=vw>s.width?(s.width-vw)/2:clamp(this.player.x-vw/2,0,s.width-vw),y=vh>s.height?(s.height-vh)/2:clamp(this.player.y-vh*.61,0,s.height-vh);
  this.view={x,y,width:vw,height:vh,scale,cssWidth:cw,cssHeight:ch};this.nameplateLayout=null;
 }
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
  const img=this.assets.people||window.JianghuPreviews?.getImage?.('people'),id=PEOPLES[kind];if(img&&Number.isInteger(id)){const cw=(img.naturalWidth||img.width)/4,ch=(img.naturalHeight||img.height)/3,b=this.spriteBounds[id]||{x:id%4*cw,y:Math.floor(id/4)*ch,width:cw,height:ch},height=kind==='chicken'?68:kind==='boar'?93:kind==='kid'?94:120,width=b.width/b.height*height;shadow(c,x,y,kind==='boar'?42:20);
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
   if(img){const b=this.wispBounds||{x:269,y:144,width:659,height:894},height=92,width=b.width/b.height*height;c.drawImage(img,b.x,b.y,b.width,b.height,h.x-width/2,h.y-105-hover,width,height);}else{poly(c,[[h.x-21,h.y-32-hover],[h.x-25,h.y-62-hover],[h.x-12,h.y-91-hover],[h.x-5,h.y-74-hover],[h.x+9,h.y-103-hover],[h.x+25,h.y-60-hover],[h.x+19,h.y-31-hover],[h.x,h.y-22-hover]],'#82cbb5','#b5ead0',2);ellipse(c,h.x-6,h.y-54-hover,2,4,'#305b52');ellipse(c,h.x+8,h.y-54-hover,2,4,'#305b52');}c.restore();return;
  }
  if(h.type==='monster'){
   if(this.drawEnemySprite(c,h.x,h.y,h.kind,!!h.walking,h.facing||{x:0,y:1},h.walkDistance||0))return;
   // A slow connection must never turn a real creature into an invisible trigger.
   if(h.kind==='rabbit'){const{x,y}=h;shadow(c,x,y,22);ellipse(c,x,y-20,25,17,'#aa9f86');ellipse(c,x-12,y-37,14,14,'#c3b89c');ellipse(c,x-19,y-59,6,19,'#b5ab90');ellipse(c,x-6,y-58,5,18,'#c7bca3');line(c,[[x-19,y-72],[x-19,y-54]],'#9b7d73',2);ellipse(c,x+22,y-27,7,7,'#d1c6ab');ellipse(c,x-17,y-37,2,2,'#3e4235');line(c,[[x-5,y-5],[x+10,y-5]],'#7b745f',4);}
   else if(h.kind==='snake'){const{x,y}=h;shadow(c,x,y,23);c.save();c.lineCap='round';line(c,[[x-26,y-7],[x-15,y-17],[x+5,y-15],[x+17,y-23],[x+12,y-36],[x+19,y-44]],'#3f5136',13);line(c,[[x-26,y-7],[x-15,y-17],[x+5,y-15],[x+17,y-23],[x+12,y-36],[x+19,y-44]],'#8d9160',7);ellipse(c,x+20,y-46,9,7,'#777f50');ellipse(c,x+24,y-48,2,2,'#303c2b');c.restore();}
   else this.drawSprite(c,h.x,h.y,h.kind==='bandit'?'thief':'boar',t,!!h.walking,h.facing||{x:0,y:1},h.walkDistance||0);return;
  }
  if(h.type==='gather'){const img=this.assets.herb;if(img){const height=52,width=907/548*height;shadow(c,h.x,h.y,18);c.drawImage(img,184,356,907,548,h.x-width/2,h.y-height,width,height);}else object(c,{...h,id:'herb'},t,false);return;}
  if(h.type==='drop'){shadow(c,h.x,h.y,17);poly(c,[[h.x-16,h.y],[h.x-18,h.y-20],[h.x-8,h.y-33],[h.x+5,h.y-35],[h.x+18,h.y-21],[h.x+16,h.y]],'#aa8450','#635039',2);line(c,[[h.x-10,h.y-27],[h.x+12,h.y-27]],'#d8bd78',3);ellipse(c,h.x,h.y-13,6,7,'#d2b568');const glow=.5+Math.sin(t*3+h.x)*.2;ellipse(c,h.x+21,h.y-34,2,2,'rgba(255,230,157,'+glow+')');return;}
  const kind=h.kind||h.id;this.drawSprite(c,h.x,h.y,PEOPLES[kind]!==undefined?kind:'hunter',t,false,this.facing);
 }
 isStorySpot(h){return !!this.storyTarget&&(this.storyTarget.scene===this.scene&&this.storyTarget.id===h.id||h.type==='exit-area'&&h.target===this.storyTarget.scene);}
 drawRoomSurround(c){
  // Extend only the unoccupied upper wall/rock strip behind portrait rooms.
  // It stays dim and impassable; furniture and chest silhouettes are never repeated.
  const w=this.cssWidth,h=this.cssHeight;
  c.drawImage(this.background,0,0,this.background.width,Math.max(1,this.background.height*.1),0,0,w,h);
  rect(c,0,0,w,h,'#171a16bd');
  const shade=c.createLinearGradient(0,0,0,h);shade.addColorStop(0,'#0c100dd1');shade.addColorStop(.35,'#0c100d25');shade.addColorStop(.65,'#0c100d25');shade.addColorStop(1,'#0c100dd1');c.fillStyle=shade;c.fillRect(0,0,w,h);
 }
 draw(){
  const c=this.ctx,v=this.view,t=this.time;if(!v)return;c.setTransform(this.dpr,0,0,this.dpr,0,0);c.clearRect(0,0,this.cssWidth,this.cssHeight);rect(c,0,0,this.cssWidth,this.cssHeight,SCENES[this.scene].indoor?'#25241f':'#3b4935');if(SCENES[this.scene].indoor&&(v.height>SCENES[this.scene].height||v.width>SCENES[this.scene].width))this.drawRoomSurround(c);c.save();c.scale(v.scale,v.scale);c.translate(-v.x,-v.y);c.drawImage(this.background,0,0);
  const people=new Set(['chicken','boar','kid','aunt','hunter','pawnshop','flower','thief','cart','fair']),illustrated=!!(this.assets[SCENES[this.scene].asset]||window.JianghuPreviews?.getImage?.(SCENES[this.scene].asset)),actors=[];
  for(const h of this.hotspots){if(h.anchorOnly||h.companion||['door','exit','exit-area','search','camp'].includes(h.type)||h.type==='chest'&&illustrated||h.id==='cave'||illustrated&&['fire','mechanism','cellar','rest'].includes(h.id))continue;actors.push({y:h.y,draw:()=>this.worldEntities.has(h.id)?this.drawEntity(c,h,t):people.has(h.id)?this.drawSprite(c,h.x,h.y,h.id,t,false,this.facing):object(c,h,t,this.searched.has(h.id))});}
  if(this.companion)actors.push({y:this.follower.y,draw:()=>this.drawSprite(c,this.follower.x,this.follower.y,'b',t,performance.now()<(this.followerWalkUntil||0),this.followerFacing,this.followerDistance)});
  actors.push({y:this.player.y,draw:()=>{ellipse(c,this.player.x,this.player.y+3,22,8,'#eee1a52e');c.beginPath();c.ellipse(this.player.x,this.player.y+3,22,8,0,0,Math.PI*2);c.strokeStyle='#f4d992';c.lineWidth=2;c.stroke();this.drawSprite(c,this.player.x,this.player.y,'a',t,performance.now()<(this.walkUntil||0),this.facing,this.walkDistance);}});actors.sort((a,b)=>a.y-b.y).forEach(a=>a.draw());
  if(this.path.length){const p=this.path[this.path.length-1];c.beginPath();c.ellipse(p.x,p.y,12,6,0,0,Math.PI*2);c.strokeStyle='#e7d498';c.lineWidth=2;c.stroke();}
  this.nameplateLayout=this.layoutNameplates();for(const h of this.hotspots){if(!this.isNameplateVisible(h))continue;const sx=(h.x-v.x)*v.scale,sy=(h.y-v.y)*v.scale;if(sx<-90||sx>this.cssWidth+90||sy<-30||sy>this.cssHeight+160)continue;const near=Math.hypot(h.x-this.player.x,h.y-this.player.y)<125,searched=this.searched.has(h.id),quest=this.isStorySpot(h),b=this.getNameplateRect(h);
   c.font=(near||quest?'600 ':'500 ')+b.font+'px '+MAP_FONT;c.textAlign='center';c.textBaseline='middle';const opened=h.id==='cave:open'?this.caveState.open:h.id==='cave:sealed'?this.caveState.sealed:false;const label=opened?(h.id==='cave:sealed'?'已开启的铜匣':'已开启的木箱'):h.id==='cave:sealed'&&!this.caveState.unlocked?'玄纹封匣 · 锁着':searched?'已搜寻':h.name;c.fillStyle=quest?'#57432aee':near?'#312b23df':['monster','drop'].includes(h.type)?'#342d25d4':'#2e3029cf';const radius=4/v.scale;if(c.roundRect){c.beginPath();c.roundRect(b.x,b.y,b.width,b.height,radius);c.fill();}else rect(c,b.x,b.y,b.width,b.height,c.fillStyle);c.fillStyle=searched?'#b7ae91':quest?'#ffe0a1':h.type==='monster'?'#edc1a6':near?'#f7dea4':'#f1e8cb';c.fillText(label,h.x,b.y+b.height/2+.5/v.scale);
   if(quest){const xx=h.x,yy=b.y-10/v.scale+Math.sin(t*3)*2/v.scale;poly(c,[[xx,yy-7/v.scale],[xx+5/v.scale,yy],[xx,yy+7/v.scale],[xx-5/v.scale,yy]],'#f1c66e','#78522d',1/v.scale);}
   if(near){const yy=b.y+b.height;poly(c,[[h.x-4/v.scale,yy+2/v.scale],[h.x+4/v.scale,yy+2/v.scale],[h.x,yy+6/v.scale]],quest?'#f1c66e':'#e6c77f');}
  }
  if(performance.now()-this.failAt<700&&this.failPoint){const p=this.failPoint;line(c,[[p.x-8,p.y-8],[p.x+8,p.y+8]],'#b76c54',2);line(c,[[p.x+8,p.y-8],[p.x-8,p.y+8]],'#b76c54',2);}c.restore();c.setTransform(1,0,0,1,0,0);
 }
 destroy(){this.assetDisposed=true;this.previewOff?.();for(const timer of this.assetRetryTimers.values())clearTimeout(timer);this.assetRetryTimers.clear();for(const request of this.assetRequests.values())request.cancel();this.assetQueue=[];cancelAnimationFrame(this.frame);this.canvas.removeEventListener('pointerdown',this.pointerHandler);window.removeEventListener?.('resize',this.resizeHandler);this.observer?.disconnect();}
}
window.RPGMap=RPGMap;
})();

;
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
  .battle-painted .battle-arena{height:326px!important;position:relative;overflow:hidden;isolation:isolate;background-color:#818b61;background-image:url('assets/battle-forest.webp'),url('assets/world-forest.webp');background-repeat:no-repeat;background-size:cover;background-position:center 12%;border-bottom:3px solid #87714c}
  .battle-painted .battle-arena.bandit{background-color:#b8a47a;background-image:url('assets/battle-village.webp'),url('assets/world-town.webp');background-position:center 12%}
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
  .battle-painted .battle-arena.haunted{background-image:linear-gradient(#182d4699,#263a4f66),url('assets/battle-forest.webp');background-color:#293e42}
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
    people:{src:'assets/world-people.webp',cols:4,rows:3},
    enemies:{src:'assets/world-enemies.webp',cols:4,rows:2},
    wisp:{src:'assets/world-wisp.webp',cols:1,rows:1}
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

;
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

;
/* The chapter, NPC memory and player decisions live outside dialogue rendering. */
(() => {
  'use strict';
  const D=window.CHAPTER_DATA,P=window.JianghuProgression,C=window.JianghuContent,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
  const KEY='jianghu-debts-v1', numerals=['壹','贰','叁','肆','伍','陆','柒'];
  const scenes={town:{name:'青石镇',time:'清晨 · 辰时',caption:'市井烟火，鸡犬相闻',unlock:1},forest:{name:'野猪林',time:'午后 · 未时',caption:'林深不知处，患难见人心',unlock:3},heyang:{name:'河阳镇',time:'傍晚 · 酉时',caption:'一城烟火，半纸人情',unlock:4},temple:{name:'荒山破庙',time:'入夜 · 戌时',caption:'山风穿旧檐，灯火照故人',unlock:5}};
  Object.assign(scenes,{
    inn:{name:'青石客栈',time:'室内 · 灯火微暖',caption:'酒香入木，旧箱藏物',unlock:1,indoor:true,outdoor:'town'},
    home:{name:'农家小院',time:'室内 · 日光穿窗',caption:'粗茶淡饭，也是人间',unlock:1,indoor:true,outdoor:'town'},
    store:{name:'镇中杂货铺',time:'室内 · 药香与谷香',caption:'柜中有物，梁间有光',unlock:1,indoor:true,outdoor:'town'},
    pawnroom:{name:'周记当铺内堂',time:'室内 · 旧木沉香',caption:'一纸人情，半柜旧账',unlock:4,indoor:true,outdoor:'heyang'},
    flowerroom:{name:'醉花楼前厅',time:'室内 · 茶烟袅袅',caption:'轻纱深处，故人音信',unlock:4,indoor:true,outdoor:'heyang'},
    templehall:{name:'山神庙内殿',time:'室内 · 残灯照壁',caption:'尘封旧柜，犹有人迹',unlock:5,indoor:true,outdoor:'temple'}
  });
  Object.assign(scenes,{
    outskirts:{name:'青石田埂',time:'午后 · 风拂稻浪',caption:'田埂尽处，还有人家',unlock:1},
    riverwoods:{name:'林中河岸',time:'午后 · 水声入林',caption:'循着水声，探一条未走过的路',unlock:3},
    oldcave:{name:'山神旧窟',time:'洞中 · 石灯微明',caption:'旧窟深处，尘封遗物',unlock:3,indoor:true,outdoor:'riverwoods'},
    hilltrail:{name:'青岚山径',time:'午后 · 山岚渐起',caption:'小桥通旧径，松下见人家',unlock:1},
    forestcave:{name:'野猪林山洞',time:'洞中 · 石隙透光',caption:'两只旧箱，藏着不同的来路',unlock:3,indoor:true,outdoor:'forest'},
    watersidehut:{name:'山溪猎户小屋',time:'室内 · 风过竹窗',caption:'尘封柴扉，犹有故人生活的痕迹',unlock:1,indoor:true,outdoor:'hilltrail'}
  });
  const actScenes=['town','town','forest','heyang','temple','heyang','temple'];
  const initial=()=>({version:1,act:1,step:0,scene:'town',player:{x:850,y:1380},worldVersion:3,roomLootVersion:2,learnedSkills:[],searched:{},roomSeeds:{},roomFinds:{},roomReturn:null,coins:8,xp:0,party:{hpA:100,hpB:88,mpA:40,mpB:40},inventory:{herb:3,wood:4,sugar:1},flags:{A_THEFT:0,B_FRAUD:0,B_DEBT:0,WANTED_LEVEL:0,ITEM_JADE:false,OLD_CASE_CLUE:[]},events:{},quests:{},npc:structuredClone(D.npcMemoryDefaults),completed:false,playSeconds:0,savedAt:null,log:[]});
  function validSave(t){if(!t||t.version!==1||!Number.isInteger(t.act)||t.act<1||t.act>7||!Number.isInteger(t.step)||t.step<0||t.step>=D.acts[t.act-1].steps.length||!t.party||!t.player||!t.flags||!t.events||!t.quests||!t.inventory||!t.npc||!Array.isArray(t.log)||!scenes[t.scene])return false;const numeric=[t.coins,t.xp,t.player.x,t.player.y,...Object.values(t.party),...Object.values(t.inventory)];if(!numeric.every(v=>typeof v==='number'&&Number.isFinite(v)&&v>=0&&v<1e9))return false;if(!Array.isArray(t.flags.OLD_CASE_CLUE))return false;for(const n of Object.values(t.npc)){if(!n||typeof n.name!=='string'||typeof n.temperament!=='string'||!Array.isArray(n.notes)||!Array.isArray(n.identityUsed)||!n.notes.every(v=>typeof v==='string')||!n.identityUsed.every(v=>typeof v==='string'))return false;}if(Object.keys(t.inventory).some(id=>!D.items.some(i=>i.id===id)&&!['bun','wine','黑虎令'].includes(id)))return false;if(t.searched!==undefined&&(!t.searched||typeof t.searched!=='object'||Array.isArray(t.searched)))return false;if(t.roomReturn!=null&&(!scenes[t.roomReturn.scene]||scenes[t.roomReturn.scene].indoor||!t.roomReturn.player||!Number.isFinite(t.roomReturn.player.x)||!Number.isFinite(t.roomReturn.player.y)))return false;return true;}
  function normalizeExploration(){
    S.searched=S.searched&&typeof S.searched==='object'&&!Array.isArray(S.searched)?S.searched:{};
    S.roomSeeds=S.roomSeeds&&typeof S.roomSeeds==='object'&&!Array.isArray(S.roomSeeds)?S.roomSeeds:{};
    S.roomFinds=S.roomFinds&&typeof S.roomFinds==='object'&&!Array.isArray(S.roomFinds)?S.roomFinds:{};
    if(S.roomLootVersion!==2){for(const[id,value]of Object.entries(S.searched))if(value?.empty)delete S.searched[id];S.roomFinds={};S.roomLootVersion=2;}
    S.learnedSkills=P.normalizeLearned(S.learnedSkills,S.flags);
    if(S.events.temple){S.flags.TEMPLE_MECHANISM_READY=true;S.flags.TEMPLE_FIRE_LIT=true;S.flags.TEMPLE_FIREWOOD=true;S.flags.WOOD_COLLECTED=true;}
    if((S.events.temple||S.inventory.ledger)&&!S.flags.MECHANISM_PIN_GIVEN){S.inventory.mechanism_pin=(S.inventory.mechanism_pin||0)+1;S.flags.MECHANISM_PIN_GIVEN=true;}
    if(S.flags.CAVE_CHEST)S.flags.CAVE_OPEN=true;
    if(S.quests.q_boar||S.flags.Q_BOAR_KING||(S.act===3&&S.step>7))S.events.boarBattle=true;
    if(S.inventory.half_jade>0)S.flags.CAVE_BOX_CHECKED=true;
    if(S.act===3&&S.step>=14){
      if(!(S.inventory.half_jade>0))S.inventory.half_jade=1;
      if(!S.flags.OLD_CASE_CLUE.includes('半块青玉佩'))S.flags.OLD_CASE_CLUE.push('半块青玉佩');
      S.flags.CAVE_BOX_CHECKED=true;
    }
    for(const k of ['A','B']){const st=P.stats(k,S.xp);S.party['hp'+k]=Math.max(0,Math.min(st.maxHP,S.party['hp'+k]));S.party['mp'+k]=Math.max(0,Math.min(st.maxMP,S.party['mp'+k]));}
  }
  function heroStats(k){return P.stats(k,S.xp);}
  function addExperience(value){
    const amount=Math.max(0,Math.floor(Number(value)||0));if(!amount)return'';
    const old=P.level(S.xp),before={A:heroStats('A'),B:heroStats('B')};S.xp+=amount;const lv=P.level(S.xp);
    if(lv>old){for(const k of (S.act>=2?['A','B']:['A'])){const st=heroStats(k);S.party['hp'+k]=Math.min(st.maxHP,S.party['hp'+k]+st.maxHP-before[k].maxHP+10);S.party['mp'+k]=Math.min(st.maxMP,S.party['mp'+k]+st.maxMP-before[k].maxMP+5);}note('升至'+lv+'级 · 气血、内力与招式威力提升');}
    return'经验+'+amount+(lv>old?' · 升至'+lv+'级':'');
  }
  function restoreResources(hp=0,mp=0,full=false){for(const k of (S.act>=2?['A','B']:['A'])){const st=heroStats(k);S.party['hp'+k]=full?st.maxHP:Math.min(st.maxHP,S.party['hp'+k]+hp);S.party['mp'+k]=full?st.maxMP:Math.min(st.maxMP,S.party['mp'+k]+mp);}}
  function readSave(key=KEY){try{let x=JSON.parse(localStorage.getItem(key));return validSave(x)?x:null;}catch{return null;}}
  let S=readSave()||initial(),dialogueSession=null,modalOpen=false,modalLocked=false,modalCleanup=null,battle=null,toastTimer,previousFocus,ambient=null,offlinePanelOpen=false;
  normalizeExploration();S.roomReturn=S.roomReturn||null;if(S.worldVersion!==3){S.player=scenes[S.scene].indoor?{x:600,y:680}:{x:850,y:1380};S.worldVersion=3;}
  let mapLoadWatch={scene:null,started:0,bypassed:false};
  const pressed=new Set(),touchMotion={x:0,y:0,pointer:null,button:null};
  function stopInput(){pressed.clear();const b=touchMotion.button,pid=touchMotion.pointer;touchMotion.x=0;touchMotion.y=0;touchMotion.pointer=null;touchMotion.button=null;if(b){b.classList.remove('is-held');try{if(b.hasPointerCapture?.(pid))b.releasePointerCapture(pid);}catch{}}}
  let mapReady=false;
  const resumePlayer={...S.player};
  const map=new RPGMap($('#world'),{onInteract:interact,onMove:p=>{S.player=p;if(mapReady)refreshStoryTarget();},onBlocked:()=>toast(scenes[S.scene].indoor?'桌柜无法穿过，沿空地绕行。':'沿黄土路前行，过河请走桥。')});map.setScene(S.scene);map.setPlayer(resumePlayer.x,resumePlayer.y);map.setCompanion(S.act>=2);map.setSearched?.(Object.keys(S.searched));
  let world=new JianghuWorld({saved:S.world});world.setScene(S.scene,map);mapReady=true;
  const act=()=>D.acts[S.act-1],step=()=>act().steps[Math.min(S.step,act().steps.length-1)];
  function getStoryGate(){
    if(S.completed)return null;const gate=(window.STORY_TRIGGERS[S.act]||[]).find(g=>S.step>=g.from&&S.step<=g.to)||null;
    // Once the fight is won, B carries the rescue dialogue. The defeated boss
    // must never be the only way to resume a conversation closed by the player.
    if(gate?.id==='boar-rescue'&&S.events.boarBattle)return{...gate,scene:S.scene==='forestcave'?'forestcave':'forest',npc:'partner',label:'战斗已结束，先和B确认伤势，完成脱险后的交谈'};
    return gate;
  }
  function mapPosition(id){if(!id)return null;const p=map.getEntityPosition?.(id);if(p&&Number.isFinite(p.x)&&Number.isFinite(p.y))return{x:p.x,y:p.y};if(id==='partner'&&S.act>=2&&map.follower)return{...map.follower};const h=(map.hotspots||[]).find(x=>x.id===id);return h&&Number.isFinite(h.x)&&Number.isFinite(h.y)?{x:h.x,y:h.y}:null;}
  function currentActors(){const gate=getStoryGate();if(!gate)return[];return(window.STORY_ACTORS||[]).filter(a=>a.scene===S.scene&&a.act===S.act&&a.stage===gate.id).map(a=>{const anchor=mapPosition(a.anchor)||map.getPlayer(),wanted={x:anchor.x+(a.offset?.x||0),y:anchor.y+(a.offset?.y||0)},p=map.nearestRoad?.(wanted)||wanted;return{id:a.id,type:'npc',kind:a.kind,hiddenSprite:!!(a.revealEvent&&!S.events[a.revealEvent]),name:a.revealEvent&&!S.events[a.revealEvent]?a.unrevealedName||a.name:a.name,scene:a.scene,...p};});}
  function campGoal(){
    if(S.act!==5||S.step<4||S.events.temple)return null;
    const needs=[['WOOD_COLLECTED','camp:debris','到庙前碎石旁清理杂物，找些可用木料'],['Q_TEMPLE_REPAIR','camp:window','走到西侧破窗前，用硬木修补窗户'],['TEMPLE_FIREWOOD','camp:firewood','到西侧柴堆收集干柴'],['TEMPLE_FIRE_LIT','camp:fire','回院中火堆处，点燃篝火'],['TEMPLE_MECHANISM_READY','camp:mechanism','去东侧地窖边修复机关，查明地下的声音']];
    const need=needs.find(([flag])=>!S.flags[flag]);return need?{scene:'temple',id:need[1],label:need[2]}:null;
  }
  function caveGoal(){
    if(S.act===3&&S.step>=13){
      if(S.scene!=='forestcave')return{scene:'forest',id:'cave',label:'进入野猪林北侧的藏玉洞，查看西侧未上锁的木箱'};
      if(!S.flags.CAVE_BOX_CHECKED)return{scene:'forestcave',id:'cave:open',label:'先查看西侧木箱，再和B聊聊青玉；深处铜匣暂时不影响前行'};
    }
    if(S.act===4&&S.step===0&&S.scene==='forestcave')return{scene:'forestcave',id:'exit:forestcave',label:'线索已收好。铜匣等拿到钥匙再回来；先出洞，沿东侧道路去河阳镇'};
    return null;
  }
  function explorationGoal(){const gate=getStoryGate(),task=campGoal()||caveGoal();return task||gate;}
  function syncWorld(){map.setHidden?.(['herb',...(S.quests.q_boar?['boar']:[])]);const dynamic=[...world.entities(S.scene),...currentActors()];map.setWorldEntities?.(dynamic);map.setSearched?.(Object.keys(S.searched));map.setCaveState?.({open:!!(S.flags.CAVE_OPEN&&S.flags.CAVE_BOX_CHECKED),sealed:!!S.flags.CAVE_SEALED,unlocked:!!(S.inventory.mechanism_pin>0)});refreshStoryTarget();}
  function refreshStoryTarget(){const task=campGoal()||caveGoal();if(task){map.setStoryTarget?.({scene:task.scene,id:task.id,name:task.label});return;}const gate=getStoryGate(),anchor=gate?.anchor?mapPosition(gate.anchor):null,player=map.getPlayer(),atAnchor=anchor&&S.scene===gate.scene&&Math.hypot(anchor.x-player.x,anchor.y-player.y)<=(gate.radius||220);map.setStoryTarget?.(gate?{scene:gate.scene,id:gate.anchor&&!atAnchor?gate.anchor:gate.npc,name:gate.label}:null);}
  function renderExploration(){const gate=explorationGoal();$('#dialogue').classList.add('exploring');$('#dialogue').classList.remove('has-choices');$('.adventure').classList.remove('choosing');$('#dialogue-close').hidden=true;$('#speaker-name').textContent=S.completed?'江湖未完':'此刻 · 探索';$('#speaker-badge').textContent='江湖行旅';$('#speaker-portrait').src='assets/portrait-a.webp';$('#speaker-portrait').style.opacity='.85';$('#speaker-portrait').style.objectPosition='center bottom';$('#dialogue-text').textContent=S.completed?'路还长。再探一条岔路，或找B聊聊这一路的故事。':gate?.label||'沿路走走，看看会遇见什么人。';$('#choices').innerHTML='';$('#next-dialogue').hidden=true;$('#dialogue-hint').textContent='靠近人物后交谈 · 草药可采集 · 战利品要拾取';renderScene();renderSidebar();}
  function tryStartStory(h){const gate=getStoryGate();if(!gate||dialogueSession||modalOpen||S.scene!==gate.scene||h.id!==gate.npc)return false;if(gate.id==='cellar-accountant'&&campGoal()){toast(campGoal().label);return false;}if(gate.id==='cave-jade'&&!S.flags.CAVE_BOX_CHECKED){toast(caveGoal()?.label||'先查看西侧未上锁的木箱。');return false;}const npc=mapPosition(gate.npc),player=map.getPlayer();if(!npc||Math.hypot(npc.x-player.x,npc.y-player.y)>140)return false;if(gate.anchor){const anchor=mapPosition(gate.anchor);if(!anchor||Math.hypot(anchor.x-player.x,anchor.y-player.y)>(gate.radius||220)){toast(gate.label);return false;}}stopInput();dialogueSession={id:gate.id,act:S.act,scene:S.scene,npc:gate.npc,from:gate.from,to:gate.to};map.setPaused(true);renderDialogue();return true;}
  function endConversation(render=true){dialogueSession=null;stopInput();map.setPaused(modalOpen);if(render){syncWorld();renderDialogue();save();}}
  function grantFound(reward){S.coins+=reward.coins||0;const earned=addExperience(reward.xp);for(const[id,n]of Object.entries(reward.items||{}))addItem(id,n);const words=[...(reward.coins?[reward.coins+'文']:[]),...Object.entries(reward.items||{}).map(([id,n])=>idToName(id)+'×'+n),...(earned?[earned]:[])];return words.join('、');}
  function interactWorld(h){const actual=mapPosition(h.id),player=map.getPlayer();if(!actual||Math.hypot(actual.x-player.x,actual.y-player.y)>150)return;const monster=world.getMonster(h.id);if(monster){startRoamingBattle(monster);return;}const reward=world.collect(h.id);if(!reward)return;const found=grantFound(reward);syncWorld();renderSidebar();save();if(reward.type==='gather'){S.flags.HERB_GATHERS=(S.flags.HERB_GATHERS||0)+1;toast('采集完成 · '+found);}else toast('拾取战利品 · '+found);note((reward.type==='gather'?'采得草药：':'拾取战利品：')+found);save();}
  function startRoamingBattle(monster){if(modalOpen||dialogueSession||!world.getMonster(monster.id))return;const where=mapPosition(monster.id)||{x:monster.x,y:monster.y},startingHerbs=S.inventory.herb||0;openModal('<div id="battle-root"></div>',{locked:true,wide:true});battle=new Battle($('#battle-root'),{onChange:p=>{S.party=p;renderSidebar();},onEnd:r=>{const spent=Math.max(0,startingHerbs-(battle.state.herbs||0));S.inventory.herb=Math.max(0,(S.inventory.herb||0)-spent);if(r.won){const drop=world.defeat(monster.id,{...r.reward,xp:0},where);const earned=drop?addExperience(r.reward.xp):'';note('击败'+monster.name+'，'+earned+'，物品落在原地。');closeModal(true);syncWorld();save();toast(earned+' · 战利品在原地，靠近拾取');}else{S.party.hpA=Math.max(1,Math.round(heroStats('A').maxHP*.55));if(S.act>=2)S.party.hpB=Math.max(1,Math.round(heroStats('B').maxHP*.55));closeModal(true);syncWorld();save();toast('暂避锋芒 · 休整后还能再战');}}});battle.start(monster.battleType||'wild',{...S.party,xp:S.xp,learnedSkills:S.learnedSkills,hasB:S.act>=2,groundDrops:true,herbs:startingHerbs,defenseBonus:S.flags.WRIST_EQUIPPED?3:0,shadowStep:!!S.flags.SKILL_SHADOW});}
  function resetMapLoading(){mapLoadWatch={scene:S.scene,started:Date.now(),bypassed:false};}
  function refreshMapLoading(){
    const loading=$('#world-loading'),states=map.assetState;if(!states){loading.hidden=true;return;}
    if(mapLoadWatch.scene!==S.scene)resetMapLoading();
    const keys=map.getRequiredAssetKeys?.()||[map.getSceneInfo?.().asset||(scenes[S.scene].indoor?'interiors':S.scene),'people'];
    const missing=keys.filter(key=>states[key]!=='ready'),failed=missing.some(key=>states[key]==='unavailable'),slow=missing.length>0&&Date.now()-mapLoadWatch.started>=10000;
    loading.hidden=!missing.length;loading.classList.add('resource-notice');loading.dataset.state=failed?'failed':slow?'slow':'loading';
    $('#world-loading-title').textContent=failed?'正在重新连接场景':slow?'画面正在补齐':'正在铺开'+scenes[S.scene].name;
    $('#world-loading-text').textContent='可以继续走动，场景会自动补齐';
    $('#world-retry').hidden=!failed;$('#world-retry').textContent='再试一次';
    $('#world-continue')?.remove();
  }
  function toast(t){$('#toast').textContent=t;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3000);}
  function save(quiet=true){S.savedAt=new Date().toISOString();S.player=map.getPlayer();S.world=world.export();try{localStorage.setItem(KEY,JSON.stringify(S));$('#save-status').textContent='旅程已自动保存于此设备';if(!quiet)toast('已保存 · 这一程江湖，不会忘记');}catch{$('#save-status').textContent='此浏览器未允许保存，可导出存档';}}
  function note(text){S.log.unshift({text,act:S.act,time:new Date().toISOString()});S.log=S.log.slice(0,60);}
  function addItem(id,n=1){S.inventory[id]=(S.inventory[id]||0)+n;}
  function questDone(id){S.quests[id]=true;let q=D.quests.find(q=>q.id===id);if(q){S.flags[q.flag]=true;note('完成支线「'+q.title+'」');}save();renderSidebar();}
  function sceneTo(id,announce=true){if(!scenes[id]||S.act<scenes[id].unlock){toast('这条路尚未走到，先看看眼前的江湖。');return;}endConversation(false);stopInput();S.roomReturn=null;S.scene=id;resetMapLoading();map.setScene(id);const spawn=map.getSceneInfo?.().spawn||{x:850,y:1380};map.setPlayer(spawn.x,spawn.y);map.setSearched?.(Object.keys(S.searched));S.player=map.getPlayer();world.setScene(S.scene,map);syncWorld();renderScene();renderDialogue();save();if(announce)toast('来到了'+scenes[id].name);}
  function renderScene(){let t=scenes[S.scene];refreshMapLoading();$('#room-exit').hidden=!t.indoor;$('.map-touch-hint').textContent=t.indoor?'观察屋内物件 · 点门口离开':'点道路前行 · 点人物交谈';$('#scene-name').textContent=t.name;$('#scene-time').innerHTML=t.time+' <span>'+(t.indoor?'可搜寻':S.scene==='temple'?'月明':'晴')+'</span>';$('#area-label').textContent=t.caption;$('.mini-map>span').innerHTML=t.name+' <kbd>M</kbd>';$('.map-watermark').textContent=t.name.split('').join(' ')+' 志';$('#dialogue-context').textContent=act().location+' · '+act().subtitle.split(' · ').pop();}
  function renderSidebar(){
    $('#coins').textContent=S.coins;$('#mobile-mission-title').textContent=explorationGoal()?.label||act().title;$('#mobile-act-count').textContent=numerals[S.act-1]+' / 柒';$('#mobile-b-member').hidden=S.act<2;for(const k of ['a','b']){const hp=S.party['hp'+k.toUpperCase()],max=heroStats(k.toUpperCase()).maxHP;$('#mobile-hp-'+k).textContent=hp;$('#mobile-health-'+k).style.width=hp/max*100+'%';}$('#bag-count').textContent=Object.values(S.inventory).filter(n=>n>0).length;
    $('#quest-title').textContent=act().title;$('#quest-objective').textContent=S.completed?'此章暂告一段落。仍可探索、采集、战斗或进屋搜寻。':(explorationGoal()?.label||act().objective);$('#quest-location').textContent=scenes[explorationGoal()?.scene]?.name||act().location;$('#act-count').textContent=numerals[S.act-1]+' / 柒';$('#chapter-progress').innerHTML=D.acts.map(a=>'<i class="'+(a.id<=S.act?'done':'')+'"></i>').join('');
    $('#chapter-status').textContent=S.completed?'江湖未完，来日再会。':S.act===1?'江湖路远，先从一只鸡开始。':'第'+numerals[S.act-1]+'幕 · '+act().title;
    let companion=S.act>=2;$('#b-member').classList.toggle('unrecruited',!companion);$('#b-waiting').hidden=companion;$('.b-stats').hidden=!companion;$('#party-count').textContent=companion?'2 / 2':'1 / 2';map.setCompanion(companion);
    for(const k of ['a','b']){let key=k.toUpperCase(),max=heroStats(key).maxHP;$('#hp-'+k).textContent=S.party['hp'+key]+' / '+max;$('#hp-'+k+'-bar').style.width=(S.party['hp'+key]/max*100)+'%';$('#mp-'+k).textContent=S.party['mp'+key]+' / '+heroStats(key).maxMP;$('#mp-'+k+'-bar').style.width=S.party['mp'+key]/heroStats(key).maxMP*100+'%';$('#level-'+k).textContent=P.level(S.xp);}
    let title='素未谋面',desc='有些相逢，是命中注定的鸡飞狗跳。';if(companion){title='萍水相逢';desc='一个偷鸡，一个赊账。两个穷鬼，暂且同行。';}if(S.flags.AB_RESCUE){title='患难与共';desc='不问来路，先把彼此带出这片林子。';}if(S.flags.AB_CONFIDE){title='渐渐知心';desc='有些旧事还没说出口，有些沉默已经有人听懂。';}if(S.completed){title='江湖初伴';desc='路还长，欠条还在。好在已经有人并肩。';}$('#bond-title').textContent=title;$('#bond-description').textContent=desc;
  }
  function renderDialogue(){
    if(!dialogueSession){renderExploration();return;}
    let t=step();$('#dialogue').classList.remove('exploring');$('#dialogue-close').hidden=false;$('#speaker-name').textContent=t.speaker;$('#speaker-portrait').src='assets/portrait-'+(t.speaker==='B'||t.speaker==='蒙面人'?'b':'a')+'.webp';$('#speaker-portrait').style.objectPosition='center bottom';$('#speaker-portrait').style.opacity=t.speaker==='旁白'?'.62':'1';$('#speaker-portrait').alt=t.speaker==='B'?'B的立绘':'A的立绘';$('#speaker-badge').textContent=t.speaker==='B'?'赊账公子':t.speaker==='旁白'?'江湖行记':'市井游侠';
    let text=t.text;if(S.act===3&&S.step===8&&!S.flags.Q_BOAR_KING)text='两人击退拦路的野猪，绕开洞口的巨兽。可一根断枝突然落下，B膝头一软。草丛里，又传来一声低吼。';$('#dialogue-text').textContent=text;
    $('#choices').innerHTML='';$('#dialogue').classList.toggle('has-choices',!!t.choices);$('.adventure').classList.toggle('choosing',!!t.choices);let gated=t.event&&!S.events[t.event];$('#next-dialogue').hidden=!!t.choices&&!gated;$('#dialogue-hint').textContent=gated?'亲手走过的江湖，才算数。':t.choices?'心之所向，江湖会替你记得。':'空格 / 点击继续 · 随时可以探索地图';
    $('#next-dialogue').innerHTML=gated?({boarBattle:'迎战野猪',merchant:'打开账本',temple:'整修破庙',fair:'开始摆摊',finalBattle:'并肩迎战'}[t.event]+' <span>↗</span>'):S.completed?'回看这一程 <span>↗</span>':S.step===act().steps.length-1?(S.act===7?'第一章 · 完':'继续旅程')+' <span>→</span>':'继续 <span>↵</span>';
    if(t.choices&&!gated)t.choices.forEach((c,i)=>{let b=document.createElement('button');b.className='choice-button';b.innerHTML='<span>'+numerals[i]+'</span>';b.append(document.createTextNode(c.text));b.onclick=()=>choose(c);$('#choices').append(b);});
    renderScene();renderSidebar();
  }
  function choose(c){if(!dialogueSession||!step().choices?.some(v=>v.flag===c.flag&&v.value===c.value))return false;S.flags[c.flag]=c.value??true;note(c.text);if(c.flag==='CHICKEN_METHOD'){S.flags.A_THEFT++;}if(c.flag==='AB_RESCUE'){let flag={trust:'AB_TRUST_01',partner:'AB_PARTNER_01',return:'AB_RETURN_01'}[c.value];S.flags[flag]=true;toast('羁绊已记录 · '+D.bondLabels.AB_RESCUE.title);}if(c.flag==='AB_RESPECT'&&c.value)S.flags.AB_RESPECT_01=true;next(true);}
  function next(chosen=false){if(modalOpen||!dialogueSession)return false;const gate=getStoryGate();if(!gate||dialogueSession.id!==gate.id)return false;const t=step();if(t.event&&!S.events[t.event]){runEvent(t.event);return true;}if(t.choices&&!chosen)return false;
    if(S.act===1&&S.step===7&&!S.events.chase){chase(()=>{S.events.chase=true;advanceStory();});return true;}
    advanceStory();return true;
  }
  function advanceStory(){const gate=getStoryGate();if(!gate||!dialogueSession)return;const stageEnded=S.step>=gate.to;if(S.step<act().steps.length-1){S.step++;applyMilestones();}else if(S.act<7){S.act++;S.step=0;note('进入第'+numerals[S.act-1]+'幕「'+act().title+'」');}else{S.completed=true;note('第一章通关');endConversation(false);save();renderDialogue();ending();return;}if(stageEnded)endConversation(false);syncWorld();save();renderDialogue();}
  function applyMilestones(){
    if(S.act===2&&S.step===12&&!S.flags.ITEM_JADE){S.flags.ITEM_JADE=true;S.flags.B_JADE=true;addItem('jade');let n=S.npc.chen;n.debtLiang=2;n.remembered=true;n.recognizedJade=true;n.identityUsed.push('裴公子');n.notes.push('看旧商号的情面暂缓车钱。');S.flags.B_DEBT+=2;}
    if(S.act===2&&S.step===18&&!S.inventory.debt_note){addItem('debt_note');S.coins=Math.max(0,S.coins-8);}
    if(S.act===3&&S.step===14&&!S.inventory.half_jade){addItem('half_jade');S.flags.OLD_CASE_CLUE.push('半块青玉佩');toast('获得旧案线索 · 半块青玉佩');}
    if(S.act===4&&S.step===17&&!S.inventory.letter){addItem('letter');toast('获得书信 · 凤妈妈的信');}
    if(S.act===5&&S.step===11&&!S.inventory.ledger){addItem('ledger');S.flags.OLD_CASE_CLUE.push('残缺账页');toast('获得旧案线索 · 残缺账页');}
  }
  function openModal(html,{locked=false,wide=false}={}){stopInput();$('#touch-interact').disabled=true;if(modalCleanup){modalCleanup();modalCleanup=null;}previousFocus=document.activeElement;modalOpen=true;modalLocked=locked;map.setPaused(true);$('#modal').hidden=false;$('#modal-card').classList.toggle('battle-card',wide);$('#modal-close').hidden=locked;$('#modal-content').innerHTML=html;document.body.style.overflow='hidden';setTimeout(()=>($('#modal-content').querySelector('button:not(:disabled)')||$('#modal-close')).focus(),0);}
  function closeModal(force=false){if(modalLocked&&!force)return;if(modalCleanup){modalCleanup();modalCleanup=null;}if(battle){battle.destroy();battle=null;}modalOpen=false;modalLocked=false;$('#modal').hidden=true;map.setPaused(!!dialogueSession);document.body.style.overflow='';if(previousFocus?.focus)previousFocus.focus();renderSidebar();save();}
  function eventComplete(name){S.events[name]=true;syncWorld();save();renderDialogue();}
  function runEvent(name){if(!dialogueSession||step().event!==name)return false;if(name==='boarBattle')boarGate();else if(name==='finalBattle')startBattle('bandit',()=>eventComplete(name));else if(name==='merchant')merchant(true);else if(name==='temple'){endConversation();camp();}else if(name==='fair')fair(true);}
  function startBattle(type,onWin){
    if(S.act<2){toast('先去看看那辆马车，江湖还得结伴而行。');return;}
    openModal('<div id="battle-root"></div>',{locked:true,wide:true});
    const startingHerbs=S.inventory.herb||0;let herbSpent=0;
    battle=new Battle($('#battle-root'),{onChange:p=>{S.party=p;renderSidebar();},onEnd:r=>{herbSpent=Math.max(0,startingHerbs-battle.state.herbs);S.inventory.herb=Math.max(0,(S.inventory.herb||0)-herbSpent);if(r.won){S.coins+=r.reward.coins;addExperience(r.reward.xp);r.reward.items.forEach(name=>{const aliases={'猎风护腕':'wristguard','猪王獠牙':'tusk','猪王皮':'king_hide','野猪皮':'boar_hide','武功残页':'manual'};addItem(aliases[name]||name);});if(type==='boar')questDone('q_boar');if(type==='bandit'){S.flags.B_HIDDEN_MOVE=true;S.flags.WANTED_LEVEL=1;}note('击败'+({boar:'野猪王',wild:'林间野猪',bandit:'黑虎帮二当家'}[type]));closeModal(true);save();if(onWin)onWin();}else{S.party={hpA:55,hpB:48,mpA:25,mpB:25};closeModal(true);toast('暂避锋芒 · 地图上休整后可再战');}}});battle.start(type,{...S.party,xp:S.xp,learnedSkills:S.learnedSkills,hasB:S.act>=2,herbs:startingHerbs,defenseBonus:S.flags.WRIST_EQUIPPED?3:0,shadowStep:!!S.flags.SKILL_SHADOW});
  }
  function boarGate(){openModal('<h2 id="modal-title">洞口的大家伙</h2><p class="modal-subtitle">林猎户的提醒还在耳边：冲撞之前会刨地，看到蓄力先防御。</p><p class="story-warning">野猪王是可选首领。你可以挑战它，也可以击退拦路的小野猪，从侧道带B离开。两条路都能继续本章。</p><div class="button-row"><button class="primary-button" id="challenge-boar">挑战野猪王 · 180 气血</button><button class="secondary-button" id="bypass-boar">走侧道 · 普通野猪</button></div>');$('#challenge-boar').onclick=()=>startBattle('boar',()=>eventComplete('boarBattle'));$('#bypass-boar').onclick=()=>startBattle('wild',()=>eventComplete('boarBattle'));}
  function merchant(required=false){
    if(S.act<4){toast('周记当铺在河阳镇，稍后便会遇见。');return;}let n=S.npc.zhou;
    openModal('<h2 id="modal-title">周记当铺</h2><p class="modal-subtitle">周掌柜 · 谨慎念旧 · 人情归人情，银钱归银钱</p><div class="merchant-ledger">欠账：<b>'+n.debtLiang+'</b> 两　已还：'+n.returnedLiang+' 两<br>认出玉佩：'+(n.recognizedJade?'是':'尚未')+'　知道身份：'+n.knowsIdentity+'<br>使用过的身份：'+(n.identityUsed.map(escapeHTML).join('、')||'无')+'</div><p class="story-warning">这家老商号认得B的家传纹样。十二两记作欠账，另给行路盘缠120文与止血草两份。其他店铺自有规矩。</p><div class="button-row"><button class="primary-button" id="get-credit" '+(S.events.merchant||!required?'disabled':'')+'>以旧交情赊账 · 十二两</button><button class="secondary-button" id="buy-herb" '+(S.coins<15?'disabled':'')+'>买止血草 · 15文</button><button class="secondary-button" id="repay" '+(S.coins<100||n.debtLiang<=n.returnedLiang?'disabled':'')+'>归还一两 · 100文</button></div><p class="modal-subtitle" style="margin-top:20px">'+(required?'完成一次赊账后即可继续主线。':'每笔往来都会留在掌柜的账上。')+'</p>');
    $('#get-credit').onclick=()=>{if(S.events.merchant||!dialogueSession||step().event!=='merchant')return;n.debtLiang+=12;n.recognizedJade=true;n.remembered=true;n.fraudAttempts++;n.identityUsed.push('旧商号少东家');n.notes.push('凭父辈旧交赊账，未说明身份。');S.flags.B_DEBT+=12;S.flags.B_FRAUD++;S.coins+=120;addItem('herb',2);eventComplete('merchant');note('周记当铺赊账十二两');closeModal();toast('获得120文、止血草×2 · 周掌柜记下了这笔账');};
    $('#buy-herb').onclick=()=>{if(S.coins<15)return;S.coins-=15;addItem('herb');n.remembered=true;n.notes.push('现钱购买止血草。');save();merchant(required);toast('获得止血草×1');};
    $('#repay').onclick=()=>{if(S.coins<100||n.returnedLiang>=n.debtLiang)return;S.coins-=100;n.returnedLiang++;S.flags.B_DEBT=Math.max(0,S.flags.B_DEBT-1);n.notes.push('归还欠款一两。');save();merchant(required);toast('已还一两 · 周掌柜点了点头');};
  }
  function camp(){const goal=campGoal();if(goal){toast(goal.label);syncWorld();renderDialogue();}else toast('走到窗前、柴堆、火堆或药锅旁，再查看那里的物件。');}
  function campAction(h){
    const actual=map.hotspots.find(v=>v.id===h.id&&v.type==='camp'),player=map.getPlayer();if(!actual||S.scene!=='temple'||Math.hypot(player.x-actual.x,player.y-actual.y)>150||modalOpen||dialogueSession)return false;
    if(S.act<5){toast('先和B看看这处落脚地。');return false;}
    let message='';
    if(h.id==='camp:debris'){if(S.flags.WOOD_COLLECTED){toast('碎石和旧杂物已经清理好了。');return false;}S.flags.WOOD_COLLECTED=true;addItem('wood',3);addItem('lamp_oil');addItem('cotton');message='清出干地 · 硬木×3、灯油×1、干净布条×1';}
    else if(h.id==='camp:window'){if(S.flags.Q_TEMPLE_REPAIR){toast('破窗已经修好。');return false;}if((S.inventory.wood||0)<2){toast('需要硬木×2；先去庙前碎石旁清理杂物。');return false;}S.inventory.wood-=2;questDone('q_window');message='窗棂补好了 · 山风不再直灌进来';}
    else if(h.id==='camp:firewood'){if(S.flags.TEMPLE_FIREWOOD){toast('干柴已收好，可以到火堆处点火了。');return false;}S.flags.TEMPLE_FIREWOOD=true;addItem('wood',2);message='收拢干柴 · 硬木×2，去院中火堆点火';}
    else if(h.id==='camp:fire'){if(S.flags.TEMPLE_FIRE_LIT){toast('篝火烧得正暖；药锅和歇脚处就在旁边。');return false;}if(!S.flags.TEMPLE_FIREWOOD){toast('柴火潮湿，先到西侧柴堆收集干柴。');return false;}if(!(S.inventory.wood>0)){toast('点火还需要一份硬木，林间和屋内都能找到。');return false;}S.inventory.wood--;if(S.inventory.lamp_oil>0)S.inventory.lamp_oil--;S.flags.TEMPLE_FIRE_LIT=true;message='干柴燃了起来 · 可以查看地窖机关或煎药了';}
    else if(h.id==='camp:mechanism'){if(S.events.temple){toast('地窖已经打开，许账房留在安全的角落。');return false;}if(S.act===5&&S.step<4){toast('先和B商量一下今夜如何落脚。');return false;}if(!S.flags.Q_TEMPLE_REPAIR||!S.flags.TEMPLE_FIRE_LIT){toast(campGoal()?.label||'需要先补好窗户并点燃篝火，才能看清轮轴。');return false;}S.flags.TEMPLE_MECHANISM_READY=true;S.events.temple=true;if(!S.flags.MECHANISM_PIN_GIVEN){addItem('mechanism_pin');S.flags.MECHANISM_PIN_GIVEN=true;}message='机关转动，石板移开 · 老人递来燕尾铜机括，去旁边和他交谈';}
    else if(h.id==='camp:rest'){if(!S.flags.TEMPLE_FIRE_LIT){toast('先在院中火堆点起篝火，才好安心休息。');return false;}restoreResources(0,0,true);message='倚着暖石歇息 · 气血与内力恢复';}
    else if(h.id==='camp:medicine'){if(!S.flags.TEMPLE_FIRE_LIT){toast('药锅是冷的，先去旁边的火堆点火。');return false;}if(!(S.inventory.herb>0)){toast('需要止血草×1，破庙山路边可以采到。');return false;}S.inventory.herb--;restoreResources(35);if(S.inventory.spirit_ash>0){S.inventory.spirit_ash--;addItem('antidote');message='煎好药汤 · 气血+35，幽灯灰配成解毒散×1';}else message='煎好药汤 · 在队人物恢复35气血';}
    if(!message)return false;note(message);syncWorld();save();renderSidebar();renderDialogue();toast(message);return true;
  }
  function fair(required=false){
    if(S.act<6){toast('庙会明日开场，先把眼前的事办妥。');return;}if(S.events.fair){sideQuests();return;}
    let rounds=[{clue:'客人拍掉袖口的木屑：「我在西街打了二十年木器，手腕近来不大灵光。」',answers:['你定是舞刀弄剑的好汉。','这手艺靠的是巧劲，先歇歇腕子。','阁下印堂发黑，花钱消灾吧。'],correct:1},{clue:'姑娘与身边人对视一笑：「我夫君非说今日出来走走，能讨个好彩头。」',answers:['夫妻和美，花开并蒂。','姑娘近日必定有新桃花。','今日不宜出门，快回去。'],correct:0},{clue:'书生捏着旧书，偷偷数了数荷包：「赴考路费还差一些……」',answers:['我这本神功卖你十两。','不如把书卖了，跟我们走。','送你一句吉言，愿你早日金榜题名。'],correct:2}];
    let round=0,score=0,mode=S.flags.FAIR_BUSINESS||'fortune';const name={manual:'绝世秘籍',fortune:'江湖测字',show:'武林表演'}[mode];
    function show(){let q=rounds[round];openModal('<h2 id="modal-title">'+name+' · 眼明心亮</h2><p class="modal-subtitle">第'+(round+1)+'位客人 / 共三位 · A观察，B开口</p><p class="story-warning">'+q.clue+'</p><p class="modal-subtitle" style="margin-top:20px">给B递哪一句提示？</p><div class="choices">'+q.answers.map((a,i)=>'<button class="choice-button" data-answer="'+i+'"><span>'+numerals[i]+'</span>'+a+'</button>').join('')+'</div>',{locked:true});$$('[data-answer]').forEach(b=>b.onclick=()=>{const good=Number(b.dataset.answer)===q.correct;if(good)score++;toast(good?'A递了个眼色，B的话接得恰到好处。':'B：「……这位客人，容我重说一句。」');round++;if(round<3){show();}else{let earned=20+score*25;S.coins+=earned;S.flags.B_FRAUD+=mode==='fortune'?1:2;S.flags.FAIR_SCORE=score;let n=S.npc.tea;n.remembered=true;n.identityUsed.push(name+'摊主');n.notes.push('见过两人摆摊，谈吐'+(score>=2?'机灵':'有些冒失')+'。');n.exposed=score===0;if(score===0)S.flags.WANTED_LEVEL++;eventComplete('fair');note('庙会摆摊，三位客人应对成功'+score+'次');closeModal(true);toast('收摊入账 · '+earned+'文，默契 +'+score);}});}
    show();
  }
  function chase(done){
    openModal('<div class="chase-heading"><span class="chase-kicker">青石镇 · 街巷追逐</span><h2 id="modal-title">抱紧这位「朋友」！</h2><p class="modal-subtitle">点街道左右换道，躲过木箱和菜筐。</p></div><div class="chase-arena" aria-label="抱鸡穿过青石镇街巷"></div><div class="chase-progress-track"><div class="chase-timer" id="chase-timer"></div></div><div class="chase-buttons"><button id="chase-left" aria-label="向左换道"><span aria-hidden="true">←</span> 往左</button><span class="chase-distance">马车就在前面</span><button id="chase-right" aria-label="向右换道">往右 <span aria-hidden="true">→</span></button></div><p class="chase-banter" id="chase-log">王大娘：「前头那个抱鸡的，给我站住！」</p>',{locked:true});
    $('#modal-card').classList.add('chase-card');
    let active=true,controller;
    const clean=()=>{if(!active)return;active=false;controller?.();$('#modal-card').classList.remove('chase-card');};
    controller=window.JianghuChase.start({arena:$('.chase-arena'),progress:$('#chase-timer'),map,onCollision:({hits})=>{$('#chase-log').textContent=hits%2?'A：「鸡兄，抱稳了！前面还有个筐！」':'A：「这镇上的路，怎么拐来拐去的！」';},onComplete:({hits})=>{if(!active)return;S.flags.CHASE_HITS=hits;clean();modalCleanup=null;closeModal(true);toast('一头钻进马车 · 碰撞'+hits+'次，鸡安然无恙');done();}});
    $('#chase-left').onclick=()=>controller.move(-1);$('#chase-right').onclick=()=>controller.move(1);modalCleanup=clean;
  }
  function enterRoom(h){endConversation(false);const target=h.target;if(!scenes[target]?.indoor)return;if(S.act<scenes[target].unlock){toast('这里的故事还未走到，先在镇上转转。');return;}stopInput();S.roomReturn={scene:h.returnOutdoor||S.scene,player:{...(h.returnPos||map.getPlayer())}};S.scene=target;resetMapLoading();map.setScene(target);const spawn=map.getSceneInfo?.().spawn||{x:600,y:680};map.setPlayer(spawn.x,spawn.y);map.setSearched?.(Object.keys(S.searched));world.setScene(S.scene,map);syncWorld();note('走进'+scenes[target].name);renderScene();renderDialogue();save();toast(target==='forestcave'?'山洞别有天地 · 西侧木箱未上锁，深处铜箱有燕尾锁孔':'走进'+scenes[target].name+' · 四下看看吧');}
  function leaveRoom(h){if(!scenes[S.scene]?.indoor)return;endConversation(false);stopInput();const back=S.roomReturn||{scene:h?.target||scenes[S.scene].outdoor,player:h?.returnPos||{x:850,y:1380}};S.scene=back.scene;S.roomReturn=null;resetMapLoading();map.setScene(S.scene);map.setPlayer(back.player.x,back.player.y);map.setSearched?.(Object.keys(S.searched));world.setScene(S.scene,map);syncWorld();renderScene();renderDialogue();save();toast('回到'+scenes[S.scene].name);}
  // Each journey scatters modest finds among the actual furniture and landscape.
  // Resolve the whole room once so saving/reloading never rerolls a discovery.
  function roomFinds(room){
    const objects=(window.ROOM_SEARCH_LAYOUTS?.[room]||(map.hotspots||[]).filter(h=>h.type==='search'));
    let resolved=S.roomFinds[room];
    if(resolved&&typeof resolved==='object'&&objects.every(h=>Object.hasOwn(resolved,h.id)))return resolved;
    let seed=S.roomSeeds[room];
    if(!Number.isInteger(seed)||seed<0||seed>0xffffffff){const data=new Uint32Array(1);if(globalThis.crypto?.getRandomValues)globalThis.crypto.getRandomValues(data);else data[0]=Math.floor(Math.random()*0x100000000);seed=data[0]||0x6d2b79f5;S.roomSeeds[room]=seed;}
    let n=seed>>>0;const random=()=>{n=(n+0x6d2b79f5)|0;let t=n;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};
    const order=objects.map(h=>({h,rank:random()})).sort((a,b)=>a.rank-b.rank),count=Math.ceil(objects.length*.7),occupied=new Set(order.slice(0,count).map(v=>v.h.id));
    for(const h of objects)if(C.primary(h))occupied.add(h.id);
    resolved=resolved&&typeof resolved==='object'?resolved:{};
    for(const h of objects){if(Object.hasOwn(resolved,h.id))continue;resolved[h.id]=occupied.has(h.id)?C.find(room,h,random):{empty:true,coins:0,items:{},text:h.emptyText||'仔细查看后，没有可带走的东西。'};}
    S.roomFinds[room]=resolved;return resolved;
  }
  function searchRoom(h){
    const actual=(map.hotspots||[]).find(v=>v.id===h?.id&&v.type==='search');
    if(!actual)return false;
    const player=map.getPlayer();if(Math.hypot(player.x-actual.x,player.y-actual.y)>155)return false;
    if(S.searched[actual.id]){toast('已经查看过了。');return false;}
    const reward=roomFinds(S.scene)[actual.id];if(!reward)return false;
    S.searched[actual.id]={room:S.scene,kind:actual.kind||actual.id.split(':').pop(),empty:reward.empty,at:new Date().toISOString()};
    const found=reward.empty?'':grantFound(reward);map.setSearched?.(Object.keys(S.searched));
    note('在'+scenes[S.scene].name+'查看'+(actual.name||'物件')+'：'+(found||'未发现可带走的东西'));save();renderSidebar();
    toast(found?'找到 · '+found:'仔细看过，没发现可以带走的东西。');
    $('#exploration-note').textContent=reward.text;$('#exploration-note').hidden=false;setTimeout(()=>{$('#exploration-note').hidden=true;},5500);return true;
  }
  function interact(h){if(modalOpen||dialogueSession)return;if(tryStartStory(h))return;if(h.type==='camp'){campAction(h);return;}if(h.type==='chest'){openCaveChest(h);return;}if(h.type==='exit-area'){sceneTo(h.target);if(S.scene===h.target&&h.returnPos){map.setPlayer(h.returnPos.x,h.returnPos.y);world.setScene(S.scene,map);syncWorld();save();}return;}if(h.id?.startsWith('world:')){interactWorld(h);return;}if(h.type==='door'){enterRoom(h);return;}if(h.type==='exit'){leaveRoom(h);return;}if(h.type==='search'||h.id?.startsWith('loot:')){searchRoom(h);return;}const id=h.id;
    if(id==='chicken'||id==='kid'||id==='cart'){if(S.act<=2){toast(id==='cart'?'马车里的公子合上折扇，似笑非笑。':'豆子：「哥哥，你跟鸡谈完人生了吗？」');$('#dialogue').scrollIntoView({behavior:'smooth',block:'nearest'});}else toast('青石镇的故事，就从这里开始。');}
    else if(id==='aunt'){if(S.act<2)toast('王大娘：「看鸡归看鸡，可别乱伸手！」');else chickenQuest();}
    else if(id==='herb'){toast('这里的草药已经采过了，沿小路再找找。');}
    else if(id==='boar'){toast('先听听猎户的提醒，再和B一同靠近野猪王。');}
    else if(id==='hunter')hunter();
    else if(id==='cave')cave();
    else if(id==='pawnshop')merchant();
    else if(id==='flower')flower();
    else if(id==='fair')S.act>=6?sideQuests():toast('彩棚还在搭建，庙会明日开场。');
    else if(id==='partner'){if(S.completed)ending();else toast(caveGoal()?.label||campGoal()?.label||'B：「先走走看，江湖又不会长脚跑了。」');}
    else if(['accountant','tiger','masked'].includes(id)){toast('对方暂时没有更多话要说。');}
    else if(id==='thief')S.act>=6?purseQuest():teaShop();
    else if(['fire','mechanism','cellar','rest'].includes(id))camp();
  }
  function chickenQuest(){if(S.quests.q_chicken){toast('王大娘：「人还不算坏，往后饿了来帮我搬菜！」');return;}openModal('<h2 id="modal-title">一只鸡的人情</h2><p class="modal-subtitle">王大娘 · 鸡还了，话还没说</p><p class="story-warning">「下回饿了好好说，别再打我家报晓的主意！」<br>A挠了挠头。那只肥鸡正从她身后探出脑袋。</p><div class="button-row"><button class="primary-button" id="apologize">赔个不是，帮大娘搬菜</button></div>');$('#apologize').onclick=()=>{questDone('q_chicken');addItem('bun',2);closeModal();toast('王大娘塞来两个馒头 · 记住了一份善意');};}
  function hunter(){openModal('<h2 id="modal-title">河边营地</h2><p class="modal-subtitle">猎户歇脚的地方，也有人正为归途发愁。</p><div class="entry"><h3>林间一把草</h3><p>采药婆婆：「还差三株药。我这把老骨头，实在跑不动了。」</p><div class="button-row"><button class="secondary-button" id="herbalist" '+(S.quests.q_herb?'disabled':'')+'>'+(S.quests.q_herb?'已送婆婆安全下山':'交出止血草×3，护送婆婆')+'</button></div></div><div class="entry"><h3>猎户的窍门</h3><p>「看见野猪刨地，就先防御。趁它撞过头，再回身出招。」</p><div class="button-row"><button class="primary-button" id="training">试试身手 · 普通野猪</button><button class="secondary-button" id="pouch">在河边找找</button></div></div>');$('#herbalist').onclick=()=>{if((S.inventory.herb||0)<3){toast('还差几株药，营地南边的草丛可以采集。');return;}S.inventory.herb-=3;addItem('antidote',2);questDone('q_herb');hunter();toast('婆婆平安下山 · 获得解毒散×2');};$('#training').onclick=()=>startBattle('wild');$('#pouch').onclick=pouchQuest;}
  function pouchQuest(){if(S.flags.AB_POUCH){toast('B把香囊系得紧了些。');return;}openModal('<h2 id="modal-title">不值钱的香囊</h2><p class="modal-subtitle">河岸的芦苇上，挂着一只补过两次的旧香囊。</p><p class="story-warning">角上缝着一个小小的「凤」字。B低头找东西的动作忽然停了，随即若无其事地转过脸。</p><div class="button-row"><button class="primary-button" id="return-pouch">「你的东西。」递回去，不拿它取笑</button></div>');$('#return-pouch').onclick=()=>{addItem('pouch');questDone('q_pouch');closeModal();toast('羁绊已记录 · 旧香囊');};}
  function cave(){const h=map.hotspots.find(v=>v.id==='cave');if(h)enterRoom(h);}
  function openCaveChest(h){
    const actual=map.hotspots.find(v=>v.id===h.id&&v.type==='chest'),player=map.getPlayer();if(!actual||S.scene!=='forestcave'||Math.hypot(player.x-actual.x,player.y-actual.y)>150)return false;
    const first=h.id==='cave:open';
    if(first){
      if(S.flags.CAVE_OPEN&&S.flags.CAVE_BOX_CHECKED){toast('木箱已查看，行路物资和青玉都已收好。深处铜匣不影响前往河阳。');return false;}
      const suppliesTaken=!!(S.flags.CAVE_OPEN||S.flags.CAVE_CHEST),reward=suppliesTaken?{coins:0,items:{}}:{coins:20,items:{manual:1,herb:2}};
      S.flags.CAVE_OPEN=true;S.flags.CAVE_CHEST=true;S.flags.CAVE_BOX_CHECKED=true;
      if(!(S.inventory.half_jade>0)){reward.items.half_jade=1;if(!S.flags.OLD_CASE_CLUE.includes('半块青玉佩'))S.flags.OLD_CASE_CLUE.push('半块青玉佩');}
      const found=grantFound(reward);note('查看洞口木箱：'+(found||'确认已收好的旧物'));syncWorld();save();renderDialogue();
      toast(found?'开箱获得 · '+found+' · 靠近B交谈':'旧物已经收好，和B聊聊青玉，再去河阳。');return true;
    }
    if(S.flags.CAVE_SEALED){toast('铜匣已打开，里面的东西已收好了。');return false;}
    if(!(S.inventory.mechanism_pin>0)){
      const hint='铜匣需要「燕尾铜机括」：第五幕调查破庙机关时取得。这是回访奖励，不影响现在前往河阳。';
      toast(hint);$('#exploration-note').textContent=hint;$('#exploration-note').hidden=false;setTimeout(()=>{$('#exploration-note').hidden=true;},6500);return false;
    }
    S.flags.CAVE_SEALED=true;S.inventory.mechanism_pin--;const found=grantFound({coins:65,items:{manual_blade:1,manual_fan:1,antidote:2}});note('打开封纹铜匣：'+found);syncWorld();save();renderSidebar();toast('开箱获得 · '+found);return true;
  }
  function flower(){if(S.act<4)return;openModal('<h2 id="modal-title">醉花楼门前</h2><p class="modal-subtitle">阿绫笑着招手。B立刻拿折扇挡了半张脸。</p><p class="story-warning">阿绫：「小裴在这里长大，人情冷暖都见得早。嘴上什么都说得漂亮，真关心他时，他倒不知道怎么接了。」<br><br>凤妈妈本人并不在这里。她的来信，正在主线故事里等着B。</p><div class="button-row"><button class="primary-button" id="flower-close">记在心里，陪他继续走</button></div>');$('#flower-close').onclick=()=>closeModal();}
  function teaShop(){let n=S.npc.tea;openModal('<h2 id="modal-title">孙记茶摊</h2><p class="modal-subtitle">同在河阳，也不是每一笔人情都能通用。</p><p class="story-warning">孙掌柜：「玉佩挺好看。不过我这儿是小本买卖，茶水两文，现钱结。」</p><div class="button-row"><button class="primary-button" id="buy-tea" '+(S.coins<2?'disabled':'')+'>付两文，请B喝茶</button><button class="secondary-button" id="try-jade">试着拿出玉佩</button></div>');$('#buy-tea').onclick=()=>{if(S.coins<2)return;S.coins-=2;restoreResources(0,10);n.remembered=true;n.notes.push('现钱请同伴喝茶。');closeModal();toast('喝了口热茶 · 两人恢复10点内力');};$('#try-jade').onclick=()=>{n.recognizedJade=false;n.remembered=true;n.notes.push('曾出示陌生玉佩，未予赊账。');save();toast('孙掌柜不认得这个纹样，仍需现钱。');};}
  function sideQuests(){openModal('<h2 id="modal-title">河阳庙会</h2><p class="modal-subtitle">锣鼓喧天，热闹里也藏着几桩小小的烦恼。</p>'+[['purse','谁偷了我的钱袋','钱嫂正焦急地找买药的钱。','q_purse'],['arena','比武招亲','A怎么站到擂台上去了？','q_arena'],['wine','酒鬼的遗失物','醉客记不住路，却记得家传玉的纹样。','q_wine']].map(x=>'<div class="entry"><h3>'+x[1]+(S.quests[x[3]]?' · 已完成':'')+'</h3><p>'+x[2]+'</p><div class="button-row"><button class="secondary-button" data-side="'+x[0]+'" '+(S.quests[x[3]]?'disabled':'')+'>去看看 →</button></div></div>').join(''));$$('[data-side]').forEach(b=>b.onclick=()=>({purse:purseQuest,arena:arenaQuest,wine:wineQuest}[b.dataset.side])());}
  function purseQuest(){if(S.quests.q_purse){toast('钱嫂已经找回了钱袋。');return;}openModal('<h2 id="modal-title">谁偷了我的钱袋</h2><p class="modal-subtitle">A仔细观察摊边的行人，B去问了糖人师傅。</p><p class="story-warning">糖人师傅：「方才有人挤过来，碰翻了糖浆，右袖沾了一大块。他走得可快了。」</p><div class="choices" style="margin-top:20px">'+['拦住背竹筐的采药人。','看看右袖发亮、神色慌张的灰衣人。','搜查正在吵架的布庄伙计。'].map((t,i)=>'<button class="choice-button" data-suspect="'+i+'"><span>'+numerals[i]+'</span>'+t+'</button>').join('')+'</div>');$$('[data-suspect]').forEach(b=>b.onclick=()=>{if(b.dataset.suspect!=='1'){toast('A：「这位不是，再仔细看看袖口。」');return;}S.coins+=35;questDone('q_purse');closeModal();toast('找回钱袋 · 获得35文，钱嫂记住了你们');});}
  function arenaQuest(){openModal('<h2 id="modal-title">误上招亲擂</h2><p class="modal-subtitle">A：「你还笑！上来替我打！」 B：「本少主不近女色。」</p><p class="story-warning">赵姑娘横枪一笑：「招的是愿意的人，切磋却是谁都可以。你右肩先动，出手时怕是留了破绽。」</p><div class="choices" style="margin-top:20px"><button class="choice-button" id="arena-good">收住急攻，侧身卸力，点到即止。</button><button class="choice-button" id="arena-bad">闭眼冲上去，一招定胜负！</button></div>');$('#arena-good').onclick=()=>{addItem('manual');addExperience(35);questDone('q_arena');closeModal();toast('点到即止，误会说清 · 获得武功残页');};$('#arena-bad').onclick=()=>{S.party.hpA=Math.max(1,S.party.hpA-8);renderSidebar();toast('A结结实实摔了一跤。B：「先看对手，再看脚下。」');};}
  function wineQuest(){openModal('<h2 id="modal-title">酒鬼的遗失物</h2><p class="modal-subtitle">醉客：「是圆的，刻着一朵梅花。跟了我二十年，可不是什么门派信物。」</p><p class="story-warning">石桥边有三样东西闪着光：一枚铜扣、一块梅纹圆玉、半片琉璃。</p><div class="button-row"><button class="secondary-button" id="wine-wrong">捡起铜扣</button><button class="primary-button" id="wine-right">把梅纹圆玉带回去</button></div>');$('#wine-wrong').onclick=()=>toast('B：「别连圆的都捡。先看看纹样。」');$('#wine-right').onclick=()=>{S.coins+=25;addItem('wine');questDone('q_wine');closeModal();toast('物归原主 · 获得25文与一壶桂花酿');};}
  function panel(id){if(modalLocked)return;if(id==='explore'){closeModal();return;}if(id==='journal')journal();if(id==='bonds')bonds();if(id==='inventory')inventory();if(id==='save')savePanel();if(id==='map')travel();if(id==='help')help();}
  function journal(tab='main'){openModal('<h2 id="modal-title">江湖志</h2><p class="modal-subtitle">走过的路，遇见的人，江湖都会记得。</p><div class="modal-tabs"><button data-tab="main" class="'+(tab==='main'?'selected':'')+'">七幕江湖</button><button data-tab="side" class="'+(tab==='side'?'selected':'')+'">支线 · '+Object.keys(S.quests).filter(k=>S.quests[k]).length+'/8</button><button data-tab="memory" class="'+(tab==='memory'?'selected':'')+'">人情旧账</button><button data-tab="log" class="'+(tab==='log'?'selected':'')+'">行旅记录</button></div><div id="journal-body"></div>');$$('[data-tab]').forEach(b=>b.onclick=()=>journal(b.dataset.tab));let html='';if(tab==='main')html=D.acts.map(a=>'<div class="entry '+(a.id<S.act?'done':a.id===S.act?'current':'locked')+'"><small>第'+numerals[a.id-1]+'幕 · '+a.location+'</small><h3>'+a.title+(a.id<S.act?' ✓':a.id===S.act?' · 当前':'')+'</h3><p>'+a.objective+'</p></div>').join('');if(tab==='side')html=D.quests.map(q=>'<div class="entry '+(S.quests[q.id]?'done':'')+'"><small>'+q.location+' · '+(S.quests[q.id]?'已完成':'可选')+'</small><h3>'+q.title+'</h3><p>'+q.description+'</p><small>回报 · '+q.reward+'</small></div>').join('');if(tab==='memory')html=Object.values(S.npc).map(n=>'<div class="entry"><h3>'+n.name+' <span class="pill">'+n.temperament+'</span></h3><p>欠账 '+n.debtLiang+' 两 · 已还 '+n.returnedLiang+' 两 · 认出玉佩 '+(n.recognizedJade?'是':'否')+'<br>记住两人 '+(n.remembered?'是':'尚未')+' · 知道B的身份 '+n.knowsIdentity+'<br>'+(n.notes.map(escapeHTML).join('<br>')||'暂时没有往来。')+'</p></div>').join('')+'<div class="entry"><p>累计偷窃 '+S.flags.A_THEFT+' 次 · 行骗 '+S.flags.B_FRAUD+' 次 · 未清欠账 '+S.flags.B_DEBT+' 两 · 追捕程度 '+S.flags.WANTED_LEVEL+'</p></div>';if(tab==='log')html=S.log.length?S.log.map(l=>'<div class="entry"><small>第'+numerals[l.act-1]+'幕</small><p>'+escapeHTML(l.text)+'</p></div>').join(''):'<p class="modal-subtitle">旅途刚刚开始，第一段记录等你写下。</p>';$('#journal-body').innerHTML=html;}
  function bonds(){openModal('<h2 id="modal-title">同行，情未深言</h2><p class="modal-subtitle">第一章，两人开始成为能够依赖的伙伴。每一种选择，都有自己的回响。</p><p class="story-warning">羁绊记录会独立保存，可随存档导出，供后续章节接续。这些选择不换算成简单的善恶分数。</p><div class="memory-grid">'+Object.entries(D.bondLabels).map(([key,b])=>{let set=Object.hasOwn(S.flags,key),v=S.flags[key];return '<article class="memory-card" style="opacity:'+(set?1:.5)+'"><h3>'+b.title+'</h3><p>'+(set?(b.values?.[v]||b.description):'这一页，等待你们共同走过。')+'</p><code>'+key+(set?' · '+escapeHTML(v):' · 未记录')+'</code></article>';}).join('')+'</div>');}
  function useItem(id){
    if(!(S.inventory[id]>0))return false;const skill=P.skillForManual(id);
    if(skill){if(S.learnedSkills.includes(skill.id)){toast('这招已经学会了，秘籍仍留在行囊中。');return false;}S.learnedSkills.push(skill.id);S.inventory[id]--;if(skill.id==='shadow_step')S.flags.SKILL_SHADOW=true;const earned=addExperience(25);restoreResources(0,8);note(skill.actor+'学会「'+skill.name+'」');toast(skill.actor+'学会「'+skill.name+'」 · 已加入战斗技能 · '+earned);}
    else if(id==='wristguard'){if(S.flags.WRIST_EQUIPPED){toast('护腕已经戴好了。');return false;}S.flags.WRIST_EQUIPPED=true;toast('戴上护腕 · 防御提升3点');}
    else{const hp={herb:35,bun:20,ricecake:25,dried_meat:40,cotton:25},mp={tea_leaf:18,incense:12};if(id!=='wine'&&!hp[id]&&!mp[id]&&id!=='antidote')return false;S.inventory[id]--;if(id==='wine'){for(const k of(S.act>=2?['A','B']:['A']))S.party['mp'+k]=heroStats(k).maxMP;}else if(id==='antidote'){restoreResources(15);toast('服下解毒散 · 在队人物恢复15气血，战斗中可用草药驱毒');}else restoreResources(hp[id]||0,mp[id]||0);if(id!=='antidote')toast('使用'+idToName(id)+' · '+(hp[id]?'气血+'+hp[id]:mp[id]?'内力+'+mp[id]:'内力恢复'));}
    save();renderSidebar();return true;
  }
  function inventory(){const icons={herb:'草',wood:'木',sugar:'糖',jade:'玉',half_jade:'珏',letter:'信',ledger:'账',debt_note:'债',manual:'武',manual_fan:'扇',manual_blade:'掌',pouch:'囊',antidote:'药',bun:'饼',wine:'酿',wristguard:'腕',ricecake:'糕',dried_meat:'肉',cotton:'布',tea_leaf:'茶',incense:'香',spirit_ash:'灰',mechanism_pin:'钥'};const all=Object.entries(S.inventory).filter(([,n])=>n>0);openModal('<h2 id="modal-title">行囊</h2><p class="modal-subtitle">'+P.level(S.xp)+'级 · 经验 '+S.xp+(P.nextXP(S.xp)?' / '+P.nextXP(S.xp):' · 已臻化境')+' · 文钱 '+S.coins+'<br>秘籍须研读，学会的招式会出现在战斗技能中。</p><div class="item-grid">'+all.map(([id,n])=>{const t=D.items.find(i=>i.id===id)||{name:id,type:'行旅物品',description:'旅途中收下的东西。'},skill=P.skillForManual(id),usable=!!skill||['herb','bun','wine','wristguard','ricecake','dried_meat','cotton','tea_leaf','incense','antidote'].includes(id),learned=skill&&S.learnedSkills.includes(skill.id);return'<article class="item-card"><span class="item-symbol">'+(icons[id]||t.name[0])+'</span><div><h3>'+t.name+' <small>×'+n+'</small></h3><p>'+t.type+' · '+t.description+'</p>'+(usable?'<button data-use="'+id+'" '+(learned?'disabled':'')+'>'+(skill?(learned?'已学会 · '+skill.name:'研读 · '+skill.actor+'学会'+skill.name):id==='wristguard'?'佩戴护腕':'使用'+t.name)+'</button>':'')+'</div></article>';}).join('')+'</div>');$$('[data-use]').forEach(b=>b.onclick=()=>{useItem(b.dataset.use);inventory();});}
  function idToName(id){return D.items.find(i=>i.id===id)?.name||{wine:'桂花酿',bun:'热馒头'}[id]||id;}
  function savePanel(){let html='<h2 id="modal-title">留一页，待重逢</h2><p class="modal-subtitle">自动存档仅保存在此设备的当前浏览器。手动存档可另留三个节点。</p>';for(let i=1;i<=3;i++){let t=readSave(KEY+'-slot'+i);html+='<div class="save-slot"><div><h3>行旅存档 · '+numerals[i-1]+'</h3><p>'+(t?'第'+numerals[t.act-1]+'幕 · '+D.acts[t.act-1].title+' · '+new Date(t.savedAt).toLocaleString('zh-CN'):'此页尚空')+'</p></div><div><button data-save="'+i+'">存入此页</button><button data-load="'+i+'" '+(!t?'disabled':'')+'>从此继续</button></div></div>';}html+='<div class="button-row"><button class="primary-button" id="save-now">立即保存</button><button class="secondary-button" id="export-save">导出存档</button><button class="secondary-button" id="import-save">导入存档</button><button class="secondary-button" id="new-game">重新启程</button><input type="file" id="save-file" accept=".json" hidden></div>';openModal(html);$$('[data-save]').forEach(b=>b.onclick=()=>{save();try{localStorage.setItem(KEY+'-slot'+b.dataset.save,JSON.stringify(S));savePanel();toast('已存入第'+numerals[b.dataset.save-1]+'页');}catch{toast('浏览器未允许保存，请导出存档。');}});$$('[data-load]').forEach(b=>b.onclick=()=>{let t=readSave(KEY+'-slot'+b.dataset.load);if(t){restore(t);closeModal();toast('又回到这段江湖。');}});$('#save-now').onclick=()=>save(false);$('#export-save').onclick=()=>{save();const blob=new Blob([JSON.stringify(S,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='江湖多情债-第一章存档.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),30000);};$('#import-save').onclick=()=>$('#save-file').click();$('#save-file').onchange=async e=>{let f=e.target.files[0];if(!f)return;try{let t=JSON.parse(await f.text());if(t.version!==1||!Number.isInteger(t.act)||t.act<1||t.act>7||!Number.isInteger(t.step)||t.step<0||t.step>=D.acts[t.act-1].steps.length||!t.party||!t.flags||!t.inventory||!t.npc||!scenes[t.scene])throw Error();if(!validSave(t))throw Error();restore(t);closeModal();toast('已导入这段江湖。');}catch{toast('这份存档格式不正确，请选择本游戏导出的JSON。');}};$('#new-game').onclick=()=>{openModal('<h2 id="modal-title">重新启程？</h2><p class="modal-subtitle">当前自动存档将被新的旅程覆盖，三个手动存档会保留。</p><div class="button-row"><button class="primary-button" id="confirm-new">从青石镇的清晨开始</button><button class="secondary-button" id="cancel-new">先不急</button></div>');$('#confirm-new').onclick=()=>{restore(initial());closeModal();toast('青石镇，鸡又叫了。');};$('#cancel-new').onclick=()=>savePanel();};}
  function restore(t){endConversation(false);const pos={...t.player};S=t;normalizeExploration();S.roomReturn=S.roomReturn||null;S.worldVersion=3;resetMapLoading();map.setScene(S.scene);map.setPlayer(pos.x,pos.y);map.setCompanion(S.act>=2);map.setSearched?.(Object.keys(S.searched));world=new JianghuWorld({saved:S.world});world.setScene(S.scene,map);syncWorld();renderScene();renderDialogue();save();}
  function travel(){openModal('<h2 id="modal-title">此间江湖</h2><p class="modal-subtitle">已走过的地方，随时都能回去。沿路寻找门口标记，客栈、农家、杂货铺与当铺等房屋可以进入搜寻。</p><div class="travel-grid">'+Object.entries(scenes).filter(([,s])=>!s.indoor).map(([id,s])=>'<button class="travel-card '+(S.scene===id?'selected':'')+'" data-travel="'+id+'" '+(S.act<s.unlock?'disabled':'')+'><h3>'+s.name+'</h3><p>'+s.caption+'<br>'+(S.act<s.unlock?'第'+numerals[s.unlock-1]+'幕开放':S.scene===id?'⌖ 当前所在':'点击前往 →')+'</p></button>').join('')+'</div>');$$('[data-travel]').forEach(b=>b.onclick=()=>{sceneTo(b.dataset.travel);closeModal();});}
  function character(id){const c=D.characters.find(c=>c.id===id),st=heroStats(id),skills=P.skills(S.learnedSkills,id);openModal('<h2 id="modal-title">'+(id==='A'?'A · 市井游侠':'B · 赊账公子')+'</h2><p class="modal-subtitle">二十五岁 · '+st.level+'级 · 经验 '+S.xp+(P.nextXP(S.xp)?' / '+P.nextXP(S.xp):'')+'<br>气血上限 '+st.maxHP+' · 内力上限 '+st.maxMP+' · 招式加成 +'+st.attackBonus+'</p><div class="character-details"><img class="upright-portrait" src="assets/portrait-'+id.toLowerCase()+'.webp" alt="'+id+'的立绘"><div><h3>'+c.role+'</h3><p>'+(id==='B'&&S.act<4?'衣着华贵，折扇不离手。这个人的来路，眼下还没有人知道。':c.description)+'</p><h3>已会武学</h3>'+skills.map(v=>'<p><strong>'+v.name+'</strong> · '+v.cost+'内力<br>'+v.description+'</p>').join('')+'</div></div>');}
  function help(){openModal('<h2 id="modal-title">初入江湖</h2><p class="modal-subtitle">第一章可玩原型 · 村镇、田埂、林间河岸与可搜寻的房屋</p><div class="help-rows"><div><strong>走一走</strong>手机点道路自动行走，点人物或物件会走近后互动。只有道路、广场和桥梁可以通行，草地与水面无法进入，房屋要从门口进入；屋内靠近家具点「查看」，或直接点桌面、箱子、橱柜。搜寻不做地图标记，物品符合建筑用途；野外找草药，击败游荡的小怪后拾取掉落。电脑也可使用WASD / 方向键。</div><div><strong>说一说</strong>直接点NPC会自动走近交谈；靠近时点右下「互动」。走到对应人物身边交谈，才会触发剧情；一段对话结束后回到探索。遇到选项时亲自选择。电脑可按E互动、空格继续。</div><div><strong>打一场</strong>A、B各行动一次后敌人行动。打怪立即获得经验，升级提高气血、内力与招式威力。秘籍在行囊研读后，会新增可点选的战斗技能。技能消耗内力，蓄力时可以防御。战败能重试，药草能恢复气血。</div><div><strong>记下来</strong>浏览器自动保存进度。顶部菜单可看羁绊、行囊、独立商人记忆，也可导出存档供后续接续。</div></div><p class="modal-subtitle" style="margin-top:20px">iPhone推荐用Safari打开。点分享按钮，再选「添加到主屏幕」，以后可从图标启动。右上⛶可进入沉浸界面；横竖屏均可游玩。存档保存在当前浏览器中。</p>');}
  function ending(){openModal('<div class="ending"><div class="large-seal">伴</div><p>江 湖 多 情 债</p><h2 id="modal-title">第一章 · 完</h2><p>两个穷鬼，一张欠条。<br>他们成了彼此在江湖上第一个真正的伙伴。<br><br>江湖路远，先从一只鸡开始。</p><div class="merchant-ledger">完成支线 '+Object.values(S.quests).filter(Boolean).length+' / 8<br>已记录羁绊 '+Object.keys(D.bondLabels).filter(k=>Object.hasOwn(S.flags,k)).length+' / 7<br>旧案线索 '+S.flags.OLD_CASE_CLUE.length+' 件 · 未清欠账 '+S.flags.B_DEBT+' 两</div><div class="button-row" style="justify-content:center"><button class="primary-button" id="ending-explore">再逛逛这片江湖</button><button class="secondary-button" id="ending-save">保存这一程</button></div></div>');$('#ending-explore').onclick=()=>closeModal();$('#ending-save').onclick=savePanel;}
  function escapeHTML(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  $('#next-dialogue').onclick=()=>next();$('#dialogue-close').onclick=()=>endConversation();$('#modal-close').onclick=()=>closeModal();$('#modal').addEventListener('click',e=>{if(e.target===$('#modal'))closeModal();});$$('[data-panel]').forEach(b=>b.onclick=()=>panel(b.dataset.panel));$$('[data-character]').forEach(b=>b.onclick=()=>character(b.dataset.character));$('#map-button').onclick=travel;$('#room-exit').onclick=()=>leaveRoom();$('#world-retry').onclick=()=>{save();resetMapLoading();map.loadAssets?.();refreshMapLoading();};
  let viewportFrame=null;
  function syncViewport(){
    const viewport=window.visualViewport,root=document.documentElement;
    const width=Math.max(1,Math.round(viewport?.width||window.innerWidth||root.clientWidth||390));
    const height=Math.max(1,Math.round(viewport?.height||window.innerHeight||root.clientHeight||844));
    root.style.setProperty('--app-height',height+'px');root.style.setProperty('--app-width',width+'px');
    if(viewportFrame!==null)cancelAnimationFrame(viewportFrame);
    viewportFrame=requestAnimationFrame(()=>{viewportFrame=null;map.resize?.();});
  }
  window.addEventListener('resize',syncViewport);
  window.addEventListener('orientationchange',()=>{stopInput();syncViewport();setTimeout(syncViewport,180);});
  window.visualViewport?.addEventListener?.('resize',syncViewport);
  window.visualViewport?.addEventListener?.('scroll',syncViewport);
  function updateFocusButton(){const active=!!document.fullscreenElement||document.body.classList.contains('focus-mode');$('#fullscreen-button').setAttribute('aria-pressed',String(active));$('#fullscreen-button').setAttribute('aria-label',active?'还原界面':'沉浸游玩');}
  $('#fullscreen-button').onclick=async()=>{stopInput();if(document.fullscreenElement){await document.exitFullscreen();}else if(document.body.classList.contains('focus-mode')){document.body.classList.remove('focus-mode');}else{try{if(!document.documentElement.requestFullscreen)throw Error('iPhone focus view');await document.documentElement.requestFullscreen();}catch{document.body.classList.add('focus-mode');}}updateFocusButton();syncViewport();};
  document.addEventListener('fullscreenchange',()=>{updateFocusButton();syncViewport();});
  $('#audio-button').onclick=async()=>{if(ambient){ambient.close();ambient=null;$('#audio-button').innerHTML='♫<span class="muted-mark"></span>';$('#audio-button').setAttribute('aria-label','开启环境音乐');toast('环境音乐已关闭');return;}try{ambient=new(window.AudioContext||window.webkitAudioContext)();await ambient.resume();const ctx=ambient;let t=0;const play=()=>{if(ambient!==ctx)return;const notes=[261.63,293.66,329.63,392,440,523.25,440,392];for(let i=0;i<4;i++){let o=ctx.createOscillator(),g=ctx.createGain();o.type='sine';o.frequency.value=notes[(t+i*2)%notes.length];g.gain.setValueAtTime(0,ctx.currentTime+i*.65);g.gain.linearRampToValueAtTime(.035,ctx.currentTime+i*.65+.02);g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+i*.65+2.5);o.connect(g);g.connect(ctx.destination);o.start(ctx.currentTime+i*.65);o.stop(ctx.currentTime+i*.65+2.6);}t++;setTimeout(play,5200);};play();$('#audio-button').textContent='♫';$('#audio-button').setAttribute('aria-label','关闭环境音乐');toast('风声入弦 · 环境音乐已开启');}catch{toast('此浏览器暂不支持环境音乐。');}};
  document.addEventListener('keydown',e=>{if(e.key==='Tab'&&modalOpen){const focusables=$$('#modal button:not(:disabled), #modal [tabindex="0"], #modal input:not([hidden])').filter(x=>!x.hidden);const first=focusables[0],last=focusables[focusables.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}return;}if(['INPUT','TEXTAREA'].includes(e.target.tagName))return;if(e.key==='Escape'){if(dialogueSession&&!modalOpen)endConversation();else closeModal();return;}if(modalOpen||offlinePanelOpen)return;let key=e.key.toLowerCase();if(['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright'].includes(key)){e.preventDefault();pressed.add(key);}if(e.repeat)return;if(key==='e'){e.preventDefault();interactContext();}if(key==='m'){e.preventDefault();travel();}if((e.code==='Space'||e.key==='Enter')&&e.target.tagName!=='BUTTON'){e.preventDefault();next();}});document.addEventListener('keyup',e=>pressed.delete(e.key.toLowerCase()));window.addEventListener('blur',stopInput);
  $$('[data-move]').forEach(b=>{const [x,y]=b.dataset.move.split(',').map(Number);b.addEventListener('pointerdown',e=>{if(modalOpen||dialogueSession||offlinePanelOpen)return;e.preventDefault();stopInput();touchMotion.x=x;touchMotion.y=y;touchMotion.pointer=e.pointerId;touchMotion.button=b;b.classList.add('is-held');try{b.setPointerCapture?.(e.pointerId);}catch{}map.move(x*3,y*3);});const release=e=>{if(touchMotion.button===b&&(e.pointerId==null||e.pointerId===touchMotion.pointer))stopInput();};for(const ev of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(ev,release);});
  window.addEventListener('pointerup',e=>{if(e.pointerId===touchMotion.pointer)stopInput();});window.addEventListener('pointercancel',stopInput);
  function nearbyStoryTarget(){
    const gate=getStoryGate();if(!gate||gate.scene!==S.scene||campGoal()||caveGoal())return null;
    const h=map.hotspots.find(h=>h.id===gate.npc),player=map.getPlayer();if(!h||Math.hypot(h.x-player.x,h.y-player.y)>140)return null;
    if(gate.anchor){const anchor=mapPosition(gate.anchor);if(!anchor||Math.hypot(anchor.x-player.x,anchor.y-player.y)>(gate.radius||220))return null;}
    return h;
  }
  function contextTarget(){const story=nearbyStoryTarget();if(story)return story;const nearby=map.getNearby(),inspect=map.getInspectableNearby?.();return inspect&&(!nearby||nearby.companion)?inspect:nearby;}
  function interactContext(){const h=contextTarget();if(!h||map.paused)return false;if(h.type==='search')return !!map.interactInspectable?.();map.trigger(h);return true;}
  function touchInteract(){if(modalOpen||dialogueSession||offlinePanelOpen)return;if(!interactContext())toast('再靠近人物或家具，点「互动」或「查看」。');}
  $('#touch-interact').onclick=touchInteract;$('#nearby-prompt').onclick=touchInteract;
  window.addEventListener('jianghu-offline-panel',e=>{offlinePanelOpen=!!e.detail?.open;stopInput();map.setPaused(offlinePanelOpen||modalOpen||!!dialogueSession);});
  let frame=0,lastMoveTime=0;function movement(now){now=Number.isFinite(now)?now:performance.now();const dt=lastMoveTime?Math.min(.04,Math.max(0,(now-lastMoveTime)/1000)):1/60;lastMoveTime=now;if(!modalOpen&&!offlinePanelOpen&&!document.hidden){let dx=touchMotion.x+(pressed.has('d')||pressed.has('arrowright')?1:0)-(pressed.has('a')||pressed.has('arrowleft')?1:0),dy=touchMotion.y+(pressed.has('s')||pressed.has('arrowdown')?1:0)-(pressed.has('w')||pressed.has('arrowup')?1:0);const distance=Math.hypot(dx,dy);if(distance&&!dialogueSession){const speed=Math.min(4,dt*180);map.move(dx/distance*speed,dy/distance*speed);}if(frame++%6===0){refreshMapLoading();const n=dialogueSession?null:contextTarget(),concealed=n?.type==='search';$('#nearby-prompt').hidden=!n||concealed;$('#touch-interact').disabled=!n;$('#touch-interact-label').textContent=n?((n.type==='battle'||n.type==='monster')?'迎战':n.type==='gather'?'采集':n.type==='door'?'进屋':n.type==='exit'?'离开':concealed?'查看':n.type==='drop'?'拾取':n.type==='exit-area'?'前往':n.type==='chest'?'开箱':n.type==='camp'?'查看':'互动'):'互动';if(n&&!concealed)$('#nearby-prompt span').textContent=n.name;}}requestAnimationFrame(movement);}movement();
  document.addEventListener('visibilitychange',()=>{if(document.hidden){stopInput();save();if(ambient?.state==='running')ambient.suspend();}else{lastMoveTime=0;syncViewport();if(ambient?.state==='suspended')ambient.resume().catch(()=>{});}});
  setInterval(()=>{if(!document.hidden){world.update({paused:modalOpen||offlinePanelOpen||!!dialogueSession});syncWorld();}},1000);
  setInterval(()=>{S.playSeconds+=15;save();},15000);window.addEventListener('pagehide',()=>save());syncViewport();syncWorld();renderScene();renderDialogue();save();
  window.JianghuGame={getState:()=>structuredClone(S),next,choose,runEvent,panel,sceneTo,interact,restore,map,enterRoom,leaveRoom,searchRoom,campAction,campGoal,openCaveChest,useItem,getStoryGate,getConversation:()=>dialogueSession?{...dialogueSession}:null,endConversation,tryStartStory,getWorld:()=>world,refreshWorld:syncWorld};
})();

;
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

;window.dispatchEvent(new Event("jianghu-boot-ready"));
