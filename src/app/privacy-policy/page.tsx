import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ChinaBiz Solutions",
  description: "Learn how ChinaBiz Solutions collects, uses, and protects your personal information in accordance with privacy laws and regulations.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="bg-background-secondary rounded-2xl p-8 lg:p-12 border border-gray-700">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 font-sans">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-300 space-y-6">
            <p className="text-lg leading-relaxed">
              <strong className="text-white">Last Updated:</strong> [Date]
            </p>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="text-gray-300 leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, 
                  request our services, or contact us for support. This may include your name, email address, 
                  phone number, company information, and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, 
                  communicate with you, and comply with legal obligations. We may also use your 
                  information for marketing purposes with your consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                <p className="text-gray-300 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this privacy policy or as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                <p className="text-gray-300 leading-relaxed">
                  You have the right to access, update, or delete your personal information. You may also 
                  opt out of certain communications from us at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about this privacy policy, please contact us at{" "}
                  <a href="mailto:privacy@chinabizsolutions.com" className="text-accent-cyan hover:text-accent-magenta transition-colors">
                    privacy@chinabizsolutions.com
                  </a>
                </p>
              </section>
            </div>

            <div className="mt-12 p-6 bg-background-primary rounded-xl border border-gray-600">
              <p className="text-sm text-gray-400 italic">
                <strong className="text-white">Legal Notice:</strong> This is a template privacy policy. 
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
