import { Text, TouchableOpacity, View } from "react-native"
import { AppInput } from "../../../../shared/components/AppInput"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "../../../../styles/colors"
import { useBottomSheetStore } from "../../../../shared/store/bottomsheet-estore"
import { Filter } from "../Filter"


export const SearchInput = () => {
    const { open } = useBottomSheetStore()

    return (
        <View>
            <Text className="text-2xl font-bold mt-6">Explorar Produtos</Text>

            <View className="flex-row">
                <View className="flex-1">
                    <AppInput leftIcon="search" className="text-lg" />
                </View>

                <TouchableOpacity
                    onPress={() => {
                        open({
                            content: <Filter/>
                        })
                    }}
                    className="ml-4 mt-11 items-center justify-center rounded-lg border-[1px] w-[48px] h-[48px] border-purple-base">
                    <Ionicons
                        name="filter-outline"
                        size={25}
                        color={colors["purple-base"]}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}