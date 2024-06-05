import React from "react";
import { Product } from "@/types/Product";
import * as S from "./styles";
import { placeHolder } from "@/helpers/categoriesPlaceHolder";
import { CategoryType } from "@/helpers/filter";
import { displayCurrency } from "@/helpers/currency";
import { FaShoppingBag } from "react-icons/fa";
import { themeColors } from "@/styles/COLORS";
import { Flex } from "../Flex";
import { Text } from "@/components/Text";

interface ProductViewProps {
  product: Product;
}

export default function ProductView({ product }: ProductViewProps) {
  if (!product) {
    return <NotFound />;
  }

  return (
    <S.ViewContainer>
      <S.ProductImage src={product.image_url} />

      <S.ProductInfo>
        <Text fontSize="1.5">
          {placeHolder(product.category as CategoryType)}
        </Text>
        <Text fontSize="3">{product.name}</Text>
        <Text weight={800}>{displayCurrency(product.price_in_cents)}</Text>
        <Text>
          *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
          R$900,00.
        </Text>
        <Text uppercase={true}>Descrição</Text>
        <Text>{product.description}</Text>
        <Flex height="100%" />
        <S.Button>
          <FaShoppingBag size={15} color={themeColors.white} />
          Adicionar ao carrinho
        </S.Button>
      </S.ProductInfo>
    </S.ViewContainer>
  );
}

const NotFound = () => {
  return (
    <S.NotFoundContainer>
      <h1>Ops...!</h1>
      <h3>Produto não encontrado</h3>
    </S.NotFoundContainer>
  );
};
