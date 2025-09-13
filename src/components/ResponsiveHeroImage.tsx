import Image from 'next/image';

interface ResponsiveHeroImageProps {
  alt: string;
  className?: string;
}

export default function ResponsiveHeroImage({ alt, className = '' }: ResponsiveHeroImageProps) {
  return (
    <picture className={className}>
      {/* 移动端 - 最小图片 */}
      <source
        media="(max-width: 640px)"
        srcSet="/images/hero-background-mobile.webp"
        type="image/webp"
      />
      
      {/* 平板端 - 中等图片 */}
      <source
        media="(max-width: 1024px)"
        srcSet="/images/hero-background-tablet.webp"
        type="image/webp"
      />
      
      {/* 桌面端 - 完整图片 */}
      <source
        media="(min-width: 1025px)"
        srcSet="/images/hero-background-desktop.webp"
        type="image/webp"
      />
      
      {/* 回退图片 */}
      <Image
        src="/images/hero-background.webp"
        alt={alt}
        fill
        priority
        fetchPriority="high"
        className="object-cover -z-10"
        quality={45}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
    </picture>
  );
}
