import { styled } from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  gap: 20px;
  max-width: 120px;
  background-color: transparent;
  &:hover {
    background-color: "transparent";
  }
  border: none;
  cursor: pointer;
`;

export const title = styled.h3`
  font-size: 1.5rem;
  align-self: center;
`;
