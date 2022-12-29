import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../store/modules/cart/actions'
import { ProductProps } from '../store/modules/cart/types'

interface CatalogItemProps {
	product: ProductProps
}

export function CatalogItem({ product }: CatalogItemProps) {
	const dispatch = useDispatch()
	const handleAddProductToCart = useCallback(() => {
		dispatch(addProductToCart(product))
	}, [dispatch, product])
	return (
		<>
			<main>
				<article key={product.id}>
					<strong>{product.title}</strong>
					<span>{product.price}</span>

					<button type="button" onClick={handleAddProductToCart}>
						Buy Now
					</button>
				</article>
			</main>
		</>
	)
}
