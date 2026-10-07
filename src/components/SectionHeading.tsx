import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { AnimatedText } from './AnimatedText';

interface SectionHeadingProps {
  label?: string;
  title: string;
  className?: string;
}

export function SectionHeading({ label, title, className = '' }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className={className}>
      {label && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-lime" />
          <span className="text-xs font-body uppercase tracking-[0.2em] text-muted">{label}</span>
        </motion.div>
      )}
      <h2 className="font-display text-section md:text-display font-bold tracking-tighter leading-[0.95]">
        {reduced ? title : <AnimatedText text={title} />}
      </h2>
    </div>
  );
}
