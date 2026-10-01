import React from 'react';
// components
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';

// ----------------------------------------------------------------------

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full max-w-none bg-linear-to-b from-[#0b1220] via-[#0d0515] to-[#0b1220] px-4 py-20 sm:px-6 sm:py-28 md:py-32"
        >
            {/* Space: subtle nebula backdrop */}
            <div className="space-nebula pointer-events-none absolute inset-0 -z-10" />
            <div className="star-field-far pointer-events-none absolute inset-0 -z-10 opacity-10" />
            <div className="star-field-mid pointer-events-none absolute inset-0 -z-10 opacity-12" />

            <div className="container mx-auto max-w-6xl">
                <HeadingAnimate>
                    <h2 className="mb-12 text-center font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
                        About Me
                    </h2>
                </HeadingAnimate>

                <LoadAnimate amount={0}>
                    <div className="mx-auto max-w-4xl">
                        {/* Main About Content */}
                        <div className="rounded-lg border border-gray-700/50 bg-[#0b1220]/60 p-5 backdrop-blur-md sm:p-8 dark:border-gray-600/50 md:p-12">
                            {/* Header with visual effect */}
                            <div className="relative mb-8">
                                <div className="absolute -left-4 top-0 h-1 w-1 rounded-full bg-[#1a5fff] shadow-lg shadow-[#1a5fff]/50" />
                                <h3 className="text-xl font-bold text-neutral-100 md:text-2xl">
                                    Building Reliable Backend Systems
                                </h3>
                            </div>

                            {/* About text */}

                            <div className="space-y-6">
                                <p className="leading-relaxed text-neutral-300">
                                    I'm John Ughiovhe, a Backend Software Engineer focused on building
                                    reliable APIs, backend services, and distributed systems that solve
                                    real-world problems. I work primarily with TypeScript, Node.js,
                                    NestJS, PostgreSQL, Redis, and cloud technologies, with a strong
                                    interest in system reliability, maintainability, and scalable
                                    architecture.
                                </p>

                                <p className="leading-relaxed text-neutral-300">
                                    My engineering work spans authentication and authorization, API
                                    architecture, workflow orchestration, background processing,
                                    transactional systems, caching, distributed locking, real-time
                                    communication, and AI-powered backend services. I enjoy working on
                                    problems where the challenge goes beyond making a feature work to
                                    designing how the system behaves as it grows.
                                </p>

                                <p className="leading-relaxed text-neutral-300">
                                    I've contributed to engineering teams and products including SEIL,
                                    Distill AI, and Qpass, while independently building systems such as
                                    Insighta Labs+ and a distributed Background Job Scheduler. These
                                    projects have given me hands-on experience with multi-client backend
                                    architecture, OAuth and RBAC, AI orchestration, job scheduling,
                                    retries, distributed coordination, and operational visibility.
                                </p>

                                <p className="leading-relaxed text-neutral-300">
                                    I also hold a Backend Engineering Diploma from AltSchool Africa,
                                    where I graduated as Best Learner, and completed TechCrush's Backend
                                    Engineering Cohort 7. I've since expanded my engineering toolkit into
                                    cloud computing, working with AWS, Docker, Kubernetes, Linux, and
                                    CI/CD as I deepen my understanding of how backend systems are
                                    deployed, operated, and maintained in production.
                                </p>

                                <p className="leading-relaxed text-neutral-300">
                                    My background in customer operations continues to influence how I
                                    approach engineering. It taught me to look beyond the technical
                                    implementation and consider the users, business processes, and
                                    operational realities behind the software being built.
                                </p>

                                <p className="leading-relaxed text-neutral-300">
                                    I'm particularly interested in backend engineering, distributed
                                    systems, cloud infrastructure, platform engineering, and the
                                    intersection of AI with reliable production systems. I enjoy
                                    learning, collaborating with other engineers, and turning complex
                                    requirements into dependable software.
                                </p>
                            </div>

                            <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="rounded-lg bg-[#1a2f5a]/40 p-4">
                                    <p className="text-sm font-semibold text-[#1a5fff]">Projects</p>
                                    <p className="mt-2 text-lg font-bold text-neutral-100">10+</p>
                                </div>
                                <div className="rounded-lg bg-[#1a2f5a]/40 p-4">
                                    <p className="text-sm font-semibold text-[#00b4ff]">Focus</p>
                                    <p className="mt-2 text-base font-bold text-neutral-100 sm:text-lg">
                                        Backend Engineering • Distributed Systems • Cloud Infrastructure • AI Systems
                                    </p>
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
