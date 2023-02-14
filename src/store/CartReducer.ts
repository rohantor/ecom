import { CartProductInterface } from '../Interface'


interface RemoveCartItem {
  type: 'RemoveCartItem'
  payload: number
}

interface SetCart {
  type: 'SetCart'
  payload: CartProductInterface[]
}
export interface CartState {
  cartItems: CartProductInterface[]
}
type ActionType =
  SetCart
  | RemoveCartItem

const initialState: CartState = {

  cartItems: [],
}

const cartReducer = (state = initialState, action: ActionType) => {
  
  if (action.type === 'SetCart') {
    return {
      ...state,
      cartItems: [...action.payload],
    }
  }
  if (action.type === 'RemoveCartItem') {
    return {
      ...state,
      cartItems: state.cartItems.filter(
        (c: CartProductInterface, index) => index !== action.payload
      ),
    }
  }
  return state
}
export default cartReducer

