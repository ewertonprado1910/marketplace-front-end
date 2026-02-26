import { FC } from "react"
import { FlatList, Text } from "react-native"
import { useProductViewModel } from "./useProduct.viewModel"


export const ProductView: FC<
    ReturnType<typeof useProductViewModel>> = ({
        productDetail,
        isLoading,
        error
    }) => {

        if (error) {
            <Text>Erro ao carregar detalhes do produto!</Text>
        }

        return (
            <FlatList
                data={[]}
                renderItem={() => <></>}
                ListHeaderComponent={
                    <>
                        <Text>
                            {productDetail?.name}
                        </Text>
                    </>
                }
            />
        )
    }