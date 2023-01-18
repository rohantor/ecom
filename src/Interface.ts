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
  setCardDetailsArray: React.Dispatch<React.SetStateAction<ProductInterface[]>>
}
export interface ModalPropInterface {
  isClose: boolean
  setModalPos: React.Dispatch<React.SetStateAction<boolean>>
  Product: ProductInterface
}

export interface ProductWithFuncInterface {
  setRemoved: (value: any) => void
  AddToLocalStorage: (value: ProductInterface) => void
  setCardDetailsArray: React.Dispatch<React.SetStateAction<ProductInterface[]>>
  index: number
}
export interface PropsInterface {
  product: ProductInterface;
  func: ProductWithFuncInterface;
}