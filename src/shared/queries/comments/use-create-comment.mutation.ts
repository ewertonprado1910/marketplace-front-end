import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createComment } from "../../services/product.service"
import { CreateCommentRequest } from "../../interfaces/http/create-comment"
import { Toast } from "toastify-react-native"

export const useCreateCommentMutation = (productId: number) => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (comment: CreateCommentRequest) => createComment(comment),
        onSuccess: (response) => {
            queryClient.invalidateQueries({
                queryKey: ["user-comment", productId]
            }),
                queryClient.invalidateQueries({
                    queryKey: ["products-comments", productId]
                })

            Toast.success(
                response.message || "Avaliação feita com sucesso!",
                "top"
            )
        },
        onError: (error) => {
            Toast.error(error.message ??
                "Erro ao enviar avaliação. Tente novamente mais tarde!",
                "top"
            )
        }
    })
    return mutation
}