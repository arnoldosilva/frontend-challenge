import React from "react";
import * as S from "./styles";
import { saira_init } from "@/components/ProductCard/styles";
import { useFilterStore } from "@/store/useFilterStore";
import { placeHolder } from "@/helpers/categoriesPlaceHolder";
import { CategoryType } from "@/helpers/filter";

export interface ButtonMenuProps {
  name: CategoryType;
}
export default function ButtonMenu({ name }: ButtonMenuProps) {
  const { filterByCategory, setFilterByCategory } = useFilterStore();

  return (
    <S.Container
      className={saira_init.className}
      onClick={() => {
        setFilterByCategory(name);
      }}
    >
      {placeHolder(name).toUpperCase()}
      {filterByCategory === name && <S.Selected />}
    </S.Container>
  );
}
