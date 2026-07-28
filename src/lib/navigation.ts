import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from '@/locales';

/**
 * next-intl 導航工具：內建語系前綴
 */
export const { Link, redirect, usePathname, useRouter } =
  createNavigation({
    locales,
    defaultLocale,
    localePrefix: 'always'
  });
