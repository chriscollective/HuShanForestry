import { groq } from 'next-sanity'

// 取得所有新聞文章（依日期排序）
export const newsListQuery = groq`
  *[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    category
  }
`

// 取得單篇新聞文章
export const newsDetailQuery = groq`
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    category,
    author
  }
`

// 取得首頁畫廊圖片
export const homeGalleryQuery = groq`
  *[_type == "homeGallery" && enabled == true] | order(order asc) {
    _id,
    title,
    "imageUrl": image.asset->url,
    order
  }
`

// 取得最新 N 篇新聞
export const latestNewsQuery = groq`
  *[_type == "news"] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "imageUrl": mainImage.asset->url
  }
`
