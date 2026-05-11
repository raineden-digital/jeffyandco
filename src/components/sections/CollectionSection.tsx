'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';

interface Fragrance {
  id: number;
  name: string;
  description: string;
  notes: string[];
}

const fragrances: Fragrance[] = [
  {
    id: 1,
    name: 'Velour',
    description: 'A rich, warm blend of amber and sandalwood. Intimate and sensual.',
    notes: ['Amber', 'Sandalwood', 'Musk'],
  },
  {
    id: 2,
    name: 'Nocturne',
    description: 'Deep woody tones with a hint of jasmine. Perfect for evening wear.',
    notes: ['Oud', 'Jasmine', 'Cedar'],
  },
  {
    id: 3,
    name: 'Luminescence',
    description: 'Bright citrus and floral notes. A touch of elegance for any moment.',
    notes: ['Bergamot', 'Neroli', 'Rose'],
  },
  {
    id: 4,
    name: 'Reverie',
    description: 'A dreamy blend of vanilla and patchouli. Timeless and captivating.',
    notes: ['Vanilla', 'Patchouli', 'Tonka'],
  },
];

export function CollectionSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="collection" className="py-20 md:py-32 bg-black border-t border-white/5">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-label text-[#d5aa59] mb-4">Collection</p>
          <h2 className="text-display mb-6">Our Fragrances</h2>
          <p className="text-body text-zinc-400 max-w-2xl mx-auto">
            Each fragrance is an olfactory journey. Discover the luxury of our curated collection.
          </p>
        </motion.div>

        {/* Fragrance Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {fragrances.map((fragrance) => (
            <motion.div
              key={fragrance.id}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#d5aa59]/50 transition-all duration-500 cursor-pointer"
              whileHover={{ y: -5, borderColor: '#d5aa59' }}
            >
              {/* Bottle Placeholder */}
              <div className="h-48 mb-6 flex items-center justify-center bg-gradient-to-b from-[#d5aa59]/5 to-transparent rounded">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-32 bg-gradient-to-b from-[#d5aa59] to-[#d69b2d] rounded-full opacity-60"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-light uppercase tracking-[0.15em] text-white mb-3">
                {fragrance.name}
              </h3>

              <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                {fragrance.description}
              </p>

              {/* Notes */}
              <div className="flex flex-wrap gap-2 mb-6">
                {fragrance.notes.map((note) => (
                  <span key={note} className="text-xs text-[#d5aa59] border border-[#d5aa59]/30 px-2 py-1 rounded">
                    {note}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button className="text-xs uppercase tracking-[0.2em] text-[#d5aa59] hover:text-white transition-colors duration-300 font-light">
                Explore →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
