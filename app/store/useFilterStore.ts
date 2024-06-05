import { CategoryType } from "@/helpers/filter";
import { Product } from "@/types/Product";
import { create } from "zustand";
import { useProductsStore } from "./useProductsStore";

type FilterStore = {
  filterByCategory: CategoryType;
  setFilterByCategory: (category: CategoryType) => void;
  products: Product[] | [];
  clearFilter: () => void;
  setProducts: (products: Product[]) => void;
  orderByHighPrice: () => void;
  orderByLowPrice: () => void;
};

export const useFilterStore = create<FilterStore>((set, get) => ({
  filterByCategory: "all" as CategoryType,
  setFilterByCategory: (category) => {
    const products = useProductsStore.getState().products;
    if (category === CategoryType.All) {
      get().clearFilter();
    } else {
      const filteredProducts = products.filter((product) => {
        return product.category.toLowerCase().includes(category);
      });
      set({
        products: filteredProducts,
      });
    }
    set({ filterByCategory: category });
  },
  products: [],
  setProducts: (products) => set({ products }),
  orderByHighPrice: () => {
    const products = useProductsStore.getState().products;

    set(() => ({
      products: products.sort((a, b) => b.price_in_cents - a.price_in_cents),
    }));
  },
  orderByLowPrice: () => {
    const products = useProductsStore.getState().products;

    set(() => ({
      products: products.sort((a, b) => a.price_in_cents - b.price_in_cents),
    }));
  },
  clearFilter: () => set({ products: [] }),
}));
