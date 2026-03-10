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
    <section className="relative container mx-auto flex max-h-screen min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-16 md:px-1">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_20%,rgba(255,138,0,0.28),transparent_42%),radial-gradient(circle_at_84%_14%,rgba(0,212,166,0.2),transparent_40%),radial-gradient(circle_at_50%_70%,rgba(12,18,36,0.92),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#ffd166_0.7px,transparent_0.7px)] bg-size-[40px_40px] opacity-30" />

      <p className="text-center font-lato text-xl font-semibold tracking-wide text-neutral-100 sm:text-2xl md:text-4xl">
        Hi, I&apos;m
      </p>
      <p className="relative z-10 mb-8 pb-2 leading-[1.15] bg-linear-to-r from-[#ff7a18] via-[#ffd166] to-[#00d4a6] bg-clip-text text-center font-lato text-5xl font-black tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
        John Ughiovhe
      </p>
      <div className="relative z-0 mx-auto h-full w-full max-w-lg">
        <div className="absolute top-0 -right-4 h-56 w-56 animate-blob rounded-full bg-[#ff8a00] opacity-30 blur-2xl filter" />
        <div className="animation-delay-2000 absolute top-0 -left-4 h-56 w-56 animate-blob rounded-full bg-[#00d4a6] opacity-28 blur-2xl filter" />
        <div className="animation-delay-3000 absolute -top-14 left-20 h-56 w-56 animate-blob rounded-full bg-[#ff4d6d] opacity-22 blur-2xl filter" />
      </div>
      <div className="z-50 flex flex-col items-center space-y-4 sm:space-y-8">
        <h1 className="z-50 text-center font-lato text-2xl font-bold text-neutral-100 sm:text-4xl md:text-5xl">
          <span className="bg-linear-to-r from-[#ff7a18] via-[#ffd166] to-[#00d4a6] bg-clip-text text-transparent">
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
        <p className="text-center text-base font-medium text-neutral-300 sm:text-lg md:w-3/5 md:text-2xl">{aboutParagraph}</p>
        {/* Social Icons */}
        <SocialLinks />
      </div>

      <div
        id="mouse-scroll"
        className={`ml-4 hidden cursor-pointer transition-all duration-200 ${isScroll ? 'opacity-0' : ''}`}
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
