import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { insights } from '@/data/insights';
import { AnimatedText } from '@/components/AnimatedText';
import { CTA } from '@/sections/CTA';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function InsightsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduced = useReducedMotion();

  const categories = ['Marketing', 'SEO', 'Branding', 'AI', 'Growth', 'Technology'];

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
            <span className="text-xs font-body uppercase tracking-[0.2em] text-muted">Journal</span>
          </motion.div>
          <h1 className="font-display text-[clamp(2.5rem,9vw,9rem)] font-bold tracking-tighter leading-[0.85] text-paper">
            <AnimatedText text="INSIGHTS" />
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <span
                key={cat}
                className="text-xs font-body px-4 py-2 border border-border text-paper/60 hover:border-lime hover:text-lime transition-colors cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32 border-t border-border">
        <div className="px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/insights/${article.slug}`}
                  className="group block"
                  data-cursor="READ"
                  data-cursor-variant="view"
                >
                  <div className="relative overflow-hidden aspect-[4/3] bg-border mb-5">
                    <motion.img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      whileHover={reduced ? {} : { scale: 1.06 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-body uppercase tracking-wider px-3 py-1 bg-ink/80 text-lime backdrop-blur-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted font-body mb-3">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-muted" />
                    <span>{article.readingTime}</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-paper group-hover:text-lime transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm text-paper/50 font-body leading-relaxed">
                    {article.excerpt}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
