import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Row from "./Row";
import Heading from "./Heading";
import { Link } from "react-router-dom";
const Main = styled.main`
  background: url(./hero/banner-2.jpg) no-repeat;
  background-size: cover;
  height: calc(100vh - 13rem);
`;
const Content = styled.div`
  margin-top: 12rem;
`;
const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-bottom: 2rem;
`;
const Span = styled.span`
  color: var(--color-green-400);
  font-weight: bold;
  border-bottom: 2px solid var(--color-green-400);
  font-size: 2rem;
`;
const P = styled.p`
  font-size: 1.5rem;
  color: #7a7a7a;
  margin-bottom: 0;
  line-height: 1.75;
  letter-spacing: 0.5px;
`;
const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 3rem;
  font-family: "Manrope", sans-serif;

  padding: 0.8rem 2.2rem;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: capitalize;
  background-color: var(--color-green-400);
  color: #fff;
  border-radius: var(--border-radius-sm);

  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000;
  }
`;
const Hero = () => {
  return (
    <Main>
      <Container>
        <Row>
          <Content>
            <Tag>
              <Span>100%</Span>
              <Heading as="h5">Organic Fruits</Heading>
            </Tag>

            <Heading as="h1">
              Explore fresh &<br /> juicy fruits.
            </Heading>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              <br />
              reiciendis beatae consequuntur.
            </P>
            <StyledLink>Shop Now</StyledLink>
          </Content>
        </Row>
      </Container>
    </Main>
  );
};

export default Hero;
