import { FC } from "react"
import { Ionicons } from "@expo/vector-icons"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"

import { colors } from "../../../../styles/colors"
import { useBottomSheetStore } from "../../../../shared/store/bottomsheet-estore"
import { AppInput } from "../../../../shared/components/AppInput"
import { useCardBottomSheetViewModel } from "./useCardBottomSheet.viewModel"
import { AppButton } from "../../../../shared/components/AppButton"

export const AddCardBottomSheetView: FC<ReturnType<typeof
    useCardBottomSheetViewModel>> = ({

    }) => {
        const { close } = useBottomSheetStore()
        return (
            <ScrollView className="flex-1">
                <View className="p-8">
                    <View className="items-center justify-between flex-row">
                        <Text className="font-bold text-xl text-center text-gray-900">
                            Adicionar cartão
                        </Text>

                        <TouchableOpacity
                            onPress={close}
                            className="w-8 items-center justify-center border border-gray-400 rounded-[10px]">
                            <Ionicons
                                name="close"
                                size={25}
                                color={colors.gray[400]}
                            />
                        </TouchableOpacity>
                    </View>

                    <View className="mt-6 gap-4">
                        <AppInput
                            leftIcon="person-outline"
                            label="NOME DO TITULAR"
                            placeholder="Nome completo"
                        />

                        <AppInput
                            leftIcon="card"
                            label="NÉMERO DO CARTÃO"
                            placeholder="0000 0000 0000 0000"
                        />

                        <View className="flex-row gap-2">
                            <View className="flex-1">
                                <AppInput
                                    leftIcon="calendar-outline"
                                    label="VENCIMENTO"
                                    placeholder="MM/AA"
                                    keyboardType="numeric"
                                    maxLength={5}
                                />
                            </View>

                            <View className="flex-1">
                                <AppInput
                                    leftIcon="lock-closed-outline"
                                    label="CVV"
                                    placeholder="0000"
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>
                    </View>

                    <View className="flex-row gap-2 pb-5 mt-5">
                        <View className="flex-1">
                            <AppButton
                                children="Cancelar"
                                variant="outlined"
                            />
                        </View>

                        <View className="flex-1">
                            <AppButton
                                children="Salvar"
                                variant="field"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }