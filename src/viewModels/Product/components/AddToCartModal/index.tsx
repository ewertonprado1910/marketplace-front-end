import { Ionicons } from "@expo/vector-icons"
import { FC } from "react"
import { Text, View } from "react-native"
import { colors } from "../../../../styles/colors"
import { AppButton } from "../../../../shared/components/AppButton"

interface AddToCartModalParams {
    productName: string
    onGoToCart: () => void
    onClose: () => void
    onContinueShopping: () => void
}

export const AddToCartModal: FC<AddToCartModalParams> = ({
    productName,
    onClose,
    onContinueShopping,
    onGoToCart
}) => {
    return (
        <View className="bg-white rounded-xl p-6 w-full mx-w-sm ">
            <View className="items-center mb-4">
                <View className="w-16 h-16 bg-green-100 rounded-full items-center justify-center mb-3">
                    <Ionicons
                        name="checkmark"
                        size={32}
                        color={colors.success}
                    />
                </View>
                <Text className="text-xl font-bold text-gray-900 text-center">
                    Producto adiconado com sucesso!
                </Text>
            </View>

            <Text className="text-gray-600 text-center mb-6">
                <Text className="font-semibold text-center text-green-700">
                    {productName}
                </Text> Foi adicionado ao seu carrinho!
            </Text>

            <View className="gap-4">
                <AppButton
                    onPress={onGoToCart}
                    leftIcon="cart"
                    children="Ver Carrinho" />

                <AppButton
                    onPress={onContinueShopping}
                    variant="outlined"
                    children="Continuar comprando"
                />
            </View>
        </View>
    )
}