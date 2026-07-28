'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/lib/navigation';
import { useState, useRef, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * 語言選項設定
 */
const languageOptions: Record<Locale, { label: string; flag: string }> = {
  'zh-TW': {
    label: '繁體中文',
    flag: '🇹🇼',
  },
  en: {
    label: 'English',
    flag: '🇬🇧',
  },
  ja: {
    label: '日本語',
    flag: '🇯🇵',
  },
};

export interface LanguageSwitcherProps {
  /**
   * 樣式變體
   * - header: 用於導航列
   * - footer: 用於頁尾
   */
  variant?: 'header' | 'footer';
  /**
   * 自訂 className
   */
  className?: string;
}

/**
 * LanguageSwitcher 組件
 *
 * 多語言切換選單
 * 支援繁體中文、英文、日文
 *
 * 功能：
 * - 下拉選單切換語言
 * - 保持當前頁面路徑
 * - 無障礙支援
 */
export function LanguageSwitcher({ variant = 'header', className }: LanguageSwitcherProps) {
  const t = useTranslations('language');
  const params = useParams();
  // 從 URL 參數獲取當前語言，確保與實際 URL 同步
  const locale = (params?.locale || useLocale()) as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 點擊外部關閉下拉選單
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // 處理語言切換
  const handleLanguageChange = (newLocale: Locale) => {
    setIsOpen(false);

    // 使用 window.location.pathname 獲取完整路徑，然後移除當前語言代碼
    const fullPath = window.location.pathname;
    // 移除路徑開頭的語言代碼（例如 /zh-TW, /en, /ja）
    const pathWithoutLocale = fullPath.replace(/^\/(zh-TW|en|ja)/, '') || '/';

    // 導航到新語言的相同頁面
    router.push(pathWithoutLocale, { locale: newLocale });
  };

  const currentLanguage = languageOptions[locale];

  // Header 樣式
  if (variant === 'header') {
    return (
      <div ref={dropdownRef} className={cn('relative', className)}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'flex items-center gap-2 rounded-md px-3 py-2',
            'text-brand-black font-medium transition-colors duration-200',
            'hover:text-brand-orange hover:bg-brand-orange/10',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-orange'
          )}
          aria-label={t('select')}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <Globe className="h-5 w-5" />
          <span className="hidden sm:inline">{currentLanguage.flag} {currentLanguage.label}</span>
          <span className="sm:hidden">{currentLanguage.flag}</span>
          <svg
            className={cn('h-4 w-4 transition-transform duration-200', isOpen && 'rotate-180')}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-2 z-50">
            <div className="rounded-xl border border-gray-200 bg-white py-2 shadow-xl min-w-[180px]">
              {locales.map((loc) => {
                const lang = languageOptions[loc];
                const isActive = loc === locale;

                return (
                  <button
                    key={loc}
                    onClick={() => handleLanguageChange(loc)}
                    className={cn(
                      'flex w-full items-center gap-3 px-4 py-3 text-sm',
                      'hover:bg-brand-orange/10 hover:text-brand-orange',
                      'transition-colors duration-200',
                      'focus-visible:outline-none focus-visible:bg-brand-orange/10',
                      isActive && 'bg-brand-orange/5 text-brand-orange font-medium'
                    )}
                    aria-label={`${t('select')}: ${lang.label}`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.label}</span>
                    {isActive && (
                      <svg
                        className="ml-auto h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Footer 樣式
  return (
    <div ref={dropdownRef} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 rounded-md px-3 py-2',
          'text-gray-300 transition-colors duration-200',
          'hover:text-white hover:bg-white/10',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-orange'
        )}
        aria-label={t('select')}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-5 w-5" />
        <span>{currentLanguage.flag} {currentLanguage.label}</span>
        <svg
          className={cn('h-4 w-4 transition-transform duration-200', isOpen && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 z-50">
          <div className="rounded-xl border border-gray-700 bg-gray-800 py-2 shadow-xl min-w-[180px]">
            {locales.map((loc) => {
              const lang = languageOptions[loc];
              const isActive = loc === locale;

              return (
                <button
                  key={loc}
                  onClick={() => handleLanguageChange(loc)}
                  className={cn(
                    'flex w-full items-center gap-3 px-4 py-3 text-sm',
                    'text-gray-300 hover:bg-white/10 hover:text-white',
                    'transition-colors duration-200',
                    'focus-visible:outline-none focus-visible:bg-white/10',
                    isActive && 'bg-white/5 text-white font-medium'
                  )}
                  aria-label={`${t('select')}: ${lang.label}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span>{lang.label}</span>
                  {isActive && (
                    <svg
                      className="ml-auto h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
