import { NavigationItem } from "@/types/navigation";

/**
 * 導航項目配置
 *
 * 注意：label 和 ariaLabel 使用翻譯 key，需要在 messages/{locale}.json 中定義
 * 實際顯示的文字會根據當前語言從 'nav' 命名空間中獲取
 */
export const navigationItems: NavigationItem[] = [
  {
    label: "home",  // 使用翻譯 key
    href: "/",
    ariaLabel: "ariaHome",
  },
  {
    label: "news",
    href: "/news",
    ariaLabel: "ariaNews",
  },
  {
    label: "about",
    ariaLabel: "ariaAbout",
    subItems: [
      {
        label: "aboutCompany",
        href: "/about",
        ariaLabel: "ariaAboutCompany",
      },
      {
        label: "equipment",
        href: "/equipment",
        ariaLabel: "ariaEquipment",
      },
    ],
  },
  {
    label: "services",
    ariaLabel: "ariaServices",
    subItems: [
      {
        label: "forestryServices",
        href: "/services",
        ariaLabel: "ariaForestryServices",
      },
      {
        label: "education",
        href: "/education",
        ariaLabel: "ariaEducation",
      },
    ],
  },
];
