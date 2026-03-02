// =============================================
// 数学中1 第5章 平面図形 - 全単元データ
// =============================================
const CHAPTER5_UNITS = [

  {
    id: "5-1-1",
    chapter: "Chapter 5",
    title: "直線・線分・半直線",
    youtube: "",
    point: {
      title: "直線・線分・半直線の違い",
      html: `
        <div class="rule-box">
          <div class="rule-title">3つの違い</div>
          <ul>
            <li><span class="math-highlight">直線</span>：両方向に限りなく伸びる（端点なし）</li>
            <li><span class="math-highlight">線分</span>：2点を結ぶ有限の長さ（端点2つ）</li>
            <li><span class="math-highlight">半直線</span>：1点から一方向に伸びる（端点1つ）</li>
          </ul>
        </div>
        <div class="rule-box">
          <div class="rule-title">2点間の距離</div>
          <ul>
            <li>2点 A, B を結ぶ線分の長さを <span class="math-highlight">AB</span> で表す</li>
            <li>点 M が線分 AB の中点 → AM = MB = AB/2</li>
          </ul>
        </div>`
    },
    warmup: [
      { id:"WU-1", expr:"両端がなく両方向に伸びるものは？", answer:"直線", choices:["直線","線分","半直線","曲線"], hint:"端点なしで両方向 → 直線" },
      { id:"WU-2", expr:"2点A, Bを結ぶ有限の長さのものは？", answer:"線分AB", choices:["直線AB","線分AB","半直線AB","弧AB"], hint:"端点2つで有限の長さ → 線分" },
      { id:"WU-3", expr:"AB = 12cm のとき、中点Mまでの距離AMは？", answer:"6cm", choices:["6cm","12cm","3cm","24cm"], hint:"中点なのでAM = AB÷2 = 12÷2 = 6cm" },
      { id:"WU-4", expr:"点Aから出てB方向に伸びるものは？", answer:"半直線AB", choices:["直線AB","線分AB","半直線AB","線分BA"], hint:"1点から一方向 → 半直線" },
      { id:"WU-5", expr:"AM = 5cm で M が AB の中点のとき AB は？", answer:"10cm", choices:["10cm","5cm","2.5cm","15cm"], hint:"AB = AM × 2 = 5 × 2 = 10cm" },
    ],
    exercise: [
      { id:"EX-1", expr:"AB = 20cm で AM = 8cm のとき MB は？", answer:"12cm", choices:["12cm","8cm","28cm","4cm"], hint:"MB = AB − AM = 20 − 8 = 12cm" },
      { id:"EX-2", expr:"M が線分 AB の中点で AB = 18cm のとき AM は？", answer:"9cm", choices:["9cm","18cm","6cm","36cm"], hint:"AM = AB/2 = 18/2 = 9cm" },
      { id:"EX-3", expr:"直線、線分、半直線のうち長さが決まるのは？", answer:"線分のみ", choices:["直線のみ","線分のみ","半直線のみ","全部"], hint:"直線と半直線は無限に伸びるので長さが決まらない" },
      { id:"EX-4", expr:"AB = 24cm で M は中点、N は AM の中点。AN は？", answer:"6cm", choices:["6cm","12cm","8cm","4cm"], hint:"AM=12cm、AN=AM/2=6cm" },
      { id:"EX-5", expr:"2点間を結ぶ最短の線は？", answer:"線分", choices:["直線","線分","半直線","曲線"], hint:"2点間の最短経路は線分（直線上の部分）" },
      { id:"EX-6", expr:"AB = 30cm で点 P が AP:PB = 2:3 を満たすとき AP は？", answer:"12cm", choices:["12cm","18cm","6cm","15cm"], hint:"AP = 30 × 2/(2+3) = 30 × 2/5 = 12cm" },
    ]
  },

  {
    id: "5-1-2",
    chapter: "Chapter 5",
    title: "角の種類と対頂角",
    youtube: "",
    point: {
      title: "角の種類と対頂角",
      html: `
        <div class="rule-box">
          <div class="rule-title">角の種類</div>
          <ul>
            <li><span class="math-highlight">鋭角</span>：0°より大きく90°より小さい</li>
            <li><span class="math-highlight">直角</span>：90°</li>
            <li><span class="math-highlight">鈍角</span>：90°より大きく180°より小さい</li>
            <li><span class="math-highlight">平角</span>：180°</li>
          </ul>
        </div>
        <div class="rule-box">
          <div class="rule-title">対頂角</div>
          <ul>
            <li>2直線が交わるとき、向かい合う角を<strong>対頂角</strong>という</li>
            <li>対頂角は等しい</li>
          </ul>
        </div>`
    },
    warmup: [
      { id:"WU-1", expr:"75°は何角？", answer:"鋭角", choices:["鋭角","直角","鈍角","平角"], hint:"0°＜75°＜90° → 鋭角" },
      { id:"WU-2", expr:"120°は何角？", answer:"鈍角", choices:["鋭角","直角","鈍角","平角"], hint:"90°＜120°＜180° → 鈍角" },
      { id:"WU-3", expr:"2直線が交わるとき対頂角は？", answer:"等しい", choices:["等しい","補角になる","直角になる","合計360°"], hint:"対頂角は必ず等しい" },
      { id:"WU-4", expr:"一方の角が65°のとき、対頂角は？", answer:"65°", choices:["65°","115°","25°","130°"], hint:"対頂角は等しい → 65°" },
      { id:"WU-5", expr:"2直線が交わるとき、隣り合う2つの角の和は？", answer:"180°", choices:["90°","180°","270°","360°"], hint:"隣り合う角は補角（合計180°）" },
    ],
    exercise: [
      { id:"EX-1", expr:"2直線が交わり一方の角が40°。対頂角と隣の角は？", answer:"対頂角40°、隣の角140°", choices:["対頂角40°、隣の角140°","対頂角140°、隣の角40°","対頂角50°、隣の角130°","対頂角40°、隣の角40°"], hint:"対頂角=40°、隣の角=180°−40°=140°" },
      { id:"EX-2", expr:"∠a = 55° のとき対頂角 ∠b は？", answer:"55°", choices:["55°","125°","35°","110°"], hint:"対頂角は等しい → 55°" },
      { id:"EX-3", expr:"2直線が交わり4つの角のうち1つが110°。4つの角をすべて求めると？", answer:"110°, 70°, 110°, 70°", choices:["110°,70°,110°,70°","110°,110°,70°,70°（同じ）","90°,90°,90°,90°","110°,80°,110°,80°"], hint:"対頂角=110°、隣の角=70°、その対頂角=70° → 110°,70°,110°,70°" },
      { id:"EX-4", expr:"∠AOB = 3x°, ∠COD = (x+40)°で対頂角のとき x は？", answer:"20", choices:["20","10","30","40"], hint:"対頂角は等しい：3x = x+40 → 2x = 40 → x = 20" },
      { id:"EX-5", expr:"鈍角の範囲は？", answer:"90°より大きく180°より小さい", choices:["90°より大きく180°より小さい","0°より大きく90°より小さい","180°以上","90°以下"], hint:"鈍角：90°＜角度＜180°" },
      { id:"EX-6", expr:"2直線が交わるとき4つの角の和は？", answer:"360°", choices:["180°","270°","360°","90°"], hint:"4つの角の和 = 360°（一周分）" },
    ]
  },

  {
    id: "5-1-3",
    chapter: "Chapter 5",
    title: "平行線と同位角・錯角",
    youtube: "",
    point: {
      title: "平行線と角の関係",
      html: `
        <div class="rule-box">
          <div class="rule-title">平行線と1本の直線が交わるとき</div>
          <ul>
            <li><span class="math-highlight">同位角</span>：同じ側の同じ位置にある角 → 等しい</li>
            <li><span class="math-highlight">錯角</span>：直線の内側で互いに反対側にある角 → 等しい</li>
            <li><span class="math-highlight">同側内角</span>：同じ側の内側の角 → 和が180°</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">逆も成立</span><span>同位角が等しい・錯角が等しい → 2直線は平行</span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"平行線の同位角は？", answer:"等しい", choices:["等しい","補角","90°","180°"], hint:"平行線の同位角は等しい" },
      { id:"WU-2", expr:"平行線の錯角は？", answer:"等しい", choices:["等しい","補角","90°","180°"], hint:"平行線の錯角は等しい" },
      { id:"WU-3", expr:"l∥m で同位角が 70° のとき、対応する角は？", answer:"70°", choices:["70°","110°","20°","140°"], hint:"同位角は等しい → 70°" },
      { id:"WU-4", expr:"l∥m で錯角が 55° のとき、錯角の角は？", answer:"55°", choices:["55°","125°","35°","110°"], hint:"錯角は等しい → 55°" },
      { id:"WU-5", expr:"平行線の同側内角の和は？", answer:"180°", choices:["90°","180°","270°","360°"], hint:"同側内角（補角）の和は180°" },
    ],
    exercise: [
      { id:"EX-1", expr:"l∥m で一方の同側内角が 65° のとき、もう一方は？", answer:"115°", choices:["115°","65°","25°","130°"], hint:"同側内角の和=180° → 180°−65°=115°" },
      { id:"EX-2", expr:"l∥m で錯角の一方が (2x+10)°、もう一方が 70° のとき x は？", answer:"30", choices:["30","20","40","10"], hint:"錯角は等しい：2x+10=70 → 2x=60 → x=30" },
      { id:"EX-3", expr:"同位角が等しければ2直線は？", answer:"平行", choices:["平行","垂直","交差","一致"], hint:"同位角が等しい ↔ 2直線は平行（逆も成立）" },
      { id:"EX-4", expr:"l∥m で同位角の一方が (3x−15)°、もう一方が (x+45)° のとき x は？", answer:"30", choices:["30","20","15","45"], hint:"同位角は等しい：3x−15=x+45 → 2x=60 → x=30" },
      { id:"EX-5", expr:"l∥m で錯角の一方が 80°。同側内角は？", answer:"100°", choices:["100°","80°","180°","160°"], hint:"同側内角 = 180° − 錯角 = 180° − 80° = 100°" },
      { id:"EX-6", expr:"l∥m で ∠a = 50°、∠b は錯角の位置。∠b + 30° は？", answer:"80°", choices:["80°","130°","50°","180°"], hint:"∠b = 50°（錯角）→ ∠b+30° = 80°" },
    ]
  },

  {
    id: "5-1-4",
    chapter: "Chapter 5",
    title: "図形の移動（平行・回転・対称）",
    youtube: "",
    point: {
      title: "3種類の移動",
      html: `
        <div class="rule-box">
          <div class="rule-title">図形の移動</div>
          <ul>
            <li><span class="math-highlight">平行移動</span>：同じ方向に同じ距離だけ動かす（形・向き変わらず）</li>
            <li><span class="math-highlight">回転移動</span>：1点を中心に一定の角度だけ回す</li>
            <li><span class="math-highlight">対称移動</span>：1本の直線を軸に折り返す（向きが逆になる）</li>
          </ul>
        </div>
        <p style="margin-top:10px;">3つの移動すべてで図形の<strong>形と大きさは変わらない</strong>（合同）。</p>`
    },
    warmup: [
      { id:"WU-1", expr:"図形を同じ方向・同じ距離動かす移動は？", answer:"平行移動", choices:["平行移動","回転移動","対称移動","拡大移動"], hint:"方向・距離が同じ → 平行移動" },
      { id:"WU-2", expr:"1点を中心に角度で動かす移動は？", answer:"回転移動", choices:["平行移動","回転移動","対称移動","点対称"], hint:"中心点と角度で決まる → 回転移動" },
      { id:"WU-3", expr:"直線を軸に折り返す移動は？", answer:"対称移動", choices:["平行移動","回転移動","対称移動","点移動"], hint:"軸で折り返す → 対称移動（線対称）" },
      { id:"WU-4", expr:"移動後も形と大きさが変わらない。これを何という？", answer:"合同", choices:["合同","相似","対称","平行"], hint:"形・大きさ変わらず → 合同" },
      { id:"WU-5", expr:"対称移動で対応する点と軸の関係は？", answer:"軸が垂直二等分線になる", choices:["軸が垂直二等分線になる","軸が角の二等分線","軸と平行","軸上にある"], hint:"対称移動では軸が対応する2点の垂直二等分線になる" },
    ],
    exercise: [
      { id:"EX-1", expr:"平行移動で変わらないものは？", answer:"形・大きさ・向き", choices:["形・大きさ・向き","形のみ","向きのみ","位置"], hint:"平行移動は形・大きさ・向きすべて変わらない" },
      { id:"EX-2", expr:"180°の回転移動を何という？", answer:"点対称移動", choices:["点対称移動","線対称移動","平行移動","直角移動"], hint:"180°回転 = 点対称移動" },
      { id:"EX-3", expr:"対称移動で対応する2点を結ぶ線分と対称軸の関係は？", answer:"垂直に交わり中点を通る", choices:["垂直に交わり中点を通る","平行","45°で交わる","軸上にある"], hint:"対称軸は対応する2点の垂直二等分線" },
      { id:"EX-4", expr:"回転移動で対応する2点と回転の中心の距離は？", answer:"等しい", choices:["等しい","2倍","1/2","無関係"], hint:"回転移動では中心からの距離は変わらない" },
      { id:"EX-5", expr:"点A(2,3)をx軸について対称移動した点は？", answer:"(2,−3)", choices:["(2,−3)","(−2,3)","(−2,−3)","(3,2)"], hint:"x軸対称はyの符号を変える → (2,−3)" },
      { id:"EX-6", expr:"点A(2,3)を原点について180°回転した点は？", answer:"(−2,−3)", choices:["(2,−3)","(−2,3)","(−2,−3)","(3,−2)"], hint:"原点中心180°回転 = 両符号変える → (−2,−3)" },
    ]
  },

  {
    id: "5-2-1",
    chapter: "Chapter 5",
    title: "垂直二等分線の作図",
    youtube: "",
    point: {
      title: "垂直二等分線の作図手順",
      html: `
        <p><strong>垂直二等分線</strong>：線分の中点を通り、その線分に垂直な直線</p>
        <div class="rule-box">
          <div class="rule-title">作図手順（コンパスと定規）</div>
          <ul>
            <li>① 線分ABの両端A, Bを中心に、同じ半径の円を描く（半径はABの半分より大きく）</li>
            <li>② 2つの円の交点をP, Qとする</li>
            <li>③ 直線PQをひく → これが垂直二等分線</li>
          </ul>
        </div>
        <p style="margin-top:10px;">垂直二等分線上の点は、A, B からの距離が<strong>等しい</strong>。</p>`
    },
    warmup: [
      { id:"WU-1", expr:"垂直二等分線は線分のどこを通る？", answer:"中点", choices:["中点","端点","1/3の点","どこでもよい"], hint:"垂直二等分線は中点を通る" },
      { id:"WU-2", expr:"垂直二等分線と線分のなす角は？", answer:"90°", choices:["90°","45°","60°","180°"], hint:"垂直 → 90°" },
      { id:"WU-3", expr:"垂直二等分線の作図に使う道具は？", answer:"コンパスと定規", choices:["コンパスと定規","分度器と定規","定規のみ","コンパスのみ"], hint:"作図にはコンパスと定規を使う" },
      { id:"WU-4", expr:"垂直二等分線上の点Pは、A, Bからの距離がどうなる？", answer:"PA = PB", choices:["PA=PB","PA>PB","PA<PB","無関係"], hint:"垂直二等分線上の点はA,Bから等距離" },
      { id:"WU-5", expr:"AB = 8cm のとき垂直二等分線が通る点Mでは AM = ？", answer:"4cm", choices:["4cm","8cm","2cm","6cm"], hint:"中点なのでAM = 8/2 = 4cm" },
    ],
    exercise: [
      { id:"EX-1", expr:"垂直二等分線を作図するとき、コンパスの半径の条件は？", answer:"AB/2より大きければよい", choices:["AB/2より大きければよい","必ずABと同じ","必ずAB/2","何でもよい"], hint:"2つの円が交わるために AB/2 より大きい半径が必要" },
      { id:"EX-2", expr:"垂直二等分線上の点と線分の両端までの距離の関係は？", answer:"等しい", choices:["等しい","2倍","半分","無関係"], hint:"垂直二等分線上 → 両端から等距離" },
      { id:"EX-3", expr:"PA = PB = 5cm、AB = 6cm のとき P は垂直二等分線上にあるか？", answer:"ある", choices:["ある","ない","条件が足りない","ABの上にある"], hint:"PA=PBなので垂直二等分線上にある" },
      { id:"EX-4", expr:"3点A, B, Cから等距離の点は、ABとBCの垂直二等分線の何か？", answer:"交点", choices:["交点","中点","端点","重心"], hint:"各垂直二等分線上の点は等距離 → 交点が3点から等距離" },
      { id:"EX-5", expr:"垂直二等分線の「垂直」とはどういう意味？", answer:"90°で交わる", choices:["90°で交わる","平行","同じ方向","逆方向"], hint:"垂直 = 90°で交わること" },
      { id:"EX-6", expr:"線分ABの垂直二等分線上の点Pで PA = 13cm、AB = 10cm のとき PB は？", answer:"13cm", choices:["13cm","3cm","10cm","12cm"], hint:"垂直二等分線上なので PA = PB = 13cm" },
    ]
  },

  {
    id: "5-2-2",
    chapter: "Chapter 5",
    title: "角の二等分線の作図",
    youtube: "",
    point: {
      title: "角の二等分線の作図手順",
      html: `
        <p><strong>角の二等分線</strong>：角を2等分する半直線</p>
        <div class="rule-box">
          <div class="rule-title">作図手順</div>
          <ul>
            <li>① 頂点Oを中心に円を描き、2辺との交点をA, Bとする</li>
            <li>② A, Bを中心に同じ半径の円を描き、交点をCとする</li>
            <li>③ 半直線OCをひく → これが角の二等分線</li>
          </ul>
        </div>
        <p style="margin-top:10px;">角の二等分線上の点は、2辺までの距離が<strong>等しい</strong>。</p>`
    },
    warmup: [
      { id:"WU-1", expr:"角の二等分線は角をどう分ける？", answer:"2等分", choices:["2等分","3等分","4等分","直角に"], hint:"二等分 → 2つの等しい角に分ける" },
      { id:"WU-2", expr:"60°の角の二等分線で分けられる2つの角は？", answer:"各30°", choices:["各30°","各20°","各15°","各45°"], hint:"60° ÷ 2 = 30°" },
      { id:"WU-3", expr:"角の二等分線上の点は、2辺からの距離がどうなる？", answer:"等しい", choices:["等しい","2倍","半分","無関係"], hint:"角の二等分線上の点は2辺から等距離" },
      { id:"WU-4", expr:"角の二等分線の作図で最初にすることは？", answer:"頂点を中心に円を描く", choices:["頂点を中心に円を描く","2辺の中点を結ぶ","2辺に垂線を引く","分度器で計る"], hint:"①頂点中心に円→2辺との交点A,B を作る" },
      { id:"WU-5", expr:"∠AOB = 80° を二等分すると各角は？", answer:"40°", choices:["40°","80°","20°","160°"], hint:"80° ÷ 2 = 40°" },
    ],
    exercise: [
      { id:"EX-1", expr:"∠ABC = 100° の二等分線で分けられる角は？", answer:"各50°", choices:["各50°","各25°","各40°","各100°"], hint:"100° ÷ 2 = 50°" },
      { id:"EX-2", expr:"角の二等分線上の点Pから2辺への距離がPA=3cmならPB=？", answer:"3cm", choices:["3cm","6cm","1.5cm","無関係"], hint:"二等分線上なのでPA=PB=3cm" },
      { id:"EX-3", expr:"3つの角の二等分線の交点を何という？", answer:"内心", choices:["内心","外心","重心","垂心"], hint:"三角形の3つの角の二等分線の交点 = 内心" },
      { id:"EX-4", expr:"∠XOY = 120° の角を二等分したとき、一方の角は？", answer:"60°", choices:["60°","30°","90°","120°"], hint:"120° ÷ 2 = 60°" },
      { id:"EX-5", expr:"角の二等分線を作図するとき分度器は使える？", answer:"使わない（コンパスと定規のみ）", choices:["使わない（コンパスと定規のみ）","必要","どちらでもよい","分度器のみ"], hint:"作図はコンパスと目盛りなしの定規のみ使う" },
      { id:"EX-6", expr:"∠A = 70°、∠B = 80° の三角形ABCで∠Cは？", answer:"30°", choices:["30°","40°","50°","20°"], hint:"三角形の内角の和=180° → ∠C=180°−70°−80°=30°" },
    ]
  },

  {
    id: "5-3-1",
    chapter: "Chapter 5",
    title: "円と弧・弦・中心角",
    youtube: "",
    point: {
      title: "円の各部分の名称",
      html: `
        <div class="rule-box">
          <div class="rule-title">円の用語</div>
          <ul>
            <li><span class="math-highlight">弧</span>：円周の一部（弧AB）</li>
            <li><span class="math-highlight">弦</span>：円周上の2点を結ぶ線分</li>
            <li><span class="math-highlight">中心角</span>：弧の両端と中心を結ぶ角</li>
            <li><span class="math-highlight">直径</span>：中心を通る弦（最大の弦）</li>
            <li>弧の長さと中心角は<strong>比例</strong>する</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>中心角が2倍 → 弧の長さも2倍</span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"円周上の2点を結ぶ線分を何という？", answer:"弦", choices:["弦","弧","半径","直径"], hint:"円周上の2点を結ぶ線分 → 弦" },
      { id:"WU-2", expr:"円周の一部を何という？", answer:"弧", choices:["弦","弧","半径","直径"], hint:"円周の一部 → 弧" },
      { id:"WU-3", expr:"中心を通る弦を何という？", answer:"直径", choices:["半径","弦","弧","直径"], hint:"中心を通る最長の弦 → 直径" },
      { id:"WU-4", expr:"中心角が90°の弧は全円周のどれくらい？", answer:"1/4", choices:["1/4","1/2","1/3","1/6"], hint:"90° ÷ 360° = 1/4" },
      { id:"WU-5", expr:"中心角が2倍になると弧の長さは？", answer:"2倍", choices:["2倍","4倍","1/2","変わらない"], hint:"弧の長さは中心角に比例 → 2倍" },
    ],
    exercise: [
      { id:"EX-1", expr:"半径5cmの円で中心角72°の弧の長さは？（円周率π使用）", answer:"2π cm", choices:["2π cm","10π cm","π cm","5π cm"], hint:"弧=2π×5×72/360=10π×1/5=2π cm" },
      { id:"EX-2", expr:"半径6cmの円で中心角60°の弧の長さは？（π使用）", answer:"2π cm", choices:["2π cm","6π cm","12π cm","π cm"], hint:"弧=2π×6×60/360=12π/6=2π cm" },
      { id:"EX-3", expr:"円の中心角180°の弧は何？", answer:"半円の弧", choices:["半円の弧","直径","弦","全円周"], hint:"180°=360°の半分 → 半円の弧" },
      { id:"EX-4", expr:"半径4cmの円で弧の長さが円周の1/3のとき中心角は？", answer:"120°", choices:["120°","90°","60°","180°"], hint:"円周の1/3 → 中心角=360°×1/3=120°" },
      { id:"EX-5", expr:"半径3cmの円の円周の長さは？（π使用）", answer:"6π cm", choices:["6π cm","3π cm","9π cm","12π cm"], hint:"円周=2πr=2π×3=6π cm" },
      { id:"EX-6", expr:"半径rcmの円で中心角a°の弧の長さの公式は？", answer:"2πr × a/360", choices:["2πr×a/360","πr²×a/360","2πr","πr²"], hint:"弧の長さ=円周×(中心角/360°)=2πr×a/360" },
    ]
  },

  {
    id: "5-3-2",
    chapter: "Chapter 5",
    title: "扇形の弧の長さと面積",
    youtube: "",
    point: {
      title: "扇形の公式",
      html: `
        <p>半径 r、中心角 a° の扇形について：</p>
        <div class="rule-box">
          <div class="rule-title">扇形の公式</div>
          <ul>
            <li><span class="math-highlight">弧の長さ l = 2πr × a/360</span></li>
            <li><span class="math-highlight">面積 S = πr² × a/360</span></li>
            <li>または <span class="math-highlight">S = (1/2) × l × r</span>（弧と半径で面積）</li>
          </ul>
        </div>
        <ul class="steps">
          <li><span class="step-num">例</span><span>半径6cm、中心角120°の扇形</span></li>
          <li><span class="step-num">弧</span><span>l = 2π×6×120/360 = 4π cm</span></li>
          <li><span class="step-num">面積</span><span>S = π×36×120/360 = 12π cm²</span></li>
        </ul>`
    },
    warmup: [
      { id:"WU-1", expr:"半径3cm、中心角180°の扇形の弧の長さは？", answer:"3π cm", choices:["3π cm","6π cm","9π cm","π cm"], hint:"l=2π×3×180/360=6π×1/2=3π cm" },
      { id:"WU-2", expr:"半径4cm、中心角90°の扇形の面積は？", answer:"4π cm²", choices:["4π cm²","16π cm²","8π cm²","2π cm²"], hint:"S=π×16×90/360=16π×1/4=4π cm²" },
      { id:"WU-3", expr:"半径6cm、中心角60°の扇形の弧の長さは？", answer:"2π cm", choices:["2π cm","6π cm","12π cm","π cm"], hint:"l=2π×6×60/360=12π/6=2π cm" },
      { id:"WU-4", expr:"半径2cm、中心角90°の扇形の面積は？", answer:"π cm²", choices:["π cm²","4π cm²","2π cm²","8π cm²"], hint:"S=π×4×90/360=4π/4=π cm²" },
      { id:"WU-5", expr:"半径5cm、中心角72°の扇形の弧の長さは？", answer:"2π cm", choices:["2π cm","5π cm","10π cm","π cm"], hint:"l=2π×5×72/360=10π×1/5=2π cm" },
    ],
    exercise: [
      { id:"EX-1", expr:"半径9cm、中心角120°の扇形の弧の長さは？", answer:"6π cm", choices:["6π cm","9π cm","3π cm","12π cm"], hint:"l=2π×9×120/360=18π/3=6π cm" },
      { id:"EX-2", expr:"半径6cm、中心角120°の扇形の面積は？", answer:"12π cm²", choices:["12π cm²","36π cm²","6π cm²","24π cm²"], hint:"S=π×36×120/360=36π/3=12π cm²" },
      { id:"EX-3", expr:"半径8cm、中心角90°の扇形の面積は？", answer:"16π cm²", choices:["16π cm²","64π cm²","8π cm²","32π cm²"], hint:"S=π×64×90/360=64π/4=16π cm²" },
      { id:"EX-4", expr:"半径10cm、中心角36°の扇形の弧の長さは？", answer:"2π cm", choices:["2π cm","10π cm","20π cm","π cm"], hint:"l=2π×10×36/360=20π/10=2π cm" },
      { id:"EX-5", expr:"弧の長さ4π cm、半径6cmの扇形の面積は？", answer:"12π cm²", choices:["12π cm²","24π cm²","6π cm²","8π cm²"], hint:"S=(1/2)×l×r=(1/2)×4π×6=12π cm²" },
      { id:"EX-6", expr:"半径6cm、中心角240°の扇形の面積は？", answer:"24π cm²", choices:["24π cm²","36π cm²","12π cm²","48π cm²"], hint:"S=π×36×240/360=36π×2/3=24π cm²" },
    ]
  },

  {
    id: "5-3-3",
    chapter: "Chapter 5",
    title: "複合図形の面積",
    youtube: "",
    point: {
      title: "複合図形の面積の求め方",
      html: `
        <div class="rule-box">
          <div class="rule-title">考え方</div>
          <ul>
            <li>大きい図形から小さい図形を引く</li>
            <li>いくつかの図形に分けて足す</li>
            <li>円・扇形・三角形・長方形の公式を組み合わせる</li>
          </ul>
        </div>
        <div class="rule-box">
          <div class="rule-title">基本公式まとめ</div>
          <ul>
            <li>円の面積：<span class="math-highlight">πr²</span></li>
            <li>三角形：<span class="math-highlight">底辺×高さ÷2</span></li>
            <li>長方形：<span class="math-highlight">縦×横</span></li>
            <li>扇形：<span class="math-highlight">πr²×a/360</span></li>
          </ul>
        </div>`
    },
    warmup: [
      { id:"WU-1", expr:"半径4cmの円の面積は？", answer:"16π cm²", choices:["16π cm²","8π cm²","4π cm²","32π cm²"], hint:"πr²=π×4²=16π cm²" },
      { id:"WU-2", expr:"底辺6cm、高さ4cmの三角形の面積は？", answer:"12 cm²", choices:["12 cm²","24 cm²","10 cm²","8 cm²"], hint:"6×4÷2=12 cm²" },
      { id:"WU-3", expr:"1辺10cmの正方形から半径5cmの円をくりぬいた面積は？", answer:"(100−25π) cm²", choices:["(100−25π) cm²","(100−5π) cm²","75 cm²","(100+25π) cm²"], hint:"100−π×5²=100−25π cm²" },
      { id:"WU-4", expr:"半径6cmの半円の面積は？", answer:"18π cm²", choices:["18π cm²","36π cm²","12π cm²","9π cm²"], hint:"πr²÷2=π×36÷2=18π cm²" },
      { id:"WU-5", expr:"縦3cm、横5cmの長方形の面積は？", answer:"15 cm²", choices:["15 cm²","16 cm²","8 cm²","30 cm²"], hint:"3×5=15 cm²" },
    ],
    exercise: [
      { id:"EX-1", expr:"半径10cmの円から半径5cmの円をくりぬいた面積は？", answer:"75π cm²", choices:["75π cm²","50π cm²","25π cm²","100π cm²"], hint:"π×10²−π×5²=100π−25π=75π cm²" },
      { id:"EX-2", expr:"1辺8cmの正方形に内接する円の面積は？（円の直径=正方形の1辺）", answer:"16π cm²", choices:["16π cm²","64π cm²","8π cm²","32π cm²"], hint:"円の半径=4cm → π×4²=16π cm²" },
      { id:"EX-3", expr:"縦6cm、横8cmの長方形と、底辺8cm、高さ3cmの三角形を合わせた面積は？", answer:"60 cm²", choices:["60 cm²","48 cm²","72 cm²","36 cm²"], hint:"6×8+8×3÷2=48+12=60 cm²" },
      { id:"EX-4", expr:"半径6cmの円から中心角60°の扇形をくりぬいた面積は？", answer:"30π cm²", choices:["30π cm²","36π cm²","6π cm²","24π cm²"], hint:"π×36−π×36×60/360=36π−6π=30π cm²" },
      { id:"EX-5", expr:"半径4cmの半円と底辺8cm、高さ4cmの三角形を合わせた面積は？", answer:"(8π+16) cm²", choices:["(8π+16) cm²","(16π+16) cm²","(8π+32) cm²","24π cm²"], hint:"半円=π×16/2=8π、三角形=8×4÷2=16 → 8π+16 cm²" },
      { id:"EX-6", expr:"半径5cmの円と半径3cmの円が外接するとき、2つの円の面積の和は？", answer:"34π cm²", choices:["34π cm²","64π cm²","16π cm²","25π cm²"], hint:"π×5²+π×3²=25π+9π=34π cm²" },
    ]
  },

];
