import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: '首頁圖檔',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '圖片標題',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: '圖片',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alt',
      title: '替代文字',
      type: 'string',
      description: '圖片的替代文字說明（用於無障礙和 SEO）',
    }),
    defineField({
      name: 'caption',
      title: '圖片說明',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'category',
      title: '分類',
      type: 'string',
      options: {
        list: [
          { title: '森林收穫', value: '森林收穫' },
          { title: '原木買賣', value: '原木買賣' },
          { title: '經營規劃', value: '經營規劃' },
          { title: '設備展示', value: '設備展示' },
          { title: '團隊活動', value: '團隊活動' },
          { title: '其他', value: '其他' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: '排序',
      type: 'number',
      description: '數字越小越前面',
      initialValue: 0,
    }),
    defineField({
      name: 'active',
      title: '啟用',
      type: 'boolean',
      description: '是否在首頁畫廊中顯示',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: '排序（小到大）',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: '分類',
      name: 'category',
      by: [{ field: 'category', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
      active: 'active',
    },
    prepare(selection) {
      const { title, subtitle, active } = selection
      return {
        title: `${active ? '✓' : '✗'} ${title}`,
        subtitle: subtitle || '未分類',
        media: selection.media,
      }
    },
  },
})
