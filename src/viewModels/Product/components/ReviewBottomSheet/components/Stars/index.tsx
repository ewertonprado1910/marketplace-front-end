import { Ionicons } from "@expo/vector-icons"
import { FC, Key, useState } from "react"
import { TouchableOpacity } from "react-native"
import { colors } from "../../../../../../styles/colors"

interface StarsParams {
    rating: number
    handleRatingChange: (rating: number) => void
}

export const Stars: FC<StarsParams> = ({
    rating,
    handleRatingChange
}) => {
    return Array.from({ length: 5 }, (_, index) => {
        const starNumber = index + 1
        const isSelected = starNumber <= rating

        return (
            <TouchableOpacity
                onPress={() => handleRatingChange(starNumber)}
            >
                <Ionicons
                    name={isSelected ? "star" : "star-outline"}
                    color={isSelected ? colors["purple-base"] : colors.gray[200]}
                    size={32}
                />
            </TouchableOpacity>


        )
    })
}