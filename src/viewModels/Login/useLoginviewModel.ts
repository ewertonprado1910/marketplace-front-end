import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginFormData, loginSchema } from "./login.schema"
import { useLoginMutation } from "../../shared/queries/auth/use-login.mutation"
import { useUserStore } from "../../shared/store/user-store"

export const useLoginViewModel = () => {
    const { user } = useUserStore()
   // console.log(user, "Todos os usuarios")

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
      //  console.log(userLoginData, "Login feito")
    })

    return { control, onSubmit }
}