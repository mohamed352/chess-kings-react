import type { Metadata } from 'next';
import { HeroSection } from '@/features/home/components/hero-section';
import { StoreSection } from '@/features/home/components/store-section';
import { JoinGuideSectionWrapper } from '@/features/home/components/join-guide-section-wrapper';

export const metadata: Metadata = {
  title: 'الرئيسية | شطارة شطرنج',
  description: 'الصفحة الرئيسية لمنصة شطارة — لعبة الشطرنج الاستراتيجية',
};

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col min-h-screen bg-white" dir="rtl">
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-6 py-4 flex flex-col gap-6">
        <HeroSection />
        <StoreSection />
        <JoinGuideSectionWrapper />
      </div>
    </main>
  );
}
