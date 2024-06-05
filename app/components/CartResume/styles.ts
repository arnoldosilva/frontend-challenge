"use client";
import { themeColors } from "@/styles/COLORS";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 20px;
`;

export const CartProductListContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
`;
export const CartResumeListContainer = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  gap: 10px;
  margin-top: 20;
  background-color: ${themeColors.white};
  height: 100%;
`;
