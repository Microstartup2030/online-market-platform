import React from "react";
import styled from "styled-components";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegUser, FaRegHeart, FaRegEye } from "react-icons/fa";

const TopHalf = styled.div`
  position: relative;
`;
const ImageDiv = styled.div`
  width: 19.8rem;
  height: 19.8rem;
`;
const Img = styled.img`
  width: 100%;
`;
const Icon = styled.div`
  height: 35px;
  width: 35px;
  position: absolute;
  bottom: -16px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f7f7f8;
  border: 1px solid #e9e9e9;
  background-color: aliceblue;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    color: var(--color-green-400);
    cursor: pointer;
  }
`;
const SidedIcons = styled.div`
  position: absolute;
  right: -3rem;
  top: 0;
  transition: 0.5s ease-in-out;

  & ${Icon}:first-child {
    top: 1rem;
  }
  & ${Icon}:last-child {
    top: 5.2rem;
  }
  & svg {
    color: black;
    cursor: pointer;
  }
`;
const StyledBasicCard = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding: 1.2rem;
  border: 1px solid #e9e9e9;
  background-color: #fff;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  &:hover ${SidedIcons} {
    right: 3rem;
  }
`;
const BasicCard = () => {
  return (
    <StyledBasicCard>
      <TopHalf>
        <ImageDiv>
          <Img src="./products/1.jpg" />
        </ImageDiv>
        <SidedIcons>
          <Icon>
            <FaRegHeart />
          </Icon>
          <Icon>
            <FaRegEye />
          </Icon>
        </SidedIcons>
        <Icon>
          <RiShoppingBagLine />
        </Icon>
      </TopHalf>
    </StyledBasicCard>
  );
};

export default BasicCard;
