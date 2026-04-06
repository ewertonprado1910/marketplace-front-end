import { useMutation } from "@tanstack/react-query"
import { submitOrder } from "../../services/order.service"
import { Toast } from "toastify-react-native"

export const useSbmitOrderMutation = () => {
    const mutation = useMutation({
        mutationFn: submitOrder,
        onSuccess: (res) => {
            console.log(res.message, "Deu certo")
        },
        onError: (err) => {
            console.log(err)
            Toast.error(err.message ?? "Falha ao realizar pedido", "top")
        }
    })
    return mutation
}