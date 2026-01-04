import { client } from '@/lib/sanity/client'
import { newsListQuery } from '@/lib/sanity/queries'
import { News } from '@/types/sanity'
import NewsClient from './NewsClient'

export const revalidate = 60 // 每60秒重新驗證一次

export default async function NewsPage() {
  const newsItems: News[] = await client.fetch(newsListQuery)
  return <NewsClient newsItems={newsItems} />
}
