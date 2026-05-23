import React from 'react';
// components
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';

// ----------------------------------------------------------------------

const EXPERIENCES = [
  {
    role: 'Backend Engineer Intern',
    company: 'HNG Tech',
    period: 'April 2026 – Present',
    location: 'Lagos, Nigeria',
    highlights: [
      'Contributing to the backend development of SEIL, a guided marketing funnel platform helping SMBs generate and execute personalized marketing workflows through conversational onboarding, automated funnel blueprint generation, and guided activation flows.',
      'Collaborating in a cross-functional team environment to build scalable APIs and workflow orchestration logic supporting MVP delivery under real product constraints and iterative development cycles.',
      'Built Insighta Labs+, a multi-interface TypeScript/Express backend powering both Web and CLI experiences with secure GitHub OAuth (PKCE), role-based access control, deterministic natural-language profile search, and a unified token model ensuring consistent authentication and authorization across clients.',
      'Architected secure authentication infrastructure with token rotation, hashed token storage, middleware-driven request pipelines, and route-scoped access enforcement to improve reliability and system security.',
      'Built a backend-driven invoice workflow system supporting structured invoice lifecycle states (draft → pending → paid), PostgreSQL persistence with development fallbacks, schema-driven validation, and testable API flows.',
      'Designed modular backend systems with clear separation between routing, validation, business logic, persistence, and error handling to improve maintainability and scalability across projects.'
    ],
  },

  {    role: 'Backend Developer (Intern)',
    company: 'AltSchool Africa',
    period: 'September 2025 – February 2026',
    location: 'Remote',
    highlights: [
      'Built Eventful, a full-stack event ticketing and management platform that streamlined event creation, ticket checkout, and attendee workflows, replacing manual coordination processes with a scalable digital system.',
      'Designed modular REST APIs using Node.js, TypeScript, and Express, and integrated Redis caching to improve response performance and support long-term scalability across backend services.',
      'Developed a real-time multiplayer game system using WebSockets and Socket.IO, implementing low-latency bidirectional communication, event-driven game logic, timers, scoring systems, and concurrent user interactions.',
      'Built a chat-based food ordering platform using NestJS and TypeScript, implementing modular APIs, session-driven workflows, and payment verification flows to improve user accessibility and transaction handling.',
      'Designed backend systems supporting authentication, access control, relational data modeling, and payment integrations, strengthening experience with production-style application architecture.',
      'Developed a content publishing backend with role-based access controls and reusable RESTful API structures for protected and public content operations.',
      'Applied modern backend engineering practices including modular architecture, API design, validation, persistence design, and scalable system organization across multiple projects.'
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
