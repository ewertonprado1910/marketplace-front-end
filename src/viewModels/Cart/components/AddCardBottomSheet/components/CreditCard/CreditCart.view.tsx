import { FC } from "react"
import Animated from "react-native-reanimated"
import { Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import { useCreditCardViewModel } from "./useCreditCard.viewModel"
import { FocusedField } from "../../useAddCardBottomSheet.viewModel"
import { colors } from "../../../../../../styles/colors"
import clsx from "clsx"

import { CardData } from "."

const PURPLE_GRADIENT = [
    colors["disabled-purple"],
    colors["purple-base"],
    colors["purple-dark"]
] as const


export const CreditCardView: FC<
    ReturnType<typeof useCreditCardViewModel>
    & { focusedField: FocusedField | null } & {
        cardData: CardData
    }> = ({
        focusedField,
        frontAnimatedStyle,
        backAnimatedStyle,
        cardData,
        formatCardNumber
    }) => {
        return (
            <View style={{
                height: 190
            }}>
                <Animated.View style={[

                    frontAnimatedStyle,
                    {
                        position: "absolute",
                        width: "100%",
                        height: 192,
                        backfaceVisibility: "hidden",
                        marginTop: 10
                    }]}>
                    <LinearGradient
                        colors={PURPLE_GRADIENT}
                        start={{ x: 0, y: 0.5 }}
                        style={{
                            flex: 1,
                            borderRadius: 16,
                            padding: 20
                        }}
                    >

                        <View className="flex-row justify-between items-center mb-4">
                            <View className="w-12 h-8 bg-yellow-400 rounded-md" />
                        </View>

                        <View className={clsx("py-2 px-2 mb-6 rounded-lg", {
                            "": focusedField !== "number",
                            "bg-white/20": focusedField === "number"
                        })}>
                            <Text className="text-white text-lg tracking-widest text-center">
                                {cardData.number || formatCardNumber(cardData.number)}
                            </Text>
                        </View>

                        <View className="flex-row justify-between items-center">
                            <View className={clsx("flex-1 py-2 px-2 rounded-lg ", {

                                "bg-white/20": focusedField === "name"
                            })}>
                                <Text className="text-white text-sm font-bold uppercase">
                                    PORTADOR
                                </Text>

                                <Text className="text-white text-sm font-bold uppercase">
                                    {cardData.name || "NOME DO TITULAR"}
                                </Text>
                            </View>

                            <View className={clsx("ml-4 py-1 px-1 rounded-lg", {
                                "bg-white/20": focusedField === "expiry"
                            })}>
                                <Text className="text-white text-xs font-semibold uppercase">
                                    VÁLIDO ATÉ
                                </Text>
                                <Text className="text-white text-sm font-bold uppercase">
                                    {cardData.expiry || "MM/AA"}
                                </Text>
                            </View>

                        </View>
                    </LinearGradient>
                </Animated.View>


                <Animated.View style={[
                    backAnimatedStyle,
                    {
                        position: "absolute",
                        width: "100%",
                        height: 192,
                        backfaceVisibility: "hidden",
                        marginTop: 10
                    }]}>
                    <LinearGradient
                        colors={PURPLE_GRADIENT}
                        start={{ x: 0, y: 0.5 }}
                        style={{
                            flex: 1,
                            borderRadius: 16,
                        }}
                    >

                        <View className="h-[30px] bg-black w-[100%] mt-[15px]" />

                        <View className="flex-1 justify-center items-end px-5">
                            <View className="w-24">
                                <Text className="text-white mb-1 text-sm font-semibold">
                                    CVV
                                </Text>

                                <View className={clsx("bg-white p-1 rounded h-8 justify-center", {
                                    "bg-blue-100": focusedField === "cvv"
                                })}>
                                    <Text>
                                        {cardData.cvv || "..."}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                </Animated.View>
            </View >

        )
    }