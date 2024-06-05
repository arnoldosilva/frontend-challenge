import React from "react";
import { Product } from "@/types/Product";

interface ProductViewProps {
  product: Product;
}

export default function ProductView({ product }: ProductViewProps) {
  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <div>ProductView</div>
      <div>{product.name}</div>
      <div>{product.price_in_cents}</div>
      <div>{product.image_url}</div>
    </>
  );
}

const NotFound = () => {
  return (
    <div>
      <h1>Ops...!</h1>
      <h3>Produto não encontrado</h3>
    </div>
  );
};
