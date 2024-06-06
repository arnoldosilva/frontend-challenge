import React from "react";
import * as S from "./styles";
import ButtonMenu from "./Button";
import GroupBy from "./GroupBy";
import { CategoryType } from "@/helpers/filter";

export default function Menu() {
  return (
    <S.Container>
      <ButtonMenu name={CategoryType.All} />
      <ButtonMenu name={CategoryType.CAMISETAS} />
      <ButtonMenu name={CategoryType.CANECAS} />
      <S.Flex />
      <S.OrderContainer>
        <GroupBy />
      </S.OrderContainer>
    </S.Container>
  );
}
