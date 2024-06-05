import React from "react";
import * as S from "./styles";
import ProductsList from "./ProductsList";
import CartResume from "./CartResume";

export default function index() {
  return (
    <S.Container>
      <ProductsList />
      <CartResume />
    </S.Container>
  );
}
