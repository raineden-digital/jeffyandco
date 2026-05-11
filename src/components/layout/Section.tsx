import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'full-dark' | 'minimal';
  id?: string;
}

export function Section({
  children,
  className = '',
  variant = 'default',
  id,
}: SectionProps) {
  const variantClasses = {
    default: 'py-16 md:py-24 lg:py-32 bg-black',
    'full-dark': 'py-20 md:py-32 bg-black',
    minimal: 'py-12 md:py-16 bg-black',
  };

  return (
    <section id={id} className={`${variantClasses[variant]} ${className}`}>
      {children}
    </section>
  );
}
