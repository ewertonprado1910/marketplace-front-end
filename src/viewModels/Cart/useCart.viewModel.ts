import { createElement } from "react"
import { useBottomSheetStore } from "../../shared/store/bottomsheet-estore"
import { useCartStore } from "../../shared/store/cart-store"
import { AddCardBottomSheet } from "./components/AddCardBottomSheet"
import { useGetCreditCardsQuey } from "../../shared/queries/credit-cards/use-get-credit-cards.query"


export const useCartViewModel = () => {
    const { products } = useCartStore()
    const { open: openBottomSheet } = useBottomSheetStore()

    const { data: creditCards = [], isLoading: loadingCreditCards } = useGetCreditCardsQuey()



    const openCardBottomSheet = () => {
        openBottomSheet({ content: createElement(AddCardBottomSheet) })
    }

    return { 
        products, 
        openCardBottomSheet,
        creditCards,
        loadingCreditCards
     }
}