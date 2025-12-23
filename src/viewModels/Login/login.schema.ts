import * as yup from "yup"

export const loginSchema = yup.object({
    email: yup
        .string()
        .email("Email inválido")
        .required("O email é obrigatório"),
    password: yup
        .string()
        .required("A senha é obrigatória")
        .min(5, "A senha deve ter no minímo 6 caracteres")
})

export type LoginFormData = yup.InferType<typeof loginSchema>

