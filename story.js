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
