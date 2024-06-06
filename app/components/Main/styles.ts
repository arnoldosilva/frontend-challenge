"use client";
import { themeColors } from "@/styles/COLORS";
import styled from "styled-components";

export const Container = styled.main`
  background-color: ${themeColors.background};
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 20px clamp(5px, 5%, 200px);
`;
