export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  /** 服務圖示（emoji 或 icon） */
  icon?: string;
  /** 服務分類標籤 */
  category?: string;
  /** 服務特色列表 */
  features?: string[];
}
