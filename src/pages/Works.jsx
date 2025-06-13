import { useContext, useEffect } from "react";
import { FolderIcon } from "../assets/icons/icons";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import PageHero from "../components/page-hero/PageHero";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import { motion, useIsPresent } from "framer-motion";
import { ThemeContext } from "../App";
import Focus from "../components/focus/Focus";

const Works = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const isPresent = useIsPresent();
  const theme = useContext(ThemeContext);
  const isMobile = window.innerWidth <= 820;
  return (
    <div>
      <Header />
      <PageHero
        topIcon={<FolderIcon />}
        topText={<Focus sentence="MY PROJECTS" manualMode={false} blurAmount={5} borderColor="blue" animationDuration={2} pauseBetweenAnimations={1}/>}
        pageHeading="Selected Works"
        extraText="Here are some of my projects"
      />
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

export default Works; 