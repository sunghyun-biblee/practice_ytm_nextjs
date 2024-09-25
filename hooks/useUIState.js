import { create } from "zustand";

export const useUIState = create((set) => ({
  homeCategory: "",
  headerImageSrc:
    "https://images.unsplash.com/photo-1662139295991-0c32cfebad20?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}));
