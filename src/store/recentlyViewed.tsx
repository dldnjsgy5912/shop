import { UserType } from "@/hooks/apis/cosmeticsQuery";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const _ = require("lodash");

interface RecentlyViewedState {
    recentlyView: UserType[];
    addRecentlyViewe: (by: UserType) => void;
    removeRecentlyViewe: (by: UserType) => void;
}

export const useRecentlyViewedStore = create<RecentlyViewedState>()(
    persist(
        (set) => ({
            recentlyView: [],
            addRecentlyViewe: (value) =>
                set((state) => ({ recentlyView: _.uniqBy([...state.recentlyView, { ...value }], "id") })),
            removeRecentlyViewe: (value) =>
                set((state) => ({ recentlyView: state.recentlyView.filter((cart) => cart.id !== value.id) })),
        }),
        {
            name: "RecentlyViewed",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
