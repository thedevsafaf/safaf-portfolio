import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { Slide } from "react-reveal";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

function Resume() {
  const experienceData = [
    {
      date: "08/11/2021 - 06/06/2023",
      position: "Software Engineer",
      company: "Infosys Limited - Bangalore",
      description:
        "Developed, maintained, and tested code for software projects, including BT web portals/sites. Produced performance reports using scripts, guiding decision-making. Collaborated with teams to fix software issues, improving system stability. Managed network operations, user onboarding, and security updates. Worked with Swagger APIs for dealing with APIs. Diagnosed and resolved performance issues, maintaining efficient network services.",
    },
    {
      date: "16/09/2020 - 07/09/2021",
      position: "Software Engineer",
      company: "Talrop - Cochin",
      description:
        "Developed full-stack web and app solutions using HTML, CSS, JS, BS4, jQuery, React, Django, React Native, Git. Designed and optimized databases for improved application efficiency. Collaborated with teams to identify and resolve software bugs.",
    },
  ];

  const educationData = [
    {
      date: "01/08/2016 - 04/08/2020",
      degree: "Bachelor of Engineering in Computer Science",
      institution: "T John Institute of Technology, VTU, Bangalore",
      details:
        "CGPA: 6.73 | FYP: Automatic Code Generator using Speech Recognition",
    },
  ];

  const skillsData = [
    "Programming: Java, C#, Python, JavaScript, C, PHP",
    "Web Technologies: HTML, CSS, BS4, jQuery, React JS, Django, ASP .NET, ADO .NET, MVC, Core",
    "App Technologies: Android(Java), React Native",
    "Tools: VS Code, Git, Jira, ServiceNow, MS Office, VMware",
    "AI and ML: Machine Learning, ChatGPT",
    "Platforms: Windows, Linux, Mac",
    "Database: MS SQL, MySQL, PostgreSQL",
  ];

  const projectsData = [
    {
      name: "Tegain CRM CRUD App— Django",
      description: "A CRM web app for managing projects, clients, and tasks.",
    },
    {
      name: "Supermarket Web App— Django",
      description:
        "A supermarket web app for managing items, users, and cart functionalities.",
    },
    {
      name: "GETS Cab Booking App— React Native",
      description:
        "A user-friendly mobile app for booking cabs based on the user's location.",
    },
    {
      name: "GETS Workers App— React Native",
      description:
        "A versatile mobile app for labor management and hiring for various job roles.",
    },
    {
      name: "Gets Tracker App - Android (Java)",
      description:
        "A tracker app built for a client for their respective services.",
    },
  ];

  const achievementsData = [
    "Recognized by CTIO Team, received the 'Real Saviour' badge twice for outstanding project support.",
    "Enhanced efficiency of Talrop CRM Software by 50% through bug removal.",
    "Certified Responsive Web Design - (freeCodeCamp)",
    "Lex Infosys Courses and Certifications",
    "Introduction and Intermediate to C# - (Sololearn)",
    "Qualified Infosys Java Certified Programmer",
  ];

  const languagesData = ["English", "Malayalam", "Hindi", "Arabic"];

  const interestsData = ["Coding", "Chess", "Football", "Learning"];

  return (
    <>
      <div
        style={{ backgroundColor: "#000", paddingTop: 20, paddingBottom: 30 }}
      >
        <ResumeTitle>
          My Resume <FontAwesomeIcon icon={faFileAlt} />
        </ResumeTitle>
        <Slide left>
          <ResumeContainer>
            <ResumeHeaderContainer>
              <ResumePhoto
                src={require("../assets/images/safaf-photos/safaf-pp.png")}
                alt="Safaf Photo"
              />
              <ResumeHeader>
                <Name>Mohammed Safaf PT</Name>
                <ContactInfo>
                  (+91) 8606352583 | developer.safaf@gmail.com
                </ContactInfo>
                <Links>
                  <a
                    href="https://github.com/thedevsafaf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/mohammed-safaf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </Links>
              </ResumeHeader>
            </ResumeHeaderContainer>

            <ResumeSummary>
              <SummaryTitle>
                Experienced Software Engineer | 3 Years Experience
              </SummaryTitle>
              <SummaryText>
                Dedicated Software Engineer with 3 years of professional
                experience, including 1.7 years at Infosys. Skilled in Web, App
                Development, AI technologies, Power Platform, SharePoint Online,
                and proficient in multiple programming languages such as C#,
                Java, Python, JS. Currently transitioning to a full-stack ASP
                .NET developer, committed to delivering quality solutions and
                driving innovation.
              </SummaryText>
            </ResumeSummary>
            <ResumeExperience>
              <ExperienceTitle>Experience</ExperienceTitle>
              {experienceData.map((item, index) => (
                <ExperienceItem key={index}>
                  <ExperienceDate>{item.date}</ExperienceDate>
                  <ExperiencePosition>{item.position}</ExperiencePosition>
                  <ExperienceCompany>{item.company}</ExperienceCompany>
                  <ExperienceDescription>
                    {item.description}
                  </ExperienceDescription>
                </ExperienceItem>
              ))}
            </ResumeExperience>

            <ResumeEducation>
              <EducationTitle>Education</EducationTitle>
              {educationData.map((item, index) => (
                <EducationItem key={index}>
                  <EducationDate>{item.date}</EducationDate>
                  <EducationDegree>{item.degree}</EducationDegree>
                  <EducationInstitution>
                    {item.institution}
                  </EducationInstitution>
                  <EducationDetails>{item.details}</EducationDetails>
                </EducationItem>
              ))}
            </ResumeEducation>

            <ResumeSkills>
              <SkillsTitle>Skills</SkillsTitle>
              <SkillsList>
                {skillsData.map((skill, index) => (
                  <SkillItem key={index}>
                    {/* to make these headings bolder */}
                    <strong>{skill.split(":")[0]}:</strong>{" "}
                    {skill.split(":")[1]}
                  </SkillItem>
                ))}
              </SkillsList>
            </ResumeSkills>

            <ResumeProjects>
              <ProjectsTitle>Projects</ProjectsTitle>
              {projectsData.map((project, index) => (
                <ProjectItem key={index}>
                  <ProjectName>{project.name}</ProjectName>
                  <ProjectDescription>{project.description}</ProjectDescription>
                </ProjectItem>
              ))}
            </ResumeProjects>

            <ResumeAchievements>
              <AchievementsTitle>Achievements & Awards</AchievementsTitle>

              {achievementsData.map((achievement, index) => (
                <AchievementItem key={index}>
                  <AchievementDescription>
                    <AchievementsList>{achievement}</AchievementsList>
                  </AchievementDescription>
                </AchievementItem>
              ))}
            </ResumeAchievements>

            <ResumeLanguages>
              <LanguagesTitle>Languages</LanguagesTitle>
              <LanguagesList>
                {languagesData.map((language, index) => (
                  <LanguageItem key={index}>{language}</LanguageItem>
                ))}
              </LanguagesList>
            </ResumeLanguages>

            <ResumeInterests>
              <InterestsTitle>Interests</InterestsTitle>
              <InterestsList>
                {interestsData.map((interest, index) => (
                  <InterestItem key={index}>{interest}</InterestItem>
                ))}
              </InterestsList>
            </ResumeInterests>
          </ResumeContainer>
        </Slide>
      </div>
      <Footer />
    </>
  );
}

