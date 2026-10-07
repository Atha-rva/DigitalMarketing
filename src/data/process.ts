export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'We immerse ourselves in your business, market, and audience to understand the landscape and identify opportunities.',
    details: ['Stakeholder interviews', 'Market research', 'Competitor analysis', 'Audience mapping'],
  },
  {
    number: '02',
    title: 'Strategize',
    description: 'We craft a strategic framework that aligns positioning, channels, and messaging with your growth objectives.',
    details: ['Positioning strategy', 'Channel architecture', 'Messaging framework', 'Growth roadmap'],
  },
  {
    number: '03',
    title: 'Create',
    description: 'We bring the strategy to life with brand systems, creative campaigns, and digital experiences built to perform.',
    details: ['Brand & visual identity', 'Creative production', 'Web & digital design', 'Content development'],
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy across channels with precision, ensuring every touchpoint is optimized for impact from day one.',
    details: ['Campaign deployment', 'Performance monitoring', 'A/B testing', 'Conversion optimization'],
  },
  {
    number: '05',
    title: 'Scale',
    description: 'We analyze, iterate, and expand — turning what works into systems that compound growth over time.',
    details: ['Data analysis', 'Channel expansion', 'Automation systems', 'Continuous optimization'],
  },
];
