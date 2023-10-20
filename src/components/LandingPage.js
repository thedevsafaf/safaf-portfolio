// LandingPage.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
//svg shape
// Import SVG
import BackgroundShape from "../images/blue.svg";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function LandingPage() {
  const name = "Hey There, Its Safaf, 👋 ";
  const typedJobTitle = "Full Stack Developer";
  const summary =
    "A passionate Full Stack Engineer based in Kerala, India | Web and App Development | Power Platform Specialist | ASP .NET Core MVC | Django | React JS | React Native | C#, Python, JS, Java | AI, ML, ChatGPT | Cloud | Networking";

  const [jobTitle, setJobTitle] = useState("");

  useEffect(() => {
    const typeJobTitle = () => {
      for (let i = 0; i <= typedJobTitle.length; i++) {
        setTimeout(() => {
          setJobTitle(typedJobTitle.slice(0, i));
        }, i * 100);
      }
    };

    typeJobTitle();
  }, []);

  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate("/about"); // Navigate to the About page
  };

  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>{name}</Title>
        <Subtitle>{jobTitle}</Subtitle>
        <Summary>{summary}</Summary>
        <Button onClick={handleExploreMore}>EXPLORE</Button>
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
      </TitleContainer>

      <ImageContainer>
        <Fade left>
          <HeaderImage src="safaf-wo-bg.png" alt="Your Image" />
        </Fade>
      </ImageContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background-color: #000;
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  width: 40%;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  @media (max-width: 908px) {
    font-size: 30px;
  }
  @media (max-width: 850px) {
    font-size: 28px;
  }
  @media (max-width: 792px) {
    font-size: 26px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.h2`
  color: #0088ff;
  letter-spacing: 8px;

  @media (max-width: 994px) {
    font-size: 22px;
  }

  @media (max-width: 946px) {
    font-size: 20px;
  }

  @media (max-width: 898px) {
    letter-spacing: 7px;
  }

  @media (max-width: 848px) {
    letter-spacing: 6px;
  }

  @media (max-width: 798px) {
    letter-spacing: 5px;
  }
  @media (max-width: 312px) {
    letter-spacing: 4px;
  }
  @media (max-width: 300px) {
    font-size: 18px;
  }
`;

const Summary = styled.p`
  color: #848482;
`;

const SocialMediaIcons = styled.div`
  font-size: 32px;
  display: flex;
  gap: 18px;
  margin-top: 10px;

  a {
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  width: 35%;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeaderImage = styled.img`
  background: url(${BackgroundShape}) no-repeat bottom right fixed;
  background-size: cover;
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 5%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default LandingPage;
