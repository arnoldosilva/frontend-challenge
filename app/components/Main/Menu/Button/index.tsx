import React from "react";
import * as S from "./styles";

export interface ButtonMenuProps {
  name: string;
  selected: boolean;
}

export default function ButtonMenu({ name, selected }: ButtonMenuProps) {
  return (
    <>
      <S.Container style={{}}>
        {name.toLocaleUpperCase()}
        {selected && <S.Selected />}
      </S.Container>
    </>
  );
}
