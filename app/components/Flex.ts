"use client";
import { styled } from "styled-components";

interface FlexProps {
  height?: string;
}

export const Flex = styled.div<FlexProps>`
  width: 100%;
  height: ${(props) => props.height || "auto"};
`;
