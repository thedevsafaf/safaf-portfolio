import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavbarContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #050708;
  color: white;
  padding: 20px 40px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const NavbarLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-weight: bold;
  font-size: 18px;

  &.active {
    color: #0088ff;
  }

  &:hover {
    color: #455;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Left>
        <NavLink to="/" style={{ color: "#0088ff", textDecoration: "none" }}>
          <h2>safaf.dev</h2>
        </NavLink>
      </Left>
      <Right>
        <NavbarLink exact to="/" activeClassName="active">
          Home
        </NavbarLink>
        <NavbarLink to="/about" activeClassName="active">
          About
        </NavbarLink>
        <NavbarLink to="/skills" activeClassName="active">
          Skills
        </NavbarLink>
        <NavbarLink to="/services" activeClassName="active">
          Services
        </NavbarLink>
        <NavbarLink to="/resume" activeClassName="active">
          Resume
        </NavbarLink>
        <NavbarLink to="/qualifications" activeClassName="active">
          Qualifications
        </NavbarLink>
        <NavbarLink to="/portfolio" activeClassName="active">
          Portfolio
        </NavbarLink>
        <NavbarLink to="/contact" activeClassName="active">
          Contact
        </NavbarLink>
      </Right>
    </NavbarContainer>
  );
};

export default Navbar;
