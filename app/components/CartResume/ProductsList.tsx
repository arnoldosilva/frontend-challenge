import React from "react";
import { Text } from "@/components/Text";
import { useCartStore } from "@/store/useCartStore";
import * as S from "./styles";
import ProducItem from "@/components/ProductItem";
import { sum } from "@/helpers/sum";
import { displayCurrency } from "@/helpers/currency";
import { InlineContent } from "../InlineContent/styles";

export default function ProductsList() {
  const { cart } = useCartStore();
  return (
    <S.CartProductListContainer>
      <Text fontSize="2" weight={600} uppercase>
        Seu Carrinho
      </Text>
      <InlineContent>
        <Text>{`Total (${cart.itens.length} produto${
          cart.itens.length === 1 ? "" : "s"
        })`}</Text>
        <Text weight={900}>{displayCurrency(sum(cart.itens))}</Text>
      </InlineContent>
      {cart.itens.map((item) => (
        <ProducItem key={item.product.id} item={item} />
      ))}
    </S.CartProductListContainer>
  );
}
