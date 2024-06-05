import { CategoryType } from "./filter";

export function placeHolder(categorie: CategoryType) {
  switch (categorie) {
    case CategoryType.All:
      return "Todas as categorias";
    case CategoryType.CAMISETAS:
      return "Camisetas";
    case CategoryType.CANECAS:
      return "Canecas";
    default:
      return "Categoria não encontrada";
  }
}
