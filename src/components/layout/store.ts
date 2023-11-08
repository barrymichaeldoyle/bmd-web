// write a zustand store for handlig the open/close state of the sidebar

import { create } from "zustand";

interface LayoutState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
