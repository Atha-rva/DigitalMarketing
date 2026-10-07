export interface Insight {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  image: string;
  content: string[];
  author: string;
}

export const insights: Insight[] = [
  {
    id: 'ai-search-seo',
    title: 'The Future of Search: How AI is Reshaping SEO in 2026',
    slug: 'ai-search-seo-2026',
    category: 'SEO',
    date: 'Jan 12, 2026',
    readingTime: '8 min read',
    excerpt:
      'AI-powered search is rewriting the rules. Here\'s how to position your brand for visibility in an answer-first world.',
    image: 'https://images.pexels.com/photos/17483870/pexels-photo-17483870.png?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Riya Nair',
    content: [
      'Search is undergoing its most fundamental transformation since Google launched. AI-generated answers, conversational search, and zero-click results are changing how users discover brands. The question is no longer just "how do I rank?" but "how do I become the answer?"',
      'The first shift is structural. Traditional SERPs are giving way to AI Overviews, where synthesized answers draw from multiple sources. This means your content needs to be quotable, authoritative, and structured in ways that AI can parse and reference.',
      'The second shift is behavioral. Users are asking longer, more conversational questions. Keyword optimization is evolving into intent optimization. The brands that win will be those that understand the full journey a user takes — not just the final query.',
      'The third shift is technical. Schema markup, entity optimization, and structured data are no longer optional. They are the language that AI uses to understand your brand. Sites that invest in technical foundations will have a structural advantage as AI search matures.',
      'The implications for strategy are significant. Content needs to be authoritative enough to be cited, structured enough to be parsed, and engaging enough to earn the click when users want more depth. This is a higher bar than traditional SEO — but also a bigger opportunity for brands willing to invest.',
    ],
  },
  {
    id: 'creative-performance',
    title: 'Creative is the New Performance: Why Design Drives ROI',
    slug: 'creative-is-the-new-performance',
    category: 'Branding',
    date: 'Jan 8, 2026',
    readingTime: '6 min read',
    excerpt:
      'The lines between creative and performance have blurred. Here\'s why your design team is now your growth team.',
    image: 'https://images.pexels.com/photos/7598009/pexels-photo-7598009.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Aditya Rao',
    content: [
      'For years, the marketing world treated creative and performance as separate disciplines. Creative was about emotion and brand. Performance was about data and conversion. That division no longer holds.',
      'The most effective campaigns of 2025 were not the ones with the biggest budgets or the most precise targeting. They were the ones with the strongest creative. Platforms have made targeting commoditized. What differentiates results now is the quality of the creative itself.',
      'This means creative teams need to think like performance marketers — testing, iterating, and optimizing based on data. And performance teams need to think like creatives — understanding that a beautiful, emotionally resonant ad outperforms a generic one every time.',
      'The brands that embrace this convergence are building creative engines: systems that produce, test, and scale high-quality creative at speed. This is not about making more content. It is about making better content, faster.',
    ],
  },
  {
    id: 'marketing-automation',
    title: 'Marketing Automation: Building Systems That Scale',
    slug: 'marketing-automation-systems-that-scale',
    category: 'Growth',
    date: 'Jan 3, 2026',
    readingTime: '7 min read',
    excerpt:
      'Automation isn\'t about sending more emails. It\'s about building intelligent systems that adapt to every user.',
    image: 'https://images.pexels.com/photos/30547618/pexels-photo-30547618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Karan Verma',
    content: [
      'Marketing automation has evolved from simple email sequences to intelligent, adaptive systems that respond to user behavior in real time. The tools have changed. The strategy has changed even more.',
      'The most effective automation systems are not built around campaigns. They are built around journeys. Every user interaction — a page visit, a content download, a pricing page view — triggers a thoughtful, personalized response.',
      'The key is relevance. Generic drip campaigns are dead. Users expect communication that reflects their specific context, interests, and stage in the buying journey. Automation makes this possible at scale — but only if the logic is designed with care.',
      'Start with the user. Map their journey. Identify the moments where a thoughtful nudge can move them forward. Then build the system around those moments. The technology is the easy part. The strategy is what matters.',
    ],
  },
  {
    id: 'brand-worlds',
    title: 'Building Brand Worlds: Beyond Logos and Color Palettes',
    slug: 'building-brand-worlds',
    category: 'Branding',
    date: 'Dec 28, 2025',
    readingTime: '5 min read',
    excerpt:
      'Great brands are not visual systems. They are worlds that people want to live in. Here\'s how to build one.',
    image: 'https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Priya Sharma',
    content: [
      'A logo is not a brand. A color palette is not a brand. A brand is the total experience a person has with your company — every touchpoint, every interaction, every feeling.',
      'The most loved brands build worlds. Apple builds a world of simplicity and craft. Nike builds a world of determination and achievement. These worlds are consistent across every surface — from the product to the packaging to the advertising to the customer service.',
      'Building a brand world requires intentionality. It requires a clear point of view, a consistent voice, and a visual language that extends beyond the logo into every detail. It is harder than making a style guide. But it is what creates loyalty that transcends price.',
    ],
  },
  {
    id: 'ai-personalization',
    title: 'AI Personalization: Moving From Segments to Individuals',
    slug: 'ai-personalization-segments-to-individuals',
    category: 'AI',
    date: 'Dec 20, 2025',
    readingTime: '9 min read',
    excerpt:
      'Segmentation was the past. Individual-level personalization is the future. AI makes it possible.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Riya Nair',
    content: [
      'For decades, marketing personalization meant segmentation — grouping users into buckets and serving each bucket a slightly different message. AI is making this model obsolete.',
      'With modern AI, we can personalize at the individual level. Every user sees content, offers, and experiences tailored to their specific behavior, preferences, and context. Not a segment of thousands. A segment of one.',
      'This is not about creepy surveillance. It is about relevance. Users want experiences that feel designed for them. They reward brands that get it right with attention, loyalty, and revenue.',
      'The technical infrastructure is now accessible. The strategic question is how to use it responsibly. Personalization should enhance the user experience, not manipulate it. The brands that strike this balance will build trust and drive growth simultaneously.',
    ],
  },
  {
    id: 'web-performance',
    title: 'The Performance Imperative: Why Speed is a Feature',
    slug: 'web-performance-imperative',
    category: 'Technology',
    date: 'Dec 15, 2025',
    readingTime: '6 min read',
    excerpt:
      'A fast website is not just good for SEO. It is good for business. Here\'s the data behind the speed.',
    image: 'https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Aditya Rao',
    content: [
      'Every 100ms of load time costs conversion. This is not a theory — it is a measured, reproducible fact that Google, Amazon, and Walmart have all verified independently.',
      'Yet most marketing websites are bloated. Heavy frameworks, unoptimized images, third-party scripts, and render-blocking resources all conspire to create slow, frustrating experiences.',
      'Performance is a feature. It is a competitive advantage. And it is increasingly a ranking factor. Google Core Web Vitals are not going away. Investing in site speed is investing in SEO, conversion, and brand perception simultaneously.',
      'The path to fast is clear: measure, optimize, monitor. Use Lighthouse and Core Web Vitals to identify bottlenecks. Optimize images, reduce JavaScript, leverage caching, and use a CDN. Then monitor continuously to catch regressions before they impact users.',
    ],
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
