import { create } from "zustand";

type State = {
  isOpen: boolean;
};

type Actions = {
  onClose: () => void;
  onOpen: () => void;
};

export const useMobileMenu = create<State & Actions>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));
