'use client';

import { ReactNode, useEffect, useRef, useState, CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface MagazineImageRevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

type MagazineImageRevealStyle = CSSProperties & {
  '--magazine-delay'?: string;
};

/**
 * MagazineImageReveal
 *
 * 使用 IntersectionObserver 控制圖片進場，
 * 當元素進入視窗後才觸發下墜揭示動畫。
 */
export function MagazineImageReveal({ children, className, style, delay = 0 }: MagazineImageRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px 100px 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const mergedStyle: MagazineImageRevealStyle = {
    ...style,
    '--magazine-delay': `${delay}s`,
  };

  return (
    <div
      ref={containerRef}
      className={cn('magazine-image', isVisible && 'magazine-image-visible', className)}
      style={mergedStyle}
    >
      {children}
    </div>
  );
}
