import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const navItems = [
    ...siteConfig.navigation,
    { label: 'Home', path: '/' },
  ];

  const filtered = navItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[10000] bg-ink/80 backdrop-blur-lg flex items-start justify-center pt-[20vh] px-6"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-lg bg-paper text-ink rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-ink/10">
              <Search size={18} className="text-ink/50" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search or jump to..."
                className="flex-1 bg-transparent text-ink placeholder:text-ink/40 outline-none text-base font-body"
              />
              <button onClick={() => setOpen(false)} className="text-ink/50 hover:text-ink">
                <X size={18} />
              </button>
            </div>
            <div className="py-2">
              {filtered.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-5 py-3 hover:bg-lime/20 transition-colors group"
                >
                  <span className="font-body text-base text-ink">{item.label}</span>
                  <ArrowRight
                    size={16}
                    className="text-ink/40 group-hover:text-ink group-hover:translate-x-1 transition-all"
                  />
                </Link>
              ))}
              {filtered.length === 0 && (
                <div className="px-5 py-8 text-center text-ink/40 font-body text-sm">
                  No results found
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
