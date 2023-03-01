import { configureStore } from "@reduxjs/toolkit"
import CardSlice from './CardReducer'
import createSagaMiddleware from 'redux-saga'
import CartSlice from "./CartReducer"
import rootSaga from "./rootSaga"
const saga = createSagaMiddleware()
const store = configureStore({
  reducer: {
    card: CardSlice.reducer,
    cart: CartSlice.reducer,
  },
  middleware:[saga]
})


saga.run(rootSaga)

export default store