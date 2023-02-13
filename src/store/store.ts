import { createStore } from 'redux'
import { ProductInterface } from '../Interface'

interface AddToCard {
  type: 'AddCard'
  payload: ProductInterface
}
interface AddToCards {
  type: 'AddCards'
  payload: ProductInterface[]
}
interface RemoveCard {
  type: 'RemoveCard'
  payload: number
}
interface Wishlist {
  type: 'Wishlist'
  payload: number
}
type ActionType = AddToCards | AddToCard | RemoveCard | Wishlist

interface State {
  cardDetailsArray: ProductInterface[]
  cartItems: ProductInterface[]
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
  if (action.type === 'AddCards') {
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
      console.log(NewArr)
    return {
      ...state,
      cardDetailsArray: NewArr,
    }
  }
  return state
}
const store = createStore(reducer)

export default store
