import { Cart } from "@/types/Cart";
import { Item } from "@/types/Item";
import { create } from "zustand";

type CartStore = {
  cart: Cart;
  addItem: (item: Item) => void;
  setItemQuantity: (item: Item, quantity: number) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: {
    itens: [],
    service_fee: 4000,
  },
  addItem: (item) => {
    const { cart } = get();
    const hasItem = cart.itens.some((i) => i.product.id === item.product.id);

    if (hasItem) {
      if (item.quantity >= 5) {
        return;
      }

      set((state) => ({
        cart: {
          ...state.cart,
          itens: state.cart.itens.map((i) =>
            i.product.id === item.product.id
              ? { ...i, quantity: i.quantity + 1 > 5 ? 5 : i.quantity + 1 }
              : i
          ),
        },
      }));
      return;
    }

    set((state) => ({
      cart: {
        ...state.cart,
        itens: [
          ...state.cart.itens,
          {
            ...item,
            quantity: 1,
          },
        ],
      },
    }));
  },
  setItemQuantity: (item, quantity) => {
    set((state) => ({
      cart: {
        ...state.cart,
        itens: state.cart.itens.map((i) =>
          i.product.id === item.product.id ? { ...i, quantity } : i
        ),
      },
    }));
  },
  removeItem: (item) =>
    set((state) => ({
      cart: {
        ...state.cart,
        itens: state.cart.itens.filter((i) => i.product.id !== item),
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
