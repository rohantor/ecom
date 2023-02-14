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

    let temp = [...state.cartItems]
    temp.splice(action.payload,1)
    return {
      ...state,
      cartItems:[... temp],
    }
  }
  return state
}
export default cartReducer

