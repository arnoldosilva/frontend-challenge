"use client";
import { styled } from "styled-components";
import { ButtonMenuProps } from ".";

export const Container = styled.button`
  background-color: transparent;
  min-width: fit-content;

  border: none;
  cursor: pointer;
  justify-content: center;
  &:hover {
    background-color: "transparent";
  }
  align-items: center;
  flex-direction: column;
`;

export const Selected = styled.div`
  height: 5px;
  width: 100%;
  margin-top: 5px;
  background-color: orange;
`;
