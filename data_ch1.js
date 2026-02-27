// =============================================
// 数学中1 第1章 正負の数 - 全単元データ
// =============================================
const CHAPTER1_UNITS = [
  // -----------------------------------------------
  {
    id: "1-1-1",
    chapter: "Chapter 1",
    title: "正の数・負の数とは",
    youtube: "",
    point: {
      title: "正の数・負の数",
      html: `
        <p>0より大きい数を<strong>正の数</strong>、0より小さい数を<strong>負の数</strong>といいます。</p>
        <p>正の数には <span class="math-highlight">+</span> 、負の数には <span class="math-highlight">−</span> の符号をつけます（正の数の + は省略することもある）。</p>
        <div class="rule-box">
          <div class="rule-title">まとめ</div>
          <ul>
            <li>正の数：<span class="math-highlight">+1, +2, +3, ...</span>（0より大きい）</li>
            <li>負の数：<span class="math-highlight">−1, −2, −3, ...</span>（0より小さい）</li>
            <li>0は正でも負でもない</li>
            <li>整数：…−3, −2, −1, 0, 1, 2, 3…</li>
          </ul>
        </div>`
    },
    warmup: [
      { id:"WU-1", expr:"+3 は正の数か負の数か？", answer:"正の数", choices:["正の数","負の数","0","わからない"], hint:"+がついているので正の数" },
      { id:"WU-2", expr:"−7 は正の数か負の数か？", answer:"負の数", choices:["正の数","負の数","0","整数でない"], hint:"−がついているので負の数" },
      { id:"WU-3", expr:"0 は正の数か負の数か？", answer:"どちらでもない", choices:["正の数","負の数","どちらでもない","整数でない"], hint:"0は正でも負でもない特別な数" },
      { id:"WU-4", expr:"−0.5 は何の数？", answer:"負の数", choices:["正の数","負の数","自然数","整数"], hint:"−がついているので負の数（小数でも同じ）" },
      { id:"WU-5", expr:"自然数はどれ？", answer:"1, 2, 3, …", choices:["1, 2, 3, …","0, 1, 2, …","−1, 0, 1, …","すべての整数"], hint:"自然数は正の整数（1以上の整数）のこと" },
    ],
    exercise: [
      { id:"EX-1", expr:"−3 より大きく +3 より小さい整数はいくつ？", answer:"5つ", choices:["4つ","5つ","6つ","7つ"], hint:"−2, −1, 0, 1, 2 の5つ" },
      { id:"EX-2", expr:"+5 の反対の数は？", answer:"−5", choices:["+5","0","−5","5"], hint:"反対の数は符号を変えた数" },
      { id:"EX-3", expr:"−12 の反対の数は？", answer:"+12", choices:["−12","0","+12","12より大"], hint:"−12 の反対は +12" },
      { id:"EX-4", expr:"整数でないものはどれ？", answer:"+0.3", choices:["+10","−4","0","+0.3"], hint:"整数は小数点のない数。+0.3 は小数なので整数でない" },
      { id:"EX-5", expr:"負の整数をすべて選べ（小さい順）：−3, 0, +2, −1, +5", answer:"−3, −1", choices:["−3, −1","−3, −1, 0","0, +2, +5","−3のみ"], hint:"0より小さい整数が負の整数。−3 と −1" },
      { id:"EX-6", expr:"次のうち正の数はいくつある？ −2, +3, 0, −0.5, +7, −1", answer:"2つ", choices:["1つ","2つ","3つ","4つ"], hint:"+3 と +7 の2つ" },
    ]
  },

  // -----------------------------------------------
  {
    id: "1-1-2",
    chapter: "Chapter 1",
    title: "数直線と数の大小",
    youtube: "",
    point: {
      title: "数直線と大小関係",
      html: `
        <p>数直線は左に行くほど小さく、右に行くほど大きくなります。</p>
        <div class="rule-box">
          <div class="rule-title">大小比較のポイント</div>
          <ul>
            <li>正の数は負の数より大きい</li>
            <li>負の数は、絶対値が大きいほど小さい</li>
            <li>正の数は、絶対値が大きいほど大きい</li>
            <li>0 は すべての負の数より大きく、すべての正の数より小さい</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>−3 と −1 では：数直線で −3 は左 → <span class="math-highlight">−3 &lt; −1</span></span></li>
          <li><span class="step-num">例</span><span>+2 と −5 では：正の数 &gt; 負の数 → <span class="math-highlight">+2 &gt; −5</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"−2 と −5 で大きいのは？", answer:"−2", choices:["−5","−2","同じ","0"], hint:"数直線で右にある方が大きい。−2 は −5 より右" },
      { id:"WU-2", expr:"+3 と −10 で大きいのは？", answer:"+3", choices:["+3","−10","同じ","どちらも正"], hint:"正の数は負の数より必ず大きい" },
      { id:"WU-3", expr:"数直線上で 0 はどこ？", answer:"正と負の境目", choices:["一番左","一番右","正と負の境目","真ん中より右"], hint:"0は正の数と負の数の境目（原点）" },
      { id:"WU-4", expr:"−1, 0, +1 を小さい順に並べると？", answer:"−1, 0, +1", choices:["0, −1, +1","−1, 0, +1","+1, 0, −1","0, +1, −1"], hint:"数直線の左から右の順が小さい順" },
      { id:"WU-5", expr:"+4 と +9 で小さいのは？", answer:"+4", choices:["+9","+4","同じ","どちらも負"], hint:"正の数は絶対値が小さいほど小さい" },
    ],
    exercise: [
      { id:"EX-1", expr:"−8, +2, −1, 0, +5 を小さい順に並べると最初は？", answer:"−8", choices:["−1","0","−8","+2"], hint:"負の数で絶対値が最大の −8 が最小" },
      { id:"EX-2", expr:"−8, +2, −1, 0, +5 を大きい順に並べると最初は？", answer:"+5", choices:["+2","0","−1","+5"], hint:"正の数で絶対値が最大の +5 が最大" },
      { id:"EX-3", expr:"□に入る符号は？ −4 □ −6", answer:">", choices:["<",">","=","≠"], hint:"数直線で −4 は −6 より右 → −4 > −6" },
      { id:"EX-4", expr:"□に入る符号は？ +3 □ −100", answer:">", choices:["<",">","=","≠"], hint:"正の数は負の数より常に大きい" },
      { id:"EX-5", expr:"絶対値が 3 以下の整数は何個？", answer:"7個", choices:["5個","6個","7個","8個"], hint:"−3,−2,−1,0,1,2,3 の7個" },
      { id:"EX-6", expr:"次のうち正しいものは？", answer:"−1 > −2", choices:["−5 > −3","−1 > −2","0 < −1","+2 < −3"], hint:"数直線で −1 は −2 より右なので −1 > −2" },
    ]
  },

  // -----------------------------------------------
  {
    id: "1-2-1",
    chapter: "Chapter 1",
    title: "絶対値",
    youtube: "",
    point: {
      title: "絶対値とは",
      html: `
        <p>数直線上で、ある数と <strong>0 との距離</strong>を<strong>絶対値</strong>といいます。</p>
        <p>絶対値は記号 <span class="math-highlight">| |</span> で表します。</p>
        <div class="rule-box">
          <div class="rule-title">絶対値のポイント</div>
          <ul>
            <li>正の数の絶対値 → 符号をとった値（例：|+5| = 5）</li>
            <li>負の数の絶対値 → 符号をとった値（例：|−3| = 3）</li>
            <li>0 の絶対値 → 0（例：|0| = 0）</li>
            <li>絶対値は必ず 0 以上になる</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>|−7| = <span class="math-highlight">7</span></span></li>
          <li><span class="step-num">例</span><span>|+4| = <span class="math-highlight">4</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"|+6| = ?", answer:"6", choices:["−6","0","6","12"], hint:"正の数の絶対値は符号をとった数" },
      { id:"WU-2", expr:"|−9| = ?", answer:"9", choices:["−9","0","9","18"], hint:"負の数の絶対値は符号をとった数" },
      { id:"WU-3", expr:"|0| = ?", answer:"0", choices:["−1","0","1","不定"], hint:"0は原点そのものなので絶対値は0" },
      { id:"WU-4", expr:"|−15| = ?", answer:"15", choices:["−15","0","15","30"], hint:"絶対値は距離なので必ず正（0以上）" },
      { id:"WU-5", expr:"|+0.5| = ?", answer:"0.5", choices:["−0.5","0","0.5","1"], hint:"小数も同じルール。符号をとる" },
    ],
    exercise: [
      { id:"EX-1", expr:"|−3| と |+3| を比べると？", answer:"等しい", choices:["|−3| が大","|+3| が大","等しい","比べられない"], hint:"どちらも 3 なので等しい" },
      { id:"EX-2", expr:"絶対値が 7 になる数は？", answer:"+7 と −7", choices:["7のみ","−7のみ","+7 と −7","0と7"], hint:"絶対値が同じ数は正と負の2つある" },
      { id:"EX-3", expr:"|−12| − |+8| = ?", answer:"4", choices:["−4","4","20","−20"], hint:"|−12|=12、|+8|=8 → 12−8=4" },
      { id:"EX-4", expr:"絶対値が最も大きいのは？ −8, +3, −2, +6", answer:"−8", choices:["+6","−2","+3","−8"], hint:"絶対値は距離なので −8 の絶対値 8 が最大" },
      { id:"EX-5", expr:"絶対値が 5 以下の整数はいくつ？", answer:"11個", choices:["9個","10個","11個","12個"], hint:"−5,−4,−3,−2,−1,0,1,2,3,4,5 の11個" },
      { id:"EX-6", expr:"|a| = 4 のとき a の値は？", answer:"4 または −4", choices:["4のみ","−4のみ","4 または −4","0"], hint:"絶対値が4になる数は +4 と −4 の2つ" },
    ]
  },

  // -----------------------------------------------
  {
    id: "1-3-1",
    chapter: "Chapter 1",
    title: "正負の数の加法",
    youtube: "",
    point: {
      title: "正負の数のたし算",
      html: `
        <div class="rule-box">
          <div class="rule-title">加法のルール</div>
          <ul>
            <li><strong>同符号</strong>のたし算：絶対値をたして、共通の符号をつける</li>
            <li><strong>異符号</strong>のたし算：絶対値の差をとって、絶対値が大きい方の符号をつける</li>
            <li>0をたしても変わらない</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例1</span><span>(+3) + (+5) = +(3+5) = <span class="math-highlight">+8</span></span></li>
          <li><span class="step-num">例2</span><span>(−4) + (−2) = −(4+2) = <span class="math-highlight">−6</span></span></li>
          <li><span class="step-num">例3</span><span>(+7) + (−3) = +(7−3) = <span class="math-highlight">+4</span></span></li>
          <li><span class="step-num">例4</span><span>(−8) + (+5) = −(8−5) = <span class="math-highlight">−3</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"(+4) + (+3) = ?", answer:"+7", choices:["+1","+7","−7","−1"], hint:"同符号：4+3=7、符号は+ → +7" },
      { id:"WU-2", expr:"(−5) + (−2) = ?", answer:"−7", choices:["−3","−7","+7","+3"], hint:"同符号：5+2=7、符号は− → −7" },
      { id:"WU-3", expr:"(+6) + (−4) = ?", answer:"+2", choices:["−2","+2","+10","−10"], hint:"異符号：6−4=2、大きい絶対値は+6 → +2" },
      { id:"WU-4", expr:"(−9) + (+3) = ?", answer:"−6", choices:["+6","−12","−6","+12"], hint:"異符号：9−3=6、大きい絶対値は−9 → −6" },
      { id:"WU-5", expr:"(+5) + (−5) = ?", answer:"0", choices:["−10","+10","0","−5"], hint:"絶対値が等しく符号が違うとき和は0" },
    ],
    exercise: [
      { id:"EX-1", expr:"(−3) + (−8) = ?", answer:"−11", choices:["−5","−11","+5","+11"], hint:"同符号：3+8=11、符号は− → −11" },
      { id:"EX-2", expr:"(+12) + (−7) = ?", answer:"+5", choices:["−5","+5","+19","−19"], hint:"異符号：12−7=5、大きい絶対値は+12 → +5" },
      { id:"EX-3", expr:"(−6) + (+10) = ?", answer:"+4", choices:["−4","+4","−16","+16"], hint:"異符号：10−6=4、大きい絶対値は+10 → +4" },
      { id:"EX-4", expr:"(+0.3) + (−0.8) = ?", answer:"−0.5", choices:["+0.5","−0.5","+1.1","−1.1"], hint:"異符号：0.8−0.3=0.5、大きい絶対値は−0.8 → −0.5" },
      { id:"EX-5", expr:"(−15) + (+15) = ?", answer:"0", choices:["−30","+30","−15","0"], hint:"絶対値が等しく符号が違う → 0" },
      { id:"EX-6", expr:"(−4) + (+1) + (−3) = ?", answer:"−6", choices:["−6","+6","−8","+8"], hint:"左から順に：(−4)+(+1)=−3、(−3)+(−3)=−6" },
    ]
  },

  // -----------------------------------------------
  {
    id: "1-3-2",
    chapter: "Chapter 1",
    title: "正負の数の減法",
    youtube: "",
    point: {
      title: "正負の数のひき算",
      html: `
        <p>正負の数のひき算は、<strong>ひく数の符号を変えてたし算に直す</strong>のがポイントです。</p>
        <div class="rule-box">
          <div class="rule-title">減法のルール</div>
          <ul>
            <li>a − b = a + (−b) に変換してから計算</li>
            <li>つまり「ひく」→「符号を変えてたす」</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例1</span><span>(+5) − (+3) = (+5) + (−3) = <span class="math-highlight">+2</span></span></li>
          <li><span class="step-num">例2</span><span>(+4) − (−6) = (+4) + (+6) = <span class="math-highlight">+10</span></span></li>
          <li><span class="step-num">例3</span><span>(−3) − (+5) = (−3) + (−5) = <span class="math-highlight">−8</span></span></li>
          <li><span class="step-num">例4</span><span>(−2) − (−7) = (−2) + (+7) = <span class="math-highlight">+5</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"(+8) − (+3) = ?", answer:"+5", choices:["+5","+11","−5","−11"], hint:"(+8)+(−3) = 8−3 = +5" },
      { id:"WU-2", expr:"(+2) − (+9) = ?", answer:"−7", choices:["+7","−7","+11","−11"], hint:"(+2)+(−9) = −(9−2) = −7" },
      { id:"WU-3", expr:"(+3) − (−4) = ?", answer:"+7", choices:["−1","+7","−7","+1"], hint:"(+3)+(+4) = 3+4 = +7" },
      { id:"WU-4", expr:"(−5) − (+2) = ?", answer:"−7", choices:["−3","−7","+3","+7"], hint:"(−5)+(−2) = −(5+2) = −7" },
      { id:"WU-5", expr:"(−1) − (−6) = ?", answer:"+5", choices:["−7","+7","−5","+5"], hint:"(−1)+(+6) = +(6−1) = +5" },
    ],
    exercise: [
      { id:"EX-1", expr:"(+10) − (+15) = ?", answer:"−5", choices:["−5","+5","−25","+25"], hint:"(+10)+(−15) = −(15−10) = −5" },
      { id:"EX-2", expr:"(−4) − (−4) = ?", answer:"0", choices:["−8","+8","0","−4"], hint:"(−4)+(+4) = 0" },
      { id:"EX-3", expr:"(−7) − (+3) = ?", answer:"−10", choices:["−4","−10","+4","+10"], hint:"(−7)+(−3) = −(7+3) = −10" },
      { id:"EX-4", expr:"0 − (−5) = ?", answer:"+5", choices:["−5","+5","0","−10"], hint:"0+(+5) = +5" },
      { id:"EX-5", expr:"(−12) − (−8) = ?", answer:"−4", choices:["−20","−4","+4","+20"], hint:"(−12)+(+8) = −(12−8) = −4" },
      { id:"EX-6", expr:"(+6) − (−3) − (+4) = ?", answer:"+5", choices:["−1","+5","−5","+1"], hint:"(+6)+(+3)+(−4) = 9−4 = +5" },
    ]
  },

  // -----------------------------------------------
  {
    id: "1-3-3",
    chapter: "Chapter 1",
    title: "加法・減法の混合計算",
    youtube: "",
    point: {
      title: "加法・減法まとめて計算",
      html: `
        <p>加法・減法が混ざった式は、<strong>すべてたし算に直してから計算</strong>します。</p>
        <div class="rule-box">
          <div class="rule-title">手順</div>
          <ul>
            <li>① ひき算をすべてたし算に直す（符号を変える）</li>
            <li>② 正の数どうし、負の数どうしをまとめる</li>
            <li>③ 最後に異符号のたし算をする</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>+3 − 5 + 2 − 4 = (+3) + (−5) + (+2) + (−4)</span></li>
          <li><span class="step-num">→</span><span>正：3+2=5、負：5+4=9 → 5−9 = <span class="math-highlight">−4</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"+5 − 3 + 2 = ?", answer:"+4", choices:["+4","−4","+6","0"], hint:"正：5+2=7、負：3 → 7−3=+4" },
      { id:"WU-2", expr:"−4 + 7 − 2 = ?", answer:"+1", choices:["−1","+1","+13","−13"], hint:"正：7、負：4+2=6 → 7−6=+1" },
      { id:"WU-3", expr:"+3 − 8 + 1 = ?", answer:"−4", choices:["+4","−4","+12","−12"], hint:"正：3+1=4、負：8 → 4−8=−4" },
      { id:"WU-4", expr:"−6 − 2 + 5 = ?", answer:"−3", choices:["+3","−3","−13","+13"], hint:"正：5、負：6+2=8 → 5−8=−3" },
      { id:"WU-5", expr:"+10 − 4 − 3 = ?", answer:"+3", choices:["+3","−3","+17","−17"], hint:"正：10、負：4+3=7 → 10−7=+3" },
    ],
    exercise: [
      { id:"EX-1", expr:"+8 − 5 + 3 − 9 = ?", answer:"−3", choices:["+3","−3","+25","−25"], hint:"正：8+3=11、負：5+9=14 → 11−14=−3" },
      { id:"EX-2", expr:"−7 + 4 − 1 + 6 = ?", answer:"+2", choices:["−2","+2","−18","+18"], hint:"正：4+6=10、負：7+1=8 → 10−8=+2" },
      { id:"EX-3", expr:"+15 − 20 + 3 = ?", answer:"−2", choices:["−2","+2","−38","+38"], hint:"正：15+3=18、負：20 → 18−20=−2" },
      { id:"EX-4", expr:"−3 − 3 − 3 = ?", answer:"−9", choices:["−9","+9","−3","+3"], hint:"すべて負：3+3+3=9 → −9" },
      { id:"EX-5", expr:"+100 − 98 − 6 + 3 = ?", answer:"−1", choices:["−1","+1","−207","+207"], hint:"正：100+3=103、負：98+6=104 → 103−104=−1" },
      { id:"EX-6", expr:"−0.5 + 1.2 − 0.3 = ?", answer:"+0.4", choices:["+0.4","−0.4","+2.0","−2.0"], hint:"正：1.2、負：0.5+0.3=0.8 → 1.2−0.8=+0.4" },
    ]
  },

  // -----------------------------------------------
  {
    id: "1-4-1",
    chapter: "Chapter 1",
    title: "正負の数の乗法",
    youtube: "",
    point: {
      title: "正負の数のかけ算",
      html: `
        <div class="rule-box">
          <div class="rule-title">かけ算の符号ルール</div>
          <ul>
            <li><span class="math-highlight">正 × 正 = 正</span>（例：(+3)×(+4) = +12）</li>
            <li><span class="math-highlight">負 × 負 = 正</span>（例：(−3)×(−4) = +12）</li>
            <li><span class="math-highlight">正 × 負 = 負</span>（例：(+3)×(−4) = −12）</li>
            <li><span class="math-highlight">負 × 正 = 負</span>（例：(−3)×(+4) = −12）</li>
          </ul>
        </div>
        <p style="margin-top:12px;">覚え方：<strong>同符号 → 正、異符号 → 負</strong></p>
        <ul class="steps">
          <li><span class="step-num">手順</span><span>① 符号を決める（同符号→+、異符号→−）</span></li>
          <li><span class="step-num">　</span><span>② 絶対値どうしをかける</span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"(+4) × (+3) = ?", answer:"+12", choices:["+12","−12","+7","−7"], hint:"同符号→正、4×3=12 → +12" },
      { id:"WU-2", expr:"(−2) × (−5) = ?", answer:"+10", choices:["−10","+10","−3","+3"], hint:"同符号（負×負）→正、2×5=10 → +10" },
      { id:"WU-3", expr:"(+6) × (−3) = ?", answer:"−18", choices:["−18","+18","−9","+9"], hint:"異符号→負、6×3=18 → −18" },
      { id:"WU-4", expr:"(−7) × (+2) = ?", answer:"−14", choices:["+14","−14","+5","−5"], hint:"異符号→負、7×2=14 → −14" },
      { id:"WU-5", expr:"(−1) × (−1) = ?", answer:"+1", choices:["−1","+1","−2","+2"], hint:"同符号（負×負）→正、1×1=1 → +1" },
    ],
    exercise: [
      { id:"EX-1", expr:"(−5) × (−4) = ?", answer:"+20", choices:["−20","+20","−9","+9"], hint:"同符号→正、5×4=20 → +20" },
      { id:"EX-2", expr:"(+8) × (−7) = ?", answer:"−56", choices:["−56","+56","−15","+15"], hint:"異符号→負、8×7=56 → −56" },
      { id:"EX-3", expr:"(−3) × (+9) = ?", answer:"−27", choices:["+27","−27","+6","−6"], hint:"異符号→負、3×9=27 → −27" },
      { id:"EX-4", expr:"(+0.2) × (−5) = ?", answer:"−1", choices:["−1","+1","−4.8","+4.8"], hint:"異符号→負、0.2×5=1 → −1" },
      { id:"EX-5", expr:"(−2) × (−3) × (−1) = ?", answer:"−6", choices:["−6","+6","−5","+5"], hint:"(−2)×(−3)=+6、(+6)×(−1)=−6" },
      { id:"EX-6", expr:"(−1) × (−1) × (−1) × (−1) = ?", answer:"+1", choices:["+1","−1","0","4"], hint:"負×負=正 を2回繰り返す → +1" },
    ]
  },

  // -----------------------------------------------
  {
    id: "1-4-2",
    chapter: "Chapter 1",
    title: "正負の数の除法",
    youtube: "",
    point: {
      title: "正負の数のわり算",
      html: `
        <div class="rule-box">
          <div class="rule-title">わり算の符号ルール（かけ算と同じ）</div>
          <ul>
            <li><span class="math-highlight">正 ÷ 正 = 正</span>（例：(+12)÷(+4) = +3）</li>
            <li><span class="math-highlight">負 ÷ 負 = 正</span>（例：(−12)÷(−4) = +3）</li>
            <li><span class="math-highlight">正 ÷ 負 = 負</span>（例：(+12)÷(−4) = −3）</li>
            <li><span class="math-highlight">負 ÷ 正 = 負</span>（例：(−12)÷(+4) = −3）</li>
          </ul>
        </div>
        <p style="margin-top:12px;">逆数を使う：<span class="math-highlight">a ÷ b = a × (1/b)</span></p>
        <ul class="steps">
          <li><span class="step-num">例</span><span>(−8) ÷ (+2) = −(8÷2) = <span class="math-highlight">−4</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"(+12) ÷ (+4) = ?", answer:"+3", choices:["+3","−3","+8","−8"], hint:"同符号→正、12÷4=3 → +3" },
      { id:"WU-2", expr:"(−15) ÷ (−3) = ?", answer:"+5", choices:["−5","+5","+12","−12"], hint:"同符号（負÷負）→正、15÷3=5 → +5" },
      { id:"WU-3", expr:"(+20) ÷ (−5) = ?", answer:"−4", choices:["+4","−4","+15","−15"], hint:"異符号→負、20÷5=4 → −4" },
      { id:"WU-4", expr:"(−18) ÷ (+6) = ?", answer:"−3", choices:["+3","−3","−12","+12"], hint:"異符号→負、18÷6=3 → −3" },
      { id:"WU-5", expr:"0 ÷ (−7) = ?", answer:"0", choices:["−7","0","7","不定"], hint:"0をどんな数でわっても0" },
    ],
    exercise: [
      { id:"EX-1", expr:"(−36) ÷ (−9) = ?", answer:"+4", choices:["+4","−4","+27","−27"], hint:"同符号→正、36÷9=4 → +4" },
      { id:"EX-2", expr:"(+45) ÷ (−5) = ?", answer:"−9", choices:["+9","−9","+40","−40"], hint:"異符号→負、45÷5=9 → −9" },
      { id:"EX-3", expr:"(−56) ÷ (+8) = ?", answer:"−7", choices:["+7","−7","−48","+48"], hint:"異符号→負、56÷8=7 → −7" },
      { id:"EX-4", expr:"(+3) ÷ (−1/2) = ?", answer:"−6", choices:["−6","+6","−1.5","+1.5"], hint:"÷(−1/2) = ×(−2)　→　3×(−2)=−6" },
      { id:"EX-5", expr:"(−24) ÷ (+6) ÷ (−2) = ?", answer:"+2", choices:["+2","−2","+8","−8"], hint:"(−24)÷(+6)=−4、(−4)÷(−2)=+2" },
      { id:"EX-6", expr:"(−2/3) ÷ (+4) = ?", answer:"−1/6", choices:["−1/6","+1/6","−8/3","+8/3"], hint:"÷4 = ×(1/4)　→　(−2/3)×(1/4) = −2/12 = −1/6" },
    ]
  },

  // -----------------------------------------------
  {
    id: "1-4-3",
    chapter: "Chapter 1",
    title: "累乗の計算",
    youtube: "",
    point: {
      title: "累乗とは",
      html: `
        <p>同じ数を何回かかけることを<strong>累乗</strong>といい、右上の小さい数（指数）でかける回数を表します。</p>
        <div class="rule-box">
          <div class="rule-title">符号のポイント</div>
          <ul>
            <li>負の数の<strong>偶数乗 → 正</strong>（例：(−2)² = +4）</li>
            <li>負の数の<strong>奇数乗 → 負</strong>（例：(−2)³ = −8）</li>
            <li>−2² と (−2)² は違う！</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例1</span><span>(−3)² = (−3)×(−3) = <span class="math-highlight">+9</span></span></li>
          <li><span class="step-num">例2</span><span>−3² = −(3×3) = <span class="math-highlight">−9</span></span></li>
          <li><span class="step-num">例3</span><span>(−2)³ = (−2)×(−2)×(−2) = <span class="math-highlight">−8</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"(+3)² = ?", answer:"9", choices:["6","9","−9","−6"], hint:"3×3=9（正×正=正）" },
      { id:"WU-2", expr:"(−2)² = ?", answer:"4", choices:["−4","4","−2","2"], hint:"(−2)×(−2)=+4（負×負=正）" },
      { id:"WU-3", expr:"(−2)³ = ?", answer:"−8", choices:["8","−8","6","−6"], hint:"(−2)×(−2)=+4、(+4)×(−2)=−8" },
      { id:"WU-4", expr:"−2² = ?", answer:"−4", choices:["4","−4","−2","2"], hint:"−2² = −(2²) = −(4) = −4（かっこなし！）" },
      { id:"WU-5", expr:"(−1)¹⁰ = ?", answer:"1", choices:["−1","1","10","−10"], hint:"偶数乗なので正 → +1" },
    ],
    exercise: [
      { id:"EX-1", expr:"(−4)² = ?", answer:"16", choices:["−16","16","−8","8"], hint:"(−4)×(−4)=+16" },
      { id:"EX-2", expr:"(−3)³ = ?", answer:"−27", choices:["27","−27","−9","9"], hint:"(−3)²=9、9×(−3)=−27" },
      { id:"EX-3", expr:"−5² = ?", answer:"−25", choices:["25","−25","−10","10"], hint:"−5² = −(5²) = −25" },
      { id:"EX-4", expr:"(−1)⁹⁹ = ?", answer:"−1", choices:["1","−1","99","−99"], hint:"奇数乗なので負 → −1" },
      { id:"EX-5", expr:"2³ + (−3)² = ?", answer:"17", choices:["17","−1","1","−17"], hint:"2³=8、(−3)²=9 → 8+9=17" },
      { id:"EX-6", expr:"(−2)⁴ − (−2)³ = ?", answer:"24", choices:["16","24","0","−16"], hint:"(−2)⁴=16、(−2)³=−8 → 16−(−8)=16+8=24" },
    ]
  },

  // -----------------------------------------------
  {
    id: "1-5-1",
    chapter: "Chapter 1",
    title: "四則の混合計算",
    youtube: "",
    point: {
      title: "四則混合計算の順序",
      html: `
        <div class="rule-box">
          <div class="rule-title">計算の優先順位</div>
          <ul>
            <li>① <strong>かっこの中</strong>を先に計算</li>
            <li>② <strong>累乗</strong>を計算</li>
            <li>③ <strong>×（かけ算）÷（わり算）</strong>を左から計算</li>
            <li>④ <strong>+（たし算）−（ひき算）</strong>を左から計算</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>3 + 2 × (−4) = 3 + (−8) = <span class="math-highlight">−5</span></span></li>
          <li><span class="step-num">例</span><span>(−2)² ÷ 4 − 3 = 4 ÷ 4 − 3 = 1 − 3 = <span class="math-highlight">−2</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"2 + 3 × 4 = ?", answer:"14", choices:["20","14","−10","10"], hint:"かけ算が先：3×4=12、2+12=14" },
      { id:"WU-2", expr:"(2 + 3) × 4 = ?", answer:"20", choices:["20","14","−20","−14"], hint:"かっこが先：2+3=5、5×4=20" },
      { id:"WU-3", expr:"10 − 2 × 3 = ?", answer:"4", choices:["24","4","−24","−4"], hint:"かけ算が先：2×3=6、10−6=4" },
      { id:"WU-4", expr:"(−3)² − 5 = ?", answer:"4", choices:["4","−4","14","−14"], hint:"累乗が先：(−3)²=9、9−5=4" },
      { id:"WU-5", expr:"8 ÷ (−2) + 3 = ?", answer:"−1", choices:["+1","−1","−13","+13"], hint:"わり算が先：8÷(−2)=−4、−4+3=−1" },
    ],
    exercise: [
      { id:"EX-1", expr:"−4 × 3 + 10 = ?", answer:"−2", choices:["−2","+2","−26","+26"], hint:"かけ算が先：−4×3=−12、−12+10=−2" },
      { id:"EX-2", expr:"(−2)³ ÷ 4 = ?", answer:"−2", choices:["−2","+2","−16","+16"], hint:"累乗が先：(−2)³=−8、−8÷4=−2" },
      { id:"EX-3", expr:"3 × (−4 + 7) = ?", answer:"9", choices:["9","−9","−3","3"], hint:"かっこが先：−4+7=3、3×3=9" },
      { id:"EX-4", expr:"−6 + 8 ÷ (−2) = ?", answer:"−10", choices:["−10","+10","−1","+1"], hint:"わり算が先：8÷(−2)=−4、−6+(−4)=−10" },
      { id:"EX-5", expr:"(3 − 5)² × (−2) = ?", answer:"−8", choices:["−8","+8","−4","+4"], hint:"かっこ→累乗→かけ算：(−2)²=4、4×(−2)=−8" },
      { id:"EX-6", expr:"12 ÷ (−3) × 2 − 1 = ?", answer:"−9", choices:["−9","+9","−7","+7"], hint:"左から：12÷(−3)=−4、(−4)×2=−8、−8−1=−9" },
    ]
  },

  // -----------------------------------------------
  {
    id: "1-5-2",
    chapter: "Chapter 1",
    title: "分配法則",
    youtube: "",
    point: {
      title: "分配法則",
      html: `
        <p>分配法則とは、かっこの外の数をかっこの中の各項にかけることができるルールです。</p>
        <div class="rule-box">
          <div class="rule-title">分配法則</div>
          <ul>
            <li><span class="math-highlight">a × (b + c) = a×b + a×c</span></li>
            <li><span class="math-highlight">(a + b) × c = a×c + b×c</span></li>
            <li>逆向きに使って計算を楽にすることもできる</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例1</span><span>3 × (4 + 5) = 3×4 + 3×5 = 12 + 15 = <span class="math-highlight">27</span></span></li>
          <li><span class="step-num">例2</span><span>−2 × (3 − 7) = (−2)×3 + (−2)×(−7) = −6 + 14 = <span class="math-highlight">8</span></span></li>
          <li><span class="step-num">例3</span><span>99 × 6 = (100−1) × 6 = 600 − 6 = <span class="math-highlight">594</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"2 × (3 + 4) = ?", answer:"14", choices:["10","14","24","−14"], hint:"2×3 + 2×4 = 6+8 = 14" },
      { id:"WU-2", expr:"−3 × (2 + 5) = ?", answer:"−21", choices:["−21","21","−9","9"], hint:"(−3)×2 + (−3)×5 = −6+(−15) = −21" },
      { id:"WU-3", expr:"4 × (5 − 2) = ?", answer:"12", choices:["18","12","−12","−18"], hint:"4×5 + 4×(−2) = 20+(−8) = 12" },
      { id:"WU-4", expr:"−5 × (−3 + 1) = ?", answer:"10", choices:["−10","10","−20","20"], hint:"(−5)×(−3) + (−5)×1 = 15+(−5) = 10" },
      { id:"WU-5", expr:"(6 + 4) × 3 = ?", answer:"30", choices:["22","30","−30","−22"], hint:"6×3 + 4×3 = 18+12 = 30" },
    ],
    exercise: [
      { id:"EX-1", expr:"−2 × (4 − 7) = ?", answer:"6", choices:["−6","6","−22","22"], hint:"(−2)×4 + (−2)×(−7) = −8+14 = 6" },
      { id:"EX-2", expr:"3 × (−5 + 2) = ?", answer:"−9", choices:["9","−9","−19","19"], hint:"3×(−5) + 3×2 = −15+6 = −9" },
      { id:"EX-3", expr:"101 × 4 を分配法則で計算すると？", answer:"404", choices:["400","404","408","396"], hint:"(100+1)×4 = 400+4 = 404" },
      { id:"EX-4", expr:"−4 × (3 − 5 + 2) = ?", answer:"0", choices:["−40","40","0","−4"], hint:"(−4)×3+(−4)×(−5)+(−4)×2 = −12+20+(−8) = 0" },
      { id:"EX-5", expr:"12×7 + 12×3 = ?（まとめて計算）", answer:"120", choices:["120","−120","84","36"], hint:"12×(7+3) = 12×10 = 120" },
      { id:"EX-6", expr:"−6 × (a + 3) を展開すると？", answer:"−6a − 18", choices:["−6a+18","−6a−18","6a+18","6a−18"], hint:"(−6)×a + (−6)×3 = −6a + (−18) = −6a − 18" },
    ]
  },

  // -----------------------------------------------
  {
    id: "1-5-3",
    chapter: "Chapter 1",
    title: "素因数分解",
    youtube: "",
    point: {
      title: "素因数分解",
      html: `
        <p><strong>素数</strong>：1 とその数自身しか約数を持たない自然数（2, 3, 5, 7, 11, …）</p>
        <p><strong>素因数分解</strong>：自然数を素数だけのかけ算で表すこと</p>
        <div class="rule-box">
          <div class="rule-title">手順</div>
          <ul>
            <li>① 小さい素数（2, 3, 5, 7, …）から順に割っていく</li>
            <li>② 割れなくなったら次の素数へ</li>
            <li>③ 商が素数になったら終わり</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>36 = 2 × 2 × 3 × 3 = <span class="math-highlight">2² × 3²</span></span></li>
          <li><span class="step-num">例</span><span>60 = 2² × 3 × 5</span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"12 を素因数分解すると？", answer:"2² × 3", choices:["2 × 6","2² × 3","3 × 4","2 × 3²"], hint:"12 = 2×6 = 2×2×3 = 2²×3" },
      { id:"WU-2", expr:"18 を素因数分解すると？", answer:"2 × 3²", choices:["2 × 9","2 × 3²","3 × 6","2² × 3"], hint:"18 = 2×9 = 2×3×3 = 2×3²" },
      { id:"WU-3", expr:"25 を素因数分解すると？", answer:"5²", choices:["5 × 5（=5²）と書くのは？","5²","5 × 5","25は素数","2 × 13"], hint:"25 = 5×5 = 5²" },
      { id:"WU-4", expr:"2 は素数か？", answer:"素数", choices:["素数","素数でない","1も素数","わからない"], hint:"2は1と2しか約数がないので素数（最小の素数）" },
      { id:"WU-5", expr:"1 は素数か？", answer:"素数でない", choices:["素数","素数でない","どちらとも言える","整数でない"], hint:"1は素数の定義に含まれない（特別な数）" },
    ],
    exercise: [
      { id:"EX-1", expr:"24 を素因数分解すると？", answer:"2³ × 3", choices:["2³ × 3","2² × 6","2 × 3²","4 × 6"], hint:"24 = 2×12 = 2×2×6 = 2×2×2×3 = 2³×3" },
      { id:"EX-2", expr:"45 を素因数分解すると？", answer:"3² × 5", choices:["3 × 15","3² × 5","5 × 9","3³ × 5"], hint:"45 = 5×9 = 5×3×3 = 3²×5" },
      { id:"EX-3", expr:"100 を素因数分解すると？", answer:"2² × 5²", choices:["2² × 5²","4 × 25","10²","2 × 5²"], hint:"100 = 4×25 = 2²×5²" },
      { id:"EX-4", expr:"素数はどれ？ 4, 9, 11, 15", answer:"11", choices:["4","9","11","15"], hint:"4=2²、9=3²、15=3×5、11は1と11しか約数がない" },
      { id:"EX-5", expr:"2³ × 3 = ?", answer:"24", choices:["18","24","32","48"], hint:"2³=8、8×3=24" },
      { id:"EX-6", expr:"72 を素因数分解すると？", answer:"2³ × 3²", choices:["2² × 3²","2³ × 3","2³ × 3²","2² × 18"], hint:"72=8×9=2³×3²" },
    ]
  },

  // -----------------------------------------------
  {
    id: "1-5-4",
    chapter: "Chapter 1",
    title: "正負の数の利用（文章題）",
    youtube: "",
    point: {
      title: "正負の数を使った問題",
      html: `
        <p>正負の数を使って、基準を決めてから差を表す問題です。</p>
        <div class="rule-box">
          <div class="rule-title">解き方の手順</div>
          <ul>
            <li>① 基準となる値を決める</li>
            <li>② 基準より多い → 正、少ない → 負で表す</li>
            <li>③ 式を立てて計算する</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>平均気温10℃を基準に、+3, −2, +5, −4 の日の平均を求める</span></li>
          <li><span class="step-num">→</span><span>(+3) + (−2) + (+5) + (−4) = +2 より 10 + 2 ÷ 4 はそれぞれ計算</span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"基準より +5 と −3 の差は？", answer:"8", choices:["2","8","−8","−2"], hint:"+5 − (−3) = 5+3 = 8" },
      { id:"WU-2", expr:"0℃を基準に −5℃は基準より何℃低い？", answer:"5℃低い", choices:["5℃高い","5℃低い","0℃","−5℃高い"], hint:"−5は基準（0）より5低い" },
      { id:"WU-3", expr:"基準50点で +10, −5, +20 の合計は基準より？", answer:"+25点", choices:["+25点","−25点","+35点","75点"], hint:"10+(−5)+20 = +25" },
      { id:"WU-4", expr:"海抜0mを基準に、山頂+3000m、海底−200m の差は？", answer:"3200m", choices:["2800m","3200m","3000m","200m"], hint:"3000 − (−200) = 3000 + 200 = 3200" },
      { id:"WU-5", expr:"基準より −4, −4, −4, −4 の平均は？", answer:"−4", choices:["−1","−4","−16","0"], hint:"合計(−16)÷4 = −4" },
    ],
    exercise: [
      { id:"EX-1", expr:"A君の体重は平均より+3kg、B君は−5kg。2人の差は何kg？", answer:"8kg", choices:["2kg","8kg","−2kg","−8kg"], hint:"+3 − (−5) = 3+5 = 8kg" },
      { id:"EX-2", expr:"5日間の気温差：+2, −3, +4, −1, +3。合計は基準より？", answer:"+5", choices:["+5","−5","+13","−13"], hint:"2+(−3)+4+(−1)+3 = 9−4 = +5" },
      { id:"EX-3", expr:"標高0mを基準に A地点+150m、B地点−80m。A→Bは何m下がる？", answer:"230m", choices:["70m","230m","−230m","150m"], hint:"150 − (−80) = 150+80 = 230m下がる" },
      { id:"EX-4", expr:"6人の得点（基準50点）: +5,−3,+8,−6,0,+2。平均は基準より？", answer:"+1点", choices:["+1点","−1点","+6点","−6点"], hint:"合計5+(−3)+8+(−6)+0+2=+6、6÷6=+1" },
      { id:"EX-5", expr:"預金残高1000円から+300, −500, +200, −400 の変動後の残高は？", answer:"600円", choices:["600円","400円","1000円","2400円"], hint:"1000 + 300+(−500)+200+(−400) = 1000+(−400) = 600" },
      { id:"EX-6", expr:"A市の月ごとの平均気温（基準15℃）: −8,−6,−2,+4,+10,+14。最高と最低の差は？", answer:"22℃", choices:["14℃","22℃","8℃","20℃"], hint:"+14 − (−8) = 14+8 = 22℃" },
    ]
  },
];
