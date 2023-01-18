export interface ProductInterface {
  title: string
  url: string
  description: string
  id: number,
  price:number,
  wishlisted:boolean
}
export interface AddToLocal {
  AddToLocalStorage: (value: ProductInterface) => void
  cardDetailsArray: ProductInterface[]
  setCardDeatailsArray: React.Dispatch<React.SetStateAction<ProductInterface[]>>
}
export interface ModalPropInterface {
  isClose: boolean
  setModalPos: React.Dispatch<React.SetStateAction<boolean>>
  Product: ProductInterface
}

export interface ProductWithFuncInterface extends ProductInterface {
  setRemoved: (value: any) => void
  AddToLocalStorage: (value: ProductInterface) => void
  setCardDeatailsArray: React.Dispatch<React.SetStateAction<ProductInterface[]>>
  index: number
}
export interface PropsInterface {
  product: ProductWithFuncInterface
}