// 本檔案必須命名為 proxy.ts，不可改回 middleware.ts。
//
// Next.js 16 起 middleware 更名為 proxy，且 proxy 預設在 Node.js runtime 執行；
// 沿用舊的 middleware.ts 檔名會走相容模式、仍在 Edge Runtime 執行，
// 而 next-intl 的相依在 Edge 下會拋出 ReferenceError: __dirname is not defined，
// 導致線上全站 500（本機 next start 以 Node 模擬 Edge，不會重現此問題）。

import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './locales';

export default createMiddleware({
  // 支援的語言列表
  locales,

  // 預設語言
  defaultLocale,

  // 當訪問根路徑時，使用 'as-needed' 讓預設語言可以不帶前綴
  // 或使用 'always' 但會自動重定向到 /zh-TW
  localePrefix: 'as-needed'
});

export const config = {
  // 排除不需要處理的路徑
  matcher: [
    // 排除內部路徑和靜態檔案
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ]
};
