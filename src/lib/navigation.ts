import { createNavigation } from 'next-intl/navigation';
import { locales } from '@/i18n';

/**
 * 建立 next-intl 的導航組件
 * 提供 Link, redirect, usePathname, useRouter 等功能
 */
export const { Link, redirect, usePathname, useRouter } =
  createNavigation({ locales });
