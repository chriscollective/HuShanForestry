const mockNews = [
  {
    id: 'news-001',
    title: '虎山林業完成2024年度森林收穫計畫，提升木材回收率12%',
    date: '2024-11-02',
  },
  {
    id: 'news-002',
    title: '與台東林管處合作，啟動高山林道安全巡檢計畫',
    date: '2024-10-21',
  },
  {
    id: 'news-003',
    title: '鏈鋸教育訓練12月梯次開放報名，名額有限',
    date: '2024-10-12',
  },
] as const;

/**
 * NewsTicker
 *
 * 最新消息布告欄（暫用假資料）
 */
export function NewsTicker() {
  return (
    <section
      aria-labelledby="news-ticker-title"
      className="bg-white py-10 shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:gap-10 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-lg font-bold text-white">
            NEWS
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              最新消息
            </p>
            <h3
              id="news-ticker-title"
              className="text-2xl font-bold text-brand-black"
            >
              虎山動態速報
            </h3>
          </div>
        </div>

        <div className="flex-1">
          <ul className="space-y-3">
            {mockNews.map((news) => (
              <li
                key={news.id}
                className="flex flex-col gap-1 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm sm:flex-row sm:items-center sm:gap-4 sm:px-5"
              >
                <span className="font-mono text-xs tracking-wider text-gray-500">
                  {news.date}
                </span>
                <p className="text-base font-medium text-brand-black">
                  {news.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
