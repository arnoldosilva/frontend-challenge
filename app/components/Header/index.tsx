import React from "react";
import * as S from "./styles";
import Link from "next/link";
import Search from "../Search";
import CartIcon from "../CartIcon";

export default function index() {
  return (
    <S.Container>
      <Link href="/">Capputeeno</Link>
      <S.Flex />
      <Search />
      <CartIcon />
    </S.Container>
  );
}
