"use client";
import React, { useMemo } from "react";
import * as S from "./styles";
import Search from "../Search";
import CartIcon from "../CartIcon";
import Logo from "./logo";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";

export default function Header() {
  const router = useRouter();
  const { cart } = useCartStore();
  const hasIten = useMemo(() => cart.itens.length > 0, [cart]);

  const handleLogoClick = () => router.push("/");

  return (
    <S.Container>
      <S.LogoButton onClick={handleLogoClick}>
        <Logo />
      </S.LogoButton>
      <S.Flex />
      <Search />
      <CartIcon quantity={hasIten ? cart.itens.length : 0} />
    </S.Container>
  );
}
