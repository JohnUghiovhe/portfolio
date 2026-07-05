import React from 'react';
// components
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';

// ----------------------------------------------------------------------

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full max-w-none bg-linear-to-b from-[#0b1220] via-[#0d0515] to-[#0b1220] px-0 py-24 sm:py-32"
        >
            {/* Space: subtle nebula backdrop */}
            <div className="space-nebula pointer-events-none absolute inset-0 -z-10" />
            <div className="star-field-far pointer-events-none absolute inset-0 -z-10 opacity-10" />
            <div className="star-field-mid pointer-events-none absolute inset-0 -z-10 opacity-12" />

            <div className="container mx-auto px-5 md:px-8">
                <HeadingAnimate>
                    <h2 className="mb-12 text-center font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
                        About Me
                    </h2>
                </HeadingAnimate>

                <LoadAnimate amount={0}>
                    <div className="mx-auto max-w-4xl">
                        {/* Main About Content */}
                        <div className="rounded-lg border border-gray-700/50 bg-[#0b1220]/60 p-8 backdrop-blur-md dark:border-gray-600/50 md:p-12">
                            {/* Header with visual effect */}
                            <div className="relative mb-8">
                                <div className="absolute -left-4 top-0 h-1 w-1 rounded-full bg-[#1a5fff] shadow-lg shadow-[#1a5fff]/50" />
                                <h3 className="text-xl font-bold text-neutral-100 md:text-2xl">
                                Engineering Backend Systems That Scale
                                </h3>
                            </div>

                            {/* About text placeholder */}
                            <div className="space-y-6">
                                <p className="leading-relaxed text-neutral-300">
                                    I'm John Ughiovhe, a Backend Software Engineer who enjoys designing systems that are secure, scalable, and built to last. I specialize in TypeScript and Node.js, building APIs, backend services, and application infrastructure that power real-world digital products.
                                </p>

                                <p className="leading-relaxed text-neutral-300">
                                    My engineering journey began with a curiosity about how software works behind the scenes. That curiosity evolved into a passion for solving complex problems through thoughtful system design, clean architecture, and maintainable code. Today, I focus on building backend systems that remain reliable as products and teams grow.
                                </p>

                                <p className="leading-relaxed text-neutral-300">
                                    I graduated as the Best Learner in the Backend Engineering Diploma program at AltSchool Africa, an experience that strengthened my foundation in software engineering and reinforced my commitment to building production-quality software. Since then, I've contributed to real-world products by implementing authentication systems, notification infrastructure, workflow engines, and API-first architectures used by growing businesses.
                                </p>

                                <p className="leading-relaxed text-neutral-300">
                                    Alongside engineering, my experience leading customer service operations has shaped how I think about software. Working closely with business processes and end users has taught me to build solutions that don't just function correctly, but also solve meaningful problems, improve operational efficiency, and deliver measurable value.
                                </p>

                                <p className="leading-relaxed text-neutral-300">
                                    Whether I'm designing APIs, improving backend architecture, or implementing complex business workflows, I strive to write software that's reliable, maintainable, and easy for other engineers to build upon. I'm always looking for opportunities to learn, collaborate, and create technology that makes a lasting impact.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
                                <div className="rounded-lg bg-[#1a2f5a]/40 p-4">
                                    <p className="text-sm font-semibold text-[#1a5fff]">Projects</p>
                                    <p className="mt-2 text-lg font-bold text-neutral-100">10+</p>
                                </div>
                                <div className="rounded-lg bg-[#1a2f5a]/40 p-4">
                                    <p className="text-sm font-semibold text-[#00b4ff]">Focus</p>
                                    <p className="mt-2 text-lg font-bold text-neutral-100">Backend Engineering • API Development • Distributed Systems • Scalable Architecture</p>
                                </div>
                            </div>
                        </div>

                        {/* Side accent */}
                        <div className="mt-8 flex justify-center">
                            <div className="h-1 w-24 rounded-full bg-linear-to-r from-[#0a1e5e] via-[#1a5fff] to-[#00b4ff] shadow-lg shadow-[#1a5fff]/40" />
                        </div>
                    </div>
                </LoadAnimate>
            </div>
        </section>
    );
}

// ----------------------------------------------------------------------
