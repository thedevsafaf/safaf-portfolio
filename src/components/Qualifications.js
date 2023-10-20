import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { Slide } from "react-reveal";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

function Qualifications() {
  const education = [
    "Bachelor's Degree in Computer Science, VTU Bangalore [2016-2020]",
    "Android App Development Engineering Intern at Anspro Software Solutions, Bangalore, 2019",
  ];

  const experience = [
    "3+ Years of Professional Experience",
    "1.7 Years in Infosys Bangalore - Systems Engineer",
    "1 Year in Talrop Ernakulam - Python Full Stack Developer",
    "Aspiring ASP.NET Full Stack Developer",
    "Power Platform and SharePoint Online Specialist",
    "Hands-on Experience with AI and Machine Learning Projects",
    "Experienced in Android and React Native Application Development",
    "Proficient in Cloud Computing, Networking, and Server Management",
  ];

  return (
    <>
      <QualificationsContainer>
        <QualificationsTitle>
          My Qualifications <FontAwesomeIcon icon={faCertificate} />
        </QualificationsTitle>
        <QualificationsSection>
          <QualificationsCategory>
            Education{" "}
            <FontAwesomeIcon
              icon={faGraduationCap}
              style={{ color: "#0088ff" }}
            />
          </QualificationsCategory>
          <Slide top>
            <QualificationsList>
              {education.map((qualification, index) => (
                <QualificationItem key={index}>
                  {qualification}
                </QualificationItem>
              ))}
            </QualificationsList>
          </Slide>
        </QualificationsSection>
        <QualificationsSection>
          <QualificationsCategory>
            Experience{" "}
            <FontAwesomeIcon icon={faBriefcase} style={{ color: "#0088ff" }} />
          </QualificationsCategory>
          <Slide top>
            <QualificationsList>
              {experience.map((qualification, index) => (
                <QualificationItem key={index}>
                  {qualification}
                </QualificationItem>
              ))}
            </QualificationsList>
          </Slide>
        </QualificationsSection>
      </QualificationsContainer>
      <Footer />
    </>
  );
}

const QualificationsContainer = styled.div`
  background-color: #050708;
  padding: 10px 80px 80px 80px;
  text-align: center;
`;

const QualificationsTitle = styled.h2`
  margin-bottom: 30px;
  color: #fff;
  width: 100%;
`;

const QualificationsSection = styled.div`
  margin-bottom: 30px;
`;

const QualificationsCategory = styled.h3`
  font-size: 20px;
  color: #99a3a7;
  margin-bottom: 10px;
`;

const QualificationsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const QualificationItem = styled.li`
  font-size: 16px;
  color: #666;
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 4px;
  width: 300px;
  text-align: center;

  &:hover {
    background-color: #333;
    color: white;
    border-color: #242525;
  }
`;

export default Qualifications;
