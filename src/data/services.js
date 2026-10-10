// Service data for Austratech - drives all service pages, routing, and navigation

const createFaq = (question, answer) => ({ question, answer });

const createServiceEntry = ({
  name,
  slug,
  icon,
  summary,
  focus,
  keywords,
  relatedSlugs = [],
  faqs = [],
}) => ({
  name,
  slug,
  icon,
  shortDescription: summary,
  metaTitle: `${name} | Austratech`,
  metaDescription: `Professional ${name.toLowerCase()} in Australia. Austratech helps businesses achieve measurable growth with strategic, conversion-focused digital solutions.`,
  keywords,
  content: {
    intro: `Austratech delivers expert ${name.toLowerCase()} that helps businesses unlock growth, improve efficiency, and create better digital experiences for their customers.`,
    about: `${name} is a core service area for Austratech. We help businesses design, implement, and optimise ${focus.toLowerCase()} so they can reach their goals with clarity, performance, and measurable results.`,
    benefits: [
      'Improve business performance and lead generation',
      'Create scalable systems that support growth',
      'Increase efficiency with data-driven delivery',
      'Align your digital operations with business goals',
      'Access expert support from strategy through execution',
      'Drive measurable ROI from each initiative',
    ],
    features: [
      'Strategic planning and discovery',
      'Implementation using modern best practices',
      'Performance monitoring and continuous optimisation',
      'Ongoing support, reporting, and refinement',
      'Custom recommendations based on your business goals',
      'Conversion-focused execution and measurable outcomes',
    ],
  },
  relatedSlugs,
  faqs,
});

const createCategory = ({
  id,
  name,
  slug,
  icon,
  shortDescription,
  description,
  keywords,
  metaTitle,
  metaDescription,
  benefits,
  features,
  technologies,
  industries,
  faqs,
  subServices,
}) => ({
  id,
  name,
  slug,
  icon,
  shortDescription,
  description,
  keywords,
  metaTitle,
  metaDescription,
  benefits,
  features,
  technologies,
  industries,
  faqs,
  subServices,
});

const digitalMarketingServices = [
  {
    name: 'SEO Services Australia',
    slug: 'seo-services-australia',
    icon: '🔍',
    summary: 'Search engine optimisation services that improve rankings, search visibility, and qualified traffic.',
    focus: 'SEO strategy and optimisation',
    keywords: ['seo services australia', 'search engine optimisation', 'seo agency australia'],
    relatedSlugs: ['local-seo-services', 'technical-seo-services', 'enterprise-seo-services', 'content-marketing-services'],
    faqs: [
      createFaq('How long does SEO take to show results?', 'Most businesses see initial movement within 3 to 6 months, with meaningful gains typically emerging over 6 to 12 months depending on competition, industry, and site quality.'),
      createFaq('What does your SEO service include?', 'Our SEO service includes keyword strategy, technical SEO, on-page optimisation, content opportunities, link acquisition planning, and transparent reporting for measurable growth.')
    ],
  },
  {
    name: 'Local SEO Services',
    slug: 'local-seo-services',
    icon: '📍',
    summary: 'Local SEO campaigns that help businesses rank in maps, neighbourhood and city searches.',
    focus: 'local search visibility',
    keywords: ['local seo services', 'local search optimisation', 'google my business optimisation'],
    relatedSlugs: ['seo-services-australia', 'seo-audit-services', 'google-ads-management-services'],
    faqs: [
      createFaq('Why is local SEO important?', 'Local SEO helps bring in high-intent customers who are searching for businesses near them, improving enquiries, phone calls, and store visits.')
    ],
  },
  {
    name: 'Google Ads Management Services',
    slug: 'google-ads-management-services',
    icon: '📣',
    summary: 'Data-led Google Ads campaigns designed to generate leads, sales, and measurable return on ad spend.',
    focus: 'paid search performance',
    keywords: ['google ads management services', 'google ads agency', 'ppc management australia'],
    relatedSlugs: ['ppc-management-services', 'conversion-rate-optimization-services', 'seo-services-australia'],
    faqs: [
      createFaq('Is Google Ads suitable for my business?', 'Google Ads works well when you need fast lead generation, local customer acquisition, or highly targeted campaigns aligned with commercial intent.')
    ],
  },
  {
    name: 'Content Marketing Services',
    slug: 'content-marketing-services',
    icon: '✍️',
    summary: 'Strategic content programs that attract, educate, and convert your target market.',
    focus: 'content-led growth',
    keywords: ['content marketing services', 'content strategy agency', 'content marketing australia'],
    relatedSlugs: ['seo-services-australia', 'social-media-marketing-services', 'email-marketing-services'],
    faqs: [
      createFaq('What types of content do you create?', 'We create blog content, thought leadership pieces, landing page copy, case studies, email content, social assets, and funnel content aligned to your buyer journey.')
    ],
  },
].map(createServiceEntry);

