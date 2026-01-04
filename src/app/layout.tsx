/**
 * Root Layout
 *
 * 這是 Next.js 必需的根 layout
 * 僅提供基本的 HTML 結構
 * 實際的頁面內容和多語言處理都在 [locale] 目錄中
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
