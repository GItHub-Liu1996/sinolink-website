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
        style={{
          filter: 'sepia(0.3) saturate(1.2) hue-rotate(30deg) brightness(0.7) contrast(1.1)',
        }}
      />
      {/* 黑金色调蒙版 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/20 via-transparent to-yellow-600/20 -z-10" />

      {/* 内容容器 */}
      <div className="container mx-auto flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl mb-6">
          Launch, Operate, and Thrive in China.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-100 drop-shadow-lg leading-relaxed">
          From WFOE registration to ongoing compliance, our expert team provides the clarity and support you need to succeed.
        </p>
        <div className="mt-8 flex gap-x-4 flex-col sm:flex-row">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Book a Free Consultation
          </Link>
          <Link
            href="/services"
            className="border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
