import { create } from "zustand";

interface CursorPosition {
  x: number;
  y: number;
}

interface MuseumState {
  selectedArtworkId: string | null;
  isDetailOpen: boolean;
  isHeaderHidden: boolean;
  cursor: CursorPosition;
  openArtwork: (id: string) => void;
  closeArtwork: () => void;
  setHeaderHidden: (hidden: boolean) => void;
  setCursor: (position: CursorPosition) => void;
}

export const useMuseumStore = create<MuseumState>((set) => ({
  selectedArtworkId: null,
  isDetailOpen: false,
  isHeaderHidden: false,
  cursor: { x: 0, y: 0 },
  openArtwork: (id) =>
    set({ selectedArtworkId: id, isDetailOpen: true }),
  closeArtwork: () =>
    set({ selectedArtworkId: null, isDetailOpen: false }),
  setHeaderHidden: (hidden) => set({ isHeaderHidden: hidden }),
  setCursor: (position) => set({ cursor: position }),
}));
