import { Alex_Brush } from 'next/font/google';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: '400',
});

export default function OurStoryPage() {
  return (
    <section className="min-h-screen bg-black pt-36 pb-20 md:pt-44 md:pb-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 md:gap-16 items-start">
          <div>
            <p className="text-label text-[#d5aa59] mb-4">Our Story</p>
            <h1 className="text-display mb-8 leading-tight">
              Why Jeffy & Co. Exists
            </h1>

            <div className="space-y-6 text-body text-zinc-300">
              <p>
                I wanted a scent that felt like me. Something warm, elegant, and memorable. A fragrance that stayed long
                after the moment passed.
              </p>

              <p>
                But every time I found a scent I truly loved, it came with a choice. Either spend more than I could justify,
                or save it for &ldquo;special occasions&rdquo; and spray it sparingly. I realized I wasn&apos;t alone in that feeling.
              </p>

              <p>
                So I started searching for a different approach.
              </p>

              <p>
                I discovered the beauty of oil-based fragrances. The kind of scent that doesn&apos;t disappear after an hour,
                but slowly unfolds throughout the day. It felt personal. Luxurious in a quiet way.
              </p>

              <p>
                That became the heart of Jeffy & Co.
              </p>

              <p>
                Every fragrance is inspired by the experience of luxury without the unnecessary excess. Carefully blended
                to feel refined, comforting, and unforgettable. Made for people who want to enjoy fragrance freely. No more
                tipid sprays. No more saving your favorite scent for later. Just fragrances you can wear generously, every
                single day.
              </p>

              <p>
                We believe fragrance should not feel distant or unattainable. It should feel like an extension of who you are.
              </p>

              <p>
                And if you are here, reading this, I hope you find a scent that feels like home to you. A scent that carries
                your presence long after you leave the room, and quietly becomes part of your story.
              </p>

              <p>
                Thank you for being here, truly.
              </p>
            </div>

            <p className={`${alexBrush.className} mt-10 text-6xl md:text-8xl text-[#d5aa59]`}>
              Jeffy
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button href="/#collection" variant="gold" size="md">
                Explore Collection
              </Button>
              <Button href="/#contact" variant="outline" size="md">
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="relative h-[520px] md:h-[640px] overflow-hidden rounded-lg bg-white/5">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="/assets/website-images/Jeffy.png"
              alt="Jeffy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
