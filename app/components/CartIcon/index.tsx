import React from "react";
import * as S from "./styles";
import { FaShoppingBag } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface CartIconProps {
  quantity: number;
}

export default function index({ quantity = 0 }: CartIconProps) {
  const router = useRouter();

  return (
    <S.Container onClick={() => router.push("/cart")}>
      <FaShoppingBag size={24} />
      {quantity > 0 && <S.Quantity>{quantity}</S.Quantity>}
    </S.Container>
  );
}
