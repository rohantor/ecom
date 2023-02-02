import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactElement,
} from 'react'
import { ProductInterface } from '../Interface'

interface StoreInterface {
  cardDetailsArray: ProductInterface[]
  setCardDetailsArray: Dispatch<SetStateAction<ProductInterface[]>>
  AddToLocalStorage: (value: ProductInterface) => void
  cartItems: ProductInterface[]
  setCartItems: Dispatch<SetStateAction<ProductInterface[]>>
}
export const store = createContext<StoreInterface>({
  cardDetailsArray: [],
  setCardDetailsArray: () => {},
  AddToLocalStorage: () => {},
  cartItems: [],
  setCartItems: () => {},
})

export function ContextProvider(props: { children: ReactElement }) {
  const [cardDetailsArray, setCardDetailsArray] = useState<ProductInterface[]>(
    []
  )
  const [cartItems, setCartItems] = useState<Array<ProductInterface>>([])
  const AddToLocalStorage = (item: ProductInterface) => {
    setCartItems((curr) => {
      localStorage.setItem('Cart', JSON.stringify([...curr, item]))

      return [...curr, item]
    })
  }
  return (
    <store.Provider
      value={{
        cardDetailsArray,
        setCardDetailsArray,
        cartItems,
        AddToLocalStorage,
        setCartItems,
      }}
    >
      {props.children}
    </store.Provider>
  )
}