const websiteDevelopmentServices = [
  {
    name: 'Website Development Company Australia',
    slug: 'website-development-company-australia',
    icon: '🌐',
    summary: 'Custom websites built to improve online presence, trust, conversion, and customer experience.',
    focus: 'website design and development',
    keywords: ['website development company australia', 'web development services', 'custom website development'],
    relatedSlugs: ['custom-website-development', 'corporate-website-development', 'responsive-website-development'],
    faqs: [
      createFaq('How long does website development take?', 'Timelines depend on scope and complexity. Typical business websites take 4 to 8 weeks, while larger custom platforms may take longer with staged delivery.')
    ],
  },
  {
    name: 'Custom Website Development',
    slug: 'custom-website-development',
    icon: '💻',
    summary: 'Fully customised web experiences designed around your operations, brand, and business goals.',
    focus: 'custom web builds',
    keywords: ['custom website development', 'bespoke web development', 'tailored website design'],
    relatedSlugs: ['website-development-company-australia', 'corporate-website-development', 'business-website-development'],
    faqs: [
      createFaq('Why choose custom development?', 'Custom builds provide flexibility, performance optimisation, unique user journeys, and a tailored experience that templates cannot replicate.')
    ],
  },
  {
    name: 'WordPress Website Development',
    slug: 'wordpress-website-development',
    icon: '📝',
    summary: 'Flexible WordPress websites built for content-rich businesses and easy ongoing management.',
    focus: 'WordPress website solutions',
    keywords: ['wordpress website development', 'wordpress website agency', 'wordpress development services'],
    relatedSlugs: ['cms-development-services', 'website-maintenance-services', 'responsive-website-development'],
    faqs: [
      createFaq('Is WordPress suitable for business websites?', 'Yes. WordPress is a strong choice for businesses needing a content-driven website with flexibility, blogging, and manageable updates.')
    ],
  },
  {
    name: 'E-commerce Website Development',
    slug: 'ecommerce-website-development',
    icon: '🛍️',
    summary: 'Online stores designed to convert more shoppers and improve the user journey from browse to checkout.',
    focus: 'e-commerce experiences',
    keywords: ['ecommerce website development', 'online store development', 'ecommerce solutions'],
    relatedSlugs: ['shopify-development-services', 'woocommerce-development-services', 'seo-services-australia'],
    faqs: [
      createFaq('What features do you include?', 'We typically include product management, checkout optimisation, customer journey UX, inventory workflows, payment integrations, and analytics reporting.')
    ],
  },
].map(createServiceEntry);

const mobileAppServices = [
  {
    name: 'Mobile App Development Company Australia',
    slug: 'mobile-app-development-company-australia',
    icon: '📱',
    summary: 'Mobile app development services designed to deliver excellent customer experiences and business functionality.',
    focus: 'mobile app strategy and delivery',
    keywords: ['mobile app development company australia', 'app development services', 'custom mobile apps'],
    relatedSlugs: ['android-app-development', 'ios-app-development', 'cross-platform-app-development'],
    faqs: [
      createFaq('What types of mobile apps do you build?', 'We build customer-facing, internal business, marketplace, on-demand, healthcare, and enterprise mobile applications tailored to the business need.')
    ],
  },
  {
    name: 'Android App Development',
    slug: 'android-app-development',
    icon: '🤖',
    summary: 'Android applications built for performance, usability, and Android ecosystem compatibility.',
    focus: 'Android app development',
    keywords: ['android app development', 'android mobile app agency', 'android application services'],
    relatedSlugs: ['mobile-app-development-company-australia', 'cross-platform-app-development', 'enterprise-mobile-app-development'],
    faqs: [
      createFaq('Will your Android apps support current devices and OS versions?', 'Yes. We design with device compatibility, performance, and platform standards in mind to keep apps relevant and reliable.')
    ],
  },
  {
    name: 'iOS App Development',
    slug: 'ios-app-development',
    icon: '🍎',
    summary: 'iOS app experiences designed for usability, brand perception, and premium digital experiences.',
    focus: 'iOS app development',
    keywords: ['ios app development', 'iphone app development', 'apple app development'],
    relatedSlugs: ['mobile-app-development-company-australia', 'react-native-app-development', 'healthcare-app-development'],
    faqs: [
      createFaq('Do you build iPhone and iPad apps?', 'Yes. We develop apps for the complete Apple ecosystem, including iPhone, iPad, and cross-device experiences.')
    ],
  },
].map(createServiceEntry);

