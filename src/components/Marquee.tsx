interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export function Marquee({ items, direction = 'left', speed = 30, className = '' }: MarqueeProps) {
  const doubled = [...items, ...items];
  const animationName = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-flex items-center"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-display text-large md:text-section font-bold uppercase tracking-tighter px-6">
              {item}
            </span>
            <span className="text-lime text-large md:text-section mx-2">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
