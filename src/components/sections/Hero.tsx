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
      className="relative min-h-screen flex items-center justify-center px-6 py-6 overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/Website%20Images/Hero%201.png")',
        backgroundSize: '120%',
        backgroundPosition: '-1% -20%',
        backgroundRepeat: 'no-repeat'
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
className="mx-auto -mt-8 mb-1 h-44 w-44 sm:h-56 sm:w-56 md:h-[340px] md:w-[340px]">
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
className="text-display -mt-12 leading-none">
  Jeffy & Co.
</motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
className="mt-2 text-base md:text-xl text-zinc-300/90 whitespace-nowrap leading-loose max-w-4xl mx-auto font-light"
>
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#d5aa59]/50 text-xs uppercase tracking-[0.2em]"
        >
          ↓ Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
