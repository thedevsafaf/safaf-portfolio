// Button.js
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "#242525")};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  width: 30%;
  margin-bottom: 10px;

  /* Add a hover effect */
  &:hover {
    background-color: ${(props) => (props.primary ? "darkblue" : "#333")};
    letter-spacing: 2px;
  }

  @media (max-width: 352px) {
    width: 35%;
  }

  @media (max-width: 352px) {
    width: 40%;
  }
`;

export default Button;
