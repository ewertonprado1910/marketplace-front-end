import { useMutation } from "@tanstack/react-query"

import * as authService from "../../services/alth.service"
import { RegisterHttpParams } from "../../interfaces/http/register"

export const useRegisterMutation = () => {
    const mutation = useMutation({
        mutationFn: (userData: RegisterHttpParams) =>
            authService.Register(userData),

        onSuccess: (resposne) => {
            console.log("SUCESSO0", resposne)
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