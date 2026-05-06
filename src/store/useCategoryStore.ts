import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Category {
  name: string;
}

interface CategoryState {
  categories: Category[];

  addCategory: (data: Category) => void;
  deleteCategory: (index: number) => void;
  setCategories: (data: Category[]) => void;
}

export const useCategoryStore = create<CategoryState>()(
  persist(
    (set) => ({
      categories: [],

      addCategory: (data) =>
        set((state) => ({
          categories: [data, ...state.categories],
        })),

      deleteCategory: (index) =>
        set((state) => ({
          categories: state.categories.filter((_, i) => i !== index),
        })),

      setCategories: (data) =>
        set(() => ({
          categories: data,
        })),
    }),
    {
      name: "category-storage",
    }
  )
);