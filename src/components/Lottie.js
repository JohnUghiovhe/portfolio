import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const ReactLottie = dynamic(() => import('lottie-react'), { ssr: false });

// ----------------------------------------------------------------------

export default function Lottie({ animationDataFile }) {
  return (
    <ReactLottie animationData={animationDataFile} loop />
  );
}

// ----------------------------------------------------------------------

Lottie.propTypes = {
  animationDataFile: PropTypes.object,
};
