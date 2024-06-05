import React from "react";
import * as S from "./styles";
import Link from "next/link";
import Search from "../Search";
import CartIcon from "../CartIcon";
import Logo from "./logo";
import { Flex } from "../Flex";
import { useRouter } from "next/navigation";

export default function index() {
  const router = useRouter();

  const handleLogoClick = () => router.push("/");

  return (
    <S.Container>
      <S.LogoButton onClick={handleLogoClick}>
        <Logo />
      </S.LogoButton>
      <Flex />
      <Search />
      <CartIcon quantity={0} />
    </S.Container>
  );
}
