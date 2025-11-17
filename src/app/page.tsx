import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ServicesSection } from '@/components/home/ServicesSection';

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}