const softwareDevelopmentServices = [
  {
    name: 'Custom Software Development Company Australia',
    slug: 'custom-software-development-company-australia',
    icon: '⚡',
    summary: 'Custom software development that transforms business workflows, data, and systems into a competitive advantage.',
    focus: 'enterprise software strategy and custom build',
    keywords: ['custom software development company australia', 'software development agency', 'business software solutions'],
    relatedSlugs: ['enterprise-software-development', 'saas-development-services', 'api-development-services'],
    faqs: [
      createFaq('What kinds of custom software do you build?', 'We build internal tools, customer portals, workflow systems, integrations, CRUD platforms, and scalable business applications aligned to operational needs.')
    ],
  },
  {
    name: 'Enterprise Software Development',
    slug: 'enterprise-software-development',
    icon: '🏢',
    summary: 'Scalable enterprise software solutions built for complex operations, teams, and business processes.',
    focus: 'enterprise-grade business systems',
    keywords: ['enterprise software development', 'custom enterprise apps', 'business software engineering'],
    relatedSlugs: ['custom-software-development-company-australia', 'crm-development-services', 'erp-development-services'],
    faqs: [
      createFaq('Can enterprise software integrate with our existing systems?', 'Yes. We focus on integration-ready architecture and robust workflows that connect with your current databases, workflows, and operational systems.')
    ],
  },
  {
    name: 'SaaS Development Services',
    slug: 'saas-development-services',
    icon: '☁️',
    summary: 'SaaS products built for scalability, recurring revenue, and rapid customer onboarding.',
    focus: 'software-as-a-service growth',
    keywords: ['saas development services', 'saas product development', 'cloud software'],
    relatedSlugs: ['software-product-development', 'cloud-application-development', 'api-development-services'],
    faqs: [
      createFaq('Do you build SaaS platforms from idea to launch?', 'Yes. We help define the product, architecture, user flows, and implementation strategy for SaaS products and growth-focused platforms.')
    ],
  },
].map(createServiceEntry);

const aiDataServices = [
  {
    name: 'AI Development Services Australia',
    slug: 'ai-development-services-australia',
    icon: '🤖',
    summary: 'AI strategy and development services that help businesses automate decisions, workflows, and insight generation.',
    focus: 'AI transformation and product innovation',
    keywords: ['ai development services australia', 'artificial intelligence consulting', 'ai solutions australia'],
    relatedSlugs: ['ai-consulting-services', 'generative-ai-development', 'ai-chatbot-development'],
    faqs: [
      createFaq('What business problems can AI solve?', 'AI can improve forecasting, automate repetitive tasks, personalise experiences, enhance customer support, and unlock a new level of insights from operational data.')
    ],
  },
  {
    name: 'AI Consulting Services',
    slug: 'ai-consulting-services',
    icon: '🧠',
    summary: 'Strategic AI advisory services to identify opportunities, assess readiness, and map the right use cases.',
    focus: 'AI roadmap and business case',
    keywords: ['ai consulting services', 'artificial intelligence consulting', 'ai strategy australia'],
    relatedSlugs: ['ai-development-services-australia', 'machine-learning-solutions', 'data-analytics-services'],
    faqs: [
      createFaq('Do you help assess AI opportunities before implementation?', 'Yes. We evaluate use cases, data readiness, governance, and ROI to focus on the highest-value and lowest-risk opportunities.')
    ],
  },
  {
    name: 'Generative AI Development',
    slug: 'generative-ai-development',
    icon: '✨',
    summary: 'Generative AI applications for knowledge access, content generation, automation, and personalised digital experiences.',
    focus: 'generative AI product innovation',
    keywords: ['generative ai development', 'ai content generation', 'chatgpt solutions'],
    relatedSlugs: ['ai-chatbot-development', 'natural-language-processing-solutions', 'ai-automation-solutions'],
    faqs: [
      createFaq('Can generative AI help our business?', 'Yes. It can support content operations, internal knowledge retrieval, customer support, drafting workflows, and personalisation experiences when implemented with the right controls.')
    ],
  },
].map(createServiceEntry);

