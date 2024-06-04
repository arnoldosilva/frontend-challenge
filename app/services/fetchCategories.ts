"use client";
import api from "@/services/client";
import { useProductsStore } from "@/store/useProductsStore";
import _ from "lodash";

interface Categories {
  category: string;
}

interface AllProductsResponse {
  data: {
    allProducts: Categories[];
  };
}

export const fetchCategories = async () => {
  const response = await api.post<AllProductsResponse>(
    `/products`,
    JSON.stringify({
      query: `{
        allProducts {
            category
          }
      }`,
    })
  );

  if (response.status !== 200) {
    return [];
  }

  const categories = _.groupBy(response.data.data.allProducts, "category");
  const categoriesArray = Object.keys(categories).map((category) => {
    return { category };
  });

  useProductsStore.getState().setCategories(categoriesArray);
};
