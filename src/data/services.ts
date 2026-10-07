export interface Service {
  id: string;
  number: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
  capabilities: string[];
}

export const services: Service[] = [
  {
    id: 'digital-strategy',
    number: '01',
    title: 'Digital Strategy',
    slug: 'digital-strategy',
    tagline: 'Brand strategy, market research, growth strategy',
    description:
      'We build the foundation. Deep research, sharp positioning, and a growth roadmap that aligns every channel with your business objectives.',
    deliverables: [
      'Brand strategy',
      'Digital strategy',
      'Market research',
      'Competitor analysis',
      'Growth strategy',
    ],
    image: 'https://images.pexels.com/photos/7688106/pexels-photo-7688106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    capabilities: ['Brand positioning', 'Audience mapping', 'Competitive intelligence', 'Growth modeling', 'Channel strategy'],
  },
  {
    id: 'performance-marketing',
    number: '02',
    title: 'Performance Marketing',
    slug: 'performance-marketing',
    tagline: 'Google Ads, Meta Ads, LinkedIn Ads, CRO, lead gen',
    description:
      'Every rupee accountable. We architect paid media systems that scale revenue, not just impressions — with relentless optimization across every platform.',
    deliverables: [
      'Google Ads',
      'Meta Ads',
      'LinkedIn Ads',
      'Conversion optimization',
      'Lead generation',
      'Retargeting',
    ],
    image: 'https://images.pexels.com/photos/7691770/pexels-photo-7691770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    capabilities: ['Paid search', 'Paid social', 'Display & video', 'CRO', 'Funnel optimization', 'Attribution modeling'],
  },
  {
    id: 'seo',
    number: '03',
    title: 'SEO',
    slug: 'seo',
    tagline: 'Technical SEO, on-page, content strategy, link building',
    description:
      'We make search engines fall in love with your brand. Technical precision, content authority, and link ecosystems that compound month over month.',
    deliverables: [
      'Technical SEO',
      'On-page SEO',
      'Content strategy',
      'Keyword research',
      'Link building',
      'Local SEO',
    ],
    image: 'https://images.pexels.com/photos/17483870/pexels-photo-17483870.png?auto=compress&cs=tinysrgb&h=650&w=940',
    capabilities: ['Site audits', 'Core Web Vitals', 'Schema markup', 'Content clusters', 'Digital PR', 'Local search'],
  },
  {
    id: 'social-media',
    number: '04',
    title: 'Social Media',
    slug: 'social-media',
    tagline: 'Instagram, LinkedIn, YouTube, campaigns, community',
    description:
      'We turn feeds into followings. Content systems, community engines, and social campaigns that build cultural relevance and drive measurable engagement.',
    deliverables: [
      'Instagram',
      'LinkedIn',
      'YouTube',
      'Social campaigns',
      'Content strategy',
      'Community growth',
    ],
    image: 'https://images.pexels.com/photos/8100052/pexels-photo-8100052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    capabilities: ['Content production', 'Community management', 'Influencer strategy', 'Social listening', 'Creator partnerships'],
  },
  {
    id: 'branding',
    number: '05',
    title: 'Creative & Branding',
    slug: 'branding',
    tagline: 'Brand identity, campaigns, art direction, motion',
    description:
      'We create visual identities that stick. From brand systems to creative campaigns, we craft work that moves people and moves markets.',
    deliverables: [
      'Brand identity',
      'Creative campaigns',
      'Art direction',
      'Motion graphics',
      'Visual design',
    ],
    image: 'https://images.pexels.com/photos/7598009/pexels-photo-7598009.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    capabilities: ['Logo & identity systems', 'Brand guidelines', 'Campaign creative', 'Motion design', 'Packaging & collateral'],
  },
  {
    id: 'web-development',
    number: '06',
    title: 'Web Experiences',
    slug: 'web-development',
    tagline: 'React websites, landing pages, e-commerce, 3D',
    description:
      'We build digital experiences that perform. Conversion-focused, motion-rich, and engineered with the kind of technical craft that wins awards and wins customers.',
    deliverables: [
      'React websites',
      'Landing pages',
      'E-commerce',
      'Interactive websites',
      '3D experiences',
      'Conversion-focused websites',
    ],
    image: 'https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    capabilities: ['UX & UI design', 'Front-end engineering', 'Headless CMS', 'E-commerce', 'WebGL & 3D', 'Performance optimization'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
