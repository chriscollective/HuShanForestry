import type { Metadata } from "next";
import Image from "next/image";
import { services } from "@/config/services";
import { Link } from "@/components/ui/Link";
import { MagazineImageReveal } from "@/components/services/MagazineImageReveal";

const spreadThemes = [
  {
    background: "bg-[#fdf8f3]",
    accentText: "text-brand-orange",
    accentBg: "bg-brand-orange",
    accentBorder: "border-brand-orange/40",
  },
  {
    background: "bg-[#eef4ef]",
    accentText: "text-forest-green",
    accentBg: "bg-forest-green",
    accentBorder: "border-forest-green/40",
  },
];

export const metadata: Metadata = {
  title: "服務項目 | 虎山林業",
  description:
    "以雜誌排版呈現虎山林業四大服務項目，結合視覺與文字敘事的沉浸式體驗。",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#f6f2eb] text-brand-black">
      {/* Intro copy */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-orange">
          Service Portfolio
        </p>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          我們提供專業的林業服務
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
          每一個篇章都是林業專業的縮影。透過視覺與敘事，我們攤開森林收穫、原木買賣、經營規劃與教育訓練四個領域的細膩工藝。
        </p>
      </section>

      {services.map((service, index) => {
        const theme = spreadThemes[index % spreadThemes.length];
        const imageFirst = index % 2 === 0;

        return (
          <article
            key={service.id}
            className={`${theme.background} relative border-t border-black/5`}
            aria-labelledby={`${service.id}-title`}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/5 via-transparent to-transparent mix-blend-multiply" />

            <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16 sm:py-20 lg:py-28">
              <div
                className={`flex flex-col gap-10 lg:gap-16 ${
                  imageFirst ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image spread */}
                <div className="relative lg:flex-[1.5]">
                  <MagazineImageReveal
                    delay={index * 0.2}
                    className="relative h-[40rem] overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-[0_35px_80px_rgba(0,0,0,0.08)] sm:h-[1040px]"
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 560px, 100vw"
                      priority={index < 2}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 rounded-full border border-white/30 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white backdrop-blur-sm">
                      Visual Reportage
                    </div>
                  </MagazineImageReveal>
                  <div
                    aria-hidden="true"
                    className="absolute -left-6 bottom-6 hidden h-32 w-32 border border-dashed border-black/20 lg:block"
                  />
                </div>

                {/* Text spread */}
                <div className="flex flex-col justify-center lg:flex-1">
                  <div className="flex items-center gap-6">
                    <span className="font-serif text-7xl font-bold text-black/10 sm:text-8xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-black/10" />
                    {service.category && (
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                        {service.category}
                      </span>
                    )}
                  </div>

                  <h2
                    id={`${service.id}-title`}
                    className="mt-8 text-4xl font-black leading-tight lg:text-5xl"
                  >
                    {service.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-gray-700">
                    {service.description}
                  </p>

                  {service.features?.length ? (
                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className={`rounded-2xl border bg-white/60 px-5 py-4 text-sm font-semibold uppercase tracking-wide text-gray-700 ${theme.accentBorder}`}
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-12 flex flex-wrap items-center gap-4">
                    <Link
                      href={service.link}
                      className={`inline-flex items-center gap-3 rounded-full ${theme.accentBg} px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:-translate-y-1`}
                    >
                      深入專題
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          d="M5 12h14"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="m12 5 7 7-7 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <span
                      className={`text-xs uppercase tracking-[0.35em] ${theme.accentText}`}
                    >
                      Feature Story · {service.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </main>
  );
}
