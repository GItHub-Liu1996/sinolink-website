export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-text-main">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-text-heading mb-8">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background-secondary p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-text-heading mb-4">WFOE Registration</h2>
            <p className="text-text-main">Complete company registration services for foreign enterprises in China.</p>
          </div>
          <div className="bg-background-secondary p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-text-heading mb-4">Compliance Support</h2>
            <p className="text-text-main">Ongoing compliance and regulatory support for your business operations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
