import Socials from "../socials/Socials";
import "./hero.scss";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { RightArrowIcon } from "../../assets/icons/icons";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/welcome.json";
import BackgroundAnimation from "../../pages/BackgroundAnimation";
import resume from "../../assets/Dancel_Mautsa_Resume.pdf";

const Hero = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="hero-container">
      <div className=" animate ">
        <BackgroundAnimation />
      </div>

      <div className={theme.isDarkmode ? "heroContainerDark" : "heroContainer"}>
        <div className="heroWrapper">
          <div className="leftHero">
            <p className="hello">
              Hello <span className="wave">👋</span>
            </p>
            <h2 className="name">I'm Dancel Mautsa</h2>
            <p className="extraDetails">
              I'm a Frontend Developer based in Harare, specializing in building
              exceptional websites and making the web accessible to everyone.
            </p>
            <div className="resumeContainer">
              <a
                className="resume"
                href={resume}
                download="Dancel's Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="viewCv">
                  <span>View my resumé</span>
                  <span className="arrowIcon">
                    <RightArrowIcon />
                  </span>
                </p>
              </a>
            </div>
            <div className="socials">
              <Socials />
            </div>
          </div>
          <div className="rightHero">
            <Lottie
              animationData={animationData}
              data-aos="slide-up"
              className="h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
