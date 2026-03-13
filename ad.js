/**
 * ad.js - 広告管理ファイル
 * =============================
 * このファイルだけ編集すれば、全ページの広告が一括で変わります！
 *
 * 【使い方】
 * 各HTMLページに以下の2行を追加するだけ：
 *   <div id="ad-space"></div>          ← 上部広告（アフィリ）
 *   <div id="ad-space-bottom"></div>   ← 下部広告（Amazonアフィ）
 *   <script src="ad.js"></script>
 */

// ============================================================
// ① 上部広告（アフィリエイト）- 全ページ共通
//    ここを変えると全ページの上部広告が一括で変わる
// ============================================================
const TOP_AD_HTML = `
  <div style="text-align:center; padding:10px; background:#FFF3CD; border-top:2px dashed #FFD700; border-bottom:2px dashed #FFD700;">
    <a href="ここにアフィリンクを入れる" target="_blank" rel="noopener">
      <!-- バナー画像の場合: <img src="バナーURL" alt="広告" style="max-width:100%; height:auto;"> -->
      <span style="font-size:0.85rem; font-weight:700; color:#B45309;">📢 広告スペース（アフィリエイト）</span>
    </a>
  </div>
`;

// ============================================================
// ② 下部広告（Amazonアフィ）- ページごとに自動切り替え
//    URLに含まれるキーワードで判定します
// ============================================================

// 【設定エリア】各ページの広告をここで管理
const AD_BOOKS = {

  // --- 中1 数学 ---
  math1: {
    title: "📚 中1数学のおすすめ教材",
    books: [
      { emoji: "📘", name: "中1数学<br>問題集", url: "https://amzn.to/xxxxx1" },
      { emoji: "📗", name: "中1数学<br>参考書", url: "https://amzn.to/xxxxx2" },
      { emoji: "✏️", name: "数学ノート<br>セット",  url: "https://amzn.to/xxxxx3" },
    ]
  },

  // --- 中2 数学 ---
  math2: {
    title: "📚 中2数学のおすすめ教材",
    books: [
      { emoji: "📘", name: "中2数学<br>問題集", url: "https://amzn.to/xxxxx4" },
      { emoji: "📗", name: "中2数学<br>参考書", url: "https://amzn.to/xxxxx5" },
      { emoji: "✏️", name: "数学ノート<br>セット",  url: "https://amzn.to/xxxxx3" },
    ]
  },

  // --- 中3 数学 ---
  math3: {
    title: "📚 中3数学のおすすめ教材",
    books: [
      { emoji: "📘", name: "中3数学<br>問題集", url: "https://amzn.to/xxxxx6" },
      { emoji: "📗", name: "高校入試<br>数学対策", url: "https://amzn.to/xxxxx7" },
      { emoji: "✏️", name: "数学ノート<br>セット",  url: "https://amzn.to/xxxxx3" },
    ]
  },

  // --- 中1 英語 ---
  english1: {
    title: "📚 中1英語のおすすめ教材",
    books: [
      { emoji: "📙", name: "中1英語<br>問題集", url: "https://amzn.to/xxxxx8" },
      { emoji: "📗", name: "英単語帳<br>中学版",   url: "https://amzn.to/xxxxx9" },
      { emoji: "🎧", name: "英語リスニング<br>教材", url: "https://amzn.to/xxxxxa" },
    ]
  },

  // --- 中2 英語 ---
  english2: {
    title: "📚 中2英語のおすすめ教材",
    books: [
      { emoji: "📙", name: "中2英語<br>問題集", url: "https://amzn.to/xxxxxb" },
      { emoji: "📗", name: "英単語帳<br>中学版",   url: "https://amzn.to/xxxxx9" },
      { emoji: "🎧", name: "英語リスニング<br>教材", url: "https://amzn.to/xxxxxa" },
    ]
  },

  // --- 中3 英語 ---
  english3: {
    title: "📚 中3英語のおすすめ教材",
    books: [
      { emoji: "📙", name: "中3英語<br>問題集", url: "https://amzn.to/xxxxxc" },
      { emoji: "📗", name: "高校入試<br>英語対策", url: "https://amzn.to/xxxxxd" },
      { emoji: "🎧", name: "英語リスニング<br>教材", url: "https://amzn.to/xxxxxa" },
    ]
  },

  // --- 中1 国語 ---
  japanese1: {
    title: "📚 中1国語のおすすめ教材",
    books: [
      { emoji: "📖", name: "中1国語<br>問題集", url: "https://amzn.to/xxxxxe" },
      { emoji: "📝", name: "漢字練習帳<br>中学版", url: "https://amzn.to/xxxxxf" },
    ]
  },

  // --- 中1 理科 ---
  science1: {
    title: "📚 中1理科のおすすめ教材",
    books: [
      { emoji: "🔬", name: "中1理科<br>問題集", url: "https://amzn.to/xxxxxg" },
      { emoji: "🧪", name: "理科実験<br>図解本",  url: "https://amzn.to/xxxxxh" },
    ]
  },

  // --- 中1 社会 ---
  social1: {
    title: "📚 中1社会のおすすめ教材",
    books: [
      { emoji: "🌏", name: "中1社会<br>問題集", url: "https://amzn.to/xxxxxi" },
      { emoji: "🗺️", name: "地図帳<br>中学版",   url: "https://amzn.to/xxxxxj" },
    ]
  },

  // --- デフォルト（TOPページ・その他） ---
  default: {
    title: "📚 おすすめ教材",
    books: [
      { emoji: "📘", name: "中学数学<br>問題集", url: "https://amzn.to/xxxxx1" },
      { emoji: "📙", name: "中学英語<br>問題集", url: "https://amzn.to/xxxxx8" },
      { emoji: "📖", name: "中学国語<br>問題集", url: "https://amzn.to/xxxxxe" },
      { emoji: "✏️", name: "文具<br>セット",     url: "https://amzn.to/xxxxx3" },
    ]
  }
};

