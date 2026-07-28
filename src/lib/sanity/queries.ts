import { groq } from 'next-sanity'

// 取得所有新聞文章（依日期排序）
export const newsListQuery = groq`
  *[_type == "news"] | order(date desc) {
    _id,
    title,
    slug,
    excerpt,
    date,
    image,
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
    date,
    image,
    category,
    author
  }
`

// 取得首頁畫廊圖片
export const homeGalleryQuery = groq`
  *[_type == "galleryImage" && active == true] | order(order asc) {
    _id,
    title,
    image,
    alt,
    caption,
    category,
    order
  }
`

// 取得最新 N 篇新聞
export const latestNewsQuery = groq`
  *[_type == "news"] | order(date desc) [0...$limit] {
    _id,
    title,
    slug,
    excerpt,
    date,
    image,
    category
  }
`

// Blog 專欄查詢
export const blogListQuery = groq`
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    coverImage,
    category,
    author,
    tags
  }
`

// 取得單篇 Blog 文章
export const blogDetailQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    coverImage,
    category,
    author,
    tags
  }
`
