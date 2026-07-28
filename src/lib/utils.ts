import { clsx, type ClassValue } from "clsx";

/**
 * 合併 CSS class names
 * 使用 clsx 處理條件樣式
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
