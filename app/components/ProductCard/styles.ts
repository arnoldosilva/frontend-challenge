import { styled } from "styled-components";

import { Saira } from "next/font/google";

export const saira_init = Saira({
  subsets: ["latin"],
  display: "swap",
  variable: "--saira",
  weight: "600",
});

export const Container = styled.button`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #fff;
  border-radius: 3%;
  border: 0;
  cursor: pointer;
`;

export const Title = styled.h6`
  color: #605f66;
  font-size: 1em;
  margin: 0;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Price = styled.span`
  color: #605f66;
  font-size: 1.5em;
  font-family: var(--saira);
  font-weight: 600;
`;

export const Content = styled.div`
  padding: 10px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #605f66;
`;
