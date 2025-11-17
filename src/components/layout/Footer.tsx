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
    <footer className={`bg-forest-dark text-brand-white ${className || ''}`}>
      {/* 主要內容區 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 公司資訊 */}
          <div>
            <h3 className="text-lg font-bold mb-4">虎山林業</h3>
            <p className="text-sm text-gray-300 mb-4">
              {siteConfig.description}
            </p>
            <p className="text-sm text-gray-400">
              Since {siteConfig.foundingYear}
            </p>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="text-lg font-bold mb-4">快速連結</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    variant="footer"
                    className="text-sm hover:no-underline"
                    aria-label={item.ariaLabel}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 服務項目 */}
          <div>
            <h3 className="text-lg font-bold mb-4">服務項目</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    variant="footer"
                    className="text-sm hover:no-underline"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 聯絡資訊與社群媒體 */}
          <div>
            <h3 className="text-lg font-bold mb-4">聯絡我們</h3>
            <div className="space-y-3 mb-4">
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
      <div className="border-t border-forest-green/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>

            {/* 法律連結 */}
            <div className="flex gap-6">
              <Link
                href="/privacy"
                variant="footer"
                className="text-sm hover:no-underline"
              >
                隱私權政策
              </Link>
              <Link
                href="/terms"
                variant="footer"
                className="text-sm hover:no-underline"
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
