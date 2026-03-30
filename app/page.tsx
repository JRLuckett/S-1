import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import TransitionBlock from '@/components/TransitionBlock';
import MarketIntelligence from '@/components/MarketIntelligence';
import PatternSection from '@/components/PatternSection';
import EvidenceSection from '@/components/EvidenceSection';
import IntroSection from '@/components/IntroSection';
import HowItWorks from '@/components/HowItWorks';

import CtaSection from '@/components/CtaSection';
import FooterSection from '@/components/FooterSection';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <TransitionBlock />
      <MarketIntelligence />
      <PatternSection />
      <EvidenceSection />
      <IntroSection />
      <HowItWorks />

      <CtaSection />
      <FooterSection />
    </>
  );
}
