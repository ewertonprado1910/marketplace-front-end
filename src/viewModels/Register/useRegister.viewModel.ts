import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { RegisterFormData, registerSchema } from "./register.schema"
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation"
import { useUserStore } from "../../shared/store/user-store"

export const useRegisterViewModel = () => {
    const userRegisterMutation = useRegisterMutation()
    const { setSession, user } = useUserStore()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            name: "Nala",
            email: "teste1910teste@gmail.com",
            phone: "11999341785",
            password: "123123",
            confirmPassword: "123123"
        }
    })

    const onSubmit = handleSubmit(async (userData) => {
        const { confirmPassword, ...registerData } = userData

        const mutationResponse = await userRegisterMutation.mutateAsync(
            registerData
        )
        setSession({
            refreshToken: mutationResponse.refreshToken,
            token: mutationResponse.token,
            user: mutationResponse.user
        })
    })

    console.log(user)

    return {
        control,
        errors,
        onSubmit
    }
}