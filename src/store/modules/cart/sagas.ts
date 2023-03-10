import { StateProps } from './../../index'
import { all, takeLatest, select, call, put } from 'redux-saga/effects'
import {
	addProductToCartFailure,
	addProductToCartRequest,
	addProductToCartSuccess,
} from './actions'
import { AxiosResponse } from 'axios'
import { api } from '../../../services/api'
import { ActionTypes } from './types'

/* pega o retorno de uma funcao e transforma em tipagem */
type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface StockResponse {
	id: number
	quantity: number
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
	const { product } = payload
	const currentQuantity: number = yield select((state: StateProps) => {
		return (
			state.Cart.items.find((item) => item.product.id === product.id)
				?.quantity ?? 0
		)
	})
	/* dentr do redux as chamadas API devem ser feitas cm oo yield call */
	const availableStockResponse: AxiosResponse<StockResponse> = yield call(
		api.get,
		`stock/${product.id}`,
	)
	if (availableStockResponse.data.quantity > currentQuantity) {
		yield put(addProductToCartSuccess(product))
	} else {
		yield put(addProductToCartFailure(product.id))
	}
}

export default all([
	takeLatest(ActionTypes.addProductToCartRequest, checkProductStock),
])
