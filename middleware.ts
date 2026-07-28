// 本檔案必須命名為 middleware.ts，不可改用 Next.js 16 的新慣例 proxy.ts。
//
// 實測 Next 16.1.1 與 16.2.12 皆有相同缺陷：使用 src/proxy.ts 時，
// 建置路由表雖顯示 ƒ Proxy (Middleware)，但 middleware-manifest.json
// 產出為空（middleware: {}），Vercel 因而拿到指向不存在函式的路由設定，
// 導致線上全站 404（連 /favicon.ico 等靜態資源亦然）。
//
// 沿用 middleware.ts 可正確產出 manifest，但預設在 Edge Runtime 執行，
// 而 next-intl 的相依在 Edge 下需要 __dirname，會拋出
// ReferenceError 造成 MIDDLEWARE_INVOCATION_FAILED。
// 故下方以 runtime: 'nodejs'（Next 15.5+ 穩定支援）改在 Node.js 執行。

import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/locales';

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
  // 不可加入 runtime 設定：Next 16 將 middleware 視為 proxy，
  // 而 proxy 不接受 runtime 選項，加了會導致 middleware 完全不被偵測。

  // 排除不需要處理的路徑
  matcher: [
    // 排除內部路徑和靜態檔案
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ]
};
