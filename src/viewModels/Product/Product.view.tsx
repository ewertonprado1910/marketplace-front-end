import { FC } from "react"
import { FlatList, Text } from "react-native"
import { useProductViewModel } from "./useProduct.viewModel"
import { Header } from "./components"
import { SafeAreaView } from "react-native-safe-area-context"


export const ProductView: FC<
    ReturnType<typeof useProductViewModel>> = ({
        productDetails,
        isLoading,
        error
    }) => {

        if (error) {
            <Text>Erro ao carregar detalhes do produto!</Text>
        }

        if (!productDetails) {
            return null
        }

        return (
            <SafeAreaView className="flex-1 bg-background">
                <FlatList
                    className="px-6"
                    data={[]}
                    renderItem={() => <></>}
                    ListHeaderComponent={
                        <Header productDetails={productDetails} />
                    }
                />
            </SafeAreaView>
        )
    }