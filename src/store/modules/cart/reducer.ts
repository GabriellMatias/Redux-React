import { Reducer } from 'redux'
import { CartStateProps } from './types'

const INITIAL_STATE: CartStateProps = {
  items: [],
}

export const Cart: Reducer<CartStateProps> = () => {
  return INITIAL_STATE
}
