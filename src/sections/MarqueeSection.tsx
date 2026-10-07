import { Marquee } from '@/components/Marquee';

export function MarqueeSection() {
  const items = [
    'STRATEGY',
    'PERFORMANCE',
    'SEO',
    'CONTENT',
    'BRANDING',
    'SOCIAL',
    'TECHNOLOGY',
    'GROWTH',
  ];

  return (
    <section className="bg-ink py-12 md:py-16 border-y border-border">
      <Marquee items={items} direction="left" speed={35} />
    </section>
  );
}
