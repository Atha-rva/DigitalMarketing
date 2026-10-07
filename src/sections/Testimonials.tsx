import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (reduced) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [reduced]);

  const current = testimonials[index];

  return (
    <section className="relative bg-ink py-24 md:py-32 overflow-hidden">
      <div className="px-6 md:px-10">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-px bg-lime" />
          <span className="text-xs font-body uppercase tracking-[0.2em] text-muted">
            Client Stories
          </span>
        </div>

        <div className="max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-paper">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-px bg-lime" />
                <div>
                  <p className="font-display text-lg font-bold text-lime">{current.author}</p>
                  <p className="text-sm text-muted font-body">
                    {current.role}, {current.company}
                  </p>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>

          {/* Indicators */}
          <div className="mt-12 flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 transition-all duration-300 ${
                  i === index ? 'w-12 bg-lime' : 'w-6 bg-border hover:bg-paper/30'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
