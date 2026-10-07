import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduced = useReducedMotion();

  const socials = [
    { icon: Instagram, href: siteConfig.socialLinks.instagram, label: 'Instagram' },
    { icon: Linkedin, href: siteConfig.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Youtube, href: siteConfig.socialLinks.youtube, label: 'YouTube' },
  ];

  const scrollToTop = () => {
    if (reduced) {
      window.scrollTo({ top: 0 });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={ref} className="relative bg-ink border-t border-border">
      <div className="px-6 md:px-10 py-16 md:py-20">
        {/* Giant brand name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="font-display text-[clamp(4rem,18vw,16rem)] font-bold tracking-tighter leading-none text-paper">
            {siteConfig.brandName}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Navigation */}
          <div>
            <p className="text-xs font-body uppercase tracking-[0.2em] text-muted mb-4">
              Navigation
            </p>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm font-body text-paper/70 hover:text-lime transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-body uppercase tracking-[0.2em] text-muted mb-4">
              Services
            </p>
            <ul className="space-y-3">
              <li>
                <Link to="/services/digital-strategy" className="text-sm font-body text-paper/70 hover:text-lime transition-colors">
                  Digital Strategy
                </Link>
              </li>
              <li>
                <Link to="/services/performance-marketing" className="text-sm font-body text-paper/70 hover:text-lime transition-colors">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="text-sm font-body text-paper/70 hover:text-lime transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/services/branding" className="text-sm font-body text-paper/70 hover:text-lime transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="text-sm font-body text-paper/70 hover:text-lime transition-colors">
                  Web Experiences
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-body uppercase tracking-[0.2em] text-muted mb-4">
              Social
            </p>
            <ul className="space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-body text-paper/70 hover:text-lime transition-colors"
                  >
                    <social.icon size={16} />
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.socialLinks.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-paper/70 hover:text-lime transition-colors"
                >
                  X
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-body uppercase tracking-[0.2em] text-muted mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm font-body text-paper/70 hover:text-lime transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-sm font-body text-paper/70">{siteConfig.phone}</li>
              <li className="text-sm font-body text-paper/70">{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs font-body text-muted">
            &copy; 2026 {siteConfig.brandName}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-wider text-muted hover:text-lime transition-colors group"
          >
            Back to Top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
