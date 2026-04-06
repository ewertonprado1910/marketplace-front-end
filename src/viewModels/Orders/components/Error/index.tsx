import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"
import { colors } from "../../../../styles/colors"
import { AppButton } from "../../../../shared/components/AppButton"
import { router } from "expo-router"

export const Error = () => {
    return (
        <View className="flex-1 items-center justify-center p-5">

            <View className="fle-1 items-center justify-center">
                <Ionicons
                    name="alert-circle"
                    size={30}
                    color={colors.danger}
                />

                <Text className="text-xl text-danger mt-5">
                    Falha ao carregar pedidos
                </Text>
            </View>

            <AppButton
                onPress={() => router.push("/home")}
                children="Voltar para produtos"
                className="mt-5"
            />

        </View>
    )
}