import { client } from '@/lib/sanity/client'
import { newsListQuery } from '@/lib/sanity/queries'
import { News } from '@/types/sanity'
import NewsClient from './NewsClient'

export const revalidate = 60 // 每60秒重新驗證一次

export default async function NewsPage() {
  // 除錯：檢查 client 配置
  console.log('🔧 Sanity Config:', {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  })

  // 測試最簡單的查詢
  const testQuery = `*[_type == "news"]`
  const newsItems: News[] = await client.fetch(testQuery)

  console.log('📰 News query result:', newsItems)
  console.log('📰 News count:', newsItems.length)

  // 如果還是空的，嘗試查詢所有文檔
  if (newsItems.length === 0) {
    const allDocs = await client.fetch(`*[_type in ["news", "homeGallery"]]`)
    console.log('🔍 All docs:', allDocs)
  }

  return <NewsClient newsItems={newsItems} />
}
