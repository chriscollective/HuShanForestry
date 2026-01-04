import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { locales } from '@/i18n';

export const metadata: Metadata = {
  title: "虎山林業 | 台灣專業林業服務 | 森林收穫、原木買賣、經營規劃",
  description: "虎山林業由六位熱愛森林的青年於 2022 年創立，提供森林收穫、原木買賣、森林經營規劃、鏈鋸教育訓練等專業林業服務",
  keywords: "台灣林業, 森林收穫, 伐木服務, 原木買賣, 森林經營規劃, 鏈鋸訓練",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // 在 Next.js 15+，params 是一個 Promise
  const { locale } = await params;

  // 確保傳入的 locale 是有效的
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // 獲取對應語言的翻譯訊息
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </NextIntlClientProvider>
  );
}
