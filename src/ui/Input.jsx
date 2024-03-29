import styled, { css } from "styled-components";

const Input = styled.input`
  width: 100%;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 1rem 1.7rem;
  border: 1px solid #e9e9e9;
  outline: none;
  box-shadow: var(--shadow-sm);
  font-size: 1.6rem;
  &::placeholder {
    font-size: 1.35rem;
  }
`;

export default Input;
