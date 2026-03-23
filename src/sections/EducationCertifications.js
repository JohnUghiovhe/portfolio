import React from 'react';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
import { CERTIFICATIONS, EDUCATION } from '../mock/education-certifications';

// ----------------------------------------------------------------------

export default function EducationCertifications() {
  return (
    <section
      id="education"
      className="relative container mx-auto mt-12 px-5 py-12 scroll-mt-24"
    >
      <div className="neon-section-ambient pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(26,95,255,0.08),transparent_55%)]" />

      <HeadingAnimate>
        <h2 className="mb-12 text-center font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
          Education & Certifications
        </h2>
      </HeadingAnimate>

      <LoadAnimate amount={0}>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-gray-700/50 bg-[#0b1220]/70 p-6 backdrop-blur-sm">
            <h3 className="mb-4 text-lg font-bold text-neutral-100">Education</h3>
            <div className="space-y-4">
              {EDUCATION.map((item, index) => (
                <article
                  key={`education-${index}`}
                  className="rounded-lg border border-gray-700/40 bg-[#101a30]/70 p-4"
                >
                  <h4 className="text-base font-semibold text-[#7cd1fd]">{item.program}</h4>
                  <p className="mt-1 text-sm text-neutral-200">{item.institution}</p>
                  <p className="mt-1 text-xs tracking-wide text-neutral-400">
                    {item.period} {item.location ? `• ${item.location}` : ''}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">{item.details}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-700/50 bg-[#0b1220]/70 p-6 backdrop-blur-sm">
            <h3 className="mb-4 text-lg font-bold text-neutral-100">Certifications</h3>
            <div className="space-y-4">
              {CERTIFICATIONS.map((item, index) => (
                <article
                  key={`certificate-${index}`}
                  className="rounded-lg border border-gray-700/40 bg-[#101a30]/70 p-4"
                >
                  <h4 className="text-base font-semibold text-[#73f09c]">{item.title}</h4>
                  <p className="mt-1 text-sm text-neutral-200">{item.issuer}</p>
                  <p className="mt-1 text-xs tracking-wide text-neutral-400">
                    Issued {item.issued} • {item.credentialType}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">{item.note}</p>
                  {item.skills && item.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={`skill-${skillIndex}`}
                          className="inline-block rounded-full bg-[#73f09c]/20 px-3 py-1 text-xs font-medium text-[#73f09c]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </LoadAnimate>
    </section>
  );
}

// ----------------------------------------------------------------------
