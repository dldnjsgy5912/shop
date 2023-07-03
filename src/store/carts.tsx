import { UserType } from "@/hooks/apis/cosmeticsQuery";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const _ = require("lodash");

interface CartsState {
    cartsInfo: UserType[];
    addCarts: (by: UserType) => void;
    removeCart: (by: UserType) => void;
}

export const useCartsStore = create<CartsState>()(
    persist(
        (set) => ({
            cartsInfo: [],
            // 장바구니 추가
            addCarts: (value) => set((state) => ({ cartsInfo: _.uniqBy([...state.cartsInfo, { ...value }], "id") })),
            // 장바구니 삭제
            removeCart: (value) =>
                set((state) => ({ cartsInfo: state.cartsInfo.filter((cart) => cart.id !== value.id) })),
        }),
        {
            name: "CartsStorage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