const cloudServices = [
  {
    name: 'Cloud Consulting Services Australia',
    slug: 'cloud-consulting-services-australia',
    icon: '☁️',
    summary: 'Cloud strategy, architecture, and migration guidance that supports resilient and scalable growth.',
    focus: 'cloud transformation and architecture',
    keywords: ['cloud consulting services australia', 'cloud strategy agency', 'azure consulting australia'],
    relatedSlugs: ['microsoft-azure-consulting', 'azure-migration-services', 'devops-consulting-services'],
    faqs: [
      createFaq('How do you approach cloud strategy?', 'We assess existing systems, workloads, security requirements, and business objectives before recommending the right migration or cloud optimisation path.')
    ],
  },
  {
    name: 'Microsoft Azure Consulting',
    slug: 'microsoft-azure-consulting',
    icon: '☁️',
    summary: 'Azure consulting services designed to help organisations modernise with security, scale, and performance in mind.',
    focus: 'Azure platform strategy',
    keywords: ['microsoft azure consulting', 'azure strategy', 'azure architecture consultant'],
    relatedSlugs: ['cloud-consulting-services-australia', 'azure-migration-services', 'cloud-infrastructure-management'],
    faqs: [
      createFaq('Is Azure suitable for our business?', 'Azure is often a strong fit for businesses that need Microsoft ecosystem integration, hybrid environments, secure workloads, or enterprise-scale cloud operations.')
    ],
  },
  {
    name: 'DevOps Consulting Services',
    slug: 'devops-consulting-services',
    icon: '🔄',
    summary: 'DevOps consulting services that improve speed, automation, and operational reliability across delivery.',
    focus: 'delivery pipeline improvement',
    keywords: ['devops consulting services', 'devops strategy', 'automation consulting'],
    relatedSlugs: ['cloud-consulting-services-australia', 'cloud-application-modernization', 'azure-managed-services'],
    faqs: [
      createFaq('How can DevOps help my business?', 'DevOps streamlines development processes, reduces manual effort, increases deployment reliability, and helps teams ship faster with better quality.')
    ],
  },
].map(createServiceEntry);

const uiUxServices = [
  {
    name: 'UI/UX Design Services Australia',
    slug: 'ui-ux-design-services-australia',
    icon: '🎨',
    summary: 'Strategy-led UI/UX design services that improve user satisfaction, clarity, and conversion outcomes.',
    focus: 'user experience and interface design',
    keywords: ['ui ux design services australia', 'ux design agency', 'design services australia'],
    relatedSlugs: ['user-experience-design', 'user-interface-design', 'product-design-services'],
    faqs: [
      createFaq('Why invest in UX design?', 'Good UX reduces friction, makes products easier to use, and improves conversion, retention, and customer trust.')
    ],
  },
  {
    name: 'User Experience Design',
    slug: 'user-experience-design',
    icon: '🧭',
    summary: 'UX design services focused on usability, journey mapping, and converting user needs into product clarity.',
    focus: 'user journey and product usability',
    keywords: ['user experience design', 'ux design services', 'customer journey design'],
    relatedSlugs: ['ui-ux-design-services-australia', 'wireframing-services', 'ux-audit-services'],
    faqs: [
      createFaq('Can UX design help our existing site or product?', 'Yes. UX redesign can simplify journeys, reduce confusion, and improve outcomes across existing products and marketing funnels.')
    ],
  },
].map(createServiceEntry);

