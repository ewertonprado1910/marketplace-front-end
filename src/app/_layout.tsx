import { Stack } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ToastMenager from "toastify-react-native"

import "../styles/global.css"
import { AppModal } from "../shared/components/AppModal"

const queryClient = new QueryClient()

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="login" />
                    <Stack.Screen name="register" />
                    <Stack.Screen name="(private)" />
                </Stack>
                <AppModal />
                <ToastMenager useModal={false}/>
            </SafeAreaView>
        </QueryClientProvider >

    )
}