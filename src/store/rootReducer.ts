import { combineReducers } from 'redux'
import cardReducer from './CardReducer'
import cartReducer from './CartReducer'
export type RootStateType = ReturnType<typeof rootReducer>
export  const rootReducer =  combineReducers({
  card: cardReducer.reducer,
  cart:cartReducer.reducer,
})