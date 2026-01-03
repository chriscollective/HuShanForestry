import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "虎山林業 | 台灣專業林業服務 | 森林收穫、原木買賣、經營規劃",
  description: "虎山林業由六位熱愛森林的青年於 2022 年創立，提供森林收穫、原木買賣、森林經營規劃、鏈鋸教育訓練等專業林業服務",
  keywords: "台灣林業, 森林收穫, 伐木服務, 原木買賣, 森林經營規劃, 鏈鋸訓練",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
