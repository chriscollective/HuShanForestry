export const categories = [
  { id: "all", label: "全部" },
  { id: "event", label: "活動" },
  { id: "service", label: "服務" },
  { id: "news", label: "新聞" },
  { id: "recruit", label: "招募" },
  { id: "operation", label: "營運" },
  { id: "other", label: "其他" },
] as const;

export const newsItems = [
  {
    id: "n-001",
    title: "虎山林業參與林業科技展，展示智慧集材方案",
    category: "news" as const,
    date: "2024-11-05",
    image: "/images/hero/woods01.jpg",
    content: "虎山林業於 2024 年 11 月 5 日參與台灣林業科技展，展示最新的智慧集材解決方案。我們的團隊展出了結合 GPS 定位、無人機空拍與 AI 路徑規劃的智慧集材系統，大幅提升作業效率並降低對森林環境的衝擊。展覽期間吸引了眾多林業從業人員與政府機關的關注，並獲得正面迴響。虎山林業持續致力於將科技融入傳統林業，為台灣森林永續經營貢獻心力。",
  },
  {
    id: "n-002",
    title: "2024 鏈鋸教育訓練冬季梯次報名開跑",
    category: "event" as const,
    date: "2024-10-28",
    image: "/images/hero/woods02.jpg",
    content: "虎山林業 2024 年冬季鏈鋸教育訓練梯次正式開放報名！本次課程包含鏈鋸基礎操作、安全防護、樹木伐倒技巧與維護保養等完整內容。課程由經驗豐富的專業講師授課，採小班制教學，確保每位學員都能獲得充分的實作機會。訓練地點位於南投山區實習場地，提供最貼近實務的學習環境。名額有限，歡迎對林業工作有興趣的朋友把握機會報名參加。",
  },
  {
    id: "n-003",
    title: "誠徵森林工程師，加入虎山林業專業團隊",
    category: "recruit" as const,
    date: "2024-10-12",
    image: "/images/hero/woods03.jpg",
    content: "虎山林業誠徵熱愛森林、具備專業技能的森林工程師。我們需要的人才包括：熟悉森林作業規劃、具備鏈鋸操作證照、對永續林業有熱忱者。我們提供具競爭力的薪資、完整的教育訓練、以及與一群志同道合夥伴共事的機會。虎山林業成立於 2022 年，由六位熱愛森林的青年創立，致力於推動台灣林業現代化與永續發展。如果你也想為台灣森林盡一份心力，歡迎加入我們的團隊。",
  },
  {
    id: "n-004",
    title: "引進全新伐採監控服務，守護森林更即時",
    category: "service" as const,
    date: "2024-09-20",
    image: "/images/hero/woods04.jpg",
    content: "虎山林業正式推出伐採監控服務，透過即時影像監控系統與數據分析平台，讓森林主能夠遠端掌握伐採作業進度與現場狀況。這套系統結合了 4G 網路攝影機、雲端儲存與智慧分析技術，不僅提升作業透明度，更能及時發現潛在問題，確保作業安全與品質。此服務特別適合無法經常到場監督的森林主，讓您即使在辦公室也能安心掌握林地狀況。歡迎聯絡我們了解更多服務細節。",
  },
  {
    id: "n-005",
    title: "營運報告：2024 Q3 達成木材回收率提升 12%",
    category: "operation" as const,
    date: "2024-09-01",
    image: "/images/hero/woods05.jpg",
    content: "虎山林業 2024 年第三季營運報告出爐！透過優化作業流程與引進新式集材設備，我們成功將木材回收率提升 12%，大幅減少林木資源浪費。同時，我們也持續投資員工訓練與安全設備，本季零工安事故，展現我們對安全的重視。未來我們將持續精進技術、提升服務品質，為客戶創造更大價值。感謝所有支持虎山林業的夥伴與客戶，讓我們一起為台灣林業的永續發展努力。",
  },
] as const;

export const categoryLabelMap = categories.reduce<Record<string, string>>(
  (acc, category) => {
    acc[category.id] = category.label;
    return acc;
  },
  {}
);
