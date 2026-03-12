import React from 'react';
// components
import Iconify from '../components/Iconify';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mock
import { SKILL_GROUPS } from '../mock/tech-skills';

// ----------------------------------------------------------------------

export default function Skills() {
  return (
    <>
      <section id="skills" className="relative container mx-auto mt-16 pb-16 text-center sm:mt-10">
        {/* Neon ambient glow */}
        <div className="neon-section-ambient pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,245,255,0.07),transparent_60%)]" />

        <HeadingAnimate>
          <h2 className="mb-10 font-roboto text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
            Skills &amp; Tech Stack
          </h2>
        </HeadingAnimate>

        <LoadAnimate amount={0}>
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SKILL_GROUPS.map(({ id, label, accent, skills }) => (
                <div
                  key={id}
                  className="flex flex-col rounded-xl border border-gray-700/40 bg-[#0b1220]/70 p-6 text-left backdrop-blur-sm transition hover:border-gray-600/60 hover:shadow-lg"
                  style={{ borderTopColor: accent, borderTopWidth: '2px' }}
                >
                  <h3
                    className="mb-4 text-xs font-bold uppercase tracking-widest"
                    style={{ color: accent }}
                  >
                    {label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(({ label: skillLabel, icon }) =>
                      icon ? (
                        <span
                          key={skillLabel}
                          className="inline-flex items-center gap-1.5 rounded-full border border-gray-700/50 bg-[#131e36]/80 px-3 py-1.5 text-sm font-medium text-neutral-200 transition hover:border-gray-500/60"
                        >
                          <Iconify icon={icon} classes="text-base" />
                          {skillLabel}
                        </span>
                      ) : (
                        <span
                          key={skillLabel}
                          className="inline-flex items-center rounded-full border border-gray-600/40 bg-[#1a2f4a]/50 px-3 py-1.5 text-sm font-medium text-neutral-300"
                        >
                          {skillLabel}
                        </span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </LoadAnimate>
      </section>
      <div id="works" />
    </>
  );
}
