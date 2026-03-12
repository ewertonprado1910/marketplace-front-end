import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { cartService } from "../services/cart.service"

export interface CartProduct {
    id: number
    name: string
    price: string
    quantity: number
    image?: string
}

export type OmitedProductCart = Omit<CartProduct, "quantity">

interface CartStore {
    products: CartProduct[],
    total: number
    addProduct: (product: OmitedProductCart) => void
    removeProduct: (productId: number) => void
    updateQuantity: (params: { productId: number, quantity: number }) => void
    clearCart: () => void
    getItemCount: () => number
}

export const useCartStore = create<CartStore>()(
    persist((set, get) => ({
        products: [],
        total: 0,

        addProduct: (newProduct) =>
            set((state) => cartService.addToProductCart(
                state.products,
                newProduct
            )),

        clearCart: () => { },

        getItemCount: () => cartService.getIemCount(get().products),

        removeProduct: (productId) =>
            set((state) => cartService.removeProductsFromList(
                state.products,
                productId
            )),

        updateQuantity: ({ productId, quantity }) =>
            set((state) => cartService.updateProductQuantity({
                productId, productList: state.products,
                quantity
            }))

    }), {
        name: "marketplace-cart",
        storage: createJSONStorage(() => AsyncStorage)
    }))