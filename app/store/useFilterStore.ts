import { create } from "zustand";

type FilterStore = {
  filter: string;
  setFilter: (filter: string) => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  filter: "",
  setFilter: (filter) => set({ filter }),
}));
