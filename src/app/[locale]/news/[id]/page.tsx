import Image from "next/image"
import { Link } from "@/components/ui/Link"
import { ArrowLeft } from "lucide-react"
import { client, urlFor } from "@/lib/sanity/client"
import { newsDetailQuery, newsListQuery } from "@/lib/sanity/queries"
import { News } from "@/types/sanity"
import { PortableText } from "@portabletext/react"
import { getTranslations } from "next-intl/server"

// 為靜態匯出生成所有新聞頁面
export async function generateStaticParams() {
  const newsItems: News[] = await client.fetch(newsListQuery)
  return newsItems.map((item) => ({
    id: item.slug.current,
  }))
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>
}) {
  const { id: slug, locale } = await params
  const t = await getTranslations({ locale, namespace: 'newsPage' })

  // 從 Sanity 取得新聞資料
  const newsItem: News = await client.fetch(newsDetailQuery, { slug })

  // 如果找不到新聞,顯示 404
  if (!newsItem) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-black">404</h1>
          <p className="mt-4 text-gray-600">找不到此新聞</p>
          <Link
            href="/news"
            className="mt-6 inline-block rounded-full bg-brand-orange px-6 py-3 text-white transition hover:bg-brand-orange/90"
          >
            返回新聞列表
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50">
      {/* 頂部橫幅 - 保留 NEWS 頁面風格 */}
      <section className="relative overflow-hidden bg-brand-black py-16 text-center text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
        >
          <div className="absolute left-0 top-0 h-3/4 w-1/3 bg-[rgba(255,255,255,0.05)]" />
          <div className="absolute right-[-5%] top-[10%] h-2/3 w-1/2 rotate-6 bg-[rgba(255,255,255,0.08)]" />
          <div className="absolute left-[20%] bottom-[-15%] h-[60%] w-[45%] -rotate-3 bg-[rgba(255,255,255,0.03)]" />
          <div className="absolute right-[20%] bottom-[5%] h-[35%] w-[25%] rotate-[12deg] bg-[rgba(255,255,255,0.05)]" />
          <div className="absolute left-[60%] top-[-10%] h-[50%] w-[20%] -rotate-6 bg-[rgba(255,255,255,0.04)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-orange">
            news
          </p>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            {newsItem.title}
          </h1>
          <div className="mt-4 flex items-center justify-center gap-4 text-white/80">
            <span className="font-mono text-sm tracking-wider">
              {new Date(newsItem.date).toLocaleDateString(locale)}
            </span>
            <span className="text-white/50">•</span>
            <span className="text-sm">
              {newsItem.category ? t(`categories.${newsItem.category}`) : t('tag')}
            </span>
          </div>
        </div>
      </section>

      {/* 主要內容區 - 雜誌風格 */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* 返回按鈕 */}
        <Link
          href="/news"
          className="mb-12 inline-flex items-center gap-2 text-gray-600 transition hover:text-brand-orange"
        >
          <ArrowLeft size={20} />
          <span>返回新聞列表</span>
        </Link>

        {/* 雜誌風格版面：左圖右文，直接在頁面上 */}
        <article className="flex flex-col gap-12 sm:flex-row sm:gap-16">
          {/* 左側圖片區 */}
          {newsItem.image && (
            <div className="relative h-[500px] w-full shrink-0 overflow-hidden sm:h-[700px] sm:w-[500px]">
              <Image
                src={urlFor(newsItem.image).width(1000).height(1400).url()}
                alt={newsItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 500px"
                priority
              />
            </div>
          )}

          {/* 右側內容區 */}
          <div className="flex flex-1 flex-col gap-8">
            {/* 標籤與日期 */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-sm tracking-wider text-gray-500">
                {new Date(newsItem.date).toLocaleDateString(locale)}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-sm font-semibold text-brand-orange">
                {newsItem.category ? t(`categories.${newsItem.category}`) : t('tag')}
              </span>
            </div>

            {/* 標題 */}
            <h2 className="text-4xl font-bold leading-tight text-brand-black sm:text-5xl">
              {newsItem.title}
            </h2>

            {/* 內文 */}
            <div className="prose prose-lg max-w-none">
              {newsItem.content && newsItem.content.length > 0 ? (
                <PortableText value={newsItem.content} />
              ) : (
                <p className="text-lg leading-relaxed text-gray-700">
                  {newsItem.excerpt || "內容尚未提供"}
                </p>
              )}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
