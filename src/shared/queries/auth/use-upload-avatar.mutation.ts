import { useMutation } from "@tanstack/react-query"
import { uploadAvatar } from "../../services/alth.service"
import { Toast } from "toastify-react-native"
import { useUserStore } from "../../store/user-store"

export const useUploadAvatarMutation = () => {
    const { updateUser } = useUserStore()

    const mutation = useMutation({
        mutationFn: uploadAvatar,
        onSuccess: (response) => {
            updateUser({ avatarUrl: response.url })
        },
        onError: (error) => {
            console.log(error, "Erro avatar")
            Toast.error("Error ao carregar a foto.")
        }
    })

    return mutation
}