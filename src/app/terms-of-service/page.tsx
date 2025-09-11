import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | ChinaBiz Solutions",
  description: "Read our terms of service to understand the terms and conditions for using ChinaBiz Solutions' services and website.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="bg-background-secondary rounded-2xl p-8 lg:p-12 border border-gray-700">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 font-sans">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-300 space-y-6">
              <p className="text-lg leading-relaxed">
                <strong className="text-white">Last Updated:</strong> January 15, 2025
              </p>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using ChinaBiz Solutions' website and services, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                <p className="text-gray-300 leading-relaxed">
                  ChinaBiz Solutions provides comprehensive consulting services for foreign businesses entering the Chinese market, 
                  including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mt-4">
                  <li>WFOE (Wholly Foreign-Owned Enterprise) registration and setup</li>
                  <li>Business compliance and regulatory guidance</li>
                  <li>Tax planning and compliance support</li>
                  <li>HR and visa services</li>
                  <li>Intellectual property protection</li>
                  <li>Financial outsourcing and accounting services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Service Agreement and Payment</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our services are provided on a fee-for-service basis. Payment terms, including rates, 
                  billing cycles, and payment methods, will be specified in individual service agreements. 
                  All fees are non-refundable unless otherwise specified in writing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. User Responsibilities</h2>
                <p className="text-gray-300 leading-relaxed">
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mt-4">
                  <li>Providing accurate and complete information</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Maintaining the confidentiality of your account information</li>
                  <li>Not using our services for any unlawful purpose</li>
                  <li>Timely payment of all fees and charges</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                <p className="text-gray-300 leading-relaxed">
                  All content, trademarks, and intellectual property on this website are owned by ChinaBiz Solutions 
                  or its licensors and are protected by applicable intellectual property laws. You may not reproduce, 
                  distribute, or create derivative works without our written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  ChinaBiz Solutions shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages resulting from your use of our services. Our total liability shall not 
                  exceed the amount paid by you for the specific service in question.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Confidentiality</h2>
                <p className="text-gray-300 leading-relaxed">
                  We maintain strict confidentiality regarding all client information and business matters. 
                  We will not disclose your confidential information to third parties without your written consent, 
                  except as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
                <p className="text-gray-300 leading-relaxed">
                  Either party may terminate this agreement with 30 days written notice. We reserve the right 
                  to terminate or suspend your access to our services immediately for breach of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
                <p className="text-gray-300 leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of the People's Republic of China, 
                  without regard to its conflict of law provisions. Any disputes shall be resolved through arbitration 
                  in Shanghai, China.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about these terms, please contact us at{" "}
                  <a href="mailto:legal@chinabizsolutions.com" className="text-accent-cyan hover:text-accent-magenta transition-colors">
                    legal@chinabizsolutions.com
                  </a>
                </p>
              </section>
            </div>

            <div className="mt-12 p-6 bg-background-primary rounded-xl border border-gray-600">
              <p className="text-sm text-gray-400 italic">
                <strong className="text-white">Legal Notice:</strong> This is a template terms of service. 
                Please consult with a qualified legal professional to ensure compliance with applicable 
                laws and regulations in your jurisdiction.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              Contact Us
            </Link>
            <Link 
              href="/" 
              className="border-2 border-accent-cyan hover:bg-accent-cyan hover:text-background-primary text-accent-cyan px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
