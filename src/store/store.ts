import { createStore,compose } from 'redux'
import { CartProductInterface, ProductInterface } from '../Interface'
import { composeWithDevTools } from '@redux-devtools/extension'
interface AddToCard {
  type: 'AddCard'
  payload: ProductInterface
}
interface SetCards {
  type: 'SetCards'
  payload: ProductInterface[]
}
interface RemoveCard {
  type: 'RemoveCard'
  payload: number
}
interface RemoveCartItem {
  type: 'RemoveCartItem'
  payload: number
}
interface Wishlist {
  type: 'Wishlist'
  payload: number
}
interface SetCart {
  type: 'SetCart'
  payload: CartProductInterface[]
}
type ActionType =
  | SetCards
  | AddToCard
  | RemoveCard
  | Wishlist
  | SetCart
  | RemoveCartItem

interface State {
  cardDetailsArray: ProductInterface[]
  cartItems: CartProductInterface[]
}

const initialState: State = {
  cardDetailsArray: [],
  cartItems: [],
}

const reducer = (state = initialState, action: ActionType) => {
  if (action.type === 'AddCard') {
    return {
      ...state,
      cardDetailsArray: [...state.cardDetailsArray, action.payload],
    }
  }
  if (action.type === 'SetCards') {
    return {
      ...state,
      cardDetailsArray: [...state.cardDetailsArray, ...action.payload],
    }
  }
  if (action.type === 'RemoveCard') {
    return {
      ...state,
      cardDetailsArray: state.cardDetailsArray.filter(
        (card) => card.id !== action.payload
      ),
    }
  }
  if (action.type === 'Wishlist') {
    let NewArr = state.cardDetailsArray
  
    NewArr[action.payload].wishListed = !NewArr[action.payload].wishListed
   
    return {
      ...state,
      cardDetailsArray: [...NewArr],
    }
  }
  if (action.type === 'SetCart') {
    return {
      ...state,
      cartItems: [...action.payload],
    }
  }
  if (action.type === 'RemoveCartItem'){

    return {
      ...state,cartItems:state.cartItems.filter((c:CartProductInterface,index)=> index !== action.payload)
    }
  } 
  return state
}


 const store = createStore(
   reducer /* preloadedState, */,
  composeWithDevTools()
 )

export default store
