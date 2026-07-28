'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * ScrollToTop 元件
 *
 * 固定在右下角的「回到頂部」按鈕
 * 滾動超過一定距離後才顯示
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 監聽滾動事件
    const toggleVisibility = () => {
      // 滾動超過 300px 後顯示按鈕
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // 滾動到頂部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-8 z-50',
        'flex h-14 w-14 items-center justify-center',
        'rounded-full bg-brand-orange text-white shadow-2xl',
        'transition-all duration-300',
        'hover:bg-[#E55A2A] hover:scale-110 hover:shadow-3xl',
        'focus:outline-none focus:ring-4 focus:ring-brand-orange/50',
        'group',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      )}
      aria-label="回到頂部"
    >
      {/* 向上箭頭圖示 */}
      <svg
        className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>

      {/* Hover 時顯示的提示文字（可選） */}
      <span
        className={cn(
          'absolute right-full mr-3 whitespace-nowrap',
          'rounded-lg bg-brand-black/90 px-3 py-2',
          'text-sm font-medium text-white',
          'opacity-0 transition-opacity duration-200',
          'group-hover:opacity-100',
          'pointer-events-none'
        )}
      >
        回到頂部
      </span>
    </button>
  );
}
