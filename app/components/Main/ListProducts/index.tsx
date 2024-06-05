import React from "react";
import ProductCard from "@/components/ProductCard";
import * as S from "./styles";
import { Product } from "@/types/Product";

interface ProductsProps {
  products: Product[];
}

export default function index({ products }: ProductsProps) {
  if (products && products.length > 0) {
    return (
      <S.Container>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </S.Container>
    );
  }

  return <div>Loading...</div>;
}
