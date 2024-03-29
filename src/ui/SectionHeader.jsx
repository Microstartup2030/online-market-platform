import React from "react";
import Heading from "./Heading";
import Description from "./Description";
import styled from "styled-components";

const StyledSectionHeader = styled.div`
  margin: auto !important;

  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  text-align: center;
`;
const SectionHeader = ({ children }) => {
  return <StyledSectionHeader>{children}</StyledSectionHeader>;
};
const HeaderHead = ({ children }) => {
  return <Heading as="h2">{children}</Heading>;
};
const HeaderDescription = ({ children }) => {
  return <Description>{children}</Description>;
};
SectionHeader.HeaderHead = HeaderHead;
SectionHeader.HeaderDescription = HeaderDescription;
export default SectionHeader;
