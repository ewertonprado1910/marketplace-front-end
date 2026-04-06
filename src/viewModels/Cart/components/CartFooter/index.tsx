import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native"
import { AppPriceText } from "../../../../shared/components/AppPriceText"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "../../../../styles/colors"
import { AppButton } from "../../../../shared/components/AppButton"
import { useCartStore } from "../../../../shared/store/cart-store"
import { FC } from "react"
import { CreditCard } from "../../../../shared/interfaces/credit-card"
import { CreditCardItem } from "../CreditCardItem"
import { CartFooterView } from "./CartFooter.view"
import { useCartFooterViewModel } from "./useCartFooter.viewModel"

export interface CartFooterParams {
    openCardBottomSheet: () => void
    creditCards: CreditCard[]
    loadingCreditCards: boolean
}

export const CartFooter: FC<CartFooterParams> = ({
    openCardBottomSheet,
    creditCards,
    loadingCreditCards
}) => {
    const viewModel = useCartFooterViewModel()

    return (<CartFooterView
        creditCards={creditCards}
        loadingCreditCards={loadingCreditCards}
        openCardBottomSheet={openCardBottomSheet}
        {...viewModel} />)
}