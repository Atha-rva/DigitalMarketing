export const siteConfig = {
  brandName: 'The Crest',
  tagline: 'Where Brands Rise',
  positioning: 'Creative Content • Paid Advertising • Digital Growth',
  email: 'dbadgujar141295@gmail.com',
  phone: '+91 79778 11729',
  location: 'Client-focused creative marketing partner',
  socialLinks: {
    instagram: 'https://www.instagram.com/thecrest.digital?stkn=djRqdDJ0MnpzdG8x',
    youtube: 'https://youtube.com',
    x: 'https://x.com',
  },
  theme: {
    primaryColor: '#08090B',
    secondaryColor: '#FFFFFF',
    accentColor: '#0066FF',
    secondaryAccent: '#168BFF',
    mutedColor: '#A0A3AA',
    borderColor: 'rgba(0, 102, 255, 0.12)',
    fontDisplay: '"Space Grotesk", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    animationSpeed: 'normal',
    borderRadius: '0px',
  },
  navigation: [
    { label: 'Work', path: '/work' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
