import { combineReducers } from 'redux'
import cardReducer from './CardReducer'
import cartReducer from './CartReducer'
import { CartState } from './CartReducer'
import { CardState } from './CardReducer'
export interface RootStateType {
  cart: CartState  
   card: CardState
}
export  const rootReducer =  combineReducers({
  card: cardReducer,
  cart:cartReducer,
})