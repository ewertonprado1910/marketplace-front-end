import { router } from "expo-router"
import { Button, Text, TouchableOpacity, View } from "react-native"
import { LoginView } from "../viewModels/Login/Login.view"
import { useLoginViewModel } from "../viewModels/Login/useLoginviewModel"

export default function Login() {
    const props = useLoginViewModel()
    
    return (
        <LoginView {...props}/>
    )
}