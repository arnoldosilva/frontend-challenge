"use client";
import api from "@/services/client";
import { Product } from "@/types/Product";
import { useProductsStore } from "@/store/useProductsStore";

interface AllProductsResponse {
  data: {
    allProducts: Product[];
  };
}

export const fetchProducts = async () => {
  const response = await api.post<AllProductsResponse>(
    `/products`,
    JSON.stringify({
      query: `{
        allProducts {
            id name price_in_cents sales description image_url category
          }
      }`,
    })
  );

  if (response.status !== 200) {
    return [];
  }

  useProductsStore.getState().setProducts(response.data.data.allProducts);
};
