export interface Project {
  id: string;
  number: string;
  title: string;
  slug: string;
  category: string;
  result: string;
  resultLabel: string;
  year: string;
  client: string;
  services: string[];
  image: string;
  color: string;
  challenge: string;
  strategy: string;
  creative: string;
  execution: string;
  technology: string[];
  results: { label: string; value: string }[];
  quote: { text: string; author: string; role: string };
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 'orbit-finance',
    number: '01',
    title: 'Orbit Finance',
    slug: 'orbit-finance',
    category: 'Performance Marketing',
    result: '+214% qualified leads',
    resultLabel: 'Qualified Leads',
    year: '2025',
    client: 'Orbit Finance',
    services: ['Performance Marketing', 'Digital Strategy', 'Web Experiences'],
    image: 'https://images.pexels.com/photos/7691770/pexels-photo-7691770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: '#C8FF32',
    challenge:
      'Orbit Finance needed to acquire high-intent users in a crowded fintech market with rising CACs and regulatory constraints on ad messaging.',
    strategy:
      'We built a full-funnel performance engine combining search, social, and programmatic display with a conversion-optimized landing system tailored to each audience segment.',
    creative:
      'A clean, trust-first visual language with motion-driven data visualizations. Every ad unit was designed to feel like a financial insight, not a sales pitch.',
    execution:
      'We launched 40+ creative variants across Google, Meta, and LinkedIn, running weekly CRO experiments on the landing experience. Retargeting flows nurtured warm leads through educational micro-content.',
    technology: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'GA4', 'Hotjar', 'Unbounce'],
    results: [
      { label: 'Qualified Leads', value: '+214%' },
      { label: 'Cost per Lead', value: '-38%' },
      { label: 'Conversion Rate', value: '+5.2x' },
      { label: 'ROAS', value: '4.8x' },
    ],
    quote: {
      text: 'NEXORA didn\'t just improve our marketing. They changed how we think about growth.',
      author: 'Arjun Mehta',
      role: 'CMO, Orbit Finance',
    },
    gallery: [
      'https://images.pexels.com/photos/7698884/pexels-photo-7698884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7887850/pexels-photo-7887850.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/5583972/pexels-photo-5583972.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    id: 'luma-health',
    number: '02',
    title: 'Luma Health',
    slug: 'luma-health',
    category: 'Brand + Digital',
    result: '3.2× engagement',
    resultLabel: 'Engagement',
    year: '2025',
    client: 'Luma Health',
    services: ['Creative & Branding', 'Social Media', 'Web Experiences'],
    image: 'https://images.pexels.com/photos/39731790/pexels-photo-39731790.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: '#6C4DFF',
    challenge:
      'Luma Health had strong clinical credibility but a brand that felt clinical. They needed to connect emotionally with patients while maintaining trust.',
    strategy:
      'We repositioned Luma around the idea of "care without friction" — every touchpoint designed to reduce anxiety and build confidence.',
    creative:
      'A warm, human visual identity with soft gradients, approachable typography, and a motion system that guided rather than distracted.',
    execution:
      'New brand system applied across web, app, social, and clinic signage. We launched a content engine producing educational video, patient stories, and community resources.',
    technology: ['Figma', 'React', 'Framer Motion', 'Contentful', 'After Effects'],
    results: [
      { label: 'Engagement', value: '3.2x' },
      { label: 'Brand Recall', value: '+89%' },
      { label: 'Social Following', value: '+156%' },
      { label: 'Time on Site', value: '+72%' },
    ],
    quote: {
      text: 'They gave our brand a heartbeat. Patients tell us our experience feels different now.',
      author: 'Dr. Priya Sharma',
      role: 'Founder, Luma Health',
    },
    gallery: [
      'https://images.pexels.com/photos/39731785/pexels-photo-39731785.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/9742836/pexels-photo-9742836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/23859368/pexels-photo-23859368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    id: 'nova-ecommerce',
    number: '03',
    title: 'Nova Ecommerce',
    slug: 'nova-ecommerce',
    category: 'SEO + Performance',
    result: '+187% organic revenue',
    resultLabel: 'Organic Revenue',
    year: '2025',
    client: 'Nova Ecommerce',
    services: ['SEO', 'Performance Marketing', 'Digital Strategy'],
    image: 'https://images.pexels.com/photos/35560482/pexels-photo-35560482.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: '#C8FF32',
    challenge:
      'Nova was spending heavily on paid acquisition with diminishing returns. Organic search was an afterthought, and their catalog of 5,000+ products was barely indexed.',
    strategy:
      'We deployed a technical SEO overhaul, content cluster strategy, and a programmatic page generation system that created landing pages for every product category and search intent.',
    creative:
      'Editorial-style product guides, comparison pages, and buying guides that ranked for high-intent keywords while delivering genuine value.',
    execution:
      'Site speed improvements, schema markup across all pages, a digital PR campaign that earned 120+ referring domains, and ongoing content production at scale.',
    technology: ['Next.js', 'Schema.org', 'Ahrefs', 'GA4', 'GSC', 'Algolia'],
    results: [
      { label: 'Organic Revenue', value: '+187%' },
      { label: 'Organic Traffic', value: '+243%' },
      { label: 'Indexed Pages', value: '+8,400' },
      { label: 'Keyword Rankings', value: '+1,200' },
    ],
    quote: {
      text: 'Organic is now our largest revenue channel. NEXORA built a system that compounds.',
      author: 'Karan Verma',
      role: 'CEO, Nova Ecommerce',
    },
    gallery: [
      'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    id: 'vertex-ai',
    number: '04',
    title: 'Vertex AI',
    slug: 'vertex-ai',
    category: 'Brand Strategy',
    result: '+142% product awareness',
    resultLabel: 'Product Awareness',
    year: '2025',
    client: 'Vertex AI',
    services: ['Digital Strategy', 'Creative & Branding', 'Web Experiences'],
    image: 'https://images.pexels.com/photos/17483870/pexels-photo-17483870.png?auto=compress&cs=tinysrgb&h=650&w=940',
    color: '#6C4DFF',
    challenge:
      'Vertex AI had powerful technology but struggled to communicate its value to non-technical buyers. The category was noisy, and differentiation was unclear.',
    strategy:
      'We positioned Vertex as "intelligence, deployed" — focusing on outcomes over features, and building a narrative around AI augmentation rather than replacement.',
    creative:
      'A futuristic yet approachable brand system with data-driven visual language, 3D abstract renders, and a motion identity that made complex concepts feel intuitive.',
    execution:
      'Brand guidelines, a new website with interactive product demos, a launch campaign across LinkedIn and tech publications, and a thought leadership content engine.',
    technology: ['React', 'Three.js', 'Framer Motion', 'Webflow', 'Lottie'],
    results: [
      { label: 'Product Awareness', value: '+142%' },
      { label: 'Demo Requests', value: '+3.5x' },
      { label: 'Press Mentions', value: '47' },
      { label: 'Brand NPS', value: '+68' },
    ],
    quote: {
      text: 'They translated our technology into a story the market could finally understand.',
      author: 'Riya Nair',
      role: 'VP Marketing, Vertex AI',
    },
    gallery: [
      'https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/17483874/pexels-photo-17483874.png?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/18069490/pexels-photo-18069490.png?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    id: 'mono-studio',
    number: '05',
    title: 'Mono Studio',
    slug: 'mono-studio',
    category: 'Digital Experience',
    result: '+92% conversion',
    resultLabel: 'Conversion',
    year: '2025',
    client: 'Mono Studio',
    services: ['Web Experiences', 'Creative & Branding', 'SEO'],
    image: 'https://images.pexels.com/photos/7256197/pexels-photo-7256197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: '#C8FF32',
    challenge:
      'Mono Studio had a beautiful portfolio but their website was slow, hard to navigate, and failed to convert visitors into inquiries.',
    strategy:
      'We rebuilt the site around a narrative-driven experience — each scroll revealing a chapter of their creative philosophy, with clear CTAs at every natural pause point.',
    creative:
      'Minimal, editorial layout with bold typography, generous whitespace, and subtle motion that enhanced rather than competed with the work.',
    execution:
      'Custom React build with code-splitting, lazy image loading, and a headless CMS. Every interaction was tuned for performance and conversion.',
    technology: ['React', 'Vite', 'Sanity CMS', 'Framer Motion', 'Cloudflare'],
    results: [
      { label: 'Conversion Rate', value: '+92%' },
      { label: 'Page Load', value: '-64%' },
      { label: 'Inquiries', value: '+178%' },
      { label: 'Bounce Rate', value: '-41%' },
    ],
    quote: {
      text: 'Our website finally matches the quality of our work. The inquiries speak for themselves.',
      author: 'Aditya Rao',
      role: 'Creative Director, Mono Studio',
    },
    gallery: [
      'https://images.pexels.com/photos/9946415/pexels-photo-9946415.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/716273/pexels-photo-716273.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/205050/pexels-photo-205050.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((p) => p.slug === slug);
  return projects[(index + 1) % projects.length];
}
