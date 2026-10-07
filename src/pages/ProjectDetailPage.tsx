import { useParams, Link, Navigate } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getProjectBySlug, getNextProject } from '@/data/projects';
import { AnimatedText } from '@/components/AnimatedText';
import { RevealImage } from '@/components/RevealImage';
import { Counter } from '@/components/Counter';
import { CTA } from '@/sections/CTA';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduced = useReducedMotion();

  if (!project) return <Navigate to="/work" replace />;

  const nextProject = getNextProject(project.slug);
  const sections = [
    { label: 'Challenge', content: project.challenge },
    { label: 'Strategy', content: project.strategy },
    { label: 'Creative Direction', content: project.creative },
    { label: 'Execution', content: project.execution },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col justify-end bg-ink pt-32 pb-16 overflow-hidden">
        <div className="px-6 md:px-10">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-lime transition-colors mb-8"
          >
            <ArrowLeft size={16} /> All Work
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-display text-sm text-lime tabular-nums">{project.number}</span>
            <span className="w-8 h-px bg-lime" />
            <span className="text-xs font-body uppercase tracking-[0.2em] text-muted">
              {project.category} / {project.year}
            </span>
          </motion.div>
          <h1 className="font-display text-[clamp(2.5rem,8vw,8rem)] font-bold tracking-tighter leading-[0.85] text-paper">
            <AnimatedText text={project.title} />
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {project.services.map((service) => (
              <span
                key={service}
                className="text-xs font-body px-4 py-2 border border-border text-paper/70"
              >
                {service}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-ink pb-24">
        <div className="px-6 md:px-10">
          <RevealImage
            src={project.image}
            alt={project.title}
            className="aspect-[16/9] w-full"
          />
        </div>
      </section>

      {/* Results bar */}
      <section className="bg-paper text-ink py-16">
        <div className="px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.results.map((result, i) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-t border-ink/20 pt-4"
              >
                <p className="font-display text-3xl md:text-5xl font-bold tracking-tighter">
                  <Counter value={result.value} />
                </p>
                <p className="text-xs text-ink/60 uppercase tracking-wider mt-2">{result.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story sections */}
      <section className="bg-ink py-24 md:py-32">
        <div className="px-6 md:px-10 max-w-4xl">
          {sections.map((section, i) => (
            <motion.div
              key={section.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16 last:mb-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-sm text-lime tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="w-6 h-px bg-lime" />
                <span className="text-xs font-body uppercase tracking-[0.2em] text-muted">
                  {section.label}
                </span>
              </div>
              <p className="font-display text-2xl md:text-3xl font-medium tracking-tight text-paper leading-[1.3]">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="bg-ink py-16 border-t border-border">
        <div className="px-6 md:px-10">
          <p className="text-xs font-body uppercase tracking-[0.2em] text-muted mb-6">
            Technology Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {project.technology.map((tech) => (
              <span
                key={tech}
                className="text-sm font-body px-4 py-2 border border-border text-paper/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-ink py-24 border-t border-border">
        <div className="px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <RevealImage
                key={i}
                src={img}
                alt={`${project.title} gallery ${i + 1}`}
                className="aspect-[4/3]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client quote */}
      <section className="bg-paper text-ink py-24 md:py-32">
        <div className="px-6 md:px-10 max-w-4xl">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.2]">
              &ldquo;{project.quote.text}&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-px bg-ink" />
              <div>
                <p className="font-display text-lg font-bold">{project.quote.author}</p>
                <p className="text-sm text-ink/60 font-body">{project.quote.role}</p>
              </div>
            </div>
          </motion.blockquote>
        </div>
      </section>

      {/* Next project */}
      <section className="bg-ink py-16 border-t border-border">
        <div className="px-6 md:px-10">
          <Link
            to={`/work/${nextProject.slug}`}
            className="group flex items-center justify-between"
            data-cursor="EXPLORE"
            data-cursor-variant="explore"
          >
            <div>
              <p className="text-xs font-body uppercase tracking-wider text-muted mb-2">
                Next Project
              </p>
              <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-paper group-hover:text-lime transition-colors">
                {nextProject.title}
              </h3>
            </div>
            <ArrowRight
              size={32}
              className="text-muted group-hover:text-lime group-hover:translate-x-4 transition-all"
            />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
