import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
// Components
import Header from './Header';
// hooks
import useDarkMode from '../hooks/useDarkMode';

// -----------------------------------------------------------

export default function MainLayout({ children, meta }) {
  useDarkMode();

  return (
    <>
      <Head>{meta}</Head>

      <Header />

      <main className="overflow-x-hidden">{children}</main>
    </>
  );
}

// ---------------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.node,
};
