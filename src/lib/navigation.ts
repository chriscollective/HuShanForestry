import { createNavigation } from 'next-intl/navigation';
import { locales } from '@/i18n';

/**
 * next-intl 導航工具：內建語系前綴
 */
export const { Link, redirect, usePathname, useRouter } =
  createNavigation({ locales, localePrefix: 'always' });
