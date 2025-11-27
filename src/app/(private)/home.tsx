import { router } from "expo-router"
import { Button, Text, View } from "react-native"

export default function Home() {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-xl ">Home</Text>
            <Button title="Voltar" onPress={() => router.back()}></Button>
        </View>
    )
}