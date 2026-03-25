import { useContext } from "react";
import "./about.scss";
import { ThemeContext } from "../../App";
import AnimatedText from "../animatedText/AnimatedText";

const AboutMe = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "abtMewrapperDark" : "abtMewrapper"}>
      <div className="abtCont">
        <img
          src="https://ik.imagekit.io/qvdv4r3lk/me.png?updatedAt=1721930401325"
          alt="dancel mautsa"
          loading="lazy"
          decoding="async"
        />
        <div className="details">
          <AnimatedText
            text="Meet Dancel Mautsa."
            className={theme.isDarkmode ? "meetDark" : "meet"}
            once
          />
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            I'm a Frontend Developer based in Harare, Zimbabwe, working with
            clients to build fast, polished and accessible web applications and
            mobile apps that users actually enjoy using. With a deep focus on UI
            precision, smooth animations and clean architecture, I bridge the
            gap between great design and reliable engineering so your product
            doesn't just look good, it performs.
          </p>
          <h3 className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            What l bring to your project:
          </h3>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            <ul>
              <li>
                Pixel perfect implementation from any design file (Figma, XD, or
                your vision)
              </li>
              <li>
                Performant, scalable frontends built with React, TypeScript, and
                Tailwind CSS
              </li>
              <li>
                Seamless user experiences with thoughtful micro-interactions and
                transitions
              </li>
              <li>
                Accessible interfaces built to WCAG standards — reaching every
                user, on every device
              </li>
              <li>
                Full-stack capability with Node.js for end-to-end delivery when
                needed
              </li>
            </ul>
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            When I am not coding, I am either watching movies, playing video
            games, or reading books. I also love to travel and explore new
            places.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
