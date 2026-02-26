
import { marketPlaceApiClient } from "../api/market-place"
import { ProductRequest } from "../interfaces/http/product"
import { ProductResponse } from "../interfaces/http/product-response"
import { GetProductsDetailsInterface } from "../interfaces/http/products-details"
import { ProductCategory } from "../interfaces/product"


export const getProduct = async (params: ProductRequest) => {
    const { data } = await marketPlaceApiClient.post<ProductResponse>(
        "/products",
        params
    )
    console.log("PARAMS", params)
    return data
}

export const getProductCategory = async () => {
    const { data } = await marketPlaceApiClient.get<ProductCategory[]>(
        "/products/categories"
    )
    return data
}

export const getProductsDetails = async (id: number) => {
    const { data } = await marketPlaceApiClient.get<GetProductsDetailsInterface>(
        `/products/${id}`)

    return data
}