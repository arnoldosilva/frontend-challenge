import { Item } from "@/types/Item";
import React from "react";
import * as S from "./styles";
import Trash from "@/components/TrashButton";
import { Text } from "@/components/Text";
import { displayCurrency } from "@/helpers/currency";
import { Flex } from "../Flex";
import Select from "react-select";

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
          <Trash />
        </S.ProductTitle>
        <Text fontSize="1.2">{item.product.description}</Text>
        <Flex height="100%" />
        <S.ProductTitle>
          <Select
            formatOptionLabel={formatOptionLabel}
            options={options}
            defaultValue={options[0]}
          />
          <Text weight={900} fontSize="2">
            {displayCurrency(item.product.price_in_cents)}
          </Text>
        </S.ProductTitle>
      </S.ProductInfo>
    </S.Container>
  );
}

const formatOptionLabel = ({ value }) => (
  <div
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
