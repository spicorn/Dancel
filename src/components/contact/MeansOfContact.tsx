import { useContext } from "react";
import {
  GmailDarkIcon,
  GmailIcon,
  LinkedInContactIcon,
  GithubIcon,
} from "../../assets/icons/icons";
import ContactCard from "./ContactCard";
import "./contact.scss";
import { ThemeContext } from "../../App";

interface MeansOfContactProps {}

const MeansOfContact: React.FunctionComponent<MeansOfContactProps> = () => {
  const theme = useContext(ThemeContext);

  const contacts = [
    {
      icon: theme.isDarkmode ? <GmailDarkIcon /> : <GmailIcon />,
      appText: "Send me an email",
      appDetails: (
        <a href="mailto:dancelmautsa@gmail.com" aria-label="send dancel a mail">
          dancelmautsa@gmail.com
        </a>
      ),
    },
    {
      icon: <GithubIcon />,
      appText: "Follow me on Twitter",
      appDetails: (
        <a
          href="https://github.com/spicorn"
          target="_blank"
          rel="noreferrer"
          aria-label="follow dancel on twitter"
        >
          @dancel_mautsa
        </a>
      ),
    },
    {
      icon: <LinkedInContactIcon />,
      appText: "Connect with me on LinkedIn",
      appDetails: (
        <a
          href="https://linkedin.com/in/dancel-mautsa"
          target="_blank"
          rel="noreferrer"
          aria-label="connect with Dancel on Linkedin"
        >
          Dancel Mautsa
        </a>
      ),
    },
  ];
  return (
    <div className={theme.isDarkmode ? "flexMeansDark" : "flexMeans"}>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.appText}
          icon={contact.icon}
          appName={contact.appText}
          details={contact.appDetails}
        />
      ))}
    </div>
  );
};

export default MeansOfContact;
