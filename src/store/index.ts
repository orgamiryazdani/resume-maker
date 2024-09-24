import { create } from "zustand";
import { CountStore } from "./types";

export const useCountStore = create<CountStore>((set) => ({
    count: 0,
    actions: {
        increment: () => {
            set((state) => ({ ...state, count: state.count + 1 }))
        },
        decrement: () => {
            set((state) => ({ ...state, count: state.count - 1 }))
        }
    }
}))
