import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | China Business Solutions',
  description: 'Learn about how we use cookies on our website to enhance your browsing experience and provide personalized content.',
  keywords: 'cookie policy, privacy, data collection, website cookies, China business',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8">Cookie Policy</h1>
          
          <div className="text-gray-300 space-y-6">
            <p className="text-sm text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be disabled.</li>
                <li><strong>Analytics Cookies:</strong> We use Google Analytics to understand how visitors interact with our website.</li>
                <li><strong>Functional Cookies:</strong> These cookies enable enhanced functionality and personalization.</li>
                <li><strong>Marketing Cookies:</strong> These cookies are used to deliver relevant advertisements and track campaign effectiveness.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Strictly Necessary Cookies</h3>
                  <p>These cookies are essential for you to browse the website and use its features. Without these cookies, services you have asked for cannot be provided.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Performance Cookies</h3>
                  <p>These cookies collect information about how you use our website, such as which pages you visit most often. This data helps us improve our website's performance.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Functionality Cookies</h3>
                  <p>These cookies allow the website to remember choices you make and provide enhanced, more personal features.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Targeting/Advertising Cookies</h3>
                  <p>These cookies are used to deliver advertisements more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h2>
              <p>We may also use third-party cookies from trusted partners, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                <li><strong>Marketing Tools:</strong> To track campaign performance and user engagement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Managing Your Cookie Preferences</h2>
              <p>You can control and manage cookies in several ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use your browser settings to block or delete cookies</li>
                <li>Opt out of specific cookie categories through our cookie consent banner</li>
                <li>Use browser extensions that block tracking cookies</li>
                <li>Visit the Digital Advertising Alliance's opt-out page for advertising cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Browser Settings</h2>
              <p>Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.</p>
              <p>For more information about how to manage cookies in your browser, please visit:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" className="text-accent-cyan hover:text-accent-cyan-light">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-accent-cyan hover:text-accent-cyan-light">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-accent-cyan hover:text-accent-cyan-light">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-accent-cyan hover:text-accent-cyan-light">Internet Explorer</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. 
                We will notify you of any material changes by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us:</p>
              <div className="bg-gray-800 p-6 rounded-lg mt-4">
                <p><strong>Email:</strong> info@sinolink.monster</p>
                <p><strong>Phone:</strong> +86 21 1234 5678</p>
                <p><strong>Address:</strong> Shanghai, China</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
