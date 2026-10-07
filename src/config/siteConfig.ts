export const siteConfig = {
  brandName: 'NEXORA',
  tagline: 'We make brands impossible to ignore.',
  positioning: 'Strategy × Creativity × Technology × Growth',
  email: 'hello@nexora.studio',
  phone: '+91 98765 43210',
  location: 'Pune, India',
  socialLinks: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
    x: 'https://x.com',
  },
  theme: {
    primaryColor: '#080808',
    secondaryColor: '#F5F3EE',
    accentColor: '#C8FF32',
    secondaryAccent: '#6C4DFF',
    mutedColor: '#8A8A82',
    borderColor: '#1F1F1F',
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
