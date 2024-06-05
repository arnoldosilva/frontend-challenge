import React from "react";
import * as S from "./styles";
import { displayCurrency } from "@/helpers/currency";
import { saira_init } from "@/styles/global";
import { Product } from "@/types/Product";
import { useRouter } from "next/navigation";

export default function index({
  name,
  price_in_cents,
  image_url,
  id,
}: Product) {
  const router = useRouter();
  return (
    <S.Container onClick={() => router.push(`/product/${id}`)}>
      <S.Image src={image_url} />
      <S.Content>
        <S.Title className={saira_init.className}>{name}</S.Title>
        <S.Divider />
        <S.Price>{displayCurrency(price_in_cents)}</S.Price>
      </S.Content>
    </S.Container>
  );
}
