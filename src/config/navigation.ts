import { NavigationItem } from "@/types/navigation";

export const navigationItems: NavigationItem[] = [
  {
    label: "首頁",
    href: "/",
    ariaLabel: "前往首頁",
  },
  {
    label: "最新消息",
    href: "/news",
    ariaLabel: "前往最新消息頁面",
  },
  {
    label: "關於我們",
    ariaLabel: "關於虎山林業",
    subItems: [
      {
        label: "公司情報",
        href: "/about",
        ariaLabel: "了解虎山林業公司情報",
      },
      {
        label: "機具展示",
        href: "/equipment",
        ariaLabel: "查看林業機具設備",
      },
    ],
  },
  {
    label: "服務項目",
    ariaLabel: "查看服務項目",
    subItems: [
      {
        label: "林業服務",
        href: "/services",
        ariaLabel: "查看林業服務項目",
      },
      {
        label: "教育活動",
        href: "/education",
        ariaLabel: "查看教育活動與訓練課程",
      },
    ],
  },
];
