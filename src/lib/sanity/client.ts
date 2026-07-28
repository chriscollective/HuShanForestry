import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-12-31',
  useCdn: false, // 開發時停用 CDN 以獲取最新資料
})

// 圖片 URL 建構器
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
