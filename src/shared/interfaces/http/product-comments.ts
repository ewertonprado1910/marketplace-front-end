import { ProductComment } from "../product-comment"


export interface GetProductCommentsInterface {
    productId: number
    pagination: {
        page: number
        perPage: number
    }
}

export interface GetProductCommentsResponse {
    page: number
    perPage: number
    total: number
    totalPages: number
    data: ProductComment[]
}