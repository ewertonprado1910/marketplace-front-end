import { FC } from "react"
import { Ionicons } from "@expo/vector-icons"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"

import { colors } from "../../../../styles/colors"
import { useBottomSheetStore } from "../../../../shared/store/bottomsheet-estore"
import { useAddCardBottomSheetViewModel } from "./useAddCardBottomSheet.viewModel"
import { AppButton } from "../../../../shared/components/AppButton"
import { AppInputController } from "../../../../shared/components/AppInputController"
import { CreditCard } from "./components/CreditCard"

export const AddCardBottomSheetView: FC<ReturnType<typeof
    useAddCardBottomSheetViewModel>> = ({
        handleCreateCreditCard,
        control,
        expirationDateMask,
        cardNumberMask,
        handleFieldFocus,
        handleFieldBlur,
        isFlipped,
        focusedField,
        cardData
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

                    <CreditCard
                    cardData={cardData}
                        focusedField={focusedField}
                        isFlipped={isFlipped}
                    />

                    <View className="mt-6 gap-4">
                        <AppInputController
                            control={control}
                            name="titularName"
                            leftIcon="person-outline"
                            label="NOME DO TITULAR"
                            placeholder="Nome completo"
                            onFocus={() => handleFieldFocus("name")}
                            onBlur={handleFieldBlur}
                        />

                        <AppInputController
                            control={control}
                            name="number"
                            leftIcon="card-outline"
                            label="NÚMERO DO CARTÃO"
                            placeholder="0000 0000 0000 0000"
                            mask={cardNumberMask}
                            onFocus={() => handleFieldFocus("number")}
                            onBlur={handleFieldBlur}
                        />

                        <View className="flex-row gap-2">
                            <View className="flex-1">
                                <AppInputController
                                    control={control}
                                    name="expirationDate"
                                    leftIcon="calendar-outline"
                                    label="VENCIMENTO"
                                    placeholder="MM/AA"
                                    keyboardType="numeric"
                                    maxLength={5}
                                    mask={expirationDateMask}
                                    onFocus={() => handleFieldFocus("expiry")}
                                    onBlur={handleFieldBlur}
                                />
                            </View>

                            <View className="flex-1">
                                <AppInputController
                                    control={control}
                                    name="CVV"
                                    leftIcon="lock-closed-outline"
                                    label="CVV"
                                    placeholder="000"
                                    keyboardType="numeric"
                                    maxLength={3}
                                    onFocus={() => handleFieldFocus("cvv")}
                                    onBlur={handleFieldBlur}
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
                                onPress={handleCreateCreditCard}
                                children="Salvar"
                                variant="field"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }