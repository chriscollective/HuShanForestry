import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about.meta' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  // 統計數據配置
  const stats = [
    {
      value: t('introduction.stats.founded.value'),
      label: t('introduction.stats.founded.label'),
      description: t('introduction.stats.founded.description'),
    },
    {
      value: t('introduction.stats.team.value'),
      label: t('introduction.stats.team.label'),
      description: t('introduction.stats.team.description'),
    },
    {
      value: t('introduction.stats.projects.value'),
      label: t('introduction.stats.projects.label'),
      description: t('introduction.stats.projects.description'),
    },
    {
      value: t('introduction.stats.area.value'),
      label: t('introduction.stats.area.label'),
      description: t('introduction.stats.area.description'),
    },
  ];

  // 願景項目配置
  const visionItems = [
    {
      icon: t('vision.items.sustainable.icon'),
      title: t('vision.items.sustainable.title'),
      description: t('vision.items.sustainable.description'),
    },
    {
      icon: t('vision.items.professional.icon'),
      title: t('vision.items.professional.title'),
      description: t('vision.items.professional.description'),
    },
    {
      icon: t('vision.items.innovation.icon'),
      title: t('vision.items.innovation.title'),
      description: t('vision.items.innovation.description'),
    },
    {
      icon: t('vision.items.ecological.icon'),
      title: t('vision.items.ecological.title'),
      description: t('vision.items.ecological.description'),
    },
  ];

  // 目標項目配置
  const goalItems = [
    {
      number: t('goals.items.safety.number'),
      title: t('goals.items.safety.title'),
      description: t('goals.items.safety.description'),
      highlights: t.raw('goals.items.safety.highlights') as string[],
    },
    {
      number: t('goals.items.quality.number'),
      title: t('goals.items.quality.title'),
      description: t('goals.items.quality.description'),
      highlights: t.raw('goals.items.quality.highlights') as string[],
    },
    {
      number: t('goals.items.environmental.number'),
      title: t('goals.items.environmental.title'),
      description: t('goals.items.environmental.description'),
      highlights: t.raw('goals.items.environmental.highlights') as string[],
    },
    {
      number: t('goals.items.knowledge.number'),
      title: t('goals.items.knowledge.title'),
      description: t('goals.items.knowledge.description'),
      highlights: t.raw('goals.items.knowledge.highlights') as string[],
    },
    {
      number: t('goals.items.community.number'),
      title: t('goals.items.community.title'),
      description: t('goals.items.community.description'),
      highlights: t.raw('goals.items.community.highlights') as string[],
    },
  ];

  // 價值觀項目配置
  const valueItems = t.raw('values.items') as Array<{
    label: string;
    description: string;
  }>;

  // 簡介描述段落
  const descriptionParagraphs = t.raw('introduction.description') as string[];

  return (
    <div className="bg-brand-white">
      {/* Hero Section */}
      <section className="relative bg-brand-black text-brand-white overflow-hidden">
        {/* 背景裝飾元素 */}
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-brand-orange/20 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-[30%] top-[20%] h-[300px] w-[300px] rounded-full bg-brand-orange/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t('introduction.title')}
            </h1>
            <p className="mt-6 text-xl text-gray-300 sm:text-2xl">
              {t('introduction.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* 公司簡介 */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* 左側：文字內容 */}
            <div className="space-y-6">
              {descriptionParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-gray-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 右側：數據統計 */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl border-2 border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="text-4xl font-bold text-brand-orange">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-base font-semibold text-brand-black">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 願景 Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
              {t('vision.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('vision.subtitle')}
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {visionItems.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-5xl">{item.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-brand-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心目標 Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
              {t('goals.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('goals.subtitle')}
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {goalItems.map((goal, index) => (
              <div
                key={index}
                className={`rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md ${
                  index % 2 === 0 ? 'lg:ml-0' : 'lg:ml-12'
                }`}
              >
                <div className="grid gap-6 lg:grid-cols-[120px_1fr]">
                  {/* 編號 */}
                  <div className="flex items-center justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-orange/10 text-4xl font-bold text-brand-orange">
                      {goal.number}
                    </div>
                  </div>

                  {/* 內容 */}
                  <div>
                    <h3 className="text-2xl font-bold text-brand-black">
                      {goal.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-700">
                      {goal.description}
                    </p>

                    {/* 亮點 */}
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {goal.highlights.map((highlight, hIndex) => (
                        <div
                          key={hIndex}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <svg
                            className="h-5 w-5 flex-shrink-0 text-brand-orange"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 團隊價值觀 Section */}
      <section className="relative bg-brand-black py-16 text-brand-white sm:py-20 overflow-hidden">
        {/* 背景裝飾元素 */}
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-orange/15 blur-3xl" />
          <div className="absolute left-[40%] top-[30%] h-[350px] w-[350px] rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t('values.title')}
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {valueItems.map((value, index) => (
              <div
                key={index}
                className="group flex flex-col items-center rounded-2xl border-2 border-white/20 bg-white/5 px-8 py-6 backdrop-blur-sm transition-all hover:border-brand-orange hover:bg-brand-orange/10"
              >
                <div className="text-2xl font-bold">{value.label}</div>
                <div className="mt-2 text-sm text-gray-300">
                  {value.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-black via-gray-900 to-brand-black p-12 text-center text-brand-white shadow-xl">
            {/* 背景裝飾 */}
            <div className="absolute inset-0 opacity-30" aria-hidden="true">
              <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-brand-orange/30 blur-3xl" />
              <div className="absolute left-0 bottom-0 h-[250px] w-[250px] rounded-full bg-white/10 blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">
                {t('cta.title')}
              </h2>
              <p className="mt-4 text-lg text-gray-200">
                {t('cta.description')}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-orange px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-[#E55A2A] hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                >
                  {t('cta.contactButton')}
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-brand-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {t('cta.servicesButton')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
