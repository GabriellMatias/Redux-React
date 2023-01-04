export enum ActionTypes {
	addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
	addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
	addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
}

export interface ProductProps {
	id: number
	title: string
	price: number
}

export interface CartItemProps {
	product: ProductProps
	quantity: number
}

export interface CartStateProps {
	items: CartItemProps[]
	failedStockCheck: []
}
