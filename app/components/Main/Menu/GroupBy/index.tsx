import { CategoryType } from "@/helpers/filter";
import { fetchCategories } from "@/services/fetchCategories";
import { useFilterStore } from "@/store/useFilterStore";
import { useProductsStore } from "@/store/useProductsStore";
import React, { act, useEffect, useMemo } from "react";
import Select from "react-select";

const { clearFilter, orderByHighPrice, orderByLowPrice } =
  useFilterStore.getState();

const values = [
  {
    category: "Organizar por",
    action: clearFilter,
  },
  {
    category: "Novidades",
    action: clearFilter,
  },
  {
    category: "Preço: Maior - Menor",
    action: orderByHighPrice,
  },
  {
    category: "Preço: Menor - Maior",
    action: orderByLowPrice,
  },
  {
    category: "Mais vendidos",
    action: clearFilter,
  },
];

export default () => {
  const data = async () => await fetchCategories();

  useEffect(() => {
    data();
  }, []);

  return (
    <Select
      styles={{
        control(base, props) {
          return {
            ...base,
            backgroundColor: "transparent",
            border: 0,
            "::selected": {
              border: 0,
            },
          };
        },
      }}
      defaultValue={values[0]}
      options={values}
      formatOptionLabel={(values) => formatOptionLabel(values)}
      isSearchable={false}
    />
  );
};

const formatOptionLabel = ({ category, action }) => (
  <div
    onClick={() => action()}
    style={{
      display: "flex",
      flexGrow: 1,
      justifyContent: "space-between",
      alignItems: "center",
      width: 200,
      fontSize: 14,
    }}
  >
    <span>{category}</span>
  </div>
);
