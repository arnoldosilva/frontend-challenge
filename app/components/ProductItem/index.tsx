"use client";
import { Item } from "@/types/Item";
import React, { use } from "react";
import * as S from "./styles";
import Trash from "@/components/TrashButton";
import { Text } from "@/components/Text";
import { displayCurrency } from "@/helpers/currency";
import { Flex } from "../Flex";
import Select from "react-select";
import { useCartStore } from "@/store/useCartStore";

interface Props {
  item: Item;
}

const options = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
];

export default function ProducItem({ item }: Props) {
  return (
    <S.Container>
      <S.ProductImage src={item.product.image_url} alt={item.product.name} />
      <S.ProductInfo>
        <S.ProductTitle>
          <Text fontSize="2">{item.product.name}</Text>
          <Trash itemId={item.product.id} />
        </S.ProductTitle>
        <Text fontSize="1.2">{item.product.description}</Text>
        <Flex height="100%" />
        <S.ProductTitle>
          <Select
            formatOptionLabel={({ value }) =>
              formatOptionLabel({ value, item })
            }
            options={options}
            defaultValue={options[item.quantity - 1]}
            isSearchable={false}
          />
          <Text weight={900} fontSize="2">
            {displayCurrency(item.product.price_in_cents)}
          </Text>
        </S.ProductTitle>
      </S.ProductInfo>
    </S.Container>
  );
}

interface Option {
  value: number;
  item: Item;
}

const formatOptionLabel = ({ value, item }: Option) => {
  const { setItemQuantity } = useCartStore.getState();
  return (
    <div
      onClick={() => setItemQuantity(item, value)}
      style={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 14,
      }}
    >
      <span>{value}</span>
    </div>
  );
};
