import { Link } from '@/components/ui/Link';
import { siteConfig } from '@/config/site';

/**
 * AboutSection
 *
 * 公司簡介與品牌敘事
 */
export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white py-16 sm:py-20"
      aria-labelledby="about-section-title"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
          關於我們
        </p>
        <h2
          id="about-section-title"
          className="mt-4 text-3xl font-bold text-brand-black sm:text-4xl"
        >
          來自台灣各地的六位林業青年
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-700 sm:text-xl">
          {siteConfig.description}
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/about"
            underline={false}
            className="inline-flex items-center text-base font-semibold text-brand-orange transition hover:text-[#E55A2A]"
            aria-label="了解更多關於虎山林業"
          >
            了解更多 →
          </Link>
        </div>
      </div>
    </section>
  );
}
