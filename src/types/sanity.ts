// Sanity 資料類型定義

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

export interface News {
  _id: string
  _type: 'news'
  title: string
  slug: {
    current: string
  }
  excerpt: string
  mainImage?: SanityImage
  imageUrl?: string
  category?: 'company' | 'industry' | 'project' | 'event'
  content: any[] // Block content
  author?: string
  publishedAt: string
  featured?: boolean
}

export interface HomeGalleryItem {
  _id: string
  _type: 'homeGallery'
  title: string
  image: SanityImage
  imageUrl?: string
  description?: string
  link?: string
  order: number
  enabled: boolean
}
