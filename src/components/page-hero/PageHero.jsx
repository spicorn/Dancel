import { useLocation } from "react-router-dom";
import { GoldRects, GreenRects, PurpleRects } from "../../assets/icons/icons";
import "./pageHero.scss";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import AnimatedText from "../animatedText/AnimatedText";

const PageHero = ({ topIcon, topText, pageHeading, extraText }) => {
  const location = useLocation();
  const theme = useContext(ThemeContext);
  return (
    <div
      className={theme.isDarkmode ? "pageHeroWrapperDark" : "pageHeroWrapper"}
    >
      {theme.isDarkmode && (
        <img
          src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1701866485/phero_lnil62.png"
          alt="bg"
        />
      )}
      {!theme.isDarkmode && (
        <img
          src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700577159/Vectorbg_q6nt9c.png"
          alt="bg"
        />
      )}
      <div className="pageHeroContainer">
        <div className={theme.isDarkmode ? "topTextDark" : "topText"}>
          <span>{topIcon}</span>
          <p>{topText}</p>
        </div>
        <AnimatedText
          text={pageHeading}
          className={theme.isDarkmode ? "headingDark" : "heading"}
          once
        />
        <div className="extraTextCont">
          <p className={theme.isDarkmode ? "extraTextDark" : "extraText"}>
            {extraText}
          </p>{" "}
          {location.pathname === "/about"}
        </div>
        <div className="purpleRects">
          <PurpleRects />
        </div>
        <div className="greenRects">
          <GreenRects />
        </div>
        <div className="goldRects">
          <GoldRects />
        </div>
      </div>
    </div>
  );
};

export default PageHero; 