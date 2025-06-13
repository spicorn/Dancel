import { useContext } from "react";
import {
  GmailDarkIcon,
  GmailIcon,
  LinkedInContactIcon,
  TwitterContactIcon,
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
        <a
          href="mailto:dancelmautsa21@gmail.com"
          aria-label="send dancel a mail"
        >
          dancelmautsa21@gmail.com
        </a>
      ),
    },
    {
      icon: <TwitterContactIcon />,
      appText: "Follow me on Twitter",
      appDetails: (
        <a
          href="https://twitter.com/dancel_mautsa"
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