const ResumeTitle = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 30px;
`;

const ResumeContainer = styled.div`
  background-color: #fff;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px 20px 30px 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 20px;

  @media (min-width: 576px) {
    padding: 20px;
  }
`;

const ResumeHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px double #000;
  padding-bottom: 20px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ResumePhoto = styled.img`
  max-width: 75px;
  height: auto;
  border-radius: 50%;
  margin-right: 30px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ResumeHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const Name = styled.div`
  font-size: 24px;
`;

const ContactInfo = styled.div`
  font-size: 14px;
`;

const Links = styled.div`
  font-size: 16px;
  color: #333;
  a {
    text-decoration: none;
    color: #0088ff;
    margin-right: 10px;
  }
`;

const ResumeSummary = styled.div`
  margin-top: 20px;
`;

const SummaryTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const SummaryText = styled.p`
  font-size: 16px;
`;

const ResumeExperience = styled.div`
  margin-top: 20px;
`;

const ExperienceTitle = styled.h2`
  font-size: 20px;
  border-bottom: 2px solid #0088ff;
  padding-bottom: 10px;
`;

const ExperienceItem = styled.div`
  margin: 10px 0;
`;

const ExperienceDate = styled.div`
  font-weight: bold;
`;

const ExperiencePosition = styled.div`
  font-size: 18px;
`;

const ExperienceCompany = styled.div`
  color: #0088ff;
`;

const ExperienceDescription = styled.p`
  font-size: 16px;
`;

const ResumeEducation = styled.div`
  margin-top: 20px;
`;

const EducationTitle = styled.h2`
  font-size: 20px;
  border-bottom: 2px solid #0088ff;
  padding-bottom: 10px;
`;

const EducationItem = styled.div`
  margin: 10px 0;
`;

const EducationDate = styled.div`
  font-weight: bold;
`;

const EducationDegree = styled.div`
  font-size: 18px;
`;

const EducationInstitution = styled.div`
  color: #0088ff;
`;

const EducationDetails = styled.p`
  font-size: 16px;
`;

const ResumeSkills = styled.div`
  margin-top: 20px;
`;

const SkillsTitle = styled.h2`
  font-size: 20px;
  border-bottom: 2px solid #0088ff;
  padding-bottom: 10px;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  font-size: 16px;
  margin: 10px 0;
`;

const ResumeProjects = styled.div`
  margin-top: 20px;
`;

const ProjectsTitle = styled.h2`
  font-size: 20px;
  border-bottom: 2px solid #0088ff;
  padding-bottom: 10px;
`;

const ProjectItem = styled.div`
  margin: 10px 0;
`;

const ProjectName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
`;

const ResumeAchievements = styled.div`
  margin-top: 20px;
`;

const AchievementsList = styled.li`
  font-size: 14px;
`;

const AchievementsTitle = styled.h2`
  font-size: 20px;
  border-bottom: 2px solid #0088ff;
  padding-bottom: 10px;
`;

const AchievementItem = styled.div`
  margin: 10px 0;
`;

const AchievementDescription = styled.p`
  font-size: 16px;
`;

const ResumeLanguages = styled.div`
  margin-top: 20px;
`;

const LanguagesTitle = styled.h2`
  font-size: 20px;
  border-bottom: 2px solid #0088ff;
  padding-bottom: 10px;
`;

const LanguagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const LanguageItem = styled.div`
  margin: 10px 0;
`;

const ResumeInterests = styled.div`
  margin-top: 20px;
`;

const InterestsTitle = styled.h2`
  font-size: 20px;
  border-bottom: 2px solid #0088ff;
  padding-bottom: 10px;
`;

const InterestsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const InterestItem = styled.div`
  margin: 10px 0;
`;

export default Resume;
