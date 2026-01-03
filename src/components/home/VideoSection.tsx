"use client";

import { useState } from "react";

/**
 * VideoSection
 *
 * YouTube 影片輪播展示區塊
 * 一次顯示一部影片，可左右滑動切換
 */
export function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // YouTube 影片列表（支援完整 URL 或影片 ID）
  const videos = [
    {
      url: "https://www.youtube.com/watch?v=AQXReYjELZ0", // 貼上完整 YouTube 連結
      title: "木曜四超玩:一日伐木工",
    },
    {
      url: "https://www.youtube.com/watch?v=VIDEO_ID_2", // 或直接貼影片 ID
      title: "專業林木修剪示範",
    },
    {
      url: "VIDEO_ID_3", // 也可以只貼影片 ID
      title: "林地管理經驗分享",
    },
  ];

  // 從 URL 提取影片 ID
  const getVideoId = (urlOrId: string): string => {
    // 如果是完整 URL
    if (urlOrId.includes("youtube.com") || urlOrId.includes("youtu.be")) {
      const url = new URL(urlOrId);
      // youtube.com/watch?v=VIDEO_ID
      if (url.searchParams.has("v")) {
        return url.searchParams.get("v") || "";
      }
      // youtu.be/VIDEO_ID
      if (url.hostname === "youtu.be") {
        return url.pathname.slice(1);
      }
    }
    // 如果已經是 ID
    return urlOrId;
  };

  // 切換到上一部影片
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  // 切換到下一部影片
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const currentVideo = videos[currentIndex];
  const videoId = getVideoId(currentVideo.url);

  return (
    <section
      aria-labelledby="video-section-title"
      className="relative overflow-hidden bg-brand-black py-20 text-white"
    >
      {/* 背景裝飾 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      >
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

        {/* 影片輪播容器 */}
        <div className="relative mx-auto max-w-6xl">
          {/* 左側切換按鈕 */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/90 text-white shadow-2xl backdrop-blur-sm transition-all hover:bg-brand-orange hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-brand-black lg:-translate-x-20"
            aria-label="上一部影片"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* 右側切換按鈕 */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/90 text-white shadow-2xl backdrop-blur-sm transition-all hover:bg-brand-orange hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-brand-black lg:translate-x-20"
            aria-label="下一部影片"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* 影片播放器 - 放大尺寸 */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm shadow-2xl">
            {/* YouTube Embed - 使用更大的 aspect ratio */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "16/9" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>

            {/* 影片資訊 */}
            <div className="bg-white/5 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-wide text-white">
                    {currentVideo.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    {currentIndex + 1} / {videos.length}
                  </p>
                </div>

                {/* 影片指示器 */}
                <div className="flex gap-2">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "w-8 bg-brand-orange"
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`切換到影片 ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
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
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
