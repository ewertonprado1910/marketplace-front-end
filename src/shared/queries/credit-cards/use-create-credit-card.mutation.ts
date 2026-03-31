import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Toast } from "toastify-react-native"

import { createCreditCards } from "../../services/credit-card.service"
import { CreateCreditCardsRequestParams } from "../../interfaces/http/create-credit-card"


export const useCreateCreditCardMutation = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (creditCardData: CreateCreditCardsRequestParams) =>
            createCreditCards(creditCardData),
        onSuccess: (response) => {
            Toast.success(response.message ?? "Cartão criado com sucesso")
            queryClient.invalidateQueries({
                queryKey: ["credit-cards"]
            })
        },
    })
    return mutation
}