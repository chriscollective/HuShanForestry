"use client";

import { useTranslations } from 'next-intl';
import { useState } from "react";

/**
 * VideoSection
 *
 * YouTube 影片輪播展示區塊
 * 一次顯示一部影片，可左右滑動切換
 */
export function VideoSection() {
  const t = useTranslations('video');
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
      className="relative overflow-hidden bg-white py-20 text-brand-black"
    >
      {/* 背景裝飾 - 不同階層的灰色幾何矩形 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      >
        <div className="absolute left-0 top-0 h-1/2 w-1/3 bg-[rgba(0,0,0,0.05)]" />
        <div className="absolute right-[-5%] top-[10%] h-2/3 w-1/2 rotate-6 bg-[rgba(0,0,0,0.08)]" />
        <div className="absolute left-[20%] bottom-[-15%] h-[60%] w-[45%] -rotate-3 bg-[rgba(0,0,0,0.12)]" />
        <div className="absolute right-[20%] bottom-[5%] h-[35%] w-[25%] rotate-[8deg] bg-[rgba(0,0,0,0.04)]" />
        <div className="absolute left-[60%] top-[-10%] h-[55%] w-[22%] rotate-2 bg-[rgba(0,0,0,0.1)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 標題區 */}
        <div className="mb-12 space-y-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-10 w-1 rounded-full bg-brand-orange" />
            <p className="font-mono text-xs uppercase tracking-[0.5em] text-brand-black/60">
              {t('tag')}
            </p>
            <span className="h-10 w-1 rounded-full bg-brand-orange" />
          </div>
          <h2
            id="video-section-title"
            className="text-4xl font-black uppercase tracking-[0.08em] text-brand-black sm:text-5xl"
          >
            {t('title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-brand-black/70">
            {t('subtitle')}
          </p>
        </div>

        {/* 影片輪播容器 */}
        <div className="relative mx-auto max-w-6xl">
          {/* 左側切換按鈕 */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/90 text-white shadow-2xl backdrop-blur-sm transition-all hover:bg-brand-orange hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-white lg:-translate-x-20"
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
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/90 text-white shadow-2xl backdrop-blur-sm transition-all hover:bg-brand-orange hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-white lg:translate-x-20"
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
            <div className="bg-gray-50 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-wide text-brand-black">
                    {currentVideo.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-black/60">
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
                          : "w-2 bg-gray-300 hover:bg-gray-400"
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
            href="https://www.youtube.com/@%E8%99%8E%E5%B1%B1%E6%9E%97%E6%A5%AD" // 虎山林業 YouTube 頻道網址
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 border-2 border-brand-orange bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-black transition-all hover:bg-brand-orange hover:text-white"
            aria-label={t('ctaAria')}
          >
            {t('ctaLabel')}
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
