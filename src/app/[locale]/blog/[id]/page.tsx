import Image from "next/image"
import { Link } from "@/components/ui/Link"
import { ArrowLeft } from "lucide-react"
import { client, urlFor } from "@/lib/sanity/client"
import { blogDetailQuery, blogListQuery } from "@/lib/sanity/queries"
import { Blog } from "@/types/sanity"
import { PortableText } from "@portabletext/react"
import { getTranslations } from "next-intl/server"

// 為靜態匯出生成所有 Blog 頁面
export async function generateStaticParams() {
  const blogItems: Blog[] = await client.fetch(blogListQuery)
  return blogItems.map((item) => ({
    id: item.slug.current,
  }))
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>
}) {
  const { id: slug, locale } = await params
  const t = await getTranslations({ locale, namespace: 'blogPage' })

  // 從 Sanity 取得 Blog 資料
  const blogItem: Blog = await client.fetch(blogDetailQuery, { slug })

  // 如果找不到文章,顯示 404
  if (!blogItem) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-black">404</h1>
          <p className="mt-4 text-gray-600">找不到此文章</p>
          <Link
            href="/blog"
            className="mt-6 inline-block rounded-full bg-brand-orange px-6 py-3 text-white transition hover:bg-brand-orange/90"
          >
            返回專欄列表
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50">
      {/* 頂部橫幅 */}
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
            blog
          </p>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            {blogItem.title}
          </h1>
          <div className="mt-4 flex items-center justify-center gap-4 text-white/80">
            <span className="font-mono text-sm tracking-wider">
              {new Date(blogItem.publishedAt).toLocaleDateString(locale)}
            </span>
            {blogItem.author && (
              <>
                <span className="text-white/50">•</span>
                <span className="text-sm">{blogItem.author}</span>
              </>
            )}
            {blogItem.category && (
              <>
                <span className="text-white/50">•</span>
                <span className="text-sm">
                  {t(`categories.${blogItem.category}`)}
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 主要內容區 */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* 返回按鈕 */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-gray-600 transition hover:text-brand-orange"
        >
          <ArrowLeft size={20} />
          <span>返回專欄列表</span>
        </Link>

        <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
          {/* 封面圖片 */}
          {blogItem.coverImage && (
            <div className="relative h-64 w-full sm:h-96">
              <Image
                src={urlFor(blogItem.coverImage).width(1200).height(600).url()}
                alt={blogItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>
          )}

          {/* 內文 */}
          <div className="p-6 sm:p-10">
            {/* 標籤 */}
            {blogItem.tags && blogItem.tags.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {blogItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* 摘要 */}
            {blogItem.excerpt && (
              <p className="mb-8 border-l-4 border-brand-orange pl-4 text-lg italic text-gray-600">
                {blogItem.excerpt}
              </p>
            )}

            {/* 內容 */}
            <div className="prose prose-lg max-w-none prose-headings:text-brand-black prose-a:text-brand-orange">
              {blogItem.content && blogItem.content.length > 0 ? (
                <PortableText value={blogItem.content} />
              ) : (
                <p className="text-gray-500">內容尚未提供</p>
              )}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
