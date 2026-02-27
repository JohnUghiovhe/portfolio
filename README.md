# Developer Portfolio

A modern, responsive developer portfolio built with Next.js, Tailwind CSS, Framer Motion, and EmailJS.

## Features

- Responsive single-page portfolio layout
- Dark/light theme toggle with local storage persistence
- Animated hero, section transitions, and skill/works reveal effects
- Projects tab filtering (`All`, `Full Stack`, `Open Source`)
- Contact form integration with EmailJS
- Easy content customization through local mock/data files

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Framer Motion
- Iconify
- Lottie React
- EmailJS

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

Create a `.env` file in the project root:

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

## Customization Guide

### Personal Info & Social Links

Edit `src/mock/profile.js`:

- `HERO_TITLES`
- `aboutParagraph`
- `contactEmail`
- `cvLink`
- `documentTitle`
- `SOCIAL_LINKS`

To enable CV download, place your CV file in `public/` (example: `public/John-Ughiovhe-CV.pdf`) and point `cvLink` to it.

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

- `PROJECTS` data for cards
- `TABS` and `PROJECT_CATEGORY` for filtering

### Lottie Animations

Place animation JSON files under `src/mock/lottie/` and import them where needed (e.g. in `src/sections/Skills.js`).

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

## Troubleshooting

- **Production start error (`.next` missing):** run `npm run build` before `npm start`.
- **Email form not sending:** verify EmailJS env vars in `.env`.
- **Icons not showing:** check Iconify names in `src/mock/*` data files.

## License

This repository is intended for personal portfolio usage and customization.