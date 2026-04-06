import { FC } from "react"
import { SafeAreaView } from "react-native-safe-area-context"

import { userOrdersViewModel } from "./useOrders.viewModel"
import { FlatList, Text } from "react-native"
import { OrderItem } from "./components/OrderItem"
import { EmptyList } from "./components/EmptyList"
import { ListHeader } from "./components/ListHeader/ListHeader"
import { Error } from "./components/Error"
import { Loading } from "./components/Loading"

export const OrdersView: FC<
    ReturnType<typeof userOrdersViewModel>> = ({
        orders,
        error,
        isLoading
    }) => {

        if(isLoading) return <Loading/>

        if (error) return <Error />

        return (
            <SafeAreaView edges={["top"]} className="flex-1">
                <FlatList
                    contentContainerClassName="px-[16px] pb-[120px]"
                    data={orders}
                    renderItem={({ item: order }) =>
                        <OrderItem order={order} />}
                    keyExtractor={({ id }) => `order-${id}`}
                    ListEmptyComponent={<EmptyList />}
                    ListHeaderComponent={<ListHeader />}
                >

                </FlatList>
            </SafeAreaView>
        )
    }