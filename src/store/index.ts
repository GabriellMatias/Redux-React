import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { CartStateProps } from './modules/cart/types'
import rootReducer from './modules/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './modules/rootSaga'

export interface StateProps {
	Cart: CartStateProps
}
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares)),
)
sagaMiddleware.run(rootSaga)
