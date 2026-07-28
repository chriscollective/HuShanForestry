/**
 * About 頁面配置
 * 包含公司介紹、願景、目標等資訊
 */

export const aboutConfig = {
  // 公司簡介
  introduction: {
    title: "關於虎山林業",
    subtitle: "來自台灣各地的六位熱愛森林的青年",
    description: [
      "虎山林業成立於 2022 年，由六位來自台灣各地、熱愛森林的青年所創立。我們深信台灣擁有豐富的森林資源，而永續經營是林業發展的核心價值。",
      "團隊成員具備專業的林業知識與豐富的實務經驗，從森林收穫、原木買賣到森林經營規劃，我們致力於提供最完整的林業解決方案。透過科學化的管理方法與現代化的設備，我們不僅重視經濟效益，更關注生態保育與環境永續。",
      "我們相信，林業不只是砍伐木材，更是與自然共生的藝術。每一次的作業，都是對森林的承諾；每一個決策，都是為下一代留下更好的山林。"
    ],
    stats: [
      {
        value: "2022",
        label: "創立年份",
        description: "Since 2022"
      },
      {
        value: "6",
        label: "核心團隊",
        description: "位熱愛森林的青年"
      },
      {
        value: "100+",
        label: "完成專案",
        description: "累積服務案例"
      },
      {
        value: "1000+",
        label: "服務面積",
        description: "公頃森林經營"
      }
    ]
  },

  // 願景
  vision: {
    title: "我們的願景",
    subtitle: "打造台灣林業的永續未來",
    items: [
      {
        id: "sustainable-forestry",
        icon: "🌲",
        title: "永續林業經營",
        description: "推動科學化的森林經營模式，平衡經濟發展與生態保育，確保森林資源能夠世代相傳，讓台灣的山林永續發展。"
      },
      {
        id: "professional-service",
        icon: "⚡",
        title: "專業服務品質",
        description: "持續提升團隊專業能力，引進先進設備與技術，為客戶提供最高品質的林業服務，成為業界的標竿企業。"
      },
      {
        id: "industry-innovation",
        icon: "💡",
        title: "產業創新發展",
        description: "結合傳統智慧與現代科技，推動台灣林業轉型升級，培育新世代林業人才，為產業注入創新活力。"
      },
      {
        id: "ecological-harmony",
        icon: "🌿",
        title: "生態和諧共生",
        description: "重視生物多樣性保護，在林業作業中融入生態考量，實現人與自然的和諧共存，守護台灣珍貴的森林生態系統。"
      }
    ]
  },

  // 核心目標
  goals: {
    title: "核心目標",
    subtitle: "我們致力實現的具體行動",
    items: [
      {
        id: "safety-first",
        number: "01",
        title: "安全第一",
        description: "建立完善的安全作業標準，確保每位工作人員都能在安全的環境下作業。定期舉辦安全教育訓練，降低職業災害發生率，實現零事故目標。",
        highlights: [
          "完善的安全作業 SOP",
          "定期安全教育訓練",
          "現代化安全防護裝備",
          "即時風險評估機制"
        ]
      },
      {
        id: "quality-assurance",
        number: "02",
        title: "品質保證",
        description: "嚴格把關每個作業環節，從規劃、執行到驗收，確保服務品質符合客戶期待。運用科學化管理工具，持續優化作業流程，提供最佳解決方案。",
        highlights: [
          "標準化作業流程",
          "品質檢核機制",
          "客戶滿意度追蹤",
          "持續改善計畫"
        ]
      },
      {
        id: "environmental-responsibility",
        number: "03",
        title: "環境責任",
        description: "在所有林業作業中納入環境影響評估，採用低衝擊的作業方式，保護水土資源與野生動植物棲地，實踐企業的環境社會責任。",
        highlights: [
          "環境影響評估",
          "低衝擊作業技術",
          "生態保育措施",
          "碳足跡管理"
        ]
      },
      {
        id: "knowledge-sharing",
        number: "04",
        title: "知識傳承",
        description: "透過鏈鋸教育訓練課程與林業知識分享，培育新世代林業人才。記錄並傳承傳統林業智慧，結合現代科技，推動產業知識升級。",
        highlights: [
          "專業教育訓練課程",
          "實務經驗分享",
          "產學合作計畫",
          "數位知識庫建置"
        ]
      },
      {
        id: "community-partnership",
        number: "05",
        title: "社區夥伴",
        description: "與在地社區建立長期合作關係，創造在地就業機會，促進山村經濟發展。尊重原住民族傳統領域，共同守護珍貴的森林資源。",
        highlights: [
          "在地雇用優先",
          "社區合作計畫",
          "原民文化尊重",
          "區域經濟貢獻"
        ]
      }
    ]
  },

  // 團隊價值觀
  values: {
    title: "團隊價值觀",
    items: [
      {
        label: "專業",
        description: "持續精進專業能力"
      },
      {
        label: "誠信",
        description: "誠實面對每個承諾"
      },
      {
        label: "熱情",
        description: "熱愛森林與林業工作"
      },
      {
        label: "創新",
        description: "勇於嘗試新方法"
      },
      {
        label: "永續",
        description: "為下一代守護山林"
      }
    ]
  }
} as const;
