import { useEffect, useState } from "react"

export const useDebounce = <T>(value: T, delay: number = 500) => {
    const [debouceValue, setDebounceValue] = useState<T>(value)

    useEffect(() => {
        const timeoutId = setInterval(() => {
            setDebounceValue(value)
        }, delay)

        return () => clearTimeout(timeoutId)
    }, [value, delay])

    return debouceValue

}