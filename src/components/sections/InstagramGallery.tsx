'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export type LocalGalleryItem = {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
  className: string;
};

interface LocalGalleryProps {
  items: LocalGalleryItem[];
}

function GalleryVideo({ item }: { item: LocalGalleryItem }) {
  return (
    <video
      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.025]"
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={item.alt}
      onMouseEnter={(event) => {
        event.currentTarget.play().catch(() => undefined);
      }}
      onMouseLeave={(event) => {
        event.currentTarget.pause();
        event.currentTarget.currentTime = 0;
      }}
      onFocus={(event) => {
        event.currentTarget.play().catch(() => undefined);
      }}
      onBlur={(event) => {
        event.currentTarget.pause();
        event.currentTarget.currentTime = 0;
      }}
    >
      <source src={item.src} type="video/quicktime" />
    </video>
  );
}

function GalleryImage({ item, index }: { item: LocalGalleryItem; index: number }) {
  return (
    <Image
      src={item.src}
      alt={item.alt}
      fill
      sizes={index === 1 ? '(max-width: 768px) 100vw, 44vw' : '(max-width: 768px) 100vw, 28vw'}
      className="object-contain transition-transform duration-700 group-hover:scale-[1.025]"
      quality={75}
    />
  );
}

export function InstagramGallery({ items }: LocalGalleryProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08 },
        },
      }}
      className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-end md:gap-5"
    >
      {items.map((item, index) => (
        <motion.figure
          key={item.id}
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
          }}
          className={`group relative isolate overflow-hidden rounded-lg border border-white/10 bg-[#070707] shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-[#d5aa59]/50 ${item.className}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(213,170,89,0.08),transparent_56%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          <div className="relative h-full w-full p-1.5">
            <div className="relative h-full w-full overflow-hidden rounded-md bg-black">
              {item.type === 'video' ? (
                <GalleryVideo item={item} />
              ) : (
                <GalleryImage item={item} index={index} />
              )}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
        </motion.figure>
      ))}
    </motion.div>
  );
}
