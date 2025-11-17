'use client';

import { useState } from 'react';
import { Link } from '@/components/ui/Link';
import { Button } from '@/components/ui/Button';
import { navigationItems } from '@/config/navigation';
import { cn } from '@/lib/utils';

export interface HeaderProps {
  /**
   * 自訂 className
   */
  className?: string;
}

/**
 * Header 元件
 *
 * 網站主導航列
 * 包含 Logo、導航選單、行動裝置漢堡選單
 *
 * 響應式設計：
 * - 桌面版（≥768px）：水平導航列
 * - 行動版（<768px）：漢堡選單
 */
export function Header({ className }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50',
        'bg-brand-white border-b border-gray-200',
        'shadow-sm',
        className
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" variant="nav" className="hover:no-underline">
              <span className="text-xl font-bold text-brand-black">
                虎山林業
              </span>
              <span className="ml-2 text-sm text-gray-600 hidden sm:inline">
                Since 2022
              </span>
            </Link>
          </div>

          {/* 桌面版導航選單 */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                variant="nav"
                className="text-sm hover:no-underline"
                aria-label={item.ariaLabel}
              >
                {item.label}
              </Link>
            ))}

            {/* CTA 按鈕 */}
            <Button variant="primary" size="sm">
              立即聯絡
            </Button>
          </div>

          {/* 行動版漢堡選單按鈕 */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                'inline-flex items-center justify-center p-2',
                'rounded-md text-brand-black',
                'hover:bg-gray-100',
                'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-orange'
              )}
              aria-expanded={mobileMenuOpen}
              aria-label="開啟主選單"
            >
              <span className="sr-only">
                {mobileMenuOpen ? '關閉主選單' : '開啟主選單'}
              </span>
              {/* 漢堡圖示 */}
              {!mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                // X 關閉圖示
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* 行動版選單內容 */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  variant="nav"
                  className={cn(
                    'block px-3 py-2 rounded-md text-base',
                    'hover:bg-gray-50 hover:no-underline'
                  )}
                  aria-label={item.ariaLabel}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* 行動版 CTA 按鈕 */}
              <div className="px-3 pt-2">
                <Button variant="primary" size="md" fullWidth>
                  立即聯絡
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
