import { createElement } from "react"
import { useModalStore } from "../store/modal-store"
import { Ionicons } from "@expo/vector-icons"
import { SelectionModal, SelectionModalProps } from "../components/Modal/SelectionModal"
import { SuccessModal, SuccessModalParams } from "../components/SuccessModal"

export type SelectionVariant = "primary" | "secundary" | "danger"

export interface SelectionOption {
    text: string
    onPress: () => void
    icon?: keyof typeof Ionicons.glyphMap
    variant?: SelectionVariant
}

export const useAppModal = () => {
    const { open, close } = useModalStore()

    const showSelection = ({
        options,
        title,
        message
    }: {
        title: string,
        message?: string,
        options: SelectionOption[]
    }) => {
        open(createElement(SelectionModal, {
            title, options, message
        } as SelectionModalProps))
    }

    const showSuccess = (config: SuccessModalParams) => {
        open(createElement(SuccessModal, {
            ...config,
            onButtonPress: () => {
                if (config.onButtonPress) {
                    config.onButtonPress()
                }
                close()
            }
        }))
    }

    return { showSelection, showSuccess }
}