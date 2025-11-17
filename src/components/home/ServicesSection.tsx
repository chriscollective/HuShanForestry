import Image from 'next/image';
import { services } from '@/config/services';
import { Link } from '@/components/ui/Link';

/**
 * ServicesSection
 *
 * 全寬 4 分割服務展示
 */
export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-gray-50"
      aria-labelledby="services-section-title"
    >
      <div className="px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
          我們的服務
        </p>
        <h2
          id="services-section-title"
          className="mt-4 text-3xl font-bold text-brand-black sm:text-4xl"
        >
          一次滿足森林經營的全方位需求
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          從森林收穫到鏈鋸教育訓練，我們提供專業團隊與設備，協助企業與政府單位有效管理森林資源，兼顧安全與永續。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <article
            key={service.id}
            className="group relative min-h-[280px] sm:min-h-[320px] lg:min-h-[520px]"
          >
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/20 transition group-hover:from-black/90"
              aria-hidden="true"
            />
            <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-6 text-left text-white">
              <span className="text-xs uppercase tracking-[0.5em] text-white/70">
                0{index + 1}
              </span>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-sm text-white/80">
                {service.description}
              </p>
              <Link
                href={service.link}
                variant="default"
                underline={false}
                className="w-fit rounded-full border border-white/40 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white hover:text-brand-black"
                aria-label={`了解更多${service.title}`}
              >
                了解更多
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
