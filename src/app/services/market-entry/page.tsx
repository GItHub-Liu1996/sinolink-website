import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market Entry Strategy | China Business Solutions',
  description: 'Comprehensive market entry strategies for foreign companies entering China. Expert consulting on market research, regulatory compliance, and business setup.',
  keywords: 'market entry China, business strategy, market research, China market entry, foreign investment',
};

export default function MarketEntryPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Market Entry Strategy</h1>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-xl text-gray-200 leading-relaxed">
              Successfully entering the Chinese market requires a comprehensive strategy that addresses regulatory, cultural, and business challenges. Our expert team provides end-to-end market entry solutions tailored to your industry and objectives.
            </p>

            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">Our Market Entry Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Market Research & Analysis</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Industry landscape analysis</li>
                    <li>• Competitive intelligence</li>
                    <li>• Target customer profiling</li>
                    <li>• Market size and growth potential</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Entry Strategy Development</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Entry mode selection</li>
                    <li>• Partnership identification</li>
                    <li>• Regulatory pathway planning</li>
                    <li>• Risk assessment and mitigation</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Implementation Support</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Company registration assistance</li>
                    <li>• License and permit acquisition</li>
                    <li>• Local team building</li>
                    <li>• Operational setup guidance</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Ongoing Support</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Market monitoring and adaptation</li>
                    <li>• Regulatory compliance management</li>
                    <li>• Performance optimization</li>
                    <li>• Expansion planning</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">Why Choose Our Market Entry Services?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-cyan rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Deep Local Expertise</h3>
                    <p className="text-gray-300">Our team has extensive experience navigating China's complex regulatory environment and business culture.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-cyan rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Industry-Specific Knowledge</h3>
                    <p className="text-gray-300">We understand the unique challenges and opportunities in various industries operating in China.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-cyan rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
                    <p className="text-gray-300">We have successfully helped numerous foreign companies establish and grow their presence in China.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/30 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Ready to Enter the Chinese Market?</h2>
              <p className="text-gray-300 mb-6">
                Contact our market entry experts to discuss your specific needs and develop a customized strategy for your China market entry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-accent-cyan text-background-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-cyan-light transition-colors duration-300 text-center">
                  Get Started Today
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
