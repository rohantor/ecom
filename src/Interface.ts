export interface ProductInterface {
  title: string
  image: string
  description: string
  id: number
  price: number
  wishListed: boolean
}
export interface CartProductInterface {
  title: string
  image: string
  description: string
  id: number
  price: number
}
export interface HomePageInterface{

  cardDetailsArray: ProductInterface[]
  setCardDetailsArray: React.Dispatch<React.SetStateAction<ProductInterface[]>>
}
export interface AddToLocal extends HomePageInterface {
  AddToLocalStorage: (value: ProductInterface) => void
  
}
export interface ModalPropInterface {
  isClose: boolean
  setModalPos: React.Dispatch<React.SetStateAction<boolean>>
  Product: ProductInterface
}

export interface CardPropsInterface extends ProductInterface {
  index: number
}
