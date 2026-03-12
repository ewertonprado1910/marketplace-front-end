import { createElement } from "react"
import { useGetCommentsInfiniteQuery } from "../../shared/queries/product/use-get-product-comments-infinite.query"
import { useGetProductsDetailsQuery } from "../../shared/queries/product/use-get-products-details"
import { useCartStore } from "../../shared/store/cart-store"
import { useModalStore } from "../../shared/store/modal-store"
import { AddToCartModal } from "./components/AddToCartModal"
import { router } from "expo-router"
import { useBottomSheetStore } from "../../shared/store/bottomsheet-estore"
import { ReviewBottomSheet } from "./components/ReviewBottomSheet"


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

    const { addProduct, products } = useCartStore()
    const { open, close } = useModalStore()
    const { open: openBottomSheet } = useBottomSheetStore()

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

    const onGoToCart = () => {
        router.push("/(private)/(tabs)/cart")
        close()
    }

    const onContinueShopping = () => {
        router.push("/(private)/(tabs)/home")
        close()
    }

    const handleAddToCart = () => {
        if (!productDetails) return

        addProduct({
            id: productDetails.id,
            name: productDetails.name,
            price: productDetails.value,
            image: productDetails.photo
        })

        open(createElement(AddToCartModal, {
            productName: productDetails.name,
            onClose: close,
            onContinueShopping,
            onGoToCart,
        }))
    }

    const handleOpenReview = () => {
        if (!productDetails) return

        openBottomSheet({
            content: createElement(ReviewBottomSheet, {
                productId,
            })

        })
        console.log("CLICOU EM AVALIAR")
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
        isFetchingNextPage,
        handleAddToCart,
        handleOpenReview
    }
}