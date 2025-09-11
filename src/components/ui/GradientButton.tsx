import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function GradientButton({ 
  children, 
  href, 
  onClick, 
  className = '', 
  type = 'button' 
}: GradientButtonProps) {
  const baseClasses = `
    bg-gradient-to-r from-accent-cyan to-accent-magenta 
    hover:from-accent-magenta hover:to-accent-cyan
    text-white font-semibold 
    px-8 py-4 rounded-lg 
    text-lg
    transition-all duration-300 
    shadow-lg hover:shadow-xl hover:scale-105
    inline-block text-center
    focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2
  `;

  if (href) {
    return (
      <a 
        href={href}
        className={`${baseClasses} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}
