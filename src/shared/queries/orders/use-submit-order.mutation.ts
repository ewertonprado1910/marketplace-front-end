import { useMutation, useQueryClient } from "@tanstack/react-query"
import { submitOrder } from "../../services/orders.service"
import { Toast } from "toastify-react-native"

export const useSbmitOrderMutation = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: submitOrder,
        onSuccess: (res) => {
            queryClient.invalidateQueries({
                queryKey: ["user-orders"]
            })
            console.log(res.message)
        },
        onError: (err) => {
            console.log(err)
            Toast.error(err.message ?? "Falha ao realizar pedido", "top")
        }
    })
    return mutation
}