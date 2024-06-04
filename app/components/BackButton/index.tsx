import React from "react";
import { FaBackspace } from "react-icons/fa";
import * as S from "./styles";
import { saira_init } from "../ProductCard/styles";
import { useRouter } from "next/navigation";
export default function index() {
  const Router = useRouter();

  const handleBack = () => {
    Router.back();
  };

  return (
    <S.Container onClick={handleBack}>
      <FaBackspace size={30} />
      <S.title className={saira_init.className}>Voltar</S.title>
    </S.Container>
  );
}
