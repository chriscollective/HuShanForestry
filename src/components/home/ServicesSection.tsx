'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { services } from '@/config/services';
import { Link } from '@/components/ui/Link';

/**
 * ServicesSection
 *
 * 專業服務展示區塊 - 橫向滑動卡片展示
 * 四項並排，可左右拖曳瀏覽
 */
export function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // 檢查滾動位置
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, []);

  // 滾動函數
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-20 sm:py-24 lg:py-32"
      aria-labelledby="services-section-title"
    >
      {/* 背景裝飾元素 */}
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
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

        {/* 滑動容器 */}
        <div className="relative">
          {/* 左側滑動按鈕 */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-sm transition-all hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-orange"
              aria-label="向左滑動"
            >
              <svg className="h-6 w-6 text-brand-black" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          {/* 右側滑動按鈕 */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-sm transition-all hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-orange"
              aria-label="向右滑動"
            >
              <svg className="h-6 w-6 text-brand-black" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}

          {/* 服務卡片橫向滾動區域 */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollPosition}
            className="overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {services.map((service, index) => (
                <article
                  key={service.id}
                  className="group relative w-80 flex-shrink-0 overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* 卡片頂部裝飾條 */}
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand-orange via-forest-green to-brand-orange opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* 圖片區域 */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      sizes="320px"
                      priority={index < 2}
                    />

                    {/* 圖片上的漸層遮罩 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

                    {/* 編號徽章 */}
                    <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-black/30 backdrop-blur-md">
                      <span className="text-lg font-bold text-white">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* 內容區域 */}
                  <div className="relative p-6">
                    {/* 分類標籤 */}
                    {service.category && (
                      <span className="inline-block rounded-full bg-forest-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest-green">
                        {service.category}
                      </span>
                    )}

                    {/* 標題 */}
                    <h3 className="mt-3 text-xl font-bold text-brand-black transition-colors duration-300 group-hover:text-brand-orange">
                      {service.title}
                    </h3>

                    {/* 描述 */}
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
                      {service.description}
                    </p>

                    {/* 特色列表 */}
                    {service.features && service.features.length > 0 && (
                      <ul className="mt-4 space-y-1.5">
                        {service.features.slice(0, 3).map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center gap-2 text-xs text-gray-700">
                            <svg className="h-4 w-4 flex-shrink-0 text-forest-green" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* 了解更多按鈕 */}
                    <div className="mt-5">
                      <Link
                        href={service.link}
                        className="group/link inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition-gap duration-300 hover:gap-3"
                        aria-label={`了解更多關於${service.title}`}
                      >
                        <span>了解更多</span>
                        <svg
                          className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* 底部裝飾線 */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-orange to-forest-green transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </div>
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
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
