import React, { useContext } from 'react';
import { motion } from 'framer-motion';
// context
import { ScrollContext } from '../context/ScrollContext';
import { cvLink } from '../mock/profile';

// ----------------------------------------------------------------------

export default function Header() {
  const { isScroll, jumpToTop } = useContext(ScrollContext);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#skills' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#works' },
    { label: 'Experience', href: '#works' },
    { label: 'Blog', href: '#works' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="container mx-auto">
      <nav
        className={`fixed top-0 right-0 z-1000 flex h-16 w-full items-center px-4 md:px-[4%] ${
          isScroll ? 'bg-[#0b1220]/88 backdrop-blur-xl' : 'bg-[#0b1220]/72 backdrop-blur-md'
        }`}
      >
        <motion.div
          className="w-1/4"
          initial={{ opacity: 0, scale: 0.5, x: -200 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <h3
            className="text-md cursor-pointer bg-linear-to-r from-[#0059ff] to-[#ffd166] bg-clip-text font-lato font-black tracking-widest text-transparent md:text-2xl"
            onClick={jumpToTop}
          >
            &lt;JohnUghiovhe/&gt;
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
                  className="text-sm font-medium text-neutral-300/90 transition hover:text-[#ffd166] xs:text-base"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="flex w-3/4 items-center justify-end md:w-1/4"
          initial={{ opacity: 0, scale: 0.5, x: 200 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <a
            href={cvLink}
            download="John-Ughiovhe-CV.pdf"
            type="application/pdf"
            className="rounded-xl bg-linear-to-r from-[#704d01dd] to-[#0240b3] px-6 py-2 text-sm font-bold text-white shadow-lg shadow-[#2b1424] transition hover:brightness-110"
          >
            Resume
          </a>
        </motion.div>
      </nav>
    </header>
  );
}

// ----------------------------------------------------------------------

