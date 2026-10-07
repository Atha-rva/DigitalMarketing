import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { AnimatedText } from '@/components/AnimatedText';
import { CTA } from '@/sections/CTA';

export function WorkPage() {
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
            <span className="text-xs font-body uppercase tracking-[0.2em] text-muted">Portfolio</span>
          </motion.div>
          <h1 className="font-display text-[clamp(2.5rem,9vw,9rem)] font-bold tracking-tighter leading-[0.85] text-paper">
            <AnimatedText text="SELECTED" />
            <br />
            <span className="text-lime">
              <AnimatedText text="WORK." delay={0.2} />
            </span>
          </h1>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32 border-t border-border">
        <div className="px-6 md:px-10">
          <div className="space-y-8 md:space-y-12">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
