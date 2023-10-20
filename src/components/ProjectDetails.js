// ProjectDetails.js
import React from "react";
import styled from "styled-components";

const ProjectDetailsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ProjectDetailsContainer = styled.div`
  padding: 20px;
  background-color: white;
`;

const CloseButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h2`
  font-size: 24px;
`;

const ProjectImage = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 20px 0;
`;

const TechStack = styled.p`
  font-weight: bold;
  margin-bottom: 20px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ProjectDetails = ({ project, onClose }) => {
  if (!project) {
    return null;
  }

  const { title, techStack, description, image1 } = project;

  return (
    <ProjectDetailsOverlay>
      <ProjectDetailsContainer>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectImage src={image1} alt={title} />
        <TechStack>Stack: {techStack.join(", ")}</TechStack>
        <ProjectDescription>{description}</ProjectDescription>
        {/* Add more project details here */}
      </ProjectDetailsContainer>
    </ProjectDetailsOverlay>
  );
};

export default ProjectDetails;
