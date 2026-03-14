import React from 'react';
// Layout
import MainLayout from '../layouts/MainLayout';
// sections
import HomeHero from '../sections/HomeHero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Works from '../sections/Works';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';
// components
import Footer from '../components/Footer';
// mock
import { documentTitle } from '../mock/profile';

// ------------------------------------------------

export default function Home() {
  const meta = (
    <>
      <title>{documentTitle}</title>
    </>
  );

  return (
    <MainLayout meta={meta}>
      <HomeHero />
      {/* About Section  */}
      <About />
      {/* Skill Section  */}
      <Skills />
      {/* Works Section  */}
      <Works />
      {/* Experience Section  */}
      <Experience />
      {/* Contact Section  */}
      <Contact />
      {/* Footer */}
      <Footer />
    </MainLayout>
  );
}
