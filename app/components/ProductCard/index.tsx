import React from "react";
import * as S from "./styles";
import { displayCurrency } from "@/helpers/currency";

interface ProductCardProps {
  name: string;
  price_in_cents: number;
  image_url: string;
}

export default function index({
  name,
  price_in_cents,
  image_url,
}: ProductCardProps) {
  return (
    <S.Container>
      <S.Image src={image_url} />
      <S.Content>
        <S.Title aria-multiline={true}>{name}</S.Title>
        <S.Divider />
        <S.Price>{displayCurrency(price_in_cents)}</S.Price>
      </S.Content>
    </S.Container>
  );
}
