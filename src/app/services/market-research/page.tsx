import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market Research | China Business Solutions',
  description: 'Comprehensive market research services for China. Industry analysis, consumer insights, and competitive intelligence.',
  keywords: 'China market research, industry analysis, consumer insights, competitive intelligence, market data',
};

export default function MarketResearchPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Market Research</h1>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-xl text-gray-200 leading-relaxed">
              Make informed business decisions with comprehensive market research. Our research services provide deep insights into Chinese market dynamics, consumer behavior, and competitive landscape.
            </p>

            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">Our Research Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Industry Analysis</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Market size and growth trends</li>
                    <li>• Industry structure analysis</li>
                    <li>• Regulatory environment assessment</li>
                    <li>• Technology trends and innovations</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Consumer Research</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Consumer behavior analysis</li>
                    <li>• Market segmentation studies</li>
                    <li>• Brand perception research</li>
                    <li>• Purchase decision factors</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Competitive Intelligence</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Competitor analysis and profiling</li>
                    <li>• Market positioning studies</li>
                    <li>• Pricing strategy analysis</li>
                    <li>• Competitive advantage assessment</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Market Entry Research</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Market opportunity assessment</li>
                    <li>• Entry strategy evaluation</li>
                    <li>• Risk analysis and mitigation</li>
                    <li>• Success factor identification</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/30 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Get Market Insights Today</h2>
              <p className="text-gray-300 mb-6">
                Our research experts will provide you with comprehensive market intelligence to support your China business strategy and decision-making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-accent-cyan text-background-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-cyan-light transition-colors duration-300 text-center">
                  Request Research
                </a>
                <a href="/insights" className="border border-accent-cyan text-accent-cyan px-6 py-3 rounded-lg font-semibold hover:bg-accent-cyan hover:text-background-primary transition-colors duration-300 text-center">
                  Learn More
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
