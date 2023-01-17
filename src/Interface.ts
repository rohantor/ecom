export const a=5;
export interface ProductInterface {
  title: string
  url: string
  description: string
  id: number
}
export interface AddToLocal{
  AddToLocalStorage:(value:ProductInterface)=>void
}
export interface RemoveFromLocal{

  RemoveFromLocalStorage:(id:number)=>void
}
export interface GridInterface{

  LocalStorage:AddToLocal |RemoveFromLocal

}
export interface ModalPropInterface {
  isClose: boolean
  setModalPos: React.Dispatch<React.SetStateAction<boolean>>
  Product: ProductInterface
}

export interface ProductWithFuncInterface extends ProductInterface {
  setRemoved: (value: any) => void
  AddToLocalStorage: (value: ProductInterface) => void
}
export interface PropsInterface {
  product: ProductWithFuncInterface
}