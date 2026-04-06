import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"
import { colors } from "../../../../styles/colors"
import { AppButton } from "../../../../shared/components/AppButton"
import { router } from "expo-router"

export const EmptyList = () => {
    return (
        <View className="flex-1 items-center px-20 pt-16">
            <Ionicons
                name="clipboard-outline"
                size={85}
                color={colors.gray[200]
                }
            />

            <Text className="text-xl mt-2 font-semibold text-center text-gray-700">
                Você ainda não tem pedidos...
            </Text>

            <Text className="text-base mt-5 mb-5 text-center text-gray-800">
                Explore o catálogo de produtos e faça sua primeira compra
            </Text>

            <AppButton
                onPress={() => router.push("/home")}
                children="Explorar produtos"
                leftIcon="storefront-outline"
                variant="outlined"
            />
        </View>
    )
}