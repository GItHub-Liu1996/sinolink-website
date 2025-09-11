import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accounting Services | China Business Solutions',
  description: 'Professional accounting services for foreign companies in China. Bookkeeping, financial reporting, and accounting compliance.',
  keywords: 'China accounting services, bookkeeping, financial reporting, accounting compliance',
};

export default function AccountingPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Accounting Services</h1>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-xl text-gray-200 leading-relaxed">
              Maintain accurate financial records and ensure compliance with Chinese accounting standards. Our professional accounting services keep your business financially sound and compliant.
            </p>

            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">Our Accounting Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Bookkeeping & Record Keeping</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Daily transaction recording</li>
                    <li>• Chart of accounts setup</li>
                    <li>• Bank reconciliation</li>
                    <li>• Document management</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Financial Reporting</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Monthly financial statements</li>
                    <li>• Annual audit preparation</li>
                    <li>• Management reporting</li>
                    <li>• Regulatory filings</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Compliance & Standards</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Chinese GAAP compliance</li>
                    <li>• IFRS reporting</li>
                    <li>• Internal control systems</li>
                    <li>• Audit support</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Financial Analysis</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Budget planning and control</li>
                    <li>• Cash flow management</li>
                    <li>• Cost analysis</li>
                    <li>• Performance metrics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/30 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Professional Accounting Support</h2>
              <p className="text-gray-300 mb-6">
                Our certified accountants ensure your financial records are accurate, compliant, and provide valuable insights for business decision-making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-accent-cyan text-background-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-cyan-light transition-colors duration-300 text-center">
                  Get Accounting Support
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
