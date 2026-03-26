import { createElement } from "react"
import { useBottomSheetStore } from "../../shared/store/bottomsheet-estore"
import { useCartStore } from "../../shared/store/cart-store"
import { AddCardBottomSheet } from "./components/AddCardBottomSheet"


export const useCartViewModel = () => {
    const { products } = useCartStore()
    const { open: openBottomSheet } = useBottomSheetStore()

    const openCardBottomSheet = () => {
        openBottomSheet({ content: createElement(AddCardBottomSheet) })
    }

    return { products, openCardBottomSheet }
}