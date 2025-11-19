import type { Metadata } from 'next';
import Image from 'next/image';
import { aboutConfig } from '@/config/about';

export const metadata: Metadata = {
  title: '關於我們 | 虎山林業',
  description: '虎山林業由六位熱愛森林的青年於 2022 年創立，致力於推動台灣林業的永續發展。了解我們的願景、目標與核心價值。',
  keywords: '虎山林業, 關於我們, 公司願景, 林業目標, 永續經營, 台灣林業',
};

export default function AboutPage() {
  const { introduction, vision, goals, values } = aboutConfig;

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

        {/* 森林線條圖樣 */}
        <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            {/* 左側樹木群 */}
            <g stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {/* 樹木 1 - 最左 */}
              <path d="M 50 400 L 50 250" />
              <path d="M 50 280 L 30 320 L 50 300 L 70 320 Z" />
              <path d="M 50 250 L 25 300 L 50 270 L 75 300 Z" />

              {/* 樹木 2 */}
              <path d="M 120 400 L 120 220" />
              <path d="M 120 260 L 95 310 L 120 280 L 145 310 Z" />
              <path d="M 120 220 L 90 280 L 120 240 L 150 280 Z" />

              {/* 樹木 3 */}
              <path d="M 200 400 L 200 240" />
              <path d="M 200 280 L 175 330 L 200 300 L 225 330 Z" />
              <path d="M 200 240 L 170 300 L 200 260 L 230 300 Z" />
            </g>

            {/* 中央樹木群 */}
            <g stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {/* 樹木 4 */}
              <path d="M 45% 400 L 45% 200" />
              <path d="M 45% 250 L 42% 310 L 45% 270 L 48% 310 Z" />
              <path d="M 45% 200 L 41% 270 L 45% 220 L 49% 270 Z" />

              {/* 樹木 5 - 最高 */}
              <path d="M 52% 400 L 52% 180" />
              <path d="M 52% 240 L 48% 300 L 52% 260 L 56% 300 Z" />
              <path d="M 52% 180 L 47% 260 L 52% 200 L 57% 260 Z" />

              {/* 樹木 6 */}
              <path d="M 60% 400 L 60% 220" />
              <path d="M 60% 270 L 56% 330 L 60% 290 L 64% 330 Z" />
              <path d="M 60% 220 L 55% 290 L 60% 240 L 65% 290 Z" />
            </g>

            {/* 右側樹木群 */}
            <g stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {/* 樹木 7 */}
              <path d="M 85% 400 L 85% 230" />
              <path d="M 85% 270 L 82% 330 L 85% 290 L 88% 330 Z" />
              <path d="M 85% 230 L 81% 300 L 85% 250 L 89% 300 Z" />

              {/* 樹木 8 */}
              <path d="M 92% 400 L 92% 260" />
              <path d="M 92% 300 L 89% 350 L 92% 320 L 95% 350 Z" />
              <path d="M 92% 260 L 88% 320 L 92% 280 L 96% 320 Z" />

              {/* 樹木 9 - 最右 */}
              <path d="M 97% 400 L 97% 280" />
              <path d="M 97% 320 L 95% 360 L 97% 340 L 99% 360 Z" />
              <path d="M 97% 280 L 94% 340 L 97% 300 L 100% 340 Z" />
            </g>

            {/* 地平線與小草 */}
            <g stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round">
              <path d="M 0 400 L 100% 400" opacity="0.3" />
              {/* 小草點綴 */}
              <path d="M 15% 400 L 15% 385" opacity="0.4" />
              <path d="M 18% 400 L 18% 390" opacity="0.4" />
              <path d="M 35% 400 L 35% 388" opacity="0.4" />
              <path d="M 38% 400 L 38% 392" opacity="0.4" />
              <path d="M 70% 400 L 70% 387" opacity="0.4" />
              <path d="M 73% 400 L 73% 391" opacity="0.4" />
            </g>
          </svg>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {introduction.title}
            </h1>
            <p className="mt-6 text-xl text-gray-300 sm:text-2xl">
              {introduction.subtitle}
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
              {introduction.description.map((paragraph, index) => (
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
              {introduction.stats.map((stat, index) => (
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
              {vision.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {vision.subtitle}
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {vision.items.map((item) => (
              <div
                key={item.id}
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
              {goals.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {goals.subtitle}
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {goals.items.map((goal, index) => (
              <div
                key={goal.id}
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

        {/* 森林線條圖樣 */}
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            {/* 簡化的樹木剪影 */}
            <g stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {/* 左側樹林 */}
              <path d="M 10% 100% L 10% 40%" />
              <path d="M 10% 55% L 6% 75% L 10% 60% L 14% 75% Z" />
              <path d="M 10% 40% L 5% 65% L 10% 45% L 15% 65% Z" />

              <path d="M 22% 100% L 22% 50%" />
              <path d="M 22% 65% L 18% 80% L 22% 68% L 26% 80% Z" />
              <path d="M 22% 50% L 17% 70% L 22% 53% L 27% 70% Z" />

              {/* 中央樹林 */}
              <path d="M 48% 100% L 48% 30%" />
              <path d="M 48% 50% L 43% 70% L 48% 53% L 53% 70% Z" />
              <path d="M 48% 30% L 42% 55% L 48% 35% L 54% 55% Z" />

              <path d="M 65% 100% L 65% 45%" />
              <path d="M 65% 60% L 60% 78% L 65% 63% L 70% 78% Z" />
              <path d="M 65% 45% L 59% 68% L 65% 48% L 71% 68% Z" />

              {/* 右側樹林 */}
              <path d="M 82% 100% L 82% 35%" />
              <path d="M 82% 52% L 77% 72% L 82% 55% L 87% 72% Z" />
              <path d="M 82% 35% L 76% 60% L 82% 38% L 88% 60% Z" />

              <path d="M 93% 100% L 93% 55%" />
              <path d="M 93% 68% L 89% 82% L 93% 70% L 97% 82% Z" />
              <path d="M 93% 55% L 88% 73% L 93% 58% L 98% 73% Z" />
            </g>
          </svg>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {values.title}
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {values.items.map((value, index) => (
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
                一起為台灣林業努力
              </h2>
              <p className="mt-4 text-lg text-gray-200">
                如果您認同我們的理念，歡迎與我們聯繫，讓我們攜手守護台灣的森林資源
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-orange px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-[#E55A2A] hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                >
                  立即聯絡我們
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-brand-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  了解我們的服務
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
