'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-black border-t border-white/5">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-label text-[#d5aa59] mb-4">Get In Touch</p>
          
          <h2 className="text-display mb-6">We&apos;d Love to Hear From You</h2>

          <p className="text-body text-zinc-400 mb-10 max-w-xl mx-auto">
            Have questions about our fragrances? Want to know more about our story? 
            Reach out anytime. We&apos;re here to help.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: '✉',
                title: 'Email',
                detail: 'jeffyandco.ph@gmail.com',
              },
              {
                icon: '📱',
                title: 'Social',
                detail: '@jeffyandco',
              },
              {
                icon: '📍',
                title: 'Location',
                detail: 'Cebu, Philippines',
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-white/10 rounded-lg hover:border-[#d5aa59]/50 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{contact.icon}</div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-white mb-2 font-light">
                  {contact.title}
                </h3>
                <p className="text-zinc-400 text-sm">{contact.detail}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </Container>
    </section>
  );
}
