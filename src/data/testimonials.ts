export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "They didn't just improve our marketing. They changed how we think about growth.",
    author: 'Arjun Mehta',
    role: 'Chief Marketing Officer',
    company: 'Orbit Finance',
  },
  {
    quote:
      'NEXORA gave our brand a heartbeat. Patients tell us our experience feels different now.',
    author: 'Dr. Priya Sharma',
    role: 'Founder',
    company: 'Luma Health',
  },
  {
    quote:
      'Organic is now our largest revenue channel. NEXORA built a system that compounds.',
    author: 'Karan Verma',
    role: 'CEO',
    company: 'Nova Ecommerce',
  },
  {
    quote:
      'They translated our technology into a story the market could finally understand.',
    author: 'Riya Nair',
    role: 'VP Marketing',
    company: 'Vertex AI',
  },
  {
    quote:
      'Our website finally matches the quality of our work. The inquiries speak for themselves.',
    author: 'Aditya Rao',
    role: 'Creative Director',
    company: 'Mono Studio',
  },
];

export interface Metric {
  value: string;
  label: string;
}

export const metrics: Metric[] = [
  { value: '12M+', label: 'Impressions' },
  { value: '4.8x', label: 'Average ROAS' },
  { value: '320%', label: 'Average Traffic Growth' },
  { value: '87%', label: 'Client Retention' },
];

export interface Campaign {
  name: string;
  metric: string;
  growth: number;
  label: string;
}

export const campaigns: Campaign[] = [
  { name: 'Campaign A', metric: 'Organic Traffic', growth: 182, label: '+182%' },
  { name: 'Campaign B', metric: 'Qualified Leads', growth: 247, label: '+247%' },
  { name: 'Campaign C', metric: 'ROAS', growth: 134, label: '+134%' },
];
