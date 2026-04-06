import { useGetOrdersAQuery } from "../../shared/queries/orders/use-get-orders.query"

export const userOrdersViewModel = () => {
    const { data: ordersResponse, error, isLoading } = useGetOrdersAQuery()
    const orders = ordersResponse?.orders ?? []
    
    return {orders, error, isLoading}
}