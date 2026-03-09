import React from 'react';
import PropTypes from 'prop-types';
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

export default function ProjectCard({ imgSrc, title, description, repoLink, sourceLink, techIcons }) {
  return (
    <div className="relative flex max-w-xs flex-col rounded-lg border border-gray-200 shadow-md dark:border-gray-700 dark:bg-[#132f4c]/70">
      <img className="h-37.5 w-full rounded-t-lg object-cover" src={imgSrc} alt={title} />

      <div className="p-5">
        <h1 className="mb-2 text-lg font-semibold  text-gray-900 dark:text-white">{title}</h1>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{description}</p>

        {techIcons && techIcons.length > 0 && (
          <div className="mt-5 mb-7 flex flex-wrap gap-5">
            {techIcons.filter(Boolean).map(({ icon }, i) => (
              <Iconify key={`icon-${i}`} classes="text-2xl opacity-80" icon={icon} />
            ))}
          </div>
        )}
      </div>
      {(sourceLink !== '' || repoLink !== '') && (
        <div className="absolute bottom-5 right-5 flex items-center space-x-6">
          {repoLink !== '' && (
            <a
              href={repoLink}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center space-y-1 transition-all duration-200"
              title="Repository Link"
            >
              <Iconify
                classes="text-2xl transform transition-transform group-hover:scale-110 hover:text-primary-600 dark:hover:text-primary-300"
                icon="akar-icons:github-fill"
              />
              <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">View Repo</span>
            </a>
          )}
          {sourceLink !== '' && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center space-y-1 transition-all duration-200"
              title="Live Demo"
            >
              <Iconify
                classes="text-2xl transform transition-transform group-hover:scale-110 hover:text-primary-600 dark:hover:text-primary-300"
                icon="iconoir:open-new-window"
              />
              <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">Live Demo</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  repoLink: PropTypes.string,
  sourceLink: PropTypes.string,
  techIcons: PropTypes.array,
};
