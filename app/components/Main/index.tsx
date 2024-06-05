"use client";
import { saira_init } from "@/styles/global";
import * as S from "./styles";
import Menu from "./Menu";
import Products from "./ListProducts";
import Pagination from "@/components/Pagination";
const Main = () => {
  return (
    <S.Container className={saira_init.className}>
      <Menu />
      <Pagination />
      <Products />
    </S.Container>
  );
};

export default Main;
