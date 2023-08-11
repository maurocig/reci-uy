import { create } from "zustand";

type State = {
  isOpen: boolean;
};

type Actions = {
  onToggle: (open: boolean) => void;
};

export const useMobileMenuToggle = create<State & Actions>((set) => ({
  isOpen: true,
  onToggle: (open: boolean = false) => set({ isOpen: !open }),
}));
