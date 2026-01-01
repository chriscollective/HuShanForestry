/**
 * VideoSection
 *
 * YouTube 影片展示區塊
 */
export function VideoSection() {
  // YouTube 影片 ID 列表（可以改成從 Sanity CMS 獲取）
  const videos = [
    {
      id: 'VIDEO_ID_1', // 請替換為實際的 YouTube 影片 ID
      title: '虎山林業服務介紹',
    },
    {
      id: 'VIDEO_ID_2',
      title: '專業林木修剪示範',
    },
    {
      id: 'VIDEO_ID_3',
      title: '林地管理經驗分享',
    },
  ];

  return (
    <section
      aria-labelledby="video-section-title"
      className="relative overflow-hidden bg-brand-black py-20 text-white"
    >
      {/* 背景裝飾 */}
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute left-[-10%] top-[20%] h-[40%] w-[30%] rotate-12 bg-brand-orange/20 blur-3xl" />
        <div className="absolute right-[-5%] bottom-[10%] h-[50%] w-[35%] -rotate-6 bg-brand-orange/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 標題區 */}
        <div className="mb-12 space-y-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-10 w-1 rounded-full bg-brand-orange" />
            <p className="font-mono text-xs uppercase tracking-[0.5em] text-white/60">
              Video Gallery
            </p>
            <span className="h-10 w-1 rounded-full bg-brand-orange" />
          </div>
          <h2
            id="video-section-title"
            className="text-4xl font-black uppercase tracking-[0.08em] sm:text-5xl"
          >
            影音專區
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            透過影片深入了解虎山林業的專業服務與實際案例
          </p>
        </div>

        {/* 影片網格 */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-2xl"
            >
              {/* YouTube Embed */}
              <div className="relative aspect-video w-full overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>

              {/* 影片標題 */}
              <div className="p-5">
                <h3 className="text-lg font-semibold tracking-wide transition-colors group-hover:text-brand-orange">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* 更多影片按鈕 */}
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@YOUR_CHANNEL" // 請替換為實際的 YouTube 頻道網址
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 border-2 border-brand-orange bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-brand-orange hover:text-brand-black"
            aria-label="前往虎山林業 YouTube 頻道觀看更多影片"
          >
            觀看更多影片
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
