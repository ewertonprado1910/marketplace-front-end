import { FC } from "react"
import { AppPriceTextView } from "./AppPriceTextView"
import { useAppPricetextViewModel } from "./useAppPricetextViewModel"

interface AppPriceTextParams {
    classNameCurrency?: string
    classNameValue?: string
    value: number
}

export const AppPriceText: FC<AppPriceTextParams> = ({
    classNameCurrency,
    classNameValue,
    value
}) => {

    const viewModel = useAppPricetextViewModel(value)

    return <AppPriceTextView
        {...viewModel}
        classNameCurrency={classNameCurrency}
        classNameValue={classNameValue}
    />
}