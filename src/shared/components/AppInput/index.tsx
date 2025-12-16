import { Pressable, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import { appInputVariants, AppInputVariantsProps } from "./input.variants"
import { FC } from "react"
import { useAppInputViewModel } from "./useAppInputViewModel"

export interface AppInputProps extends TextInputProps, AppInputVariantsProps {
    label?: string,
    leftIcon?: keyof typeof Ionicons.glyphMap,
    rightIcon?: keyof typeof Ionicons.glyphMap,
    containerClassName?: string,
    mask?: (value: string) => void | string
    error?: string
}

export const AppInput: FC<AppInputProps> = ({
    label,
    leftIcon,
    rightIcon,
    containerClassName,
    value,
    isError,
    secureTextEntry = false,
    onBlur,
    onFocus,
    onChangeText,
    mask,
    error,
    isDisabled,
    ...textInputProps
}) => {
    const {
        getItemColor,
        handleBlur,
        handleFocus,
        handlePasswordToggle,
        handleWarapperPress,
        showPassword,
        handleTextChange,
        isFocused,

    } = useAppInputViewModel({
        onBlur,
        onFocus,
        isError: !!error,
        mask,
        onChangeText,
        isDisabled,
        secureTextEntry,
        value
    })

    const style = appInputVariants({
        isFocused,
        isDisabled,
        isError: !!error
    })

    return (
        <View className={style.container(
            { className: containerClassName })}>

            <Text className={style.label()}>{label}</Text>
            <Pressable className={style.wrapper()}>

                {leftIcon && 
                    <Ionicons
                        color={getItemColor()}
                        className="mr-3"
                        name={leftIcon}
                        size={22} />
                }

                <TextInput
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    className={style.input()}
                    value={value}
                    onChangeText={handleTextChange}
                    secureTextEntry={showPassword}
                    {...textInputProps} />

                {secureTextEntry && (
                    <TouchableOpacity activeOpacity={0.7}
                        onPress={handlePasswordToggle}>
                        <Ionicons
                            name={showPassword ? "eye-off-outline" : "eye-outline"}
                            size={22} />
                    </TouchableOpacity>
                )}
            </Pressable>

            {error && (
                <Text className={style.error()}>
                    <Ionicons name="alert-circle-outline" /> {error}
                </Text>
            )}

        </View>
    )
}