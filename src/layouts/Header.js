import React, { useContext } from 'react';
import { motion } from 'framer-motion';
// context
import { ScrollContext } from '../context/ScrollContext';
import { cvLink } from '../mock/profile';

// ----------------------------------------------------------------------

const NAV_ITEMS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const { isScroll, jumpToTop } = useContext(ScrollContext);

  return (
    <header className="relative w-full max-w-none">
      <nav
        className={`neon-border-bottom fixed inset-x-0 top-0 z-1000 flex min-h-16 flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2 md:flex-nowrap md:px-[4%] ${isScroll ? 'bg-[#0b1220]/88 backdrop-blur-xl' : 'bg-[#0b1220]/72 backdrop-blur-md'
          }`}
      >
        {/* Navy blue ambient glow behind nav content */}
        <div className="neon-section-ambient pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(15,40,130,0.35),transparent_70%)]" />

        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, scale: 0.97, x: -24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0 }}
        >
          <h3
            className="cursor-pointer bg-linear-to-r from-[#d5deee] to-[#0eaddd] bg-clip-text font-lato text-xl font-black tracking-widest text-transparent md:text-2xl"
            onClick={jumpToTop}
          >
            &lt;JU/&gt;
          </h3>
        </motion.div>

        {/*
          One nav for every viewport. The list wraps onto extra rows on narrow
          screens instead of being hidden behind a menu toggle.
        */}
        <motion.div
          className="order-last flex w-full min-w-0 justify-center md:order-none md:w-auto md:flex-1"
          initial={{ opacity: 0, scale: 0.98, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-4 lg:gap-x-7">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={`nav-item-${label}`}>
                <a
                  href={href}
                  className="block whitespace-nowrap rounded px-1 py-1 text-xs font-medium text-neutral-300/90 transition hover:text-[#66e0ff] sm:text-sm md:text-base"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="flex shrink-0 items-center justify-end gap-3"
          initial={{ opacity: 0, scale: 0.98, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <a
            href={cvLink}
            download="John-Ughiovhe-CV.pdf"
            type="application/pdf"
            className="rounded-xl bg-linear-to-r from-[#6fa1ecdd] to-[#0240b3] px-4 py-2 text-xs font-bold text-white shadow-lg shadow-[#2b1424] transition hover:brightness-110 sm:px-5 sm:text-sm md:px-6"
          >
            Resume
          </a>
        </motion.div>
      </nav>
    </header>
  );
}

// ----------------------------------------------------------------------