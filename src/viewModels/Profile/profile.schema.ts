import * as yup from "yup"

export const ProfileSchema: yup.ObjectSchema<{
    name: string,
    email: string,
    phone: string,
    password?: string
    newPassword?: string
}> = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Email é obrigatório").email("Email inválido"),
    phone: yup
        .string()
        .required("Telefone é obrigatório")
        .matches(/^\d{11}$/, "Telefone deve ter 11 dígitos (DDD + número)"),
    password: yup.string().required("A senha é obrigatória").optional(),
    newPassword: yup.string().optional()
})

export type ProfileFormData = yup.InferType<typeof ProfileSchema>