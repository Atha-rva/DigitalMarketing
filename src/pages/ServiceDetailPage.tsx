import { useParams, Link, Navigate } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { getServiceBySlug } from '@/data/services';
import { AnimatedText } from '@/components/AnimatedText';
import { RevealImage } from '@/components/RevealImage';
import { CTA } from '@/sections/CTA';
import { siteConfig } from '@/config/siteConfig';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end bg-ink pt-32 pb-16 overflow-hidden">
        <div className="px-6 md:px-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-lime transition-colors mb-8"
          >
            <ArrowLeft size={16} /> All Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-display text-sm text-lime tabular-nums">{service.number}</span>
            <span className="w-8 h-px bg-lime" />
            <span className="text-xs font-body uppercase tracking-[0.2em] text-muted">
              {service.tagline}
            </span>
          </motion.div>
          <h1 className="font-display text-[clamp(2.5rem,8vw,8rem)] font-bold tracking-tighter leading-[0.85] text-paper">
            <AnimatedText text={service.title} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-lg text-paper/60 font-body leading-relaxed max-w-2xl"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* Image */}
      <section className="bg-ink pb-24">
        <div className="px-6 md:px-10">
          <RevealImage
            src={service.image}
            alt={service.title}
            className="aspect-[16/9] w-full"
          />
        </div>
      </section>

      {/* Deliverables & Capabilities */}
      <section className="bg-paper text-ink py-24 md:py-32">
        <div className="px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">
                What's Included
              </h2>
              <ul className="space-y-4">
                {service.deliverables.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-3 text-base font-body"
                  >
                    <span className="w-5 h-5 rounded-full bg-ink text-paper flex items-center justify-center flex-shrink-0">
                      <Check size={12} />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">
                Capabilities
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.capabilities.map((cap, i) => (
                  <motion.span
                    key={cap}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="text-sm font-body px-4 py-2 border border-ink/20 text-ink/70 hover:bg-ink hover:text-paper transition-colors"
                  >
                    {cap}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next service */}
      <section className="bg-ink py-16 border-t border-border">
        <div className="px-6 md:px-10">
          <NextService currentSlug={service.slug} />
        </div>
      </section>

      <CTA />
    </>
  );
}

function NextService({ currentSlug }: { currentSlug: string }) {
  const allServices = siteConfig.navigation;
  const services = [
    { slug: 'digital-strategy', title: 'Digital Strategy', number: '01' },
    { slug: 'performance-marketing', title: 'Performance Marketing', number: '02' },
    { slug: 'seo', title: 'SEO', number: '03' },
    { slug: 'social-media', title: 'Social Media', number: '04' },
    { slug: 'branding', title: 'Creative & Branding', number: '05' },
    { slug: 'web-development', title: 'Web Experiences', number: '06' },
  ];
  const currentIndex = services.findIndex((s) => s.slug === currentSlug);
  const next = services[(currentIndex + 1) % services.length];

  return (
    <Link
      to={`/services/${next.slug}`}
      className="group flex items-center justify-between"
      data-cursor="OPEN"
      data-cursor-variant="open"
    >
      <div>
        <p className="text-xs font-body uppercase tracking-wider text-muted mb-2">Next Service</p>
        <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-paper group-hover:text-lime transition-colors">
          {next.title}
        </h3>
      </div>
      <ArrowRight size={32} className="text-muted group-hover:text-lime group-hover:translate-x-4 transition-all" />
    </Link>
  );
}
