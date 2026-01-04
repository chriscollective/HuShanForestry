'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/components/ui/Link';
import { siteConfig } from '@/config/site';

const heroImages = [
  {
    src: '/images/hero/woods01.jpg',
    alt: '晨霧中的台灣森林',
  },
  {
    src: '/images/hero/woods02.jpg',
    alt: '陽光灑落的高山針葉林',
  },
  {
    src: '/images/hero/woods03.jpg',
    alt: '林道與木材作業現場',
  },
  {
    src: '/images/hero/woods04.jpg',
    alt: '綠意盎然的森林樹冠',
  },
  {
    src: '/images/hero/woods05.jpg',
    alt: '森林工作團隊巡檢林地',
  },
] as const;

/**
 * HeroSection
 *
 * 首屏橫幅：展示品牌標語、核心價值與 CTA
 */
export function HeroSection() {
  const t = useTranslations('hero');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex((index + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative isolate min-h-[960px] w-full overflow-hidden bg-forest-dark">
      {/* 背景圖片 + 遮罩 */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"
              aria-hidden="true"
            />
          </div>
        ))}

        {/* 導航箭頭 */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between px-4 sm:px-6">
          <button
            type="button"
            onClick={() => goToSlide(currentIndex - 1)}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
            aria-label={t('ariaPrev')}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => goToSlide(currentIndex + 1)}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
            aria-label={t('ariaNext')}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* 底部圓點 */}
        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center">
          <div className="pointer-events-auto flex gap-2 rounded-full bg-black/30 px-4 py-2 backdrop-blur-sm">
            {heroImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'w-2.5 bg-white/50 hover:bg-white/70'}`}
                aria-label={t('ariaSlide', { index: index + 1 })}
                aria-current={index === currentIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 內容 */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 py-20 sm:gap-8 sm:px-6 lg:px-8 lg:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
          {t('since')} {siteConfig.foundingYear}
        </p>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t('title')}
          </h1>
          <p className="max-w-2xl text-base text-gray-200 sm:text-lg">
            {t('description')}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            aria-label={t('ariaConsult')}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-orange px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-[#E55A2A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            {t('ctaConsult')}
          </Link>

          <Link
            href="/services"
            variant="default"
            underline={false}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/60 px-8 py-3 text-base font-semibold text-white transition hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
            aria-label={t('ariaServices')}
          >
            {t('ctaServices')}
          </Link>
        </div>

      </div>
    </section>
  );
}
