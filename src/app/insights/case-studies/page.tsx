import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Client Success Stories | China Business Solutions',
  description: 'Real-world case studies showcasing successful market entry and business growth in China. Learn from our clients\' experiences.',
  keywords: 'China business case studies, success stories, market entry examples, client testimonials',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Tech Startup Market Entry',
      industry: 'Technology',
      challenge: 'A European fintech startup needed to establish operations in China while navigating complex financial regulations.',
      solution: 'We helped them set up a WFOE, obtain necessary financial licenses, and establish partnerships with local banks.',
      result: 'Successfully launched in 3 major Chinese cities with $2M in first-year revenue.',
      duration: '6 months'
    },
    {
      title: 'Manufacturing Expansion',
      industry: 'Manufacturing',
      challenge: 'A US manufacturing company wanted to expand production capacity in China while maintaining quality standards.',
      solution: 'Comprehensive market research, site selection, regulatory compliance, and local partnership development.',
      result: 'Established 3 production facilities with 40% cost reduction and maintained 99.5% quality standards.',
      duration: '8 months'
    },
    {
      title: 'E-commerce Platform Launch',
      industry: 'E-commerce',
      challenge: 'A global e-commerce platform needed to adapt to Chinese market preferences and regulations.',
      solution: 'Localized platform development, payment integration, logistics optimization, and compliance management.',
      result: 'Achieved 500K active users within first year and 15% market share in target segment.',
      duration: '12 months'
    },
    {
      title: 'Professional Services Firm',
      industry: 'Professional Services',
      challenge: 'A consulting firm required legal structure and operational setup for China operations.',
      solution: 'WFOE registration, tax optimization, HR setup, and client acquisition strategy development.',
      result: 'Generated $1.5M revenue in first 18 months with 25% profit margins.',
      duration: '4 months'
    }
  ];

  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Client Success Stories</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped companies from various industries successfully enter and grow in the Chinese market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-accent-cyan text-background-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {study.industry}
                </span>
                <span className="text-gray-400 text-sm">{study.duration}</span>
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4">{study.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-accent-cyan font-semibold mb-2">Challenge</h4>
                  <p className="text-gray-300">{study.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-accent-cyan font-semibold mb-2">Our Solution</h4>
                  <p className="text-gray-300">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-accent-cyan font-semibold mb-2">Results</h4>
                  <p className="text-gray-300 font-medium">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/30 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our growing list of successful clients. Let us help you achieve your China market goals with our proven expertise and comprehensive support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent-cyan text-background-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent-cyan-light transition-colors duration-300">
              Start Your Journey
            </Link>
            <Link href="/services" className="border border-accent-cyan text-accent-cyan px-8 py-3 rounded-lg font-semibold hover:bg-accent-cyan hover:text-background-primary transition-colors duration-300">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
