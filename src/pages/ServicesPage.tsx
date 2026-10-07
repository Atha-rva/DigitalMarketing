import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { AnimatedText } from '@/components/AnimatedText';
import { CTA } from '@/sections/CTA';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ServicesPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <>
      <section className="relative min-h-[60vh] flex items-end bg-ink pt-32 pb-16">
        <div className="px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-lime" />
            <span className="text-xs font-body uppercase tracking-[0.2em] text-muted">Services</span>
          </motion.div>
          <h1 className="font-display text-[clamp(2.5rem,9vw,9rem)] font-bold tracking-tighter leading-[0.85] text-paper">
            <AnimatedText text="WHAT WE" />
            <br />
            <span className="text-lime">
              <AnimatedText text="DO." delay={0.2} />
            </span>
          </h1>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32 border-t border-border">
        <div className="px-6 md:px-10">
          <div className="border-t border-border">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-border group"
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="py-10 md:py-12 flex items-center gap-6"
                  data-cursor="EXPLORE"
                  data-cursor-variant="explore"
                >
                  <span className="font-display text-sm text-muted tabular-nums group-hover:text-lime transition-colors">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-paper group-hover:text-lime group-hover:translate-x-3 transition-all duration-300">
                      {service.title}
                    </h2>
                    <p className="text-sm text-paper/50 mt-2 font-body">{service.tagline}</p>
                  </div>
                  <ArrowRight
                    size={28}
                    className="text-muted group-hover:text-lime group-hover:rotate-45 transition-all duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
