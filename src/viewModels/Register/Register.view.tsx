import { router } from "expo-router"
import { FC } from "react"

import { Button, Text, TouchableOpacity, View } from "react-native"
import { useRegisterViewModel } from "./useRegister.viewModel"
import { AppInput } from "../../shared/components/AppInput"

export const RegisterView: FC<
    ReturnType<typeof useRegisterViewModel>
> = ({
    onSubmit
}) => {

        return (
            <View className="flex-1 items-center justify-center">
                <AppInput label="Nome" />
                <AppInput label="Email"/>

                <TouchableOpacity className="mb-5 mt-10"
                    onPress={() => {
                        console.log("clicou")
                        onSubmit()
                    }}>
                    <Text>Registrar usuario</Text>
                </TouchableOpacity>

                <Button title="Voltar " onPress={() => router.back()} ></Button>
            </View>
        )
    }