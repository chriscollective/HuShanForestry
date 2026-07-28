import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  // 語系導向。
  //
  // 本專案刻意不使用 middleware：Next.js 16 會將 middleware 強制綁在
  // Edge Runtime（runtime: 'nodejs' 宣告會被 Vercel 建置系統忽略），
  // 而 next/server 會把 ua-parser-js 帶進 Edge bundle，
  // 在 Vercel 上拋出 ReferenceError: __dirname is not defined，
  // 進而破壞路由清單、造成全站 500 或 404。
  //
  // 因此改以靜態 redirect 處理根路徑，語系前綴一律顯式帶上，
  // 與 src/lib/navigation.ts 的 localePrefix: 'always' 保持一致。
  async redirects() {
    return [
      {
        source: '/',
        destination: '/zh-TW',
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
