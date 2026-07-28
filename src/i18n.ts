import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// 支援的語言列表
export const locales = ['zh-TW', 'en', 'ja'] as const;
export type Locale = (typeof locales)[number];

// 預設語言
export const defaultLocale: Locale = 'zh-TW';

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
