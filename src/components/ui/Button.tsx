import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 按鈕樣式變體
   * primary: 品牌橘色主按鈕
   * secondary: 次要按鈕（白底黑框）
   * ghost: 透明背景按鈕
   */
  variant?: 'primary' | 'secondary' | 'ghost';

  /**
   * 按鈕尺寸
   * sm: 小尺寸
   * md: 中尺寸（預設）
   * lg: 大尺寸
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * 是否為全寬按鈕
   */
  fullWidth?: boolean;
}

/**
 * Button 元件
 *
 * 提供多種樣式變體和尺寸的按鈕元件
 * 使用虎山林業品牌色彩系統
 *
 * @example
 * <Button variant="primary" size="md">立即聯絡</Button>
 * <Button variant="secondary">了解更多</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    children,
    ...props
  }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // 基礎樣式
          'inline-flex items-center justify-center',
          'font-medium rounded-lg',
          'transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',

          // 變體樣式
          {
            // Primary: 品牌橘色背景
            'bg-brand-orange text-brand-white hover:bg-[#E55A2A] focus:ring-brand-orange':
              variant === 'primary',

            // Secondary: 白底黑框
            'bg-brand-white text-brand-black border-2 border-brand-black hover:bg-gray-50 focus:ring-brand-black':
              variant === 'secondary',

            // Ghost: 透明背景
            'bg-transparent text-brand-black hover:bg-gray-100 focus:ring-gray-300':
              variant === 'ghost',
          },

          // 尺寸樣式
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-5 py-2.5 text-base': size === 'md',
            'px-7 py-3.5 text-lg': size === 'lg',
          },

          // 全寬樣式
          {
            'w-full': fullWidth,
          },

          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
