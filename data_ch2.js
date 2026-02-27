// =============================================
// 数学中1 第2章 文字式 - 全単元データ
// =============================================
const CHAPTER2_UNITS = [

  // -----------------------------------------------
  {
    id: "2-1-1",
    chapter: "Chapter 2",
    title: "文字を使った式の表し方",
    youtube: "",
    point: {
      title: "文字式の表し方ルール",
      html: `
        <p>数の代わりに <span class="math-highlight">a, b, x, y</span> などの文字を使った式を<strong>文字式</strong>といいます。</p>
        <div class="rule-box">
          <div class="rule-title">文字式の書き方ルール</div>
          <ul>
            <li>×（かけ算の記号）は省略する：<span class="math-highlight">a × b = ab</span></li>
            <li>数と文字の積は、数を文字の前に書く：<span class="math-highlight">x × 3 = 3x</span></li>
            <li>1や−1は省略：<span class="math-highlight">1×a = a、−1×a = −a</span></li>
            <li>÷（わり算）は分数で書く：<span class="math-highlight">a ÷ 3 = a/3</span></li>
            <li>同じ文字のかけ算は累乗で書く：<span class="math-highlight">a × a = a²</span></li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例1</span><span>x × 5 = <span class="math-highlight">5x</span></span></li>
          <li><span class="step-num">例2</span><span>a × b × 3 = <span class="math-highlight">3ab</span></span></li>
          <li><span class="step-num">例3</span><span>y ÷ 4 = <span class="math-highlight">y/4</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"a × 4 を文字式で表すと？", answer:"4a", choices:["a4","4a","4+a","a÷4"], hint:"数を文字の前に書く → 4a" },
      { id:"WU-2", expr:"x × y を文字式で表すと？", answer:"xy", choices:["x+y","x÷y","xy","yx（順番が逆）"], hint:"×を省略してそのまま並べる → xy" },
      { id:"WU-3", expr:"b ÷ 5 を文字式で表すと？", answer:"b/5", choices:["5b","b5","b/5","5/b"], hint:"÷は分数にする → b/5" },
      { id:"WU-4", expr:"1 × x を文字式で表すと？", answer:"x", choices:["1x","x1","x","1+x"], hint:"係数が1のときは省略 → x" },
      { id:"WU-5", expr:"a × a を文字式で表すと？", answer:"a²", choices:["2a","aa","a²","a×a"], hint:"同じ文字のかけ算は累乗 → a²" },
    ],
    exercise: [
      { id:"EX-1", expr:"x × 3 × y を文字式で表すと？", answer:"3xy", choices:["x3y","3xy","3x+y","xy3"], hint:"数を前に → 3xy" },
      { id:"EX-2", expr:"−1 × a を文字式で表すと？", answer:"−a", choices:["−1a","a−1","−a","1−a"], hint:"係数が−1のときも省略 → −a" },
      { id:"EX-3", expr:"(a + b) ÷ 3 を文字式で表すと？", answer:"(a+b)/3", choices:["a+b/3","a/3+b","(a+b)/3","3/(a+b)"], hint:"÷3は分母に3 → (a+b)/3" },
      { id:"EX-4", expr:"x × x × y を文字式で表すと？", answer:"x²y", choices:["2xy","x²y","xy²","2x+y"], hint:"x×xはx²、まとめると → x²y" },
      { id:"EX-5", expr:"2 × a × a × b を文字式で表すと？", answer:"2a²b", choices:["2a²b","4ab","2ab²","2a+b"], hint:"a×a=a²、数を前に → 2a²b" },
      { id:"EX-6", expr:"次のうち正しい文字式の書き方は？", answer:"3xy", choices:["x×3y","3×x×y","3xy","xy×3"], hint:"×を省略して数を前に → 3xy" },
    ]
  },

  // -----------------------------------------------
  {
    id: "2-1-2",
    chapter: "Chapter 2",
    title: "乗法・除法の省略ルール",
    youtube: "",
    point: {
      title: "式を元に戻す・式の意味を読む",
      html: `
        <p>文字式を<strong>×や÷を使った式に戻す</strong>こともできます。</p>
        <div class="rule-box">
          <div class="rule-title">文字式を読むポイント</div>
          <ul>
            <li><span class="math-highlight">3a</span> → 3 × a（3とaの積）</li>
            <li><span class="math-highlight">a/4</span> → a ÷ 4（aを4でわった商）</li>
            <li><span class="math-highlight">a²</span> → a × a（aの2乗）</li>
            <li><span class="math-highlight">2ab</span> → 2 × a × b</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例1</span><span>5x = <span class="math-highlight">5 × x</span></span></li>
          <li><span class="step-num">例2</span><span>x²y = <span class="math-highlight">x × x × y</span></span></li>
          <li><span class="step-num">例3</span><span>a/b = <span class="math-highlight">a ÷ b</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"5x を×を使って表すと？", answer:"5 × x", choices:["5 + x","5 × x","5 ÷ x","x × x × x × x × x"], hint:"係数と文字の間に×を戻す → 5 × x" },
      { id:"WU-2", expr:"ab を×を使って表すと？", answer:"a × b", choices:["a + b","a − b","a × b","a ÷ b"], hint:"並んでいる文字の間に×を入れる → a × b" },
      { id:"WU-3", expr:"x/3 を÷を使って表すと？", answer:"x ÷ 3", choices:["3 ÷ x","x ÷ 3","x × 3","3 × x"], hint:"分子÷分母の形 → x ÷ 3" },
      { id:"WU-4", expr:"a² を×を使って表すと？", answer:"a × a", choices:["a + a","2 × a","a × a","a × 2"], hint:"2乗は同じ文字を2回かける → a × a" },
      { id:"WU-5", expr:"3a² を×を使って表すと？", answer:"3 × a × a", choices:["3 × a × 2","3 + a²","3 × a × a","3² × a"], hint:"3×a²=3×a×a" },
    ],
    exercise: [
      { id:"EX-1", expr:"2xy を×を使って表すと？", answer:"2 × x × y", choices:["2 × x + y","2 + x × y","2 × x × y","2x × y"], hint:"2×x×y の形 → 2 × x × y" },
      { id:"EX-2", expr:"(x+y)/2 を÷を使って表すと？", answer:"(x + y) ÷ 2", choices:["x + y ÷ 2","(x + y) ÷ 2","x ÷ 2 + y","2 ÷ (x+y)"], hint:"分数全体÷2 → (x+y) ÷ 2" },
      { id:"EX-3", expr:"−3ab を×を使って表すと？", answer:"−3 × a × b", choices:["3 × a × b","−3 × a + b","−3 × a × b","−3 + a × b"], hint:"−3 × a × b" },
      { id:"EX-4", expr:"x²y² を×を使って表すと？", answer:"x × x × y × y", choices:["x × 2 × y × 2","x × x × y × y","x² × y²（これは？）","2x × 2y"], hint:"x²=x×x、y²=y×y → x×x×y×y" },
      { id:"EX-5", expr:"a/bc を÷と×を使って表すと？", answer:"a ÷ b ÷ c", choices:["a ÷ b × c","a × b ÷ c","a ÷ b ÷ c","a ÷ (b + c)"], hint:"a/(bc) = a÷b÷c" },
      { id:"EX-6", expr:"−x²/3 を×と÷を使って表すと？", answer:"−x × x ÷ 3", choices:["−x × 2 ÷ 3","−x × x ÷ 3","x × x ÷ 3","−x × x × 3"], hint:"−x²/3 = −1×x×x÷3 = −x×x÷3" },
    ]
  },

  // -----------------------------------------------
  {
    id: "2-2-1",
    chapter: "Chapter 2",
    title: "1次式の加法・減法",
    youtube: "",
    point: {
      title: "1次式のたし算・ひき算",
      html: `
        <p><strong>1次式</strong>とは、文字の最大の指数が1の式のことです（例：3x, 2a+5）</p>
        <p><strong>同類項</strong>：文字の部分が同じ項どうしはまとめられます。</p>
        <div class="rule-box">
          <div class="rule-title">計算のポイント</div>
          <ul>
            <li>文字をふくむ項どうし、数の項どうしをそれぞれまとめる</li>
            <li>係数どうしを計算する（文字はそのまま）</li>
            <li>ひき算は符号を変えてたし算に直す</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例1</span><span>3x + 5x = (3+5)x = <span class="math-highlight">8x</span></span></li>
          <li><span class="step-num">例2</span><span>7a − 2a = (7−2)a = <span class="math-highlight">5a</span></span></li>
          <li><span class="step-num">例3</span><span>2x + 3 + 5x − 1 = (2+5)x + (3−1) = <span class="math-highlight">7x + 2</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"3x + 5x = ?", answer:"8x", choices:["8x","15x","8","8x²"], hint:"係数をたす：(3+5)x = 8x" },
      { id:"WU-2", expr:"7a − 4a = ?", answer:"3a", choices:["3a","11a","3","3a²"], hint:"係数をひく：(7−4)a = 3a" },
      { id:"WU-3", expr:"2x + 3 + 4x = ?", answer:"6x + 3", choices:["6x+3","9x","6x","9x+3"], hint:"文字の項：2x+4x=6x、数の項：3 → 6x+3" },
      { id:"WU-4", expr:"5a − 2 − 3a = ?", answer:"2a − 2", choices:["2a−2","2a+2","8a−2","2a"], hint:"文字の項：5a−3a=2a、数の項：−2 → 2a−2" },
      { id:"WU-5", expr:"x + 2 + 3x − 5 = ?", answer:"4x − 3", choices:["4x−3","4x+3","4x−7","3x−3"], hint:"文字：x+3x=4x、数：2−5=−3 → 4x−3" },
    ],
    exercise: [
      { id:"EX-1", expr:"8x − 3x + 2x = ?", answer:"7x", choices:["7x","13x","7","7x²"], hint:"(8−3+2)x = 7x" },
      { id:"EX-2", expr:"4a + 7 − a − 3 = ?", answer:"3a + 4", choices:["3a+4","3a−4","5a+4","3a+10"], hint:"文字：4a−a=3a、数：7−3=4 → 3a+4" },
      { id:"EX-3", expr:"(2x + 5) + (3x − 2) = ?", answer:"5x + 3", choices:["5x+3","5x−3","5x+7","6x+3"], hint:"かっこをはずして：2x+3x=5x、5−2=3 → 5x+3" },
      { id:"EX-4", expr:"(6a − 1) − (2a + 4) = ?", answer:"4a − 5", choices:["4a−5","4a+5","8a−5","4a+3"], hint:"−(2a+4)=−2a−4 → 6a−2a=4a、−1−4=−5" },
      { id:"EX-5", expr:"3x + 2y − x + 5y = ?", answer:"2x + 7y", choices:["2x+7y","2x−7y","4x+7y","2x+7"], hint:"x項：3x−x=2x、y項：2y+5y=7y → 2x+7y" },
      { id:"EX-6", expr:"(5x − 3) − (2x − 8) = ?", answer:"3x + 5", choices:["3x+5","3x−11","3x−5","7x+5"], hint:"−(2x−8)=−2x+8 → 5x−2x=3x、−3+8=5" },
    ]
  },

  // -----------------------------------------------
  {
    id: "2-2-2",
    chapter: "Chapter 2",
    title: "1次式×数、1次式÷数",
    youtube: "",
    point: {
      title: "1次式と数のかけ算・わり算",
      html: `
        <div class="rule-box">
          <div class="rule-title">計算のルール</div>
          <ul>
            <li><span class="math-highlight">a(b + c) = ab + ac</span>（分配法則）</li>
            <li>1次式 × 数：かっこの中の各項に数をかける</li>
            <li>1次式 ÷ 数：各項を数でわる（または逆数をかける）</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例1</span><span>3(2x + 4) = 3×2x + 3×4 = <span class="math-highlight">6x + 12</span></span></li>
          <li><span class="step-num">例2</span><span>−2(x − 3) = −2×x + (−2)×(−3) = <span class="math-highlight">−2x + 6</span></span></li>
          <li><span class="step-num">例3</span><span>(6x + 9) ÷ 3 = 6x/3 + 9/3 = <span class="math-highlight">2x + 3</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"2(x + 3) = ?", answer:"2x + 6", choices:["2x+3","2x+6","x+6","2x+5"], hint:"2×x=2x、2×3=6 → 2x+6" },
      { id:"WU-2", expr:"3(2a − 1) = ?", answer:"6a − 3", choices:["6a−1","6a−3","5a−3","6a+3"], hint:"3×2a=6a、3×(−1)=−3 → 6a−3" },
      { id:"WU-3", expr:"−4(x + 2) = ?", answer:"−4x − 8", choices:["−4x+8","−4x−8","4x+8","−4x−2"], hint:"(−4)×x=−4x、(−4)×2=−8 → −4x−8" },
      { id:"WU-4", expr:"(4x + 8) ÷ 4 = ?", answer:"x + 2", choices:["4x+2","x+8","x+2","x+4"], hint:"4x÷4=x、8÷4=2 → x+2" },
      { id:"WU-5", expr:"(6a − 9) ÷ 3 = ?", answer:"2a − 3", choices:["2a−9","6a−3","2a−3","2a+3"], hint:"6a÷3=2a、−9÷3=−3 → 2a−3" },
    ],
    exercise: [
      { id:"EX-1", expr:"5(2x − 3) = ?", answer:"10x − 15", choices:["10x−3","10x−15","7x−15","10x+15"], hint:"5×2x=10x、5×(−3)=−15 → 10x−15" },
      { id:"EX-2", expr:"−3(2a + 5) = ?", answer:"−6a − 15", choices:["−6a+15","−6a−15","6a−15","−5a−15"], hint:"(−3)×2a=−6a、(−3)×5=−15 → −6a−15" },
      { id:"EX-3", expr:"(10x − 6) ÷ 2 = ?", answer:"5x − 3", choices:["5x−6","10x−3","5x−3","5x+3"], hint:"10x÷2=5x、−6÷2=−3 → 5x−3" },
      { id:"EX-4", expr:"−2(3x − 4) = ?", answer:"−6x + 8", choices:["−6x−8","−6x+8","6x+8","−5x+8"], hint:"(−2)×3x=−6x、(−2)×(−4)=+8 → −6x+8" },
      { id:"EX-5", expr:"(12a + 8) ÷ (−4) = ?", answer:"−3a − 2", choices:["−3a+2","3a−2","−3a−2","3a+2"], hint:"12a÷(−4)=−3a、8÷(−4)=−2 → −3a−2" },
      { id:"EX-6", expr:"4(x + 2) − 3(x − 1) = ?", answer:"x + 11", choices:["x+11","x−11","7x+11","x+5"], hint:"4x+8−3x+3 = x+11" },
    ]
  },

  // -----------------------------------------------
  {
    id: "2-2-3",
    chapter: "Chapter 2",
    title: "かっこをふくむ式の計算",
    youtube: "",
    point: {
      title: "かっこをはずして計算する",
      html: `
        <div class="rule-box">
          <div class="rule-title">かっこのはずし方</div>
          <ul>
            <li><span class="math-highlight">+(  )</span>：そのままはずす（符号変わらず）</li>
            <li><span class="math-highlight">−(  )</span>：中の符号をすべて変えてはずす</li>
            <li>はずした後は同類項をまとめる</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例1</span><span>(3x + 2) + (x − 5) = 3x + 2 + x − 5 = <span class="math-highlight">4x − 3</span></span></li>
          <li><span class="step-num">例2</span><span>(5x + 1) − (2x − 4) = 5x + 1 − 2x + 4 = <span class="math-highlight">3x + 5</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"(2x + 3) + (4x + 1) = ?", answer:"6x + 4", choices:["6x+4","6x+3","8x+4","6x−4"], hint:"そのままはずして：2x+4x=6x、3+1=4 → 6x+4" },
      { id:"WU-2", expr:"(5a − 2) + (a + 6) = ?", answer:"6a + 4", choices:["6a+4","4a+4","6a−4","6a+8"], hint:"5a+a=6a、−2+6=4 → 6a+4" },
      { id:"WU-3", expr:"(3x + 4) − (x + 2) = ?", answer:"2x + 2", choices:["2x+2","2x+6","4x+2","2x−2"], hint:"−(x+2)=−x−2 → 3x−x=2x、4−2=2" },
      { id:"WU-4", expr:"(4a − 3) − (2a − 7) = ?", answer:"2a + 4", choices:["2a+4","2a−10","6a+4","2a−4"], hint:"−(2a−7)=−2a+7 → 4a−2a=2a、−3+7=4" },
      { id:"WU-5", expr:"(x + 5) − (−x + 3) = ?", answer:"2x + 2", choices:["2x+2","2+8","2x+8","2x−2"], hint:"−(−x+3)=+x−3 → x+x=2x、5−3=2" },
    ],
    exercise: [
      { id:"EX-1", expr:"(6x − 1) + (−2x + 5) = ?", answer:"4x + 4", choices:["4x+4","4x−6","8x+4","4x+6"], hint:"6x+(−2x)=4x、−1+5=4 → 4x+4" },
      { id:"EX-2", expr:"(3a + 7) − (5a − 2) = ?", answer:"−2a + 9", choices:["−2a+9","−2a+5","8a+9","−2a−5"], hint:"−(5a−2)=−5a+2 → 3a−5a=−2a、7+2=9" },
      { id:"EX-3", expr:"2(x + 3) + 3(x − 1) = ?", answer:"5x + 3", choices:["5x+3","5x+9","5x−3","5x+6"], hint:"2x+6+3x−3 = 5x+3" },
      { id:"EX-4", expr:"4(a − 2) − 2(3a + 1) = ?", answer:"−2a − 10", choices:["−2a−10","10a−10","−2a+10","2a−10"], hint:"4a−8−6a−2 = −2a−10" },
      { id:"EX-5", expr:"3(2x − 1) − 2(x + 4) = ?", answer:"4x − 11", choices:["4x−11","4x+11","8x−11","4x−3"], hint:"6x−3−2x−8 = 4x−11" },
      { id:"EX-6", expr:"−(3x − 5) + 2(x + 1) = ?", answer:"−x + 7", choices:["−x+7","−x−7","x+7","5x+7"], hint:"−3x+5+2x+2 = −x+7" },
    ]
  },

  // -----------------------------------------------
  {
    id: "2-2-4",
    chapter: "Chapter 2",
    title: "分数をふくむ1次式の計算",
    youtube: "",
    point: {
      title: "分数の文字式の計算",
      html: `
        <div class="rule-box">
          <div class="rule-title">計算の手順</div>
          <ul>
            <li>分数の式は通分してたし算・ひき算</li>
            <li>分数 × 式：分子に式をかける（分配法則）</li>
            <li>整数に直せるときは最初に通分してかっこをはずす</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例1</span><span>x/2 + x/3 = 3x/6 + 2x/6 = <span class="math-highlight">5x/6</span></span></li>
          <li><span class="step-num">例2</span><span>(x+1)/2 + (x−1)/3 = 3(x+1)/6 + 2(x−1)/6 = (3x+3+2x−2)/6 = <span class="math-highlight">(5x+1)/6</span></span></li>
          <li><span class="step-num">例3</span><span>1/2 × (4x + 6) = 2x + 3</span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"x/3 + x/3 = ?", answer:"2x/3", choices:["2x/3","2x/9","x/6","2x/6"], hint:"同じ分母：係数をたす → 2x/3" },
      { id:"WU-2", expr:"x/2 + x/4 = ?", answer:"3x/4", choices:["2x/6","3x/4","x/4","2x/4"], hint:"通分：2x/4+x/4 = 3x/4" },
      { id:"WU-3", expr:"1/2 × (2x + 4) = ?", answer:"x + 2", choices:["x+4","2x+2","x+2","x+4/2"], hint:"1/2×2x=x、1/2×4=2 → x+2" },
      { id:"WU-4", expr:"(3x − 6) / 3 = ?", answer:"x − 2", choices:["x−6","3x−2","x−2","x+2"], hint:"3x/3=x、−6/3=−2 → x−2" },
      { id:"WU-5", expr:"x/2 − x/3 = ?", answer:"x/6", choices:["x/6","0","x/5","2x/5"], hint:"通分（分母6）：3x/6−2x/6 = x/6" },
    ],
    exercise: [
      { id:"EX-1", expr:"(x+1)/2 + (x−1)/2 = ?", answer:"x", choices:["x","2x","x+1","(2x)/2"], hint:"分母同じ：(x+1+x−1)/2 = 2x/2 = x" },
      { id:"EX-2", expr:"2x/3 + x/6 = ?", answer:"5x/6", choices:["3x/9","5x/6","5x/9","3x/6"], hint:"通分（分母6）：4x/6+x/6 = 5x/6" },
      { id:"EX-3", expr:"1/3 × (6a − 9) = ?", answer:"2a − 3", choices:["2a−9","6a−3","2a−3","2a+3"], hint:"1/3×6a=2a、1/3×(−9)=−3 → 2a−3" },
      { id:"EX-4", expr:"(x+2)/3 − (x−1)/3 = ?", answer:"1", choices:["1","0","2x/3","2/3"], hint:"(x+2−x+1)/3 = 3/3 = 1" },
      { id:"EX-5", expr:"x/2 + (x+1)/3 = ?", answer:"(5x+2)/6", choices:["(5x+2)/6","(2x+1)/5","(5x+1)/6","5x/6"], hint:"通分（分母6）：3x/6+2(x+1)/6=(3x+2x+2)/6=(5x+2)/6" },
      { id:"EX-6", expr:"3/4 × (8x − 4) = ?", answer:"6x − 3", choices:["6x−4","6x−3","6x+3","8x−3"], hint:"3/4×8x=6x、3/4×(−4)=−3 → 6x−3" },
    ]
  },

  // -----------------------------------------------
  {
    id: "2-3-1",
    chapter: "Chapter 2",
    title: "文字式への代入（1変数）",
    youtube: "",
    point: {
      title: "式の値を求める（1変数）",
      html: `
        <p>文字に数を代入して、式の値を計算します。</p>
        <div class="rule-box">
          <div class="rule-title">代入の手順</div>
          <ul>
            <li>文字を数に置きかえる</li>
            <li>正負の数のかけ算のルールに注意</li>
            <li>負の数を代入するときはかっこをつける</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例1</span><span>x = 3 のとき 2x + 1 の値は？ → 2×3 + 1 = <span class="math-highlight">7</span></span></li>
          <li><span class="step-num">例2</span><span>a = −2 のとき 3a² の値は？ → 3×(−2)² = 3×4 = <span class="math-highlight">12</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"x = 2 のとき、3x の値は？", answer:"6", choices:["5","6","8","32"], hint:"3×2 = 6" },
      { id:"WU-2", expr:"a = 5 のとき、a + 3 の値は？", answer:"8", choices:["8","15","53","2"], hint:"5 + 3 = 8" },
      { id:"WU-3", expr:"x = −3 のとき、2x の値は？", answer:"−6", choices:["6","−6","−5","1"], hint:"2×(−3) = −6（かっこをつけて代入）" },
      { id:"WU-4", expr:"a = 4 のとき、a² の値は？", answer:"16", choices:["8","16","24","4"], hint:"4² = 4×4 = 16" },
      { id:"WU-5", expr:"x = −2 のとき、x² の値は？", answer:"4", choices:["−4","4","−2","2"], hint:"(−2)² = (−2)×(−2) = 4" },
    ],
    exercise: [
      { id:"EX-1", expr:"x = 3 のとき、4x − 5 の値は？", answer:"7", choices:["7","17","−5","12"], hint:"4×3 − 5 = 12 − 5 = 7" },
      { id:"EX-2", expr:"a = −1 のとき、3a + 7 の値は？", answer:"4", choices:["4","10","−4","−10"], hint:"3×(−1) + 7 = −3 + 7 = 4" },
      { id:"EX-3", expr:"x = 2 のとき、x² − 3x + 1 の値は？", answer:"−1", choices:["−1","3","11","1"], hint:"4 − 6 + 1 = −1" },
      { id:"EX-4", expr:"a = −3 のとき、2a² + a の値は？", answer:"15", choices:["15","−15","21","−21"], hint:"2×9 + (−3) = 18 − 3 = 15" },
      { id:"EX-5", expr:"x = 1/2 のとき、4x − 1 の値は？", answer:"1", choices:["1","0","2","−1"], hint:"4×(1/2) − 1 = 2 − 1 = 1" },
      { id:"EX-6", expr:"a = −4 のとき、−a² + 2a の値は？", answer:"−24", choices:["−24","24","8","−8"], hint:"−(−4)² + 2×(−4) = −16 + (−8) = −24" },
    ]
  },

  // -----------------------------------------------
  {
    id: "2-3-2",
    chapter: "Chapter 2",
    title: "文字式への代入（2変数）",
    youtube: "",
    point: {
      title: "式の値を求める（2変数）",
      html: `
        <p>2つの文字がある式に、それぞれの値を代入して計算します。</p>
        <div class="rule-box">
          <div class="rule-title">注意点</div>
          <ul>
            <li>2つの文字を同時に代入する</li>
            <li>負の数は必ずかっこをつける</li>
            <li>代入後は四則の順序（累乗→×÷→+−）で計算</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>x = 2, y = −3 のとき 2x + y の値は？</span></li>
          <li><span class="step-num">→</span><span>2×2 + (−3) = 4 − 3 = <span class="math-highlight">1</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"a = 2, b = 3 のとき a + b の値は？", answer:"5", choices:["5","6","1","23"], hint:"2 + 3 = 5" },
      { id:"WU-2", expr:"x = 4, y = 1 のとき x − y の値は？", answer:"3", choices:["5","4","3","41"], hint:"4 − 1 = 3" },
      { id:"WU-3", expr:"a = 3, b = 2 のとき 2a + b の値は？", answer:"8", choices:["7","8","10","12"], hint:"2×3 + 2 = 6 + 2 = 8" },
      { id:"WU-4", expr:"x = 2, y = −1 のとき x + 3y の値は？", answer:"−1", choices:["−1","5","1","−5"], hint:"2 + 3×(−1) = 2 − 3 = −1" },
      { id:"WU-5", expr:"a = −2, b = 4 のとき ab の値は？", answer:"−8", choices:["2","−8","8","−2"], hint:"(−2)×4 = −8" },
    ],
    exercise: [
      { id:"EX-1", expr:"x = 3, y = −2 のとき 2x − y の値は？", answer:"8", choices:["8","4","−8","10"], hint:"2×3 − (−2) = 6 + 2 = 8" },
      { id:"EX-2", expr:"a = −1, b = −3 のとき a − b の値は？", answer:"2", choices:["−4","2","4","−2"], hint:"(−1) − (−3) = −1 + 3 = 2" },
      { id:"EX-3", expr:"x = 2, y = 3 のとき x² + y の値は？", answer:"7", choices:["7","13","25","10"], hint:"2² + 3 = 4 + 3 = 7" },
      { id:"EX-4", expr:"a = 4, b = −2 のとき a/b + 3 の値は？", answer:"1", choices:["1","−5","5","−1"], hint:"4÷(−2) + 3 = −2 + 3 = 1" },
      { id:"EX-5", expr:"x = −2, y = 3 のとき x² − 2y の値は？", answer:"−2", choices:["−2","2","10","−10"], hint:"(−2)² − 2×3 = 4 − 6 = −2" },
      { id:"EX-6", expr:"a = 3, b = −1 のとき 2a² + 3b の値は？", answer:"15", choices:["15","21","−15","3"], hint:"2×9 + 3×(−1) = 18 − 3 = 15" },
    ]
  },

  // -----------------------------------------------
  {
    id: "2-3-3",
    chapter: "Chapter 2",
    title: "式の値の計算",
    youtube: "",
    point: {
      title: "式を簡単にしてから代入する",
      html: `
        <p>式が複雑なときは、<strong>先に式を整理・簡単にしてから代入</strong>すると計算ミスが減ります。</p>
        <div class="rule-box">
          <div class="rule-title">手順</div>
          <ul>
            <li>① 式を展開・同類項をまとめて簡単にする</li>
            <li>② 簡単にした式に数を代入する</li>
            <li>③ 正負の計算に注意して答えを出す</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>x = −2 のとき 3(x+1) − 2(x−1) の値は？</span></li>
          <li><span class="step-num">①</span><span>式を整理：3x+3−2x+2 = x+5</span></li>
          <li><span class="step-num">②</span><span>代入：(−2)+5 = <span class="math-highlight">3</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"x = 2 のとき、2(x + 1) の値は？", answer:"6", choices:["6","5","8","4"], hint:"2×2+2×1 = 4+2 = 6（または2×3=6）" },
      { id:"WU-2", expr:"a = 3 のとき、(a + 2)(a − 2) の値は？", answer:"5", choices:["5","7","1","25"], hint:"a²−4 に代入：9−4=5（または1×5=5）" },
      { id:"WU-3", expr:"x = −1 のとき、x² + 2x + 1 の値は？", answer:"0", choices:["0","4","2","−2"], hint:"(x+1)²に代入：(−1+1)²=0²=0" },
      { id:"WU-4", expr:"a = 4 のとき、3a − 2(a − 1) の値は？", answer:"6", choices:["6","10","14","2"], hint:"3a−2a+2=a+2 → 4+2=6" },
      { id:"WU-5", expr:"x = 3 のとき、(2x + 1) − (x + 4) の値は？", answer:"0", choices:["0","2","4","-1"], hint:"2x+1−x−4=x−3 → x=3代入：3−3=0" },
    ],
    exercise: [
      { id:"EX-1", expr:"x = 2 のとき、4(x − 1) − 3(x − 2) の値は？", answer:"6", choices:["6","2","−2","10"], hint:"4x−4−3x+6=x+2 → 2+2=4…再計算：x+2に2代入=4。正解4", answer:"4", choices:["4","6","2","−2"], hint:"4x−4−3x+6=x+2 → x=2代入：2+2=4" },
      { id:"EX-2", expr:"a = −2 のとき、2(a + 3) + (a − 1) の値は？", answer:"−1", choices:["−1","3","−3","1"], hint:"2a+6+a−1=3a+5 → 3×(−2)+5=−6+5=−1" },
      { id:"EX-3", expr:"x = 3, y = 1 のとき、2(x + y) − (x − y) の値は？", answer:"6", choices:["6","9","5","7"], hint:"2x+2y−x+y=x+3y → 3+3×1=6" },
      { id:"EX-4", expr:"a = −1 のとき、a² − (2a + 3) の値は？", answer:"0", choices:["0","−2","2","4"], hint:"a²−2a−3 → 1−(−2)−3=1+2−3=0" },
      { id:"EX-5", expr:"x = 4 のとき、x(x − 3) − 2x の値は？", answer:"0", choices:["0","4","8","−4"], hint:"x²−3x−2x=x²−5x → 16−20=−4。正解−4", answer:"−4", choices:["−4","0","4","−8"], hint:"x²−3x−2x=x²−5x → 16−20=−4" },
      { id:"EX-6", expr:"a = 2, b = −1 のとき、3(a − b) − 2(a + b) の値は？", answer:"7", choices:["7","5","3","1"], hint:"3a−3b−2a−2b=a−5b → 2−5×(−1)=2+5=7" },
    ]
  },

  // -----------------------------------------------
  {
    id: "2-3-4",
    chapter: "Chapter 2",
    title: "文字式の利用（数量の表し方）",
    youtube: "",
    point: {
      title: "文字式で数量を表す",
      html: `
        <p>文字式を使うと、いろいろな数量の関係を式で表せます。</p>
        <div class="rule-box">
          <div class="rule-title">よく使う数量の表し方</div>
          <ul>
            <li>n 円の品物を 3 個買う → <span class="math-highlight">3n 円</span></li>
            <li>a km の道を時速 b km で進む時間 → <span class="math-highlight">a/b 時間</span></li>
            <li>十の位が a、一の位が b の2桁の整数 → <span class="math-highlight">10a + b</span></li>
            <li>x % の割合 → <span class="math-highlight">x/100</span></li>
            <li>a 円の 20% 引き → <span class="math-highlight">a × 0.8 = 0.8a 円</span></li>
          </ul>
        </div>`
    },
    warmup: [
      { id:"WU-1", expr:"1個 a 円のりんごを 5 個買ったときの代金は？", answer:"5a 円", choices:["a+5円","5a円","a÷5円","5+a円"], hint:"単価×個数 → 5a円" },
      { id:"WU-2", expr:"x km の道を毎分 60m で歩くと何分かかる？", answer:"1000x/60 分", choices:["60x分","x/60分","1000x/60分","x×60分"], hint:"x km = 1000x m、時間=距離÷速さ → 1000x÷60分" },
      { id:"WU-3", expr:"十の位が 3、一の位が a の2桁の整数を式で表すと？", answer:"30 + a", choices:["3a","30+a","3+a","30a"], hint:"十の位3×10+一の位a → 30+a" },
      { id:"WU-4", expr:"a 円の品物を買って 1000 円払ったときのおつりは？", answer:"(1000 − a) 円", choices:["a−1000円","1000a円","(1000−a)円","(a+1000)円"], hint:"おつり=払った金額−代金 → 1000−a円" },
      { id:"WU-5", expr:"縦 a cm、横 b cm の長方形の面積は？", answer:"ab cm²", choices:["2(a+b)cm²","ab cm²","(a+b)cm²","2ab cm²"], hint:"面積=縦×横 → ab cm²" },
    ],
    exercise: [
      { id:"EX-1", expr:"a 円の商品が b % 引きになったときの値段は？", answer:"a(1 − b/100) 円", choices:["a−b円","ab/100円","a(1−b/100)円","a×b円"], hint:"b%引き=（1−b/100）倍 → a(1−b/100)円" },
      { id:"EX-2", expr:"時速 x km で y 時間走ったときの距離は？", answer:"xy km", choices:["x+y km","x÷y km","xy km","x−y km"], hint:"距離=速さ×時間 → xy km" },
      { id:"EX-3", expr:"a 人のクラスで男子が b 人のとき、女子の人数は？", answer:"(a − b) 人", choices:["ab人","(a+b)人","(a−b)人","b−a人"], hint:"女子=全体−男子 → a−b人" },
      { id:"EX-4", expr:"十の位が a、一の位が b の2桁の整数の、十の位と一の位を入れ替えた数は？", answer:"10b + a", choices:["10a+b","10b+a","ab","ba"], hint:"十の位がb、一の位がa → 10b+a" },
      { id:"EX-5", expr:"a 円の 8% の消費税込みの値段は？", answer:"1.08a 円", choices:["a+8円","1.8a円","1.08a円","0.08a円"], hint:"8%の税込み=元の価格×1.08 → 1.08a円" },
      { id:"EX-6", expr:"x 点と y 点の平均点は？", answer:"(x + y) / 2 点", choices:["x+y点","xy点","(x+y)/2点","(x−y)/2点"], hint:"平均=合計÷個数 → (x+y)/2点" },
    ]
  },

];
