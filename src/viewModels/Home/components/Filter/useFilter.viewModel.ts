import { useGetProductCategoriesQuery } from "../../../../shared/queries/product/use-get-product-category"
import { useFilterStore } from "../../../../shared/store/use-filter-store"
import { useBottomSheetStore } from "../../../../shared/store/bottomsheet-estore"

export const useFilterViewModel = () => {
    const {
        data: productCategory,
        isLoading,
    } = useGetProductCategoriesQuery()

    const {
        updateFilter,
        filterState,
        applyFilters,
        appliedFilterState
    } = useFilterStore()

    const { close } = useBottomSheetStore()

    const handleValueMaxChange = (value: number) => {
        updateFilter({ key: "valueMax", value })
    }
    console.log(appliedFilterState)

    const handleValueMinChange = (value: number) => {
        updateFilter({ key: "valueMin", value })
    }

    const handleCategoryToggle = (categoryId: number) => {
        const categoryAlredyInArray =
            filterState.selectedCategories.includes(categoryId)

        if (categoryAlredyInArray) {
            updateFilter({
                key: "selectedCategories",
                value: filterState.selectedCategories.filter((id) => id !== categoryId)
            })
        } else {
            updateFilter({
                key: "selectedCategories",
                value: [...filterState.selectedCategories, categoryId]
            })
        }
    }

    const handleApplyFilters = () => {
        applyFilters()
        close()
    }

    return {
        productCategory,
        isLoading,
        handleValueMaxChange,
        handleValueMinChange,
        handleCategoryToggle,
        selectedCategories: filterState.selectedCategories,
        handleApplyFilters
    }
}