import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Planning | China Business Solutions',
  description: 'Comprehensive business planning services for China market entry. Strategic planning, financial modeling, and operational roadmaps.',
  keywords: 'China business planning, strategic planning, financial modeling, market entry strategy',
};

export default function BusinessPlanningPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Business Planning</h1>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-xl text-gray-200 leading-relaxed">
              Develop a comprehensive business plan tailored for the Chinese market. Our strategic planning services help you navigate market complexities and achieve sustainable growth.
            </p>

            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">Our Planning Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Strategic Planning</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Market entry strategy development</li>
                    <li>• Competitive analysis and positioning</li>
                    <li>• Business model optimization</li>
                    <li>• Growth roadmap planning</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Financial Planning</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Financial modeling and projections</li>
                    <li>• Investment requirement analysis</li>
                    <li>• Revenue forecasting</li>
                    <li>• Risk assessment and mitigation</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Operational Planning</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Organizational structure design</li>
                    <li>• Process optimization</li>
                    <li>• Technology integration</li>
                    <li>• Performance metrics definition</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Implementation Support</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Plan execution monitoring</li>
                    <li>• Performance tracking</li>
                    <li>• Strategy adjustments</li>
                    <li>• Continuous improvement</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/30 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Start Your Business Planning Today</h2>
              <p className="text-gray-300 mb-6">
                Our experienced consultants will help you develop a comprehensive business plan that aligns with your goals and the Chinese market realities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-accent-cyan text-background-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-cyan-light transition-colors duration-300 text-center">
                  Get Planning Consultation
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
