import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedText } from '@/components/AnimatedText';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function AISection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduced = useReducedMotion();

  const pillars = [
    { label: 'AI', desc: 'Machine learning models that optimize in real time' },
    { label: 'DATA', desc: 'Unified data infrastructure for single-source truth' },
    { label: 'AUTOMATION', desc: 'Workflows that scale without scaling headcount' },
    { label: 'PREDICTION', desc: 'Forecasting that anticipates market shifts' },
    { label: 'PERSONALIZATION', desc: 'Individual-level experiences at scale' },
  ];

  return (
    <section ref={ref} className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(to right, #080808 1px, transparent 1px), linear-gradient(to bottom, #080808 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative px-6 md:px-10">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-px bg-ink/40" />
          <span className="text-xs font-body uppercase tracking-[0.2em] text-ink/60">
            AI-Powered Marketing
          </span>
        </div>

        <h2 className="font-display text-section md:text-display font-bold tracking-tighter leading-[0.9] max-w-4xl">
          <AnimatedText text="MARKETING," />
          <br />
          <span className="text-violet">
            <AnimatedText text="WITH INTELLIGENCE." delay={0.3} />
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-base md:text-lg text-ink/60 font-body leading-relaxed max-w-xl"
        >
          We don't just use AI as a buzzword. We build intelligent systems that learn, adapt, and
          optimize — turning data into decisions and decisions into growth.
        </motion.p>

        {/* Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-px bg-ink/10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-paper p-6 md:p-8 group hover:bg-ink hover:text-paper transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-display text-xs tabular-nums text-ink/40 group-hover:text-paper/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <motion.div
                  className="w-2 h-2 rounded-full bg-violet"
                  animate={
                    reduced
                      ? {}
                      : { scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }
                  }
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </div>
              <h3 className="font-display text-lg font-bold tracking-tight mb-2">
                {pillar.label}
              </h3>
              <p className="text-xs font-body text-ink/50 group-hover:text-paper/50 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
