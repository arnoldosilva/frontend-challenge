import { Product } from "@/types/Product";
import { create } from "zustand";

type ProductStore = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};

export const useProductsStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
