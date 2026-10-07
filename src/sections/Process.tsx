import { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { processSteps } from '@/data/process';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const reduced = useReducedMotion();
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const step = Math.min(
        Math.floor(v * processSteps.length),
        processSteps.length - 1
      );
      setActiveStep(Math.max(0, step));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={ref} className="relative bg-paper text-ink">
      {/* Sticky top section */}
      <div className="sticky top-0 min-h-screen flex items-center py-24 overflow-hidden">
        <div className="px-6 md:px-10 w-full">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-px bg-ink/40" />
            <span className="text-xs font-body uppercase tracking-[0.2em] text-ink/60">
              How We Work
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* Giant number */}
            <div className="relative h-[200px] md:h-[400px]">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="absolute inset-0 flex items-center"
                  initial={false}
                  animate={{
                    opacity: activeStep === i ? 1 : 0,
                    y: activeStep === i ? 0 : 30,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-display text-[clamp(8rem,20vw,18rem)] font-bold tracking-tighter leading-none">
                    {step.number}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Content */}
            <div className="relative h-[300px] md:h-[400px]">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="absolute inset-0 flex flex-col justify-center"
                  initial={false}
                  animate={{
                    opacity: activeStep === i ? 1 : 0,
                    y: activeStep === i ? 0 : 20,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-ink/60 font-body leading-relaxed mb-6 max-w-md">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-3 text-sm font-body text-ink/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-ink/40" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-12 flex items-center gap-2">
            {processSteps.map((_, i) => (
              <div
                key={i}
                className={`h-px flex-1 transition-colors duration-500 ${
                  activeStep >= i ? 'bg-ink' : 'bg-ink/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable space to drive the sticky animation */}
      <div className="relative">
        {processSteps.map((step, i) => (
          <div
            key={step.number}
            ref={(el) => { stepRefs.current[i] = el; }}
            className="h-[20vh] md:h-[25vh]"
          />
        ))}
      </div>
    </section>
  );
}
