import { router } from "expo-router"
import { FC, useState } from "react"

import { Button, Text, TouchableOpacity, View } from "react-native"
import { useRegisterViewModel } from "./useRegister.viewModel"
import { AppInputController } from "../../shared/components/AppInputController"
import { AuthFormHeader } from "../../shared/components/AuthFormHeader"

export const RegisterView: FC<
    ReturnType<typeof useRegisterViewModel>
> = ({
    onSubmit,
    control
}) => {

        const [email, setEmail] = useState("")

        return (
            <View className="flex-1 items-center justify-center">
                <AuthFormHeader
                    title="Crie sua conta"
                    subTitle="Informe seus daos pessoais e de acesso" />

                <AppInputController
                    leftIcon="mail-outline"
                    label="E-MAIL"
                    control={control}
                    name={"email"} />

                <TouchableOpacity className="mb-5 mt-10"
                    onPress={() => {
                        onSubmit()
                    }}>

                </TouchableOpacity>

                <Button title="Voltar " onPress={() => router.push("/login")} ></Button>
            </View>
        )
    }