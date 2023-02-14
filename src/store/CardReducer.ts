import { ProductInterface } from "../Interface"
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

interface Wishlist {
  type: 'Wishlist'
  payload: number
}

export interface CardState {
  cardDetailsArray: ProductInterface[]
}
type ActionType =
  | SetCards
  | AddToCard
  | RemoveCard
  | Wishlist

const initialState: CardState = {
  cardDetailsArray: [],
}

 const cardsArrayReducer = (state = initialState, action: ActionType) => {
  if (action.type === 'AddCard') {
    return {
      
      cardDetailsArray: [...state.cardDetailsArray, action.payload],
    }
  }
  if (action.type === 'SetCards') {
    return {
      
      cardDetailsArray: [...state.cardDetailsArray, ...action.payload],
    }
  }
  if (action.type === 'RemoveCard') {
    
    let temp = [...state.cardDetailsArray]
     temp.splice(
        state.cardDetailsArray.findIndex((c) => c.id === action.payload),
        1
      )
    return {
      cardDetailsArray: [...temp],
      
    }
  }
  if (action.type === 'Wishlist') {
    let NewArr = [...state.cardDetailsArray]

    NewArr[action.payload].wishListed = !NewArr[action.payload].wishListed

    return {
     
      cardDetailsArray: [...NewArr],
    }
  }
 
  return state
}
export default cardsArrayReducer