import { useGetProductsDetailsQuery } from "../../shared/queries/product/use-get-products-details"


export const useProductViewModel = (productId: number) => {
    const {
        data: productDetails,
        isLoading,
        error
    } = useGetProductsDetailsQuery(productId)

    return {
        productDetails,
        isLoading,
        error
    }
}