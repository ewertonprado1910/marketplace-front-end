import { Stack } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import "../styles/global.css"

const queryClient = new QueryClient()

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="login" />
                    <Stack.Screen name="register" />
                    <Stack.Screen name="(private)"/>
                </Stack>
            </SafeAreaView>
        </QueryClientProvider >

    )
}