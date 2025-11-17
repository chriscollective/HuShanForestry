'use client';

import { useState } from 'react';
import { Link } from '@/components/ui/Link';
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

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 bg-brand-white shadow-sm',
          'border-b border-gray-200',
          className
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" variant="nav" className="hover:no-underline">
                <span className="text-xl font-bold text-brand-black">
                  虎山林業
                </span>
                <span className="ml-2 hidden text-sm text-gray-600 sm:inline">
                  Since 2022
                </span>
              </Link>
            </div>

            {/* 桌面版導航選單 */}
            <div className="hidden md:flex md:items-center md:gap-6 lg:gap-10">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  variant="nav"
                  className="hover:no-underline"
                  aria-label={item.ariaLabel}
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA 按鈕 */}
              <Link href="/contact" variant="nav" aria-label="前往聯絡我們頁面">
                立即聯絡
              </Link>
            </div>

            {/* 行動版漢堡選單按鈕 */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={cn(
                  'inline-flex h-10 w-10 items-center justify-center rounded-md',
                  'text-brand-black hover:bg-gray-100',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange'
                )}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu-panel"
                aria-label={mobileMenuOpen ? '關閉主選單' : '開啟主選單'}
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
        </nav>
      </header>

      {/* 行動版選單覆蓋層 */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40">
          <div
            className="absolute inset-0 bg-black/25 backdrop-blur-sm"
            role="presentation"
            onClick={closeMobileMenu}
          />
          <div
            id="mobile-menu-panel"
            className="relative h-full overflow-y-auto bg-brand-white px-4 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
          >
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  variant="nav"
                  className={cn(
                    'w-full rounded-xl border border-gray-100 bg-white text-lg font-medium',
                    'px-4 py-3 hover:bg-brand-orange/10 hover:border-brand-orange/30 hover:no-underline',
                    'focus-visible:border-brand-orange/40 focus-visible:bg-brand-orange/10'
                  )}
                  aria-label={item.ariaLabel}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className={cn(
                  'mt-4 w-full rounded-2xl bg-brand-orange px-6 py-3 text-center text-base font-semibold text-white',
                  'shadow-lg transition hover:bg-[#E55A2A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange'
                )}
                aria-label="前往聯絡我們頁面"
                onClick={closeMobileMenu}
              >
                立即聯絡
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
