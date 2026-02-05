import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { RegisterFormData, registerSchema } from "../Register/register.schema"
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation"
import { useUserStore } from "../../shared/store/user-store"
import { useImage } from "../../shared/hooks/useImage"
import { useState } from "react"
import { CameraType } from "expo-image-picker"
import { useUploadAvatarMutation } from "../../shared/queries/auth/use-upload-avatar.mutation"



export const useRegisterViewModel = () => {
    const { updateUser } = useUserStore()
    const [avatarUri, setAvatarUri] = useState<string | null>(null)

    const { hanldeSelectImage } = useImage({
        callback: setAvatarUri,
        cameraType: CameraType.front
    })

    const hanldeSelectionAvatar = async () => {
        await hanldeSelectImage()
    }

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: ""
        }
    })

    const uploadAvatarMutatio = useUploadAvatarMutation()

    const userRegisterMutation = useRegisterMutation({
        onSuccess: async () => {

            if (avatarUri) {
                const { url } = await uploadAvatarMutatio.mutateAsync(avatarUri)

                updateUser({ avatarUrl: url })
            }
        }
    })

    const onSubmit = handleSubmit(async (userData) => {
        const { confirmPassword, ...registerData } = userData
        await userRegisterMutation.mutateAsync(
            registerData
        )
    })

    return {
        control,
        errors,
        onSubmit,
        hanldeSelectionAvatar,
        avatarUri
    }
}