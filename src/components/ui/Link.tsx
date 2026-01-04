import { Link as NextIntlLink } from '@/lib/navigation';
import { AnchorHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /**
   * 連結目標 URL
   */
  href: string;

  /**
   * 是否為外部連結
   * 外部連結會開啟新視窗並加上 rel="noopener noreferrer"
   */
  external?: boolean;

  /**
   * 連結樣式變體
   * default: 預設樣式（品牌橘色）
   * nav: 導航列樣式（黑色文字）
   * footer: 頁尾樣式（深色背景用）
   */
  variant?: 'default' | 'nav' | 'footer';

  /**
   * 是否顯示下底線
   */
  underline?: boolean;
}

/**
 * Link 元件
 *
 * 整合 Next.js Link 的連結元件
 * 自動處理內部/外部連結
 *
 * @example
 * <Link href="/about">關於我們</Link>
 * <Link href="https://facebook.com" external>Facebook</Link>
 * <Link href="/services" variant="nav">服務項目</Link>
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({
    className,
    href,
    external = false,
    variant = 'default',
    underline = false,
    children,
    ...props
  }, ref) => {
    const showDefaultUnderline = variant !== 'nav';

    const linkClasses = cn(
      // 基礎樣式
      'flex items-center gap-1 rounded-md',
      'touch-manipulation',
      'transition-colors duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-orange',

      // 變體樣式
      {
        // Default: 品牌橘色連結
        'text-brand-orange hover:text-[#E55A2A]': variant === 'default',

        // Nav: 導航列樣式
        'relative text-brand-black hover:text-brand-orange font-medium px-3 py-2 min-h-[44px] no-underline after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-1 after:h-[2px] after:w-0 after:bg-brand-orange after:rounded-full after:transition-all after:duration-200 after:ease-out hover:after:w-full focus-visible:after:w-full':
          variant === 'nav',

        // Footer: 頁尾樣式（淺色文字）
        'text-brand-white hover:text-brand-orange': variant === 'footer',
      },

      // 下底線樣式
      {
        'underline underline-offset-4': underline && showDefaultUnderline,
        'hover:underline hover:underline-offset-4': !underline && showDefaultUnderline,
      },

      className
    );

    // 外部連結
    if (external) {
      return (
        <a
          ref={ref}
          href={href}
          className={linkClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
          <span className="sr-only">(在新視窗開啟)</span>
        </a>
      );
    }

    // 內部連結（使用 next-intl Link，支援多語言路由）
    return (
      <NextIntlLink
        ref={ref}
        href={href}
        className={linkClasses}
        {...props}
      >
        {children}
      </NextIntlLink>
    );
  }
);

Link.displayName = 'Link';
