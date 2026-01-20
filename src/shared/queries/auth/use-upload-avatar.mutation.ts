import { useMutation } from "@tanstack/react-query"
import { uploadAvatar } from "../../services/alth.service"
import { Toast } from "toastify-react-native"

export const useUploadAvatarMutation = () => {
    const mutation = useMutation({
        mutationFn: uploadAvatar,
        onSuccess: (resposne) => {
            console.log(resposne)
        },
        onError: (error) => {
            console.log(error)
            Toast.error("Error ao carregar a foto.")
        }
    })

    return mutation
}