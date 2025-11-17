export const siteConfig = {
  name: "虎山林業",
  description: "來自台灣各地集結了六位熱愛森林的青年，正在努力推廣台灣林業的發展。Since 2022, From Taiwan",
  url: "https://hushanforestry.com", // TODO: 待確認網域
  foundingYear: 2022,
  socialLinks: [
    {
      platform: "facebook" as const,
      url: "https://www.facebook.com/HUSHANForestry/",
      icon: "/icons/facebook.svg",
      ariaLabel: "前往 Facebook 粉絲專頁",
    },
    {
      platform: "instagram" as const,
      url: "https://www.instagram.com/hu_shan_tw/",
      icon: "/icons/instagram.svg",
      ariaLabel: "前往 Instagram 帳號",
    },
    {
      platform: "youtube" as const,
      url: "https://www.youtube.com/@虎山林業",
      icon: "/icons/youtube.svg",
      ariaLabel: "前往 YouTube 頻道",
    },
  ],
} as const;
