import { HeroSection } from '@/components/home/HeroSection';
import { NewsTicker } from '@/components/home/NewsTicker';
import { AboutSection } from '@/components/home/AboutSection';
import { ServicesSection } from '@/components/home/ServicesSection';

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <NewsTicker />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}
