"use client";
import React, { useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useProductsStore } from "@/store/useProductsStore";
import Select from "react-select";
import { saira_init } from "@/styles/global";
import * as S from "./styles";
import { themeColors } from "@/styles/COLORS";
import { Product } from "@/types/Product";

export default function index() {
  const { products } = useProductsStore();

  const router = useRouter();

  const callback = (id: string) => router.push(`/product/${id}`);

  return (
    <Select
      closeMenuOnSelect
      className={saira_init.className}
      noOptionsMessage={() => "Nenhum produto encontrado"}
      filterOption={(option, rawInput) => {
        const input = rawInput.toLowerCase();
        const name = option.data.name.toLowerCase();
        return name.includes(input);
      }}
      components={{
        DropdownIndicator: () => (
          <S.Icon>
            <FaSearch size={15} />
          </S.Icon>
        ),
      }}
      placeholder={"Procurando por algo específico?"}
      styles={{
        menu(base, props) {
          return {
            ...base,
          };
        },
        control(base, props) {
          return {
            ...base,
            border: "none",
            boxShadow: "none",
            backgroundColor: `${themeColors.background}`,
            width: 250,
          };
        },
        option(base, props) {
          return {
            ...base,
            color: "black",
            width: 200,
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "white",
            },
          };
        },
      }}
      options={products}
      formatOptionLabel={(product) => formatOptionLabel({ product, callback })}
    />
  );
}

interface Item {
  product: Product;
  callback: Function;
}
const formatOptionLabel = ({ product, callback }: Item) => {
  return (
    <div
      onClick={() => callback(product.id)}
      style={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
        width: 200,
        fontSize: 14,
      }}
    >
      <span>{product.name}</span>
    </div>
  );
};
