'use client';

import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMobileItem(null);
  };

  const toggleMobileSubMenu = (label: string) => {
    setExpandedMobileItem(expandedMobileItem === label ? null : label);
  };

  // 滾動到頂部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 處理首頁/Logo 點擊
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      scrollToTop();
    }
  };

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
              <Link
                href="/"
                variant="nav"
                className="items-center gap-4 hover:no-underline"
                aria-label="返回虎山林業首頁"
                onClick={handleHomeClick}
              >
                <Image
                  src="/icons/icon.jpg"
                  alt="虎山林業 Logo"
                  width={50}
                  height={50}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-brand-black">
                    虎山林業
                  </span>
                  <span className="text-sm uppercase tracking-[0.2em] text-gray-500">
                    Since 2022
                  </span>
                </div>
              </Link>
            </div>

            {/* 桌面版導航選單 */}
            <div className="hidden md:flex md:items-center md:gap-6 lg:gap-10">
              {navigationItems.map((item, index) => (
                <div key={item.href || item.label} className="flex items-center gap-6 lg:gap-10">
                  {/* 導航項目 */}
                  {item.subItems && item.subItems.length > 0 ? (
                    // 有子選單的項目
                    <div className="group relative">
                      <button
                        className={cn(
                          'relative flex items-center gap-1 rounded-md px-3 py-2 text-brand-black font-medium',
                          'min-h-[44px] transition-colors duration-200',
                          'hover:text-brand-orange',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-orange'
                        )}
                        aria-label={item.ariaLabel}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <svg
                          className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>

                      {/* 下拉選單 */}
                      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="rounded-xl border border-gray-200 bg-white py-2 shadow-xl min-w-[200px]">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={cn(
                                'block px-4 py-3 text-sm !text-brand-black',
                                'hover:bg-brand-orange/10 hover:!text-brand-orange',
                                'transition-colors duration-200',
                                'focus-visible:outline-none focus-visible:bg-brand-orange/10'
                              )}
                              aria-label={subItem.ariaLabel}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // 沒有子選單的一般項目
                    <Link
                      href={item.href!}
                      variant="nav"
                      className="hover:no-underline"
                      aria-label={item.ariaLabel}
                      onClick={item.href === '/' ? handleHomeClick : undefined}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* 分隔線（最後一項不顯示） */}
                  {index < navigationItems.length - 1 && (
                    <div className="h-6 w-[2px] bg-brand-black" aria-hidden="true" />
                  )}
                </div>
              ))}

              {/* 分隔線（在 CTA 前） */}
              <div className="h-6 w-[2px] bg-brand-black" aria-hidden="true" />

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
              {navigationItems.map((item) => {
                // 有子選單的項目
                if (item.subItems && item.subItems.length > 0) {
                  const isExpanded = expandedMobileItem === item.label;
                  return (
                    <div key={item.label} className="space-y-1">
                      <button
                        onClick={() => toggleMobileSubMenu(item.label)}
                        className={cn(
                          'flex w-full items-center justify-between rounded-xl border border-gray-100 bg-white text-lg font-medium',
                          'px-4 py-3 hover:bg-brand-orange/10 hover:border-brand-orange/30',
                          'focus-visible:border-brand-orange/40 focus-visible:bg-brand-orange/10',
                          isExpanded && 'bg-brand-orange/5 border-brand-orange/20'
                        )}
                        aria-expanded={isExpanded}
                        aria-label={item.ariaLabel}
                      >
                        <span className="text-brand-black">{item.label}</span>
                        <svg
                          className={cn(
                            'h-5 w-5 text-brand-black transition-transform duration-200',
                            isExpanded && 'rotate-180'
                          )}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>

                      {/* 子選單 */}
                      {isExpanded && (
                        <div className="ml-4 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={cn(
                                'block rounded-lg border border-gray-100 bg-gray-50 px-4 py-2.5 text-base',
                                '!text-brand-black hover:bg-brand-orange/10 hover:border-brand-orange/20 hover:!text-brand-orange',
                                'focus-visible:border-brand-orange/30 focus-visible:bg-brand-orange/10'
                              )}
                              aria-label={subItem.ariaLabel}
                              onClick={closeMobileMenu}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // 沒有子選單的一般項目
                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    variant="nav"
                    className={cn(
                      'w-full rounded-xl border border-gray-100 bg-white text-lg font-medium',
                      'px-4 py-3 hover:bg-brand-orange/10 hover:border-brand-orange/30 hover:no-underline',
                      'focus-visible:border-brand-orange/40 focus-visible:bg-brand-orange/10'
                    )}
                    aria-label={item.ariaLabel}
                    onClick={(e) => {
                      closeMobileMenu();
                      if (item.href === '/') {
                        handleHomeClick(e);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}

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
