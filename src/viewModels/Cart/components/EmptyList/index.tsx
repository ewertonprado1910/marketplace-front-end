import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { colors } from "../../../../styles/colors"
import { AppButton } from "../../../../shared/components/AppButton"
import { router } from "expo-router"

export const EmptyList = () => {
    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 items-center pt-16">
                <Ionicons
                    name="cart-outline"
                    size={80}
                    color={colors.gray[200]}
                />
                <Text className="text-xl text-center font-bold text-gray-700 mt-4 mb-5">
                    Seu carrinho está vázio!
                </Text>

                <Text className="text-center text-base text-gray-400">
                    Explore o catálago de produtos.
                </Text>

                <AppButton
                    onPress={() => router.push("/home")}
                    leftIcon="storefront-outline"
                    variant="outlined"
                    className="mt-8 w-[220px]"
                    children="Explorar produtos"
                />
            </View>
        </SafeAreaView>
    )
}