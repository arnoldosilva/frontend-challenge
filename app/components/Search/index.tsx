import React from "react";
import * as S from "./styles";
import { FaSearch } from "react-icons/fa";

export default function index() {
  return (
    <S.Form>
      <S.Input type="text" placeholder="Procurando por algo específico" />
      <S.Button>
        <FaSearch />
      </S.Button>
    </S.Form>
  );
}
