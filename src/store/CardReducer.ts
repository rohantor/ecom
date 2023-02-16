import { ProductInterface } from '../Interface'
import { createSlice, current } from '@reduxjs/toolkit'
export interface CardState {
  cardDetailsArray: ProductInterface[]
}
const initialState: CardState = {
  cardDetailsArray: [],
}

const AddToCards = (array1: ProductInterface[], array2: ProductInterface[]) => {
  return [...array1, ...array2]
}

const cardSlice = createSlice({
  name: 'card',
  initialState: initialState,
  reducers: {
    AddCard(state, action) {
      return {
        cardDetailsArray: [
          ...AddToCards(state.cardDetailsArray, [action.payload]),
        ],
      }
    },
    SetCards(state, action) {
      // console.log('set state', state,action)
      return {
        ...state,
        cardDetailsArray: [
          ...AddToCards(state.cardDetailsArray, action.payload),
        ],
      }
    },
    RemoveCard(state, action) {
      let temp = [...state.cardDetailsArray]
      temp.splice(
        state.cardDetailsArray.findIndex((c) => c.id === action.payload),
        1
      )
      return {
        cardDetailsArray: [...temp],
      }
    },
    Wishlist(state, action) {
      state.cardDetailsArray[action.payload].wishListed =
        !state.cardDetailsArray[action.payload].wishListed
    },
  },
})

export const CardActions = cardSlice.actions
export default cardSlice
