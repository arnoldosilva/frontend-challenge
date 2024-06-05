"use client";
import { themeColors } from "@/styles/COLORS";
import { styled } from "styled-components";

export const Container = styled.header`
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 100px;
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
