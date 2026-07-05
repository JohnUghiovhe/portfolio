import React from 'react';
// components
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';

// ----------------------------------------------------------------------

const EXPERIENCES = [
  {
    role: 'Backend Software Engineer',
    company: 'SEIL',
    period: 'June 2026 – Present',
    location: 'Remote',
    highlights: [
      'Designed and shipped 10+ production backend features, including Google OAuth authentication, Funnel Generation & Display APIs, notification services, profile management, and funnel stage progression workflows.',
      'Improved backend maintainability by introducing database migrations, Swagger documentation, automated tests, and consistent API design patterns.',
      'Collaborated with cross-functional engineers to evolve SEIL from its internship MVP into a production-focused platform serving growing businesses.',
    ],
  },

  {
    role: 'Backend Engineering Intern',
    company: 'HNG Tech',
    period: 'April 2026 – June 2026',
    location: 'Remote',
    highlights: [
      'Selected into the HNG Internship 14 Backend track and advanced to the Top 140 finalists from over 22,000 participants.',
      'Delivered production-ready backend functionality while collaborating in agile teams using Git workflows, peer reviews, and iterative feature delivery.',
      'Successfully transitioned into continued product development on SEIL following the internship.',
    ],
  },

  {
    role: 'Backend Software Engineer (Hackathon Team)',
    company: 'Distill AI',
    period: 'May 2026 – Present',
    location: 'Remote',
    highlights: [
      'Engineered orchestration services for multi-stage AI document extraction with resumable processing pipelines.',
      'Built live execution trace streaming, intelligent request classification, explainable routing, and confidence-scoring services for AI workflows.',
      'Implemented configurable policy and pricing engines alongside authenticated configuration management and tool registry infrastructure.',
    ],
  },

  {
    role: 'Customer Service Manager (Operations & Systems Thinking)',
    company: 'KIJ Villa',
    period: 'May 2024 – Present',
    location: 'Lagos, Nigeria',
    highlights: [
      'Lead customer service operations while improving internal workflows, service delivery, and stakeholder collaboration.',
      'Applied systems thinking and analytical problem-solving to streamline operations and enhance the customer experience.',
      'Partnered across teams to identify operational bottlenecks and implement scalable process improvements.',
    ],
  },
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
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {EXPERIENCES.map(({ role, company, period, location, highlights }, i) => (
              <article
                key={`experience-${i}`}
                className="rounded-xl border border-gray-700/50 bg-[#0b1220]/70 p-6 backdrop-blur-sm transition hover:border-[#1a5fff]/40 hover:shadow-lg hover:shadow-[#1a5fff]/10"
              >
                <div className="mb-3 flex flex-wrap items-start gap-x-3 gap-y-1">
                  <h3 className="font-lato text-lg font-bold text-neutral-100">
                    {role}
                  </h3>
                  <span className="mt-0.5 shrink-0 rounded-full bg-[#1a5fff]/20 px-2.5 py-0.5 text-xs font-semibold text-[#00b4ff]">
                    {period}
                  </span>
                </div>

                {(company || location) && (
                  <div className="mb-4 flex flex-wrap items-center gap-x-2 text-sm">
                    {company && <span className="font-semibold text-[#1a5fff]">{company}</span>}
                    {company && location && <span className="text-gray-600 dark:text-gray-500">·</span>}
                    {location && <span className="text-gray-400">{location}</span>}
                  </div>
                )}

                {highlights?.length > 0 && (
                  <div>
                    <p className="mb-3 text-xs font-bold tracking-widest text-[#00b4ff]">
                      IMPACT HIGHLIGHTS
                    </p>
                    <ul className="flex flex-col space-y-2">
                      {highlights.map((point, j) => (
                        <li
                          key={`highlight-${i}-${j}`}
                          className="flex items-start gap-2 text-sm text-neutral-400"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00b4ff]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
        </LoadAnimate>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
