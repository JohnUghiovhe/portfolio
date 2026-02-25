import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
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
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1772010418/Eventful_ywn4m7.png',
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
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1772047556/Portfolio_dhwbjb.png',
    title: 'Portfolio',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
    ],
    description:
      'Simple and classic modern portfolio for who wants to present himself as a software developer. Portfolio build with highly customizable using Tailwind CSS, Next Js.',
    repoLink: 'https://github.com/JohnUghiovhe/portfolio',
    sourceLink: 'https://john-ughiovhe-portfolio.vercel.app/',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1772012148/Restaurant-ChatBot_wo6t78.png',
    title: 'Restaurant ChatBot - AI-Powered Food Ordering Assistant',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'NestJS')
    ],
    description:
      'A TypeScript/NestJS-based restaurant chatbot that assists customers in placing orders for their preferred meals.',
    repoLink: 'https://github.com/JohnUghiovhe/Restaurant-ChatBot',
    sourceLink: 'https://restaurant-chatbot-txcj.onrender.com/',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1772047132/Blogging-API_umrk2g.png',
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
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
];
