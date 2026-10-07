import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setProgress(100);
      const t = setTimeout(() => {
        setDone(true);
        onComplete();
      }, 300);
      return () => clearTimeout(t);
    }

    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 12 + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          onComplete();
        }, 500);
      }
      setProgress(Math.floor(current));
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete, reduced]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-ink flex flex-col items-center justify-center"
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-paper"
          >
            NEXORA
          </motion.div>
          <motion.div
            className="mt-8 w-48 h-px bg-paper/20 overflow-hidden"
          >
            <motion.div
              className="h-full bg-lime"
              style={{ width: `${progress}%` }}
            />
          </motion.div>
          <motion.div
            className="mt-4 font-display text-sm text-muted tabular-nums"
          >
            {progress.toString().padStart(3, '0')}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
