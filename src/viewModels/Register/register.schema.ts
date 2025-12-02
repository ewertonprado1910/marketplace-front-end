import * as yup from "yup"

export const registerSchema = yup.object({
    name: yup
        .string()
        .required("O nome é obrigatório")
        .min(4, "No minimo 4 caracteres"),
    email: yup
        .string()
        .email("Email inválido")
        .required("O email é obrigatório"),
    password: yup
        .string()
        .required("A senha é obrigatória")
        .min(5, "A senha deve ter no minímo 6 caracteres"),
    confirmPassword: yup
        .string()
        .required("As senhas devem se iguais")
        .oneOf([yup.ref("password")], "As senhas não são iguais"),
    phone: yup
        .string()
        .required("O telefone é obrigatório")
        .matches(/^\d{11}$/, "Telefone deve ter 11 dígitos (DDD + número)")
})

export type RegisterFormData = yup.InferType<typeof registerSchema>

