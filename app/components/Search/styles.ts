"use client";
import { styled } from "styled-components";

export const Form = styled.div`
  @media (max-width: 768px) {
    min-width: 100%;
    order: 1;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  width: 200;
  font-size: 14;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 20px;
`;