// ============================================================
// ③ ページ判定ロジック（触らなくてOK）
// ============================================================
function detectPage() {
  const url = window.location.href.toLowerCase();
  if      (url.includes('math1'))     return 'math1';
  else if (url.includes('math2'))     return 'math2';
  else if (url.includes('math3'))     return 'math3';
  else if (url.includes('english1'))  return 'english1';
  else if (url.includes('english2'))  return 'english2';
  else if (url.includes('english3'))  return 'english3';
  else if (url.includes('japanese1')) return 'japanese1';
  else if (url.includes('japanese2')) return 'japanese2';
  else if (url.includes('japanese3')) return 'japanese3';
  else if (url.includes('science1'))  return 'science1';
  else if (url.includes('science2'))  return 'science2';
  else if (url.includes('science3'))  return 'science3';
  else if (url.includes('social1'))   return 'social1';
  else if (url.includes('social2'))   return 'social2';
  else if (url.includes('social3'))   return 'social3';
  else return 'default';
}

function buildBottomAd(data) {
  const books = data.books.map(b => `
    <a href="${b.url}" target="_blank" rel="noopener" style="
      background:white; border-radius:14px; padding:14px 12px;
      text-align:center; text-decoration:none; color:#1E293B;
      box-shadow:0 3px 12px rgba(0,0,0,0.08); width:90px;
      border:2px solid #FDE68A; display:inline-block; margin:4px;
      transition:transform 0.2s;
    " onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
      <div style="font-size:2rem; margin-bottom:6px;">${b.emoji}</div>
      <div style="font-size:0.7rem; font-weight:700; line-height:1.4; color:#475569;">${b.name}</div>
    </a>
  `).join('');

  return `
    <div style="background:#FFFBEB; border-top:3px solid #FFD700; padding:28px 20px; text-align:center;">
      <p style="font-size:1rem; font-weight:900; color:#1E293B; margin-bottom:16px;">${data.title}</p>
      <div style="display:flex; justify-content:center; gap:8px; flex-wrap:wrap;">${books}</div>
      <p style="font-size:0.65rem; color:#94A3B8; margin-top:12px;">※ Amazonアソシエイトリンク</p>
    </div>
  `;
}

// ============================================================
// ④ 実行（ページ読み込み時に自動で差し込む）
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // 上部広告
  const topEl = document.getElementById('ad-space');
  if (topEl) topEl.innerHTML = TOP_AD_HTML;

  // 下部広告（ページ自動判定）
  const bottomEl = document.getElementById('ad-space-bottom');
  if (bottomEl) {
    const pageKey = detectPage();
    const adData = AD_BOOKS[pageKey] || AD_BOOKS['default'];
    bottomEl.innerHTML = buildBottomAd(adData);
  }
});
