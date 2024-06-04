import React from "react";
import * as S from "./styles";
import { saira_init } from "@/components/ProductCard/styles";

export interface ButtonMenuProps {
  name: string;
  selected: boolean;
}

export default function ButtonMenu({ name, selected }: ButtonMenuProps) {
  return (
    <>
      <S.Container className={saira_init.className}>
        {name.toLocaleUpperCase()}
        {selected && <S.Selected />}
      </S.Container>
    </>
  );
}
