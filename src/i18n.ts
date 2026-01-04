import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// 支援的語言列表
export const locales = ['zh-TW', 'en', 'ja'] as const;
export type Locale = (typeof locales)[number];

// 預設語言
export const defaultLocale: Locale = 'zh-TW';

export default getRequestConfig(async ({ locale }) => {
  // 驗證傳入的 locale 是否有效
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
