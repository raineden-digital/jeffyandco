import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Container } from './Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Logo variant="transparent" size="md" className="mb-4" />
            <p className="text-sm text-zinc-400 leading-relaxed">
              Luxury oil-based fragrances crafted with elegance and timeless sophistication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-white mb-4 font-medium">Collection</h4>
            <ul className="space-y-2">
              <li><Link href="/#collection" className="text-sm text-zinc-400 hover:text-[#d5aa59] transition-colors">All Fragrances</Link></li>
              <li><Link href="/#collection" className="text-sm text-zinc-400 hover:text-[#d5aa59] transition-colors">For Him/Her</Link></li>
              <li><Link href="/#collection" className="text-sm text-zinc-400 hover:text-[#d5aa59] transition-colors">For Him</Link></li>
              <li><Link href="/#collection" className="text-sm text-zinc-400 hover:text-[#d5aa59] transition-colors">For Her</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-white mb-4 font-medium">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/our-story" className="text-sm text-zinc-400 hover:text-[#d5aa59] transition-colors">Our Story</Link></li>
              <li><Link href="/#faq" className="text-sm text-zinc-400 hover:text-[#d5aa59] transition-colors">FAQs</Link></li>
              <li><Link href="/#contact" className="text-sm text-zinc-400 hover:text-[#d5aa59] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-white mb-4 font-medium">Follow</h4>
            <ul className="space-y-2">
              <li><a href="https://www.facebook.com/jeffyandco" target="_blank" rel="noreferrer" className="text-sm text-zinc-400 hover:text-[#d5aa59] transition-colors">Facebook</a></li>
              <li><a href="https://www.instagram.com/jeffyandco" target="_blank" rel="noreferrer" className="text-sm text-zinc-400 hover:text-[#d5aa59] transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            © {currentYear} Jeffy & Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-zinc-500 hover:text-zinc-400 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-zinc-500 hover:text-zinc-400 transition-colors">Terms</a>
            <a href="#" className="text-xs text-zinc-500 hover:text-zinc-400 transition-colors">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
