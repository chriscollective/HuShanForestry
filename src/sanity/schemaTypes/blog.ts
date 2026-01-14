import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog 專欄',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '標題',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: '發布日期',
      type: 'datetime',
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
      description: '文章的網址路徑，建議使用英文',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: '作者',
      type: 'string',
      initialValue: '虎山林業',
    }),
    defineField({
      name: 'category',
      title: '分類',
      type: 'string',
      options: {
        list: [
          { title: '森林知識', value: 'forest-knowledge' },
          { title: '樹木介紹', value: 'tree-introduction' },
          { title: '林業法規', value: 'forestry-regulations' },
          { title: '永續經營', value: 'sustainability' },
          { title: '案例分享', value: 'case-study' },
          { title: '其他', value: 'other' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: '摘要',
      type: 'text',
      rows: 3,
      description: '文章簡短描述，顯示在列表頁',
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'coverImage',
      title: '封面圖片',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      title: '內容',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: '正文', value: 'normal' },
            { title: '標題 2', value: 'h2' },
            { title: '標題 3', value: 'h3' },
            { title: '標題 4', value: 'h4' },
            { title: '引用', value: 'blockquote' },
          ],
          lists: [
            { title: '項目符號', value: 'bullet' },
            { title: '編號清單', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: '粗體', value: 'strong' },
              { title: '斜體', value: 'em' },
              { title: '底線', value: 'underline' },
            ],
            annotations: [
              {
                title: '連結',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: '網址',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: '替代文字',
            },
            {
              name: 'caption',
              type: 'string',
              title: '圖說',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'tags',
      title: '標籤',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: '用於 SEO 和分類，可輸入多個標籤',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      date: 'publishedAt',
      media: 'coverImage',
    },
    prepare(selection) {
      const { title, author, date } = selection
      return {
        title,
        subtitle: `${author || '未知作者'} - ${date ? new Date(date).toLocaleDateString('zh-TW') : '未設定日期'}`,
        media: selection.media,
      }
    },
  },
  orderings: [
    {
      title: '發布日期（新到舊）',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: '發布日期（舊到新）',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
  ],
})
