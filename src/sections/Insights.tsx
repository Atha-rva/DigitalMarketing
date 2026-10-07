import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { insights } from '@/data/insights';
import { SectionHeading } from '@/components/SectionHeading';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Insights() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className="relative bg-ink py-24 md:py-32">
      <div className="px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <SectionHeading label="Journal" title="Insights" />
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-body uppercase tracking-wider text-paper/60 hover:text-lime transition-colors group"
          >
            All Articles
            <ArrowUpRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.slice(0, 3).map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                    animate={reduced ? {} : { scale: 1 }}
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
