import { themeColors } from "@/styles/COLORS";
import { styled } from "styled-components";

interface ButtonProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 5px;
`;

export const Button = styled.button<ButtonProps>`
  background-color: transparent;
  align-items: center;
  height: 32px;
  width: 32px;
  color: ${themeColors.primary};
  border-style: solid;
  border-radius: 20%;
  border-color: ${(props) =>
    props.selected ? themeColors.secondary : "transparent"};
  background-color: ${(props) =>
    props.selected ? "transparent" : themeColors.gray};
  &:hover {
    background-color: "transparent";
  }
  cursor: pointer;
  font-family: var(--saira);
`;
