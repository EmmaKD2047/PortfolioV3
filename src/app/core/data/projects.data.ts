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
      'A framework-agnostic design system built with StencilJS to ensure consistency, reusability, and speed across multiple products.',
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
    label: 'FEATURED PROJECT',
    featured: true,
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
    screenshots: ['/projects/sandbox screenshot 1.png', '/projects/sandbox screenshot 2.jpeg'],
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
    label: 'FEATURED PROJECT',
    liveUrl: '#',
    githubUrl: 'https://github.com/EmmaKD2047/traqvest',
    challenge:
      'Building a complex valuation system based on the financial numbers of a company/stock',
    features: [
      'Search feature for any US stock',
      'Stock valuation (undervalued, fair or expensive)',
      'Stock comparison with other stocks in same sector',
      'Watchlist for stocks an investor is monitoring',
      'Light and dark mode support'
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
    title: 'CallOver Automation',
    description:
      'Application built for tellers to review customer transactions.',
    tags: ['Angular', 'RxJS'],
    builtWithGlobusOne: true,
    image: '/projects/Callover.png',
    featured: false,
    challenge:
      'Building a comprehensive review platform for daily transactions.',
    features: [
      'Daily transaction tracking',
      'Weekly scheduling calendar',
    ],
    outcome:
      'Launched on schedule with zero critical bugs, passing all security audits on the first attempt.',
    screenshots: [
      '/projects/callover screenshot 1.jpeg'
    ],
  },
  {
    id: 5,
    slug: 'corporate-internet-banking',
    title: 'Corporate Internet Banking',
    description: 'Application built for carrying out corporate transactions.',
    tags: ['Angular', 'RxJS'],
    builtWithGlobusOne: true,
    image: '/projects/CIB.png',
    featured: false,
    challenge:
      'Building a secure, high-performance application with complex transaction flows.',
    features: [
      'Payment Module',
      'e-Naira',
    ],
    // outcome:
    //   'Launched on schedule with zero critical bugs, passing all security audits on the first attempt.',
    screenshots: ['/projects/cib screenshot 1.jpeg'],
  },
  {
    id: 6,
    slug: 'hr-solution',
    title: 'HR Solution',
    description:
      'HR application built for performing human resource tasks seamlessly.',
    tags: ['Angular', 'RxJS'],
    builtWithGlobusOne: true,
    image: '/projects/HR Solution.png',
    featured: false,
    challenge:
      'Building a reliable platform for managing staff effectively.',
    features: [
      'Staff Recruitment Module',
      'Staff Management',
      'HMO Management',
      'Payroll Module'
    ],
    outcome:
      'A central platform for performing human resource from recruitment to resignation.',
    screenshots: [
      '/projects/hrsolution screenshot 1.jpeg'
    ],
  },
  {
    id: 7,
    slug: 'portfolio-v3',
    title: 'Portfolio V3',
    description:
      'The current iteration of my portfolio — a fully custom Angular 19 SPA with dark/light mode, smooth routing, and a live contact form.',
    tags: ['Angular', 'TypeScript', 'CSS', 'EmailJS'],
    image: '/projects/Portfolio 3 Mockup.png',
    featured: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/EmmaKD2047/PortfolioV3',
    challenge:
      'Building it into a production-grade Angular app with accessible, responsive components and real email delivery.',
    features: [
      'Dark/light theme with OS preference detection',
      'Lazy-loaded routes with Angular 19',
      'EmailJS contact form with loading & success states',
      'Animated mobile navigation',
      'Project detail pages with tech stack and screenshots',
    ],
    outcome:
      'A fast, maintainable portfolio that accurately reflects my frontend engineering skills.',
    screenshots: [],
  },
  {
    id: 8,
    slug: 'portfolio-v2',
    title: 'Portfolio V2',
    description:
      'A redesigned portfolio concept created entirely in Figma, focusing on improved visual hierarchy, typography, and a polished design system.',
    tags: ['Figma', 'UI/UX Design'],
    builtWithGlobusOne: false,
    image: '/projects/Portfolio 2 Mockup.png',
    featured: false,
    figmaUrl:
      'https://www.figma.com/design/l5BXvIUcMTQD3PBbDoF0Rn/Portfolio-V3?node-id=749-857&t=DDXKZZ30VV6mBJj0-1',
    challenge:
      'Designing a cohesive, professional portfolio from scratch without a UI kit — all components, spacing and colour decisions made from the ground up.',
    features: [
      'High-fidelity mockups for all pages',
      'Responsive frame layouts for desktop and mobile',
      'Dark mode design',
      'Reusable component library in Figma',
    ],
    outcome:
      'Established a clear visual direction that became the foundation for Portfolio V3.',
    screenshots: [],
  },
  {
    id: 9,
    slug: 'portfolio-v1',
    title: 'Portfolio V1',
    description:
      'My first portfolio site, built with React. A simple single-page site showcasing early projects and skills.',
    tags: ['React'],
    image: '/projects/Portfolio Mockup.png',
    featured: false,
    liveUrl: 'https://emmanuelkadiri.netlify.app/',
    githubUrl: 'https://github.com/EmmaKD2047/My-React-Portfolio',
    challenge:
      'Learning React fundamentals while building a real, deployed product for the first time.',
    features: [
      'Responsive single-page layout',
      'Project showcase section',
      'Contact section',
      'Smooth scroll navigation',
    ],
    outcome: 'Successfully deployed to Netlify — my first live personal site.',
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
