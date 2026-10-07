import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { SectionHeading } from '@/components/SectionHeading';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <section className="relative bg-ink py-24 md:py-32" id="services">
      <div className="px-6 md:px-10">
        <SectionHeading
          label="What We Do"
          title="Six disciplines. One growth engine."
          className="mb-16"
        />

        {!isMobile ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Interactive list */}
            <div className="border-t border-border">
              {services.map((service, i) => (
                <div
                  key={service.id}
                  className="border-b border-border group cursor-pointer"
                  onMouseEnter={() => setActiveIndex(i)}
                  data-cursor="OPEN"
                  data-cursor-variant="open"
                >
                  <Link to={`/services/${service.slug}`} className="block py-8">
                    <div className="flex items-baseline gap-6">
                      <span
                        className={`font-display text-sm tabular-nums transition-colors duration-300 ${
                          activeIndex === i ? 'text-lime' : 'text-muted'
                        }`}
                      >
                        {service.number}
                      </span>
                      <div className="flex-1">
                        <motion.h3
                          className="font-display text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-300"
                          animate={{
                            color: activeIndex === i ? '#C8FF32' : '#F5F3EE',
                            x: activeIndex === i ? 12 : 0,
                          }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {service.title}
                        </motion.h3>
                        <AnimatePresence>
                          {activeIndex === i && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="text-sm text-paper/60 mt-3 max-w-md font-body leading-relaxed">
                                {service.description}
                              </p>
                              <div className="flex flex-wrap gap-2 mt-4">
                                {service.deliverables.slice(0, 4).map((d) => (
                                  <span
                                    key={d}
                                    className="text-xs font-body px-3 py-1 border border-border text-muted"
                                  >
                                    {d}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <ArrowRight
                        size={20}
                        className={`transition-all duration-300 ${
                          activeIndex === i ? 'text-lime opacity-100' : 'text-muted opacity-0 group-hover:opacity-50'
                        }`}
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Image preview */}
            <div className="sticky top-24 h-[60vh] overflow-hidden bg-border">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={activeIndex}
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.5, scale: 1 }}
                  exit={{ opacity: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="font-display text-6xl font-bold text-paper/20 tabular-nums">
                  {services[activeIndex].number}
                </span>
                <p className="font-display text-xl text-paper/80 mt-2">
                  {services[activeIndex].tagline}
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Mobile accordion */
          <div className="border-t border-border">
            {services.map((service, i) => (
              <div key={service.id} className="border-b border-border">
                <button
                  className="w-full flex items-center gap-4 py-6 text-left"
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  aria-expanded={openAccordion === i}
                >
                  <span className="font-display text-sm text-muted tabular-nums">
                    {service.number}
                  </span>
                  <span className="flex-1 font-display text-2xl font-bold tracking-tight text-paper">
                    {service.title}
                  </span>
                  <ArrowRight
                    size={18}
                    className={`text-muted transition-transform ${
                      openAccordion === i ? 'rotate-90 text-lime' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openAccordion === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-paper/60 pb-6 font-body leading-relaxed pl-10">
                        {service.description}
                      </p>
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm text-lime mb-6 pl-10"
                      >
                        Learn more <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
