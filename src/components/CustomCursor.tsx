import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function CustomCursor() {
  const isTouch = useMediaQuery('(hover: none)');
  const reduced = useReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [variant, setVariant] = useState<'default' | 'hover' | 'view' | 'explore' | 'open'>('default');

  useEffect(() => {
    if (isTouch) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }

      const target = e.target as HTMLElement;
      const cursorAttr = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorAttr) {
        const cursorLabel = cursorAttr.getAttribute('data-cursor') || '';
        const cursorVariant = cursorAttr.getAttribute('data-cursor-variant') || 'hover';
        setLabel(cursorLabel);
        setVariant(cursorVariant as typeof variant);
      } else {
        setLabel('');
        setVariant('default');
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, [isTouch, variant]);

  if (isTouch || reduced) return null;

  const ringSize =
    variant === 'view' || variant === 'explore' || variant === 'open' ? 'w-24 h-24' : 'w-10 h-10';
  const ringBg =
    variant === 'view' || variant === 'explore' || variant === 'open'
      ? 'bg-lime text-ink'
      : 'bg-transparent border border-paper/30';

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-lime pointer-events-none mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 z-[9998] rounded-full pointer-events-none flex items-center justify-center transition-[width,height,background-color] duration-300 ease-smooth ${ringSize} ${ringBg}`}
        style={{ willChange: 'transform' }}
      >
        {label && (
          <span className="text-[10px] font-display font-medium uppercase tracking-wider">
            {label}
          </span>
        )}
      </div>
    </>
  );
}
