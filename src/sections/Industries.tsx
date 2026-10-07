import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { industries } from '@/data/industries';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Industries() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-ink py-24 md:py-32 overflow-hidden">
      <div className="px-6 md:px-10">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-px bg-lime" />
          <span className="text-xs font-body uppercase tracking-[0.2em] text-muted">
            Industries We Serve
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          {/* List */}
          <div className="border-t border-border">
            {industries.map((industry, i) => (
              <div
                key={industry.id}
                className="border-b border-border group cursor-pointer"
                onMouseEnter={() => setActive(i)}
                data-cursor="VIEW"
                data-cursor-variant="view"
              >
                <div className="py-6 flex items-center justify-between">
                  <motion.h3
                    className="font-display text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-300"
                    animate={{
                      color: active === i ? '#C8FF32' : '#F5F3EE',
                      x: active === i ? 12 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {industry.name}
                  </motion.h3>
                  <span
                    className={`font-display text-sm tabular-nums transition-colors ${
                      active === i ? 'text-lime' : 'text-muted'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-paper/60 pb-6 font-body leading-relaxed max-w-md">
                        {industry.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Image preview */}
          <div className="hidden lg:block sticky top-24 h-[50vh] overflow-hidden bg-border">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={active}
                src={industries[active].image}
                alt={industries[active].name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.4, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="font-display text-5xl font-bold text-paper/20 tabular-nums">
                {String(active + 1).padStart(2, '0')}
              </span>
              <p className="font-display text-xl text-paper/80 mt-2">
                {industries[active].name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
