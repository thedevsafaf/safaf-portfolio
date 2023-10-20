import React, { useState } from "react";
import styled from "styled-components";
import ProjectDetails from "./ProjectDetails";
import Footer from "./Footer";
import { Rotate } from "react-reveal";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

const projectsData = [
  {
    title: "Hostel Management System",
    image: "projects/hms.png",
    techStack: ["ASP .NET", "MS SQL"],
    description:
      "This project is about managing hostels using ASP .NET and MS SQL.",
    image1: "projects/hms-1.png",
  },
  {
    title: "School Management System",
    image: "projects/sms.png",
    techStack: ["ASP .NET", "MS SQL"],
    description:
      "This project is about managing hostels using ASP .NET MVC Core, Entity Framework and MS SQL.",
    image1: "projects/sms-1.png",
  },
  {
    title: "React JS Portfolio Web App",
    image: "projects/spf.png",
    techStack: ["React"],
    description: "This is a personal portfolio app project using React JS.",
    image1: "projects/spf-1.png",
  },
  {
    title: "Blog Web App",
    image: "projects/blg.png",
    techStack: ["Django", "PostgreSQL"],
    description: "This is a personal blog web app project using Python Django.",
    image1: "projects/blg-1.png",
  },
  {
    title: "Employee Management System",
    image: "projects/ems.png",
    techStack: ["Django", "SQLite"],
    description:
      "This is an Employee Management System with CRUD using Python Django",
    image1: "projects/ems-1.png",
  },
  {
    title: "Weather Website using API",
    image: "projects/wthr.png",
    techStack: ["JavaScript"],
    description:
      "To find the climate on different World cities using OpenWeatherMap API",
    image1: "projects/wthr-1.png",
  },
  {
    title: "Vehicle Count Predictor - ML",
    image: "projects/vhcl-cnt-ml.png",
    techStack: ["Python", "ML"],
    description:
      "A ML Project deals with sensor data given with a timestamp and predict the vehicle count at a particular time frame.",
    image1: "projects/vhcl-cnt-ml-1.png",
  },
  {
    title: "Sports Predictor ML Model",
    image: "projects/sp1.png",
    techStack: ["Django", "ML", "SQLite"],
    description:
      "This ML Django Web App helps you discover your ideal sports based on your age, height, and gender",
    image1: "projects/sp2.png",
  },
  {
    title: "Inventory Dashboard - Power BI",
    image: "projects/inventory-pbi.png",
    techStack: ["Power Platform", "MS Excel"],
    description: "An Inventory Dashboard for BAU created in Microsoft Power BI",
    image1: "projects/inventory-pbi-1.png",
  },
  {
    title: "Sales Dashboard - Power BI",
    image: "projects/sales-pbi.png",
    techStack: ["Power Platform", "MS Excel"],
    description: "A Sales Dashboard for BAU created in Microsoft Power BI",
    image1: "projects/sales-pbi-1.png",
  },
  {
    title: "Expense Tracker - Power Apps",
    image: "projects/exp-tracker.png",
    techStack: ["Power Platform", "Collections"],
    description:
      "An expense tracking app for Employees in Organization using Microsoft Power Apps",
    image1: "projects/exp-tracker-1.png",
  },
  {
    title: "Products App - Power Apps",
    image: "projects/prod-app.png",
    techStack: ["Power Platform", "MS Excel"],
    description:
      "A Product management app for organization created using Microsoft Power Apps",
    image1: "projects/prod-app-1.png",
  },
  {
    title: "Employee Portal - Power Apps",
    image: "projects/emp-portal.png",
    techStack: ["Power Platform", "SharePoint"],
    description:
      "An Employee Portal for organization created using Microsoft Power Apps",
    image1: "projects/emp-portal-1.png",
  },
  {
    title: "Projects App - Power Apps",
    image: "projects/proj-mgmt-app.png",
    techStack: ["Power Platform", "SharePoint"],
    description:
      "A Project management app for organization created using Microsoft Power Apps",
    image1: "projects/proj-mgmt-app-1.png",
  },
  {
    title: "Temperature App - Power Apps",
    image: "projects/temp-app.png",
    techStack: ["Power Platform"],
    description:
      "A temperature converter app for organization created using Microsoft Power Apps",
    image1: "projects/temp-app-1.png",
  },

  {
    title: "Org Website - Power Pages",
    image: "projects/zafe-website.png",
    techStack: ["Power Platform"],
    image1: "projects/zafe-website-1.png",
  },

  {
    title: "Auto Email - Power Automate",
    image: "projects/automate-email.png",
    techStack: ["Power Platform", "MS Outlook"],
    description:
      "Sending Automated Emails at every 2 mins using Power Automate(Scheduled Cloud Flow)",
    image1: "projects/automate-email-1.png",
  },

  {
    title: "Text To Speech Application",
    image: "projects/tts.png",
    techStack: ["Python"],
    description:
      "A TTS Desktop Application developed using Python GUI Library tkinter",
    image1: "projects/tts-1.png",
  },
  {
    title: "Task Management System",
    image: "projects/tms.png",
    techStack: ["Django", "PostgreSQL"],
    description:
      "A Task Management Web App developed using Python Django and PostgreSQL",
    image1: "projects/tms-1.png",
  },
  {
    title: "Techpe CRM",
    image: "projects/crm-app.png",
    techStack: ["Django", "Bootstrap", "PSQL"],
    description:
      "A CRM Web App developed using Python Django and PostgreSQL for managing the Projects, Tasks and the Clients.",
    image1: "projects/crm-app1.jpg",
  },

  {
    title: "Food Ordering App with API",
    image: "projects/food-app.png",
    techStack: ["React Native", "Django", "PSQL"],
    image1: "projects/food-app-1.jpg",
    description:
      "React Native mobile app for food ordering with Django backend and integrated APIs",
  },
  {
    title: "Gets Cab Booking App",
    image: "projects/getscab.png",
    techStack: ["React Native", "PHP", "MySQL"],
    image1: "projects/getscab-1.png",
    description:
      "React Native mobile app for food ordering with Django backend and integrated APIs",
  },
  {
    title: "Gets Workers App",
    image: "projects/getsworkers.png",
    techStack: ["React Native", "PHP", "MySQL"],
    image1: "projects/getsworkers-1.png",
    description:
      "React Native mobile app for food ordering with Django backend and integrated APIs",
  },
];

