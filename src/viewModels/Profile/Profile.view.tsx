import { FC } from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useProfileViewModel } from "./useProfile.viewModel"
import { KeyboardContainer } from "../../shared/components/KeyboardContainer"
import { AuthFormHeader } from "../../shared/components/AuthFormHeader"
import { Ionicons } from "@expo/vector-icons"
import { AppInputController } from "../../shared/components/AppInputController"
import { AppButton } from "../../shared/components/AppButton"
import { Header } from "./components/Header"

export const ProfileView: FC<
    ReturnType<typeof useProfileViewModel>> = ({
        avatarUri,
        control,
        onSubmit,
        isSubmitting,
        handleLogout,
        hanldeSelectImage,
       
    }) => {

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
                    <Header handleLogout={handleLogout} />
                    <View className="flex-1 px-[35px]">

                        <TouchableOpacity
                            onPress={hanldeSelectImage}
                            className="w-[120px] h-[120px] rounded-[12px] items-center justify-center bg-shape self-center"
                        >
                            {avatarUri ? (
                                <Image
                                    className="w-full h-full rounded-[12px]"
                                    source={{ uri: avatarUri }}
                                    resizeMode="cover"
                                />
                            ) : (
                                < Ionicons name="cloud-upload-outline" size={33} />
                            )
                            }
                        </TouchableOpacity>

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
                            label="SENHA ATUAL"
                            control={control}
                            name={"password"}
                            secureTextEntry
                            placeholder="Sua senha atual"
                        />

                        <AppInputController
                            leftIcon="lock-closed-outline"
                            label="NOVA SENHA"
                            control={control}
                            name={"newPassword"}
                            secureTextEntry
                            placeholder="Sua nova senha"
                        />

                        <AppButton
                            isLoading={isSubmitting}
                            children="Atualizar cadastro"
                            className="mt-3"
                            onPress={() => {
                                onSubmit()
                            }}
                        />
                    </View>
                </ScrollView>
            </KeyboardContainer>
        )
    }