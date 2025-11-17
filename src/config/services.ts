import { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "forest-harvest",
    title: "森林收穫",
    description: "專業伐木、架線集材、運輸整堆服務，確保森林資源永續利用",
    image: "/images/services/forest-harvest.jpg", // TODO: 待替換真實圖片
    imageAlt: "森林收穫服務 - 專業伐木與集材作業",
    link: "/services/forest-harvest",
  },
  {
    id: "timber-trade",
    title: "原木買賣",
    description: "提供優質原木買賣服務，多種木材規格滿足您的需求",
    image: "/images/services/timber-trade.jpg", // TODO: 待替換真實圖片
    imageAlt: "原木買賣服務 - 多種木材規格供應",
    link: "/services/timber-trade",
  },
  {
    id: "forest-planning",
    title: "森林經營規劃",
    description: "專業森林經營與伐採收穫規劃，協助您的森林永續發展",
    image: "/images/services/forest-planning.jpg", // TODO: 待替換真實圖片
    imageAlt: "森林經營規劃服務 - 專業規劃與諮詢",
    link: "/services/forest-planning",
  },
  {
    id: "chainsaw-training",
    title: "鏈鋸教育訓練",
    description: "專業鏈鋸操作訓練課程，安全、實用、取得證照",
    image: "/images/services/chainsaw-training.jpg", // TODO: 待替換真實圖片
    imageAlt: "鏈鋸教育訓練 - 專業安全操作課程",
    link: "/services/chainsaw-training",
  },
];
