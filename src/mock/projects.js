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
    description:
      'Eventful is a comprehensive event ticketing and management platform that connects event creators with attendees. From concerts to sports events, Eventful provides a seamless experience for creating, discovering, and attending events. built with React.js and Node.js. It features a responsive UI, user authentication, and integration with MongoDB for data storage.',
    repoLink: 'https://github.com/JohnUghiovhe/eventful',
    sourceLink: 'https://eventful-frontend-908q.onrender.com',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1772226787/Screenshot_11_sr7zyq.png',
    title: 'Guessing Game',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'socket.io'),
    ],
    description:
      'A real-time guessing game using Express and Socket.IO. One player is the Game Master (GM) who sets the question/answer and starts the session. Players join, see each other’s scores, and have limited attempts to guess before the timer expires.',
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
    description:
      'A TypeScript/NestJS-based restaurant chatbot that assists customers in placing orders for their preferred meals.',
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
    description: 'This is a Blogging API built with Node.js and MongoDB. The API allows users to create, manage, and read blog articles. It supports user authentication and provides endpoints for both logged-in and non-logged-in users.',
    repoLink: 'https://github.com/JohnUghiovhe/blogging-api',
    sourceLink: 'https://blogging-api-d994.onrender.com',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
    {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1772798770/Guessing-game_lgqh0w.png',
    title: 'Portfolio',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
    ],
    description:
      'Simple and classic modern portfolio for who wants to present himself as a software developer. Portfolio build with highly customizable using Tailwind CSS, Next Js.',
    repoLink: 'https://github.com/JohnUghiovhe/portfolio',
    sourceLink: 'https://portfolio-johnughiovhe.vercel.app/',
    category: [PROJECT_CATEGORY.FRONTEND],
  },
];
