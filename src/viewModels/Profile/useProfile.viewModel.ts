import { useForm } from "react-hook-form"

import { ProfileFormData, ProfileSchema } from "./profile.schema"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useState } from "react"
import { useUserStore } from "../../shared/store/user-store"
import { useUpdateProfileMutation } from "../../shared/queries/profile/use-update-profile.mutation"
import { useAppModal } from "../../shared/hooks/useAppModal"
import { useModalStore } from "../../shared/store/modal-store"
import { useCartStore } from "../../shared/store/cart-store"
import { useImage } from "../../shared/hooks/useImage"
import { CameraType } from "expo-image-picker"
import { useUploadAvatarMutation } from "../../shared/queries/auth/use-upload-avatar.mutation"


export const useProfileViewModel = () => {
    const { user, logout } = useUserStore()

    const upDateProfileMutation = useUpdateProfileMutation()
    const { showSelection } = useAppModal()
    const { close } = useModalStore()
    const { clearCart } = useCartStore()

    const uploadAvatarMutation = useUploadAvatarMutation()

    const { hanldeSelectImage } = useImage({
        callback: async (url) => {
            if (url) {
                const { url: responseUrl } =
                    await uploadAvatarMutation.mutateAsync(
                        url
                    )

            }
        },
        cameraType: CameraType.front
    })

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ProfileFormData>({
        resolver: yupResolver(ProfileSchema),
        defaultValues: {
            name: user?.name,
            email: user?.email,
            phone: user?.phone,
            newPassword: undefined,
            password: undefined
        }
    })

    const validatePasswords = (userData: ProfileFormData) => {
        if (!userData.password) return true

        if (userData.password === userData.newPassword &&
            userData?.password?.length > 0
        ) {
            return false
        }
        return true
    }

    const onSubmit = handleSubmit(async (userData) => {
        if (!validatePasswords(userData)) return
        if (!user) return

        await upDateProfileMutation.mutateAsync({
            ...userData,
        })
    })

    const handleLogout = () => showSelection({
        title: "Sair",
        message: "Certeza que deseja sair da sua conta?",
        options: [
            {
                text: "Continuar logado",
                onPress: close

            },
            {
                variant: "danger",
                onPress: () => {
                    logout(),
                        clearCart(),
                        close()
                },
                text: "Sair",

            },
        ]

    })

    return {
        onSubmit,
        control,
        avatarUri: user?.avatarUrl,
        isSubmitting,
        handleLogout,
        hanldeSelectImage,
    }
}