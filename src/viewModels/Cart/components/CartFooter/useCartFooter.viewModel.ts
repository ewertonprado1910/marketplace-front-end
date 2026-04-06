import { useState } from "react"


import { useCartStore } from "../../../../shared/store/cart-store"
import { CreditCard } from "../../../../shared/interfaces/credit-card"
import { useSbmitOrderMutation } from "../../../../shared/queries/orders/use-submit-order.mutation"
import { router } from "expo-router"
import { useAppModal } from "../../../../shared/hooks/useAppModal"

export const useCartFooterViewModel = () => {
    const [selectedCreditCard, setSelectedCreditCard] =
        useState<null | CreditCard>(null)
    const { total, products, clearCart } = useCartStore()
    const { showSuccess } = useAppModal()

    const cerateOrderMutation = useSbmitOrderMutation()


    const submitOrderMuation = async () => {
        if (!selectedCreditCard) return

        await cerateOrderMutation.mutateAsync({
            creditCardId: selectedCreditCard.id,
            items: products.map(({ id, quantity
            }) => ({ productId: id, quantity }))
        })
        clearCart()
        showSuccess({
            title: "Sucesso",
            message: "Pedido feito com sucesso",
            buttonText: "Ver pedidos",
            onButtonPress: () => {
                router.push("/orders")
            }
        })

    }

    return {
        total,
        selectedCreditCard,
        setSelectedCreditCard,
        submitOrderMuation,
        isOrderLoading: cerateOrderMutation.isPending
    }
}