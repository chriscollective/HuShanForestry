import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homeGallery',
  title: '首頁畫廊',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '圖片標題',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: '圖片',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '替代文字',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: '描述',
      type: 'text',
      rows: 2,
      description: '簡短描述這張圖片的內容',
    }),
    defineField({
      name: 'link',
      title: '連結',
      type: 'url',
      description: '點擊圖片時的跳轉連結（選填）',
    }),
    defineField({
      name: 'order',
      title: '排序',
      type: 'number',
      description: '數字越小越前面',
      validation: (Rule) => Rule.required().min(0),
      initialValue: 0,
    }),
    defineField({
      name: 'enabled',
      title: '啟用',
      type: 'boolean',
      description: '是否在首頁顯示此圖片',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      order: 'order',
      enabled: 'enabled',
    },
    prepare(selection) {
      const { title, media, order, enabled } = selection
      return {
        title: `${order}. ${title}`,
        subtitle: enabled ? '✅ 已啟用' : '❌ 未啟用',
        media,
      }
    },
  },
  orderings: [
    {
      title: '排序（小到大）',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
