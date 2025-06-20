import { useContext, useEffect } from "react";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import { motion, useIsPresent } from "framer-motion";
import { ThemeContext } from "../App";

const Home = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const isPresent = useIsPresent();
  const theme = useContext(ThemeContext);
  const isMobile = window.innerWidth <= 820;
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{
          scaleY: 0,
          transition: { duration: isMobile ? 0 : 0.5, ease: "circOut" },
        }}
        exit={{
          scaleY: 1,
          transition: { duration: isMobile ? 0 : 0.5, ease: "circIn" },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className={
          theme.isDarkmode ? "route-switch-screen-dark" : "route-switch-screen"
        }
      />
    </div>
  );
};

export default Home; 