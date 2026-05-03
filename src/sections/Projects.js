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
    'inline-flex min-w-fit items-center space-x-4 p-4 text-primary-700 rounded-t-lg border-b-2 border-primary-700 active dark:text-primary-300 dark:border-primary-300 group';

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
      <section id="projects" className="relative container mx-auto mt-16 space-y-10 pb-16 sm:pb-16 space-x-5 md:space-x-0 scroll-mt-24">
        {/* Neon ambient glow */}
        <div className="neon-section-ambient pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(123,0,255,0.07),transparent_55%)]" />
        <HeadingAnimate>
          <h2 className="mb-10 text-center font-lato text-3xl font-bold text-primary-700 dark:text-primary-300 sm:text-4xl">
            Projects
          </h2>
        </HeadingAnimate>

        <LoadAnimate amount={0}>
          <div className="flex w-full flex-col items-center">
            <ul
              id="works-tab"
              className="-mb-px flex max-w-full gap-x-2 border-b border-gray-200 font-medium  hover:cursor-pointer dark:border-gray-700"
            >
              {TABS.map((tab, i) => (
                <li
                  key={`tab ${i}`}
                  onClick={() => handleOnClick(tab.value)}
                  className={
                    currentTab === tab.value
                      ? activeClass
                      : 'group inline-flex min-w-fit items-center space-x-4 rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300'
                  }
                >
                  <Iconify icon={tab.icon} />
                  <span>{tab.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-y-7 lg:grid-cols-3 lg:px-7 xl:grid-cols-4 xl:px-0">
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
