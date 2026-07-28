import { client } from '@/lib/sanity/client'
import { blogListQuery } from '@/lib/sanity/queries'
import { Blog } from '@/types/sanity'
import BlogClient from './BlogClient'

export const revalidate = 60 // 每60秒重新驗證一次

export default async function BlogPage() {
  const blogItems: Blog[] = await client.fetch(blogListQuery)
  return <BlogClient blogItems={blogItems} />
}
