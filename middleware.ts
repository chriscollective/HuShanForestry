import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/i18n';

export default createMiddleware({
  // 支援的語言列表
  locales,

  // 預設語言
  defaultLocale,

  // 總是顯示語言前綴（例如：/zh-TW, /en, /ja）
  localePrefix: 'always'
});

export const config = {
  // 排除不需要處理的路徑
  matcher: [
    // 排除內部路徑和靜態檔案
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ]
};
