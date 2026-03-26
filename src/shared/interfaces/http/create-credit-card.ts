import { CreditCard } from "../credit-card"

export interface CreateCreditCardsRequestParams {
    number: number
    CVV: number
    expirationDate: string
}

export interface CreateCreditCardResponse {
    data: CreditCard
    message: string
    success: boolean
}