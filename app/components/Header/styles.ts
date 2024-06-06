"use client";
import { themeColors } from "@/styles/COLORS";
import { styled } from "styled-components";

export const Container = styled.header`
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px clamp(5px, 5%, 200px);
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const LogoName = styled.h1`
  font-size: 3em;
  color: ${themeColors.primary};
`;
