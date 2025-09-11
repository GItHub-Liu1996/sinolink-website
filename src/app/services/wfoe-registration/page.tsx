import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WFOE Registration | China Business Solutions',
  description: 'Complete WFOE (Wholly Foreign-Owned Enterprise) registration services in China. Expert guidance on company setup, licensing, and compliance.',
  keywords: 'WFOE registration, China company registration, foreign investment, business license, China setup',
};

export default function WFOERegistrationPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">WFOE Registration</h1>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-xl text-gray-200 leading-relaxed">
              A Wholly Foreign-Owned Enterprise (WFOE) is the most common business structure for foreign companies entering China. Our comprehensive WFOE registration services ensure a smooth and compliant setup process.
            </p>

            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">WFOE Registration Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-cyan rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Pre-Registration Planning</h3>
                    <p className="text-gray-300">Business scope definition, capital requirements assessment, and location selection guidance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-cyan rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Document Preparation</h3>
                    <p className="text-gray-300">Preparation of all required legal documents, including articles of association and investment certificates.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-cyan rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Government Approvals</h3>
                    <p className="text-gray-300">Submission to relevant authorities and coordination of approval processes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-cyan rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Business License & Registration</h3>
                    <p className="text-gray-300">Obtaining business license and completing all necessary registrations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-cyan rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Post-Registration Setup</h3>
                    <p className="text-gray-300">Bank account opening, tax registration, and operational compliance setup.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">Key Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Capital Requirements</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Minimum registered capital varies by industry</li>
                    <li>• Capital contribution timeline</li>
                    <li>• Capital verification process</li>
                    <li>• Currency and transfer requirements</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Documentation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Parent company documents</li>
                    <li>• Legal representative information</li>
                    <li>• Business scope definition</li>
                    <li>• Office lease agreement</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Compliance Requirements</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Industry-specific licenses</li>
                    <li>• Environmental approvals</li>
                    <li>• Safety certifications</li>
                    <li>• Ongoing reporting obligations</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Timeline</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Typical processing: 4-6 weeks</li>
                    <li>• Complex cases: 8-12 weeks</li>
                    <li>• Industry-specific variations</li>
                    <li>• Government processing times</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/30 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Start Your WFOE Registration Today</h2>
              <p className="text-gray-300 mb-6">
                Our experienced team will guide you through every step of the WFOE registration process, ensuring compliance and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-accent-cyan text-background-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-cyan-light transition-colors duration-300 text-center">
                  Get Free Consultation
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
