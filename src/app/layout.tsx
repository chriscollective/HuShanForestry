import { defaultLocale } from '@/i18n';
import './globals.css';

/**
 * Root Layout
 *
 * Next.js 必需的全域根層，提供基礎 <html>/<body> 包裹。
 * 語系處理與頁面內容在 [locale]/layout.tsx 內完成。
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale}>
      <body className="antialiased flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
