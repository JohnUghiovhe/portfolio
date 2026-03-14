import React from 'react';
// components
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';

// ----------------------------------------------------------------------

/**
 * EXPERIENCE DATA — edit this array to populate the timeline.
 * Each entry supports:
 *   role        — job title
 *   company     — company / organisation name
 *   period      — date range string, e.g. "Jan 2024 – Present"
 *   location    — optional city / remote label
 *   description — short summary paragraph
 *   highlights  — array of bullet-point achievements
 */
const EXPERIENCES = [
  {
    role: 'Software Engineer',
    period: 'March 2025 – Present',
    location: 'Lagos, Nigeria',
    description:
      'Add a short summary of your responsibilities and the impact you had in this role.',
    highlights: [
      'Built a full-stack event ticketing platform using Node.js, Express, MongoDB, and Redis',
      'Designed RESTful APIs for event creation, ticket purchases, and user management',
      'Implemented caching with Redis to improve response performance',
      'Structured scalable backend architecture with TypeScript and Express.'
    ],
  },
  // {
  //   role: 'Add Your Job Title',
  //   company: 'Company Name',
  //   period: 'Month Year – Month Year',
  //   location: 'Location / Remote',
  //   description:
  //     'Add a short summary of your responsibilities and the impact you had in this role.',
  //   highlights: [
  //     'Key achievement or responsibility',
  //     'Another key achievement',
  //   ],
  // },
];

// ----------------------------------------------------------------------

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full max-w-none py-24 sm:py-32"
    >
      {/* Space: ambient nebula */}
      <div className="space-nebula pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="star-field-far pointer-events-none absolute inset-0 -z-10 opacity-10" />
      {/* Navy neon ambient glow from bottom */}
      <div className="neon-section-ambient pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(15,40,130,0.18),transparent_60%)]" />

      <div className="container mx-auto px-5 md:px-8">
        <HeadingAnimate>
          <h2 className="mb-16 text-center font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
            Experience
          </h2>
        </HeadingAnimate>

        <LoadAnimate amount={0}>
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical timeline spine */}
            <div className="absolute left-5 top-0 h-full w-px bg-linear-to-b from-[#1a5fff] via-[#00b4ff]/40 to-transparent md:left-1/2 md:-translate-x-px" />

            <div className="space-y-12">
              {EXPERIENCES.map(({ role, company, period, location, description, highlights }, i) => (
                <div
                  key={`experience-${i}`}
                  className="relative pl-14 md:pl-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3.25 top-1.5 h-4 w-4 rounded-full border-2 border-[#1a5fff] bg-[#0b1220] shadow-[0_0_8px_rgba(26,95,255,0.7)] md:left-1/2 md:-translate-x-1/2" />

                  {/* Card — alternates sides on desktop */}
                  <div
                    className={`md:w-[calc(50%-2rem)] ${
                      i % 2 === 0
                        ? 'md:ml-auto md:pl-8'
                        : 'md:mr-auto md:pr-8 md:text-right'
                    }`}
                  >
                    <div className="rounded-xl border border-gray-700/50 bg-[#0b1220]/70 p-6 backdrop-blur-sm transition hover:border-[#1a5fff]/40 hover:shadow-lg hover:shadow-[#1a5fff]/10">
                      {/* Role + period */}
                      <div className={`mb-3 flex flex-wrap items-start gap-x-3 gap-y-1 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <h3 className="font-lato text-lg font-bold text-neutral-100">
                          {role}
                        </h3>
                        <span className="mt-0.5 shrink-0 rounded-full bg-[#1a5fff]/20 px-2.5 py-0.5 text-xs font-semibold text-[#00b4ff]">
                          {period}
                        </span>
                      </div>

                      {/* Company + location */}
                      <div className={`mb-4 flex flex-wrap items-center gap-x-2 text-sm ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span className="font-semibold text-[#1a5fff]">{company}</span>
                        {location && (
                          <>
                            <span className="text-gray-600 dark:text-gray-500">·</span>
                            <span className="text-gray-400">{location}</span>
                          </>
                        )}
                      </div>

                      {/* Description */}
                      <p className="mb-4 text-sm leading-relaxed text-neutral-300">
                        {description}
                      </p>

                      {/* Highlights */}
                      {highlights?.length > 0 && (
                        <ul className={`space-y-1.5 ${i % 2 !== 0 ? 'md:items-end' : ''} flex flex-col`}>
                          {highlights.map((point, j) => (
                            <li
                              key={`highlight-${i}-${j}`}
                              className={`flex items-start gap-2 text-sm text-neutral-400 ${i % 2 !== 0 ? 'md:flex-row-reverse md:text-right' : ''}`}
                            >
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00b4ff]" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </LoadAnimate>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
