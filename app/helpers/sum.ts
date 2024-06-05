import { Item } from "@/types/Item";

export const sum = (itens: Item[]) => {
  return itens.reduce((acc, item) => {
    return acc + item.product.price_in_cents * item.quantity;
  }, 0);
};
