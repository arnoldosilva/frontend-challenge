import React from "react";
import Lottie from "lottie-react";
import animation from "./animation .json";
import * as S from "./styles";
import { Text } from "@/components/Text";

export default function EmptyCart() {
  return (
    <S.NotFoundContainer>
      <Text fontSize="4" weight={600}>
        Seu carrinho está vazio
      </Text>
      <Lottie animationData={animation} style={{ width: 200, height: 200 }} />
      <Text>Adicione um de nossos produtos.</Text>
    </S.NotFoundContainer>
  );
}
