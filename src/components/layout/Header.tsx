'use client';

import { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/Logo';
import { Container } from './Container';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Collection', href: '#collection' },
    { label: 'Our Story', href: '#our story' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-start justify-between pt-8 px-2">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Logo variant="transparent" size="md" />
            <span className="hidden sm:block text-label text-[#d5aa59]">Jeffy & Co</span>
          </a>

<nav className="hidden md:flex flex-col items-end gap-4">
  {navLinks.map((link) => (              <a
                key={link.label}
                href={link.href}
className="text-lg uppercase tracking-[0.12em] font-semibold text-white hover:text-[#d5aa59] transition-colors duration-300"              >
                {link.label}
              </a>
            ))}
          </nav>

          <button className="text-white/50 hover:text-white md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}
