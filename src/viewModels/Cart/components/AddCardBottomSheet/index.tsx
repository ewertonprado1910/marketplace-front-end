import { AddCardBottomSheetView } from "./AddCardBottomSheet.view"
import { useCardBottomSheetViewModel } from "./useCardBottomSheet.viewModel"

export const AddCardBottomSheet = () => {
    const viewModel = useCardBottomSheetViewModel()

    return <AddCardBottomSheetView {...viewModel}/>
}