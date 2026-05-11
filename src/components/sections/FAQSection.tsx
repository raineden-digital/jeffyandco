'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: '1',
    question: 'What makes Jeffy & Co. fragrances different?',
    answer:
      'Our fragrances are oil-based, which means they last longer on the skin and provide a deeper, more intimate scent experience. We focus on quality over quantity, creating timeless compositions rather than following fleeting trends.',
  },
  {
    id: '2',
    question: 'How long do the fragrances last?',
    answer:
      'Oil-based fragrances typically last 8-12 hours on the skin, depending on application and skin type. The longevity is significantly longer than traditional eau de toilette formulations.',
  },
  {
    id: '3',
    question: 'Are the ingredients natural?',
    answer:
      'We blend premium natural oils with carefully selected complementary ingredients. Each fragrance is created with integrity and respect for both luxury and sustainability.',
  },
  {
    id: '4',
    question: 'Can I layer fragrances?',
    answer:
      'Absolutely. Our oil-based formulations are designed to be versatile. Layering different Jeffy & Co. fragrances creates a unique, personalized scent experience.',
  },
  {
    id: '5',
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day satisfaction guarantee. If you are not completely delighted with your fragrance, we will arrange a full refund or exchange.',
  },
  {
    id: '6',
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we ship globally. International orders are carefully packaged to ensure your fragrance arrives in perfect condition, with standard shipping times of 7-14 business days.',
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-32 bg-black border-t border-white/5">
      <Container size="md">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-label text-[#d5aa59] mb-4">Frequently Asked</p>
          <h2 className="text-display mb-6">Questions</h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-5 md:py-6 flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
              >
                <h3 className="text-base md:text-lg font-light text-left text-white tracking-wide">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4 text-[#d5aa59]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/5 border-t border-white/10"
                  >
                    <div className="px-6 py-5 md:py-6">
                      <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
