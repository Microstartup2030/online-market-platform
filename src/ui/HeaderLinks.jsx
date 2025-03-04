import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const StyledLink = styled(NavLink)`
  position: relative;

  padding: 1.1rem 0.8rem;

  font-size: 1.4rem;
  font-weight: 500;
  text-transform: capitalize;
  transition: all 0.3s;
  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 1px;
    visibility: hidden;
    transition: 0.3s;
    background-color: var(--color-green-400);
  }
  &:hover:after {
    color: black;
    visibility: visible;
    width: 100%;
  }
`;

const HeaderLinks = () => {
  return (
    <Nav>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/products">Products</StyledLink>
      <StyledLink to="/products">Home</StyledLink>
      <StyledLink to="/aboutus">About Us</StyledLink>
      <StyledLink to="/contactus">Contact Us</StyledLink>
      <StyledLink to="/policy">Policy</StyledLink>
    </Nav>
  );
};

export default HeaderLinks;
