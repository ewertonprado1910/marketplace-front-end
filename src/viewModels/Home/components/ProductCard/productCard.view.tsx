import { FC } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"

import { useProductCardViewModel } from "./useProductCard.viewModel"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "../../../../styles/colors"

import { BuildmageUrl } from "../../../../shared/helpers/buildImage"
import { AppPriceText } from "../../../../shared/components/AppPriceText"


export const ProductCardView: FC<
    ReturnType<typeof useProductCardViewModel>> = ({
        product,
        displayName,
        formatRating
    }) => {

        return (
            <TouchableOpacity 
            onPress={() => router.push(`/product/${product.id}`)}
            className="w-[48%] my-1 rounded-xl shadow-sm overflow-hidden h-[157px] p-[4px] bg-white mb2">
                <View>
                    <Image
                        source={{ uri: BuildmageUrl(product.photo) }}
                        style={{ width: "100%", height: 85 }}
                        resizeMode="cover"
                        onError={(err) => {
                            console.log("IMAGE ERROR:", err.nativeEvent)
                        }}
                        onLoad={() => console.log("IMAGE LOADED:", product.photo)}
                    />
                </View>

                <View className="absolute top-0 right-0 flex-row items-center px-2 py-1 rounded-b-lg rounded-none bg-white">
                    <Ionicons
                        name="star"
                        size={12}
                        color={colors["blue-base"]} />

                    <Text className="text-sm font-semibold ml-1">
                        {formatRating}
                    </Text>
                </View>

                <View className="p-3">
                    <Text className="text-xs font-semibold mb-1" numberOfLines={2}>
                        {displayName}
                    </Text>

                    <View className="flex-row items-center">
                        <AppPriceText
                            value={Number(product.value)}
                            classNameCurrency="text-small"
                            classNameValue="text-lg font-bold flex-1"
                        />
                    </View>
                </View>


            </TouchableOpacity>
        )
    }