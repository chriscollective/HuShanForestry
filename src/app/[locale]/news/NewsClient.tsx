"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { News } from "@/types/sanity"
import { urlFor } from "@/lib/sanity/client"

const categories = [
  { id: "all", label: "全部" },
  { id: "森林收穫", label: "森林收穫" },
  { id: "原木買賣", label: "原木買賣" },
  { id: "經營規劃", label: "經營規劃" },
  { id: "企業活動", label: "企業活動" },
  { id: "人才招募", label: "人才招募" },
  { id: "教育活動", label: "教育活動" },
] as const

const categoryLabelMap: Record<string, string> = {
  "森林收穫": "森林收穫",
  "原木買賣": "原木買賣",
  "經營規劃": "經營規劃",
  "企業活動": "企業活動",
  "人才招募": "人才招募",
  "教育活動": "教育活動",
}

interface NewsClientProps {
  newsItems: News[]
}

export default function NewsClient({ newsItems }: NewsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof categories)[number]["id"]
  >("all")

  const filteredNews = useMemo(() => {
    if (selectedCategory === "all") {
      return newsItems
    }
    return newsItems.filter((item) => item.category === selectedCategory)
  }, [selectedCategory, newsItems])

  return (
    <div className="bg-gray-50">
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
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            最新消息與虎山動態
          </h1>
          <p className="mt-4 text-lg text-white/80">
            查看活動、服務、招募與營運公告，掌握虎山林業最新動態。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                selectedCategory === category.id
                  ? "border-brand-orange bg-brand-orange text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-brand-orange hover:text-brand-orange"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-6">
          {filteredNews.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              目前沒有{selectedCategory === "all" ? "" : categoryLabelMap[selectedCategory]}新聞
            </div>
          ) : (
            filteredNews.map((item) => (
              <Link key={item._id} href={`/news/${item.slug.current}`}>
                <article className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:p-6">
                  {/* 左側圖片區 */}
                  {item.image && (
                    <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-48">
                      <Image
                        src={urlFor(item.image).width(384).height(256).url()}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 192px"
                      />
                    </div>
                  )}

                  {/* 右側內容區 */}
                  <div className="flex flex-1 flex-col gap-3">
                    {/* 標籤與日期 */}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <span className="font-mono text-xs tracking-wider">
                        {new Date(item.date).toLocaleDateString('zh-TW')}
                      </span>
                      {item.category && (
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                          {categoryLabelMap[item.category] || "消息"}
                        </span>
                      )}
                    </div>

                    {/* 標題 */}
                    <h2 className="text-xl font-semibold text-brand-black">
                      {item.title}
                    </h2>

                    {/* 摘要 */}
                    {item.excerpt && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {item.excerpt}
                      </p>
                    )}

                    {/* 閱讀更多提示 */}
                    <p className="text-sm text-brand-orange">
                      閱讀更多 →
                    </p>
                  </div>
                </article>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  )
}
