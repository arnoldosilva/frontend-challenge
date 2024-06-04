import React from "react";
import * as S from "./styles";
import Link from "next/link";
import Search from "../Search";
import CartIcon from "../CartIcon";
import Logo from "./logo";

export default function index() {
  return (
    <S.Container>
      <Link href="/">
        <Logo />
      </Link>
      <S.Flex />
      <Search />
      <CartIcon />
    </S.Container>
  );
}
