import React from 'react';

interface OutlineButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function OutlineButton({ 
  children, 
  href, 
  onClick, 
  className = '', 
  type = 'button' 
}: OutlineButtonProps) {
  const baseClasses = `
    border-2 border-accent-cyan 
    hover:bg-accent-cyan hover:text-background-primary
    text-accent-cyan font-semibold 
    px-8 py-4 rounded-lg 
    text-lg
    transition-all duration-300 
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
