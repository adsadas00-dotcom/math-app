// =============================================
// 数学中1 第4章 比例と反比例 - 全単元データ
// =============================================
const CHAPTER4_UNITS = [

  {
    id: "4-1-1",
    chapter: "Chapter 4",
    title: "関数とは・変域",
    youtube: "",
    point: {
      title: "関数と変域",
      html: `
        <p>x の値が決まると y の値がただ1つ決まるとき、<strong>y は x の関数</strong>といいます。</p>
        <div class="rule-box">
          <div class="rule-title">変域とは</div>
          <ul>
            <li>変数がとることのできる値の範囲を<strong>変域</strong>という</li>
            <li><span class="math-highlight">1 ≤ x ≤ 5</span>：xは1以上5以下</li>
            <li><span class="math-highlight">−2 < x < 3</span>：xは−2より大きく3より小さい</li>
            <li>≤（以上・以下）は端の値を含む、＜（より大・より小）は含まない</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>1個x円のリンゴをy個買ったときの代金：y = 100x（yはxの関数）</span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"y = 2x で x = 3 のとき y は？", answer:"y = 6", choices:["y=6","y=5","y=8","y=2/3"], hint:"y=2×3=6" },
      { id:"WU-2", expr:"y = x + 4 で x = −1 のとき y は？", answer:"y = 3", choices:["y=3","y=5","y=−3","y=−5"], hint:"y=(−1)+4=3" },
      { id:"WU-3", expr:"1 ≤ x ≤ 5 の変域で含まれない整数は？", answer:"6", choices:["1","3","5","6"], hint:"1以上5以下なので6は含まれない" },
      { id:"WU-4", expr:"−2 < x < 3 の変域に含まれる整数はいくつ？", answer:"4個", choices:["4個","5個","6個","3個"], hint:"−1, 0, 1, 2 の4個（端の値は含まない）" },
      { id:"WU-5", expr:"次のうち y が x の関数でないものは？", answer:"xの絶対値未満の整数y", choices:["y=3x","y=x+2","xの絶対値未満の整数y","y=x²"], hint:"xが決まってもyが1つに決まらないものは関数でない" },
    ],
    exercise: [
      { id:"EX-1", expr:"y = −3x で x = 4 のとき y は？", answer:"y = −12", choices:["y=−12","y=12","y=−7","y=7"], hint:"y=−3×4=−12" },
      { id:"EX-2", expr:"y = 2x + 1 で x = −3 のとき y は？", answer:"y = −5", choices:["y=−5","y=5","y=−7","y=7"], hint:"y=2×(−3)+1=−6+1=−5" },
      { id:"EX-3", expr:"0 ≤ x ≤ 4 のとき y = 3x の変域は？", answer:"0 ≤ y ≤ 12", choices:["0≤y≤12","0<y<12","0≤y≤4","3≤y≤12"], hint:"x=0でy=0、x=4でy=12 → 0≤y≤12" },
      { id:"EX-4", expr:"−2 ≤ x ≤ 3 のとき y = x + 1 の変域は？", answer:"−1 ≤ y ≤ 4", choices:["−1≤y≤4","−2≤y≤3","−3≤y≤4","0≤y≤4"], hint:"x=−2でy=−1、x=3でy=4 → −1≤y≤4" },
      { id:"EX-5", expr:"y = x/2 で x の変域が 2 ≤ x ≤ 8 のとき y の変域は？", answer:"1 ≤ y ≤ 4", choices:["1≤y≤4","2≤y≤8","1≤y≤8","0≤y≤4"], hint:"x=2でy=1、x=8でy=4 → 1≤y≤4" },
      { id:"EX-6", expr:"y = −2x + 3 で x の変域が −1 ≤ x ≤ 2 のとき y の変域は？", answer:"−1 ≤ y ≤ 5", choices:["−1≤y≤5","1≤y≤5","−1≤y≤3","−4≤y≤5"], hint:"x=−1でy=5、x=2でy=−1 → −1≤y≤5" },
    ]
  },

  {
    id: "4-1-2",
    chapter: "Chapter 4",
    title: "比例の式（y=ax）",
    youtube: "",
    point: {
      title: "比例とは",
      html: `
        <p>y = ax（a ≠ 0）の形で表される関係を<strong>比例</strong>といいます。a を<strong>比例定数</strong>といいます。</p>
        <div class="rule-box">
          <div class="rule-title">比例の性質</div>
          <ul>
            <li>x が2倍・3倍になると y も2倍・3倍になる</li>
            <li>x = 0 のとき y = 0（原点を通る）</li>
            <li>y/x = a（一定）</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>y = 3x：x=2のときy=6、x=4のときy=12（xが2倍→yも2倍）</span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"y = 4x で x = 3 のとき y は？", answer:"12", choices:["12","7","−12","4/3"], hint:"y=4×3=12" },
      { id:"WU-2", expr:"y = −2x で x = 5 のとき y は？", answer:"−10", choices:["−10","10","3","−3"], hint:"y=−2×5=−10" },
      { id:"WU-3", expr:"y が x に比例し x = 2 のとき y = 8。比例定数は？", answer:"4", choices:["4","6","16","2"], hint:"y=ax → 8=a×2 → a=4" },
      { id:"WU-4", expr:"y = 5x で x が2倍になると y は？", answer:"2倍になる", choices:["2倍になる","変わらない","4倍になる","1/2になる"], hint:"比例はxが2倍→yも2倍" },
      { id:"WU-5", expr:"y = ax で x = 6, y = 18 のとき a は？", answer:"3", choices:["3","12","108","1/3"], hint:"18=a×6 → a=3" },
    ],
    exercise: [
      { id:"EX-1", expr:"y が x に比例し x = 4 のとき y = −12。y を x の式で表すと？", answer:"y = −3x", choices:["y=−3x","y=3x","y=−8x","y=−48x"], hint:"−12=a×4 → a=−3 → y=−3x" },
      { id:"EX-2", expr:"y = −3x で x = −4 のとき y は？", answer:"12", choices:["12","−12","7","−7"], hint:"y=−3×(−4)=12" },
      { id:"EX-3", expr:"y = 6x で y = 42 のとき x は？", answer:"7", choices:["7","36","252","1/7"], hint:"42=6x → x=7" },
      { id:"EX-4", expr:"y が x に比例し x = −3 のとき y = 9。x = 5 のとき y は？", answer:"−15", choices:["−15","15","−45","3"], hint:"a=9÷(−3)=−3 → y=−3x → y=−3×5=−15" },
      { id:"EX-5", expr:"y = 2x で x の変域が −3 ≤ x ≤ 4 のとき y の最大値は？", answer:"8", choices:["8","−6","6","−8"], hint:"x=4のとき y=8 が最大" },
      { id:"EX-6", expr:"y = −5x で x = −2 のとき y は？", answer:"10", choices:["10","−10","3","−3"], hint:"y=−5×(−2)=10" },
    ]
  },

  {
    id: "4-1-3",
    chapter: "Chapter 4",
    title: "比例定数を求める",
    youtube: "",
    point: {
      title: "比例定数の求め方",
      html: `
        <p>y = ax の a（比例定数）は、x と y の値がわかれば求められます。</p>
        <div class="rule-box">
          <div class="rule-title">手順</div>
          <ul>
            <li>① y = ax に x, y の値を代入する</li>
            <li>② a を求める（a = y ÷ x）</li>
            <li>③ 式を完成させる</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>x = 3, y = −6 のとき：−6 = a×3 → a = −2 → y = −2x</span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"x = 2, y = 10 のとき比例定数 a は？", answer:"5", choices:["5","8","20","1/5"], hint:"a=y÷x=10÷2=5" },
      { id:"WU-2", expr:"x = 4, y = −8 のとき a は？", answer:"−2", choices:["−2","2","−32","−4"], hint:"a=−8÷4=−2" },
      { id:"WU-3", expr:"x = −3, y = 9 のとき a は？", answer:"−3", choices:["−3","3","−27","6"], hint:"a=9÷(−3)=−3" },
      { id:"WU-4", expr:"x = 5, y = 5 のとき a は？", answer:"1", choices:["1","0","25","10"], hint:"a=5÷5=1" },
      { id:"WU-5", expr:"x = −6, y = −18 のとき a は？", answer:"3", choices:["3","−3","12","108"], hint:"a=(−18)÷(−6)=3" },
    ],
    exercise: [
      { id:"EX-1", expr:"x = 3, y = 15 のとき y を x の式で表すと？", answer:"y = 5x", choices:["y=5x","y=3x","y=15x","y=45x"], hint:"a=15÷3=5 → y=5x" },
      { id:"EX-2", expr:"x = −4, y = 12 のとき y を x の式で表すと？", answer:"y = −3x", choices:["y=−3x","y=3x","y=−48x","y=8x"], hint:"a=12÷(−4)=−3 → y=−3x" },
      { id:"EX-3", expr:"y = ax で x = 6 のとき y = −24。x = −2 のとき y は？", answer:"8", choices:["8","−8","48","−48"], hint:"a=−24÷6=−4 → y=−4x → y=−4×(−2)=8" },
      { id:"EX-4", expr:"y = ax で x = −5 のとき y = 20。x = 3 のとき y は？", answer:"−12", choices:["−12","12","60","−60"], hint:"a=20÷(−5)=−4 → y=−4x → y=−4×3=−12" },
      { id:"EX-5", expr:"y/x = −7 のとき比例定数は？", answer:"−7", choices:["−7","7","1/7","−1/7"], hint:"y/x=a → a=−7" },
      { id:"EX-6", expr:"x = 8, y = −4 のとき y を x の式で表すと？", answer:"y = −x/2", choices:["y=−x/2","y=x/2","y=−2x","y=2x"], hint:"a=−4÷8=−1/2 → y=−x/2" },
    ]
  },

  {
    id: "4-2-1",
    chapter: "Chapter 4",
    title: "座標と点のプロット",
    youtube: "",
    point: {
      title: "座標のしくみ",
      html: `
        <p>平面上の点の位置を2つの数の組 (x, y) で表したものを<strong>座標</strong>といいます。</p>
        <div class="rule-box">
          <div class="rule-title">座標のポイント</div>
          <ul>
            <li>横軸：<span class="math-highlight">x 軸</span>（右が正、左が負）</li>
            <li>縦軸：<span class="math-highlight">y 軸</span>（上が正、下が負）</li>
            <li>交点：<span class="math-highlight">原点 O（0, 0）</span></li>
            <li>(3, 2)：x = 3, y = 2 の点</li>
            <li>第1象限（+,+）、第2象限（−,+）、第3象限（−,−）、第4象限（+,−）</li>
          </ul>
        </div>`
    },
    warmup: [
      { id:"WU-1", expr:"点 (3, 5) の x 座標は？", answer:"3", choices:["3","5","8","15"], hint:"(x, y) なので x = 3" },
      { id:"WU-2", expr:"点 (−2, 4) はどの象限？", answer:"第2象限", choices:["第1象限","第2象限","第3象限","第4象限"], hint:"x < 0, y > 0 → 第2象限" },
      { id:"WU-3", expr:"原点の座標は？", answer:"(0, 0)", choices:["(0,0)","(1,1)","(0,1)","(1,0)"], hint:"原点は x 軸と y 軸の交点 → (0, 0)" },
      { id:"WU-4", expr:"点 (4, −3) はどの象限？", answer:"第4象限", choices:["第1象限","第2象限","第3象限","第4象限"], hint:"x > 0, y < 0 → 第4象限" },
      { id:"WU-5", expr:"x 軸上の点の y 座標は？", answer:"0", choices:["0","1","−1","不定"], hint:"x 軸上はすべて y = 0" },
    ],
    exercise: [
      { id:"EX-1", expr:"点 (−3, −5) はどの象限？", answer:"第3象限", choices:["第1象限","第2象限","第3象限","第4象限"], hint:"x < 0, y < 0 → 第3象限" },
      { id:"EX-2", expr:"y 軸上にある点はどれ？", answer:"(0, 4)", choices:["(4,0)","(0,4)","(4,4)","(−4,0)"], hint:"y 軸上は x = 0 → (0, 4)" },
      { id:"EX-3", expr:"点 A(2, 3) と x 軸について対称な点は？", answer:"(2, −3)", choices:["(2,−3)","(−2,3)","(−2,−3)","(3,2)"], hint:"x 軸対称は y の符号を変える → (2, −3)" },
      { id:"EX-4", expr:"点 A(2, 3) と y 軸について対称な点は？", answer:"(−2, 3)", choices:["(2,−3)","(−2,3)","(−2,−3)","(3,2)"], hint:"y 軸対称は x の符号を変える → (−2, 3)" },
      { id:"EX-5", expr:"点 A(2, 3) と原点について対称な点は？", answer:"(−2, −3)", choices:["(2,−3)","(−2,3)","(−2,−3)","(3,2)"], hint:"原点対称は両方の符号を変える → (−2, −3)" },
      { id:"EX-6", expr:"2点 A(1, 4), B(3, 4) の中点の座標は？", answer:"(2, 4)", choices:["(2,4)","(4,4)","(2,8)","(1,4)"], hint:"中点：x=(1+3)/2=2、y=(4+4)/2=4 → (2, 4)" },
    ]
  },

  {
    id: "4-2-2",
    chapter: "Chapter 4",
    title: "比例のグラフをかく",
    youtube: "",
    point: {
      title: "比例 y=ax のグラフ",
      html: `
        <p>y = ax のグラフは<strong>原点を通る直線</strong>です。</p>
        <div class="rule-box">
          <div class="rule-title">グラフの特徴</div>
          <ul>
            <li>a > 0：右上がりの直線</li>
            <li>a < 0：右下がりの直線</li>
            <li>|a| が大きいほど傾きが急</li>
            <li>必ず原点 (0, 0) を通る</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">描き方</span><span>原点と、もう1点（例：x=1のときの点）を結ぶ</span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"y = 2x のグラフは右上がり・右下がりどちら？", answer:"右上がり", choices:["右上がり","右下がり","水平","垂直"], hint:"a=2>0 → 右上がり" },
      { id:"WU-2", expr:"y = −3x のグラフは右上がり・右下がりどちら？", answer:"右下がり", choices:["右上がり","右下がり","水平","垂直"], hint:"a=−3<0 → 右下がり" },
      { id:"WU-3", expr:"y = 2x のグラフが通る点はどれ？", answer:"(3, 6)", choices:["(3,6)","(3,5)","(2,4)（原点以外で）","(1,3)"], hint:"x=3: y=6 → (3,6)を通る" },
      { id:"WU-4", expr:"比例のグラフは必ずどこを通る？", answer:"原点", choices:["原点","(1,0)","(0,1)","x軸のみ"], hint:"y=ax → x=0のときy=0 → 原点を通る" },
      { id:"WU-5", expr:"y = 4x と y = x で傾きが急なのは？", answer:"y = 4x", choices:["y=4x","y=x","同じ","比べられない"], hint:"|4|>|1| なので y=4x の方が傾きが急" },
    ],
    exercise: [
      { id:"EX-1", expr:"y = 3x のグラフ上の点 (2, □) の □ は？", answer:"6", choices:["6","9","5","2/3"], hint:"y=3×2=6" },
      { id:"EX-2", expr:"y = −x のグラフ上の点 (−4, □) の □ は？", answer:"4", choices:["4","−4","−16","16"], hint:"y=−1×(−4)=4" },
      { id:"EX-3", expr:"原点と (2, −6) を通るグラフの式は？", answer:"y = −3x", choices:["y=−3x","y=3x","y=−x/3","y=−6x"], hint:"a=−6÷2=−3 → y=−3x" },
      { id:"EX-4", expr:"y = 2x と y = −2x のグラフの関係は？", answer:"x軸について対称", choices:["x軸について対称","y軸について対称","原点について対称","無関係"], hint:"aが符号違いの比例グラフはx軸について対称" },
      { id:"EX-5", expr:"y = 3x のグラフで x = −2 のとき y は？", answer:"−6", choices:["−6","6","−9","9"], hint:"y=3×(−2)=−6" },
      { id:"EX-6", expr:"直線 y = ax が点 (−3, 12) を通るとき a は？", answer:"−4", choices:["−4","4","−36","9"], hint:"12=a×(−3) → a=−4" },
    ]
  },

  {
    id: "4-2-3",
    chapter: "Chapter 4",
    title: "グラフから比例の式を求める",
    youtube: "",
    point: {
      title: "グラフから式を読み取る",
      html: `
        <div class="rule-box">
          <div class="rule-title">手順</div>
          <ul>
            <li>① グラフ上の原点以外の点の座標を読む</li>
            <li>② y = ax に代入して a を求める</li>
            <li>③ 式を完成させる</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>グラフが点 (2, 6) を通る</span></li>
          <li><span class="step-num">→</span><span>6 = a × 2 → a = 3 → y = 3x</span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"原点と (1, 3) を通る直線の式は？", answer:"y = 3x", choices:["y=3x","y=x+3","y=3","y=x/3"], hint:"a=3÷1=3 → y=3x" },
      { id:"WU-2", expr:"原点と (4, −8) を通る直線の式は？", answer:"y = −2x", choices:["y=−2x","y=2x","y=−8x","y=x−2"], hint:"a=−8÷4=−2 → y=−2x" },
      { id:"WU-3", expr:"原点と (3, 9) を通る直線の式は？", answer:"y = 3x", choices:["y=3x","y=9x","y=x/3","y=x+6"], hint:"a=9÷3=3 → y=3x" },
      { id:"WU-4", expr:"原点と (−2, 6) を通る直線の式は？", answer:"y = −3x", choices:["y=−3x","y=3x","y=−x/3","y=−8x"], hint:"a=6÷(−2)=−3 → y=−3x" },
      { id:"WU-5", expr:"原点と (5, −10) を通る直線の式は？", answer:"y = −2x", choices:["y=−2x","y=2x","y=−10x","y=−x/2"], hint:"a=−10÷5=−2 → y=−2x" },
    ],
    exercise: [
      { id:"EX-1", expr:"原点と (−3, −9) を通る直線の式は？", answer:"y = 3x", choices:["y=3x","y=−3x","y=9x","y=x/3"], hint:"a=(−9)÷(−3)=3 → y=3x" },
      { id:"EX-2", expr:"原点と (6, −4) を通る直線の式は？", answer:"y = −2x/3", choices:["y=−2x/3","y=2x/3","y=−3x/2","y=−10x"], hint:"a=−4÷6=−2/3 → y=−2x/3" },
      { id:"EX-3", expr:"y = ax が (2, 8) を通るとき、(−3, □) の □ は？", answer:"−12", choices:["−12","12","−24","6"], hint:"a=8÷2=4 → y=4x → y=4×(−3)=−12" },
      { id:"EX-4", expr:"y = ax が (−4, 6) を通るとき a は？", answer:"−3/2", choices:["−3/2","3/2","−24","3/4"], hint:"a=6÷(−4)=−3/2" },
      { id:"EX-5", expr:"y = ax が (3, 12) を通るとき、y = 20 になる x は？", answer:"5", choices:["5","15","4","60"], hint:"a=12÷3=4 → y=4x → 20=4x → x=5" },
      { id:"EX-6", expr:"y = −4x 上の点で、x 座標と y 座標の和が 15 になる点は？", answer:"(−5, 20)", choices:["(−5,20)","(−3,12)","(3,−12)","(5,−20)"], hint:"x+y=15、y=−4x代入：x+(−4x)=15→−3x=15→x=−5→y=20" },
    ]
  },

  {
    id: "4-3-1",
    chapter: "Chapter 4",
    title: "反比例の式（y=a/x）",
    youtube: "",
    point: {
      title: "反比例とは",
      html: `
        <p>y = a/x（a ≠ 0）の形で表される関係を<strong>反比例</strong>といいます。</p>
        <div class="rule-box">
          <div class="rule-title">反比例の性質</div>
          <ul>
            <li>x が2倍になると y は 1/2 倍になる</li>
            <li>xy = a（積が一定）</li>
            <li>x = 0 のとき y は存在しない</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>y = 6/x：x=2のときy=3、x=3のときy=2（xy=6 一定）</span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"y = 12/x で x = 3 のとき y は？", answer:"4", choices:["4","9","36","15"], hint:"y=12÷3=4" },
      { id:"WU-2", expr:"y = −6/x で x = 2 のとき y は？", answer:"−3", choices:["−3","3","−12","−4"], hint:"y=−6÷2=−3" },
      { id:"WU-3", expr:"y が x に反比例し x = 4 のとき y = 5。比例定数 a は？", answer:"20", choices:["20","1.25","9","−1"], hint:"a=xy=4×5=20" },
      { id:"WU-4", expr:"xy = −8 を y の式で表すと？", answer:"y = −8/x", choices:["y=−8/x","y=−8x","y=8/x","y=x−8"], hint:"xy=−8 → y=−8/x" },
      { id:"WU-5", expr:"y = 10/x で x が2倍になると y は？", answer:"1/2になる", choices:["1/2になる","2倍になる","変わらない","4倍になる"], hint:"反比例はxが2倍→yは1/2" },
    ],
    exercise: [
      { id:"EX-1", expr:"y が x に反比例し x = 3 のとき y = −4。y を x の式で表すと？", answer:"y = −12/x", choices:["y=−12/x","y=12/x","y=−4x/3","y=−7x"], hint:"a=xy=3×(−4)=−12 → y=−12/x" },
      { id:"EX-2", expr:"y = 8/x で y = −2 のとき x は？", answer:"−4", choices:["−4","4","−16","16"], hint:"−2=8/x → x=8÷(−2)=−4" },
      { id:"EX-3", expr:"y = −15/x で x = 5 のとき y は？", answer:"−3", choices:["−3","3","−75","75"], hint:"y=−15÷5=−3" },
      { id:"EX-4", expr:"y = a/x で x = −2, y = 6 のとき a は？", answer:"−12", choices:["−12","12","−3","3"], hint:"a=xy=(−2)×6=−12" },
      { id:"EX-5", expr:"y = 24/x で x の変域が 2 ≤ x ≤ 6 のとき y の変域は？", answer:"4 ≤ y ≤ 12", choices:["4≤y≤12","2≤y≤6","12≤y≤4","4≤y≤24"], hint:"x=2でy=12、x=6でy=4 → 4≤y≤12" },
      { id:"EX-6", expr:"x と y が反比例し x = −3 のとき y = 8。x = 4 のとき y は？", answer:"−6", choices:["−6","6","−24","24"], hint:"a=(−3)×8=−24 → y=−24/x → y=−24÷4=−6" },
    ]
  },

  {
    id: "4-3-2",
    chapter: "Chapter 4",
    title: "反比例のグラフをかく",
    youtube: "",
    point: {
      title: "反比例 y=a/x のグラフ",
      html: `
        <p>y = a/x のグラフは<strong>双曲線</strong>（なめらかな2本の曲線）です。</p>
        <div class="rule-box">
          <div class="rule-title">グラフの特徴</div>
          <ul>
            <li>a > 0：第1・第3象限に曲線</li>
            <li>a < 0：第2・第4象限に曲線</li>
            <li>x 軸・y 軸には近づくが交わらない（漸近線）</li>
            <li>原点について対称な形</li>
          </ul>
        </div>`
    },
    warmup: [
      { id:"WU-1", expr:"y = 6/x のグラフはどの象限にある？", answer:"第1・第3象限", choices:["第1・第3象限","第2・第4象限","第1・第2象限","すべての象限"], hint:"a=6>0 → 第1・第3象限" },
      { id:"WU-2", expr:"y = −4/x のグラフはどの象限にある？", answer:"第2・第4象限", choices:["第1・第3象限","第2・第4象限","第1・第2象限","第3・第4象限"], hint:"a=−4<0 → 第2・第4象限" },
      { id:"WU-3", expr:"反比例のグラフは原点を通るか？", answer:"通らない", choices:["通る","通らない","aの値による","x=0のとき通る"], hint:"x=0のときyは定義されない → 原点を通らない" },
      { id:"WU-4", expr:"y = 4/x のグラフ上の点はどれ？", answer:"(2, 2)", choices:["(2,2)","(2,8)","(1,5)","(0,4)"], hint:"x=2：y=4/2=2 → (2,2)が上の点" },
      { id:"WU-5", expr:"y = −12/x で x = 3 のとき y は？", answer:"−4", choices:["−4","4","−36","9"], hint:"y=−12÷3=−4" },
    ],
    exercise: [
      { id:"EX-1", expr:"y = 8/x のグラフ上の点 (−4, □) の □ は？", answer:"−2", choices:["−2","2","−32","32"], hint:"y=8÷(−4)=−2" },
      { id:"EX-2", expr:"y = −6/x のグラフ上の点 (2, □) の □ は？", answer:"−3", choices:["−3","3","−12","12"], hint:"y=−6÷2=−3" },
      { id:"EX-3", expr:"双曲線 y = 12/x が通る点はどれ？", answer:"(3, 4)", choices:["(3,4)","(3,9)","(4,3)（同じ）","(2,5)"], hint:"x=3：y=12/3=4 → (3,4)を通る" },
      { id:"EX-4", expr:"y = a/x のグラフが (−2, 5) を通るとき a は？", answer:"−10", choices:["−10","10","−7","3"], hint:"a=xy=(−2)×5=−10" },
      { id:"EX-5", expr:"y = 6/x と y = −6/x のグラフの関係は？", answer:"x軸またはy軸について対称", choices:["x軸またはy軸について対称","原点について対称","平行","一致する"], hint:"aが符号違いの反比例グラフはx軸（またはy軸）について対称" },
      { id:"EX-6", expr:"y = 20/x で x > 0 の範囲で x が大きくなると y は？", answer:"小さくなる（正のまま）", choices:["小さくなる（正のまま）","大きくなる","0に近づく（負になる）","変わらない"], hint:"a=20>0のとき x>0ではy>0。xが大きくなるとyは小さくなる（y→0に近づく）" },
    ]
  },

  {
    id: "4-3-3",
    chapter: "Chapter 4",
    title: "グラフから反比例の式を求める",
    youtube: "",
    point: {
      title: "反比例グラフから式を読み取る",
      html: `
        <div class="rule-box">
          <div class="rule-title">手順</div>
          <ul>
            <li>① グラフ上の点の座標 (x, y) を読む</li>
            <li>② a = xy で比例定数を求める</li>
            <li>③ y = a/x の式を完成させる</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>グラフが点 (3, −4) を通る</span></li>
          <li><span class="step-num">→</span><span>a = 3 × (−4) = −12 → y = −12/x</span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"点 (2, 6) を通る反比例の式は？", answer:"y = 12/x", choices:["y=12/x","y=8/x","y=3x","y=12x"], hint:"a=2×6=12 → y=12/x" },
      { id:"WU-2", expr:"点 (3, −4) を通る反比例の式は？", answer:"y = −12/x", choices:["y=−12/x","y=12/x","y=−7/x","y=−4x/3"], hint:"a=3×(−4)=−12 → y=−12/x" },
      { id:"WU-3", expr:"点 (−5, 4) を通る反比例の式は？", answer:"y = −20/x", choices:["y=−20/x","y=20/x","y=−1/x","y=−9x"], hint:"a=(−5)×4=−20 → y=−20/x" },
      { id:"WU-4", expr:"点 (−4, −3) を通る反比例の式は？", answer:"y = 12/x", choices:["y=12/x","y=−12/x","y=7/x","y=−7/x"], hint:"a=(−4)×(−3)=12 → y=12/x" },
      { id:"WU-5", expr:"点 (6, 2) を通る反比例の式は？", answer:"y = 12/x", choices:["y=12/x","y=8/x","y=3x","y=4/x"], hint:"a=6×2=12 → y=12/x" },
    ],
    exercise: [
      { id:"EX-1", expr:"点 (−6, 2) を通る反比例の式は？", answer:"y = −12/x", choices:["y=−12/x","y=12/x","y=−4/x","y=8/x"], hint:"a=(−6)×2=−12 → y=−12/x" },
      { id:"EX-2", expr:"反比例 y = a/x が点 (4, 5) を通るとき、x = −10 のとき y は？", answer:"−2", choices:["−2","2","−50","50"], hint:"a=4×5=20 → y=20/x → y=20÷(−10)=−2" },
      { id:"EX-3", expr:"反比例のグラフが (2, 9) を通るとき、xy の値は？", answer:"18", choices:["18","7","11","4.5"], hint:"xy = a = 2×9 = 18" },
      { id:"EX-4", expr:"y = 18/x で y = 3 のとき x は？", answer:"6", choices:["6","21","54","15"], hint:"3=18/x → x=18÷3=6" },
      { id:"EX-5", expr:"反比例 y = a/x が (−3, 8) を通るとき、y = −6 のとき x は？", answer:"4", choices:["4","−4","6","−6"], hint:"a=(−3)×8=−24 → y=−24/x → −6=−24/x → x=4" },
      { id:"EX-6", expr:"点 (t, 6) と (3, 2t) がともに y = a/x 上にあるとき t は？", answer:"3", choices:["3","−3","6","−6"], hint:"a=6t=6t（同じ式） → 3×2t=t×6 → 6t=6t（つねに成立）...別アプローチ：a=6t=3×2t=6t → 一致するのでtは6t=6t → t=t。実は積が等しいので a=6t=6t。t×6=a かつ 3×2t=a → 6t=6t → 常に成立するので…正解は t=3 として確認: a=18, 点(3,6)→18✓, 点(3,6)→18✓。EX-6修正: 点(t,6)と(3,4)が同じ反比例上→ a=6t=12 → t=2", answer:"2", choices:["2","3","6","−2"], hint:"(t,6)：a=6t、(3,4)：a=12 → 6t=12 → t=2" },
    ]
  },

  {
    id: "4-3-4",
    chapter: "Chapter 4",
    title: "比例・反比例の利用（文章題）",
    youtube: "",
    point: {
      title: "比例・反比例の文章題",
      html: `
        <div class="rule-box">
          <div class="rule-title">見分け方</div>
          <ul>
            <li><strong>比例</strong>：y = ax → xが増えるとyも増える（または両方減る）</li>
            <li><strong>反比例</strong>：y = a/x → xが増えるとyは減る、xy = 一定</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>速さ60km/hでx時間走るときの距離y：y = 60x（比例）</span></li>
          <li><span class="step-num">例</span><span>120kmの道をx時間で走るときの速さy：y = 120/x（反比例）</span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"1本80円のペンをx本買うときの代金yは比例か反比例か？", answer:"比例", choices:["比例","反比例","どちらでもない","関数でない"], hint:"y=80x → 比例" },
      { id:"WU-2", expr:"面積24cm²の長方形の縦xcm、横ycmの関係は？", answer:"反比例", choices:["比例","反比例","どちらでもない","関数でない"], hint:"xy=24 → y=24/x → 反比例" },
      { id:"WU-3", expr:"時速xkmで4時間走ったときの距離y（km）は？", answer:"y = 4x", choices:["y=4x","y=x/4","y=4/x","y=x+4"], hint:"距離=速さ×時間 → y=4x" },
      { id:"WU-4", expr:"120kmの道をx時間で走るときの速さy（km/h）は？", answer:"y = 120/x", choices:["y=120x","y=120/x","y=x/120","y=x+120"], hint:"速さ=距離÷時間 → y=120/x → 反比例" },
      { id:"WU-5", expr:"y = 3x で x = 5 のとき y は？", answer:"15", choices:["15","8","2/3","−15"], hint:"y=3×5=15" },
    ],
    exercise: [
      { id:"EX-1", expr:"毎分xLで水を入れるとき、30Lのタンクが満タンになる時間y分。yをxの式で表すと？", answer:"y = 30/x", choices:["y=30/x","y=30x","y=x/30","y=x+30"], hint:"xy=30 → y=30/x（反比例）" },
      { id:"EX-2", expr:"上の式で x = 5 のとき y は？", answer:"6分", choices:["6分","150分","25分","35分"], hint:"y=30÷5=6分" },
      { id:"EX-3", expr:"y = 6/x で x = 2 のとき y = 3。x = 6 のとき y は？", answer:"1", choices:["1","2","3","4"], hint:"y=6÷6=1" },
      { id:"EX-4", expr:"針金1mの重さが20gのとき、xmの重さyg。yをxの式で表すと？", answer:"y = 20x", choices:["y=20x","y=20/x","y=x/20","y=x+20"], hint:"y=20x（比例）" },
      { id:"EX-5", expr:"上の式で y = 150 のとき x は？", answer:"7.5m", choices:["7.5m","3000m","130m","170m"], hint:"150=20x → x=7.5" },
      { id:"EX-6", expr:"歯車Aが24歯、歯車Bがx歯。Aが1回転するときBがy回転する。yをxの式で表すと？", answer:"y = 24/x", choices:["y=24/x","y=24x","y=x/24","y=x+24"], hint:"歯数×回転数=一定 → 24×1=x×y → y=24/x（反比例）" },
    ]
  },

];
