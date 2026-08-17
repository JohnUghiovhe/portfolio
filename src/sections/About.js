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

                            {/* About text */}
                            <div className="space-y-6">
                                <p className="leading-relaxed text-neutral-300">
                                    I'm John Ughiovhe, a Backend-focused Software Engineer who enjoys designing
                                    secure, scalable, and maintainable systems that solve real-world problems.
                                    I specialize in TypeScript, Node.js, and backend architecture, building APIs,
                                    services, and application infrastructure that support reliable digital products.
                                </p>

                                <p className="leading-relaxed text-neutral-300">
                                    My engineering journey has evolved from learning the fundamentals to working
                                    on collaborative, production-style systems. I've contributed to backend
                                    products involving authentication, authorization, workflow engines, event
                                    processing, real-time communication, background jobs, testing, and API
                                    architecture. These experiences have taught me to think beyond simply making
                                    software work—to designing systems that are easier to maintain, test, and scale.
                                </p>

                                <p className="leading-relaxed text-neutral-300">
                                    I graduated as the Best Learner from the Backend Engineering Diploma program
                                    at AltSchool Africa and later completed TechCrush's Backend Engineering
                                    Cohort 7. Along the way, I worked on collaborative products including Qpass,
                                    a QR-based event registration and attendance platform, Rehearsify, a choir
                                    repertoire planning and recommendation platform, and other backend systems
                                    that challenged me to apply engineering principles in practical settings.
                                </p>

                                <p className="leading-relaxed text-neutral-300">
                                    My experience at HNG Tech and with engineering teams such as SEIL further
                                    exposed me to collaborative development, code reviews, product thinking, and
                                    shipping software as part of a team. These experiences have strengthened my
                                    ability to communicate technical ideas, work through complex problems with
                                    other engineers, and take ownership of features from implementation to delivery.
                                </p>

                                <p className="leading-relaxed text-neutral-300">
                                    I'm currently expanding beyond backend development into cloud computing through
                                    a new TechCrush cohort, with a growing interest in infrastructure, deployment,
                                    and the systems that keep applications reliable in production. Alongside
                                    engineering, my background in customer service operations continues to shape
                                    how I approach software, keeping users, business processes, and measurable
                                    outcomes at the centre of what I build.
                                </p>

                                <p className="leading-relaxed text-neutral-300">
                                    Whether I'm designing an API, modelling a business workflow, improving system
                                    reliability, or exploring cloud infrastructure, I aim to build software that
                                    is thoughtful, dependable, and useful. I'm always looking to learn, collaborate,
                                    and contribute to products and engineering teams solving meaningful problems.
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
