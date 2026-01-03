import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: '虎山林業 CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/admin',

  plugins: [
    structureTool(),
    // 只在開發環境顯示 Vision 工具，正式環境隱藏（客戶不需要看到）
    ...(process.env.NODE_ENV === 'development' ? [visionTool()] : []),
  ],

  schema,
})
