import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Logo from "./Logo";
import Row from "./Row";
import HeaderMenus from "./HeaderMenus";
import HeaderLinks from "./HeaderLinks";
import IconLink from "./IconLink";
import { IoCallOutline } from "react-icons/io5";

const StyledHeader = styled.header``;
// const BorderDiv = styled.div`
//   padding: 2rem 0;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   &:first-child {
//     border-bottom: 1px solid var(--color-grey-400);
//   }
// `;
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Row position="header">
          {/* <BorderDiv> */}
          <Logo />
          <HeaderMenus />
          {/* </BorderDiv> */}
        </Row>
        <Row position="header">
          <HeaderLinks />
          <IconLink icon={<IoCallOutline />} name="+123 ( 456 ) ( 7890 )" />
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;
