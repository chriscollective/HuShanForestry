"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "全部" },
  { id: "event", label: "活動" },
  { id: "service", label: "服務" },
  { id: "news", label: "新聞" },
  { id: "recruit", label: "招募" },
  { id: "operation", label: "營運" },
  { id: "other", label: "其他" },
] as const;

const newsItems = [
  {
    id: "n-001",
    title: "虎山林業參與林業科技展，展示智慧集材方案",
    category: "news",
    date: "2024-11-05",
    image: "/images/hero/woods01.jpg",
  },
  {
    id: "n-002",
    title: "2024 鏈鋸教育訓練冬季梯次報名開跑",
    category: "event",
    date: "2024-10-28",
    image: "/images/hero/woods02.jpg",
  },
  {
    id: "n-003",
    title: "誠徵森林工程師，加入虎山林業專業團隊",
    category: "recruit",
    date: "2024-10-12",
    image: "/images/hero/woods03.jpg",
  },
  {
    id: "n-004",
    title: "引進全新伐採監控服務，守護森林更即時",
    category: "service",
    date: "2024-09-20",
    image: "/images/hero/woods04.jpg",
  },
  {
    id: "n-005",
    title: "營運報告：2024 Q3 達成木材回收率提升 12%",
    category: "operation",
    date: "2024-09-01",
    image: "/images/hero/woods05.jpg",
  },
] as const;

const categoryLabelMap = categories.reduce<Record<string, string>>(
  (acc, category) => {
    acc[category.id] = category.label;
    return acc;
  },
  {}
);

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof categories)[number]["id"]
  >("all");

  const filteredNews = useMemo(() => {
    if (selectedCategory === "all") {
      return newsItems;
    }
    return newsItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-gray-50">
      <section className="bg-forest-dark py-16 text-center text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
          {filteredNews.map((item) => (
            <article
              key={item.id}
              className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center sm:p-6"
            >
              <div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                  <span className="font-mono text-xs tracking-wider">
                    {item.date}
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                    {categoryLabelMap[item.category] || "消息"}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-brand-black">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600">
                  詳細內容即將更新，歡迎與虎山林業聯絡了解更多資訊。
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
