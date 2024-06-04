import React from "react";
import * as S from "./styles";
import { FaShoppingBag } from "react-icons/fa";

interface CartIconProps {
  quantity: number;
}

export default function index({ quantity = 0 }: CartIconProps) {
  return (
    <S.Container>
      <FaShoppingBag size={24} />
      {quantity > 0 && <S.Quantity>{quantity}</S.Quantity>}
    </S.Container>
  );
}
