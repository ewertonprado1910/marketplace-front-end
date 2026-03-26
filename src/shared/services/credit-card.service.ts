
import { marketPlaceApiClient } from "../api/market-place"
import { CreditCard } from "../interfaces/credit-card"
import { CreateCreditCardResponse, CreateCreditCardsRequestParams } from "../interfaces/http/create-credit-card"

export const getCreditCart = async () => {
    const { data } = await marketPlaceApiClient.get<CreditCard[]>(
        "/credit-cards"
    )
    return data
}

export const createCreditCards = async (
    creditCardData: CreateCreditCardsRequestParams) => {
    const { data } = await marketPlaceApiClient.post<CreateCreditCardResponse>(
        "/credit-cards", creditCardData
    )
    return data
}