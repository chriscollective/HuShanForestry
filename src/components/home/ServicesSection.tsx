import Image from 'next/image';
import { services } from '@/config/services';
import { Link } from '@/components/ui/Link';

/**
 * ServicesSection
 *
 * 專業服務展示區塊 - 採用卡片網格佈局
 * 包含視覺層次、互動效果和細節設計
 */
export function ServicesSection() {
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 標題區域 */}
        <div className="mb-16 text-center">
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

        {/* 服務卡片網格 */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* 卡片頂部裝飾條 */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand-orange via-forest-green to-brand-orange opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* 圖片區域 */}
              <div className="relative h-64 overflow-hidden bg-gray-100 sm:h-72">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

                {/* 服務圖示（如果有的話） */}
                {service.icon && (
                  <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                )}
              </div>

              {/* 內容區域 */}
              <div className="relative p-8">
                {/* 分類標籤 */}
                {service.category && (
                  <span className="inline-block rounded-full bg-forest-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest-green">
                    {service.category}
                  </span>
                )}

                {/* 標題 */}
                <h3 className="mt-4 text-2xl font-bold text-brand-black transition-colors duration-300 group-hover:text-brand-orange">
                  {service.title}
                </h3>

                {/* 描述 */}
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {service.description}
                </p>

                {/* 特色列表 */}
                {service.features && service.features.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="h-5 w-5 flex-shrink-0 text-forest-green" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* 了解更多按鈕 */}
                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={service.link}
                    className="group/link inline-flex items-center gap-2 font-semibold text-brand-orange transition-gap duration-300 hover:gap-3"
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>

                  {/* 裝飾性小圖示 */}
                  <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <svg className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 底部裝飾線 */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-orange to-forest-green transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* 底部 CTA */}
        <div className="mt-16 text-center">
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
    </section>
  );
}
