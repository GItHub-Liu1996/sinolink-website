export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-text-main">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-text-heading mb-8">Contact Us</h1>
        <div className="max-w-2xl">
          <p className="text-lg mb-6">
            Ready to start your business journey in China? Get in touch with our expert team.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">Email</h3>
              <p className="text-text-main">info@chinabizsolutions.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">Phone</h3>
              <p className="text-text-main">+86 21 1234 5678</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
