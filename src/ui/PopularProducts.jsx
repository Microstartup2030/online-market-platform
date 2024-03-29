import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Row from "./Row";
import SectionHeader from "./SectionHeader";
import BasicCard from "./BasicCard";
const StyledPopularProducts = styled.section``;
const PopularProducts = () => {
  return (
    <StyledPopularProducts>
      <Container>
        <Row>
          <SectionHeader>
            <SectionHeader.HeaderHead>
              Popular Products
            </SectionHeader.HeaderHead>
            <SectionHeader.HeaderDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore lacus vel facilisis.
            </SectionHeader.HeaderDescription>
          </SectionHeader>
        </Row>
        <Row>
          <BasicCard />
        </Row>
      </Container>
    </StyledPopularProducts>
  );
};

export default PopularProducts;
