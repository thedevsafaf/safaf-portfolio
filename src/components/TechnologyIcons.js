import React from "react";
import styled from "styled-components";

const IconsContainer = styled.div`
  padding: 10px 60px 60px 60px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #050708;
  border-radius: 8px;

  @media (max-width: 480px) {
    padding: 10px 20px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const IconCard = styled.div`
  background-color: #111;
  border-radius: 8px;
  padding: 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: 72px;
  text-align: center;

  &:hover {
    background-color: #fff;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const IconImage = styled.img`
  max-width: 50%;
  height: auto;
  margin: 10px 0 10px 0;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const technologyIcons = [
  { title: "C#", image: "tech-icons/csharp.png" },
  { title: "Python", image: "tech-icons/python.gif" },
  { title: "Java", image: "tech-icons/java.gif" },
  { title: "JavaScript", image: "tech-icons/js.gif" },
  { title: "PHP", image: "tech-icons/php.png" },
  { title: "C", image: "tech-icons/c.png" },
  { title: "C++", image: "tech-icons/cpp.png" },

  { title: "Django", image: "tech-icons/django.png" },
  { title: "ASP .NET", image: "tech-icons/dotnet.png" },
  { title: "React JS", image: "tech-icons/react.gif" },
  { title: "React Native", image: "tech-icons/react-native.gif" },
  { title: "Android", image: "tech-icons/android.gif" },

  { title: "HTML", image: "tech-icons/html.png" },
  { title: "CSS", image: "tech-icons/css.png" },
  { title: "Bootstrap", image: "tech-icons/bootstrap.png" },
  { title: "jQuery", image: "tech-icons/jquery.png" },
  { title: "npm", image: "tech-icons/npm.png" },

  { title: "Citrix", image: "tech-icons/citrix.png" },
  { title: "ssh", image: "tech-icons/ssh.png" },
  { title: "VMware", image: "tech-icons/vmware.png" },
  { title: "ServiceNow", image: "tech-icons/servicenow.png" },

  { title: "Machine Learning", image: "tech-icons/ml.gif" },
  { title: "ChatGPT", image: "tech-icons/chatgpt.png" },
  { title: "Visual Studio", image: "tech-icons/code.png" },

  { title: "MySQL", image: "tech-icons/mysql.png" },
  { title: "MSSQL Server", image: "tech-icons/mssqlserver.png" },
  { title: "PostgreSQL", image: "tech-icons/postgresql.png" },
  { title: "Google Firebase", image: "tech-icons/firebase.png" },

  { title: "SharePoint", image: "tech-icons/sharepoint.png" },
  { title: "Power BI", image: "tech-icons/powerbi.png" },
  { title: "Power Apps", image: "tech-icons/powerapps.png" },
  { title: "Power Automate", image: "tech-icons/powerautomate.png" },

  { title: "Office 365", image: "tech-icons/office-365.png" },
  { title: "Windows", image: "tech-icons/windows.png" },
  { title: "Linux", image: "tech-icons/linux.png" },
];

const TechnologyIcons = () => {
  return (
    <div style={{ paddingBottom: 50 }}>
      <IconsContainer>
        <Title>Tools & Technologies</Title>
        <CardContainer>
          {technologyIcons.map((icon, index) => (
            <IconCard key={index} title={icon.title}>
              <IconImage src={icon.image} alt={icon.title} />
            </IconCard>
          ))}
        </CardContainer>
      </IconsContainer>
    </div>
  );
};

export default TechnologyIcons;
