import { create } from "zustand";

interface Store {
  scrollProgress: number;
  setScrollProgress: (v: number) => void;
  mousePosition: { x: number; y: number };
  setMousePosition: (v: { x: number; y: number }) => void;
  section: number;
  setSection: (v: number) => void;
  cursorVariant: "default" | "hover" | "click";
  setCursorVariant: (v: "default" | "hover" | "click") => void;
}

export const useStore = create<Store>((set) => ({
  scrollProgress: 0,
  setScrollProgress: (scrollProgress) => set({ scrollProgress }),
  mousePosition: { x: 0, y: 0 },
  setMousePosition: (mousePosition) => set({ mousePosition }),
  section: 0,
  setSection: (section) => set({ section }),
  cursorVariant: "default",
  setCursorVariant: (cursorVariant) => set({ cursorVariant }),
}));
