import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

export const Footer: React.FC = () => {
  const iconStyle: React.CSSProperties = {
    padding: 10,
    fontSize: 60,
    color: "#000000",
  };

  interface FooterProps {
    iconDef: IconDefinition;
    url: string;
  }

  const Icon: React.FC<FooterProps> = ({ iconDef, url }) => {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon style={iconStyle} icon={iconDef} />
      </a>
    );
  };

  return (
    <footer className="footer">
      <div className="container">
        <div style={{ textAlign: "center", padding: 0 }}>
          <Icon iconDef={faGithub} url="https://github.com/guricerin" />
          <Icon iconDef={faTwitter} url="https://twitter.com/guricerin" />
          <Icon iconDef={faBlog} url="https://guri6cerin.hatenablog.com/" />
        </div>
      </div>
    </footer>
  );
};
