import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedText } from '@/components/AnimatedText';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduced = useReducedMotion();

  const capabilities = [
    'AI Video Creation',
    'Video Editing',
    'Video Shooting',
    'Meta Ads',
    'Profile Management',
    'Creative Support',
    'Content Strategy',
    'Paid Campaigns',
    'Brand Storytelling',
    'Social Media Growth',
  ];

  const industries = ['Local Businesses', 'Personal Brands', 'Startups', 'Product Brands', 'Service Businesses', 'Growing Companies'];

  return (
    <section ref={ref} className="relative bg-ink py-24 md:py-32">
      <div className="px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <SectionHeading label="About The Crest" title="" />
            <h2 className="font-display text-section md:text-display font-bold tracking-tighter leading-[0.9]">
              <AnimatedText text="ONE CREATIVE" />
              <br />
              <span className="text-lime">
                <AnimatedText text="PARTNER. MULTIPLE SOLUTIONS." delay={0.3} />
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-base md:text-lg text-paper/60 font-body leading-relaxed max-w-xl"
            >
              The Crest is a digital marketing and creative services business helping brands strengthen
              their online presence through compelling video content, social media management and
              targeted advertising.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <div>
                <p className="font-display text-3xl font-bold text-lime">8+</p>
                <p className="text-xs text-muted uppercase tracking-wider mt-1">Years</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-lime">120+</p>
                <p className="text-xs text-muted uppercase tracking-wider mt-1">Projects</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-lime">40+</p>
                <p className="text-xs text-muted uppercase tracking-wider mt-1">Clients</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-lime">12</p>
                <p className="text-xs text-muted uppercase tracking-wider mt-1">Countries</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:pt-32">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-12"
            >
              <div>
                <p className="text-xs font-body uppercase tracking-[0.2em] text-muted mb-4">
                  Capabilities
                </p>
                <div className="flex flex-wrap gap-2">
                  {capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="text-sm font-body px-4 py-2 border border-border text-paper/70 hover:border-lime hover:text-lime transition-colors"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-body uppercase tracking-[0.2em] text-muted mb-4">
                  Industries
                </p>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind) => (
                    <span
                      key={ind}
                      className="text-sm font-body px-4 py-2 border border-border text-paper/70 hover:border-lime hover:text-lime transition-colors"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-body uppercase tracking-[0.2em] text-muted mb-4">
                  Approach
                </p>
                <p className="text-base text-paper/60 font-body leading-relaxed">
                  We start by understanding the brand, create content aligned with its identity,
                  reach the right audience, and refine campaigns over time based on review and
                  performance insights.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
