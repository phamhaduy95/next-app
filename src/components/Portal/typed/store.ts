import { StoreApi, create, createStore, useStore } from "zustand";

type PortalState = {
  isMounted: boolean;
  action: {
    setMounted: (arg: boolean) => void;
  };
};

export const PortalStore = createStore<PortalState>((set) => ({
  isMounted: false,
  action: {
    setMounted: (arg: boolean) => {
      set({ isMounted: arg });
    },
  },
}));

export function usePortalStore<U>(
  selector: (state: PortalState) => U,
  equalFunc?: (a: U, b: U) => boolean
): U {
  return useStore(PortalStore, selector, equalFunc);
}
