'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'default' | 'white' | 'icon';
  className?: string;
  href?: string;
  width?: number;
  height?: number;
}

export default function Logo({ 
  variant = 'default', 
  className = '', 
  href = '/',
  width = 200,
  height = 60
}: LogoProps) {
  const logoSrc = {
    default: '/images/logo/logo.svg',
    white: '/images/logo/logo-white.svg',
    icon: '/images/logo/logo-icon.svg'
  };

  const logoElement = (
    <Image
      src={logoSrc[variant]}
      alt="GoChinaAdvisors"
      width={width}
      height={height}
      className={`transition-all duration-300 hover:opacity-80 ${className}`}
      priority
    />
  );

  if (href) {
    return (
      <Link href={href} className="flex-shrink-0">
        {logoElement}
      </Link>
    );
  }

  return logoElement;
}
