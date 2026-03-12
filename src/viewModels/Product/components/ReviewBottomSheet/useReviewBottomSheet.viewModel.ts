import { useEffect, useState } from "react"


import { useGetUserCommentQuery } from "../../../../shared/queries/comments/use-get-user-comment.query"
import { useCreateCommentMutation } from "../../../../shared/queries/comments/use-create-comment.mutation"
import { useUpdateCommentMutation } from "../../../../shared/queries/comments/use-update-comment.mutation"
import { Toast } from "toastify-react-native"

interface RatingFormInterface {
    content: string
    rating: number
    isEditing: boolean
    commentId?: number
}

const initialFormValue: RatingFormInterface = {
    content: "",
    isEditing: false,
    rating: 0,
    commentId: undefined
}

export const useReviewBottomSheetViewModel = (productId: number) => {
    const [ratingForm, setRatinfForm] = useState(initialFormValue)

    const { data: userComment, isLoading: loadinfUserComment } =
        useGetUserCommentQuery(productId)

    const createCommentMutation = useCreateCommentMutation(productId)
    const updateCommentMutation = useUpdateCommentMutation(productId)

    const handleRatingChange = (rating: number) => {
        setRatinfForm((prevData) => ({ ...prevData, rating }))
    }

    const handleContentChange = (content: string) => {
        setRatinfForm((prevData) => ({ ...prevData, content }))
    }

    const handleFomrSubmit = () => {
        if (ratingForm.rating === 0) {
            Toast.warn("Por favor selecione uma estrela para avaliação!", "top")
            return
        }

        if (!ratingForm.content.trim()) {
            Toast.warn("Por favor, escreva um comentário", "top")
            return
        }

        const { isEditing, ...formData } = ratingForm
        if (isEditing) {
            updateCommentMutation.mutate({
                ...formData,
                commentId: formData.commentId!
            })
        } else {
            createCommentMutation.mutate({
                content: formData.content,
                productId,
                rating: formData.rating
            })
        }
    }

    useEffect(() => {
        if (userComment && userComment.comment) {
            setRatinfForm({
                content: userComment.comment.content,
                rating: userComment.rating,
                isEditing: true,
                commentId: userComment.comment.id
            })
        } else {
            setRatinfForm(initialFormValue)
        }
    }, [userComment])

    const isLoading = createCommentMutation.isPending || updateCommentMutation.isPending

    return {
        handleContentChange,
        handleRatingChange,
        ratingForm,
        handleFomrSubmit,
        isLoading
    }
}