"use client";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 30px;
  gap: 20px;
  align-items: baseline;
  @media (max-width: 768px) {
    justify-content: center;
    transition: all 0.5s;
  }
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const OrderContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
