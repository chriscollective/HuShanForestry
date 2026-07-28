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
  // 排除不需要處理的路徑
  matcher: [
    // 排除內部路徑和靜態檔案
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ]
};
