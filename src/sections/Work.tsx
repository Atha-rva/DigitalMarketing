import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ArrowRight } from 'lucide-react';

export function Work() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['2%', '-2%']);

  return (
    <section ref={ref} className="relative bg-ink py-24 md:py-32">
      <div className="px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <SectionHeading label="Portfolio" title="Selected Work" />
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-body uppercase tracking-wider text-paper/60 hover:text-lime transition-colors group"
          >
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div style={{ x }} className="space-y-8 md:space-y-12">
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
