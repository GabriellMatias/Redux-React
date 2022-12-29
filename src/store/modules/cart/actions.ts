import { ProductProps } from './types'

export function addProductToCart(product: ProductProps) {
	return {
		type: 'ADD_PRODUCT_TO_CART',
		payload: {
			product,
		},
	}
}
