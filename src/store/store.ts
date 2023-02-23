import { configureStore } from "@reduxjs/toolkit"
import CardSlice from './CardReducer'
import CartSlice from "./CartReducer"
const store = configureStore({
  reducer: {
    card: CardSlice.reducer,
    cart: CartSlice.reducer,
  },
})


export default store