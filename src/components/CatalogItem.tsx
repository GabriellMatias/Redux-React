import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StateProps } from '../store'
import { addProductToCartRequest } from '../store/modules/cart/actions'
import { ProductProps } from '../store/modules/cart/types'

interface CatalogItemProps {
	product: ProductProps
}

export function CatalogItem({ product }: CatalogItemProps) {
	const dispatch = useDispatch()
	const hasFailedStockCheck = useSelector<StateProps, boolean>((state) => {
		return state.Cart.failedStockCheck.includes(product.id)
	})
	const handleAddProductToCart = useCallback(() => {
		dispatch(addProductToCartRequest(product))
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

					{hasFailedStockCheck && (
						<span style={{ color: 'red' }}>Falta de estoque</span>
					)}
				</article>
			</main>
		</>
	)
}
