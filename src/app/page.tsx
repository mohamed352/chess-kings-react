import { HeroSection } from '@/features/home/components/hero-section';
import { StoreSection } from '@/features/home/components/store-section';
import { JoinGuideSectionWrapper } from '@/features/home/components/join-guide-section-wrapper';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { VisitorTracker } from '@/features/visitor/components/visitor-tracker';

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col min-h-screen bg-stone-50">
      <Navbar />
      <VisitorTracker />

      <div className="flex-1 relative">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-6">
          <HeroSection />
          <StoreSection />
          <JoinGuideSectionWrapper />
        </div>
      </div>

      <Footer />
    </main>
  );
}
