import { router } from "expo-router"
import { FC } from "react"

import { Button, Text, View } from "react-native"
import { useRegisterViewModel } from "./useRegister.viewModel"

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
    setUserData,
    userData
}) => {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-purple-700 text-xl">
                {userData.name}
            </Text>

            <Button title="Voltar " onPress={() => router.back()}></Button>
        </View>
    )
}