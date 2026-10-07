import { useParams, Link, Navigate } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getInsightBySlug, insights } from '@/data/insights';
import { RevealImage } from '@/components/RevealImage';
import { CTA } from '@/sections/CTA';

export function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getInsightBySlug(slug) : undefined;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });

  if (!article) return <Navigate to="/insights" replace />;

  const currentIndex = insights.findIndex((a) => a.slug === article.slug);
  const nextArticle = insights[(currentIndex + 1) % insights.length];

  return (
    <>
      {/* Hero */}
      <article className="bg-ink">
        <section className="relative min-h-[70vh] flex flex-col justify-end pt-32 pb-16">
          <div className="px-6 md:px-10 max-w-4xl">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-lime transition-colors mb-8"
            >
              <ArrowLeft size={16} /> All Insights
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs font-body uppercase tracking-wider px-3 py-1 border border-lime text-lime">
                {article.category}
              </span>
              <span className="text-xs text-muted font-body">{article.date}</span>
              <span className="text-xs text-muted font-body">{article.readingTime}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] text-paper"
            >
              {article.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-base text-paper/50 font-body"
            >
              By {article.author}
            </motion.p>
          </div>
        </section>

        {/* Hero image */}
        <section className="pb-16">
          <div className="px-6 md:px-10">
            <RevealImage
              src={article.image}
              alt={article.title}
              className="aspect-[16/9] w-full max-w-5xl mx-auto"
            />
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="px-6 md:px-10 max-w-3xl mx-auto">
            {article.content.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`font-body leading-[1.7] mb-6 ${
                  i === 0
                    ? 'text-xl md:text-2xl text-paper font-medium leading-[1.4]'
                    : 'text-base md:text-lg text-paper/70'
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </section>

        {/* Next article */}
        <section className="py-16 border-t border-border">
          <div className="px-6 md:px-10">
            <Link
              to={`/insights/${nextArticle.slug}`}
              className="group flex items-center justify-between max-w-3xl mx-auto"
            >
              <div>
                <p className="text-xs font-body uppercase tracking-wider text-muted mb-2">
                  Next Article
                </p>
                <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-paper group-hover:text-lime transition-colors">
                  {nextArticle.title}
                </h3>
              </div>
              <ArrowRight
                size={28}
                className="text-muted group-hover:text-lime group-hover:translate-x-4 transition-all"
              />
            </Link>
          </div>
        </section>
      </article>

      <CTA />
    </>
  );
}
