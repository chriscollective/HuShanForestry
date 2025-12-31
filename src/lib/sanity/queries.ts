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
    category,
    featured
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
    author,
    featured
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
