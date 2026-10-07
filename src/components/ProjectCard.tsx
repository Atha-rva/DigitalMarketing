import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        ref={ref}
        to={`/work/${project.slug}`}
        className="group block"
        data-cursor="EXPLORE"
        data-cursor-variant="explore"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/10] bg-border">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={reduced ? {} : { scale: hovered ? 1.08 : 1, x: hovered ? '-2%' : '0%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          <div className="absolute top-6 left-6 font-display text-sm text-paper/80 tabular-nums">
            {project.number}
          </div>
          <div className="absolute top-6 right-6 text-xs font-body uppercase tracking-wider text-paper/80">
            {project.year}
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-paper">
                {project.title}
              </h3>
              <p className="text-sm text-paper/70 mt-1">{project.category}</p>
            </div>
            <motion.div
              animate={reduced ? {} : { rotate: hovered ? 45 : 0 }}
              transition={{ duration: 0.4 }}
              className="text-lime"
            >
              <ArrowUpRight size={28} />
            </motion.div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-muted">{project.services.join(' / ')}</p>
          <p className="font-display text-sm font-bold text-lime">{project.result}</p>
        </div>
      </Link>
    </motion.div>
  );
}
