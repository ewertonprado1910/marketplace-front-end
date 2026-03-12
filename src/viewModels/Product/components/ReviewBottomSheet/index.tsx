import { FC } from "react"

import { useReviewBottomSheetViewModel } from "./useReviewBottomSheet.viewModel"
import { ReviewBottomSheetView } from "./ReviewBottomSheet.view"

interface ReviewBottomSheetParams {
    productId: number
}

export const ReviewBottomSheet: FC<ReviewBottomSheetParams> = ({
    productId
}) => {
    const viewModel = useReviewBottomSheetViewModel(productId)

    return <ReviewBottomSheetView {...viewModel} />

}