import { router } from "expo-router"
import { FC, useEffect, useState } from "react"

import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useRegisterViewModel } from "./useRegister.viewModel"
import { AppInputController } from "../../shared/components/AppInputController"
import { AuthFormHeader } from "../../shared/components/AuthFormHeader"
import { KeyboardContainer } from "../../shared/components/KeyboardContainer"


export const RegisterView: FC<
    ReturnType<typeof useRegisterViewModel>
> = ({
    onSubmit,
    control
}) => {
        const [email, setEmail] = useState("")

        return (

            <KeyboardContainer>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    overScrollMode="never"
                    scrollEventThrottle={16}
                >
                    <View className="flex-1  px-[40px]">
                        <AuthFormHeader
                            title="Crie sua conta"
                            subTitle="Informe seus daos pessoais e de acesso" />

                        <AppInputController
                            leftIcon="person-outline"
                            label="NOME"
                            control={control}
                            name={"name"}
                            placeholder="Seu nome completo"
                        />

                        <AppInputController
                            leftIcon="call-outline"
                            label="TELEFONE"
                            control={control}
                            name={"phone"}
                            placeholder="Seu telefone com DDD"
                        />

                        <Text className="justify-start text-base font-bold mt-6 text-gray-500">
                            Acesso
                        </Text>

                        <AppInputController
                            leftIcon="mail-outline"
                            label="E-MAIL"
                            control={control}
                            name={"email"}
                            placeholder="Email@exemple.com.br"
                        />

                        <AppInputController
                            leftIcon="lock-closed-outline"
                            label="SENHA"
                            control={control}
                            name={"password"}
                            secureTextEntry
                            placeholder="Sua senha"
                        />

                        <AppInputController
                            leftIcon="lock-closed-outline"
                            label="CONFIRME SUA SENHA"
                            control={control}
                            name={"confirmPassword"}
                            secureTextEntry
                            placeholder="Digíte novamente a senha"
                        />

                        <TouchableOpacity className="mb-5 mt-5"
                            onPress={() => {
                                onSubmit()
                            }}>

                        </TouchableOpacity>

                        <Button title="Voltar " onPress={() => router.push("/login")} ></Button>
                    </View>
                </ScrollView>
            </KeyboardContainer>
        )
    }