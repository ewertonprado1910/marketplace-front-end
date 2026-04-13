import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"
import { colors } from "../../../../styles/colors"
import { router } from "expo-router"
import { useUserStore } from "../../../../shared/store/user-store"
import { FC } from "react"

interface HeaderParams {
    handleLogout: () => void
}

export const Header: FC<HeaderParams> = ({
    handleLogout
}) => {
    
    return (
        <View className="flex-row justify-between items-center px-2 mb-5">
            <TouchableOpacity
                onPress={router.back}
                className="flex-row items-center gap-1">
                <Ionicons
                    name="arrow-back"
                    size={25}
                    color={colors["purple-base"]}
                />
                <Text className="text-base text-purple-base">Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handleLogout}
                className="flex-row gap-1 items-center">
                <Ionicons
                    name="log-out-outline"
                    size={25}
                    color={colors.danger}
                />
                <Text className="text-danger text-base">
                    Sair
                </Text>
            </TouchableOpacity>
        </View>
    )
}