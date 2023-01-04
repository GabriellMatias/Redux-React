import { all } from 'redux-saga/effects'
import cart from './cart/sagas'

/* funcao generator como o asteristic no final */
export default function* rootSaga() {
	/* *= async e yield=await */
	return yield all([cart])
}
