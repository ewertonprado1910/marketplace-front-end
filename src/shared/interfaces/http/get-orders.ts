import { OrderInterface } from "../order";

export interface GetOdersResponse {
    orders: OrderInterface[],
    totalOrders: number
}