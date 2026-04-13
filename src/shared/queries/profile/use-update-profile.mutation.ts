import { useMutation } from "@tanstack/react-query"
import { upDateUserProfile } from "../../services/profile.service"
import { Toast } from "toastify-react-native"
import { useUserStore } from "../../store/user-store"
import { useAppModal } from "../../hooks/useAppModal"

export const useUpdateProfileMutation = () => {
    const { updateUser } = useUserStore()
    const { showSuccess } = useAppModal()

    const mutation = useMutation({
        mutationFn: upDateUserProfile,
        onSuccess: (response) => {
            updateUser({ ...response.user, }),
                showSuccess({
                    title: "Sucesso!",
                    message: "Dados cadastrais atualizados"
                })
        },
        onError: (error) => {
            Toast.error(error.message ?? "Falha na atualização dos dados do usuário", "top")
        }
    })

    return mutation
}