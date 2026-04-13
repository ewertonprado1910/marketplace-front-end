import { useEffect } from "react"
import { Extrapolation, interpolate, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from "react-native-reanimated"

export const useCreditCardViewModel = (isFlipped: boolean) => {
    const flipValue = useSharedValue(0)

    const frontAnimatedStyle = useAnimatedStyle(() => {
        const rotateValue = interpolate(flipValue.value,
            [0, 1], [0, 180],)

        return {
            transform: [
                { rotateY: `${rotateValue}deg` }],
        }
    })

    const backAnimatedStyle = useAnimatedStyle(() => {
        const rotateValue = interpolate(flipValue.value,
            [0, 1], [180, 360],
        )

        return {
            transform: [
                { rotateY: `${rotateValue}deg` }
            ],
        }
    })

    const formatCardNumber = (cardNumber: string) => {
        const cleaned = cardNumber.replace(/\s/g, "")
        const pedded = cleaned.padEnd(16, "*")

        return pedded.match(/.{1,4/g)?.join(" ") || "**** **** **** ****"
    }



    useEffect(() => {
        flipValue.value = withTiming(isFlipped ? 1 : 0, {
            duration: 600
        })
    }, [isFlipped])

    return {
        frontAnimatedStyle,
        backAnimatedStyle,
        formatCardNumber
    }
}