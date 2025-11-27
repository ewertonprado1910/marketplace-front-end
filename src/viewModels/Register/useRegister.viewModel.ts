import { useState } from "react"

export const useRegisterViewModel = () => {
    const [userData, setUserData] = useState({
        name: "Eu"
    })

    return {
        userData,
        setUserData
    }
}