import { useFilterStore } from "@/store/useFilterStore";
import { useProductsStore } from "@/store/useProductsStore";

export const useSearchFilter = () => {
  const { filter } = useFilterStore.getState();
  const { products } = useProductsStore.getState();

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(filter.toLowerCase()) ||
      product.category.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return { filteredProducts };
};

export enum CategoryType {
  All = "all",
  CAMISETAS = "t-shirts",
  CANECAS = "mugs",
}
