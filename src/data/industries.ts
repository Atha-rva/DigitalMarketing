export interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const industries: Industry[] = [
  {
    id: 'technology',
    name: 'Technology',
    description: 'Product launches, developer marketing, and category creation for SaaS and platform companies.',
    image: 'https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'fintech',
    name: 'Fintech',
    description: 'Trust-building, compliance-aware growth marketing for banking, lending, and payment platforms.',
    image: 'https://images.pexels.com/photos/7691770/pexels-photo-7691770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Patient acquisition, brand trust, and digital experiences for clinics, wellness, and healthtech.',
    image: 'https://images.pexels.com/photos/39731790/pexels-photo-39731790.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    description: 'Revenue-driving SEO, paid media, and conversion optimization for DTC and marketplace brands.',
    image: 'https://images.pexels.com/photos/35560482/pexels-photo-35560482.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Lead generation, virtual experiences, and brand systems for developers and property platforms.',
    image: 'https://images.pexels.com/photos/17753331/pexels-photo-17753331.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Enrollment growth, brand authority, and digital campuses for EdTech and institutions.',
    image: 'https://images.pexels.com/photos/289738/pexels-photo-289738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'startups',
    name: 'Startups',
    description: 'Go-to-market strategy, brand building, and growth engines for venture-backed companies.',
    image: 'https://images.pexels.com/photos/7710074/pexels-photo-7710074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];
