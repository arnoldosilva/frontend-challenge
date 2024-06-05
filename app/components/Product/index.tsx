"use client";
import React, { use, useMemo } from "react";
import * as S from "./styles";
import BackButtom from "@/components/BackButton";
import { useParams } from "next/navigation";
import { useProductsStore } from "@/store/useProductsStore";
import ProductView from "./ProductView";

export default function index() {
  const { id } = useParams<{
    id: string;
  }>();

  const { products } = useProductsStore();

  const product = useMemo(
    () => products.find((product) => product.id === id),
    [products, id]
  );

  return (
    <S.Container>
      <BackButtom />
      <ProductView product={product} />
    </S.Container>
  );
}
