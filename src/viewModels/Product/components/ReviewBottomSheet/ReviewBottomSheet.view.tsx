import { FC } from "react"
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native"

import { useReviewBottomSheetViewModel } from "./useReviewBottomSheet.viewModel"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "../../../../styles/colors"
import { AppInput } from "../../../../shared/components/AppInput"
import { AppButton } from "../../../../shared/components/AppButton"
import { Stars } from "./components/Stars"

export const ReviewBottomSheetView: FC<
    ReturnType<typeof useReviewBottomSheetViewModel>
> = ({
    handleContentChange,
    handleRatingChange,
    ratingForm,
    handleFomrSubmit,
    isLoading
}) => {
        return (
            <View className="bg-background ">

                <View className="flex-row items-center justify-between p-6">
                    <Text className="text-lg font-bold text-gray-900">
                        {ratingForm.isEditing
                            ? "Editar avaliação"
                            : "Avaliar produto"
                        }
                    </Text>

                    <TouchableOpacity className="w-8 h-8 items-center justify-center rounded-[9px] border border-gray-400">
                        <Ionicons
                            name="close"
                            color={colors.gray[400]}
                        />
                    </TouchableOpacity>
                </View>

                {isLoading ? (
                    <View className="p-6 items-center justify-center min-h-[300px]">
                        <ActivityIndicator
                            color={colors["purple-base"]}
                            size={"large"}
                        />
                        <Text className="text-gray-600 mt-4 text-center">
                            Verificando avaliações existentes...
                        </Text>
                    </View>
                ) : (
                    <View className="p-4">
                        <Text className="font-semibold text-base text-gray-300">
                            Nota
                        </Text>

                        <View className="flex-row items-center gap-2">
                            <Stars
                                rating={ratingForm.rating}
                                handleRatingChange={handleRatingChange}
                            />
                        </View>

                        <AppInput
                            onChangeText={handleContentChange}
                            label="COMENTÁRIO"
                            placeholder={
                                ratingForm.isEditing
                                    ? "Edite sua avaliação"
                                    : "Descreva sua avaliação"
                            }
                            value={ratingForm.content}
                            multiline
                            numberOfLines={8}
                            textAlign="left"
                            className="h-[120px]"
                            textAlignVertical="top"
                        />

                        <View className="flex-row gap-3 mb-8">
                            <View className="flex-1">
                                <AppButton
                                    children="Cancelar"
                                    variant="outlined"
                                />
                            </View>
                            <View className="flex-1">
                                <AppButton onPress={handleFomrSubmit}>
                                    {ratingForm.isEditing
                                        ? "Atualizar"
                                        : "Enviar"
                                    }
                                </AppButton>
                            </View>
                        </View>
                    </View>
                )}
            </View>
        )
    }