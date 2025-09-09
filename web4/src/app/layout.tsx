import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import { Montserrat, Lexend } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: '700',
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['400', '500'],
});

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
      <body className={`${montserrat.variable} ${lexend.variable} font-body antialiased bg-background-primary text-text-main`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
