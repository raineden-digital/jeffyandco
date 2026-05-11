'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.02;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.02;

      const glow = containerRef.current.querySelector('[data-glow]') as HTMLElement;
      if (glow) {
        glow.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="hero-section relative min-h-screen flex items-center justify-center px-6 pt-6 pb-0 overflow-hidden bg-black"
      style={{
        backgroundImage: 'url("/assets/website-images/hero-1.png")',
        backgroundSize: '120%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/85" />
      {/* Animated Glow */}
      <motion.div
        data-glow
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(211,150,41,0.08),transparent_50%)] pointer-events-none"
      />

      {/* Dark Overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/70" />      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
className="relative z-10 text-center max-w-3xl"      >
{/* Accent Label */}
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="mb-3 text-[11px] uppercase tracking-[0.45em] text-[#d5aa59] font-medium"
>
  Luxury Oil-Based Fragrances
</motion.p>

{/* Monogram */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.9, delay: 0.2 }}
className="mx-auto -mt-5 mb-1 h-44 w-44 sm:h-56 sm:w-56 md:h-[340px] md:w-[340px]">
  <img
    src="/assets/Jeffy & Co - Monogram.png"
    alt="Jeffy & Co Monogram"
    className="h-full w-full object-contain"
  />
</motion.div>
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
className="text-display -mt-4 md:-mt-12 leading-none">
  Jeffy & Co.
</motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
className="mt-2 text-sm md:text-xl text-zinc-300/90 leading-relaxed max-w-md md:max-w-4xl mx-auto font-light px-4">
  Fragrance that lingers beyond the moment. Crafted with warmth, elegance, and timeless sophistication.
          <br />
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3"
>          <Button variant="gold" size="md">
            Explore Collection
          </Button>

          <Button variant="outline" size="md">
            Our Story
          </Button>
        </motion.div>
      </motion.div>


    </section>
  );
}
