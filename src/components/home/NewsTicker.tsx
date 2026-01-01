import { Link } from '@/components/ui/Link';
import { News } from '@/types/sanity';

interface NewsTickerProps {
  newsItems: News[];
}

/**
 * NewsTicker
 *
 * 最新消息布告欄（從 Sanity CMS 獲取資料）
 */
export function NewsTicker({ newsItems }: NewsTickerProps) {
  return (
    <section
      aria-labelledby="news-ticker-title"
      className="relative overflow-hidden bg-white py-16 text-brand-black"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
        <div className="absolute left-0 top-0 h-1/2 w-1/3 bg-[rgba(0,0,0,0.05)]" />
        <div className="absolute right-[-5%] top-[10%] h-2/3 w-1/2 rotate-6 bg-[rgba(0,0,0,0.08)]" />
        <div className="absolute left-[20%] bottom-[-15%] h-[60%] w-[45%] -rotate-3 bg-[rgba(0,0,0,0.12)]" />
        <div className="absolute right-[20%] bottom-[5%] h-[35%] w-[25%] rotate-[8deg] bg-[rgba(0,0,0,0.04)]" />
        <div className="absolute left-[60%] top-[-10%] h-[55%] w-[22%] rotate-2 bg-[rgba(0,0,0,0.1)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-brand-black/10 bg-white/95 px-6 py-10 shadow-[0_25px_80px_rgba(0,0,0,0.15)] backdrop-blur-lg sm:px-10">
          <div className="flex flex-col gap-6 border-b border-brand-black/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-10 w-1 rounded-full bg-brand-orange" />
                <p className="font-mono text-xs uppercase tracking-[0.5em] text-brand-black/60">
                  Newsroom
                </p>
              </div>
              <h3
                id="news-ticker-title"
                className="text-3xl font-black uppercase tracking-[0.08em]"
              >
                虎山布告欄
              </h3>
              <p className="text-sm text-brand-black/70">
                精準掌握每一則林務資訊。硬派作風，直述重點。
              </p>
            </div>

            <Link
              href="/news"
              underline={false}
              className="inline-flex min-h-[44px] items-center justify-center border border-brand-black/40 px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-black transition hover:border-brand-orange hover:text-brand-orange"
              aria-label="檢視所有虎山林業的最新消息"
            >
              全部消息
            </Link>
          </div>

          <ul className="mt-6 divide-y divide-brand-black/10">
            {newsItems.length > 0 ? (
              newsItems.map((news) => (
                <li
                  key={news._id}
                  className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-6"
                >
                  <span className="inline-flex items-center border border-brand-black/30 px-4 py-1 font-mono text-xs tracking-[0.4em] text-brand-black/60">
                    {new Date(news.date).toLocaleDateString('zh-TW', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    })}
                  </span>
                  <Link
                    href={`/news/${news.slug.current}`}
                    underline={false}
                    className="text-lg font-semibold uppercase tracking-[0.08em] text-brand-black transition-all duration-200 hover:scale-105 hover:text-brand-orange"
                    aria-label={`查看新聞：${news.title}`}
                  >
                    {news.title}
                  </Link>
                </li>
              ))
            ) : (
              <li className="py-8 text-center text-sm text-brand-black/60">
                目前沒有最新消息
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
