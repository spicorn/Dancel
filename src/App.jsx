import { useRoutes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Works from "./pages/Works";
import { createContext, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import React from "react";
import ThemeToggle from "./components/theme-toggle/ThemeToggle";

export const ThemeContext = createContext({
  isDarkmode: false,
  toggleTheme: () => "",
});

const App = () => {
  const [isDarkmode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkmode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkmode ? 'dark' : 'light');
  }, [isDarkmode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkmode);
  };

  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <ContactMe />,
    },
    {
      path: "/works",
      element: <Works />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <ThemeContext.Provider value={{ isDarkmode, toggleTheme }}>
      <ThemeToggle />
      <AnimatePresence mode="wait" initial={false}>
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </ThemeContext.Provider>
  );
};

export default App; 