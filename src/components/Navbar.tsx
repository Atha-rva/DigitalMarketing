import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import crestLogo from '../../assets/The_Crest_Logo.png';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-500 ease-smooth ${
          scrolled
            ? 'bg-ink/70 backdrop-blur-md border-b border-border'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-10 py-5">
          <Link
            to="/"
            className="inline-flex items-center transition-opacity duration-300 hover:opacity-90"
            data-cursor="GO"
            data-cursor-variant="hover"
            aria-label={siteConfig.brandName}
          >
            <motion.div
              animate={{
                y: [0, -7, 0, -3, 0],
                rotate: [0, -1.2, 0, 1.2, 0],
                scale: [1, 1.04, 1, 1.03, 1],
                filter: [
                  'drop-shadow(0 0 10px rgba(0,102,255,0.16))',
                  'drop-shadow(0 0 18px rgba(22,139,255,0.32))',
                  'drop-shadow(0 0 10px rgba(0,102,255,0.16))',
                  'drop-shadow(0 0 22px rgba(0,102,255,0.38))',
                  'drop-shadow(0 0 10px rgba(0,102,255,0.16))',
                ],
              }}
              transition={{
                duration: 4.8,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
              className="inline-flex"
            >
              <img
                src={crestLogo}
                alt={siteConfig.brandName}
                className="h-20 w-auto md:h-24 object-contain"
              />
            </motion.div>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm font-body tracking-wide transition-colors duration-300 hover:text-lime ${
                    location.pathname === item.path ||
                    location.pathname.startsWith(item.path + '/')
                      ? 'text-lime'
                      : 'text-paper/70'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-paper"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9989] bg-ink flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {siteConfig.navigation.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06 }}
              >
                <Link
                  to={item.path}
                  className="font-display text-4xl font-bold text-paper hover:text-lime transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
