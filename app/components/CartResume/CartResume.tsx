import React from "react";
import * as S from "./styles";
import { Text } from "@/components/Text";
import { sum } from "@/helpers/sum";
import { useCartStore } from "@/store/useCartStore";
import { displayCurrency } from "@/helpers/currency";
import { Flex } from "../Flex";
import Link from "next/link";
import { themeColors } from "@/styles/COLORS";

export default function CartResume() {
  const { cart } = useCartStore();
  return (
    <S.CartResumeListContainer>
      <Text weight={900}>Resumo do Pedido</Text>

      <S.Line>
        <Text fontSize="1.5">Subtotal de produtos</Text>
        <Text fontSize="1.5">{displayCurrency(sum(cart.itens))}</Text>
      </S.Line>

      <S.Line>
        <Text fontSize="1.5">Entrega</Text>
        <Text fontSize="1.5">
          {displayCurrency(sum(cart.itens) > 90000 ? 0 : cart.service_fee)}
        </Text>
      </S.Line>

      {sum(cart.itens) > 90000 ? (
        <Text fontSize="1">
          {`*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.`}
        </Text>
      ) : null}

      <S.Divider />

      <S.Line>
        <Text weight={900}>Total</Text>
        <Text weight={900}>
          {displayCurrency(
            sum(cart.itens) > 90000
              ? sum(cart.itens)
              : sum(cart.itens) + cart.service_fee
          )}
        </Text>
      </S.Line>

      <S.BuyButton>
        <Text uppercase color={themeColors.white}>
          Finalizar Compra
        </Text>
      </S.BuyButton>

      <Flex
        style={{
          flexGrow: 1,
        }}
      />

      <div>
        <Link href="/">
          <Text uppercase>Ajuda</Text>
        </Link>
        <Link href="/">
          <Text uppercase>Reenbolso</Text>
        </Link>
        <Link href="/">
          <Text uppercase>Entregas e Fretes</Text>
        </Link>
        <Link href="/">
          <Text uppercase>Trocas e Devoluções</Text>
        </Link>
      </div>
    </S.CartResumeListContainer>
  );
}
