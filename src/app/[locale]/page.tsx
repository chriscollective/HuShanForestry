import { HeroSection } from '@/components/home/HeroSection';
import { NewsTicker } from '@/components/home/NewsTicker';
import { ServicesSection } from '@/components/home/ServicesSection';
import { VideoSection } from '@/components/home/VideoSection';
import { client } from '@/lib/sanity/client';
import { latestNewsQuery } from '@/lib/sanity/queries';
import { News } from '@/types/sanity';

export const revalidate = 60; // 每60秒重新驗證一次

export default async function Home() {
  // 從 Sanity 獲取最新 3 則新聞
  const latestNews: News[] = await client.fetch(latestNewsQuery, { limit: 3 });

  return (
    <main className="flex flex-col">
      <HeroSection />
      <NewsTicker newsItems={latestNews} />
      <VideoSection />
      <ServicesSection />
    </main>
  );
}
