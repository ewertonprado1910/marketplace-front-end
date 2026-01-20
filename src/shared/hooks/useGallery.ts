import { useCallback, useState } from "react"
import { ImagePickerOptions } from "expo-image-picker"
import * as ImagePicker from "expo-image-picker"
import { Toast } from "toastify-react-native"
import { Alert, Linking } from "react-native"



export const useGallery = (pickerOptions?: ImagePickerOptions) => {

    const [isLoading, setIsLoading] = useState(false)

    const requestGalleryPermission = useCallback(async () => {

        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

            const currentStatus = status === "granted"

            if (!currentStatus) {
                Alert.alert(
                    "Permissão Negada",
                    "Precisamos da permissão para acessar a galeria de fotos.",
                    [
                        {
                            text: "Cancelar",
                            style: "cancel"
                        },
                        {
                            text: "Abrir configurações",
                            onPress: () => {
                                Linking.openSettings()
                            }
                        }
                    ]
                )
            }

            return currentStatus

        } catch (error) {
            Toast.error("Erro ao solicitar galeria", "top")
            return false
        }

    }, [])

    const openGallery = useCallback(async (): Promise<string | null> => {
        setIsLoading(true)
        try {
            const hasPermission = await requestGalleryPermission()

            if (!hasPermission) return null

            const result = await ImagePicker.launchImageLibraryAsync(pickerOptions ?? {})

            if (!result.canceled && result.assets && result.assets.length > 0) {
                Toast.success("Foto selecionada com sucesso!", "top")
                return result.assets[0].uri
            }

            return null

        } catch (error) {
            Toast.error("Erro ao selecionar a foto!", "top")
            return null
        } finally {
            setIsLoading(false)
        }

    }, [pickerOptions, requestGalleryPermission])

    return {
        requestGalleryPermission,
        openGallery,
        isLoading,

    }

}