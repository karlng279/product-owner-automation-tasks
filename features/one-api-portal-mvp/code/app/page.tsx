import { HeroSection } from '@/components/homepage/hero-section';
import { ApiCategoriesGrid } from '@/components/homepage/api-categories-grid';
import { SocialProofSection } from '@/components/homepage/social-proof-section';
import { CtaSection } from '@/components/homepage/cta-section';

export const metadata = {
  title: 'ONE LINE API Documentation - Integrate Shipping APIs',
  description:
    "Build powerful logistics applications with ONE LINE's comprehensive APIs for tracking, schedules, booking, and routes.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ApiCategoriesGrid />
      <SocialProofSection />
      <CtaSection />
    </main>
  );
}
