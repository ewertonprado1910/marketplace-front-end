import { useQuery } from "@tanstack/react-query"

import { getProductCategory } from "../../services/product.service"

export const useGetProductCategoriesQuery = () => {
    const query = useQuery({
        queryKey: ["products-categories"],
        queryFn: getProductCategory,
        staleTime: 1000 * 60 * 60
    })

    return query
}