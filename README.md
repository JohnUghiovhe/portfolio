# John Ughiovhe - Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2.1-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, professional portfolio website built with Next.js, Tailwind CSS, Framer Motion, and EmailJS.

## 🌟 Key Features

### Design & UX
- **Navy Blue Theme** (`#0a1929`) - Professional dark mode with custom color palette
- **Responsive Layout** - Mobile-first design, optimized for all screen sizes
- **Smooth Animations** - Framer Motion powered hero, sections, and skill reveals
- **Dark/Light Mode Toggle** - Theme preference persisted in local storage
- **Animated Blob Background** - Dynamic gradient orbs on hero section

### Sections
- **Hero Section** - Typewriter effect with professional titles and social links (GitHub, LinkedIn)
- **Skills ("What I Do")** - Frontend & Backend development showcases with Lottie animations
- **Projects** - Filterable project gallery with tabs (All, Full Stack, Open Source)
  - Live demo and repository links with labels
  - Tech stack icons for each project
- **Contact** - Two-column layout with contact info and EmailJS integration
- **Footer** - Social links (GitHub, LinkedIn, X, Email) with copyright notice

### Technical Features
- **EmailJS Integration** - Working contact form with success/error handling
- **Smooth Scroll Navigation** - Anchor-based navigation to all sections
- **Project Filtering** - Category-based project showcase
- **Iconify Icons** - 100k+ icons available via `@iconify/react`
- **Custom Scrollbar** - Styled to match navy blue theme

## 🛠️ Tech Stack

