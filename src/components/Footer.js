import React from 'react';
import Iconify from './Iconify';
import { FOOTER_SOCIAL_LINKS } from '../mock/profile';

// ----------------------------------------------------------------------

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-neutral-50/80 dark:border-gray-700 dark:bg-[#0a1929]">
      <div className="container mx-auto px-5 py-8">
        {/* Social Links */}
        <div className="mb-6 flex flex-wrap justify-end gap-4">
          {FOOTER_SOCIAL_LINKS.map(({ icon, link, label }, index) => (
            <a
              key={`footer-link-${index}`}
              href={link}
              rel="noreferrer"
              target="_blank"
              className="group inline-flex flex-col items-center space-y-2 transition-transform hover:scale-105"
              aria-label={label}
            >
              <div className="inline-flex items-center rounded-full border border-primary-700 p-3 text-center text-sm font-medium text-primary-700 transition hover:bg-primary-600 hover:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:border-primary-500 dark:text-primary-300 dark:hover:bg-primary-400 dark:hover:text-neutral-50 dark:focus:ring-primary-800">
                <Iconify classes="text-xl" icon={icon} />
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400">{label}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} <span className="font-semibold text-primary-700 dark:text-primary-300">John Ughiovhe</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
