import React from 'react';
import Iconify from '../Iconify';
import { SOCIAL_LINKS } from '../../mock/profile';

// ----------------------------------------------------------------------

export default function SocialLinks() {
  return (
    <div className="flex space-x-5">
      {SOCIAL_LINKS.map(({ icon, link }, index) => (
        <a
          key={`link ${index}`}
          href={link}
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 p-3 text-center text-sm font-medium text-neutral-100 shadow-md shadow-[#0a0f2c]/60 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#5fd6ff]/40 hover:bg-[#15244f] focus:outline-none focus:ring-2 focus:ring-[#38c9ff]"
        >
          <Iconify classes="text-xl" icon={icon} />
        </a>
      ))}
    </div>
  );
}
