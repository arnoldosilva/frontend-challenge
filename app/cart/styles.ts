import { themeColors } from "@/styles/COLORS";
import styled from "styled-components";

export const Container = styled.main`
  background-color: ${themeColors.background};
  display: flex;
  gap: 20px;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px 100px;
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
