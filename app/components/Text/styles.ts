import { themeColors } from "@/styles/COLORS";
import styled from "styled-components";
import { TextProps } from ".";

export const Text = styled.p<TextProps>`
  color: ${(props) => props.color ?? themeColors.primary};
  font-size: ${(props) => (props?.fontSize ? `${props.fontSize}em` : "1.5em")};
  justify-content: "center";
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
  font-weight: ${(props) => props.weight ?? "200"};
`;
