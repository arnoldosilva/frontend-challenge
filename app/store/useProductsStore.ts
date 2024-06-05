import { Product } from "@/types/Product";
import { create } from "zustand";

interface Categories {
  category: string;
}

type ProductStore = {
  products: Product[];
  setProducts: (products: Product[]) => void;
  categories: Categories[];
  setCategories: (categories: Categories[]) => void;
};

export const useProductsStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  categories: [],
  setCategories: (categories) => set({ categories }),
}));
