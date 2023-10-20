import React from "react";
import styled from "styled-components";
import TechnologyIcons from "./TechnologyIcons";
import ProgrammingSkills from "./ProgrammingSkills";
import Footer from "./Footer";

//for showing reveal effect on scroll - see Fade cascade
import { Fade, Zoom, Flip } from "react-reveal";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

const Title = styled.h2`
  color: white;
  text-align: center;
  font-size: 24px;
`;

const SkillsContainer = styled.div`
  padding: 30px 60px 30px 60px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #050708;
  border-radius: 8px;
  margin-bottom: 30px;
  color: #99a3a7;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const SkillsTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const SkillSet = styled.div`
  margin-bottom: 10px;
`;

const SkillLabel = styled.span`
  font-weight: bold;
  display: inline-block;
  width: 150px;
  margin-bottom: 5px;

  @media (max-width: 360px) {
    font-size: 14px;
  }
`;

const ProgressBar = styled.div`
  background-color: #007acc;
  height: 14px;
  border-radius: 8px;
  width: ${(props) => props.width || "0%"};
  margin-bottom: 15px;

  @media (max-width: 360px) {
    height: 10px;
  }
`;

const skillSets = [
  { name: "Programming", value: "80%" },
  { name: "Web Technologies", value: "90%" },
  { name: "App Technologies", value: "75%" },
  { name: "Tools", value: "85%" },
  { name: "AI and ML", value: "70%" },
  { name: "Platforms", value: "95%" },
  { name: "Database", value: "78%" },
  { name: "Networking", value: "68%" },
];

const TechnologySkills = () => {
  return (
    <>
      <div style={{ backgroundColor: "black", padding: 30 }}>
        <Flip left>
          <Title>
            My Skills <FontAwesomeIcon icon={faPuzzlePiece} />
          </Title>
        </Flip>

        {/* Tools and Technologies */}
        <Zoom>
          <TechnologyIcons />
        </Zoom>

        {/* Skills Card */}
        <Fade cascade>
          <SkillsContainer>
            <SkillsTitle>Skills</SkillsTitle>
            {skillSets.map((skill, index) => (
              <SkillSet key={index}>
                <SkillLabel>{skill.name}:</SkillLabel>
                <ProgressBar width={skill.value}></ProgressBar>
              </SkillSet>
            ))}
          </SkillsContainer>
        </Fade>

        {/* Programming Pie Chart */}
        <Fade cascade>
          <ProgrammingSkills />
        </Fade>
      </div>
      <Footer />
    </>
  );
};

export default TechnologySkills;
