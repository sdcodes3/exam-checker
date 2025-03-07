// src/store.ts
import { create } from "zustand";


type Marking = { id: number; type: string; position: { x: number; y: number } };

type Store = {
  markings: Marking[];
  addMarking: (marking: Marking) => void;
};

export const useStore = create<Store>((set) => ({
  markings: [],
  addMarking: (marking) => set((state) => ({ markings: [...state.markings, marking] })),
}));