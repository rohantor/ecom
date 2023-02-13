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
type ActionType = AddToCards | AddToCard

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
    console.log("payload" + action.payload)
    return {
      ...state,
      cardDetailsArray: [...state.cardDetailsArray, ...action.payload],
    }
  }
  return state
}
const store = createStore(reducer)

export default store
