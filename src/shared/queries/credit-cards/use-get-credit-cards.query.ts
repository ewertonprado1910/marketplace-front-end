import { useQuery } from "@tanstack/react-query"

import { getCreditCart } from "../../services/credit-card.service"

export const useGetCreditCardsQuey = () => {
    const query = useQuery({
        queryFn: getCreditCart,
        queryKey: ["credit-cards"],
        staleTime: 1000 * 60 * 5
    })

    return query
}