**Framework & Libraries:**
- [Next.js 16.1.6](https://nextjs.org/) - React framework with SSR/SSG
- [React 18.2.0](https://reactjs.org/) - UI library
- [Tailwind CSS 4.2.1](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion 7.6.5](https://www.framer.com/motion/) - Animation library
- [EmailJS 3.9.1](https://www.emailjs.com/) - Email service integration

**Additional Tools:**
- [Iconify React 4.0.0](https://iconify.design/) - Icon library
- [Lottie React 2.3.1](https://airbnb.io/lottie/) - JSON-based animations
- [React Simple Typewriter 4.0.5](https://github.com/awran5/react-simple-typewriter) - Typewriter effect

## Project Structure

```text
src/
  components/      Reusable UI building blocks
  context/         Scroll and shared UI state
  hooks/           Custom hooks (theme mode)
  layouts/         App shell / header
  mock/            Editable portfolio content
  pages/           Next.js pages
  sections/        Home page sections
  styles/          Global styles
```

## Getting Started

### 1) Clone and install

```bash
git clone https://github.com/JohnUghiovhe/portfolio.git
cd portfolio
npm install
```

### 2) Configure environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_EMAIL_SERVICE_ID="YOUR SERVICE ID"
NEXT_PUBLIC_EMAIL_TEMPLATE_ID="YOUR TEMPLATE ID"
NEXT_PUBLIC_EMAIL_PUBLIC_KEY="YOUR PUBLIC KEY"
```

You can copy values from `.env.example` and replace with your EmailJS credentials.

### 3) Run locally

```bash
# Development server (http://localhost:3031)
npm run dev
```

## Available Scripts

- `npm run dev` — start development server on port `3031`
- `npm run build` — create production build in `.next`
- `npm start` — start production server (requires `npm run build` first)
- `npm run lint` — run Next.js lint
- `npm run lint:es` — run ESLint on `.js/.jsx`
- `npm run lint:fix` — auto-fix lint issues

## 🎨 Design System

### Color Palette

```css
/* Primary Navy Blue Theme */
--background-color: #0a1929;        /* Main background */
--secondary-bg: #132f4c;            /* Card backgrounds */
--hover-bg: #1e3a5f;                /* Hover states */

/* Primary Colors */
--primary-300: #7cd1fd;             /* Light accent */
--primary-500: #0ca3eb;             /* Main brand */
--primary-700: #0168a3;             /* Dark accent */
--primary-900: #06283d;             /* Deepest shade */
```

### Typography
- **Headings:** Lato (sans-serif)
- **Body:** Roboto (sans-serif)

## 📝 Customization Guide

### Personal Info & Social Links

Edit `src/mock/profile.js`:

```javascript
export const HERO_TITLES = [
  'John Ughiovhe',
  'A Backend Engineer',
  'An AI Enthusiast',
  'An open-source contributor'
];

export const aboutParagraph = 'Your professional bio...';
export const contactEmail = 'your.email@example.com';
export const cvLink = '/Your-CV.pdf';
export const documentTitle = 'Your Name | Title';

// Social links for hero section (GitHub, LinkedIn)
export const SOCIAL_LINKS = [
  { link: 'https://github.com/username', icon: 'akar-icons:github-fill' },
  { link: 'https://linkedin.com/in/username', icon: 'akar-icons:linkedin-fill' }
];

// Footer social links (all platforms)
export const FOOTER_SOCIAL_LINKS = [
  { link: 'https://github.com/username', icon: 'akar-icons:github-fill', label: 'GitHub' },
  { link: 'https://linkedin.com/in/username', icon: 'akar-icons:linkedin-fill', label: 'LinkedIn' },
  { link: 'https://twitter.com/username', icon: 'akar-icons:twitter-fill', label: 'X (Twitter)' },
  { link: 'mailto:your@email.com', icon: 'clarity:email-solid', label: 'Email' }
];
```

**CV Setup:** Place your CV file in `public/` (e.g., `public/John-Ughiovhe-CV.pdf`) and update `cvLink`.

### Skills

Edit `src/mock/tech-skills.js`:

- `FRONTEND_SKILLS`
- `BACKEND_SKILLS`
- `FRONTEND_DESCRIPTIONS`
- `BACKEND_DESCRIPTIONS`

Each skill item shape:

```js
{
  label: 'Your Skill',
  proficiency: '90%',
  icon: 'iconify:icon-name',
  iconClasses: 'text-3xl'
}
```

### Projects

Edit `src/mock/projects.js`:

```javascript
export const PROJECTS = [
  {
    imgSrc: '/project-image.jpg',
    title: 'Project Name',
    description: 'Brief project description',
    repoLink: 'https://github.com/username/repo',
    sourceLink: 'https://live-demo.com',
    category: [PROJECT_CATEGORY.FULL_STACK],
    techIcons: [
      { icon: 'logos:react' },
      { icon: 'logos:nodejs' }
    ]
  }
];

// Project categories for filtering
export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source'
};
```

**Project Images:** Place images in `public/` and reference them with `/image-name.jpg`.

### Lottie Animations

Place animation JSON files in `src/mock/lottie/` and import:

```javascript
import codingAnimation from '../mock/lottie/coding.json';

// Use in component
<AnimatedLottie animationDataFile={codingAnimation} />
```

**Free Lottie Animations:** [LottieFiles](https://lottiefiles.com/)

## Production Build

```bash
npm run build
npm start
```

If `npm start` fails with “Could not find a production build”, run `npm run build` first.

## Deployment

This project can be deployed to Vercel or any Next.js-compatible host.

### Vercel (recommended)

1. Push this repository to GitHub
2. Import the repo into Vercel
3. Add environment variables in Vercel project settings
4. Deploy

## 🔧 Troubleshooting

### Common Issues

**Production build missing:**
```bash
# Error: "Could not find a production build in .next folder"
npm run build && npm start
```

**Email form not working:**
1. Verify EmailJS credentials in `.env.local`
2. Check EmailJS service is active
3. Restart dev server after adding env vars

**Icons not showing:**
- Verify icon names on [Iconify](https://icon-sets.iconify.design/)
- Check spelling in `src/mock/*` files
- Format: `collection-name:icon-name` (e.g., `akar-icons:github-fill`)

**Dark mode not persisting:**
- Check browser's local storage is enabled
- Clear site data and try again

**Navigation not scrolling:**
- Ensure section IDs match anchor hrefs:
  - `#skills` → `<section id="skills">`
  - `#works` → `<div id="works">`
  - `#contact` → `<div id="contact">`

## 📁 Project Structure Details

```text
📦 portfolio/
├── 📂 public/                  # Static assets
│   ├── favicon.ico
│   ├── John-Ughiovhe-CV.pdf
│   └── [project-images].jpg
├── 📂 src/
│   ├── 📂 assets/              # Images and media
│   ├── 📂 components/          # Reusable components
│   │   ├── Iconify.js          # Icon wrapper
│   │   ├── Lottie.js           # Animation wrapper
│   │   ├── Footer.js           # Site footer
│   │   ├── ScrollToTop.js      # Scroll to top button
│   │   ├── animate/            # Animation components
│   │   ├── skills/             # Skill display components
│   │   ├── social/             # Social link components
│   │   └── works/              # Project card component
│   ├── 📂 context/
│   │   └── ScrollContext.js    # Scroll state management
│   ├── 📂 hooks/
│   │   └── useDarkMode.js      # Theme toggle hook
│   ├── 📂 layouts/
│   │   ├── Header.js           # Navigation bar
│   │   └── MainLayout.js       # Page wrapper
│   ├── 📂 mock/                # Editable content
│   │   ├── profile.js          # Personal info & social
│   │   ├── projects.js         # Project data
│   │   ├── tech-skills.js      # Skills data
│   │   └── lottie/             # Animation files
│   ├── 📂 pages/
│   │   ├── _app.js             # App initialization
│   │   ├── _document.js        # HTML document
│   │   └── index.js            # Home page
│   ├── 📂 sections/            # Page sections
│   │   ├── HomeHero.js         # Hero/landing section
│   │   ├── Skills.js           # Skills showcase
│   │   ├── Works.js            # Projects gallery
│   │   └── Contact.js          # Contact form
│   └── 📂 styles/
│       └── globals.css         # Global styles & theme
├── .env.local                  # Environment variables
├── jsconfig.json               # Path aliases
├── next.config.js              # Next.js config
├── package.json                # Dependencies
├── postcss.config.js           # PostCSS config
├── tailwind.config.js          # Tailwind customization
└── README.md                   # This file
```

## 🚀 Performance Optimization

- **Image Optimization:** Use Next.js `<Image>` component for better performance
- **Code Splitting:** Next.js automatically splits code by page
- **Font Loading:** Preconnected to Google Fonts API
- **Animation Performance:** Framer Motion uses GPU acceleration
- **CSS Purging:** Tailwind removes unused styles in production

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for personal portfolio use and customization.

## 👨‍💻 Author

**John Ughiovhe**
- GitHub: [@JohnUghiovhe](https://github.com/JohnUghiovhe)
- LinkedIn: [john-ughiovhe](https://www.linkedin.com/in/john-ughiovhe)
- Email: ughiovhejohn@gmail.com

---

⭐ **Star this repo if you found it helpful!**