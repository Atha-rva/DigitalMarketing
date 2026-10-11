import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { AnimatedText } from '@/components/AnimatedText';
import { siteConfig } from '@/config/siteConfig';

export function ContactPage() {
  const phoneHref = siteConfig.phone.replace(/\s+/g, '');

  return (
    <>
      <section className="relative min-h-[50vh] flex items-end bg-ink pt-32 pb-16">
        <div className="px-6 md:px-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-lime" />
            <span className="text-xs font-body uppercase tracking-[0.2em] text-muted">Contact</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,9vw,9rem)] font-bold tracking-tighter leading-[0.85] text-paper">
            <AnimatedText text="LET'S BUILD" />
            <br />
            <span className="text-lime">
              <AnimatedText text="WHAT'S NEXT." delay={0.2} />
            </span>
          </h1>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32 border-t border-border">
        <div className="px-6 md:px-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="p-0 md:p-0"
          >
            <p className="text-xs font-body uppercase tracking-[0.2em] text-muted mb-4">Get in touch</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-paper mb-8">
              We build brands that grow with clarity and momentum.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="border border-border p-5">
                <div className="flex items-center gap-3 mb-3 text-lime">
                  <Mail size={18} />
                  <span className="text-xs font-body uppercase tracking-[0.2em]">Email</span>
                </div>
                <a href={`mailto:${siteConfig.email}`} className="text-sm font-body text-paper/80 hover:text-lime transition-colors">
                  {siteConfig.email}
                </a>
              </div>

              <div className="border border-border p-5">
                <div className="flex items-center gap-3 mb-3 text-lime">
                  <Phone size={18} />
                  <span className="text-xs font-body uppercase tracking-[0.2em]">Phone</span>
                </div>
                <a href={`tel:${phoneHref}`} className="text-sm font-body text-paper/80 hover:text-lime transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Project Inquiry')}`}
                className="group inline-flex items-center justify-center gap-2 bg-[#0066FF] text-white px-7 py-4 font-body font-medium text-sm uppercase tracking-wider hover:bg-[#168BFF] hover:shadow-[0_0_26px_rgba(0,102,255,0.32)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Get in Touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
