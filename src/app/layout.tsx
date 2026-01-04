import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n';

/**
 * Root Layout
 *
 * 此 layout 僅用於處理根路徑的重定向
 * 所有實際的頁面內容都在 [locale] 目錄下
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 如果有人直接訪問根路徑，重定向到預設語言
  redirect(`/${defaultLocale}`);

  return children;
}
