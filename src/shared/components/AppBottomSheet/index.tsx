import { Modal, View, TouchableWithoutFeedback, ScrollView, Dimensions } from "react-native"
import { useEffect, useMemo } from "react"
import { colors } from "../../../styles/colors"
import { useBottomSheetStore } from "../../store/bottomsheet-estore"

export const AppBottomSheet = () => {
    const { content, close, isOpen, config } = useBottomSheetStore()

    const sheetHeight = useMemo<number>(() => {
        const snap = config?.snapPoints?.[0] || "80%"
        const percent = parseFloat(snap) / 100
        const { height: SCREEN_HEIGHT } = Dimensions.get("window")

        return SCREEN_HEIGHT * percent
    }, [config?.snapPoints])


    useEffect(() => {

    }, [isOpen, content])

    return (
        <Modal
            transparent
            visible={isOpen}
            animationType="slide"
            onRequestClose={close}
        >

            <View className="flex-1 justify-end bg-black/60">

                {/* Backdrop */}
                <TouchableWithoutFeedback onPress={close}>
                    <View className="flex-1 bg-gray-300/70" />
                </TouchableWithoutFeedback>

                {/* Sheet */}
                <View
                    className="bg-white rounded-t-[32px] pb-4"
                    style={{ height: sheetHeight }}
                >
                    {/* Handle fake */}
                    <View className="w-12 h-1 bg-gray-300 rounded-full self-center my-3" />

                    <ScrollView>{content}</ScrollView>
                </View>
            </View>
        </Modal>
    )
}

