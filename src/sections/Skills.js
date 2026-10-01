import React from 'react';
// components
import Iconify from '../components/Iconify';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mock
import { SKILL_GROUPS } from '../mock/tech-skills';

// ----------------------------------------------------------------------

export default function Skills() {
  const [activeGroupId, setActiveGroupId] = React.useState(SKILL_GROUPS[0].id);
  const activeGroup = SKILL_GROUPS.find((group) => group.id === activeGroupId) || SKILL_GROUPS[0];

  return (
    <section id="skills" className="relative mx-auto mt-16 w-full max-w-6xl px-4 pb-16 text-center sm:px-6 sm:mt-10">
      {/* Neon ambient glow */}
      <div className="neon-section-ambient pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,245,255,0.07),transparent_60%)]" />

      <HeadingAnimate>
        <h2 className="mb-10 font-lato text-2xl font-semibold text-primary-700 sm:text-3xl dark:text-primary-300 md:text-4xl">
          Skills &amp; Tech Stack
        </h2>
      </HeadingAnimate>

      <LoadAnimate amount={0}>
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex flex-wrap justify-center gap-2 sm:gap-3">
            {SKILL_GROUPS.map(({ id, label, accent }) => {
              const isActive = id === activeGroupId;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveGroupId(id)}
                  aria-pressed={isActive}
                  className="group relative w-full rounded-2xl border border-gray-400/30 bg-[#161b2e]/80 px-4 py-3 text-center font-medium text-slate-200 shadow-[0_0_0_1px_rgba(148,163,184,0.08)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-gray-500/60 hover:shadow-lg focus:outline-none sm:w-[calc(50%-0.375rem)] sm:py-4 sm:text-base md:w-auto md:flex-1"
                  style={{
                    borderColor: isActive ? accent : 'rgba(148,163,184,0.25)',
                    boxShadow: isActive ? `0 0 0 1px ${accent}40, 0 10px 30px rgba(15, 23, 42, 0.35)` : 'none',
                    background: isActive ? `linear-gradient(135deg, ${accent}22, rgba(15, 23, 42, 0.86))` : '#161b2e/80',
                  }}
                >
                  <span
                    className="block text-xs font-semibold uppercase tracking-[0.12em] sm:text-sm md:text-base"
                    style={{ color: isActive ? accent : '#e2e8f0' }}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="rounded-2xl border border-gray-500/25 bg-[#0b1220]/80 p-6 text-left shadow-[0_20px_60px_rgba(15,23,42,0.45)] backdrop-blur-sm"
            style={{ borderTopColor: activeGroup.accent, borderTopWidth: '2px' }}
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-white" style={{ color: activeGroup.accent }}>
                {activeGroup.label}
              </h3>
              <span className="rounded-full border border-gray-600/40 bg-[#111827]/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
                {activeGroup.skills.length} skills
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {activeGroup.skills.map(({ label: skillLabel, icon }) =>
                icon ? (
                  <span
                    key={skillLabel}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-700/60 bg-[#131e36]/80 px-3 py-2 text-sm font-medium text-neutral-200"
                  >
                    <Iconify icon={icon} classes="text-base" />
                    {skillLabel}
                  </span>
                ) : (
                  <span
                    key={skillLabel}
                    className="inline-flex items-center rounded-full border border-gray-600/40 bg-[#1a2f4a]/50 px-3 py-2 text-sm font-medium text-neutral-300"
                  >
                    {skillLabel}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </LoadAnimate>
    </section>
  );
}
