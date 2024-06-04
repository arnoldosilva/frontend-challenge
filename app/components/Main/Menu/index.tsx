import React from "react";
import * as S from "./styles";
import { Flex } from "@/components/Flex";
import ButtonMenu from "./Button";
import GroupBy from "./GroupBy";

export default function Menu() {
  return (
    <S.Container>
      <ButtonMenu name="Todos os produtos" selected={true} />
      <ButtonMenu name="Camisetas" selected={false} />
      <ButtonMenu name="Canecas" selected={false} />
      <Flex />
      <GroupBy />
    </S.Container>
  );
}
