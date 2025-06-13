import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../assets/icons/icons";
import "./socials.scss";

const Socials = () => {
  return (
    <div className="socialswrapper">
      <a
        className="socialIcons"
        href="https://github.com/spicorn"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Dancel github account"
      >
        <GithubIcon />
      </a>
      <a
        className="socialIcons"
        href="https://instagram.com/dancel_mautsa"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Dancel instagram account"
      >
        <InstagramIcon />
      </a>
      <a
        className="socialIcons"
        href="https://twitter.com/dancel_mautsa"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Dancel twitter account"
      >
        <TwitterIcon />
      </a>
      <a
        className="socialIcons"
        href="https://www.linkedin.com/in/dancel-mautsa-87246b217/"
        target="_blank"
        rel="noreferrer"
        aria-label="link to lakes linkedin account"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default Socials;
