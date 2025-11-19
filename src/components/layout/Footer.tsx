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
      <div className="pointer-events-none absolute left-0 bottom-0 opacity-15" aria-hidden="true">
        <svg width="400" height="120" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMax meet">
          <g fill="white">
            {/* 第一棵樹 - 高大的松樹 */}
            <path d="M 20 120 L 20 50 L 15 50 L 30 20 L 45 50 L 40 50 L 40 120 Z" />
            <path d="M 30 45 L 20 60 L 40 60 Z" opacity="0.8" />
            <path d="M 30 65 L 15 85 L 45 85 Z" opacity="0.6" />

            {/* 第二棵樹 - 中等針葉樹 */}
            <path d="M 70 120 L 70 70 L 65 70 L 75 45 L 85 70 L 80 70 L 80 120 Z" />
            <path d="M 75 60 L 67 75 L 83 75 Z" opacity="0.7" />

            {/* 第三棵樹 - 矮樹叢 */}
            <ellipse cx="115" cy="105" rx="20" ry="15" />
            <ellipse cx="125" cy="100" rx="18" ry="18" opacity="0.8" />
            <ellipse cx="105" cy="100" rx="15" ry="13" opacity="0.7" />

            {/* 第四棵樹 - 高松樹 */}
            <path d="M 155 120 L 155 40 L 150 40 L 165 10 L 180 40 L 175 40 L 175 120 Z" />
            <path d="M 165 35 L 155 50 L 175 50 Z" opacity="0.8" />
            <path d="M 165 55 L 150 75 L 180 75 Z" opacity="0.6" />
            <path d="M 165 80 L 145 95 L 185 95 Z" opacity="0.5" />

            {/* 第五棵樹 - 圓形樹冠 */}
            <rect x="200" y="90" width="8" height="30" />
            <circle cx="204" cy="85" r="20" opacity="0.9" />
            <circle cx="210" cy="75" r="15" opacity="0.7" />
            <circle cx="198" cy="75" r="15" opacity="0.7" />

            {/* 第六棵樹 - 中型針葉樹 */}
            <path d="M 245 120 L 245 65 L 240 65 L 252 35 L 264 65 L 259 65 L 259 120 Z" />
            <path d="M 252 55 L 243 70 L 261 70 Z" opacity="0.7" />
            <path d="M 252 75 L 238 90 L 266 90 Z" opacity="0.6" />

            {/* 第七棵樹 - 矮灌木 */}
            <path d="M 290 120 L 290 100 Q 285 95 285 90 Q 285 85 290 80 Q 295 85 295 90 Q 295 95 290 100 Z" />
            <ellipse cx="295" cy="105" rx="12" ry="10" opacity="0.7" />

            {/* 第八棵樹 - 小松樹 */}
            <path d="M 325 120 L 325 75 L 320 75 L 330 50 L 340 75 L 335 75 L 335 120 Z" />
            <path d="M 330 68 L 323 80 L 337 80 Z" opacity="0.7" />

            {/* 第九棵樹 - 最右側的高樹 */}
            <path d="M 370 120 L 370 55 L 365 55 L 378 25 L 391 55 L 386 55 L 386 120 Z" />
            <path d="M 378 50 L 370 65 L 386 65 Z" opacity="0.8" />
            <path d="M 378 70 L 365 88 L 391 88 Z" opacity="0.6" />
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
