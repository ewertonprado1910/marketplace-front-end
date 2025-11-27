import { router } from "expo-router"
import { Button, Text, TouchableOpacity, View } from "react-native"

export default function Login() {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-purple-950 text-base">
                Login
            </Text>
            <TouchableOpacity onPress={() => router.push("/register")}>
                <Text>Registro</Text>
                <Button title="Tela Home" onPress={() => router.push("/home")}></Button>
            </TouchableOpacity>
        </View>
    )
}