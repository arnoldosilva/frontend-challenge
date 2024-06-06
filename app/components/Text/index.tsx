import React from "react";
import { Saira } from "next/font/google";
import * as S from "./styles";

export interface TextProps {
  weight?: number;
  color?: string;
  uppercase?: boolean;
  fontSize?: string;
  children: React.ReactNode;
}
const saira_init = Saira({
  subsets: ["latin"],
  display: "swap",
  variable: "--saira",
  weight: "200",
});

export const Text = (props: TextProps) => {
  return (
    <S.Text {...props} className={saira_init.className}>
      {props.children}
    </S.Text>
  );
};
