import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
}

export function Button({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
  onClick,
  href,
  target,
}: ButtonProps) {
  const baseClasses = 'cta-button border inline-flex items-center justify-center font-light';
  
  const variantClasses = {
    gold: 'border-[#d69b2d] text-[#d69b2d] hover:bg-[#d69b2d] hover:text-black hover:border-[#d69b2d]',
    outline: 'border-white/30 text-white hover:border-[#d5aa59] hover:text-[#d5aa59]',
    ghost: 'border-transparent text-[#d5aa59] hover:text-white',
  };

  const sizeClasses = {
    sm: 'px-6 py-3 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-10 py-5 text-base',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
