"use client";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px clamp(5px, 5%, 200px);
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  justify-self: center;
  padding-right: 50px;
`;
