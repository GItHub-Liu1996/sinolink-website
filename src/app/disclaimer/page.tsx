import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | China Business Solutions',
  description: 'Important disclaimer regarding the information provided on our website and the limitations of our services.',
  keywords: 'disclaimer, legal notice, terms, limitations, China business advice',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8">Disclaimer</h1>
          
          <div className="text-gray-300 space-y-6">
            <p className="text-sm text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">General Information</h2>
              <p>
                The information contained on this website is for general information purposes only. While we endeavor to keep the information up to date and correct, 
                we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability 
                with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Professional Advice</h2>
              <p>
                The information provided on this website does not constitute professional legal, tax, accounting, or business advice. 
                Any reliance you place on such information is therefore strictly at your own risk. Before making any business decisions, 
                you should consult with qualified professionals who can provide advice tailored to your specific circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <p>
                In no event will China Business Solutions, its officers, employees, agents, or affiliates be liable for any loss or damage including, 
                without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits 
                arising out of, or in connection with, the use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Regulatory Changes</h2>
              <p>
                Laws and regulations in China are subject to frequent changes. While we strive to provide current and accurate information, 
                we cannot guarantee that all information on this website reflects the most recent legal or regulatory developments. 
                Users are responsible for verifying current requirements and seeking professional advice as needed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Links</h2>
              <p>
                Through this website, you are able to link to other websites which are not under the control of China Business Solutions. 
                We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily 
                imply a recommendation or endorse the views expressed within them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Service Availability</h2>
              <p>
                Every effort is made to keep the website up and running smoothly. However, China Business Solutions takes no responsibility for, 
                and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of China Business Solutions 
                or its content suppliers and is protected by international copyright laws. Unauthorized use of any content may violate copyright, 
                trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">No Guarantee of Results</h2>
              <p>
                While we provide professional services to help businesses establish and operate in China, we cannot guarantee specific outcomes. 
                Business success depends on many factors beyond our control, including market conditions, regulatory changes, and client implementation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Client Confidentiality</h2>
              <p>
                We maintain strict confidentiality regarding client information and business matters. However, this disclaimer does not create 
                an attorney-client privilege or other professional relationship unless explicitly established through a formal engagement agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Jurisdiction</h2>
              <p>
                This disclaimer is governed by the laws of the People's Republic of China. Any disputes arising from the use of this website 
                or our services will be subject to the jurisdiction of Chinese courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Disclaimer</h2>
              <p>
                We reserve the right to update this disclaimer at any time without prior notice. Changes will be effective immediately upon posting 
                on this website. Your continued use of the website after any changes constitutes acceptance of the updated disclaimer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
              <p>If you have any questions about this disclaimer, please contact us:</p>
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
