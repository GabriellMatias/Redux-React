import { legacy_createStore as createStore } from 'redux'
import { CartStateProps } from './modules/cart/types'
import rootReducer from './modules/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export interface StateProps {
	Cart: CartStateProps
}

export const store = createStore(rootReducer, composeWithDevTools())
