import { Cart } from "@/types/Cart";
import { Item } from "@/types/Item";
import { create } from "zustand";

type CartStore = {
  cart: Cart;
  addItem: (item: Item) => void;
  incrementItem: (item: Item) => void;
  decrementItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: {
    itens: [],
    service_fee: 40,
  },
  addItem: (item) =>
    set((state) => ({
      cart: {
        ...state.cart,
        itens: [...state.cart.itens, item],
      },
    })),
  incrementItem: (item) =>
    set((state) => ({
      cart: {
        ...state.cart,
        itens: state.cart.itens.map((i) =>
          i.product.id === item.product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      },
    })),
  decrementItem: (item) =>
    set((state) => ({
      cart: {
        ...state.cart,
        itens: state.cart.itens.map((i) =>
          i.product.id === item.product.id
            ? { ...i, quantity: i.quantity > 1 ? i.quantity - 1 : 0 }
            : i
        ),
      },
    })),
  removeItem: (item) =>
    set((state) => ({
      cart: {
        ...state.cart,
        itens: state.cart.itens.filter((i) => i.product.id !== item.product.id),
      },
    })),
  clearCart: () =>
    set(() => ({
      cart: {
        itens: [],
        service_fee: 40,
      },
    })),
}));
