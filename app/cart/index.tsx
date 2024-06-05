import React from "react";
import BackButtom from "@/components/BackButton";
import * as S from "./styles";
import { useCartStore } from "@/store/useCartStore";
import EmptyCart from "./empty";
import Cart from "@/components/CartResume";

export default function index() {
  const { cart } = useCartStore();

  return (
    <S.Container>
      <BackButtom />
      {cart.itens.length === 0 ? <EmptyCart /> : <Cart />}
    </S.Container>
  );
}
