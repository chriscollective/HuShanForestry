# Implementation Plan: 首頁與基礎架構

**Branch**: `001-homepage-foundation` | **Date**: 2025-11-17 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-homepage-foundation/spec.md`

## Summary

建立虎山林業官方網站的首頁與基礎架構，採用 **Next.js 14 (App Router) + TypeScript + Tailwind CSS** 技術堆疊。重點在於實現高效能的響應式網站，符合 Lighthouse > 90 的效能要求，並確保 SEO 與無障礙性最佳化。

**技術決策理由**：
- **Next.js 14 (App Router)**: 提供伺服器端渲染 (SSR) 與靜態生成 (SSG)，滿足 SEO 需求與效能要求
- **TypeScript**: 型別安全，減少執行期錯誤，提升程式碼品質
- **Tailwind CSS**: 實用優先的 CSS 框架，快速建立響應式設計，檔案體積小

## Technical Context

**Language/Version**: TypeScript 5.3+, Node.js 20 LTS
**Framework**: Next.js 14.2+ (App Router)
**Primary Dependencies**:
- React 18.3+
- Tailwind CSS 3.4+
- next/image（圖片優化）
- next/font（字型優化）

**Styling**: Tailwind CSS + CSS Modules（需要時）
**Image Optimization**: Next.js Image Component（自動 WebP 轉換、lazy loading、responsive images）
**SEO**: Next.js Metadata API
**Analytics**: Google Analytics 4（透過 gtag.js 或 next/script）

**Testing**:
- Playwright（E2E 測試）
- Jest + React Testing Library（元件測試）
- Lighthouse CI（效能測試）

**Target Platform**: Web（瀏覽器：Chrome、Safari、Firefox、Edge 最新兩版本）
**Project Type**: Web（單一前端專案，無後端 API）
**Performance Goals**:
- Lighthouse 效能評分 > 90
- FCP < 1.5 秒
- LCP < 2.5 秒
- TTI < 3.8 秒
- CLS < 0.1

**Constraints**:
- 頁面載入時間 < 3 秒（標準 4G 網路）
- 圖片總大小 < 500KB（首頁）
- 支援 3G 慢速網路環境
- 符合 WCAG 2.1 AA 無障礙標準

**Scale/Scope**:
- 初期：1 個首頁 + 基礎元件（導航、頁尾）
- 預計月訪問量：500-1000 人次
- 預計並發使用者：< 100

## Constitution Check

✅ **全部通過 - 無違規項目**

| 原則 | 檢查項目 | 狀態 | 說明 |
|------|---------|------|------|
| **使用者優先** | 3 秒理解業務 | ✅ | Hero 區塊設計確保首屏顯示核心資訊 |
| **使用者優先** | 3 次點擊達成目標 | ✅ | 扁平化導航結構，最多 2 層 |
| **使用者優先** | RWD 支援 | ✅ | Tailwind CSS 響應式斷點（mobile/tablet/desktop） |
| **使用者優先** | 載入時間 < 3 秒 | ✅ | Next.js SSG + 圖片優化 + lazy loading |
| **內容真實性** | 使用真實素材 | ✅ | 規格已標註素材需求，開發時使用佔位符並標記待替換 |
| **效能優化** | Lighthouse > 90 | ✅ | Next.js 自動優化 + Tailwind CSS purge |
| **效能優化** | FCP < 1.5s | ✅ | SSG + 字型預載入 + Critical CSS |
| **效能優化** | LCP < 2.5s | ✅ | 圖片優化 + priority loading |
| **效能優化** | 現代圖片格式 | ✅ | next/image 自動轉換 WebP |
| **效能優化** | Lazy loading | ✅ | next/image 內建支援 |
| **SEO 與可發現性** | Meta tags | ✅ | Next.js Metadata API |
| **SEO 與可發現性** | 語義化 HTML | ✅ | 使用 <header>, <nav>, <main>, <section>, <footer> |
| **SEO 與可發現性** | 結構化資料 | ✅ | JSON-LD Schema.org Organization |
| **SEO 與可發現性** | Sitemap | ✅ | Next.js sitemap.ts 自動生成 |
| **SEO 與可發現性** | 圖片 alt 文字 | ✅ | 所有 <Image> 元件強制 alt 屬性 |
| **無障礙設計** | WCAG 2.1 AA | ✅ | 語義化標籤 + ARIA 標籤 + 鍵盤導航 |
| **無障礙設計** | 鍵盤導航 | ✅ | focus-visible + tabindex 管理 |
| **無障礙設計** | 色彩對比 4.5:1 | ✅ | Tailwind 配色系統 + 對比度檢查 |
| **無障礙設計** | 螢幕閱讀器 | ✅ | aria-label + 語義化 HTML |

**重新檢查時機**: Phase 1 設計完成後，確認元件設計符合上述所有原則

## Project Structure

### Documentation (this feature)

```text
specs/001-homepage-foundation/
├── spec.md              # 功能規格
├── plan.md              # 本檔案（技術規劃）
├── research.md          # Phase 0 技術研究（下方生成）
├── data-model.md        # Phase 1 資料模型（下方生成）
├── quickstart.md        # Phase 1 快速開始指南（下方生成）
├── contracts/           # API 合約（本專案為靜態網站，暫不需要）
├── checklists/
│   └── requirements.md  # 規格品質檢查清單
└── tasks.md             # Phase 2 任務清單（/speckit.tasks 生成）
```

### Source Code (repository root)

```text
hushan-forestry/
├── public/                          # 靜態資源
│   ├── images/                      # 圖片資源
│   │   ├── logo.svg                 # Logo（SVG 格式）
│   │   ├── hero-bg.webp             # Hero 背景圖
│   │   └── services/                # 服務卡片圖片
│   │       ├── forest-harvest.webp
│   │       ├── timber-trade.webp
│   │       ├── forest-planning.webp
│   │       └── chainsaw-training.webp
│   ├── icons/                       # 圖示
│   │   ├── facebook.svg
│   │   ├── instagram.svg
│   │   └── youtube.svg
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx               # 根佈局（導航、頁尾）
│   │   ├── page.tsx                 # 首頁
│   │   ├── globals.css              # 全域樣式（Tailwind 導入）
│   │   ├── metadata.ts              # SEO Metadata 配置
│   │   └── sitemap.ts               # Sitemap 生成
│   │
│   ├── components/                  # React 元件
│   │   ├── layout/                  # 佈局元件
│   │   │   ├── Header.tsx           # 導航列
│   │   │   ├── Footer.tsx           # 頁尾
│   │   │   └── MobileMenu.tsx       # 手機選單
│   │   │
│   │   ├── home/                    # 首頁專用元件
│   │   │   ├── HeroSection.tsx      # Hero 區塊
│   │   │   ├── AboutSection.tsx     # 公司簡介區塊
│   │   │   ├── ServicesSection.tsx  # 服務項目導覽
│   │   │   └── ServiceCard.tsx      # 服務卡片
│   │   │
│   │   ├── ui/                      # 通用 UI 元件
│   │   │   ├── Button.tsx           # CTA 按鈕
│   │   │   ├── Link.tsx             # 連結元件
│   │   │   └── SocialLinks.tsx      # 社群媒體連結
│   │   │
│   │   └── shared/                  # 共享元件
│   │       └── OptimizedImage.tsx   # 優化圖片元件包裝
│   │
│   ├── config/                      # 配置檔案
│   │   ├── site.ts                  # 網站配置（名稱、URL、社群連結）
│   │   ├── navigation.ts            # 導航項目配置
│   │   └── services.ts              # 服務項目資料
│   │
│   ├── styles/                      # 樣式檔案
│   │   └── theme.ts                 # Tailwind 主題擴充（品牌色彩）
│   │
│   ├── lib/                         # 工具函式
│   │   ├── analytics.ts             # Google Analytics 整合
│   │   └── utils.ts                 # 通用工具函式（cn 等）
│   │
│   └── types/                       # TypeScript 型別定義
│       ├── navigation.ts
│       └── service.ts
│
├── tests/                           # 測試檔案
│   ├── e2e/                         # Playwright E2E 測試
│   │   ├── homepage.spec.ts         # 首頁測試
│   │   ├── navigation.spec.ts       # 導航測試
│   │   └── responsive.spec.ts       # RWD 測試
│   │
│   └── components/                  # 元件測試
│       ├── Header.test.tsx
│       ├── Footer.test.tsx
│       └── ServiceCard.test.tsx
│
├── .lighthouserc.json               # Lighthouse CI 配置
├── next.config.js                   # Next.js 配置
├── tailwind.config.ts               # Tailwind CSS 配置
├── tsconfig.json                    # TypeScript 配置
├── package.json
└── README.md
```

**Structure Decision**: 選擇 **Next.js App Router** 單一前端專案結構，理由：
1. 本專案為靜態企業官網，無需複雜的後端 API
2. App Router 提供更好的 SEO 與效能（伺服器元件）
3. 扁平化的 `src/app` 結構，易於理解與維護
4. 元件按功能分類（layout/home/ui/shared），清晰的職責劃分

## Complexity Tracking

**無違規項目** - 本專案完全符合憲章要求，無需額外複雜度說明。

---

## Phase 0: Research & Technology Decisions

### 研究任務

#### R1: Next.js 14 App Router 最佳實踐
**目標**: 研究 App Router 的 SSG/SSR 策略，確保最佳效能

**關鍵問題**:
- 首頁應使用 SSG（Static Site Generation）還是 SSR（Server-Side Rendering）？
- 如何配置 `export` 模式進行靜態部署？
- Metadata API 最佳實踐

**決策**:
- ✅ 使用 **SSG（靜態生成）**：首頁內容相對固定，使用 `output: 'export'` 生成純靜態 HTML
- ✅ 部署方式：Vercel（推薦）或 Netlify，支援 CDN 快速分發
- ✅ Metadata：使用 `generateMetadata` 函式動態生成，支援 Open Graph 與 Twitter Cards

**參考資源**:
- Next.js 14 App Router 官方文件
- Vercel Performance Best Practices

---

#### R2: 圖片優化策略
**目標**: 確保圖片載入效能符合 LCP < 2.5s 要求

**關鍵問題**:
- Hero 背景圖的最佳尺寸與格式？
- 如何實作 responsive images（不同裝置載入不同尺寸）？
- Lazy loading 的最佳實踐？

**決策**:
- ✅ 使用 `next/image` 元件，自動優化：
  - 自動轉換 WebP/AVIF 格式
  - 自動生成 srcset（響應式圖片）
  - 內建 lazy loading（除 priority 圖片外）
- ✅ Hero 背景圖：
  - 桌機：1920x1080px（優化後 < 150KB）
  - 手機：750x1334px（優化後 < 80KB）
  - 使用 `priority` 屬性確保優先載入
- ✅ 服務卡片圖片：400x300px（優化後 < 30KB 每張）

**參考資源**:
- Next.js Image Optimization 文件
- Web.dev 圖片優化指南

---

#### R3: Tailwind CSS 響應式設計
**目標**: 確認 Tailwind 斷點設定符合規格要求

**關鍵問題**:
- 預設斷點是否需要調整？
- 如何確保觸控目標至少 44x44px？
- 如何實作漢堡選單？

**決策**:
- ✅ 使用 Tailwind 預設斷點（符合規格）：
  - `sm: 640px`（手機橫向）
  - `md: 768px`（平板）
  - `lg: 1024px`（桌機）
  - `xl: 1280px`（大桌機）
- ✅ 自訂主題擴充：
  - 品牌色彩（待確認後加入）
  - 最小觸控目標：`min-h-[44px] min-w-[44px]`
- ✅ 漢堡選單：
  - 使用 `useState` 控制開關
  - Tailwind 動畫：`transition-transform duration-300`
  - 無需額外套件（保持輕量）

**參考資源**:
- Tailwind CSS 響應式設計文件
- WCAG 2.1 觸控目標尺寸標準

---

#### R4: SEO 與結構化資料
**目標**: 確保網站易於搜尋引擎索引

**關鍵問題**:
- 如何實作 Schema.org Organization 結構化資料？
- Open Graph 與 Twitter Cards 設定？
- Sitemap 自動生成？

**決策**:
- ✅ 結構化資料：JSON-LD 格式，嵌入 `<head>`
  ```typescript
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "虎山林業",
    "url": "https://hushanforestry.com",
    "logo": "https://hushanforestry.com/logo.svg",
    "foundingDate": "2022",
    "description": "來自台灣各地集結了六位熱愛森林的青年...",
    "sameAs": [
      "https://www.facebook.com/HUSHANForestry/",
      "https://www.instagram.com/hu_shan_tw/",
      "https://www.youtube.com/@虎山林業"
    ]
  }
  ```
- ✅ Open Graph：使用 Next.js Metadata API
- ✅ Sitemap：`src/app/sitemap.ts` 自動生成

**參考資源**:
- Schema.org Organization
- Next.js Metadata API

---

#### R5: 無障礙性實作
**目標**: 確保符合 WCAG 2.1 AA 標準

**關鍵問題**:
- 如何測試色彩對比度？
- 鍵盤導航的焦點管理？
- ARIA 標籤的正確使用？

**決策**:
- ✅ 色彩對比度：
  - 使用工具：WebAIM Contrast Checker
  - Tailwind 配色確保至少 4.5:1
- ✅ 鍵盤導航：
  - 所有互動元素支援 `Tab` 鍵
  - 焦點樣式：`focus-visible:ring-2 focus-visible:ring-offset-2`
  - 跳過連結（Skip to main content）
- ✅ ARIA 標籤：
  - 導航：`<nav aria-label="主要導航">`
  - 按鈕：`<button aria-label="開啟選單">`
  - 圖片：`<img alt="描述性文字">`

**參考資源**:
- WCAG 2.1 AA 標準
- WebAIM 無障礙檢查清單

---

#### R6: Google Analytics 整合
**目標**: 追蹤成功指標（跳出率、停留時間、社群點擊率）

**關鍵問題**:
- GA4 設定方式？
- 如何追蹤社群媒體點擊？
- GDPR/隱私權合規？

**決策**:
- ✅ 使用 GA4（Google Analytics 4）
- ✅ 整合方式：`next/script` 載入 gtag.js
- ✅ 事件追蹤：
  - 頁面瀏覽（自動）
  - 社群連結點擊（自訂事件）
  - CTA 按鈕點擊（自訂事件）
- ✅ 隱私權：
  - Cookie 同意橫幅（未來功能）
  - 匿名 IP 設定

**參考資源**:
- GA4 設定指南
- Next.js Analytics 整合

---

### Research Summary

所有技術決策已完成，無 `NEEDS CLARIFICATION` 項目。關鍵決策：

1. **架構**: Next.js 14 App Router + SSG 靜態生成
2. **樣式**: Tailwind CSS（響應式 + 效能）
3. **圖片**: next/image（自動優化 + WebP + lazy loading）
4. **SEO**: Metadata API + JSON-LD 結構化資料
5. **無障礙**: 語義化 HTML + ARIA + 鍵盤導航
6. **分析**: GA4 整合

---

## Phase 1: Design & Contracts

### 資料模型 (Data Model)

由於本專案為靜態網站，無後端資料庫，資料模型以 **TypeScript 介面** 形式定義：

#### 導航項目 (Navigation Item)
```typescript
interface NavigationItem {
  label: string;          // 顯示名稱
  href: string;           // 連結路徑
  external?: boolean;     // 是否為外部連結
  ariaLabel?: string;     // 無障礙標籤（可選）
}
```

#### 服務卡片 (Service)
```typescript
interface Service {
  id: string;                // 唯一識別（slug）
  title: string;             // 服務名稱
  description: string;       // 簡短描述（1-2 句）
  image: string;             // 圖片路徑
  imageAlt: string;          // 圖片替代文字
  link: string;              // 詳細頁面連結
}
```

#### 社群媒體連結 (Social Link)
```typescript
interface SocialLink {
  platform: 'facebook' | 'instagram' | 'youtube';
  url: string;
  icon: string;              // SVG 圖示路徑
  ariaLabel: string;         // 無障礙標籤
}
```

#### 網站配置 (Site Config)
```typescript
interface SiteConfig {
  name: string;              // 網站名稱
  description: string;       // 網站描述
  url: string;               // 網站 URL
  ogImage: string;           // Open Graph 圖片
  foundingYear: number;      // 成立年份
  socialLinks: SocialLink[];
  navigation: NavigationItem[];
}
```

**儲存位置**: `src/config/site.ts`, `src/config/navigation.ts`, `src/config/services.ts`

---

### API Contracts

**N/A** - 本專案為純靜態網站，無後端 API。

未來如需新增聯絡表單，將使用以下方案之一：
- Formspree（第三方表單服務）
- Netlify Forms（如部署於 Netlify）
- Vercel Edge Functions（如需自訂邏輯）

---

### 元件設計 (Component Architecture)

#### 核心元件

**Header 元件** (`src/components/layout/Header.tsx`)
- Props: 無（從 config 讀取導航項目）
- State: `isMobileMenuOpen` (boolean)
- 功能:
  - 桌機：水平導航列 + Logo
  - 手機：Logo + 漢堡按鈕 → 展開 MobileMenu
  - Sticky 定位（固定頂部）
  - 當前頁面高亮

**MobileMenu 元件** (`src/components/layout/MobileMenu.tsx`)
- Props: `isOpen`, `onClose`
- 功能:
  - 全螢幕覆蓋（backdrop）
  - 滑入動畫
  - 點擊外部關閉
  - 鍵盤 ESC 關閉

**HeroSection 元件** (`src/components/home/HeroSection.tsx`)
- Props: 無（內容硬編碼或從 config 讀取）
- 功能:
  - 背景圖片（next/image, priority）
  - 覆蓋層（overlay）確保文字可讀性
  - CTA 按鈕（連結至聯絡頁面）
  - 響應式文字大小

**ServiceCard 元件** (`src/components/home/ServiceCard.tsx`)
- Props: `service: Service`
- 功能:
  - 圖片 + 標題 + 描述
  - Hover 效果
  - 可點擊（連結至詳細頁）
  - 響應式佈局

**Footer 元件** (`src/components/layout/Footer.tsx`)
- Props: 無
- 功能:
  - 版權聲明
  - 社群媒體連結
  - 快速連結（可選）

---

### Quickstart Guide

將在 `specs/001-homepage-foundation/quickstart.md` 中提供：
- 環境設定（Node.js, pnpm）
- 專案安裝步驟
- 開發伺服器啟動
- 建置與部署指令
- 測試執行

---

## Phase 2: Task Breakdown

將在執行 `/speckit.tasks` 時生成詳細任務清單。

預期任務類別：
1. **環境設定**: 初始化 Next.js 專案、安裝依賴
2. **配置檔案**: Tailwind、TypeScript、Next.js 配置
3. **基礎元件**: Header、Footer、Button、Link
4. **首頁元件**: Hero、About、Services
5. **SEO 設定**: Metadata、結構化資料、Sitemap
6. **樣式系統**: Tailwind 主題、品牌色彩
7. **測試**: E2E 測試、元件測試、Lighthouse 測試
8. **部署**: Vercel 部署設定、環境變數

---

## Validation & Next Steps

### 憲章合規性重新檢查

**Phase 1 設計完成後檢查** ✅

所有元件設計符合憲章原則：
- ✅ 使用者優先：響應式元件、明確的導航結構
- ✅ 內容真實性：圖片路徑預留，開發時標註佔位符
- ✅ 效能優化：next/image、SSG、Tailwind purge
- ✅ SEO：語義化元件、Metadata API
- ✅ 無障礙：ARIA 標籤、鍵盤導航、色彩對比

### 待確認事項

1. **品牌色彩**: 需要確認主色、輔色（目前使用綠色系假設）
2. **Logo 格式**: 需要提供 SVG 格式 Logo（可縮放、檔案小）
3. **Hero 背景圖**: 需要高品質照片（建議 1920x1080px）
4. **服務卡片圖片**: 需要 4 張圖片（各 400x300px）

### 下一步

1. ✅ 執行 `/speckit.tasks` 生成任務清單
2. ⏳ 確認品牌視覺規範（色彩、字型）
3. ⏳ 收集素材資源
4. ⏳ 開始開發環境設定

---

**Plan Status**: ✅ **完成 - 可進入任務拆解階段**
