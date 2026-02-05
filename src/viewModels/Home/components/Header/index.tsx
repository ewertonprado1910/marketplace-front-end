import { Button, Image, Text, TouchableOpacity, View } from "react-native"
import { useUserStore } from "../../../../shared/store/user-store"
import Ionicons from "@expo/vector-icons/Ionicons"

import { colors } from "../../../../styles/colors"
import { router } from "expo-router"
import { SearchInput } from "../SearchInput"

export const HomeHeader = () => {
    const { user, logout } = useUserStore()

    return (
        <View>
            <TouchableOpacity className="flex-row items-center gap-6">
                <View className="relative">
                    {user?.avatarUrl ? (
                        <Image
                            source={{ uri: user?.avatarUrl }}
                            className="w-[56px] h-[56px] rounded-[12px] border-shape"
                        />
                    ) : (
                        <View className="w-[56px] h-[56px] rounded-[12px] bg-shape border-2 justify-center items-center border-gray-200">
                            <Ionicons
                                name="person"
                                size={25}
                                color={colors.gray[300]}
                            />
                        </View>
                    )}
                </View>

                <View>
                    <Text className="font-bold text-base">
                        Olá, {user?.name.split(" ")[0] || "Usuário"}
                    </Text>
                    <View className="flex-row items-center gap-3">
                        <Text className="color-purple-base font-bold text-se">Ver perfil</Text>
                        <Ionicons name="arrow-forward-outline" size={15} color={colors["purple-base"]} />
                    </View>
                </View>
            </TouchableOpacity>

            { /*
                <View className="mt-20 gap-5">
                    <Button title="Logout" onPress={() => logout()}></Button>
                </View> */}
        </View>

    )
}