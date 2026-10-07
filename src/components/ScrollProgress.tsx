import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[9991] h-[2px] bg-transparent">
      <div
        className="h-full bg-lime transition-[width] duration-75 ease-linear"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
