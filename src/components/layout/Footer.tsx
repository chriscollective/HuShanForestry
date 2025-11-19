import { Link } from '@/components/ui/Link';
import { SocialLinks } from '@/components/ui/SocialLinks';
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

      {/* 森林剪影裝飾 - 左下方 */}
      <div className="pointer-events-none absolute left-0 bottom-0 opacity-20" aria-hidden="true">
        <svg width="500" height="100" viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMax meet">
          <g fill="white">
            {/* 第一棵 - 高聳針葉樹 */}
            <path d="M 25 100 L 25 30 L 10 50 L 15 50 L 5 65 L 10 65 L 0 80 L 25 80 L 25 30 L 50 80 L 40 80 L 35 65 L 40 65 L 30 50 L 35 50 Z" />

            {/* 第二棵 - 矮松樹 */}
            <path d="M 75 100 L 75 60 L 65 70 L 70 70 L 60 85 L 90 85 L 80 70 L 85 70 Z" />

            {/* 第三棵 - 圓頂闊葉樹 */}
            <path d="M 120 100 L 120 75 Q 105 60 105 50 Q 105 35 120 25 Q 135 35 135 50 Q 135 60 120 75 Z" />

            {/* 第四棵 - 細高針葉樹 */}
            <path d="M 165 100 L 165 25 L 155 45 L 160 45 L 150 60 L 155 60 L 145 75 L 165 75 L 185 75 L 175 60 L 180 60 L 170 45 L 175 45 Z" />

            {/* 第五棵 - 蓬鬆圓樹 */}
            <circle cx="220" cy="55" r="30" />
            <rect x="215" y="75" width="10" height="25" />

            {/* 第六棵 - 中型針葉樹 */}
            <path d="M 270 100 L 270 40 L 260 55 L 265 55 L 255 70 L 285 70 L 275 55 L 280 55 Z" />

            {/* 第七棵 - 灌木叢 */}
            <ellipse cx="320" cy="85" rx="25" ry="18" />
            <ellipse cx="310" cy="90" rx="15" ry="12" />
            <ellipse cx="330" cy="90" rx="15" ry="12" />

            {/* 第八棵 - 高大松樹 */}
            <path d="M 370 100 L 370 20 L 360 40 L 365 40 L 355 55 L 360 55 L 350 70 L 355 70 L 345 85 L 370 85 L 395 85 L 385 70 L 390 70 L 380 55 L 385 55 L 375 40 L 380 40 Z" />

            {/* 第九棵 - 小圓樹 */}
            <circle cx="430" cy="75" r="20" />
            <rect x="426" y="85" width="8" height="15" />

            {/* 第十棵 - 最右側針葉樹 */}
            <path d="M 475 100 L 475 45 L 465 60 L 470 60 L 460 75 L 465 75 L 455 90 L 495 90 L 485 75 L 490 75 L 480 60 L 485 60 Z" />
          </g>
        </svg>
      </div>
      {/* 主要內容區 */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
          {/* 公司資訊 */}
          <div>
            <h3 className="mb-4 text-lg font-bold">虎山林業</h3>
            <p className="mb-4 text-sm text-gray-300">
              {siteConfig.description}
            </p>
            <p className="text-sm text-gray-400">
              Since {siteConfig.foundingYear}
            </p>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="mb-4 text-lg font-bold">快速連結</h3>
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
                        aria-label={subItem.ariaLabel}
                      >
                        {subItem.label}
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
                      aria-label={item.ariaLabel}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 服務項目 */}
          <div>
            <h3 className="mb-4 text-lg font-bold">服務項目</h3>
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
            <h3 className="text-lg font-bold">聯絡我們</h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-300">
                追蹤我們的社群媒體，了解最新林業資訊
              </p>
            </div>

            {/* 社群媒體連結 */}
            <SocialLinks
              links={siteConfig.socialLinks}
              size="md"
              theme="dark"
            />
          </div>
        </div>
      </div>

      {/* 版權聲明 */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <p className="text-sm text-gray-400">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>

            {/* 法律連結 */}
            <div className="flex gap-6">
              <Link
                href="/privacy"
                variant="footer"
                className="inline-flex min-h-[44px] items-center text-sm hover:no-underline"
              >
                隱私權政策
              </Link>
              <Link
                href="/terms"
                variant="footer"
                className="inline-flex min-h-[44px] items-center text-sm hover:no-underline"
              >
                服務條款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
