import { FC } from "react"
import { FlatList } from "react-native"

import { useProductViewModel } from "./useProduct.viewModel"
import { Header } from "./components/Header"
import { SafeAreaView } from "react-native-safe-area-context"
import { CommentItem } from "./components/CommentItem"
import { ListFooter } from "./components/ListFooter"
import { EmptyList } from "./components/EmptyList"
import { Loading } from "./components/Loading"
import { Error } from "./components/Error"
import { AddToCartFooter } from "./components/AddToCartFooter"


export const ProductView: FC<
    ReturnType<typeof useProductViewModel>> = ({
        productDetails,
        isLoading,
        error,
        comments,
        getCommentsError,
        getCommentsLoading,
        handleEndReched,
        handleRefetch,
        isRefetching,
        isFetchingNextPage,
        handleAddToCart,
        handleOpenReview
    }) => {
        if (error) <Error />

        if (isLoading || !productDetails) return <Loading />

        return (
            <SafeAreaView
                edges={["top"]}
                className="flex-1 bg-background">
                <FlatList
                    className="px-6"
                    data={comments}
                    onEndReached={handleEndReched}
                    onRefresh={handleRefetch}
                    refreshing={isRefetching}
                    renderItem={({ item }) => <CommentItem comment={item} />}
                    ListHeaderComponent={
                        <Header
                            handleOpenReview={handleOpenReview}
                            productDetails={productDetails} />}
                    ListFooterComponent={
                        <ListFooter isLoadingMore={isFetchingNextPage} />}
                    ListEmptyComponent={
                        <EmptyList isLoadingComments={getCommentsLoading} />
                    }
                    contentContainerClassName="pb-6"
                />
                <AddToCartFooter
                    handleAddToCart={handleAddToCart}
                    product={productDetails} />
            </SafeAreaView>
        )
    }