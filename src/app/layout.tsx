import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";

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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500&family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background-primary text-text-main">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
