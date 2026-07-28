import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, type Locale } from './locales';

// 注意：本檔案含 server-only 相依（next-intl/server），
// 僅供 next-intl plugin 於伺服器端載入。
// middleware 與客戶端元件請改引入 src/locales.ts 取得語系常數。

export default getRequestConfig(async ({ requestLocale }) => {
  // 在 Next.js 15+，需要等待 requestLocale
  let locale = await requestLocale;

  // 如果沒有 locale，使用預設值
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
