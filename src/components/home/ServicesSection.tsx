import { services } from '@/config/services';
import { ServiceCard } from './ServiceCard';

/**
 * ServicesSection
 *
 * 列出四大服務，使用卡片呈現
 */
export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-gray-50 py-20 sm:py-24"
      aria-labelledby="services-section-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            我們的服務
          </p>
          <h2
            id="services-section-title"
            className="mt-4 text-3xl font-bold text-brand-black sm:text-4xl"
          >
            一次滿足森林經營的全方位需求
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            從森林收穫到鏈鋸教育訓練，虎山林業提供完整的專業支援，協助企業、政府與社會大眾更有效地管理森林資源。
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
