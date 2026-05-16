import { Container } from '@/components/layout/Container';
import { InstagramGallery, type LocalGalleryItem } from './InstagramGallery';

const galleryItems: LocalGalleryItem[] = [
  {
    id: 'img-7450',
    type: 'image',
    src: '/assets/instagram/IMG_7450.PNG',
    alt: 'Jeffy & Co. editorial fragrance image',
    className: 'aspect-square md:col-span-5',
  },
  {
    id: 'jeffy-film',
    type: 'video',
    src: '/assets/instagram/Jeffy 2.mov',
    alt: 'Jeffy & Co. fragrance campaign film',
    className: 'aspect-[4/5] md:col-span-4',
  },
  {
    id: 'img-7621',
    type: 'image',
    src: '/assets/instagram/IMG_7621.PNG',
    alt: 'Jeffy & Co. luxury fragrance detail image',
    className: 'aspect-[4/5] md:col-span-3',
  },
];

export function InstagramGallerySection() {
  return (
    <section id="instagram" className="relative scroll-mt-24 overflow-hidden bg-black py-20 md:py-32 border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d5aa59]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(213,170,89,0.035),transparent_24%,transparent_76%,rgba(213,170,89,0.025))]" />

      <Container size="xl" className="relative">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="text-label text-[#d5aa59] mb-4">Visual Journal</p>
          <h2 className="text-display mb-6">From Our World</h2>
          <p className="text-body mx-auto max-w-2xl text-zinc-400">
            A quiet look inside the rituals, textures, and campaign moments behind Jeffy & Co.
          </p>
        </div>

        <InstagramGallery items={galleryItems} />
      </Container>
    </section>
  );
}
