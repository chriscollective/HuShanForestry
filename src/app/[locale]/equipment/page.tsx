import type { Metadata } from 'next';
import Image from 'next/image';
import { equipmentList } from '@/config/equipment';
import { Link } from '@/components/ui/Link';

export const metadata: Metadata = {
  title: '機具展示 | 虎山林業',
  description: '展示虎山林業現役的伐木、集材與智慧監測設備，感受黑白橘的專業機具美學。',
};

export default function EquipmentPage() {
  return (
    <main className="bg-[#0B0B0B] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1A0E08] to-black opacity-80" />
        <div className="relative mx-auto flex min-h-[65vh] max-w-6xl flex-col justify-center px-6 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-orange">
            Equipment Gallery
          </p>
          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            黑白橘的重裝風景
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/70">
            我們以一線機具與智慧監控構築安全、效率與永續。下滑，逐一檢閱虎山林業在山林作業中的主力夥伴。
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-sm uppercase tracking-[0.4em] text-white/60">
            <span>伐木</span>
            <span>集材</span>
            <span>林道</span>
            <span>智慧監測</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="space-y-24">
          {equipmentList.map((equipment, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={equipment.id}
                className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#101010] via-[#121212] to-[#0A0A0A] p-8 sm:p-12 shadow-[0_50px_120px_rgba(0,0,0,0.45)]"
              >
                <div
                  className={`flex flex-col gap-8 lg:gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="relative lg:w-1/2">
                    <div className="absolute -inset-6 rounded-[40px] bg-brand-orange/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
                    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black">
                      <Image
                        src={equipment.image}
                        alt={equipment.imageAlt}
                        width={960}
                        height={720}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        sizes="(min-width: 1024px) 480px, 100vw"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
                      <span className="absolute right-6 top-6 rounded-full border border-white/30 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/80 backdrop-blur">
                        {equipment.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-sm uppercase tracking-[0.5em] text-brand-orange">{equipment.name}</p>
                    <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{equipment.headline}</h2>
                    <p className="mt-4 text-base text-white/70">{equipment.description}</p>

                    <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                      {equipment.specs.map((spec) => (
                        <div
                          key={spec.label + spec.value}
                          className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition group-hover:bg-white/10"
                        >
                          <dt className="text-xs uppercase tracking-[0.35em] text-white/60">{spec.label}</dt>
                          <dd className="mt-2 text-lg font-semibold text-white">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-24 flex flex-col items-center gap-4 rounded-[32px] border border-white/10 bg-white/5 px-8 py-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">Need a custom setup?</p>
          <h3 className="text-3xl font-black text-white">客製化集材與機具佈署</h3>
          <p className="max-w-2xl text-base text-white/70">
            告訴我們作業地形、伐採量與時程，我們會以最適合的機具組合與監控服務支援您的森林專案。
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-3 rounded-full bg-brand-orange px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-1"
          >
            聯絡技術專員
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m12 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
