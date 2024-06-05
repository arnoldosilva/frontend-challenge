import { CategoryType } from "@/helpers/filter";
import { Product } from "@/types/Product";
import { create } from "zustand";
import { useProductsStore } from "./useProductsStore";

type FilterStore = {
  filterByCategory: CategoryType;
  setFilterByCategory: (category: CategoryType) => void;
  filter: string;
  products: Product[];
  setFilter: (filter: string) => void;
  setProducts: (products: Product[]) => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  filter: "",
  filterByCategory: "all" as CategoryType,
  setFilterByCategory: (category) => {
    const products = useProductsStore.getState().products;
    if (category === CategoryType.All) {
      set({
        products,
      });
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
  setFilter: (filter) => set({ filter }),
  products: [],
  setProducts: (products) => set({ products }),
}));
