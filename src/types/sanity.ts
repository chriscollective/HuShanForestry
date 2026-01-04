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
  excerpt?: string
  image?: SanityImage
  category?: 'event' | 'service' | 'news' | 'recruit' | 'operation' | 'other'
  content?: any[] // Block content
  author?: string
  date: string
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
