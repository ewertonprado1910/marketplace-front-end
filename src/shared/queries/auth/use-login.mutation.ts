import { useMutation } from "@tanstack/react-query"

import * as authService from "../../services/alth.service"
import { LoginHttpParams } from "../../interfaces/http/login"
import { useUserStore } from "../../store/user-store"
import { Toast } from "toastify-react-native"

export const useLoginMutation = () => {
    const { setSession } = useUserStore()

    const mutation = useMutation({
        mutationFn: (userData: LoginHttpParams) =>
            authService.Login(userData),

        onSuccess: (response) => {
            Toast.success("Bem vindo")
            setSession(response)
        },

        onError: (error: any) => {
            Toast.error(error.message)
        }
    })
    return mutation
}