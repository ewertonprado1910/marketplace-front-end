import { Text, TouchableOpacity, View } from "react-native"
import { AppPriceText } from "../../../../shared/components/AppPriceText"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "../../../../styles/colors"
import { AppButton } from "../../../../shared/components/AppButton"

export const CartFooter = () => {
    return (
        <View className="bg-white p-4 rounded-lg mt-6">
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-sm font-semibold text-gray-600">
                    VALOR TOTAL
                </Text>

                <AppPriceText
                    classNameCurrency="text-base text-gray-900 font-bold"
                    classNameValue="text-base text-gray-900 font-bold"
                    value={190}
                />
            </View>

            <View className="mb-4">
                <View className="flex-row justify-between items-center">
                    <Text className="text-[10px] font-semibold text-gray-600">
                        CARTÔES DE CRÉDITO
                    </Text>

                    <TouchableOpacity className="flex-row items-center">
                        <Ionicons
                            name="card-outline"
                            size={22}
                            color={colors["blue-base"]}
                        />

                        <Text className="text-purple-base ml-1 text-sm font-bold">
                            Adicionar cartão
                        </Text>
                    </TouchableOpacity>
                </View>

                <AppButton
                    children="Confirmar compra"
                    className="mt-8"

                />
            </View>
        </View>
    )
}