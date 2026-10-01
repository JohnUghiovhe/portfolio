import React, { useMemo, useState } from 'react';
// components
import Iconify from '../components/Iconify';
import ProjectCard from '../components/works/ProjectCard';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mocks
import { PROJECTS, PROJECT_CATEGORY, TABS } from '../mock/projects';

// ----------------------------------------------------------------------

export default function Works() {
  const [currentTab, setCurrentTab] = useState('all');
  const [showAllProjects, setShowAllProjects] = useState(false);

  const activeClass =
    'inline-flex min-w-fit items-center gap-2 rounded-t-lg border-b-2 border-primary-700 p-3 text-sm text-primary-700 group sm:gap-3 sm:p-4 sm:text-base dark:text-primary-300 dark:border-primary-300';

  const handleOnClick = (_value) => {
    setCurrentTab(_value);
    setShowAllProjects(false);
  };

  const filteredProjects = useMemo(() => {
    if (currentTab === PROJECT_CATEGORY.ALL) {
      return PROJECTS;
    }

    return PROJECTS.filter((project) => project.category.includes(currentTab));
  }, [currentTab]);

  const visibleProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <>
      <section
        id="projects"
        className="relative mx-auto mt-16 w-full max-w-6xl space-y-10 px-4 pb-16 sm:px-6"
      >
        {/* Neon ambient glow */}
        <div className="neon-section-ambient pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(123,0,255,0.07),transparent_55%)]" />
        <HeadingAnimate>
          <h2 className="mb-10 text-center font-lato text-2xl font-bold text-primary-700 sm:text-3xl dark:text-primary-300 md:text-4xl">
            Projects
          </h2>
        </HeadingAnimate>

        <LoadAnimate amount={0}>
          <div className="flex w-full flex-col items-center">
            <ul
              id="works-tab"
              className="-mb-px flex w-full flex-wrap items-center justify-center gap-x-1 border-b border-gray-200 font-medium sm:gap-x-2 dark:border-gray-700"
            >
              {TABS.map((tab, i) => (
                <li
                  key={`tab ${i}`}
                  onClick={() => handleOnClick(tab.value)}
                  className={
                    currentTab === tab.value
                      ? activeClass
                      : 'group inline-flex min-w-fit cursor-pointer items-center gap-2 rounded-t-lg border-b-2 border-transparent p-3 text-sm text-gray-500 transition hover:border-gray-300 hover:text-primary-700 sm:gap-3 sm:p-4 sm:text-base dark:text-gray-400'
                  }
                >
                  <Iconify icon={tab.icon} />
                  <span>{tab.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 2xl:grid-cols-4">
              {visibleProjects.map((project, i) => (
                <ProjectCard key={`project-${currentTab}-${i}`} {...project} />
              ))}
            </div>

            {filteredProjects.length > 4 && (
              <button
                type="button"
                className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#1a5fff]/30 bg-[#0b1220]/80 px-5 py-3 text-sm font-semibold text-[#d5deee] transition hover:border-[#1a5fff]/60 hover:text-white hover:shadow-lg hover:shadow-[#1a5fff]/10"
                onClick={() => setShowAllProjects((previousState) => !previousState)}
              >
                {showAllProjects ? 'Show fewer projects' : 'Show all projects'}
                <Iconify icon={showAllProjects ? 'tabler:chevron-up' : 'tabler:chevron-down'} />
              </button>
            )}
          </div>
        </LoadAnimate>
      </section>
    </>
  );
}