const testingServices = [
  {
    name: 'Software Testing Services Australia',
    slug: 'software-testing-services-australia',
    icon: '✅',
    summary: 'Testing and quality assurance services that improve product stability, confidence, and release quality.',
    focus: 'quality assurance and release confidence',
    keywords: ['software testing services australia', 'quality assurance agency', 'testing services australia'],
    relatedSlugs: ['automation-testing-services', 'performance-testing-services', 'security-testing-services'],
    faqs: [
      createFaq('Why is testing important before launch?', 'Testing reduces risk, catches defects earlier, and increases confidence that your product performs as expected for real users.')
    ],
  },
  {
    name: 'Automation Testing Services',
    slug: 'automation-testing-services',
    icon: '🤖',
    summary: 'Automated testing strategies that improve speed, consistency, and regression coverage.',
    focus: 'repeatable engineering validation',
    keywords: ['automation testing services', 'qa automation agency', 'automated test services'],
    relatedSlugs: ['software-testing-services-australia', 'performance-testing-services', 'mobile-app-testing-services'],
    faqs: [
      createFaq('Can automated testing save time over time?', 'Yes. Once established, automated regression tests reduce repetitive effort and catch issues earlier during release cycles.')
    ],
  },
].map(createServiceEntry);

export const serviceCategories = [
  createCategory({
    id: 'digital-marketing',
    name: 'Digital Marketing',
    slug: 'digital-marketing-agency-australia',
    icon: '📈',
    shortDescription: 'Data-driven marketing strategies that grow visibility, traffic, clicks, leads, and customer value.',
    description: 'Austratech helps businesses improve search visibility, paid acquisition, social media performance, and customer retention through strategic digital execution.',
    keywords: ['digital marketing agency australia', 'digital marketing services', 'seo and paid media agency'],
    metaTitle: 'Digital Marketing Agency Australia | Austratech',
    metaDescription: 'Leading digital marketing agency in Australia. Expert SEO, PPC, content, social and conversion services for measurable business growth.',
    benefits: ['Higher brand visibility and qualified traffic', 'More leads and better conversion performance', 'Clearer customer acquisition strategy', 'Measurable ROI across channels', 'Accelerated growth with data-led planning', 'Stronger long-term digital presence'],
    features: ['SEO strategy and implementation', 'Paid media management', 'Social media growth', 'Content marketing systems', 'Email optimisation', 'Conversion improvement'],
    technologies: ['Google Ads', 'Meta Ads', 'SEMrush', 'Ahrefs', 'HubSpot', 'Google Analytics'],
    industries: ['E-commerce', 'Professional Services', 'Healthcare', 'Hospitality', 'Education', 'Finance'],
    faqs: [
      createFaq('What services are included in your digital marketing offer?', 'We cover strategy, SEO, paid ads, content, social media, email, conversion optimisations, and reputation management.'),
      createFaq('How do you measure success?', 'We track performance against goals such as qualified leads, traffic, conversion rates, cost per acquisition, and return on ad spend.')
    ],
    subServices: digitalMarketingServices,
  }),
  createCategory({
    id: 'website-development',
    name: 'Website Development',
    slug: 'website-development-company-australia',
    icon: '🌐',
    shortDescription: 'Custom websites and digital experiences designed to accelerate trust, engagement, and conversion across every device.',
    description: 'Austratech creates responsive, conversion-focused websites for businesses that need clean design, fast performance, and scalable digital foundations.',
    keywords: ['website development company australia', 'web development agency', 'responsive website development'],
    metaTitle: 'Website Development Company Australia | Austratech',
    metaDescription: 'Professional website development services in Australia for custom websites, e-commerce, redesigns, CMS builds, and responsive business growth.',
    benefits: ['Modern digital identity and stronger brand trust', 'Responsive experience across devices', 'Conversion-focused design and UX', 'Fast and secure web experiences', 'Flexible content and growth pathway', 'Scalable technical foundations'],
    features: ['Custom website builds', 'E-commerce implementation', 'CMS and WordPress work', 'Landing page design', 'Redesign and migration', 'Maintenance and support'],
    technologies: ['React', 'Next.js', 'WordPress', 'Shopify', 'WooCommerce', 'Node.js'],
    industries: ['Professional Services', 'Retail', 'Hospitality', 'Healthcare', 'Education', 'Real Estate'],
    faqs: [
      createFaq('Do you build sites for mobile and desktop?', 'Yes. Every site is built to work responsively across devices and user contexts.'),
      createFaq('Can you redesign an existing website?', 'Yes. We can refresh brand positioning, UX, content structure, and technical performance as part of a redesign.')
    ],
    subServices: websiteDevelopmentServices,
  }),
  createCategory({
    id: 'mobile-app-development',
    name: 'Mobile App Development',
    slug: 'mobile-app-development-company-australia',
    icon: '📱',
    shortDescription: 'App experiences designed for usability, growth, and operational efficiency across modern mobile channels.',
    description: 'Austratech builds mobile apps for businesses looking to optimise customer experience, internal processes, and digital engagement through intuitive product design and secure app engineering.',
    keywords: ['mobile app development company australia', 'android app development', 'ios app development'],
    metaTitle: 'Mobile App Development Company Australia | Austratech',
    metaDescription: 'Professional mobile app development services for Android, iOS, Flutter, React Native, and cross-platform apps.',
    benefits: ['Improved customer engagement', 'Better business accessibility', 'Faster service delivery', 'High-quality mobile experiences', 'Scalable app foundations', 'Long-term support and enhancement'],
    features: ['Native and cross-platform builds', 'App UX and interface design', 'On-demand and enterprise app delivery', 'App support and maintenance', 'Feature enhancements and integrations', 'Performance review and optimisation'],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Node.js'],
    industries: ['Healthcare', 'Retail', 'Transport', 'Finance', 'Hospitality', 'Enterprise'],
    faqs: [createFaq('Can you build both Android and iOS apps?', 'Yes. We can design and build for both platforms, or choose a cross-platform approach when the business case supports it.')],
    subServices: mobileAppServices,
  }),
  createCategory({
    id: 'software-development',
    name: 'Software Development',
    slug: 'custom-software-development-company-australia',
    icon: '⚙️',
    shortDescription: 'Custom software systems that improve internal workflows, unify data, and increase business efficiency.',
    description: 'Austratech develops custom software and web applications to help businesses streamline operations, automate tasks, and create better digital experiences for teams and customers.',
    keywords: ['custom software development company australia', 'enterprise software development', 'web application development'],
    metaTitle: 'Custom Software Development Company Australia | Austratech',
    metaDescription: 'Custom software development services in Australia covering SaaS, CRM, ERP, web applications, integrations, and business automation.',
    benefits: ['Stronger operational visibility', 'Reduced repetitive work', 'Better system integration', 'Scalability for business growth', 'Data-driven decision support', 'Reliable, secure custom delivery'],
    features: ['Custom business software', 'API and integration design', 'Web and SaaS development', 'Automation and process optimisation', 'Maintenance and support', 'Cloud-ready architecture'],
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Azure'],
    industries: ['Finance', 'Logistics', 'Healthcare', 'Professional Services', 'Manufacturing', 'Technology'],
    faqs: [createFaq('Can you build software around our current processes?', 'Yes. We start by understanding your workflows and business logic before shaping a system around them.')],
    subServices: softwareDevelopmentServices,
  }),
  createCategory({
    id: 'ai-data',
    name: 'AI & Data Solutions',
    slug: 'ai-development-services-australia',
    icon: '🤖',
    shortDescription: 'AI strategy, data analytics, and automation services that create smarter business capabilities and better insight.',
    description: 'Austratech helps businesses adopt AI and data-driven systems to automate work, improve insights, and make more confident decisions through structured analytics and intelligent applications.',
    keywords: ['ai development services australia', 'data analytics services', 'machine learning solutions'],
    metaTitle: 'AI Development Services Australia | Austratech',
    metaDescription: 'AI development and data consulting services covering automation, analytics, business intelligence, machine learning, and intelligent systems.',
    benefits: ['Stronger business insight', 'Improved automation and efficiency', 'Faster decision support', 'Predictive capability for planning', 'Competitive differentiation', 'Clean, measurable AI adoption path'],
    features: ['AI consulting and discovery', 'Generative AI implementations', 'Analytics and dashboards', 'Predictive models', 'Automation workflows', 'NLP and chatbot experiences'],
    technologies: ['OpenAI', 'Python', 'Power BI', 'TensorFlow', 'PostgreSQL', 'Azure AI'],
    industries: ['Finance', 'Healthcare', 'Retail', 'Education', 'Operations', 'Technology'],
    faqs: [createFaq('How do you decide where AI adds the most value?', 'We prioritise use cases that are high-volume, repetitive, or data-rich where automation and insight can create measurable business value.')],
    subServices: aiDataServices,
  }),
  createCategory({
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    slug: 'cloud-consulting-services-australia',
    icon: '☁️',
    shortDescription: 'Cloud and DevOps services that make systems more efficient, resilient, secure, and easier to scale.',
    description: 'Austratech helps organisations optimise infrastructure, modernise legacy platforms, and improve deployment reliability with cloud, Azure, and DevOps strategy.',
    keywords: ['cloud consulting services australia', 'azure consulting', 'devops services australia'],
    metaTitle: 'Cloud Consulting Services Australia | Austratech',
    metaDescription: 'Cloud consulting, Azure migration, DevOps, security, and managed infrastructure services for modern business operations.',
    benefits: ['Improved resilience and uptime', 'More efficient deployment pipelines', 'Better cloud cost control', 'Stronger security posture', 'Scalable architecture', 'Faster delivery across teams'],
    features: ['Cloud strategy and planning', 'Azure migration support', 'DevOps enablement', 'Infrastructure audit and optimisation', 'Security reviews', 'Backup and continuity planning'],
    technologies: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    industries: ['Technology', 'Healthcare', 'Professional Services', 'Finance', 'Operations', 'Retail'],
    faqs: [createFaq('Do you support hybrid cloud environments?', 'Yes. We can design and support environments that combine cloud, on-prem, and managed systems where needed.')],
    subServices: cloudServices,
  }),
  createCategory({
    id: 'ui-ux',
    name: 'UI/UX & Product Design',
    slug: 'ui-ux-design-services-australia',
    icon: '🎨',
    shortDescription: 'Design systems and product experiences that increase trust, usability, clarity, and conversion.',
    description: 'Austratech designs intuitive digital experiences that convert better and help businesses guide users through clear, valuable journeys across web and mobile products.',
    keywords: ['ui ux design services australia', 'ux design agency', 'product design services'],
    metaTitle: 'UI/UX Design Services Australia | Austratech',
    metaDescription: 'Professional UI/UX and product design services in Australia for websites, apps, prototyping, design systems, and user research.',
    benefits: ['Better user clarity', 'More effective digital journeys', 'Improved conversion and retention', 'Brand consistency across touchpoints', 'Clearer product direction', 'Faster stakeholder alignment'],
    features: ['UX strategy and mapping', 'Interface design', 'Wireframes and prototypes', 'Design systems', 'UX audits', 'Product concept design'],
    technologies: ['Figma', 'Adobe XD', 'Miro', 'Notion', 'InVision'],
    industries: ['SaaS', 'Healthcare', 'Retail', 'Education', 'Professional Services', 'Technology'],
    faqs: [createFaq('Can you work with existing products?', 'Yes. We can refine current experiences, identify friction points, and redesign key journeys based on your goals and user needs.')],
    subServices: uiUxServices,
  }),
  createCategory({
    id: 'testing-quality-assurance',
    name: 'Testing & Quality Assurance',
    slug: 'software-testing-services-australia',
    icon: '✅',
    shortDescription: 'Quality assurance services that reduce risk, improve reliability, and strengthen product confidence.',
    description: 'Austratech helps organisations test and validate software, websites, and mobile apps across functional, performance, accessibility, and security dimensions.',
    keywords: ['software testing services australia', 'qa services', 'automation testing services'],
    metaTitle: 'Software Testing Services Australia | Austratech',
    metaDescription: 'Comprehensive software testing and QA services for manual testing, automation, security, mobile, and performance testing.',
    benefits: ['Lower release risk', 'More stable product experience', 'Better test coverage', 'Stronger confidence in build quality', 'Fewer defects in production', 'Faster and safer releases'],
    features: ['Manual and automated testing', 'Website and app QA', 'Performance and load testing', 'Security validation', 'UAT coordination', 'Quality strategy consulting'],
    technologies: ['Selenium', 'Playwright', 'Cypress', 'Postman', 'JMeter', 'BrowserStack'],
    industries: ['Technology', 'Finance', 'Healthcare', 'Retail', 'Enterprise', 'Education'],
    faqs: [createFaq('When should a business start testing?', 'Testing should begin early in the lifecycle and continue through release to reduce rework and increase confidence.')],
    subServices: testingServices,
  })
];

export const allServices = serviceCategories.flatMap((category) => category.subServices || []);

export const getCategoryBySlug = (slug) =>
  serviceCategories.find((category) => category.slug === slug) || null;

export const getServiceBySlug = (slug) =>
  allServices.find((service) => service.slug === slug) || null;

export const getRelatedServices = (slugs = []) =>
  slugs
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean)
    .slice(0, 4);
