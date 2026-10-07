import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedText } from '@/components/AnimatedText';
import { MagneticButton } from '@/components/MagneticButton';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function CTA() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['-10%', '10%']);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-ink overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(200,255,50,0.4) 0%, rgba(108,77,255,0.2) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </motion.div>

      {/* Particles */}
      {!reduced &&
        Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-lime/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

      <div className="relative z-10 px-6 md:px-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          <span className="text-xs font-body uppercase tracking-[0.25em] text-paper/60">
            Let's Build Together
          </span>
        </motion.div>

        <h2 className="font-display font-bold tracking-tighter leading-[0.85] text-paper text-[clamp(2.5rem,8vw,8rem)]">
          <div className="overflow-hidden">
            <AnimatedText text="READY TO MAKE" />
          </div>
          <div className="overflow-hidden">
            <span className="text-lime">
              <AnimatedText text="SOMETHING" delay={0.2} />
            </span>
          </div>
          <div className="overflow-hidden">
            <AnimatedText text="IMPOSSIBLE" delay={0.4} />
          </div>
          <div className="overflow-hidden">
            <AnimatedText text="TO IGNORE?" delay={0.6} />
          </div>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton strength={0.2}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-lime text-ink px-8 py-4 font-body font-medium text-sm uppercase tracking-wider hover:bg-paper transition-colors duration-300"
              data-cursor="OPEN"
              data-cursor-variant="open"
            >
              Start a Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-paper/20 text-paper px-8 py-4 font-body font-medium text-sm uppercase tracking-wider hover:border-lime hover:text-lime transition-colors duration-300"
            >
              Talk to Us
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
