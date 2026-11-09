/* Jianghu iPhone release v7. Readable modules are retained in the repository. */
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
  function renderExploration(){const gate=explorationGoal();$('#dialogue').classList.add('exploring');$('#dialogue').classList.remove('has-choices');$('.adventure').classList.remove('choosing');$('#dialogue-close').hidden=true;$('#speaker-name').textContent=S.completed?'江湖未完':'此刻 · 探索';$('#speaker-badge').textContent='江湖行旅';$('#speaker-portrait').src='assets/portrait-a.png';$('#speaker-portrait').style.opacity='.85';$('#speaker-portrait').style.objectPosition='center bottom';$('#dialogue-text').textContent=S.completed?'路还长。再探一条岔路，或找B聊聊这一路的故事。':gate?.label||'沿路走走，看看会遇见什么人。';$('#choices').innerHTML='';$('#next-dialogue').hidden=true;$('#dialogue-hint').textContent='靠近人物后交谈 · 草药可采集 · 战利品要拾取';renderScene();renderSidebar();}
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
    const missing=keys.filter(key=>states[key]!=='ready'),failed=missing.some(key=>states[key]==='unavailable'),slow=missing.length>0&&Date.now()-mapLoadWatch.started>=12000;
    loading.hidden=!missing.length||mapLoadWatch.bypassed;loading.dataset.state=failed?'failed':slow?'slow':'loading';
    $('#world-loading-title').textContent=failed?'场景暂时未能载入':slow?'山路有些慢，仍在载入':'正在走进'+scenes[S.scene].name;
    $('#world-loading-text').textContent=failed?'可以重试，或先进入地图。旅程已保存在此设备。':slow?'可以重试，或先沿路探索；画面会在载入后补齐。':'正在载入当前场景与人物……';
    $('#world-retry').hidden=!(failed||slow);
    let enter=$('#world-continue');if(!enter){enter=document.createElement('button');enter.id='world-continue';enter.type='button';enter.textContent='先进入地图';loading.append(enter);}
    enter.hidden=!(failed||slow);enter.onclick=()=>{mapLoadWatch.bypassed=true;loading.hidden=true;if(failed)map.loadAssets?.();toast('可以先沿路探索，画面载入后会自动补齐。');};
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
    let t=step();$('#dialogue').classList.remove('exploring');$('#dialogue-close').hidden=false;$('#speaker-name').textContent=t.speaker;$('#speaker-portrait').src='assets/portrait-'+(t.speaker==='B'||t.speaker==='蒙面人'?'b':'a')+'.png';$('#speaker-portrait').style.objectPosition='center bottom';$('#speaker-portrait').style.opacity=t.speaker==='旁白'?'.62':'1';$('#speaker-portrait').alt=t.speaker==='B'?'B的立绘':'A的立绘';$('#speaker-badge').textContent=t.speaker==='B'?'赊账公子':t.speaker==='旁白'?'江湖行记':'市井游侠';
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
    openModal('<h2 id="modal-title">抱紧这位「朋友」！</h2><p class="modal-subtitle">用 ← → 或 A / D 换道，躲开木箱。追逐持续12秒，碰撞只会添些笑话。</p><div class="chase-arena"><div class="chase-lanes"><i></i><i></i><i></i></div><div class="chase-runner" id="chase-runner"></div></div><div class="chase-timer" id="chase-timer"></div><div class="chase-buttons"><button id="chase-left" aria-label="向左换道">←</button><button id="chase-right" aria-label="向右换道">→</button></div><p class="modal-subtitle" id="chase-log" style="margin-top:15px">王大娘：「前头那个抱鸡的，给我站住！」</p>',{locked:true});
    let lane=1,ticks=0,hits=0,obstacles=[];const runner=$('#chase-runner');function move(d){lane=Math.max(0,Math.min(2,lane+d));runner.style.left=(16.67+33.33*lane)+'%';}move(0);const key=e=>{if(['ArrowLeft','a','A'].includes(e.key)){e.preventDefault();move(-1);}if(['ArrowRight','d','D'].includes(e.key)){e.preventDefault();move(1);}};document.addEventListener('keydown',key);$('#chase-left').onclick=()=>move(-1);$('#chase-right').onclick=()=>move(1);
    let timer=setInterval(()=>{ticks++;$('#chase-timer').style.width=Math.max(0,100-ticks/120*100)+'%';if(ticks%13===0){let el=document.createElement('div');el.className='chase-obstacle';let ol=Math.floor(Math.random()*3);el.style.left=(16.67+33.33*ol)+'%';el.textContent=ticks%26?'木箱':'菜筐';$('.chase-arena').append(el);obstacles.push({el,lane:ol,y:-45,hit:false});}for(let o of obstacles){o.y+=6;o.el.style.top=o.y+'px';if(o.y>185&&o.y<250&&!o.hit&&o.lane===lane){o.hit=true;hits++;$('#chase-log').textContent=hits%2?'A：「这镇上的路怎么修得跟迷宫似的！」':'A：「鸡兄，你倒是帮忙指个路啊！」';}if(o.y>310)o.el.remove();}obstacles=obstacles.filter(o=>o.y<=310);if(ticks>=120){S.flags.CHASE_HITS=hits;clearInterval(timer);document.removeEventListener('keydown',key);modalCleanup=null;closeModal(true);toast('一头钻进马车 · 碰撞'+hits+'次，鸡安然无恙');done();}},100);
    modalCleanup=()=>{clearInterval(timer);document.removeEventListener('keydown',key);};
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
  function character(id){const c=D.characters.find(c=>c.id===id),st=heroStats(id),skills=P.skills(S.learnedSkills,id);openModal('<h2 id="modal-title">'+(id==='A'?'A · 市井游侠':'B · 赊账公子')+'</h2><p class="modal-subtitle">二十五岁 · '+st.level+'级 · 经验 '+S.xp+(P.nextXP(S.xp)?' / '+P.nextXP(S.xp):'')+'<br>气血上限 '+st.maxHP+' · 内力上限 '+st.maxMP+' · 招式加成 +'+st.attackBonus+'</p><div class="character-details"><img class="upright-portrait" src="assets/portrait-'+id.toLowerCase()+'.png" alt="'+id+'的立绘"><div><h3>'+c.role+'</h3><p>'+(id==='B'&&S.act<4?'衣着华贵，折扇不离手。这个人的来路，眼下还没有人知道。':c.description)+'</p><h3>已会武学</h3>'+skills.map(v=>'<p><strong>'+v.name+'</strong> · '+v.cost+'内力<br>'+v.description+'</p>').join('')+'</div></div>');}
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
