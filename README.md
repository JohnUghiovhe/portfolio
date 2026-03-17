# John Ughiovhe Portfolio

A production-ready personal portfolio built with Next.js, React, Tailwind CSS, Framer Motion, and EmailJS.

## Overview

This project showcases:
- Professional profile and social presence
- Skills and tech stack
- Filterable project gallery
- Experience timeline
- Working contact form powered by EmailJS

## Current Features

- Responsive layout for desktop and mobile
- Anchor-based smooth section navigation
- Animated hero with typewriter text and layered visual effects
- Project filtering by category (All, Full Stack, Open Source, Frontend, Backend)
- Experience timeline section
- Contact form with loading state and success/error feedback

## Tech Stack

- Next.js 16.1.6
- React 18.2.0
- Tailwind CSS 4.2.1
- Framer Motion 7.6.5
- EmailJS Browser 3.9.1
- Iconify React 4.0.0
- React Simple Typewriter 4.0.5

## Project Structure

```text
src/
  components/
    animate/
    social/
    works/
  context/
  hooks/
  layouts/
  mock/
  pages/
  sections/
    About.js
    Contact.js
    Experience
    HomeHero.js
    Projects.js
    Skills.js
  styles/
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_EMAIL_SERVICE_ID="YOUR_SERVICE_ID"
NEXT_PUBLIC_EMAIL_TEMPLATE_ID="YOUR_TEMPLATE_ID"
NEXT_PUBLIC_EMAIL_PUBLIC_KEY="YOUR_PUBLIC_KEY"
```

### 3) Start development server

```bash
npm run dev
```

The app runs on `http://localhost:3031`.

## Scripts

- `npm run dev` - Start development server on port 3031
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run Next.js lint
- `npm run lint:es` - Run ESLint on .js/.jsx files
- `npm run lint:fix` - Auto-fix lint issues

### Maintenance scripts in package.json

The following scripts use `rm -rf` and are Unix-style:
- `clear-all`
- `re-start`
- `re-build`

If you are on Windows PowerShell, replace `rm -rf` with `Remove-Item -Recurse -Force` equivalents before using them.

## Content Customization

Update the following files to personalize the portfolio:

- `src/mock/profile.js` - Name, hero text, bio, social links, email, CV link
- `src/mock/tech-skills.js` - Skills groups and labels
- `src/mock/projects.js` - Projects data, categories, links, and media
- `src/sections/Experience` - Experience timeline entries

## Verified Updates Made So Far

This section records the implemented fixes and cleanup completed in this codebase.

### Navigation and section fix

1. Updated navbar Projects link target:
   - `#works` -> `#projects` in `src/layouts/Header.js`
2. Ensured Projects section is anchor-targetable:
   - Added `id="projects"` and `scroll-mt-24` in `src/sections/Projects.js`
3. Replaced old section usage in home page:
   - `Works` import/component -> `Projects` in `src/pages/index.js`
4. Removed deprecated section file:
   - Deleted `src/sections/Works.js`

### Dead code and cleanup

1. Removed unused components:
   - Deleted `src/components/Lottie.js`
   - Deleted `src/components/skills/ListItem.js`
   - Deleted `src/components/skills/TechIcon.js`
2. Removed unused data assets:
   - Deleted `src/mock/lottie/coding.json`
   - Deleted `src/mock/lottie/cloudinfra.json`
3. Removed obsolete placeholder/stale code:
   - Removed legacy `<div id="works" />` from `src/sections/Skills.js`
   - Removed stale commented nav item in `src/layouts/Header.js`
   - Removed stale commented block in `src/sections/About.js`
4. Removed unused Tailwind import:
   - Deleted `const colors = require('tailwindcss/colors');` from `tailwind.config.js`

### Validation status

After the cleanup and navigation updates:
- `npm run lint:es` passed
- `npm run build` passed (last run exit code: 0)

## Troubleshooting

### Contact form not sending

- Ensure all `NEXT_PUBLIC_EMAIL_*` variables are set in `.env.local`
- Restart the dev server after adding/changing env vars

### Anchor navigation not scrolling correctly

- Confirm nav href values match section IDs:
  - `#about` -> `id="about"`
  - `#skills` -> `id="skills"`
  - `#projects` -> `id="projects"`
  - `#contact` -> `id="contact"`

## Author

John Ughiovhe
- GitHub: https://github.com/JohnUghiovhe
- LinkedIn: https://www.linkedin.com/in/john-ughiovhe
- Email: ughiovhejohn@gmail.com
