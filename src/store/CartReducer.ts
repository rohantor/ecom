import { createSlice } from '@reduxjs/toolkit'
import { CartProductInterface } from '../Interface'
export interface CartState {
  cartItems: CartProductInterface[]
}

const initialState: CartState = {
  cartItems: [],
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    SetCart(state, action) {
      return {
        ...state,
        cartItems: [...action.payload],
      }
    },
    RemoveCartItem(state, action) {
      let temp = [...state.cartItems]
      temp.splice(action.payload, 1)
      return {
        ...state,
        cartItems: [...temp],
      }
    },
  },
})
export const CartActions = CartSlice.actions;
export default CartSlice
