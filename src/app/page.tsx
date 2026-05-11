import { Hero } from '@/components/sections/Hero';
import { StorySection } from '@/components/sections/StorySection';
import { CollectionSection } from '@/components/sections/CollectionSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <StorySection />
      <CollectionSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}