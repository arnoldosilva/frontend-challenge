"use client";
import { useFilterStore } from "@/store/useFilterStore";
import { useProductsStore } from "@/store/useProductsStore";
import { Product } from "@/types/Product";
import React, { useCallback, useMemo } from "react";
import _ from "lodash";
export default function index() {
  const { products: filtered } = useFilterStore();
  const { products } = useProductsStore();

  const pages = useCallback(() => {
    if (filtered.length > 0) {
      return _.chunk(filtered, 12);
    } else {
      return _.chunk(products, 12);
    }
  }, [products, filtered]);

  console.log(pages());

  const render = useMemo(() => {
    return <div>index</div>;
  }, [products, filtered]);

  return render;
}