const Title = styled.h2`
  color: white;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const PortfolioContainer = styled.div`
  padding: 10px 20px 80px 20px;
  background-color: #000;

  @media (min-width: 768px) {
    padding: 10px 40px 80px 40px;
  }
`;

const TabContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  gap: 10px; 
  margin-bottom: 30px;
`;

const Tab = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? " #0088ff" : "#111")};
  color: ${(props) => (props.active ? "white" : " #0088ff")};
`;

const ProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProjectCard = styled.div`
  background-color: #050708;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: 280px;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 16px;
  color: #fff;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const TechStack = styled.p`
  font-weight: bold;
  color: #99a3a7;
  font-size: 14px;
`;

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filterProjects = (tech) => {
    if (tech === "All") {
      return projectsData;
    }
    return projectsData.filter((project) => project.techStack.includes(tech));
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project); // Set the selected project when clicked
  };

  const closeProjectDetails = () => {
    setSelectedProject(null); // Close the project details
  };

  return (
    <>
      <PortfolioContainer>
        <Title>
          My Projects <FontAwesomeIcon icon={faLaptop} />
        </Title>
        <TabContainer>
          <Tab active={activeTab === "All"} onClick={() => setActiveTab("All")}>
            All
          </Tab>
          <Tab
            active={activeTab === "React"}
            onClick={() => setActiveTab("React")}
          >
            React
          </Tab>
          <Tab
            active={activeTab === "ASP .NET"}
            onClick={() => setActiveTab("ASP .NET")}
          >
            ASP .NET
          </Tab>
          <Tab
            active={activeTab === "Django"}
            onClick={() => setActiveTab("Django")}
          >
            Django
          </Tab>
          <Tab
            active={activeTab === "Power Platform"}
            onClick={() => setActiveTab("Power Platform")}
          >
            Power Platform
          </Tab>
          <Tab
            active={activeTab === "React Native"}
            onClick={() => setActiveTab("React Native")}
          >
            React Native
          </Tab>
          <Tab
            active={activeTab === "Python"}
            onClick={() => setActiveTab("Python")}
          >
            Python
          </Tab>
          {/* Add more tabs for other tech stacks */}
        </TabContainer>
        <ProjectsList>
          {filterProjects(activeTab).map((project, index) => (
            <Rotate bottom right>
              <ProjectCard
                key={index}
                onClick={() => openProjectDetails(project)}
              >
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectImage src={project.image} alt={project.title} />
                <TechStack>Stack: {project.techStack.join(", ")}</TechStack>
              </ProjectCard>
            </Rotate>
          ))}
        </ProjectsList>
        <ProjectDetails
          project={selectedProject}
          onClose={closeProjectDetails}
        />
      </PortfolioContainer>
      <Footer />
    </>
  );
};

export default Portfolio;
