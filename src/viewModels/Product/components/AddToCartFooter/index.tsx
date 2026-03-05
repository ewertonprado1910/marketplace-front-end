import { View } from "react-native"
import { ProductInterface } from "../../../../shared/interfaces/product"
import { FC } from "react"
import { AppPriceText } from "../../../../shared/components/AppPriceText"
import { AppButton } from "../../../../shared/components/AppButton"

interface AddToCartFooterParams {
    product: ProductInterface
}

export const AddToCartFooter: FC<AddToCartFooterParams> = ({
    product
}) => {
    return (
        <View className="flex-row items-center justify-between fixed bg-white bottom-0 right-0 left-0 p-7 h=[96px]">
            <AppPriceText value={Number(product.value)} />

            <AppButton
                className="w-[120px] h-[40px] rounded-[10px]"
                leftIcon="cart"
                children="Adicionar" />
        </View>
    )
}