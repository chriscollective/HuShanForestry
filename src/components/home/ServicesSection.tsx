"use client";

import Image from "next/image";
import { services } from "@/config/services";
import { Link } from "@/components/ui/Link";

/**
 * ServicesSection
 *
 * 專業服務展示區塊 - 2x2 網格布局
 * 四項服務以兩列兩行的方式呈現
 */
export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-20 sm:py-24 lg:py-32"
      aria-labelledby="services-section-title"
    >
      {/* 背景裝飾元素 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      >
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-forest-green/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-orange/10 blur-3xl" />
      </div>

      <div className="relative">
        {/* 標題區域 */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-brand-orange" />
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Our Services
              </span>
            </div>

            <h2
              id="services-section-title"
              className="mt-6 text-4xl font-bold tracking-tight text-brand-black sm:text-5xl"
            >
              專業林業服務
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
              從森林收穫到教育訓練，提供全方位解決方案
            </p>
          </div>
        </div>

        {/* 服務卡片網格 */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <article
                key={service.id}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* 卡片頂部裝飾條 */}
                <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-brand-orange via-forest-green to-brand-orange opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* 圖片區域 */}
                <div className="relative h-[448px] overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    sizes="640px"
                    priority={index < 2}
                  />

                  {/* 圖片上的漸層遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

                  {/* 編號徽章 */}
                  <div className="absolute right-6 top-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 bg-black/30 backdrop-blur-md">
                    <span className="text-2xl font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* 內容區域 */}
                <div className="relative p-10">
                  {/* 分類標籤 */}
                  {service.category && (
                    <span className="inline-block rounded-full bg-forest-green/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-forest-green">
                      {service.category}
                    </span>
                  )}

                  {/* 標題 */}
                  <h3 className="mt-5 text-3xl font-bold text-brand-black transition-colors duration-300 group-hover:text-brand-orange">
                    {service.title}
                  </h3>

                  {/* 描述 */}
                  <p className="mt-4 text-base leading-relaxed text-gray-600 line-clamp-3">
                    {service.description}
                  </p>

                  {/* 特色列表 */}
                  {service.features && service.features.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {service.features.slice(0, 3).map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-center gap-3 text-sm text-gray-700"
                        >
                          <svg
                            className="h-6 w-6 flex-shrink-0 text-forest-green"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* 了解更多按鈕 */}
                  <div className="mt-8">
                    <Link
                      href={service.link}
                      className="group/link inline-flex items-center gap-3 text-base font-semibold text-brand-orange transition-gap duration-300 hover:gap-4"
                      aria-label={`了解更多關於${service.title}`}
                    >
                      <span>了解更多</span>
                      <svg
                        className="h-5 w-5 transition-transform duration-300 group-hover/link:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* 底部裝飾線 */}
                <div className="absolute bottom-0 left-0 h-2 w-0 bg-forest-green transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>

        {/* 底部 CTA */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 text-center">
          <p className="mb-6 text-lg text-gray-600">
            需要客製化的林業解決方案？
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-brand-orange px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#E55A2A] hover:shadow-xl hover:scale-105"
          >
            <span>立即聯絡我們</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
