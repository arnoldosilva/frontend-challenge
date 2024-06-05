"use client";
import { themeColors } from "@/styles/COLORS";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: ${themeColors.black};
  opacity: 0.8;
`;
