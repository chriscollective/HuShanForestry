"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/components/ui/Link";
import { cn } from "@/lib/utils";
import { urlFor } from "@/lib/sanity/client";
import { blogCategories } from "@/config/blog";
import { Blog } from "@/types/sanity";

interface BlogClientProps {
  blogItems: Blog[];
}

export default function BlogClient({ blogItems }: BlogClientProps) {
  const t = useTranslations("blogPage");
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof blogCategories)[number]["id"]
  >("all");

  const filteredBlogs = useMemo(() => {
    if (selectedCategory === "all") {
      return blogItems;
    }
    return blogItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, blogItems]);

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
            {t("tag")}
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-white/80">{t("subtitle")}</p>
        </div>
      </section>

      {/* 內容區 */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* 分類篩選 */}
        <div className="flex flex-wrap gap-3">
          {blogCategories.map((category) => (
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
              {t(`categories.${category.id}`)}
            </button>
          ))}
        </div>

        {/* 文章列表 */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.length === 0 ? (
            <div className="col-span-full py-12 text-center text-gray-500">
              {selectedCategory === "all"
                ? t("emptyAll")
                : t("emptyCategory", {
                    category: t(`categories.${selectedCategory}`),
                  })}
            </div>
          ) : (
            filteredBlogs.map((item) => (
              <Link key={item._id} href={`/blog/${item.slug.current}`} className="block">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {/* 封面圖片 */}
                  <div className="relative h-48 w-full overflow-hidden">
                    {item.coverImage ? (
                      <Image
                        src={urlFor(item.coverImage).width(600).height(400).url()}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-200">
                        <span className="text-gray-400">No Image</span>
                      </div>
                    )}
                  </div>

                  {/* 內容區 */}
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                      <span className="font-mono text-xs tracking-wider">
                        {new Date(item.publishedAt).toLocaleDateString(locale)}
                      </span>
                      {item.category && (
                        <span className="rounded-full bg-brand-orange/10 px-2 py-0.5 text-xs font-semibold text-brand-orange">
                          {t(`categories.${item.category}`)}
                        </span>
                      )}
                    </div>

                    <h2 className="text-lg font-semibold text-brand-black line-clamp-2">
                      {item.title}
                    </h2>

                    {item.excerpt && (
                      <p className="flex-1 text-sm text-gray-600 line-clamp-3">
                        {item.excerpt}
                      </p>
                    )}

                    <p className="mt-auto text-sm font-medium text-brand-orange">
                      {t("readMore")} →
                    </p>
                  </div>
                </article>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
