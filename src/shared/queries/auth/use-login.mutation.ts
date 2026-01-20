import { useMutation } from "@tanstack/react-query"

import * as authService from "../../services/alth.service"
import { LoginHttpParams } from "../../interfaces/http/login"
import { useUserStore } from "../../store/user-store"

export const useLoginMutation = () => {
    const { setSession } = useUserStore()

    const mutation = useMutation({
        mutationFn: (userData: LoginHttpParams) =>
            authService.Login(userData),

        onSuccess: (response) => {
            setSession(response)
           // console.log("SUCESSO", response)
        },

        onError: (error: any) => {
           // console.log(error)

        }
    })
    return mutation
}