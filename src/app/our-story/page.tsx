import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function OurStoryPage() {
  return (
    <section className="min-h-screen bg-black pt-36 pb-20 md:pt-44 md:pb-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 md:gap-16 items-center">
          <div>
            <p className="text-label text-[#d5aa59] mb-4">Our Story</p>
            <h1 className="text-display mb-8 leading-tight">
              Crafted with Intent
            </h1>

            <div className="space-y-6 text-body text-zinc-300">
              <p>
                Jeffy & Co. was born from a simple belief: fragrance should feel personal, lasting, and quietly luxurious.
                Each oil-based composition is made to linger on the skin, creating moments of warmth, memory, and connection.
              </p>

              <p>
                From Cebu, Philippines, we blend premium oils with careful restraint, honoring the traditions of perfumery
                while making refined scents more accessible for everyday rituals.
              </p>

              <p>
                Our philosophy is simple: less is more. Every note is chosen with purpose, every bottle is guided by elegance,
                and every fragrance is meant to stay with you beyond the moment.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button href="/#collection" variant="gold" size="md">
                Explore Collection
              </Button>
              <Button href="/#contact" variant="outline" size="md">
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="relative h-[520px] md:h-[640px] overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/assets/website-images/video-1.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
