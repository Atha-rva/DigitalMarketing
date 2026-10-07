import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const words = ['WE', "DON'T", 'CHASE', 'ATTENTION.', 'WE', 'CREATE', 'IMPACT.'];

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center justify-center bg-ink py-32 overflow-hidden"
    >
      <div className="px-6 md:px-10 max-w-6xl">
        <p className="font-display font-bold tracking-tighter text-[clamp(2.5rem,8vw,8rem)] leading-[0.9] text-center">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            const opacity = useTransform(
              scrollYProgress,
              [start * 0.6 + 0.1, end * 0.6 + 0.1],
              reduced ? [1, 1] : [0.15, 1]
            );
            const blur: MotionValue<string> = useTransform(
              scrollYProgress,
              [start * 0.6 + 0.1, end * 0.6 + 0.1],
              reduced ? ['0px', '0px'] : ['8px', '0px']
            );
            const filter = useTransform(blur, (v) => `blur(${v})`);
            const isAccent = word === 'IMPACT.' || word === 'ATTENTION.';
            return (
              <motion.span
                key={i}
                style={{ opacity, filter: reduced ? undefined : filter }}
                className={`inline-block mr-[0.2em] ${isAccent ? 'text-lime' : 'text-paper'}`}
              >
                {word}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
