import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginFormData, loginSchema } from "./login.schema"
import { useLoginMutation } from "../../shared/queries/auth/use-login.mutation"
import { useUserStore } from "../../shared/store/user-store"

export const useLoginViewModel = () => {
    const { user } = useUserStore()

    const { control, handleSubmit } = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const loginMutation = useLoginMutation()

    const onSubmit = handleSubmit(async (useFormData) => {
        const userLoginData = await loginMutation.mutateAsync(useFormData)
    })

    return { control, onSubmit }
}