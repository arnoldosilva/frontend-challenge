import React from "react";
import * as S from "./styles";
import Link from "next/link";
import Search from "../Search";
import CartIcon from "../CartIcon";
import Logo from "./logo";
import { Flex } from "../Flex";

export default function index() {
  return (
    <S.Container>
      <Link href="/">
        <Logo />
      </Link>
      <Flex />
      <Search />
      <CartIcon quantity={0} />
    </S.Container>
  );
}
