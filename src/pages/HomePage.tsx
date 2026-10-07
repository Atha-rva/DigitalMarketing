import { Hero } from '@/sections/Hero';
import { Manifesto } from '@/sections/Manifesto';
import { Services } from '@/sections/Services';
import { MarqueeSection } from '@/sections/MarqueeSection';
import { Results } from '@/sections/Results';
import { Work } from '@/sections/Work';
import { Process } from '@/sections/Process';
import { About } from '@/sections/About';
import { Industries } from '@/sections/Industries';
import { Testimonials } from '@/sections/Testimonials';
import { AISection } from '@/sections/AISection';
import { Insights } from '@/sections/Insights';
import { CTA } from '@/sections/CTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Services />
      <MarqueeSection />
      <Results />
      <Work />
      <Process />
      <About />
      <Industries />
      <Testimonials />
      <AISection />
      <Insights />
      <CTA />
    </>
  );
}
