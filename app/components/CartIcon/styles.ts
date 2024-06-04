"use client";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
`;

export const Quantity = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  bottom: -10px;
  left: -10px;
  font-size: 12px;
  color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: #991a26;
`;
