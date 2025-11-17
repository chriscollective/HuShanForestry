import Image from 'next/image';
import { Link } from '@/components/ui/Link';
import { siteConfig } from '@/config/site';

/**
 * HeroSection
 *
 * 首屏橫幅：展示品牌標語、核心價值與 CTA
 */
export function HeroSection() {
  return (
    <section className="relative isolate min-h-[520px] w-full overflow-hidden bg-forest-dark">
      {/* 背景圖片 + 遮罩 */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/forest.svg"
          alt="台灣森林的層層山巒"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"
          aria-hidden="true"
        />
      </div>

      {/* 內容 */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 py-20 sm:gap-8 sm:px-6 lg:px-8 lg:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Since {siteConfig.foundingYear}
        </p>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            虎山林業，接軌台灣林業新世代
          </h1>
          <p className="max-w-2xl text-base text-gray-200 sm:text-lg">
            來自台灣各地的六位林業青年，結合森林收穫、原木買賣、經營規劃與鏈鋸訓練，提供一條龍的專業服務，守護土地也創造產業價值。
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            aria-label="前往聯絡我們，立即諮詢虎山林業服務"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-orange px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-[#E55A2A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            立即諮詢
          </Link>

          <Link
            href="/services"
            variant="default"
            underline={false}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/60 px-8 py-3 text-base font-semibold text-white transition hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
            aria-label="了解虎山林業的服務項目"
          >
            了解服務
          </Link>
        </div>
      </div>
    </section>
  );
}
