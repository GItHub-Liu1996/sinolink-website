import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Expansion | China Business Solutions',
  description: 'Strategic business expansion services in China. Scale your operations, enter new markets, and optimize your China presence.',
  keywords: 'China business expansion, market scaling, operational growth, China expansion strategy',
};

export default function ExpansionPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Business Expansion</h1>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-xl text-gray-200 leading-relaxed">
              Scale your China operations strategically. Our expansion services help you grow your market presence, optimize operations, and maximize your investment returns.
            </p>

            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">Expansion Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Geographic Expansion</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Multi-city market entry</li>
                    <li>• Regional market analysis</li>
                    <li>• Local partnership development</li>
                    <li>• Distribution network setup</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Product Line Extension</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• New product development</li>
                    <li>• Market testing and validation</li>
                    <li>• Product localization</li>
                    <li>• Launch strategy execution</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Operational Scaling</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Production capacity expansion</li>
                    <li>• Supply chain optimization</li>
                    <li>• Technology infrastructure scaling</li>
                    <li>• Team and resource scaling</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Strategic Partnerships</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Joint venture development</li>
                    <li>• Strategic alliance formation</li>
                    <li>• M&A advisory services</li>
                    <li>• Partnership management</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/30 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Scale Your China Operations</h2>
              <p className="text-gray-300 mb-6">
                Our expansion experts will help you identify growth opportunities and execute a strategic expansion plan tailored to your business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-accent-cyan text-background-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-cyan-light transition-colors duration-300 text-center">
                  Plan Your Expansion
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
