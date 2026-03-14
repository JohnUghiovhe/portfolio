import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// context
import { ScrollContext } from '../context/ScrollContext';
import { cvLink } from '../mock/profile';

// ----------------------------------------------------------------------

export default function Header() {
  const { isScroll, jumpToTop } = useContext(ScrollContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#works' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="relative w-full max-w-none">
      <nav
        className={`neon-border-bottom fixed top-0 right-0 z-1000 flex h-16 w-full items-center px-4 md:px-[4%] ${isScroll ? 'bg-[#0b1220]/88 backdrop-blur-xl' : 'bg-[#0b1220]/72 backdrop-blur-md'
          }`}
      >
        {/* Navy blue ambient glow behind nav content */}
        <div className="neon-section-ambient pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(15,40,130,0.35),transparent_70%)]" />
        <motion.div
          className="w-1/2 md:w-1/4"
          initial={{ opacity: 0, scale: 0.5, x: -200 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <h3
            className="text-md cursor-pointer bg-linear-to-r from-[#d5deee] to-[#0eaddd] bg-clip-text font-lato font-black tracking-widest text-transparent md:text-2xl"
            onClick={jumpToTop}
          >
            &lt;JU/&gt;
          </h3>
        </motion.div>
        <motion.div
          className="hidden w-2/4 justify-center md:flex"
          initial={{ opacity: 0, scale: 0.5, x: 200 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <ul className="flex items-center space-x-7">
            {navItems.map(({ label, href }, index) => (
              <li key={`nav-item-${index}`}>
                <a
                  href={href}
                  className="text-sm font-medium text-neutral-300/90 transition hover:text-[#66e0ff] xs:text-base"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="flex w-1/2 items-center justify-end gap-3 md:w-1/4"
          initial={{ opacity: 0, scale: 0.5, x: 200 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <a
            href={cvLink}
            download="John-Ughiovhe-CV.pdf"
            type="application/pdf"
            className="rounded-xl bg-linear-to-r from-[#6fa1ecdd] to-[#0240b3] px-6 py-2 text-sm font-bold text-white shadow-lg shadow-[#2b1424] transition hover:brightness-110"
          >
            Resume
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#66e0ff]/30 bg-[#091322]/80 text-[#d5deee] transition hover:border-[#66e0ff] hover:text-[#66e0ff] md:hidden"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((previousState) => !previousState)}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </span>
          </button>
        </motion.div>
      </nav>

      <div
        className={`fixed inset-0 top-16 z-50 bg-[#020817]/72 backdrop-blur-sm transition duration-300 md:hidden ${isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          id="mobile-navigation"
          className={`mx-4 mt-4 rounded-2xl border border-[#66e0ff]/20 bg-[#081120]/95 p-5 shadow-2xl shadow-[#001f3f]/40 transition duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
          onClick={(event) => event.stopPropagation()}
        >
          <ul className="space-y-2">
            {navItems.map(({ label, href }, index) => (
              <li key={`mobile-nav-item-${index}`}>
                <a
                  href={href}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-neutral-300/90 transition hover:bg-[#0d203b] hover:text-[#66e0ff]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

// ----------------------------------------------------------------------

