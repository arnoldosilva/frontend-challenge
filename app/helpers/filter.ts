import { useFilterStore } from "@/store/useFilterStore";
import { useProductsStore } from "@/store/useProductsStore";

export const useSearchFilter = () => {
  const { filter, setFilter } = useFilterStore.getState();
  const { products } = useProductsStore.getState();

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(filter.toLowerCase()) ||
      product.category.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return { filter, setFilter, filteredProducts };
};

export const useCategoryFilter = (category: CategoryType) => {
  const { products } = useProductsStore.getState();

  if (category === CategoryType.All) {
    return { products };
  } else {
    const filteredProducts = products.filter((product) => {
      return product.category.toLowerCase().includes(category);
    });

    return { filteredProducts };
  }
};

export enum CategoryType {
  All = "all",
  CAMISETAS = "t-shirts",
  CANECAS = "mugs",
}
