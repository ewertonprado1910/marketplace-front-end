
import { marketPlaceApiClient } from "../api/market-place"
import { PaginatedResponse } from "../interfaces/http/paginated-response"
import { ProductRequest } from "../interfaces/http/product"
import { GetProductCommentsInterface } from "../interfaces/http/product-comments"
import { GetProductsDetailsInterface } from "../interfaces/http/products-details"
import { ProductCategory, ProductInterface } from "../interfaces/product"
import { ProductComment } from "../interfaces/product-comment"


export const getProduct = async (params: ProductRequest) => {
    const { data } = await marketPlaceApiClient.post<
        PaginatedResponse<ProductInterface>>(
            "/products",
            params
        )
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

export const getProductComments = async (
    params: GetProductCommentsInterface
) => {
    const {
        data
    } = await marketPlaceApiClient.post<PaginatedResponse<ProductComment>>(
        "/products/comments", params
    )
  
    return data
}