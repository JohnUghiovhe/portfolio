import React from 'react';
import PropTypes from 'prop-types';
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

export default function TechSkillIcon({ label, icon, iconClasses }) {
  return (
    <div className="inline-flex w-24 flex-col items-center gap-2 text-center">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full p-2 shadow-md shadow-neutral-300 dark:shadow-neutral-700">
        <Iconify icon={icon} classes={iconClasses} />
      </span>
      <span className="text-xs text-primary-800 dark:text-primary-300">{label}</span>
    </div>
  );
}

// ----------------------------------------------------------------------

TechSkillIcon.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  iconClasses: PropTypes.string,
};
