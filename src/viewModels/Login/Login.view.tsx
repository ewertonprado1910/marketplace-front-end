import { Button, Text, TouchableOpacity, View } from "react-native"
import { AuthFormHeader } from "../../shared/components/AuthFormHeader"
import { AppInput } from "../../shared/components/AppInput"
import { router } from "expo-router"
import { KeyboardContainer } from "../../shared/components/KeyboardContainer"
import { FC } from "react"
import { LoginFormData } from "./login.schema"
import { useLoginViewModel } from "./useLoginviewModel"
import { AppInputController } from "../../shared/components/AppInputController"

export const LoginView: FC<ReturnType<
    typeof useLoginViewModel>> = ({
        control,
        handleSubmit
    }) => {
        return (
            <KeyboardContainer>
                <View className="flex-1 items-center justify-center px-[40px]">
                    <AuthFormHeader
                        title="Acesse sua conta"
                        subTitle="Informe seu e-mail e senha para entrar" />

                    <AppInputController
                        control={control}
                        name="email"
                        leftIcon="mail-outline"
                        label="E-MAIL"
                        placeholder="email@exemple.com.br"
                    />

                      <AppInputController
                        control={control}
                        name="password"
                        leftIcon="lock-closed-outline"
                        label="SENHA"
                        placeholder="senha"
                        secureTextEntry
                    />

                    <TouchableOpacity onPress={() => router.push("/register")}>
                        <Text>Registro</Text>
                        <Button title="Tela Home" onPress={() => router.push("/home")}></Button>
                    </TouchableOpacity>
                </View>
            </KeyboardContainer>
        )
    }