import { useSelector } from 'react-redux'
import { StateProps } from '../store'
import { CartItemProps } from '../store/modules/cart/types'

export function Cart() {
	/* primeira tipagem e o que vai, e a segunda e  retorno */
	const cart = useSelector<StateProps, CartItemProps[]>(
		(state) => state.Cart.items,
	)

	return (
		<table>
			<thead>
				<tr>
					<th>Produto</th>
					<th>Preco</th>
					<th>Quantidade</th>
					<th>SubTotal</th>
				</tr>
			</thead>
			<tbody>
				{cart.map((item) => (
					<tr key={item.product.id}>
						<td>{item.product.title}</td>
						<td>{item.product.price}</td>
						<td>{item.quantity}</td>
						<td>{(item.product.price * item.quantity).toFixed(2)}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
