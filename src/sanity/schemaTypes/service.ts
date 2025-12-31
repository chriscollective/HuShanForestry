import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: '服務項目',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '服務名稱',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '網址代稱',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: '圖示',
      type: 'string',
      description: '服務圖示名稱或類別',
    }),
    defineField({
      name: 'description',
      title: '簡短描述',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'content',
      title: '詳細內容',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'features',
      title: '服務特色',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: '服務圖片',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: '排序',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'active',
      title: '啟用',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: '排序（小到大）',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
})
