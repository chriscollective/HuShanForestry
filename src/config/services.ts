import { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "forest-harvest",
    title: "森林收穫",
    description: "專業伐木、架線集材、運輸整堆服務，確保森林資源永續利用。採用現代化設備與科學化管理，兼顧作業效率與環境保護。",
    image: "/images/services/forest-harvest.jpg", // TODO: 待替換真實圖片
    imageAlt: "森林收穫服務 - 專業伐木與集材作業",
    link: "/services/forest-harvest",
    icon: "🌲",
    category: "核心服務",
    features: [
      "專業伐木作業",
      "架線集材技術",
      "運輸整堆服務",
      "安全作業管理"
    ]
  },
  {
    id: "timber-trade",
    title: "原木買賣",
    description: "提供優質原木買賣服務，多種木材規格滿足您的需求。從採購、品質把關到配送，一站式服務讓您省心省力。",
    image: "/images/services/timber-trade.jpg", // TODO: 待替換真實圖片
    imageAlt: "原木買賣服務 - 多種木材規格供應",
    link: "/services/timber-trade",
    icon: "📦",
    category: "交易服務",
    features: [
      "多種木材規格",
      "品質嚴格把關",
      "價格公開透明",
      "配送服務完善"
    ]
  },
  {
    id: "forest-planning",
    title: "森林經營規劃",
    description: "專業森林經營與伐採收穫規劃，協助您的森林永續發展。結合生態保育與經濟效益，打造最適合的經營策略。",
    image: "/images/services/forest-planning.jpg", // TODO: 待替換真實圖片
    imageAlt: "森林經營規劃服務 - 專業規劃與諮詢",
    link: "/services/forest-planning",
    icon: "📋",
    category: "顧問服務",
    features: [
      "森林資源調查",
      "經營規劃設計",
      "伐採計畫擬定",
      "生態保育評估"
    ]
  },
  {
    id: "chainsaw-training",
    title: "鏈鋸教育訓練",
    description: "專業鏈鋸操作訓練課程，安全、實用、取得證照。由經驗豐富的講師授課，理論與實務並重，培養專業林業人才。",
    image: "/images/services/chainsaw-training.jpg", // TODO: 待替換真實圖片
    imageAlt: "鏈鋸教育訓練 - 專業安全操作課程",
    link: "/services/chainsaw-training",
    icon: "🎓",
    category: "教育訓練",
    features: [
      "專業講師授課",
      "實務操作訓練",
      "安全認證課程",
      "小班制教學"
    ]
  },
];

type ServicesTranslator = ((key: string, values?: Record<string, unknown>) => string) & {
  raw?: (key: string) => unknown;
};

const serviceTranslationKeyMap: Record<string, string> = {
  "forest-harvest": "items.forestHarvest",
  "timber-trade": "items.timberTrade",
  "forest-planning": "items.forestPlanning",
  "chainsaw-training": "items.chainsawTraining",
};

export const getLocalizedServices = (t: ServicesTranslator): Service[] =>
  services.map((service) => {
    const translationKey = serviceTranslationKeyMap[service.id];

    if (!translationKey) {
      return service;
    }

    const features = (t.raw?.(`${translationKey}.features`) as string[] | undefined) ?? service.features;

    return {
      ...service,
      title: t(`${translationKey}.title`),
      description: t(`${translationKey}.description`),
      imageAlt: t(`${translationKey}.imageAlt`),
      category: t(`${translationKey}.category`),
      features,
    };
  });
