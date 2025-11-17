import Image from 'next/image';
import { Link } from '@/components/ui/Link';
import type { Service } from '@/types/service';

export interface ServiceCardProps {
  service: Service;
}

/**
 * ServiceCard
 *
 * 顯示單一服務的圖片、標題、簡述
 */
export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col px-6 py-6">
        <h3 className="text-xl font-semibold text-brand-black">{service.title}</h3>
        <p className="mt-3 flex-1 text-base text-gray-600">
          {service.description}
        </p>

        <Link
          href={service.link}
          underline={false}
          className="mt-6 inline-flex items-center text-sm font-semibold text-brand-orange transition group-hover:text-[#E55A2A]"
          aria-label={`了解更多${service.title}服務`}
        >
          了解更多
          <svg
            className="ml-2 h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
