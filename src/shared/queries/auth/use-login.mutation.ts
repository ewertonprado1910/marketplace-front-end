import { useMutation } from "@tanstack/react-query"

import * as authService from "../../services/alth.service"
import { LoginHttpParams } from "../../interfaces/http/login"

export const useLoginMutation = () => {
    const mutation = useMutation({
        mutationFn: (userData: LoginHttpParams) =>
            authService.Login(userData),

        onSuccess: (resposne) => {
            console.log("SUCESSO", resposne)
        },

        onError: (error: any) => {
            // console.log(error),
            console.log("AXIOS ERROR:", error);
            console.log("REQUEST URL:", error?.config?.url);
            console.log("REQUEST BASE URL:", error?.config?.baseURL);
            console.log("REQUEST METHOD:", error?.config?.method);
        }
    })
    return mutation
}