import React from "react";
import styled from "styled-components";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 16px;
`;

const SocialMediaIcons = styled.div`
  font-size: 24px;
  display: flex;
  gap: 18px;
  margin-top: 10px;

  a {
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Footer = () => {
  return (
    <div
      style={{
        background: "blue",
        backgroundColor: "#111",
        color: "white",
        textAlign: "center",
        padding: 20,
      }}
    >
      <FooterContainer>
        <FooterText>
          &copy; 2023 Zafe Software Solutions | CEO: Mohammed Safaf Pt | All
          rights reserved.
        </FooterText>
        <SocialMediaIcons>
          <a
            href="https://twitter.com/Safaf_Mohammed7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#0088ff" }} />
          </a>
          <a
            href="https://linkedin.com/in/mohammed-safaf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0088ff" }} />
          </a>
          <a
            href="https://github.com/thedevsafaf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: "#0088ff" }} />
          </a>
        </SocialMediaIcons>
      </FooterContainer>
    </div>
  );
};

export default Footer;
