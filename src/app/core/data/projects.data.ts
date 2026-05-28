export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  challenge?: string;
  outcome?: string;
  features?: string[];
  screenshots?: string[];
  label?: string;
  techStack?: string[];
  builtWithGlobusOne?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: 'globus-one',
    title: 'Globus One',
    description:
      'A scalable design system built with Angular and StencilJS to ensure consistency, reusability, and speed across multiple products.',
    tags: ['StencilJS', 'TypeScript'],
    image: '/projects/Globus One.png',
    featured: true,
    label: 'FEATURED PROJECT',
    techStack: ['StencilJS', 'TypeScript', 'Flatpickr', 'Tiptap'],
    challenge:
      'Across multiple products, we had inconsistent UI components, duplicated code, and no unified design language. This slowed down development and impacted user experience.',
    features: [
      'Reusable component library with over 100+ components',
      'Design tokens for colors, typography & spacing',
      'Dark mode support',
      'Integration into external frameworks like Angular, React and Vue',
      'Comprehensive documentation',
    ],
    outcome:
      'Improved UI consistency across products and significantly faster development through a shared, maintainable component library.',
    screenshots: [],
  },
  {
    id: 2,
    slug: 'globus-sandbox',
    title: 'Globus Sandbox',
    description: 'Request platform for partners to review and test services',
    tags: ['Angular', 'TypeScript'],
    builtWithGlobusOne: true,
    image: '/projects/Globus SandBox.png',
    featured: false,
    challenge:
      'The client needed a unified analytics dashboard that aggregated data from multiple sources in real time, with granular role-based access control.',
    features: [
      'Real-time data charts with D3.js',
      'Role-based access control',
      'Export to CSV / PDF',
      'Configurable widget layout',
    ],
    outcome:
      'Reduced reporting time by 60% and gave managers instant visibility into key business metrics.',
    screenshots: [
        '/projects/sandbox screenshot 1.png'
    ],
  },
  {
    id: 3,
    slug: 'traqvest',
    title: 'TraqVest',
    description:
      'An investment analysis platform built for making the decision on the stocks to invest in easier.',
    tags: ['Angular', 'RxJS', 'NodeJS', 'ChartJS'],
    builtWithGlobusOne: false,
    image: '/projects/traqvest.png',
    featured: true,
    liveUrl: '#',
    githubUrl: 'https://github.com/EmmaKD2047/traqvest',
    challenge:
      'Building a complex valuation system based on the financial numbers of a company/stock',
    features: [
      'Search feature for any stock US stock',
      'Stock valuation (undervalued, fair or expensive)',
      'Stock comparison with other stocks in same sector',
      'Watchlist for stocks an investor is monitoring',
    ],
    outcome:
      'A reliable platform for analyzing and making stock investment decisions',
    screenshots: [
        '/projects/financials.png',
        '/projects/valuation.png',
        '/projects/comparison.png',
        '/projects/watchlist.png',
    ],
  },
  {
    id: 4,
    slug: 'callover-automation',
    title: 'Callover Automation',
    description:
      'Application built for tellers to review customer transactions.',
    tags: ['Angular', 'RxJS'],
    builtWithGlobusOne: true,
    image: '/projects/fintech-app.png',
    featured: false,
    challenge:
      'Building a secure, high-performance fintech application with complex transaction flows and compliance requirements.',
    features: [
      'Real-time transaction tracking',
      'Secure authentication with 2FA',
      'Compliance-ready audit logs',
      'Performance-optimized data tables',
    ],
    outcome:
      'Launched on schedule with zero critical bugs, passing all security audits on the first attempt.',
    screenshots: [],
  },
  {
    id: 5,
    slug: 'corporate-internet-banking',
    title: 'Corporate Internet Banking',
    description:
      'Application built for carrying out corporate transactions.',
    tags: ['Angular', 'RxJS'],
    builtWithGlobusOne: true,
    image: '/projects/fintech-app.png',
    featured: false,
    challenge:
      'Building a secure, high-performance fintech application with complex transaction flows and compliance requirements.',
    features: [
      'Real-time transaction tracking',
      'Secure authentication with 2FA',
      'Compliance-ready audit logs',
      'Performance-optimized data tables',
    ],
    outcome:
      'Launched on schedule with zero critical bugs, passing all security audits on the first attempt.',
    screenshots: [],
  },
  {
    id: 3,
    slug: 'hr-solution',
    title: 'HR Solution',
    description:
      'HR application built for performing human resource tasks seamlessly.',
    tags: ['Angular', 'RxJS'],
    builtWithGlobusOne: false,
    image: '/projects/fintech-app.png',
    featured: false,
    challenge:
      'Building a secure, high-performance fintech application with complex transaction flows and compliance requirements.',
    features: [
      'Real-time transaction tracking',
      'Secure authentication with 2FA',
      'Compliance-ready audit logs',
      'Performance-optimized data tables',
    ],
    outcome:
      'Launched on schedule with zero critical bugs, passing all security audits on the first attempt.',
    screenshots: [],
  },
  {
    id: 7,
    slug: 'portfolio-v3',
    title: 'Portfolio V3',
    description:
      'Comprehensive analytics platform with advanced charting and reporting tools.',
    tags: ['Angular'],
    image: '/projects/Portfolio 3 Mockup.png',
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    challenge:
      'The team needed an analytics platform that could handle large datasets and render complex visualisations without compromising performance.',
    features: [
      'Interactive Highcharts dashboards',
      'Large dataset pagination & virtual scrolling',
      'Custom report builder',
      'Scheduled email reports',
    ],
    outcome:
      'Processed 10× more data than the previous solution while maintaining sub-second render times.',
    screenshots: [],
  },
  {
    id: 8,
    slug: 'portfolio-v2',
    title: 'Portfolio V2',
    description:
      'Comprehensive analytics platform with advanced charting and reporting tools.',
    tags: ['Figma'],
    builtWithGlobusOne: false,
    image: '/projects/Portfolio 2 Mockup.png',
    featured: false,
    figmaUrl: 'https://www.figma.com/design/l5BXvIUcMTQD3PBbDoF0Rn/Portfolio-V3?node-id=749-857&t=DDXKZZ30VV6mBJj0-1',
    challenge:
      'The team needed an analytics platform that could handle large datasets and render complex visualisations without compromising performance.',
    features: [
      'Interactive Highcharts dashboards',
      'Large dataset pagination & virtual scrolling',
      'Custom report builder',
      'Scheduled email reports',
    ],
    outcome:
      'Processed 10× more data than the previous solution while maintaining sub-second render times.',
    screenshots: [],
  },
  {
    id: 9,
    slug: 'portfolio-v1',
    title: 'Portfolio V1',
    description:
      'Social community platform with real-time messaging and content sharing.',
    tags: ['React'],
    image: '/projects/Portfolio Mockup.png',
    featured: false,
    liveUrl: 'https://emmanuelkadiri.netlify.app/',
    githubUrl: 'https://github.com/EmmaKD2047/My-React-Portfolio',
    challenge:
      'Needed a scalable, real-time community platform that could support thousands of concurrent users with low latency.',
    features: [
      'Real-time chat with Firebase',
      'Content moderation tools',
      'Push notifications',
      'Responsive mobile-first UI',
    ],
    outcome:
      'Onboarded 5,000+ users in the first month with 99.9% uptime and near-zero latency messaging.',
    screenshots: [],
  },
  //   {
  //     id: 10,
  //     slug: 'ecommerce-dashboard',
  //     title: 'E-commerce Dashboard',
  //     description:
  //       'Full-featured e-commerce admin dashboard with inventory and order management.',
  //     tags: ['Angular', 'NgRx'],
  //     image: '/projects/ecommerce-dashboard.png',
  //     featured: false,
  //     liveUrl: '#',
  //     githubUrl: '#',
  //     challenge:
  //       "The client's existing admin tool was slow, hard to navigate, and lacked real-time order visibility.",
  //     features: [
  //       'NgRx-powered state management',
  //       'Real-time order tracking',
  //       'Inventory management with alerts',
  //       'Sales performance charts',
  //     ],
  //     outcome:
  //       'Cut average order processing time by 40% and reduced inventory errors by 75%.',
  //     screenshots: [],
  //   },
];
