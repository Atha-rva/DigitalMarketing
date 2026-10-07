import { useEffect, useRef } from 'react';

export function useMousePosition() {
  const position = useRef({ x: 0, y: 0 });
  const normalized = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      position.current.x = e.clientX;
      position.current.y = e.clientY;
      normalized.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      normalized.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return { position, normalized };
}
