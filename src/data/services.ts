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
    id: 'ai-video-creation',
    number: '01',
    title: 'AI Video Creation',
    slug: 'ai-video-creation',
    tagline: 'AI-assisted promotional videos and visual storytelling',
    description:
      'We create AI-assisted brand promotions, product showcases, concept videos, and explainer-style creatives that help brands stand out in crowded feeds.',
    deliverables: [
      'Concept development',
      'Storyboard planning',
      'AI visuals',
      'Video edit',
      'Final delivery',
    ],
    image: 'https://images.pexels.com/photos/7688106/pexels-photo-7688106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    capabilities: ['Brand promotions', 'Product showcases', 'Explainer creatives', 'Social video assets', 'Visual storytelling'],
  },
  {
    id: 'video-editing',
    number: '02',
    title: 'Video Editing',
    slug: 'video-editing',
    tagline: 'Short-form reels, promotional edits and platform-ready videos',
    description:
      'We produce polished content for Instagram Reels, YouTube Shorts, promotional videos, product showcases and business introductions with the right pacing, transitions, and export settings.',
    deliverables: [
      'Pacing adjustments',
      'Transitions',
      'Subtitles',
      'Music alignment',
      'Platform-friendly exports',
    ],
    image: 'https://images.pexels.com/photos/7691770/pexels-photo-7691770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    capabilities: ['Reels editing', 'Short-form cuts', 'Sound treatment', 'Visual polish', 'Platform exports'],
  },
  {
    id: 'video-shooting',
    number: '03',
    title: 'Video Shooting',
    slug: 'video-shooting',
    tagline: 'On-location product, business and campaign capture',
    description:
      'We capture the people, products and moments behind every brand through product shoots, business content, and campaign visuals tailored to the project scope.',
    deliverables: [
      'Product shoots',
      'Business content',
      'Campaign visuals',
      'Location planning',
      'Production coordination',
    ],
    image: 'https://images.pexels.com/photos/17483870/pexels-photo-17483870.png?auto=compress&cs=tinysrgb&h=650&w=940',
    capabilities: ['On-location filming', 'Brand storytelling', 'Campaign footage', 'Product visuals', 'Creative production'],
  },
  {
    id: 'meta-ads',
    number: '04',
    title: 'Meta Ads',
    slug: 'meta-ads',
    tagline: 'Facebook and Instagram campaigns built for reach and conversion',
    description:
      'We manage campaign objectives, audience targeting, ad creative coordination, setup and performance reviews to help brands reach the right people with focused paid campaigns.',
    deliverables: [
      'Campaign objectives',
      'Audience targeting',
      'Ad coordination',
      'Budget monitoring',
      'Performance review',
    ],
    image: 'https://images.pexels.com/photos/8100052/pexels-photo-8100052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    capabilities: ['Meta campaign setup', 'Audience strategy', 'Creative alignment', 'Budget analysis', 'Optimization'],
  },
  {
    id: 'profile-management',
    number: '05',
    title: 'Profile Management',
    slug: 'profile-management',
    tagline: 'Consistent social presence and publishing operations',
    description:
      'We maintain page presentation, profile information, content calendars and publishing support so brands remain active, recognizable and consistent across social channels.',
    deliverables: [
      'Page presentation',
      'Profile updates',
      'Content calendar',
      'Post scheduling',
      'Basic page monitoring',
    ],
    image: 'https://images.pexels.com/photos/7598009/pexels-photo-7598009.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    capabilities: ['Profile handling', 'Content operations', 'Page maintenance', 'Publishing support', 'Brand consistency'],
  },
  {
    id: 'creative-support',
    number: '06',
    title: 'Creative Support',
    slug: 'creative-support',
    tagline: 'Visual content and campaign assets that build recognition',
    description:
      'We create social media posts, advertising creatives, story designs, promotional graphics and campaign visuals to build a recognizable visual voice across organic and paid marketing.',
    deliverables: [
      'Social media posts',
      'Advertising creatives',
      'Story designs',
      'Campaign visuals',
      'Captions',
    ],
    image: 'https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    capabilities: ['Brand consistency', 'Campaign visuals', 'Ad creatives', 'Story content', 'Caption writing'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
