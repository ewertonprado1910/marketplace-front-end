import * as yup from "yup"

export const creditCardSchema = yup.object().shape({
    titularName: yup
        .string()
        .required("Nome do titular do cartão é obrigatório!")
        .min(5, "Nome deve ter no mínimo 5 caracteres"),
    number: yup
        .string()
        .required("Número do cartão é obrigatório")
        .test(
            "card-number",
            "Número do cartão deve ter exatamente 16 digitos",
            (value) => {
                if (!value) return false
                const cleaned = value.replace(/\s/g, "")
                return /^\d{16}$/.test(cleaned)
            }
        ),
    expirationDate: yup
        .string()
        .required("Data de vencimeno é obrigatória")
        .matches(/^\d{2}\/\d{2}$/, "Formato deve ser MM/AA"
        ),

    CVV: yup
        .string()
        .required("O CVV é obrigatório")
        .matches(/^\d{3}$/, "CVV deve ter exatemnet 3 digitos"
        ),
})

export type CreditCardFormData = yup.InferType<typeof creditCardSchema>

