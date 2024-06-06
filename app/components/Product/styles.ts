import { themeColors } from "@/styles/COLORS";
import styled from "styled-components";

export const Container = styled.main`
  background-color: ${themeColors.background};
  display: flex;
  gap: 20px;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px clamp(5px, 5%, 50px);
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ProductImage = styled.img`
  display: flex;
  resize: both;
  max-width: 40vw;
  max-height: 50vh;
  min-width: 400px;
  flex-grow: 1;
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProductTitle = styled.h2`
  font-size: 2rem;
`;

export const ProductPrice = styled.h3`
  font-size: 1.5rem;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
`;

export const Button = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${themeColors.info};
  color: ${themeColors.background};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  &:hover {
    opacity: 0.8;
  }
`;
