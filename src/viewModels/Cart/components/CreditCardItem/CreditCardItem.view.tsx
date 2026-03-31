import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"
import { colors } from "../../../../styles/colors"
import { FC } from "react"
import { useCreditCardItemViewModel } from "./useCreditCardItem.viewModel"

export const CreditCardItemView: FC<
    ReturnType<typeof useCreditCardItemViewModel>> = ({
        creditCard,
        formatedExpirationDate,
        formatedCardNumber
    }) => {

        return (
            <TouchableOpacity className="p-4 rounded-lg border-[1px] bg-white border-gray-100">
                <View className="flex-row justify-between">
                    <View className="mr-4">
                        <Ionicons
                            name="card-outline"
                            size={25}
                            color={colors["blue-base"]}
                        />
                    </View>

                    <View className="flex-1 justify-center">
                        <Text className="text-base ">
                            Cartão final {formatedCardNumber}
                        </Text>

                        <Text className="text-sm text-gray-500 mt-1">
                            {formatedExpirationDate}
                        </Text>
                    </View>

                    <TouchableOpacity>
                        <Ionicons
                            name="pencil"
                            size={17}
                            color={colors["purple-base"]}
                        />
                    </TouchableOpacity>
                </View>


            </TouchableOpacity>
        )
    }