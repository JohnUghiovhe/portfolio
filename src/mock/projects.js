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
    description: [
      'Built a full-stack event ticketing platform enabling event creation, ticket checkout, and attendee management, replacing manual event coordination workflows.',
      'Designed modular REST APIs with Node.js, TypeScript, and Express for event, ticketing, and user services, improving scalability and development speed.',
      'Reduced API response latency by integrating Redis caching for frequently accessed event and ticket data.',
      'Implemented a scalable backend architecture using TypeScript, Express, and MongoDB to support secure and maintainable platform growth.',
    ],
    repoLink: 'https://github.com/JohnUghiovhe/eventful',
    sourceLink: 'https://eventful-frontend-908q.onrender.com',
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
    description: [
      'Built a real-time multiplayer game using Node.js, Express, and Socket.IO.', 
      'Implemented WebSocket-based bidirectional communication for low-latency gameplay.', 
      'Developed game logic including timers, scoring system, rounds, and player attempts.',
      'Created a responsive frontend interface using HTML, CSS, and JavaScript.',
      'Designed scalable event-driven server architecture to support multiple concurrent users. '
    ],
    repoLink: 'https://github.com/JohnUghiovhe/Guessing-Game',
    sourceLink: 'https://guessing-game-6937.onrender.com', 
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
    description: [
      'Built modular REST APIs using NestJS and TypeScript for menu management, orders, and payments, adhering to web architecture best practices.',
      'Designed session-based ordering system without login requirement to improve accessibility. ',
      'Integrated Paystack payment gateway with real-time verification handling.',
      'Structured relational database schema using SQLite and TypeORM.',
      'Developed responsive frontend chat interface with real-time backend integration using HTML, CSS, and JavaScript.',
    ],
    repoLink: 'https://github.com/JohnUghiovhe/Restaurant-ChatBot',
    sourceLink: 'https://restaurant-chatbot-txcj.onrender.com/',
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
    description: [
      'Delivered a blogging backend that supports article publishing, management, and public content access through REST endpoints.',
      'Implemented authentication and access control to separate author actions from public reader interactions.',
      'Created a reusable API structure that makes content operations straightforward for both protected and open routes.',
    ],
    repoLink: 'https://github.com/JohnUghiovhe/blogging-api',
    sourceLink: 'https://jayeffblog.vercel.app/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
    {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1772226788/Screenshot_12_mh5olq.png',
    title: 'Portfolio',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
    ],
    description: [
      'Created a personal portfolio that presents projects, skills, and contact paths in a clear developer-focused narrative.',
      'Used Tailwind CSS and Next.js to ship a responsive interface that is easy to customize and extend over time.',
      'Improved professional presentation by turning static profile content into a polished, live web presence.',
    ],
    repoLink: 'https://github.com/JohnUghiovhe/portfolio',
    sourceLink: 'https://portfolio-johnughiovhe.vercel.app/',
    category: [PROJECT_CATEGORY.FRONTEND],
  },
];
