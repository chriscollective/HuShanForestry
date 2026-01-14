import { type SchemaTypeDefinition } from 'sanity'
import news from './news'
import blog from './blog'
import service from './service'
import galleryImage from './galleryImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, blog, service, galleryImage],
}
