import React from "react";
import Container from "./Container";
import Row from "./Row";
import ColoredCard from "./ColoredCard";
import styled from "styled-components";
const StyledColoredProducts = styled.section`
  padding: 10rem 0;
`;
const StyledCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
const ColoredProducts = () => {
  return (
    <StyledColoredProducts>
      <Container>
        <Row>
          <StyledCard>
            <ColoredCard />
            <ColoredCard />
            <ColoredCard />
          </StyledCard>
        </Row>
      </Container>
    </StyledColoredProducts>
  );
};

export default ColoredProducts;
