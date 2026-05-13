'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export function StorySection() {
  return (
    <section id="story" className="relative py-20 md:py-32 bg-black border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-label text-[#d5aa59] mb-4">Our Story</p>
            
            <h2 className="text-display mb-8 leading-tight">
              Crafted with<br />Intent
            </h2>

            <div className="space-y-6">
              <p className="text-body text-zinc-300">
                Jeffy & Co. was born from a simple belief: that fragrance should be an intimate experience, not a fleeting trend. Each oil-based composition is carefully crafted to linger on the skin, creating moments of warmth and connection.
              </p>

              <p className="text-body text-zinc-300">
                We blend the finest natural oils with expert precision, honoring the tradition of luxury perfumery while maintaining an accessible approach to premium scents. Every bottle tells a story of dedication, elegance, and timeless beauty.
              </p>

              <p className="text-body text-zinc-300">
                Our philosophy is simple: less is more. We let the fragrance speak for itself—pure, refined, and unforgettable.
              </p>
            </div>

            <div className="mt-10">
              <Button href="/our-story" variant="gold" size="md">
                Read Our Story
              </Button>
            </div>
          </motion.div>

          {/* Image Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[500px] md:h-[600px] bg-black border border-white/5 rounded-lg overflow-hidden"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/assets/website-images/video-1.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[calc(100%-2rem)] h-[calc(100%-2rem)] rounded-3xl border border-white/10" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
