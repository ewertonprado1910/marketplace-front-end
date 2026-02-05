import { useMutation } from "@tanstack/react-query"

import * as authService from "../../services/alth.service"
import { RegisterHttpParams } from "../../interfaces/http/register"
import { AuthResponse } from "../../interfaces/http/auth.resposne"
import { useUserStore } from "../../store/user-store"

interface UseRegisterMutationParams {
    onSuccess?: () => void
}

export const useRegisterMutation = ({
    onSuccess
}: UseRegisterMutationParams = {}) => {

    const { setSession } = useUserStore()

    const mutation = useMutation({
        mutationFn: (userData: RegisterHttpParams) =>
            authService.Register(userData),

        onSuccess: (response) => {
            setSession({
                refreshToken: response.refreshToken,
                token: response.token,
                user: response.user
            })
            onSuccess?.()
        },

        onError: (error: any) => {
            (error)
        }
    })
    return mutation
}