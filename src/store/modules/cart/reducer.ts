import { Reducer } from 'redux'
import { ActionTypes, CartStateProps } from './types'
import produce from 'immer'

const INITIAL_STATE: CartStateProps = {
	items: [],
	failedStockCheck: [],
}

export const Cart: Reducer<CartStateProps> = (
	state = INITIAL_STATE,
	action,
) => {
	/* produce do immer para facilitar trabalh com a imutabilidade */
	return produce(state, (draft) => {
		switch (action.type) {
			case ActionTypes.addProductToCartSuccess:
				{
					const { product } = action.payload
					const productExists = draft.items.findIndex(
						(item) => item.product.id === product.id,
					)
					/* se eu achar o index d produto, eu vou adicionar mais um na quantidade
					DESSE produto */
					if (productExists >= 0) {
						draft.items[productExists].quantity++
					} else {
						draft.items.push({
							product,
							quantity: 1,
						})
					}

					// return {
					// 	...state,
					// 	items: [
					// 		...state.items,
					// 		{
					// 			product,
					// 			quantity: 1,
					// 		},
					// 	],
					// }
				}
				break
			case ActionTypes.addProductToCartFailure: {
				draft.failedStockCheck.push(action.payload.productId)

				break
			}

			default: {
				return draft
			}
		}
	})
}
