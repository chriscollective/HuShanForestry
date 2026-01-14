import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schemaTypes'
import { StudioLogo } from './src/sanity/components/StudioLogo'
import { StudioNavbar } from './src/sanity/components/StudioNavbar'

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

  // 自訂 CMS 後台 Logo
  icon: StudioLogo,

  // 自訂導航欄，添加返回首頁按鈕
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
})
