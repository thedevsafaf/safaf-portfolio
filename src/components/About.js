// About.js
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Slide, Flip } from "react-reveal";

function About() {
  const name = "Mohammed Safaf Pt";
  const age = 25;
  const phone1 = "+91 8606 35 2583";
  const phone2 = "+91 7511 15 2583";
  const email = "developer.safaf@gmail.com";
  const address = "Kondotty, India";

  const handleDownloadCV = () => {
    // Create a download link and simulate a click event
    const downloadLink = document.createElement("a");
    downloadLink.href =
      "https://drive.google.com/file/d/1Oa2-02E37mpV_kVARN6BheSiyU1bnvU2/view?usp=sharing";
    downloadLink.download = "Safaf-Resume-2023.pdf";
    downloadLink.target = "_blank";
    downloadLink.click();
  };

  const navigate = useNavigate();

  const handleHireMe = () => {
    navigate("/contact"); // Navigate to the Contact page
  };

  return (
    <>
      <AboutContainer>
        <AboutProfile>
          <ProfileTitleContainer>
            <Slide left>
              <ProfileTitle>About Me</ProfileTitle>
            </Slide>
          </ProfileTitleContainer>

          <ProfileDetails>
            <ProfileJobTitle>I am a Software Engineer</ProfileJobTitle>
            <ProfileSummary>
              Dedicated Software Engineer with 3 years of professional
              experience, including 1.7 years at Infosys, Bangalore. Skilled in
              Web, App Development, AI technologies, Power Platform, SharePoint
              Online, and proficient in multiple programming languages such as
              C#, Java, Python, JS. Currently transitioning to a full-stack ASP
              .NET developer, committed to delivering quality solutions and
              driving innovation.
            </ProfileSummary>
            <ProfileDetailsList>
              <div>
                <Flip top>
                  <List>
                    <b>Name: </b>
                    <InfoLabel>{name}</InfoLabel>
                  </List>
                </Flip>
                <Flip top>
                  <List>
                    <b>Age: </b>
                    <InfoLabel>{age}</InfoLabel>
                  </List>
                </Flip>
                <Flip top>
                  <List>
                    <b>Address: </b>
                    <InfoLabel>{address}</InfoLabel>
                  </List>
                </Flip>
              </div>
              <div>
                <Flip bottom>
                  <List>
                    <b>Phone #1: </b>
                    <InfoLabel>{phone1}</InfoLabel>
                  </List>
                </Flip>
                <Flip bottom>
                  <List>
                    <b>Phone #2: </b>
                    <InfoLabel>{phone2}</InfoLabel>
                  </List>
                </Flip>
                <Flip bottom>
                  <List>
                    <b>Email: </b>
                    <InfoLabel>{email}</InfoLabel>
                  </List>
                </Flip>
              </div>
            </ProfileDetailsList>
            <ProfileButtons>
              <Button1 onClick={handleDownloadCV}>Download My CV</Button1>
              <Button2 onClick={handleHireMe}>Hire Me</Button2>
            </ProfileButtons>
          </ProfileDetails>
        </AboutProfile>
      </AboutContainer>
      <Footer />
    </>
  );
}

const AboutContainer = styled.div`
  background-color: #050708;
  color: white;
  padding: 90px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1220px) {
    padding: 0px;
  }
`;

const AboutProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1220px) {
    flex-direction: column;
  }
`;

const ProfileTitleContainer = styled.div`
  width: 30%;
  max-width: 30%;
  text-align: center;
`;

const ProfileTitle = styled.h2`
  /* Add animation styles */
  animation: bounce 2s infinite;
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-8px);
    }
    40% {
      transform: translateY(-6px);
    }
    60% {
      transform: translateY(-4px);
    }
    80% {
      transform: translateY(-2px);
    }
  }

  /* Add flowing shapes near the title */
  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: #0088ff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    animation: flow 3s infinite;
  }

  &::before {
    top: 10px;
    left: 40px;
  }

  &::after {
    top: 10px;
    right: 60px;
  }

  @keyframes flow {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 1180px) {
    &::before,
    &::after {
      display: none;
    }
  }
`;

const ProfileDetails = styled.div`
  width: 90%;
  padding: 20px;

  @media (max-width: 1220px) {
    padding: 10px;
  }
`;

const ProfileJobTitle = styled.h2`
  @media (max-width: 472px) {
    width: 100%;
    font-size: 20px;
  }
  @media (max-width: 394px) {
    font-size: 18px;
  }
  @media (max-width: 362px) {
    font-size: 16px;
  }
`;

const ProfileSummary = styled.p`
  margin-bottom: 20px;
  letter-spacing: 0.8px;
  width: 100%;
`;

const ProfileDetailsList = styled.ul`
  list-style: disc;
  padding: 0;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const List = styled.li`
  margin-bottom: 10px;

  @media (max-width: 302px) {
    display: flex;
    flex-direction: column;
  }
`;

const InfoLabel = styled.span`
  color: #0088ff;
  margin-right: 5px;
`;

const ProfileButtons = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0px;
`;

const Button1 = styled.button`
  background-color: #242425;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "darkblue" : "#333")};
  }
`;

const Button2 = styled.button`
  background-color: #000;
  color: white;
  border: 1px solid #242525;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "darkblue" : "#242525")};
  }
`;

export default About;
