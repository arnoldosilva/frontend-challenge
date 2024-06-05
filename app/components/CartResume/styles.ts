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
  margin-top: 20;
  background-color: ${themeColors.white};
  padding: 15px;
  float: right;
  justify-content: space-around;
  max-height: 800px;
`;

export const Divider = styled.hr`
  border: 1px solid ${themeColors.primary};
  width: 100%;
`;

export const Line = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`;

export const BuyButton = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${themeColors.success};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
`;
