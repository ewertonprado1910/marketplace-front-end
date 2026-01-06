import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"
import { FC } from "react"

import { AuthFormHeader } from "../../shared/components/AuthFormHeader"
import { KeyboardContainer } from "../../shared/components/KeyboardContainer"
import { useLoginViewModel } from "./useLoginviewModel"
import { AppInputController } from "../../shared/components/AppInputController"
import { AppButton } from "../../shared/components/AppButton"

export const LoginView: FC<ReturnType<
    typeof useLoginViewModel>> = ({
        control,
        onSubmit
    }) => {
        return (
            <KeyboardContainer>
                <ScrollView>
                    <View className="flex-1 items-center justify-center px-[40px]">

                        <View className="flex-1 w-full items-center justify-center">
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

                            <AppButton
                                children="Login"
                                rightIcon="arrow-forward"
                                onPress={onSubmit}
                                className="mt-3"
                            />
                        </View>


                        <View className="flex-2 mt-14 ">
                            <Text className="text-base mt-16 text-gray-300">
                                Ainda não tem uma conta?
                            </Text>
                            <AppButton
                            className="mt-1"
                                children="Cadastrar"
                                variant="outlined"
                                rightIcon="arrow-forward"
                                onPress={() => router.push("/register")}
                            />

                        </View>
                    </View>
                </ScrollView>
            </KeyboardContainer>

        )
    }