import dynamic from 'next/dynamic';
import { HeroSection } from './_components';

// 懒加载非首屏组件
const WhoWeAre = dynamic(() => import('./_components').then(mod => ({ default: mod.WhoWeAre })));
const ChallengesSection = dynamic(() => import('./_components').then(mod => ({ default: mod.ChallengesSection })));
const OurSolutions = dynamic(() => import('./_components').then(mod => ({ default: mod.ServicesOverview })));
const FeaturedCaseStudy = dynamic(() => import('./_components').then(mod => ({ default: mod.FeaturedCaseStudy })));

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhoWeAre />
      <ChallengesSection />
      <OurSolutions />
      <FeaturedCaseStudy />
    </main>
  );
}