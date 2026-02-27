// =============================================
// 数学中1 第3章 方程式 - 全単元データ
// ✅ 全問sympy検証済み
// =============================================
const CHAPTER3_UNITS = [

  {
    id: "3-1-1",
    chapter: "Chapter 3",
    title: "方程式とその解（基本）",
    youtube: "",
    point: {
      title: "方程式とは",
      html: `
        <p>文字をふくむ等式で、その文字に特定の値を代入したときだけ成り立つものを<strong>方程式</strong>といいます。</p>
        <p>方程式を成り立たせる値を<strong>解</strong>、解を求めることを<strong>方程式を解く</strong>といいます。</p>
        <div class="rule-box">
          <div class="rule-title">解の確かめ方</div>
          <ul>
            <li>左辺に値を代入して計算する</li>
            <li>右辺と等しくなれば、その値が解</li>
            <li>等しくなければ解ではない</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>x + 3 = 7 で x = 4 か確かめる</span></li>
          <li><span class="step-num">→</span><span>左辺：4 + 3 = 7 = 右辺 ✓ → x = 4 は解</span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"x = 2 は x + 5 = 7 の解か？", answer:"解である", choices:["解である","解でない","わからない","代入できない"], hint:"左辺：2+5=7=右辺 → 解である" },
      { id:"WU-2", expr:"x = 3 は 2x = 5 の解か？", answer:"解でない", choices:["解である","解でない","どちらとも言える","計算不要"], hint:"左辺：2×3=6 ≠ 5 → 解でない" },
      { id:"WU-3", expr:"x = −1 は x + 4 = 3 の解か？", answer:"解である", choices:["解である","解でない","負の数は不可","計算不可"], hint:"左辺：(−1)+4=3=右辺 → 解である" },
      { id:"WU-4", expr:"x + 3 = 8 の解はいくつ？", answer:"x = 5", choices:["x=3","x=5","x=8","x=11"], hint:"左辺に5を代入：5+3=8=右辺 → x=5" },
      { id:"WU-5", expr:"3x = 12 の解はいくつ？", answer:"x = 4", choices:["x=3","x=4","x=9","x=36"], hint:"左辺に4を代入：3×4=12=右辺 → x=4" },
    ],
    exercise: [
      { id:"EX-1", expr:"x = 5 は 2x − 3 = 7 の解か？", answer:"解である", choices:["解である","解でない","x=5は大きい","確かめ不可"], hint:"左辺：2×5−3=10−3=7=右辺 → 解である" },
      { id:"EX-2", expr:"x = −2 は 3x + 1 = −5 の解か？", answer:"解である", choices:["解である","解でない","負は不可","左辺が0になる"], hint:"左辺：3×(−2)+1=−6+1=−5=右辺 → 解である" },
      { id:"EX-3", expr:"x = 4 は x/2 + 1 = 3 の解か？", answer:"解である", choices:["解である","解でない","分数は不可","x=4は偶数"], hint:"左辺：4/2+1=2+1=3=右辺 → 解である" },
      { id:"EX-4", expr:"x = 3 は 4x − 5 = 8 の解か？", answer:"解でない", choices:["解である","解でない","x=3は小さい","計算不要"], hint:"左辺：4×3−5=12−5=7 ≠ 8 → 解でない" },
      { id:"EX-5", expr:"−x + 6 = 4 の解はいくつ？", answer:"x = 2", choices:["x=2","x=−2","x=10","x=−10"], hint:"左辺に2を代入：−2+6=4=右辺 → x=2" },
      { id:"EX-6", expr:"次のうち 2x + 1 = 5 の解はどれ？", answer:"x = 2", choices:["x=1","x=2","x=3","x=4"], hint:"x=2：2×2+1=5 → x=2が解" },
    ]
  },

  {
    id: "3-2-1",
    chapter: "Chapter 3",
    title: "移項の基本（x+a=b）",
    youtube: "",
    point: {
      title: "移項のルール",
      html: `
        <p>等式の一方の辺にある項を<strong>符号を変えて</strong>他の辺に移すことを「<span class="math-highlight">移項</span>」といいます。</p>
        <div class="rule-box">
          <div class="rule-title">移項のポイント</div>
          <ul>
            <li>左辺の <span class="math-highlight">+a</span> を移項 → 右辺で <span class="math-highlight">−a</span></li>
            <li>左辺の <span class="math-highlight">−a</span> を移項 → 右辺で <span class="math-highlight">+a</span></li>
            <li>xをふくむ項は左辺、数の項は右辺に集める</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>x + 5 = 12</span></li>
          <li><span class="step-num">①</span><span>5を右辺に移項：x = 12 − 5</span></li>
          <li><span class="step-num">②</span><span>計算：x = <span class="math-highlight">7</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"x + 3 = 8", answer:"x = 5", choices:["x=5","x=11","x=3","x=−5"], hint:"3を移項：x = 8−3 = 5" },
      { id:"WU-2", expr:"x + 7 = 10", answer:"x = 3", choices:["x=3","x=17","x=7","x=−3"], hint:"7を移項：x = 10−7 = 3" },
      { id:"WU-3", expr:"x − 4 = 9", answer:"x = 13", choices:["x=5","x=13","x=−5","x=−13"], hint:"−4を移項：x = 9+4 = 13" },
      { id:"WU-4", expr:"x − 6 = 2", answer:"x = 8", choices:["x=−4","x=4","x=8","x=12"], hint:"−6を移項：x = 2+6 = 8" },
      { id:"WU-5", expr:"x + 9 = 4", answer:"x = −5", choices:["x=13","x=5","x=−5","x=−13"], hint:"9を移項：x = 4−9 = −5" },
    ],
    exercise: [
      { id:"EX-1", expr:"x + 12 = 20", answer:"x = 8", choices:["x=8","x=32","x=−8","x=12"], hint:"12を移項：x = 20−12 = 8" },
      { id:"EX-2", expr:"x − 8 = 15", answer:"x = 23", choices:["x=7","x=23","x=−7","x=−23"], hint:"−8を移項：x = 15+8 = 23" },
      { id:"EX-3", expr:"x + 15 = 6", answer:"x = −9", choices:["x=21","x=9","x=−9","x=−21"], hint:"15を移項：x = 6−15 = −9" },
      { id:"EX-4", expr:"x − 11 = −3", answer:"x = 8", choices:["x=−14","x=8","x=−8","x=14"], hint:"−11を移項：x = −3+11 = 8" },
      { id:"EX-5", expr:"x + 20 = 13", answer:"x = −7", choices:["x=33","x=7","x=−7","x=−33"], hint:"20を移項：x = 13−20 = −7" },
      { id:"EX-6", expr:"x − 7 = −12", answer:"x = −5", choices:["x=−19","x=5","x=−5","x=19"], hint:"−7を移項：x = −12+7 = −5" },
    ]
  },

  {
    id: "3-2-2",
    chapter: "Chapter 3",
    title: "係数がある方程式（ax+b=c）",
    youtube: "",
    point: {
      title: "ax+b=c の解き方",
      html: `
        <div class="rule-box">
          <div class="rule-title">手順</div>
          <ul>
            <li>① 数の項（b）を右辺に移項する</li>
            <li>② 両辺をxの係数（a）でわる</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>3x + 5 = 14</span></li>
          <li><span class="step-num">①</span><span>5を移項：3x = 14 − 5 = 9</span></li>
          <li><span class="step-num">②</span><span>3でわる：x = 9 ÷ 3 = <span class="math-highlight">3</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"2x + 4 = 10", answer:"x = 3", choices:["x=3","x=7","x=5","x=−3"], hint:"2x=10−4=6 → x=6÷2=3" },
      { id:"WU-2", expr:"3x − 6 = 9", answer:"x = 5", choices:["x=1","x=5","x=−1","x=−5"], hint:"3x=9+6=15 → x=15÷3=5" },
      { id:"WU-3", expr:"4x + 3 = 11", answer:"x = 2", choices:["x=2","x=14","x=−2","x=3.5"], hint:"4x=11−3=8 → x=8÷4=2" },
      { id:"WU-4", expr:"5x − 10 = 0", answer:"x = 2", choices:["x=0","x=2","x=−2","x=10"], hint:"5x=0+10=10 → x=10÷5=2" },
      { id:"WU-5", expr:"2x + 7 = 3", answer:"x = −2", choices:["x=5","x=−5","x=2","x=−2"], hint:"2x=3−7=−4 → x=−4÷2=−2" },
    ],
    exercise: [
      { id:"EX-1", expr:"6x + 1 = 13", answer:"x = 2", choices:["x=2","x=7","x=−2","x=14"], hint:"6x=13−1=12 → x=12÷6=2" },
      { id:"EX-2", expr:"4x − 9 = 7", answer:"x = 4", choices:["x=−0.5","x=4","x=−4","x=16"], hint:"4x=7+9=16 → x=16÷4=4" },
      { id:"EX-3", expr:"3x + 8 = 2", answer:"x = −2", choices:["x=2","x=−2","x=10/3","x=−10/3"], hint:"3x=2−8=−6 → x=−6÷3=−2" },
      { id:"EX-4", expr:"7x − 4 = 17", answer:"x = 3", choices:["x=3","x=13/7","x=−3","x=21"], hint:"7x=17+4=21 → x=21÷7=3" },
      { id:"EX-5", expr:"5x + 12 = −3", answer:"x = −3", choices:["x=−3","x=3","x=−9/5","x=9"], hint:"5x=−3−12=−15 → x=−15÷5=−3" },
      { id:"EX-6", expr:"−2x + 6 = 12", answer:"x = −3", choices:["x=−3","x=3","x=9","x=−9"], hint:"−2x=12−6=6 → x=6÷(−2)=−3" },
    ]
  },

  {
    id: "3-2-3",
    chapter: "Chapter 3",
    title: "両辺にxがある方程式",
    youtube: "",
    point: {
      title: "xを一方にまとめる",
      html: `
        <div class="rule-box">
          <div class="rule-title">手順</div>
          <ul>
            <li>① xをふくむ項を左辺に、数の項を右辺に移項</li>
            <li>② 同類項をまとめて ax = b の形にする</li>
            <li>③ 両辺を係数 a でわる</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>5x = 2x + 9</span></li>
          <li><span class="step-num">①</span><span>2xを左辺に移項：5x − 2x = 9</span></li>
          <li><span class="step-num">②</span><span>まとめる：3x = 9</span></li>
          <li><span class="step-num">③</span><span>3でわる：x = <span class="math-highlight">3</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"4x = x + 9", answer:"x = 3", choices:["x=3","x=9","x=−3","x=9/5"], hint:"4x−x=9 → 3x=9 → x=3" },
      { id:"WU-2", expr:"6x = 3x + 12", answer:"x = 4", choices:["x=2","x=4","x=−4","x=12"], hint:"6x−3x=12 → 3x=12 → x=4" },
      { id:"WU-3", expr:"5x = 8x − 6", answer:"x = 2", choices:["x=2","x=−2","x=6","x=−6"], hint:"5x−8x=−6 → −3x=−6 → x=2" },
      { id:"WU-4", expr:"2x + 8 = 5x − 1", answer:"x = 3", choices:["x=3","x=−3","x=7","x=9/7"], hint:"2x−5x=−1−8 → −3x=−9 → x=3" },
      { id:"WU-5", expr:"7x − 3 = 4x + 9", answer:"x = 4", choices:["x=4","x=−4","x=2","x=6"], hint:"7x−4x=9+3 → 3x=12 → x=4" },
    ],
    exercise: [
      { id:"EX-1", expr:"8x = 3x + 20", answer:"x = 4", choices:["x=4","x=−4","x=20","x=2"], hint:"8x−3x=20 → 5x=20 → x=4" },
      { id:"EX-2", expr:"9x − 5 = 4x + 15", answer:"x = 4", choices:["x=4","x=−4","x=2","x=10"], hint:"9x−4x=15+5 → 5x=20 → x=4" },
      { id:"EX-3", expr:"3x + 7 = 7x − 5", answer:"x = 3", choices:["x=3","x=−3","x=1","x=12"], hint:"3x−7x=−5−7 → −4x=−12 → x=3" },
      { id:"EX-4", expr:"2x − 4 = −x + 5", answer:"x = 3", choices:["x=3","x=−3","x=1/3","x=9"], hint:"2x+x=5+4 → 3x=9 → x=3" },
      { id:"EX-5", expr:"6x + 1 = 2x − 7", answer:"x = −2", choices:["x=2","x=−2","x=8","x=−8"], hint:"6x−2x=−7−1 → 4x=−8 → x=−2" },
      { id:"EX-6", expr:"−3x + 10 = x − 2", answer:"x = 3", choices:["x=3","x=−3","x=2","x=8"], hint:"−3x−x=−2−10 → −4x=−12 → x=3" },
    ]
  },

  {
    id: "3-2-4",
    chapter: "Chapter 3",
    title: "かっこがある方程式",
    youtube: "",
    point: {
      title: "かっこをはずしてから解く",
      html: `
        <div class="rule-box">
          <div class="rule-title">手順</div>
          <ul>
            <li>① かっこを分配法則ではずす</li>
            <li>② 移項して ax = b の形にする</li>
            <li>③ 両辺を a でわる</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>3(x + 2) = 12</span></li>
          <li><span class="step-num">①</span><span>かっこをはずす：3x + 6 = 12</span></li>
          <li><span class="step-num">②</span><span>移項：3x = 12 − 6 = 6</span></li>
          <li><span class="step-num">③</span><span>3でわる：x = <span class="math-highlight">2</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"2(x + 3) = 10", answer:"x = 2", choices:["x=2","x=8","x=−2","x=5"], hint:"2x+6=10 → 2x=4 → x=2" },
      { id:"WU-2", expr:"3(x − 1) = 9", answer:"x = 4", choices:["x=4","x=2","x=−4","x=10/3"], hint:"3x−3=9 → 3x=12 → x=4" },
      { id:"WU-3", expr:"4(x + 5) = 8", answer:"x = −3", choices:["x=3","x=−3","x=7","x=−7"], hint:"4x+20=8 → 4x=−12 → x=−3" },
      { id:"WU-4", expr:"2(3x − 1) = 16", answer:"x = 3", choices:["x=3","x=17/6","x=−3","x=9"], hint:"6x−2=16 → 6x=18 → x=3" },
      { id:"WU-5", expr:"5(x + 2) = 3(x + 4)", answer:"x = 1", choices:["x=1","x=−1","x=7","x=−7"], hint:"5x+10=3x+12 → 2x=2 → x=1" },
    ],
    exercise: [
      { id:"EX-1", expr:"3(2x − 4) = 6", answer:"x = 3", choices:["x=3","x=1","x=−3","x=7"], hint:"6x−12=6 → 6x=18 → x=3" },
      { id:"EX-2", expr:"4(x + 3) = 2(x + 7)", answer:"x = 1", choices:["x=1","x=2","x=−1","x=8"], hint:"4x+12=2x+14 → 2x=2 → x=1" },
      { id:"EX-3", expr:"2(x − 5) = 3x − 7", answer:"x = −3", choices:["x=−3","x=3","x=−13","x=13"], hint:"2x−10=3x−7 → −x=3 → x=−3" },
      { id:"EX-4", expr:"−3(x − 2) = 9", answer:"x = −1", choices:["x=−1","x=1","x=5","x=−5"], hint:"−3x+6=9 → −3x=3 → x=−1" },
      { id:"EX-5", expr:"5(x − 1) = 2(2x + 1)", answer:"x = 7", choices:["x=7","x=−7","x=3","x=−3"], hint:"5x−5=4x+2 → x=7" },
      { id:"EX-6", expr:"3(2x + 1) − 2(x − 3) = 19", answer:"x = 2.5", choices:["x=2.5","x=2","x=3","x=−2.5"], hint:"6x+3−2x+6=19 → 4x+9=19 → 4x=10 → x=2.5" },
    ]
  },

  {
    id: "3-3-1",
    chapter: "Chapter 3",
    title: "分数をふくむ方程式",
    youtube: "",
    point: {
      title: "分数の方程式の解き方",
      html: `
        <p>分数をふくむ方程式は、<strong>両辺に分母の最小公倍数をかけて整数にしてから解く</strong>のがポイントです。</p>
        <div class="rule-box">
          <div class="rule-title">手順</div>
          <ul>
            <li>① 分母の最小公倍数を両辺にかける</li>
            <li>② 分数をなくして整数の方程式にする</li>
            <li>③ 通常の方程式として解く</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>x/2 + 1 = 3</span></li>
          <li><span class="step-num">①</span><span>両辺×2：x + 2 = 6</span></li>
          <li><span class="step-num">②</span><span>移項：x = 6 − 2 = <span class="math-highlight">4</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"x/3 = 4", answer:"x = 12", choices:["x=12","x=4/3","x=3","x=7"], hint:"両辺×3：x = 4×3 = 12" },
      { id:"WU-2", expr:"x/2 + 3 = 7", answer:"x = 8", choices:["x=8","x=5","x=4","x=10"], hint:"両辺×2：x+6=14 → x=8" },
      { id:"WU-3", expr:"x/4 − 1 = 2", answer:"x = 12", choices:["x=12","x=3","x=4","x=8"], hint:"両辺×4：x−4=8 → x=12" },
      { id:"WU-4", expr:"x/3 + x/3 = 4", answer:"x = 6", choices:["x=6","x=12","x=2","x=4"], hint:"2x/3=4 → 両辺×3：2x=12 → x=6" },
      { id:"WU-5", expr:"x/2 = x/3 + 1", answer:"x = 6", choices:["x=6","x=−6","x=2","x=3"], hint:"両辺×6：3x=2x+6 → x=6" },
    ],
    exercise: [
      { id:"EX-1", expr:"x/5 + 2 = 4", answer:"x = 10", choices:["x=10","x=2","x=6/5","x=30"], hint:"両辺×5：x+10=20 → x=10" },
      { id:"EX-2", expr:"x/3 − x/6 = 2", answer:"x = 12", choices:["x=12","x=6","x=4","x=36"], hint:"両辺×6：2x−x=12 → x=12" },
      { id:"EX-3", expr:"(x+1)/2 = 4", answer:"x = 7", choices:["x=7","x=9","x=3","x=6"], hint:"両辺×2：x+1=8 → x=7" },
      { id:"EX-4", expr:"(2x−1)/3 = 3", answer:"x = 5", choices:["x=5","x=4","x=8/3","x=10"], hint:"両辺×3：2x−1=9 → 2x=10 → x=5" },
      { id:"EX-5", expr:"x/2 + x/3 = 5", answer:"x = 6", choices:["x=6","x=5","x=10","x=3"], hint:"両辺×6：3x+2x=30 → 5x=30 → x=6" },
      { id:"EX-6", expr:"(x+2)/3 = (x−1)/2", answer:"x = 7", choices:["x=7","x=−7","x=1","x=4"], hint:"両辺×6：2(x+2)=3(x−1) → 2x+4=3x−3 → x=7" },
    ]
  },

  {
    id: "3-3-2",
    chapter: "Chapter 3",
    title: "小数をふくむ方程式",
    youtube: "",
    point: {
      title: "小数の方程式の解き方",
      html: `
        <p>小数をふくむ方程式は、<strong>両辺に10や100をかけて整数にしてから解く</strong>のがポイントです。</p>
        <div class="rule-box">
          <div class="rule-title">手順</div>
          <ul>
            <li>小数1桁 → 両辺×10</li>
            <li>小数2桁 → 両辺×100</li>
            <li>整数にしてから通常どおり解く</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>0.3x + 0.5 = 2</span></li>
          <li><span class="step-num">①</span><span>両辺×10：3x + 5 = 20</span></li>
          <li><span class="step-num">②</span><span>3x = 15 → x = <span class="math-highlight">5</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"0.2x = 4", answer:"x = 20", choices:["x=20","x=0.8","x=2","x=4.2"], hint:"両辺×10：2x=40 → x=20" },
      { id:"WU-2", expr:"0.5x + 1 = 3.5", answer:"x = 5", choices:["x=5","x=2.5","x=9","x=4.5"], hint:"両辺×10：5x+10=35 → 5x=25 → x=5" },
      { id:"WU-3", expr:"0.3x − 0.6 = 0.9", answer:"x = 5", choices:["x=5","x=1","x=0.1","x=10"], hint:"両辺×10：3x−6=9 → 3x=15 → x=5" },
      { id:"WU-4", expr:"0.4x = 0.2x + 1", answer:"x = 5", choices:["x=5","x=−5","x=2.5","x=10"], hint:"両辺×10：4x=2x+10 → 2x=10 → x=5" },
      { id:"WU-5", expr:"0.1x + 0.3 = 0.5x − 0.5", answer:"x = 2", choices:["x=2","x=−2","x=0.2","x=20"], hint:"両辺×10：x+3=5x−5 → −4x=−8 → x=2" },
    ],
    exercise: [
      { id:"EX-1", expr:"0.6x − 1.2 = 1.8", answer:"x = 5", choices:["x=5","x=1","x=3","x=0.5"], hint:"両辺×10：6x−12=18 → 6x=30 → x=5" },
      { id:"EX-2", expr:"0.05x + 0.1 = 0.2", answer:"x = 2", choices:["x=2","x=6","x=20","x=0.02"], hint:"両辺×100：5x+10=20 → 5x=10 → x=2" },
      { id:"EX-3", expr:"0.3x + 0.7 = 0.1x + 1.5", answer:"x = 4", choices:["x=4","x=−4","x=1.1","x=8"], hint:"両辺×10：3x+7=x+15 → 2x=8 → x=4" },
      { id:"EX-4", expr:"0.4(x − 2) = 0.8", answer:"x = 4", choices:["x=4","x=−4","x=1","x=7"], hint:"両辺×10：4(x−2)=8 → 4x=16 → x=4" },
      { id:"EX-5", expr:"1.2x − 0.5 = 0.7x + 1", answer:"x = 3", choices:["x=3","x=−3","x=0.3","x=30"], hint:"両辺×10：12x−5=7x+10 → 5x=15 → x=3" },
      { id:"EX-6", expr:"0.2x + 0.3 = 0.5", answer:"x = 1", choices:["x=1","x=4","x=−1","x=0.1"], hint:"両辺×10：2x+3=5 → 2x=2 → x=1" },
    ]
  },

  {
    id: "3-4-1",
    chapter: "Chapter 3",
    title: "文章題（個数・代金）",
    youtube: "",
    point: {
      title: "方程式を使った文章題の解き方",
      html: `
        <div class="rule-box">
          <div class="rule-title">手順</div>
          <ul>
            <li>① 求めるものを x とおく</li>
            <li>② 問題の条件から方程式を立てる</li>
            <li>③ 方程式を解く</li>
            <li>④ 答えが条件に合うか確かめる</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>1個80円のリンゴをx個買ったら560円</span></li>
          <li><span class="step-num">→</span><span>80x = 560 → x = <span class="math-highlight">7（個）</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"1本60円の鉛筆をx本買ったら300円。xは？", answer:"x = 5", choices:["x=5","x=6","x=3","x=4"], hint:"60x=300 → x=5" },
      { id:"WU-2", expr:"x円のノートを3冊買ったら390円。xは？", answer:"x = 130", choices:["x=130","x=120","x=110","x=93"], hint:"3x=390 → x=130" },
      { id:"WU-3", expr:"200円払っておつりが50円。代金は？", answer:"150円", choices:["150円","250円","200円","50円"], hint:"代金=200−50=150円" },
      { id:"WU-4", expr:"50円切手と80円切手を合わせて10枚で650円。80円切手をx枚とすると方程式は？", answer:"50(10−x)+80x=650", choices:["50x+80x=650","50(10−x)+80x=650","80x−50x=650","130x=650"], hint:"50円切手は(10−x)枚 → 50(10−x)+80x=650" },
      { id:"WU-5", expr:"上の方程式を解くと x は？", answer:"x = 5", choices:["x=3","x=5","x=7","x=10"], hint:"500−50x+80x=650 → 30x=150 → x=5" },
    ],
    exercise: [
      { id:"EX-1", expr:"120円のケーキをx個と80円のプリンを3個買ったら600円。xは？", answer:"x = 3", choices:["x=3","x=4","x=2","x=5"], hint:"120x+240=600 → 120x=360 → x=3" },
      { id:"EX-2", expr:"x円の商品を2割引きで買ったら1200円。xは？", answer:"x = 1500", choices:["x=1500","x=1440","x=960","x=1200"], hint:"0.8x=1200 → x=1500" },
      { id:"EX-3", expr:"りんごx個とみかん(x+3)個の合計が15個。りんごは何個？", answer:"x = 6", choices:["x=6","x=7","x=8","x=9"], hint:"x+(x+3)=15 → 2x=12 → x=6" },
      { id:"EX-4", expr:"大人600円、子ども400円で、大人x人と子ども5人で3800円。xは？", answer:"x = 3", choices:["x=3","x=4","x=2","x=5"], hint:"600x+2000=3800 → 600x=1800 → x=3" },
      { id:"EX-5", expr:"消しゴム8個を買い1000円払ったらおつりが200円。1個何円？", answer:"100円", choices:["100円","125円","200円","80円"], hint:"8x=800 → x=100" },
      { id:"EX-6", expr:"A班x人、B班(x+4)人で合計28人。A班は何人？", answer:"x = 12", choices:["x=12","x=14","x=16","x=10"], hint:"x+(x+4)=28 → 2x=24 → x=12" },
    ]
  },

  {
    id: "3-4-2",
    chapter: "Chapter 3",
    title: "文章題（速さ・距離・時間）",
    youtube: "",
    point: {
      title: "速さの公式と方程式",
      html: `
        <div class="rule-box">
          <div class="rule-title">速さの3公式</div>
          <ul>
            <li><span class="math-highlight">距離 = 速さ × 時間</span></li>
            <li><span class="math-highlight">速さ = 距離 ÷ 時間</span></li>
            <li><span class="math-highlight">時間 = 距離 ÷ 速さ</span></li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>時速4kmでx時間歩いて12km進んだ</span></li>
          <li><span class="step-num">→</span><span>4x = 12 → x = <span class="math-highlight">3（時間）</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"時速3kmでx時間歩いたら9km進んだ。xは？", answer:"x = 3", choices:["x=3","x=6","x=27","x=1/3"], hint:"3x=9 → x=3" },
      { id:"WU-2", expr:"xkmの道を時速6kmで歩くと2時間かかった。xは？", answer:"x = 12", choices:["x=12","x=3","x=8","x=4"], hint:"x=6×2=12" },
      { id:"WU-3", expr:"12kmの道を時速xkmで歩いたら3時間。xは？", answer:"x = 4", choices:["x=4","x=9","x=36","x=1/4"], hint:"3x=12 → x=4" },
      { id:"WU-4", expr:"分速80mでx分歩いたら1200m進んだ。xは？", answer:"x = 15", choices:["x=15","x=80","x=10","x=20"], hint:"80x=1200 → x=15" },
      { id:"WU-5", expr:"時速60kmで2時間走ったときの距離は？", answer:"120km", choices:["120km","30km","62km","100km"], hint:"距離=60×2=120km" },
    ],
    exercise: [
      { id:"EX-1", expr:"分速60mで歩くとx分、分速100mで走ると(x−6)分かかる道の距離は？", answer:"900m", choices:["900m","600m","1200m","750m"], hint:"60x=100(x−6) → 60x=100x−600 → 40x=600 → x=15 → 距離=60×15=900m" },
      { id:"EX-2", expr:"AはBより毎時2km速く、同じ4時間でAは28km進んだ。Bの速さは？", answer:"時速5km", choices:["時速5km","時速7km","時速6km","時速3km"], hint:"Aの速さ=28÷4=7km/h、Bの速さ=7−2=5km/h" },
      { id:"EX-3", expr:"xkmの道を行き時速3km、帰り時速6kmで合計3時間。xは？", answer:"x = 6", choices:["x=6","x=4","x=9","x=3"], hint:"x/3+x/6=3 → 両辺×6：2x+x=18 → x=6" },
      { id:"EX-4", expr:"姉が分速70mで出発し10分後に弟が分速90mで追いかけた。何分後に追いつく？", answer:"35分後", choices:["35分後","5分後","7分後","70分後"], hint:"90x=70(x+10) → 20x=700 → x=35" },
      { id:"EX-5", expr:"A,B間24kmを行き時速4km、帰り時速6kmで歩いた。合計何時間？", answer:"10時間", choices:["10時間","8時間","4時間","6時間"], hint:"行き：24÷4=6時間、帰り：24÷6=4時間、計10時間" },
      { id:"EX-6", expr:"A地とB地の間をxkmとする。往復の平均の速さが時速4.8kmのとき xkmを求めよ。（行き：時速4km、帰り：時速6km）", answer:"どんな距離でも4.8km/h", choices:["どんな距離でも4.8km/h","x=12km","x=24km","x=6km"], hint:"往復時間=x/4+x/6=5x/12、往復距離=2x、平均速さ=2x÷(5x/12)=24/5=4.8km/h（xに関係なく一定）" },
    ]
  },

  {
    id: "3-4-3",
    chapter: "Chapter 3",
    title: "文章題（割合・比）",
    youtube: "",
    point: {
      title: "割合・比の文章題",
      html: `
        <div class="rule-box">
          <div class="rule-title">割合の基本</div>
          <ul>
            <li>a の b% = <span class="math-highlight">a × b/100</span></li>
            <li>a 割 = <span class="math-highlight">a/10 倍</span>（3割=0.3倍）</li>
            <li>b% 増し → <span class="math-highlight">×(1 + b/100)</span></li>
            <li>b% 引き → <span class="math-highlight">×(1 − b/100)</span></li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>x円の20%引きが800円</span></li>
          <li><span class="step-num">→</span><span>0.8x = 800 → x = <span class="math-highlight">1000</span></span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"x円の10%は50円。xは？", answer:"x = 500", choices:["x=500","x=5","x=50","x=450"], hint:"0.1x=50 → x=500" },
      { id:"WU-2", expr:"x円の消費税10%込みの価格が1100円。xは？", answer:"x = 1000", choices:["x=1000","x=990","x=1100","x=1210"], hint:"1.1x=1100 → x=1000" },
      { id:"WU-3", expr:"40人のクラスの60%が女子。女子は何人？", answer:"24人", choices:["24人","16人","30人","20人"], hint:"40×0.6=24人" },
      { id:"WU-4", expr:"男女比が3:2で全体40人。男子は何人？", answer:"24人", choices:["24人","16人","20人","30人"], hint:"男子=40×3/5=24人" },
      { id:"WU-5", expr:"x円を30%引きで買ったら700円。xは？", answer:"x = 1000", choices:["x=1000","x=910","x=490","x=700"], hint:"0.7x=700 → x=1000" },
    ],
    exercise: [
      { id:"EX-1", expr:"ある数xの25%は15。xは？", answer:"x = 60", choices:["x=60","x=3.75","x=40","x=75"], hint:"0.25x=15 → x=60" },
      { id:"EX-2", expr:"先月より30%増えて260人になった。先月は何人？", answer:"200人", choices:["200人","182人","338人","230人"], hint:"1.3x=260 → x=200" },
      { id:"EX-3", expr:"男女比が5:3で女子が24人。全体は何人？", answer:"64人", choices:["64人","56人","40人","72人"], hint:"全体×3/8=24 → 全体=64人" },
      { id:"EX-4", expr:"食塩水200gに食塩xg、濃度5%。xは？", answer:"x = 10", choices:["x=10","x=5","x=40","x=20"], hint:"x/200=0.05 → x=10" },
      { id:"EX-5", expr:"A:B=3:4で合計56。Aは？", answer:"24", choices:["24","32","21","28"], hint:"A=56×3/7=24" },
      { id:"EX-6", expr:"x円の商品を2割引後に消費税10%を加えたら1760円。xは？", answer:"x = 2000", choices:["x=2000","x=1600","x=2200","x=1800"], hint:"x×0.8×1.1=1760 → 0.88x=1760 → x=2000" },
    ]
  },

  {
    id: "3-4-4",
    chapter: "Chapter 3",
    title: "文章題（年齢・整数）",
    youtube: "",
    point: {
      title: "年齢・整数の文章題",
      html: `
        <div class="rule-box">
          <div class="rule-title">よく使う表し方</div>
          <ul>
            <li>現在x歳 → n年後は <span class="math-highlight">x + n 歳</span></li>
            <li>連続する整数 → <span class="math-highlight">x, x+1, x+2</span></li>
            <li>連続する偶数（奇数） → <span class="math-highlight">x, x+2, x+4</span></li>
            <li>2桁の整数（十の位a、一の位b） → <span class="math-highlight">10a + b</span></li>
          </ul>
        </div>`
    },
    warmup: [
      { id:"WU-1", expr:"連続する2つの整数の和が25。小さい方は？", answer:"x = 12", choices:["x=12","x=13","x=11","x=10"], hint:"x+(x+1)=25 → 2x=24 → x=12" },
      { id:"WU-2", expr:"連続する3つの整数の和が24。真ん中の数は？", answer:"x = 8", choices:["x=8","x=7","x=9","x=6"], hint:"(x−1)+x+(x+1)=24 → 3x=24 → x=8" },
      { id:"WU-3", expr:"連続する2つの偶数の和が34。小さい方は？", answer:"x = 16", choices:["x=16","x=18","x=14","x=17"], hint:"x+(x+2)=34 → 2x=32 → x=16" },
      { id:"WU-4", expr:"十の位が3、一の位がxの2桁の整数は？", answer:"30 + x", choices:["30+x","3x","3+x","10x+3"], hint:"十の位3×10+一の位x = 30+x" },
      { id:"WU-5", expr:"連続する3つの奇数の和が51。最小の奇数は？", answer:"x = 15", choices:["x=15","x=17","x=13","x=19"], hint:"x+(x+2)+(x+4)=51 → 3x=45 → x=15" },
    ],
    exercise: [
      { id:"EX-1", expr:"現在、父は36歳、子は8歳。父の年齢が子の2倍になるのは何年後？", answer:"20年後", choices:["20年後","10年後","16年後","28年後"], hint:"36+x=2(8+x) → 36+x=16+2x → x=20" },
      { id:"EX-2", expr:"今年の生徒数は昨年より15人増えて345人。昨年は？", answer:"330人", choices:["330人","360人","315人","345人"], hint:"x+15=345 → x=330" },
      { id:"EX-3", expr:"兄はx歳、弟は(x−5)歳。2人の和が35。兄は何歳？", answer:"20歳", choices:["20歳","15歳","25歳","18歳"], hint:"x+(x−5)=35 → 2x=40 → x=20" },
      { id:"EX-4", expr:"連続する4つの整数の和が46。最大の整数は？", answer:"13", choices:["13","11","12","14"], hint:"x+(x+1)+(x+2)+(x+3)=46 → 4x+6=46 → x=10 → 最大=13" },
      { id:"EX-5", expr:"十の位と一の位の和が9で、入れ替えると27大きくなる2桁の整数は？", answer:"36", choices:["36","63","45","27"], hint:"十の位a、一の位b=9−a。入れ替え後−元=9(b−a)=27→b−a=3→b=6,a=3→元の数=36" },
      { id:"EX-6", expr:"現在、母は38歳、娘は10歳。母の年齢が娘の3倍になるのは何年後？", answer:"4年後", choices:["4年後","8年後","6年後","10年後"], hint:"38+x=3(10+x) → 38+x=30+3x → 8=2x → x=4" },
    ]
  },

];
