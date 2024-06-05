"use client";
import { themeColors } from "@/styles/COLORS";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  cursor: pointer;
`;

export const Quantity = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  bottom: -10px;
  left: -10px;
  font-size: 12px;
  color: ${themeColors.white};
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${themeColors.warning};
`;
