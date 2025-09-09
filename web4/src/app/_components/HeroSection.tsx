import Image from 'next/image';
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      {/* 背景图片 */}
      <Image
        src="/images/hero-background.webp"
        alt="A vibrant, modern cityscape at night, representing the Chinese market"
        fill
        priority
        className="object-cover -z-10"
        quality={80}
      />
      {/* 半透明蒙版 */}
      <div className="absolute inset-0 bg-background/80 -z-10" />

      {/* 内容容器 */}
      <div className="container mx-auto flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-text-heading">
          Launch, Operate, and Thrive in China.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-main">
          From WFOE registration to ongoing compliance, our expert team provides the clarity and support you need to succeed.
        </p>
        <div className="mt-8 flex gap-x-4 flex-col sm:flex-row">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-purple-500 hover:to-cyan-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book a Free Consultation
          </Link>
          <Link
            href="/services"
            className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
