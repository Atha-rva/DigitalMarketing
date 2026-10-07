import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { AnimatedText } from '@/components/AnimatedText';
import { MagneticButton } from '@/components/MagneticButton';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['0%', '50%']);
  const scale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 30, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotX = useTransform(smoothY, [-1, 1], reduced ? [0, 0] : [8, -8]);
  const rotY = useTransform(smoothX, [-1, 1], reduced ? [0, 0] : [-8, 8]);
  const orbX = useTransform(smoothX, [-1, 1], reduced ? [0, 0] : [-30, 30]);
  const orbY = useTransform(smoothY, [-1, 1], reduced ? [0, 0] : [-30, 30]);

  useEffect(() => {
    if (reduced) return;
    const handler = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseX.set(nx);
      mouseY.set(ny);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY, reduced]);

  return (
    <motion.section
      ref={ref}
      style={{ y, scale, opacity }}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ink"
    >
      {/* Background gradient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] rounded-full opacity-30 pointer-events-none"
        style={{
          x: orbX,
          y: orbY,
          background: 'radial-gradient(circle, rgba(200,255,50,0.4) 0%, rgba(108,77,255,0.2) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(to right, #F5F3EE 1px, transparent 1px), linear-gradient(to bottom, #F5F3EE 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="relative z-10 px-6 md:px-10 pt-32">
        {/* Tagline pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          <span className="text-xs font-body uppercase tracking-[0.25em] text-paper/60">
            Strategy × Creativity × Technology × Growth
          </span>
        </motion.div>

        {/* Main headline */}
        <h1 className="font-display font-bold tracking-tighter leading-[0.85] text-paper text-[clamp(3rem,9vw,10rem)]">
          <div className="overflow-hidden">
            <AnimatedText text="WE TURN" delay={0.3} />
          </div>
          <div className="overflow-hidden">
            <span className="text-lime">
              <AnimatedText text="ATTENTION" delay={0.45} />
            </span>
          </div>
          <div className="overflow-hidden">
            <AnimatedText text="INTO" delay={0.6} />
          </div>
          <div className="overflow-hidden">
            <AnimatedText text="GROWTH." delay={0.75} />
          </div>
        </h1>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-base md:text-lg text-paper/60 max-w-md font-body leading-relaxed"
          >
            We combine strategy, creativity and technology to build digital experiences that
            move brands forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <MagneticButton strength={0.2} className="group">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-lime text-ink px-7 py-4 font-body font-medium text-sm uppercase tracking-wider rounded-none hover:bg-paper transition-colors duration-300"
                data-cursor="OPEN"
                data-cursor-variant="open"
              >
                Start a Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 border border-paper/20 text-paper px-7 py-4 font-body font-medium text-sm uppercase tracking-wider hover:border-lime hover:text-lime transition-colors duration-300"
              >
                Explore Our Work
                <ArrowDown size={16} />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* 3D Orb visual */}
      <motion.div
        className="absolute right-[5%] top-[15%] w-32 h-32 md:w-48 md:h-48 pointer-events-none hidden lg:block"
        style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 800 }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border border-lime/30" />
          <div className="absolute inset-4 rounded-full border border-lime/20" />
          <div className="absolute inset-8 rounded-full border border-lime/10" />
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(200,255,50,0.3), transparent 60%)',
            }}
            animate={reduced ? {} : { rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          {/* Orbiting dots */}
          {[0, 120, 240].map((deg) => (
            <motion.div
              key={deg}
              className="absolute top-1/2 left-1/2 w-2 h-2"
              animate={reduced ? {} : { rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              style={{ originX: 0, originY: 0 }}
            >
              <div
                className="w-2 h-2 rounded-full bg-lime"
                style={{ transform: `rotate(${deg}deg) translateX(80px)` }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-body uppercase tracking-[0.3em] text-paper/40">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-paper/40 to-transparent"
          animate={reduced ? {} : { scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.section>
  );
}
