import { useInfiniteQuery } from "@tanstack/react-query"
import { getProduct } from "../../services/product.service"
import { BuildmageUrl } from "../../helpers/buildImage"

export const useProductInfiniteQuery = () => {

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        refetch,
        isRefetching
    } = useInfiniteQuery({
        queryFn: async ({ pageParam = 1 }) => {
            try {
                const response = await getProduct({
                    pagination: {
                        page: pageParam,
                        perPage: 10
                    }
                })

                return response
            } catch (error) {
                console.log(error, "Erro ao carregar produtos.")
                throw error
            }
        },
        getNextPageParam: (lastPage) => {
            return lastPage.page < lastPage.totalPages
                ? lastPage.page + 1
                : undefined
        },
        initialPageParam: 1,
        queryKey: ["products"],
        staleTime: 1000 * 60 * 2
    })

    const products = data?.pages
        .flatMap((page) => page.data)
        .map((product) => ({
            ...product,
            photo: BuildmageUrl(product.photo ?? "")
        }))

    return {
        products,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        refetch,
        isRefetching
    }
}