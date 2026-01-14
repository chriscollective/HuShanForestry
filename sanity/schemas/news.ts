import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'news',
  title: '新聞文章',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '標題',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: '發布日期',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '網址名稱',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: '摘要',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'mainImage',
      title: '主要圖片',
      type: 'image',
      options: {
        hotspot: true, // 啟用圖片裁切功能
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '替代文字',
          description: '用於無障礙和 SEO',
        },
      ],
    }),
    defineField({
      name: 'category',
      title: '分類',
      type: 'string',
      options: {
        list: [
          { title: '公司新聞', value: 'company' },
          { title: '產業動態', value: 'industry' },
          { title: '專案成果', value: 'project' },
          { title: '活動公告', value: 'event' },
        ],
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
            { title: '標題 1', value: 'h1' },
            { title: '標題 2', value: 'h2' },
            { title: '標題 3', value: 'h3' },
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
      name: 'author',
      title: '作者',
      type: 'string',
      initialValue: '虎山林業',
    }),
    defineField({
      name: 'featured',
      title: '置頂文章',
      type: 'boolean',
      description: '此文章會顯示在首頁',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare(selection) {
      const { title, author, media, date } = selection
      return {
        title,
        subtitle: `${author} - ${new Date(date).toLocaleDateString('zh-TW')}`,
        media,
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
