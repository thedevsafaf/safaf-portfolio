//Services.js
import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import BuyMeACoffee from "./BuyMeACoffee";
import { Slide } from "react-reveal";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faDesktop,
  faCode,
  faBriefcase,
  faGlobe,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <>
      <ServicesContainer>
        <Slide right>
          <TitleContainer>
            <Title>My Services 🛠</Title>
          </TitleContainer>
          <ServiceCardContainer>
            {/* Add your service cards here */}
            <ServiceCard>
              <ServiceIcon>
                <FontAwesomeIcon icon={faLaptop} />
              </ServiceIcon>
              <ServiceTitle>UI, UX Design</ServiceTitle>
              <ServiceDescription>
                Create intuitive and visually appealing user interfaces that
                enhance the user experience through thoughtful design.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceIcon>
                <FontAwesomeIcon icon={faDesktop} />
              </ServiceIcon>
              <ServiceTitle>Front End Development</ServiceTitle>
              <ServiceDescription>
                Develop the client-side of web applications, making websites
                interactive and engaging for users through HTML, CSS, and
                JavaScript.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceIcon>
                <FontAwesomeIcon icon={faCode} />
              </ServiceIcon>
              <ServiceTitle>Back End Development </ServiceTitle>
              <ServiceDescription>
                Handle the server-side of web applications, managing databases,
                server logic, and ensuring the smooth functioning of websites.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceIcon>
                <FontAwesomeIcon icon={faBriefcase} />
              </ServiceIcon>
              <ServiceTitle>Power Platform</ServiceTitle>
              <ServiceDescription>
                Leverage the Microsoft Power Platform to build customized
                business solutions, automate workflows, and gain insights from
                data.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceIcon>
                <FontAwesomeIcon icon={faGlobe} />
              </ServiceIcon>
              <ServiceTitle>Hosting & Maintenance</ServiceTitle>
              <ServiceDescription>
                Reliable hosting and ongoing maintenance services to ensure your
                website or application remains accessible and up-to-date.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceIcon>
                <FontAwesomeIcon icon={faHandsHelping} />
              </ServiceIcon>
              <ServiceTitle>Support & Guidance</ServiceTitle>
              <ServiceDescription>
                Get expert guidance and support for your digital projects,
                helping you navigate challenges and make informed decisions.
              </ServiceDescription>
            </ServiceCard>
          </ServiceCardContainer>
        </Slide>
      </ServicesContainer>
      <BuyMeACoffee />
      <Footer />
    </>
  );
}

const ServicesContainer = styled.div`
  background-color: #000;
  padding: 20px 80px 80px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ServiceCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ServiceCard = styled.div`
  background-color: #050708;
  border-radius: 8px;
  padding: 20px;
  width: calc(33.33% - 75px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 980px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ServiceIcon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  color: #0088ff;
`;

const ServiceTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #99a3a7;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

export default Services;
