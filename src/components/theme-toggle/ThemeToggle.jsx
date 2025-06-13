import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import { motion } from 'framer-motion';
import './theme-toggle.scss';

const ThemeToggle = () => {
  const { isDarkmode, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button
      className={`theme-toggle ${isDarkmode ? 'themeDark' : 'theme'}`}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={false}
      animate={{
        rotate: isDarkmode ? 180 : 0,
        scale: 1,
      }}
      transition={{ duration: 0.3 }}
      aria-label="Toggle theme"
    >
      {isDarkmode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      )}
    </motion.button>
  );
};

export default ThemeToggle; 