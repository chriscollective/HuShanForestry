import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'news',
  title: '新聞文章',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '標題',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '網址代稱',
      type: 'slug',
      options: {
        source: 'date',
        maxLength: 96,
        slugify: (input: string) => {
          // 將發布日期轉換為 YYYY-MM-DD 格式作為 slug
          const date = new Date(input);
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          return `${year}-${month}-${day}`;
        },
      },
      description: '請手動輸入網址代稱，建議格式：YYYY-MM-DD（如：2026-01-03）',
    }),
    defineField({
      name: 'author',
      title: '作者',
      type: 'string',
      initialValue: '虎山林業',
    }),
    defineField({
      name: 'date',
      title: '發布日期',
      type: 'datetime',
      validation: (rule) => rule.required(),
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
          { title: '企業活動', value: '企業活動' },
          { title: '人才招募', value: '人才招募' },
          { title: '教育活動', value: '教育活動' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: '摘要',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'content',
      title: '內容',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'image',
      title: '特色圖片',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featured',
      title: '精選文章',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'image',
    },
    prepare(selection) {
      const { title, date } = selection
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString('zh-TW') : '未設定日期',
        media: selection.media,
      }
    },
  },
})
