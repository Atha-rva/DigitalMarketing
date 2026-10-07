import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { About } from '@/sections/About';
import { Industries } from '@/sections/Industries';
import { Testimonials } from '@/sections/Testimonials';
import { CTA } from '@/sections/CTA';
import { AnimatedText } from '@/components/AnimatedText';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduced = useReducedMotion();

  const values = [
    {
      title: 'Strategy First',
      desc: 'Every decision starts with understanding. We research, analyze, and strategize before we create.',
    },
    {
      title: 'Creative Courage',
      desc: 'We push boundaries and challenge conventions. Safe work doesn\'t move markets.',
    },
    {
      title: 'Data Driven',
      desc: 'We measure what matters. Every campaign, every creative, every channel — accountable to outcomes.',
    },
    {
      title: 'Technology Forward',
      desc: 'We embrace emerging tech — AI, automation, 3D — to build experiences that others can\'t.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-ink pt-32 pb-16 overflow-hidden">
        <div className="px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-lime" />
            <span className="text-xs font-body uppercase tracking-[0.2em] text-muted">About Us</span>
          </motion.div>
          <h1 className="font-display text-[clamp(2.5rem,9vw,9rem)] font-bold tracking-tighter leading-[0.85] text-paper">
            <AnimatedText text="WE BUILD BRANDS" />
            <br />
            <span className="text-lime">
              <AnimatedText text="THAT MOVE." delay={0.3} />
            </span>
          </h1>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink py-24 md:py-32 border-t border-border">
        <div className="px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-border pt-8"
              >
                <span className="font-display text-sm text-lime tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mt-4 text-paper">
                  {value.title}
                </h3>
                <p className="text-sm text-paper/60 font-body leading-relaxed mt-4 max-w-md">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <About />
      <Industries />
      <Testimonials />
      <CTA />
    </>
  );
}
