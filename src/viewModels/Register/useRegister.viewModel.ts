import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { RegisterFormData, registerSchema } from "./register.schema"
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation"

export const useRegisterViewModel = () => {
    const userRegisterMutation = useRegisterMutation()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            name: "Nala",
            email: "teste2222@gmail.com",
            phone: "11999341747",
            password: "123123",
            confirmPassword: "123123"
        }
    })

    const onSubmit = handleSubmit(async (userData) => {
        console.log("data submit", userData)
        const { confirmPassword, ...registerData } = userData

        await userRegisterMutation.mutateAsync(registerData)
    })

    return {
        control,
        errors,
        onSubmit
    }
}