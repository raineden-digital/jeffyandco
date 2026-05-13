'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

interface Fragrance {
  id: number;
  description: string;
  inspiration: string;
  projection: string;
  category: string;
  notes: string[];
  image: string;
}

const fragrances: Fragrance[] = [
  {
    id: 1,
    description: 'Warm, airy, and unforgettable. For the one who walks in grace and confidence.',
    inspiration: 'Baccarat Rouge 540-inspired.',
    projection: 'Moderate to strong',
    category: 'For Him/Her',
    notes: ['Saffron', 'Amber', 'Jasmine'],
    image: '/assets/website-images/feature-card-1.png',
  },
  {
    id: 2,
    description: 'Fresh strength with refined breadth. For the one who commands attention effortlessly.',
    inspiration: 'Dior Sauvage-inspired.',
    projection: 'Strong',
    category: 'For Him',
    notes: ['Bergamot', 'Spice', 'Woods'],
    image: '/assets/website-images/feature-card-2.png',
  },
  {
    id: 3,
    description: 'Comforting, dreamy, and feminine. For the one who carries sweetness with elegance.',
    inspiration: 'Ariana Grande Cloud-inspired.',
    projection: 'Soft',
    category: 'For Her',
    notes: ['Lavender', 'Vanilla', 'Coconut'],
    image: '/assets/website-images/feature-card-3.png',
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
          <h2 className="text-display mb-6">Featured Fragrances</h2>
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {fragrances.map((fragrance) => (
            <motion.div
              key={fragrance.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 hover:border-[#d5aa59]/50 transition-all duration-500 cursor-pointer"
              whileHover={{ y: -5, borderColor: '#d5aa59' }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-white/5">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={fragrance.image}
                  alt="Featured fragrance"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 md:p-7">
                <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
                  {fragrance.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {fragrance.notes.map((note) => (
                    <span key={note} className="text-xs text-[#d5aa59] border border-[#d5aa59]/30 px-2 py-1 rounded">
                      {note}
                    </span>
                  ))}
                </div>

                <p className="text-xs uppercase tracking-[0.16em] text-[#d5aa59] mb-5">
                  {fragrance.inspiration}
                </p>

                <dl className="space-y-2 border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-xs uppercase tracking-[0.16em] text-zinc-500">Projection</dt>
                    <dd className="text-sm text-zinc-300 text-right">{fragrance.projection}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-xs uppercase tracking-[0.16em] text-zinc-500">Category</dt>
                    <dd className="text-sm text-zinc-300 text-right">{fragrance.category}</dd>
                  </div>
                </dl>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button href="#collection" variant="gold" size="md">
            Explore Collection
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
