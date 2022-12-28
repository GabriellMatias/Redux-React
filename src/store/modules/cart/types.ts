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
}
