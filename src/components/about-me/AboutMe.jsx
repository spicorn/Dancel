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
        />
        <div className="details">
          <AnimatedText
            text="Meet Dancel Mautsa."
            className={theme.isDarkmode ? "meetDark" : "meet"}
            once
          />
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            I am a Frontend Developer based in Harare, Zimbabwe. I have a
            serious passion for UI effects and animations, building pixel
            perfect web applications, creating dynamic user experiences and
            making every element on the web accessible to everyone.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            I am a self-taught developer with a background in Computer Science.
            I have a strong foundation in HTML, CSS, JavaScript, React,
            Tailwind, Node.js and Firebase. I am always eager to learn new
            technologies and improve my skills.
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