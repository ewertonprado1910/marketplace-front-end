
import { ProductInterface } from "../../../../shared/interfaces/product"
import { FC } from "react"
import { ProductCardView } from "./productCard.view"
import { useProductCardViewModel } from "./useProductCard.viewModel"

interface ProductCardParams {
    product: ProductInterface
}

export const ProductCard: FC<ProductCardParams> = (props) => {

    const viewModel = useProductCardViewModel(props)

    return (
        <ProductCardView {...viewModel} />
    )
}