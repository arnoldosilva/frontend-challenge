import React from "react";
import * as S from "./styles";

interface ProductCardProps {
  description: string;
  price_in_cents: number;
  image_url: string;
}

export default function index({
  description,
  price_in_cents,
  image_url,
}: ProductCardProps) {
  return (
    <S.Container>
      <S.Image src={image_url} />
      <S.Title>{description}</S.Title>
      <S.Price>{price_in_cents}</S.Price>
    </S.Container>
  );
}
