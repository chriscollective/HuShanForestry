# Tasks: 首頁與基礎架構

**Input**: Design documents from `/specs/001-homepage-foundation/`
**Prerequisites**: plan.md ✅, spec.md ✅
**Tech Stack**: Next.js 14 (App Router) + TypeScript + Tailwind CSS

**Tests**: 本專案暫不包含測試任務（可於後續階段加入 Playwright E2E 測試）

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4, US5)
- Include exact file paths in descriptions

---

## Phase 1: Setup (專案初始化)

**Purpose**: 建立 Next.js 專案架構與基礎配置

- [ ] T001 使用 `create-next-app` 初始化 Next.js 14 專案（App Router, TypeScript, Tailwind CSS, ESLint）
- [ ] T002 建立專案目錄結構：src/app, src/components, src/config, src/lib, src/styles, src/types, public/images, public/icons
- [ ] T003 [P] 配置 Tailwind CSS 主題：品牌色彩系統（brand.orange, brand.black, brand.white, forest.*）在 tailwind.config.ts
- [ ] T004 [P] 配置 Next.js：啟用靜態生成 (output: 'export'), 圖片優化設定在 next.config.js
- [ ] T005 [P] 配置 TypeScript：嚴格模式，路徑別名 (@/*) 在 tsconfig.json
- [ ] T006 [P] 建立全域樣式：Tailwind 導入與自訂樣式在 src/app/globals.css
- [ ] T007 安裝專案依賴：clsx（條件樣式工具）

**Checkpoint**: 專案架構建立完成，可開始開發元件

---

## Phase 2: Foundational (基礎設施)

**Purpose**: 建立所有使用者故事共用的核心配置與型別定義

**⚠️ CRITICAL**: 此階段必須完成才能開始使用者故事實作

- [ ] T008 建立網站配置檔案：site.ts 包含網站名稱、描述、URL、社群連結在 src/config/
- [ ] T009 [P] 建立導航配置：navigation.ts 定義導航項目（首頁、關於我們、服務項目、聯絡我們）在 src/config/
- [ ] T010 [P] 建立服務項目資料：services.ts 定義四大服務的資料在 src/config/
- [ ] T011 [P] 建立 TypeScript 型別定義：NavigationItem 在 src/types/navigation.ts
- [ ] T012 [P] 建立 TypeScript 型別定義：Service 在 src/types/service.ts
- [ ] T013 [P] 建立 TypeScript 型別定義：SocialLink 在 src/types/social.ts
- [ ] T014 [P] 建立工具函式：cn (classnames 合併) 在 src/lib/utils.ts
- [ ] T015 建立根佈局檔案：layout.tsx（HTML 結構、metadata、字型設定）在 src/app/

**Checkpoint**: 基礎設施完成，使用者故事可以開始並行開發

---

## Phase 3: User Story 4 - 網站導航與頁面架構 (Priority: P1) 🎯 基礎元件

**Goal**: 實作固定導航列與頁尾，提供網站基本架構

**Why First**: 導航與頁尾是所有其他使用者故事的基礎元件，必須優先完成

**Independent Test**: 導航列顯示正常，點擊 Logo 可返回首頁，導航項目有 hover 效果，手機版顯示漢堡選單

### Implementation for User Story 4

- [ ] T016 [P] [US4] 建立 Button 元件：支援不同變體（primary/secondary）與大小在 src/components/ui/Button.tsx
- [ ] T017 [P] [US4] 建立 Link 元件：包裝 next/link，支援 active 狀態在 src/components/ui/Link.tsx
- [ ] T018 [P] [US4] 建立 SocialLinks 元件：顯示 Facebook、Instagram、YouTube 圖示連結在 src/components/ui/SocialLinks.tsx
- [ ] T019 [US4] 建立 Header 元件：桌機版導航列（Logo + 水平選單）在 src/components/layout/Header.tsx
- [ ] T020 [US4] 實作 Header 響應式：手機版顯示漢堡按鈕，使用 useState 管理選單狀態
- [ ] T021 [US4] 建立 MobileMenu 元件：全螢幕覆蓋選單，滑入動畫，ESC 關閉在 src/components/layout/MobileMenu.tsx
- [ ] T022 [US4] 實作 Header sticky 定位：向下捲動時固定在頂部，使用 Tailwind sticky
- [ ] T023 [US4] 實作導航項目 active 狀態：使用 usePathname 判斷當前頁面
- [ ] T024 [US4] 實作鍵盤導航：Tab 鍵焦點管理，focus-visible 樣式
- [ ] T025 [US4] 建立 Footer 元件：版權聲明、社群連結、快速導航在 src/components/layout/Footer.tsx
- [ ] T026 [US4] 更新 layout.tsx：整合 Header 與 Footer 元件

**Checkpoint**: 導航與頁尾完成，可在任何頁面使用

---

## Phase 4: User Story 1 - 快速理解公司業務 (Priority: P1) 🎯 MVP 核心內容

**Goal**: 實作首頁核心內容區塊（Hero、About、Services），讓訪客 3 秒內理解虎山林業的業務

**Independent Test**:
1. 首頁顯示 Hero 區塊（背景圖 + 標語 + CTA 按鈕）
2. 向下捲動看到公司簡介文字
3. 看到四大服務的卡片式介紹
4. 點擊「立即諮詢」按鈕導向聯絡頁面（placeholder）

### Implementation for User Story 1

- [ ] T027 [P] [US1] 建立 HeroSection 元件：背景圖 + 標語 + CTA 按鈕在 src/components/home/HeroSection.tsx
- [ ] T028 [US1] 實作 Hero 背景圖優化：使用 next/image, priority 屬性, responsive images
- [ ] T029 [US1] 實作 Hero 覆蓋層：半透明黑色遮罩確保文字可讀性
- [ ] T030 [US1] 實作 Hero 標語：「虎山林業 - 推廣台灣林業發展」大標題 + 副標題
- [ ] T031 [US1] 實作 Hero CTA 按鈕：「立即諮詢」橘色按鈕，導向 /contact（placeholder）
- [ ] T032 [P] [US1] 建立 AboutSection 元件：公司簡介區塊在 src/components/home/AboutSection.tsx
- [ ] T033 [US1] 實作 About 內容：顯示「來自台灣各地集結了六位熱愛森林的青年，正在努力推廣台灣林業的發展。Since 2022, From Taiwan」
- [ ] T034 [US1] 實作 About 佈局：居中對齊，適當間距，可選「了解更多」按鈕
- [ ] T035 [P] [US1] 建立 ServiceCard 元件：服務卡片（圖片 + 標題 + 描述）在 src/components/home/ServiceCard.tsx
- [ ] T036 [US1] 實作 ServiceCard 響應式：桌機 2x2 grid，平板 2 欄，手機單欄
- [ ] T037 [US1] 實作 ServiceCard Hover 效果：卡片陰影 + 輕微上移動畫
- [ ] T038 [P] [US1] 建立 ServicesSection 元件：服務項目導覽區塊在 src/components/home/ServicesSection.tsx
- [ ] T039 [US1] 實作 ServicesSection 內容：從 services.ts 載入四大服務資料，映射為 ServiceCard
- [ ] T040 [US1] 實作 ServicesSection 標題：「我們的服務」區塊標題
- [ ] T041 [US1] 建立首頁：page.tsx 整合 HeroSection, AboutSection, ServicesSection 在 src/app/
- [ ] T042 [US1] 實作首頁區塊間距：使用 Tailwind spacing utilities 確保適當留白

**Checkpoint**: 首頁核心內容完成，訪客可快速理解公司業務

---

## Phase 5: User Story 2 - 跨裝置瀏覽體驗 (Priority: P1) 🎯 響應式優化

**Goal**: 確保所有元件在手機、平板、桌機都有良好的顯示與互動體驗

**Why After US1**: 在內容完成後進行響應式調整更有效率

**Independent Test**:
1. 在 iPhone (375px) 上測試：所有內容無需水平捲動，漢堡選單正常運作
2. 在 iPad (768px) 上測試：佈局適應平板尺寸
3. 在桌機 (1280px) 上測試：多欄佈局充分利用空間
4. 觸控目標至少 44x44px

### Implementation for User Story 2

- [ ] T043 [US2] 測試與調整 Header 響應式：確認手機 (320-767px)、平板 (768-1023px)、桌機 (1024px+) 斷點
- [ ] T044 [US2] 測試與調整 MobileMenu 響應式：確認全螢幕覆蓋、滑入動畫、觸控關閉
- [ ] T045 [US2] 測試與調整 HeroSection 響應式：背景圖在不同裝置的顯示，文字大小調整
- [ ] T046 [US2] 測試與調整 ServiceCard 響應式：grid 佈局在不同斷點的變化
- [ ] T047 [US2] 測試與調整 Footer 響應式：手機版堆疊佈局，桌機版多欄佈局
- [ ] T048 [US2] 確認觸控目標尺寸：所有按鈕、連結至少 min-h-[44px] min-w-[44px]
- [ ] T049 [US2] 確認文字大小：手機版基礎字體至少 16px（避免自動縮放）
- [ ] T050 [US2] 測試水平捲動：在 320px 寬度測試，確認無水平捲軸
- [ ] T051 [US2] 實作按鈕 Hover/Active 狀態：桌機 hover, 手機 active（觸控回饋）
- [ ] T052 [US2] 測試實機：在真實手機、平板、桌機上測試（或使用 BrowserStack）

**Checkpoint**: 所有裝置都有良好的瀏覽體驗

---

## Phase 6: User Story 3 - 社群媒體連結與互動 (Priority: P2) 🎯 社群整合

**Goal**: 在首頁與頁尾提供社群媒體連結，引導訪客深入了解公司

**Independent Test**:
1. 首頁/頁尾顯示 Facebook、Instagram、YouTube 圖示
2. 點擊圖示在新分頁開啟對應社群頁面
3. 螢幕閱讀器朗讀正確的 aria-label

### Implementation for User Story 3

- [ ] T053 [P] [US3] 準備社群媒體圖示：下載 SVG 圖示（Facebook, Instagram, YouTube）至 public/icons/
- [ ] T054 [US3] 更新 SocialLinks 元件：從 site.ts 載入社群連結資料
- [ ] T055 [US3] 實作 SocialLinks 圖示顯示：使用 Image 元件或 SVG，適當大小（24x24px）
- [ ] T056 [US3] 實作 SocialLinks 連結屬性：target="_blank", rel="noopener noreferrer"
- [ ] T057 [US3] 實作 SocialLinks ARIA 標籤：aria-label="前往 Facebook 粉絲專頁" 等
- [ ] T058 [US3] 實作 SocialLinks Hover 效果：圖示變色或放大動畫
- [ ] T059 [US3] 整合 SocialLinks 至 Footer：已在 T025 建立，確認顯示正常
- [ ] T060 [US3] 整合 SocialLinks 至 Hero/About 區塊：可選，視設計需求
- [ ] T061 [US3] 測試社群連結：點擊確認導向正確 URL

**Checkpoint**: 社群媒體整合完成，訪客可輕鬆連結至社群平台

---

## Phase 7: User Story 5 - 快速載入與效能 (Priority: P1) 🎯 效能優化

**Goal**: 確保網站在慢速網路環境也能快速載入，Lighthouse 評分 > 90

**Why Later**: 在內容與功能完成後進行效能優化更有針對性

**Independent Test**:
1. Lighthouse 測試：效能 > 90, 無障礙 > 90, 最佳實踐 > 90, SEO > 90
2. 3G 網路模擬：頁面 < 3 秒載入
3. WebPageTest 測試：FCP < 1.5s, LCP < 2.5s

### Implementation for User Story 5

- [ ] T062 [P] [US5] 優化圖片資源：壓縮 Hero 背景圖至 < 150KB, 服務卡片圖至 < 30KB each
- [ ] T063 [P] [US5] 實作圖片 lazy loading：除 Hero 背景外，其他圖片使用 loading="lazy"
- [ ] T064 [US5] 實作字型優化：使用 next/font 預載入 Google Fonts 或本地字型
- [ ] T065 [US5] 配置圖片 priority：Hero 背景圖使用 priority 屬性優先載入
- [ ] T066 [US5] 實作 WebP fallback：確保 next/image 正確生成 WebP 與 fallback
- [ ] T067 [US5] 優化 Tailwind CSS：確認 purge 設定，移除未使用的樣式
- [ ] T068 [US5] 實作 Critical CSS：內聯首屏關鍵樣式（Next.js 自動處理，確認運作）
- [ ] T069 [US5] 測試 Lighthouse：執行測試，記錄各項評分
- [ ] T070 [US5] 修正 Lighthouse 問題：根據測試結果調整（色彩對比、alt 文字、meta tags 等）
- [ ] T071 [US5] 測試 3G 網路：Chrome DevTools 模擬 Slow 3G，確認載入時間
- [ ] T072 [US5] 優化 bundle size：檢查 .next/analyze，移除不必要的依賴

**Checkpoint**: 效能優化完成，Lighthouse > 90，快速載入

---

## Phase 8: SEO 與無障礙性 (Cross-Cutting Concerns) 🎯 搜尋與可訪問性

**Goal**: 確保網站易於搜尋引擎索引，符合 WCAG 2.1 AA 無障礙標準

**Purpose**: 提升網站可發現性與包容性

### SEO 優化

- [ ] T073 [P] 建立 Metadata 配置：metadata.ts 定義首頁 title, description, keywords, openGraph 在 src/app/
- [ ] T074 [P] 實作結構化資料：JSON-LD Schema.org Organization 嵌入 layout.tsx
- [ ] T075 [P] 建立 Sitemap：sitemap.ts 生成 XML sitemap 在 src/app/
- [ ] T076 [P] 建立 robots.txt：允許所有爬蟲，指向 sitemap 在 public/
- [ ] T077 實作語義化 HTML：確認所有元件使用正確標籤（header, nav, main, section, footer, article）
- [ ] T078 實作圖片 alt 文字：所有 Image 元件都有描述性 alt 屬性
- [ ] T079 測試 Open Graph：使用 Facebook Debugger 驗證 OG tags
- [ ] T080 測試 Twitter Cards：使用 Twitter Card Validator 驗證

### 無障礙性優化

- [ ] T081 [P] 實作跳過連結：「跳至主要內容」連結在 Header，鍵盤使用者可快速跳過導航
- [ ] T082 [P] 實作 ARIA 標籤：導航 aria-label="主要導航"，按鈕 aria-label="開啟選單" 等
- [ ] T083 測試色彩對比度：使用 WebAIM Contrast Checker 驗證所有文字符合 4.5:1
- [ ] T084 測試鍵盤導航：Tab 鍵測試所有互動元素，Enter/Space 啟動按鈕
- [ ] T085 測試焦點可見性：focus-visible 樣式清晰可見
- [ ] T086 測試螢幕閱讀器：使用 NVDA/VoiceOver 測試頁面朗讀
- [ ] T087 修正無障礙問題：根據測試結果調整（標題層級、表單標籤、圖片描述等）

**Checkpoint**: SEO 與無障礙性優化完成

---

## Phase 9: 素材準備與整合 🎯 視覺內容

**Goal**: 準備並整合網站所需的圖片與圖示素材

**Purpose**: 使用暫時素材完成開發，標註待替換項目

### 素材準備

- [ ] T088 [P] 下載 Hero 背景圖：從 Unsplash 找森林/林業相關圖片（1920x1080px），標註來源
- [ ] T089 [P] 下載服務卡片圖片：4 張圖片（森林收穫、原木買賣、規劃、訓練），各 400x300px，標註來源
- [ ] T090 [P] 轉換 Logo 格式：將 LOGO.jpg 優化或轉 SVG（可選），放置於 public/images/logo.png
- [ ] T091 [P] 準備 Favicon：生成多尺寸 favicon（16x16, 32x32, apple-touch-icon），放置於 public/
- [ ] T092 [P] 建立素材清單：IMAGES.md 記錄所有暫時圖片來源與授權，標註待替換項目
- [ ] T093 更新 services.ts：加入實際圖片路徑
- [ ] T094 更新 HeroSection：加入實際背景圖路徑
- [ ] T095 測試圖片顯示：確認所有圖片正確載入與優化

**Checkpoint**: 素材整合完成，網站視覺內容豐富

---

## Phase 10: 部署準備 🎯 上線

**Goal**: 準備網站部署至 Vercel/Netlify

**Purpose**: 將網站發布到生產環境

### 部署配置

- [ ] T096 測試靜態生成：執行 `npm run build` 確認 SSG 正常運作
- [ ] T097 測試本地預覽：執行 `npm run start` 或 serve out/ 目錄
- [ ] T098 [P] 建立 .env.example：記錄需要的環境變數（GA tracking ID 等）
- [ ] T099 [P] 更新 README.md：加入專案說明、安裝步驟、開發指令、部署指令
- [ ] T100 建立 Vercel 專案：連結 GitHub repository（或 Netlify）
- [ ] T101 配置部署設定：確認 build command, output directory 正確
- [ ] T102 配置自訂網域：DNS 設定（待網域確認）
- [ ] T103 測試生產環境：驗證部署後的網站功能正常
- [ ] T104 配置 Google Analytics：整合 GA4 tracking（可選，視需求）

**Checkpoint**: 網站成功部署，可公開訪問

---

## Phase 11: Polish & 最終檢查 🎯 品質保證

**Goal**: 最終檢查與優化，確保網站品質

**Purpose**: 全面驗證網站符合所有規格要求

### 最終檢查

- [ ] T105 跨瀏覽器測試：Chrome, Safari, Firefox, Edge 最新兩版本
- [ ] T106 跨裝置真機測試：iPhone, Android, iPad, Windows/Mac 桌機
- [ ] T107 驗證所有 Acceptance Scenarios：逐一檢查 spec.md 中的驗收場景
- [ ] T108 驗證憲章合規性：確認符合 5 大核心原則（使用者優先、內容真實性、效能、SEO、無障礙）
- [ ] T109 驗證成功標準：測量 spec.md 中的 10 項成功標準（Lighthouse、載入時間、對比度等）
- [ ] T110 程式碼清理：移除 console.log, 未使用的 imports, 註解程式碼
- [ ] T111 [P] 程式碼格式化：執行 Prettier/ESLint 格式化所有檔案
- [ ] T112 建立部署檢查清單：deployment-checklist.md 記錄上線前必查項目
- [ ] T113 最終 Lighthouse 測試：記錄所有評分，確認 > 90
- [ ] T114 Git 整理：確認所有變更已提交，commit 訊息清晰

**Checkpoint**: 網站品質達標，準備正式上線

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1: Setup
    ↓
Phase 2: Foundational (BLOCKS all user stories)
    ↓
    ├─→ Phase 3: US4 (導航) → MUST complete first (other stories depend on layout)
    ├─→ Phase 4: US1 (內容) → After US4
    ├─→ Phase 5: US2 (RWD) → After US1 & US4
    ├─→ Phase 6: US3 (社群) → Can parallel with US5
    └─→ Phase 7: US5 (效能) → After US1, US2, US4
        ↓
Phase 8: SEO & Accessibility
        ↓
Phase 9: Assets
        ↓
Phase 10: Deployment
        ↓
Phase 11: Polish
```

### User Story Dependencies

- **US4 (導航)**: 必須最先完成，其他故事依賴 Header/Footer
- **US1 (內容)**: 依賴 US4, 提供核心內容
- **US2 (RWD)**: 依賴 US1 & US4，優化已有內容的響應式
- **US3 (社群)**: 獨立，可與 US5 並行
- **US5 (效能)**: 依賴 US1, US2, US4，優化已完成的內容

### Critical Path (最快路徑)

```
Setup → Foundational → US4 (導航) → US1 (內容) → US2 (RWD) → US5 (效能) → SEO → Deploy
```

### Parallel Opportunities

**Phase 1 並行任務**:
- T003, T004, T005, T006, T007 可並行

**Phase 2 並行任務**:
- T009, T010, T011, T012, T013, T014 可並行（不同檔案）

**Phase 3 並行任務**:
- T016, T017, T018 可並行（Button, Link, SocialLinks）

**Phase 4 並行任務**:
- T027, T032, T035, T038 可並行（不同元件檔案）

**Phase 6 並行任務**:
- T053 可與其他任務並行（準備素材）

**Phase 7 並行任務**:
- T062, T063 可並行（圖片優化）

**Phase 8 並行任務**:
- T073, T074, T075, T076, T081, T082 可並行（不同檔案）

**Phase 9 並行任務**:
- T088, T089, T090, T091, T092 可並行（準備素材）

---

## Implementation Strategy

### MVP First (最小可行產品)

**MVP 範圍**: Phase 1-4 (Setup + Foundational + US4 + US1)

1. ✅ Complete Phase 1: Setup
2. ✅ Complete Phase 2: Foundational
3. ✅ Complete Phase 3: US4 (導航)
4. ✅ Complete Phase 4: US1 (內容)
5. **STOP and VALIDATE**: 測試導航與首頁內容
6. MVP 完成！可展示核心功能

**MVP 交付內容**:
- 導航列（桌機 + 手機）
- 首頁 Hero 區塊
- 公司簡介
- 四大服務卡片
- 頁尾

### Incremental Delivery (遞增交付)

1. **Sprint 1**: Setup + Foundational → 基礎完成
2. **Sprint 2**: US4 (導航) → 網站架構完成
3. **Sprint 3**: US1 (內容) → MVP 完成 ✅ 可展示
4. **Sprint 4**: US2 (RWD) + US3 (社群) → 行動版優化
5. **Sprint 5**: US5 (效能) + SEO → 優化完成
6. **Sprint 6**: Assets + Deployment → 上線

### Recommended Task Sequence

```
Day 1: T001-T007 (Setup)
Day 2: T008-T015 (Foundational)
Day 3: T016-T026 (US4 導航)
Day 4-5: T027-T042 (US1 內容)
Day 6: T043-T052 (US2 RWD)
Day 7: T053-T061 (US3 社群) + T062-T072 (US5 效能)
Day 8: T073-T087 (SEO + A11y)
Day 9: T088-T095 (Assets) + T096-T104 (Deploy)
Day 10: T105-T114 (Polish & QA)
```

---

## Task Summary

**Total Tasks**: 114
**Parallel Tasks**: 34 (marked with [P])
**User Stories**: 5 (US1-US5)

### Tasks per Phase

| Phase | Tasks | Description |
|-------|-------|-------------|
| Phase 1 | 7 | Setup (專案初始化) |
| Phase 2 | 8 | Foundational (基礎設施) |
| Phase 3 | 11 | US4 - 導航與頁面架構 |
| Phase 4 | 16 | US1 - 快速理解公司業務 |
| Phase 5 | 10 | US2 - 跨裝置瀏覽體驗 |
| Phase 6 | 9 | US3 - 社群媒體連結 |
| Phase 7 | 11 | US5 - 快速載入與效能 |
| Phase 8 | 15 | SEO 與無障礙性 |
| Phase 9 | 8 | 素材準備與整合 |
| Phase 10 | 9 | 部署準備 |
| Phase 11 | 10 | Polish & 最終檢查 |

### Tasks per User Story

| Story | Tasks | Priority |
|-------|-------|----------|
| US4 (導航) | 11 | P1 |
| US1 (內容) | 16 | P1 |
| US2 (RWD) | 10 | P1 |
| US3 (社群) | 9 | P2 |
| US5 (效能) | 11 | P1 |

---

## Notes

- **[P] 任務**: 不同檔案，無相依性，可並行執行
- **[Story] 標籤**: 追蹤任務屬於哪個使用者故事
- **獨立測試**: 每個使用者故事完成後應獨立驗證功能
- **檢查點**: 在每個 Phase 完成後驗證功能正常再繼續
- **提交頻率**: 每完成 2-3 個任務或一個邏輯單元就提交
- **優先順序**: P1 故事優先完成（US1, US2, US4, US5），P2 故事（US3）可稍後
- **測試策略**: 開發時手動測試，上線前執行 Lighthouse 與跨瀏覽器測試

---

**Generated**: 2025-11-17
**Status**: ✅ Ready for implementation
**Next Action**: 開始 Phase 1 - Setup (T001-T007)
