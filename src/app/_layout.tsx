import { Stack } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ToastMenager from "toastify-react-native"

import "../styles/global.css"
import { AppModal } from "../shared/components/AppModal"
import { useUserStore } from "../shared/store/user-store"

const queryClient = new QueryClient()

export default function RootLayout() {
    const { token } = useUserStore()

    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="(public)" />
                    <Stack.Screen name="(private)" />
                </Stack>
                <AppModal />
                <ToastMenager useModal={false} />
            </SafeAreaView>
        </QueryClientProvider >
    )
}