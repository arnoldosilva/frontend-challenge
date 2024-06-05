"use client";
import { styled } from "styled-components";

export const Form = styled.form`
  color: #f3f5f4;
  display: flex;
  padding: 2px;
  border: 1px solid currentColor;
  border-radius: 5px;
`;
export const Input = styled.input`
  color: #333;
  background: #f3f5f4;
  margin: 0;
  min-width: 250px;
  padding: 7px 8px;
  font-size: 14px;
  border: solid transparent;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #f3f5f4;
  color: #333;
  border: none;
  padding: 7px 8px;
  cursor: pointer;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 20px;
`;
