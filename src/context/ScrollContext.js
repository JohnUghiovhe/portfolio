import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';

// ----------------------------------------------------------------------

const initialState = {
  isScroll: false,
};

const ScrollContext = createContext(initialState);

// ----------------------------------------------------------------------

ScrollProvider.propTypes = {
  children: PropTypes.node,
};

function ScrollProvider({ children }) {
  const [isScroll, setIsScroll] = useState(false);

  const jumpToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const jumpToDown = () => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // The header grows taller when the nav wraps onto extra rows on narrow
    // screens, so derive the threshold from its measured height.
    let threshold = 70;

    const updateThreshold = () => {
      const header = document.querySelector('header nav');
      threshold = header ? header.offsetHeight + 10 : 70;
    };

    const handleScroll = () => {
      setIsScroll(window.scrollY > threshold);
    };

    updateThreshold();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateThreshold);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateThreshold);
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        isScroll: isScroll,
        jumpToTop: jumpToTop,
        jumpToDown: jumpToDown,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export { ScrollContext, ScrollProvider };
