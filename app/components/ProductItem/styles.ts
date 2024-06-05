import { themeColors } from "@/styles/COLORS";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  max-height: 230px;
  gap: 20px;
  background-color: ${themeColors.white};
  border-radius: 10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 100%;
`;

export const ProductImage = styled.img`
  display: flex;
  max-width: 230px;
  max-height: 230px;
  width: fit-content;
  height: fit-content;
  resize: both;
  border-radius: 10px 0 0 10px;
`;

export const ProductTitle = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
