import { 
  HeroSection, 
  WhoWeAre, 
  ChallengesSection, 
  ServicesOverview as OurSolutions, 
  FeaturedCaseStudy 
} from './_components';

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