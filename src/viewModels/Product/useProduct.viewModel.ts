import { useGetCommentsInfiniteQuery } from "../../shared/queries/product/use-get-product-comments-infinite.query"
import { useGetProductsDetailsQuery } from "../../shared/queries/product/use-get-products-details"


export const useProductViewModel = (productId: number) => {
    const {
        data: productDetails,
        isLoading,
        error
    } = useGetProductsDetailsQuery(productId)

    const {
        comments,
        isLoading: getCommentsLoading,
        hasNextPage,
        fetchNextPage,
        refetch,
        isRefetching,
        isFetchingNextPage,
        error: getCommentsError
    } = useGetCommentsInfiniteQuery(productId)

    const handleLoadMore = () => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage()
        }
    }

    const handleRefetch = () => {
        if (!isRefetching) {
            refetch()
        }
    }

    const handleEndReched = () => {
        handleLoadMore()
    }

    return {
        productDetails,
        isLoading,
        error,
        handleEndReched,
        handleRefetch,
        comments,
        getCommentsLoading,
        getCommentsError,
        isRefetching,
        isFetchingNextPage
    }
}