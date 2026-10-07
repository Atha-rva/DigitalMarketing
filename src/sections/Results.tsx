import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Counter } from '@/components/Counter';
import { metrics, campaigns } from '@/data/testimonials';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Results() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden">
      <div className="px-6 md:px-10">
        {/* Giant metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-ink/20 pt-6"
            >
              <div className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-none">
                <Counter value={metric.value} />
              </div>
              <p className="text-xs md:text-sm font-body uppercase tracking-wider text-ink/60 mt-3">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Campaign visualization */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-px bg-ink/40" />
            <span className="text-xs font-body uppercase tracking-[0.2em] text-ink/60">
              Campaign Growth
            </span>
          </div>

          <div className="space-y-8">
            {campaigns.map((campaign, i) => (
              <motion.div
                key={campaign.name}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-12 items-center gap-4"
              >
                <div className="col-span-12 md:col-span-3">
                  <p className="font-display text-lg font-bold">{campaign.name}</p>
                  <p className="text-sm text-ink/50 font-body">{campaign.metric}</p>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <div className="h-2 bg-ink/10 overflow-hidden rounded-full">
                    <motion.div
                      className="h-full bg-ink rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${campaign.growth}%` } : {}}
                      transition={{
                        duration: reduced ? 0 : 1.2,
                        delay: 0.5 + i * 0.15,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-2 text-right">
                  <span className="font-display text-2xl font-bold text-ink">
                    <Counter value={campaign.label} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
