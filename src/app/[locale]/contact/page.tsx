import type { Metadata } from 'next';
import { Link } from '@/components/ui/Link';

export const metadata: Metadata = {
  title: '聯絡我們 | 虎山林業',
  description: '取得專業林業顧問、機具調度與教育訓練資訊，歡迎透過表單或電話與虎山林業聯繫。',
};

const contactChannels = [
  {
    title: '專案諮詢',
    description: '林地評估、伐採計畫與客製化機具部署服務。',
    detail: 'service@hushan-forestry.com',
    label: 'Email',
  },
  {
    title: '教育訓練',
    description: '鏈鋸證照班、林業安全課程與內訓需求。',
    detail: '(02) 1234-5678',
    label: 'Phone',
  },
  {
    title: '合作洽談',
    description: '媒體採訪、異業合作與 ESG 計畫提案。',
    detail: '@hushanforestry',
    label: 'LINE / Social',
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[#050505] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#110902] to-[#050505]" />
          <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-brand-orange/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto flex min-h-[50vh] max-w-6xl flex-col justify-center px-6 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-orange">Contact</p>
          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            與虎山林業對話
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/70">
            告訴我們您的森林計畫、機具需求或教育訓練想法。我們的專業顧問與技術團隊將在 2 個工作天內與您聯繫。
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm uppercase tracking-[0.4em] text-white/50">
            <span>森林規劃</span>
            <span>機具租賃</span>
            <span>教育訓練</span>
            <span>合作洽談</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8 rounded-[32px] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-white">聯絡資訊</h2>
            <p className="text-white/70">
              我們的客服窗口全年無休監控郵件與電話。也歡迎預約到虎山林業基地參訪。
            </p>

            <div className="space-y-6">
              {contactChannels.map((channel) => (
                <div
                  key={channel.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">{channel.label}</p>
                  <h3 className="mt-3 text-xl font-semibold">{channel.title}</h3>
                  <p className="mt-2 text-white/70">{channel.description}</p>
                  <p className="mt-4 text-lg font-bold text-brand-orange">{channel.detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-dashed border-white/20 p-6 text-sm text-white/70">
              <p className="uppercase tracking-[0.4em] text-white/50">Base Camp</p>
              <p className="mt-3 text-lg font-semibold text-white">南投縣仁愛鄉林道 12 號</p>
              <p className="mt-2">
                造訪前請先預約，我們會安排導覽專員協助穿戴與安全引導。
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-white">專案洽詢表單</h2>
            <p className="mt-2 text-white/70">填寫後，我們將在 48 小時內回覆。</p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-white">
                    聯絡人
                    <input
                      type="text"
                      placeholder="您的姓名"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                    />
                  </label>
                </div>
                <div>
                  <label className="text-sm font-semibold text-white">
                    電子郵件
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                    />
                  </label>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-white">
                    聯絡電話
                    <input
                      type="tel"
                      placeholder="+886 9xx xxx xxx"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                    />
                  </label>
                </div>
                <div>
                  <label className="text-sm font-semibold text-white">
                    預計作業區域
                    <input
                      type="text"
                      placeholder="縣市 / 林班地"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-white">
                  項目需求
                  <select
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                  >
                    <option className="bg-black text-white">森林經營規劃</option>
                    <option className="bg-black text-white">伐採與集材</option>
                    <option className="bg-black text-white">機具租賃/配置</option>
                    <option className="bg-black text-white">教育訓練</option>
                    <option className="bg-black text-white">其他合作</option>
                  </select>
                </label>
              </div>

              <div>
                <label className="text-sm font-semibold text-white">
                  專案說明
                  <textarea
                    rows={5}
                    placeholder="請描述現況、時間表與關鍵需求..."
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                  />
                </label>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-white/60">
                  送出表單即代表您同意我們蒐集並使用資料以回覆服務需求。
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-orange px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-1"
                >
                  送出表單
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="m12 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-20 rounded-[32px] border border-white/10 bg-gradient-to-br from-brand-orange/20 via-black to-black p-10 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/70">Need more?</p>
          <h3 className="mt-4 text-3xl font-black text-white">也可透過 Line 或直接預約現場會談</h3>
          <p className="mt-4 max-w-3xl text-white/70">
            如果您已經確定檔期或需要緊急支援，請直接致電或使用即時訊息，我們會立即安排專案經理與您連繫。
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="https://line.me/R/ti/p/@hushanforestry"
              external
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white hover:border-brand-orange"
            >
              LINE@
            </Link>
            <Link
              href="tel:+886212345678"
              external
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white hover:border-brand-orange"
            >
              立即來電
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
