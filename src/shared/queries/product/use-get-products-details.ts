import { useQuery } from "@tanstack/react-query"
import { getProductsDetails } from "../../services/product.service"

export const useGetProductsDetailsQuery = (productId: number) => {
    const query = useQuery({
       queryFn: async () => getProductsDetails(productId),
       queryKey: ["product-detail", productId]
    })

    return query
}