"use client";
import { jersey_10_init } from "@/styles/global";
import * as S from "./styles";
import Menu from "./Menu";
import Products from "./ListProducts";

const Main = () => {
  return (
    <S.Container className={jersey_10_init.className}>
      <Menu />
      <Products />
    </S.Container>
  );
};

export default Main;
