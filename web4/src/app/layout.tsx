import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "China Business Solutions - Your Trusted Partner for Market Entry",
  description: "Professional consulting services for company registration, compliance, and growth in China. Expert guidance for WFOE, Joint Ventures, and business operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-text-main">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
