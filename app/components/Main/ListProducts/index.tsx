import React from "react";
import ProductCard from "@/components/ProductCard";
import { useProductsStore } from "@/store/useProductsStore";
import * as S from "./styles";

export default function index() {
  const { products } = useProductsStore();

  if (products && products.length > 0) {
    return (
      <S.Container>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            description={product.description}
            price_in_cents={product.price_in_cents}
            image_url={product.image_url}
          />
        ))}
      </S.Container>
    );
  }

  return <div>Loading...</div>;
}
