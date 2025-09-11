import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tax Compliance | China Business Solutions',
  description: 'Comprehensive tax compliance services for foreign companies in China. Expert guidance on corporate tax, VAT, and transfer pricing.',
  keywords: 'China tax compliance, corporate tax, VAT, transfer pricing, tax planning',
};

export default function TaxCompliancePage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Tax Compliance</h1>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-xl text-gray-200 leading-relaxed">
              Navigate China's complex tax system with confidence. Our tax compliance services ensure your business meets all regulatory requirements while optimizing your tax position.
            </p>

            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">Our Tax Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Corporate Tax Compliance</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Monthly and annual tax filings</li>
                    <li>• Tax planning and optimization</li>
                    <li>• Tax audit support</li>
                    <li>• Tax dispute resolution</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">VAT Management</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• VAT registration and filing</li>
                    <li>• Input VAT recovery</li>
                    <li>• Cross-border VAT compliance</li>
                    <li>• VAT optimization strategies</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Transfer Pricing</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Transfer pricing documentation</li>
                    <li>• BEPS compliance</li>
                    <li>• Intercompany agreements</li>
                    <li>• Transfer pricing audits</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Individual Tax</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Expatriate tax planning</li>
                    <li>• Individual income tax filing</li>
                    <li>• Social security compliance</li>
                    <li>• Tax treaty benefits</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/30 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Ensure Tax Compliance Today</h2>
              <p className="text-gray-300 mb-6">
                Our tax experts will help you navigate China's complex tax landscape and ensure full compliance while optimizing your tax position.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-accent-cyan text-background-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-cyan-light transition-colors duration-300 text-center">
                  Get Tax Consultation
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
