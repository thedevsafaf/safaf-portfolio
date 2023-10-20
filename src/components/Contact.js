import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Title = styled.h2`
  color: white;
  text-align: center;
  font-size: 24px;
`;

const ContactContainer = styled.div`
  padding: 20px 60px 40px 60px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #000;
  border-radius: 8px;
  margin-bottom: 30px;
  color: #99a3a7;
`;

const ContactTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #99a3a7;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:hover {
    outline: 2px solid #007acc;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #99a3a7;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:hover {
    outline: 2px solid #007acc;
  }
`;

const SubmitButton = styled.button`
  background-color: #007acc;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <>
      <div style={{ backgroundColor: "#050708", padding: 10 }}>
        <Title>
          Contact Me <FontAwesomeIcon icon={faPhone} />
        </Title>
        <ContactContainer>
          <ContactTitle>Get in Touch</ContactTitle>
          <ContactForm>
            <FormField>
              <Label>Your Name:</Label>
              <Input type="text" />
            </FormField>
            <FormField>
              <Label>Email Address:</Label>
              <Input type="email" />
            </FormField>
            <FormField>
              <Label>Message:</Label>
              <TextArea rows="3"></TextArea>
            </FormField>
            <SubmitButton>Submit</SubmitButton>
          </ContactForm>
        </ContactContainer>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
