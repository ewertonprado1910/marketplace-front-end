import { useGetProductsDetailsQuery } from "../../shared/queries/product/use-get-products-details"


export const useProductViewModel = (productId: number) => {
    const {
        data: productDetail,
        isLoading,
        error
    } = useGetProductsDetailsQuery(productId)

    return {
        productDetail,
        isLoading,
        error
    }
}