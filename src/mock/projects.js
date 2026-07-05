import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
  FRONTEND: 'frontend',
  BACKEND: 'backend',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Open Source',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
  {
    label: 'Frontend',
    value: PROJECT_CATEGORY.FRONTEND,
    icon: 'fluent-mdl2:color',
  },
  {
    label: 'Backend',
    value: PROJECT_CATEGORY.BACKEND,
    icon: 'fluent-mdl2:server',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1777813377/Insighta_Labs_Web_fxcglg.png',
    title: 'Insighta Labs+',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'),
      getSkillByLabel(BACKEND_SKILLS, 'Authentication (JWT)'),
    ],
    engineeringConcepts: [
      'Authentication',
      'OAuth 2.0',
      'PKCE',
      'RBAC',
      'JWT',
      'REST API',
    ],
    description: [
      'Designed and built the backend for a profile intelligence platform supporting both web and CLI clients. Implemented GitHub OAuth (PKCE), role-based authorization, deterministic natural-language search, and a unified authentication model to deliver secure, consistent API behavior across multiple interfaces.'
    ],
    repoLink: 'https://github.com/JohnUghiovhe/insighta-backend',
    sourceLink: 'https://insighta-web-pied.vercel.app',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1781512109/background-job-scheduler_lgzwtj.png',
    title: 'Background job Scheduler',
    techIcons: [
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'NestJS (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'Redis'),
      getSkillByLabel(BACKEND_SKILLS, 'Swagger'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Vite'),
    ],
    engineeringConcepts: [
      'Background Jobs',
      'Redis',
      'Priority Queues',
      'Retry Strategy',
      'Exponential Backoff',
      'Distributed Systems',
    ],
    description: [
      'Engineered a distributed background job scheduler with NestJS and Redis, supporting delayed execution, priority queues, automatic retries, exponential backoff with jitter, and persistent job state management. Designed for reliable asynchronous processing in production-style environments.'
    ],
    repoLink: 'https://github.com/JohnUghiovhe/background-job-scheduler',
    sourceLink: 'https://63.183.193.95.sslip.io',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1772226789/Screenshot_9_lschdp.png',
    title: 'Eventful - Event Ticketing and Management Platform',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'Redis'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
    ],
    engineeringConcepts: [
      'REST API',
      'Redis',
      'Caching',
      'MongoDB',
      'Scalability',
    ],
    description: [
      'Developed a full-stack event management platform with modular REST APIs, Redis caching, and MongoDB persistence. Designed the backend for scalability, reducing response latency through caching while supporting secure ticket management, attendee workflows, and future platform growth.',
    ],
    repoLink: 'https://github.com/JohnUghiovhe/eventful',
    sourceLink: 'https://eventta.vercel.app',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1780355490/request-detail_xftryp.png',
    title: 'Retry Engine - A Node.js Library for Reliable API Request Retrying',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
    ],
    engineeringConcepts: [
      'Circuit Breaker',
      'Retry Strategy',
      'Exponential Backoff',
      'Jitter',
      'Distributed Systems',
      'Queues',
    ],
    description: [
      'Built a resilient request retry library for Node.js applications featuring configurable retry strategies, circuit breaker protection, timeout cancellation, and persistent request lifecycle tracking. Implemented jittered exponential backoff, worker locking, and SQLite-backed state management to improve reliability of outbound API communication.'
    ],
    repoLink: 'https://github.com/JohnUghiovhe/retry-engine',
    category: [PROJECT_CATEGORY.BACKEND]
  },
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1777813377/Invoice_management_app_fn51t7.png',
    title: 'Invoice Workflow Engine',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'),
    ],
    engineeringConcepts: [
      'State Machine',
      'REST API',
      'PostgreSQL',
      'Server-Side Validation',
    ],
    description: [
      'Built a backend-first invoice workflow engine supporting state-driven invoice lifecycles, strict server-side validation, and PostgreSQL persistence with automatic local JSON fallback. Designed clean API boundaries and reliable data flows that remain consistent across development and production environments.',
    ],
    repoLink: 'https://github.com/JohnUghiovhe/invoice-management-app',
    sourceLink: 'https://invoice-management-apy.netlify.app',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1772798770/Guessing-game_lgqh0w.png',
    title: 'Guessing Game',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'socket.io'),
    ],
    engineeringConcepts: [
      'WebSockets',
      'Real-Time',
      'Event-Driven',
      'Room-Based Communication',
    ],
    description: [
      'Built a real-time multiplayer game using Socket.IO and an event-driven backend architecture. Implemented synchronized gameplay, timers, scoring, and room-based communication to support low-latency interaction between concurrent players.', 
    ],
    repoLink: 'https://github.com/JohnUghiovhe/Guessing-Game',
    sourceLink: 'https://jayguessgame.vercel.app', 
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1772226788/Screenshot_13_n8p5pa.png',
    title: 'Restaurant ChatBot - AI-Powered Food Ordering Assistant',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(BACKEND_SKILLS, 'NestJS (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'Sql')
    ],
    engineeringConcepts: [
      'REST API',
      'TypeORM',
      'SQL',
      'Session Management',
      'Payment Processing',
    ],
    description: [
      'Developed an AI-assisted restaurant ordering platform with NestJS, TypeScript, and TypeORM. Designed modular APIs for menu management, order processing, and payment verification while implementing a session-based conversational ordering workflow.',
    ],
    repoLink: 'https://github.com/JohnUghiovhe/Restaurant-ChatBot',
    sourceLink: 'https://jayeffchatbot.vercel.app',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1772794723/Jay_Blog_resucv.png',
    title: 'Blogging API - A RESTful API for Blogging Platform',
    techIcons: [
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
    ],
    engineeringConcepts: [
      'REST API',
      'Authentication',
      'JWT',
      'RBAC',
      'Content Management',
    ],
    description: [
      'Designed a RESTful blogging API with authentication, role-based authorization, and content management capabilities. Implemented reusable endpoint architecture supporting secure publishing workflows alongside public content access.',
    ],
    repoLink: 'https://github.com/JohnUghiovhe/blogging-api',
    sourceLink: 'https://jayeffblog.vercel.app/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
];
