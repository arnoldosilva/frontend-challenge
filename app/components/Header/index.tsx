"use client";
import React, { useMemo } from "react";
import * as S from "./styles";
import Link from "next/link";
import Search from "../Search";
import CartIcon from "../CartIcon";
import Logo from "./logo";
import { Flex } from "../Flex";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";

export default function index() {
  const router = useRouter();
  const { cart } = useCartStore();
  const hasIten = useMemo(() => cart.itens.length > 0, [cart]);

  const handleLogoClick = () => router.push("/");

  return (
    <S.Container>
      <S.LogoButton onClick={handleLogoClick}>
        <Logo />
      </S.LogoButton>
      <Flex />
      <Search />
      <CartIcon quantity={hasIten ? cart.itens.length : 0} />
    </S.Container>
  );
}
