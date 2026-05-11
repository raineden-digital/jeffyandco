interface LogoProps {
  variant?: 'white' | 'black' | 'white-tagline' | 'black-tagline' | 'transparent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({
  variant = 'white',
  size = 'md',
  className = '',
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-16 w-16',
  };

  const logoMap = {
    white: 'Jeffy & Co - Logo (SVG White without Tagline).svg',
    black: 'Jeffy & Co - Logo (SVG Square Black without Tagline).svg',
    'white-tagline': 'Jeffy & Co - Logo (SVG White with Tagline).svg',
    'black-tagline': 'Jeffy & Co - Logo (SVG Square Black with Tagline).svg',
    transparent: 'Jeffy & Co - Logo (SVG Transparent without Tagline).svg',
  };

  return (
    <img
      src={`/assets/logos/${logoMap[variant]}`}
      alt="Jeffy & Co"
      className={`${sizeClasses[size]} object-contain ${className}`}
    />
  );
}
