import { createSlice } from '@reduxjs/toolkit'
import { CartProductInterface } from '../Interface'
import axios from 'axios'
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

export const fetchCartItems =()=>async(dispatch: (arg0: { payload: any; type: "cart/SetCart" }) => void)=>{
 const { data } = await axios.get(process.env.REACT_APP_BASE_URL + 'cart')

 dispatch(CartActions.SetCart(data))



}
export const CartActions = CartSlice.actions;
export default CartSlice
