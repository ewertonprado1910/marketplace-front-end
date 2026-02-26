import { useState } from "react"

import { useProductInfinityQuery } from "../../shared/queries/product/use-product-infinite.query"
import { useFilterStore } from "../../shared/store/use-filter-store"
import { useDebounce } from "../../shared/hooks/useDebounce"

export const useHomeViewModel = () => {
    const { appliedFilterState } = useFilterStore()

    const [searchInputText, setSearchInputText] = useState("")
    const currentSearchText = useDebounce(searchInputText)

    const {
        products,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isRefetching,
        refetch,

    } = useProductInfinityQuery({
        filters: { ...appliedFilterState, searchText: currentSearchText }
    })

    const handleLoadMore = () => {
        if (hasNextPage && !isFetchingNextPage && !isLoading) {
            fetchNextPage()
        }
    }

    const hanldeRefresh = async () => {
        await refetch()
    }

    const handleEnReached = () => {
        handleLoadMore()
    }

    console.log(JSON.stringify(products, null, 2))
    return {
        handleLoadMore,
        hanldeRefresh,
        products,
        handleEnReached,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        isRefetching,
        setSearchInputText,
        searchInputText
    }
}