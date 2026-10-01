import React, { useContext } from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';
// components
import SocialLinks from '../components/social/SocialLinks';
// other
import { aboutParagraph, HERO_TITLES } from '../mock/profile';
import { ScrollContext } from '../context/ScrollContext';
import ScrollToTop from '../components/ScrollToTop';

// ----------------------------------------------------------------------

export default function HomeHero() {
  const { isScroll, jumpToDown } = useContext(ScrollContext);

  return (
    <section className="relative w-full max-w-none flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden px-4 pt-28 sm:px-6 md:pt-20">
      {/* Space: nebula drift */}
      <div className="space-nebula pointer-events-none absolute inset-0 -z-10" />
      {/* Space: three-depth star fields */}
      <div className="star-field-far pointer-events-none absolute inset-0 -z-10 opacity-20" />
      <div className="star-field-mid pointer-events-none absolute inset-0 -z-10 opacity-25" />
      <div className="star-field-near pointer-events-none absolute inset-0 -z-10 opacity-30" />
      {/* Deep space radial vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,#0b1220_100%)]" />

      <p className="text-center font-lato text-base font-semibold tracking-wide text-neutral-100 sm:text-xl md:text-2xl">
        Hi, I&apos;m
      </p>
      <p className="relative z-10 pb-2 leading-[1.15] bg-linear-to-r from-[#f3cd50] via-[#73f09c] to-[#75e4a0] bg-clip-text text-center font-lato text-3xl font-black tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
        John Ughiovhe
      </p>
      <div className="pointer-events-none absolute inset-0 -z-10 mx-auto h-64 w-full max-w-lg">
        <div className="absolute top-0 -right-4 h-56 w-56 animate-blob rounded-full bg-[#ff6b00] opacity-40 blur-2xl filter" />
        <div className="animation-delay-2000 absolute top-0 -left-4 h-56 w-56 animate-blob rounded-full bg-[#00f5ff] opacity-35 blur-2xl filter" />
        <div className="animation-delay-3000 absolute -top-14 left-20 h-56 w-56 animate-blob rounded-full bg-[#c400ff] opacity-30 blur-2xl filter" />
      </div>
      <div className="z-50 flex w-full max-w-3xl flex-col items-center gap-4 text-center sm:gap-6">
        <h1 className="z-50 text-center font-lato text-base font-bold text-neutral-100 sm:text-3xl md:text-4xl">
          <span className="bg-linear-to-r from-[#f3cd50] via-[#73f09c] to-[#75e4a0] bg-clip-text text-transparent">
            <Typewriter
              style={{ color: 'inherit' }}
              words={HERO_TITLES}
              loop={false}
              cursor
              cursorStyle=" "
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <Cursor />
          </span>
        </h1>
        <p className="max-w-2xl text-center text-sm font-medium text-neutral-300 sm:text-base md:text-lg">{aboutParagraph}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-xl border border-[#66e0ff]/40 bg-[#0c1b32]/80 px-6 py-3 text-sm font-semibold text-[#d5deee] shadow-lg shadow-[#001f3f]/30 transition hover:-translate-y-0.5 hover:border-[#66e0ff] hover:text-[#66e0ff]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl bg-linear-to-r from-[#1a5fff] to-[#00b4ff] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#001f3f]/30 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Contact me
          </a>
        </div>
        {/* Social Icons */}
        <SocialLinks />
      </div>

      <div
        id="mouse-scroll"
        className={`hidden shrink-0 cursor-pointer transition-all duration-200 sm:block ${isScroll ? 'opacity-0' : ''}`}
        onClick={jumpToDown}
      >
        <div className="mouse d border-2 border-solid border-[#ffd166]">
          <div className="mouse-in bg-[#ffd166]" />
        </div>
        <div className="mt-3">
          <span className="down-arrow-1 border-r-2 border-b-2 border-solid border-[#ffd166]" />
          <span className="down-arrow-2 border-r-2 border-b-2 border-solid border-[#ffd166]" />
          <span className="down-arrow-3 border-r-2 border-b-2 border-solid border-[#ffd166]" />
        </div>
      </div>
      <ScrollToTop />
    </section>
  );
}
