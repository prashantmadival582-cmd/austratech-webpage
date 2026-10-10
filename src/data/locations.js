export const locations = [
  {
    id: 'melbourne',
    name: 'Melbourne',
    state: 'Victoria',
    slug: 'melbourne',
    icon: '🦘',
    description: 'Austratech supports Melbourne businesses with digital marketing, web development, app design, software delivery, AI strategy, and local growth initiatives tailored to the city’s high-growth economy.',
    metaTitle: 'SEO Company Melbourne | Digital Marketing & Web Development | Austratech',
    metaDescription: 'Austratech helps Melbourne businesses grow with SEO, websites, apps, AI, and digital strategy tailored to the Victorian market.',
    highlights: [
      'SEO and local search strategies for Melbourne businesses',
      'Website and e-commerce services for growth-focused brands',
      'Custom software and app delivery for operational efficiency',
      'AI, automation and analytics support for modern teams'
    ],
    serviceHighlights: [
      { name: 'SEO Company Melbourne', slug: 'seo-company-melbourne', serviceSlug: 'seo-services-australia' },
      { name: 'Website Development Melbourne', slug: 'website-development-company-melbourne', serviceSlug: 'website-development-company-australia' },
      { name: 'App Development Melbourne', slug: 'mobile-app-development-company-melbourne', serviceSlug: 'mobile-app-development-company-australia' },
      { name: 'Software Development Melbourne', slug: 'software-development-company-melbourne', serviceSlug: 'custom-software-development-company-australia' },
      { name: 'AI Development Melbourne', slug: 'ai-development-company-melbourne', serviceSlug: 'ai-development-services-australia' }
    ]
  },
  {
    id: 'sydney',
    name: 'Sydney',
    state: 'New South Wales',
    slug: 'sydney',
    icon: '🌆',
    description: 'Austratech helps Sydney businesses build stronger digital experiences, increase visibility, and modernise how they attract and convert customers online.',
    metaTitle: 'SEO Company Sydney | Digital Services & Website Development | Austratech',
    metaDescription: 'Strategic SEO, website development, app development, software, and AI services for Sydney-based businesses seeking digital growth.',
    highlights: [
      'Search visibility and branded digital growth in Sydney',
      'Affordable and scalable web design for service businesses',
      'App and software solutions for teams with operational complexity',
      'AI-powered strategy and data tools for competitive advantage'
    ],
    serviceHighlights: [
      { name: 'SEO Company Sydney', slug: 'seo-company-sydney', serviceSlug: 'seo-services-australia' },
      { name: 'Website Development Sydney', slug: 'website-development-company-sydney', serviceSlug: 'website-development-company-australia' },
      { name: 'App Development Sydney', slug: 'mobile-app-development-company-sydney', serviceSlug: 'mobile-app-development-company-australia' },
      { name: 'Software Development Sydney', slug: 'software-development-company-sydney', serviceSlug: 'custom-software-development-company-australia' },
      { name: 'AI Development Sydney', slug: 'ai-development-company-sydney', serviceSlug: 'ai-development-services-australia' }
    ]
  },
  {
    id: 'brisbane',
    name: 'Brisbane',
    state: 'Queensland',
    slug: 'brisbane',
    icon: '🌴',
    description: 'Austratech supports Brisbane businesses with affordable digital marketing, conversion-focused web experiences, operational software, and strategic AI solutions.',
    metaTitle: 'SEO Company Brisbane | Digital Marketing & App Development | Austratech',
    metaDescription: 'Australia-based digital marketing and technology partner for businesses in Brisbane, with SEO, website, app, and AI services.',
    highlights: [
      'Local SEO and growth campaigns for Brisbane businesses',
      'Conversion-focused website and landing page development',
      'Digital workflow tools for growing local teams',
      'AI and cloud consulting for scale and speed'
    ],
    serviceHighlights: [
      { name: 'SEO Company Brisbane', slug: 'seo-company-brisbane', serviceSlug: 'seo-services-australia' },
      { name: 'Website Development Brisbane', slug: 'website-development-company-brisbane', serviceSlug: 'website-development-company-australia' },
      { name: 'App Development Brisbane', slug: 'mobile-app-development-company-brisbane', serviceSlug: 'mobile-app-development-company-australia' },
      { name: 'Software Development Brisbane', slug: 'software-development-company-brisbane', serviceSlug: 'custom-software-development-company-australia' },
      { name: 'AI Development Brisbane', slug: 'ai-development-company-brisbane', serviceSlug: 'ai-development-services-australia' }
    ]
  },
  {
    id: 'perth',
    name: 'Perth',
    state: 'Western Australia',
    slug: 'perth',
    icon: '🏖️',
    description: 'Austratech works with Perth businesses to sharpen digital presence, improve growth campaigns, and deploy technology that supports long-term business results.',
    metaTitle: 'SEO Company Perth | Website & App Development | Austratech',
    metaDescription: 'Digital marketing, website development, app development, and AI support for Perth businesses looking to grow with confidence.',
    highlights: [
      'Location-based SEO and digital visibility growth',
      'Web and app solutions for operational efficiency',
      'Strategy for lead-generation and business growth',
      'Cloud and AI enablement for competitive advantage'
    ],
    serviceHighlights: [
      { name: 'SEO Company Perth', slug: 'seo-company-perth', serviceSlug: 'seo-services-australia' },
      { name: 'Website Development Perth', slug: 'website-development-company-perth', serviceSlug: 'website-development-company-australia' },
      { name: 'App Development Perth', slug: 'mobile-app-development-company-perth', serviceSlug: 'mobile-app-development-company-australia' },
      { name: 'Software Development Perth', slug: 'software-development-company-perth', serviceSlug: 'custom-software-development-company-australia' },
      { name: 'AI Development Perth', slug: 'ai-development-company-perth', serviceSlug: 'ai-development-services-australia' }
    ]
  }
];

export const locationServicePages = locations.flatMap((location) =>
  location.serviceHighlights.map((item) => ({
    ...item,
    location,
    description: `${item.name} helps businesses in ${location.name}, ${location.state} improve their digital performance and achieve measurable growth with tailored Austratech solutions.`
  }))
);

export const getLocationBySlug = (slug) => locations.find((location) => location.slug === slug) || null;

export const getLocationServiceBySlug = (slug) =>
  locationServicePages.find((item) => item.slug === slug) || null;
