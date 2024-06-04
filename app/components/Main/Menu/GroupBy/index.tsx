import { fetchCategories } from "@/services/fetchCategories";
import { useProductsStore } from "@/store/useProductsStore";
import React, { useEffect, useMemo } from "react";

import Select from "react-select";

interface Categories {
  category: string;
}

export default () => {
  const data = async () => await fetchCategories();
  const { categories } = useProductsStore();
  useEffect(() => {
    data();
  }, []);

  const values = useMemo(
    () => [
      {
        category: "Organizar por",
      },
      ...categories,
    ],
    [categories]
  );

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
      formatOptionLabel={formatOptionLabel}
      isSearchable={false}
    />
  );
};

const formatOptionLabel = ({ category }) => (
  <div
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
