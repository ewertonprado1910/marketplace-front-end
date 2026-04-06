import { marketPlaceApiClient } from "../api/market-place";
import { GetOdersResponse } from "../interfaces/http/get-orders";
import { SubmitOderResponse, SubmitOrdersRequestParamsInterface } from "../interfaces/http/submit-orders";

export const submitOrder = async (order: SubmitOrdersRequestParamsInterface) => {
    const { data } = await marketPlaceApiClient.post<SubmitOderResponse>(
        "/orders", order)

    return data
}

export const getOrders = async () => {
    const { data } = await marketPlaceApiClient.get<GetOdersResponse>(
        "/orders")

    return data
}
