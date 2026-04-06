import { marketPlaceApiClient } from "../api/market-place";
import { SubmitOderResponse, SubmitOrdersRequestParamsInterface } from "../interfaces/http/orders";

export const submitOrder = async (order: SubmitOrdersRequestParamsInterface) => {
    const { data } = await marketPlaceApiClient.post<SubmitOderResponse>(
        "/orders", order)

    return data
}