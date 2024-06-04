import React from "react";
import { FaBackspace } from "react-icons/fa";
import * as S from "./styles";
import { saira_init } from "../ProductCard/styles";

export default function index() {
  return (
    <S.Container>
      <FaBackspace size={30} />
      <S.title className={saira_init.className}>Voltar</S.title>
    </S.Container>
  );
}
