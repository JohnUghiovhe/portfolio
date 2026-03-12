export const SKILL_GROUPS = [
  {
    id: 'languages',
    label: 'Languages',
    accent: '#ffd166',
    skills: [
      { label: 'JavaScript', icon: 'logos:javascript' },
      { label: 'TypeScript', icon: 'logos:typescript-icon' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Frameworks',
    accent: '#00b4ff',
    skills: [
      { label: 'Node.js',    icon: 'vscode-icons:file-type-node' },
      { label: 'Express.js', icon: 'simple-icons:express' },
      { label: 'NestJS',     icon: 'logos:nestjs' },
      { label: 'REST APIs',  icon: 'dashicons:rest-api' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases & ORMs',
    accent: '#c400ff',
    skills: [
      { label: 'MongoDB',    icon: 'vscode-icons:file-type-mongo' },
      { label: 'PostgreSQL', icon: 'vscode-icons:file-type-pgsql' },
      { label: 'TypeORM',    icon: 'logos:typeorm' },
      { label: 'Redis',      icon: 'logos:redis' },
      { label: 'Mongoose',   icon: 'devicon:mongoose' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Development',
    accent: '#1a5fff',
    skills: [
      { label: 'Git',        icon: 'logos:git-icon' },
      { label: 'GitHub',     icon: 'akar-icons:github-fill' },
      { label: 'React',      icon: 'vscode-icons:file-type-reactjs' },
      { label: 'TailwindCSS',icon: 'logos:tailwindcss-icon' },
      { label: 'Jest',       icon: 'logos:jest' },
      { label: 'Docker',     icon: 'logos:docker-icon' },
      { label: 'Postman',    icon: 'logos:postman-icon' },
      { label: 'Swagger',    icon: 'logos:swagger' },
    ],
  },
  {
    id: 'other',
    label: 'Other Skills',
    accent: '#00d4a6',
    skills: [
      { label: 'API Design',            icon: null },
      { label: 'Backend Architecture',  icon: null },
      { label: 'Scalable Systems',      icon: null },
      { label: 'Problem Solving',       icon: null },
    ],
  },
];

// Legacy exports kept for reference
export const FRONTEND_SKILLS = [
  {
    label: 'HTML',
    icon: 'vscode-icons:file-type-html',
    iconClasses: 'text-3xl',
  },
  {
    label: 'CSS',
    icon: 'vscode-icons:file-type-css',
    iconClasses: 'text-3xl',
  },
  {
    label: 'Javascript',
    icon: 'logos:javascript',
    iconClasses: 'text-2xl',
  },
  {
    label: 'Typescript',
    icon: 'logos:typescript-icon',
    iconClasses: 'text-2xl',
  },
  {
    label: 'React.js',
    icon: 'vscode-icons:file-type-reactjs',
    iconClasses: 'text-2xl',
  },
  {
    label: 'Next.js',
    icon: 'cib:next-js',
    iconClasses: 'text-3xl',
  },
  {
    label: 'Tailwind CSS',
    icon: 'logos:tailwindcss-icon',
    iconClasses: 'text-2xl',
  },
  {
    label: 'Vite.js',
    icon: 'logos:vitejs',
    iconClasses: 'text-3xl',
  },
];

export const BACKEND_SKILLS = [
  {
    label: 'Node.js',
    icon: 'vscode-icons:file-type-node',
    iconClasses: 'text-3xl',
  },
  {
    label: 'Express (Node.js Framework)',
    icon: 'simple-icons:express',
    iconClasses: 'text-3xl',
  },
  {
    label: 'REST Api',
    icon: 'dashicons:rest-api',
    iconClasses: 'text-3xl',
  },
  {
    label: 'NestJS (Node.js Framework)',
    icon: 'logos:nestjs',
    iconClasses: 'text-2xl',
  },
  {
    label: 'PostgreSQL',
    icon: 'vscode-icons:file-type-pgsql',
    iconClasses: 'text-3xl',
  },
  {
    label: 'Swagger',
    icon: 'logos:swagger',
    iconClasses: 'text-2xl',
  },
  {
    label: 'Mongodb',
    icon: 'vscode-icons:file-type-mongo',
    iconClasses: 'text-3xl',
  },
  {
    label: 'Redis',
    icon: 'logos:redis',
    iconClasses: 'text-2xl',
  },
  {
    label: 'Socket.io',
    icon: 'logos:socket-io',
    iconClasses: 'text-3xl',
  },
];

export const FRONTEND_DESCRIPTIONS = [
  'Built an Event ticketing and management application called Eventful using Typescript, React js and Tailwind CSS on the frontend.',
  'Built a Restaurant ChatBot application using HTML, CSS and Javascript on the frontend.',
  'Built a real-time Guessing game using HTML, CSS and Javascript on the frontend.',
  'Built a modern portfolio website using Next.js and Tailwind CSS.',
];

export const BACKEND_DESCRIPTIONS = [
  'Developed a backend for an event ticketing and management system using Node.js, Express, MongoDB, and Redis.',
  'Integrated third-party OpenAPI tool(Swagger) into an application I designed called Eventful, to help developers and users easily navigate and test the API.',
  'Built and deployed a backend-driven restaurant chatbot application with NestJS and SQLite.',
  'Designed and implemented a blogging API using Node.js and Express, providing endpoints for creating, reading, updating, and deleting blog posts.',
  'Implemented a real-time game server with Express and Socket.IO, allowing players to interact and compete in real-time.',
];
