import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategic Consulting | China Business Solutions',
  description: 'Strategic consulting services for China market entry and business growth. Expert guidance on strategy, operations, and market development.',
  keywords: 'China strategic consulting, business strategy, market entry consulting, strategic planning',
};

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Strategic Consulting</h1>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-xl text-gray-200 leading-relaxed">
              Navigate the complexities of the Chinese market with expert strategic guidance. Our consulting services provide comprehensive support for your China business strategy and execution.
            </p>

            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">Our Consulting Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Strategy Development</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Market entry strategy</li>
                    <li>• Business model optimization</li>
                    <li>• Growth strategy planning</li>
                    <li>• Competitive positioning</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Operations Consulting</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Operational efficiency improvement</li>
                    <li>• Process optimization</li>
                    <li>• Supply chain management</li>
                    <li>• Technology integration</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Market Development</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Market expansion strategies</li>
                    <li>• Customer acquisition</li>
                    <li>• Brand positioning</li>
                    <li>• Sales channel optimization</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Change Management</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Organizational transformation</li>
                    <li>• Cultural integration</li>
                    <li>• Change implementation</li>
                    <li>• Performance improvement</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/30 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Get Strategic Guidance</h2>
              <p className="text-gray-300 mb-6">
                Our experienced consultants will provide strategic guidance tailored to your specific business needs and China market objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-accent-cyan text-background-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-cyan-light transition-colors duration-300 text-center">
                  Get Consulting
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
