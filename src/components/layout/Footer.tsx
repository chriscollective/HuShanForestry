'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/components/ui/Link';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { siteConfig } from '@/config/site';
import { navigationItems } from '@/config/navigation';
import { services } from '@/config/services';

export interface FooterProps {
  /**
   * 自訂 className
   */
  className?: string;
}

/**
 * Footer 元件
 *
 * 網站頁尾
 * 包含公司資訊、快速連結、服務項目、社群媒體連結
 *
 * 響應式設計：
 * - 桌面版（≥768px）：四欄式佈局
 * - 行動版（<768px）：單欄堆疊
 */
export function Footer({ className }: FooterProps) {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative overflow-hidden bg-brand-black text-brand-white ${className || ''}`}>
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute left-0 top-0 h-3/4 w-1/3 bg-[rgba(255,255,255,0.05)]" />
        <div className="absolute right-[-10%] top-[15%] h-2/3 w-1/2 -rotate-3 bg-[rgba(255,255,255,0.08)]" />
        <div className="absolute left-[25%] bottom-[-20%] h-[55%] w-[40%] rotate-6 bg-[rgba(255,255,255,0.03)]" />
        <div className="absolute right-[15%] bottom-[10%] h-[30%] w-[25%] rotate-12 bg-[rgba(255,255,255,0.06)]" />
        <div className="absolute left-[60%] top-[-10%] h-[45%] w-[20%] -rotate-6 bg-[rgba(255,255,255,0.04)]" />
      </div>

      {/* 主要內容區 */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
          {/* 公司資訊 */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{t('companyName')}</h3>
            <p className="mb-4 text-sm text-gray-300">
              {siteConfig.description}
            </p>
            <p className="text-sm text-gray-400">
              {t('since')} {siteConfig.foundingYear}
            </p>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => {
                // 如果有子選單，顯示所有子項目
                if (item.subItems && item.subItems.length > 0) {
                  return item.subItems.map((subItem) => (
                    <li key={subItem.href}>
                      <Link
                        href={subItem.href}
                        variant="footer"
                        className="inline-flex min-h-[44px] items-center text-sm hover:no-underline"
                        aria-label={tn(subItem.ariaLabel!)}
                      >
                        {tn(subItem.label)}
                      </Link>
                    </li>
                  ));
                }

                // 沒有子選單的一般項目
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href!}
                      variant="footer"
                      className="inline-flex min-h-[44px] items-center text-sm hover:no-underline"
                      aria-label={tn(item.ariaLabel!)}
                    >
                      {tn(item.label)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 服務項目 */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{t('servicesTitle')}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    variant="footer"
                    className="inline-flex min-h-[44px] items-center text-sm hover:no-underline"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 聯絡資訊與社群媒體 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t('contactUs')}</h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-300">
                {t('followUs')}
              </p>
            </div>

            {/* 社群媒體連結 */}
            <SocialLinks
              links={siteConfig.socialLinks}
              size="md"
              theme="dark"
            />

            {/* 語言切換器 */}
            <div className="pt-2">
              <LanguageSwitcher variant="footer" />
            </div>
          </div>
        </div>
      </div>

      {/* 版權聲明 */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <p className="text-sm text-gray-400">
              {t('copyright', { year: currentYear, name: siteConfig.name })}
            </p>

            {/* 法律連結 */}
            <div className="flex gap-6">
              <Link
                href="/privacy"
                variant="footer"
                className="inline-flex min-h-[44px] items-center text-sm hover:no-underline"
              >
                {t('privacy')}
              </Link>
              <Link
                href="/terms"
                variant="footer"
                className="inline-flex min-h-[44px] items-center text-sm hover:no-underline"
              >
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
