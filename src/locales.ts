// 語系常數集中於此。
//
// 此檔案刻意不引入 next-intl/server、next/navigation 等 server-only 模組——
// middleware 與客戶端元件都會載入這些常數，一旦混入 server-only 相依，
// 就會被打包進 Edge Runtime 與瀏覽器 bundle，
// 在 Vercel 上造成 ReferenceError: __dirname is not defined。
//
// 需要 request config 的地方請引入 src/i18n.ts，不要反向依賴。

// 支援的語言列表
export const locales = ['zh-TW', 'en', 'ja'] as const;
export type Locale = (typeof locales)[number];

// 預設語言
export const defaultLocale: Locale = 'zh-TW';
