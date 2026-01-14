# 虎山林業官方網站 - Claude Code 專案指示

## 專案概述

這是「虎山林業」(HuShan Forestry) 的官方網站專案，一家由六位熱愛森林的台灣青年於 2022 年創立的林木業公司。

## 技術棧

- **框架**: Next.js 16 (App Router)
- **前端**: React 19、TypeScript
- **樣式**: Tailwind CSS 4
- **CMS**: Sanity Studio
- **多國語言**: next-intl
- **部署**: Vercel

## 專案結構

```
src/
├── app/              # Next.js App Router 頁面
├── components/       # React 元件
├── config/           # 設定檔
├── lib/              # 工具函數
├── sanity/           # Sanity 相關設定與查詢
├── styles/           # 全域樣式
└── types/            # TypeScript 型別定義

messages/             # i18n 翻譯檔案
sanity/               # Sanity Studio 根目錄設定
```

## 開發規範

### 程式碼風格

- 元件使用 PascalCase 命名（如 `HeroSection.tsx`）
- 工具函數使用 camelCase 命名
- 型別定義使用 PascalCase 並以 `Type` 或 `Props` 結尾
- 所有程式碼註解使用繁體中文

### 元件開發

- 優先使用 Server Components
- 需要互動的元件才使用 `"use client"`
- 樣式優先使用 Tailwind CSS utility classes
- 圖片使用 Next.js `<Image>` 元件並搭配 Sanity 圖片 URL

### Sanity CMS

- Schema 定義在 `src/sanity/schemaTypes/`
- GROQ 查詢放在 `src/sanity/lib/queries.ts`
- 修改 schema 後需執行 `npx sanity schema deploy`

### 多國語言

- 翻譯檔案在 `messages/` 目錄
- 預設語言為繁體中文 (zh-TW)
- 使用 `useTranslations` hook 取得翻譯

## 常用指令

```bash
# 開發伺服器
npm run dev

# 建置專案
npm run build

# 部署 Sanity schema
npx sanity schema deploy

# Sanity Studio
# 訪問 /studio 路徑
```

## 注意事項

- 這是企業形象網站，設計風格需專業、自然、可信賴
- 響應式設計必須支援手機、平板、桌機
- 圖片需優化載入效能
- SEO 是重要考量

## 相關資源

- [PRD 文件](./PRD.md) - 完整產品需求
- [Sanity Studio](http://localhost:3000/studio) - CMS 後台
- [Facebook](https://www.facebook.com/HUSHANForestry/)
- [Instagram](https://www.instagram.com/hu_shan_tw/)
- [YouTube](https://www.youtube.com/@虎山林業)
