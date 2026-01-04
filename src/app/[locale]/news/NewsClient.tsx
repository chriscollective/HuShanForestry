"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/components/ui/Link";
import { cn } from "@/lib/utils";
import { urlFor } from "@/lib/sanity/client";
import { categories } from "@/config/news";
import { News } from "@/types/sanity";

interface NewsClientProps {
  newsItems: News[];
}

export default function NewsClient({ newsItems }: NewsClientProps) {
  const t = useTranslations("newsPage");
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof categories)[number]["id"]
  >("all");

  const filteredNews = useMemo(() => {
    if (selectedCategory === "all") {
      return newsItems;
    }
    return newsItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, newsItems]);

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
            {t("tag")}
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-white/80">{t("subtitle")}</p>
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
              {t(`categories.${category.id}`)}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-6">
          {filteredNews.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              {selectedCategory === "all"
                ? t("emptyAll")
                : t("emptyCategory", {
                    category: t(`categories.${selectedCategory}`),
                  })}
            </div>
          ) : (
            filteredNews.map((item) => (
              <Link key={item._id} href={`/news/${item.slug.current}`}>
                <article className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:p-6">
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

                  <div className="flex flex-1 flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <span className="font-mono text-xs tracking-wider">
                        {new Date(item.date).toLocaleDateString(locale)}
                      </span>
                      {item.category && (
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                          {t(`categories.${item.category}`)}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-semibold text-brand-black">
                      {item.title}
                    </h2>

                    {item.excerpt && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {item.excerpt}
                      </p>
                    )}

                    <p className="text-sm text-brand-orange">
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
