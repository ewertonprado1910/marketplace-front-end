import { router } from "expo-router"
import { Text, View } from "react-native"

import { Ionicons } from "@expo/vector-icons"
import { colors } from "../../../../styles/colors"
import { AppButton } from "../../../../shared/components/AppButton"


export const Error = () => {
    return (
        <View className="px-6 flex-1 bg-background items-center justify-center">
            <Ionicons
                name="alert-circle"
                color={colors.danger}
                size={20}
            />
            <Text className="text-xl text-center text-danger mt-4">
                Erro ao buscar detalhes do producto.
            </Text>

            <AppButton onPress={router.back} className="mt-4" >
                Voltar
            </AppButton>
        </View>
    )
}