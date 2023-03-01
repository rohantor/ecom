import React, { useEffect } from 'react'
import GridTemplate from '../component/Grid/Grid'
import ProductCard from '../component/Card/ProductCard'
import { CartProductInterface } from '../Interface'
import {  useSelector } from 'react-redux'
import { RootStateType } from '../store/rootReducer'
import  { AxiosError } from 'axios'
import { CartActions, fetchCartItems } from '../store/CartReducer'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../store/store'

function CartPage() {
  const { cartItems } = useSelector((state: RootStateType) => state.cart)
  const dispatch = useAppDispatch()
  const deleteHandler = (index: number) => {
    dispatch(CartActions.RemoveCartItem(index))
  }
  useEffect(() => {
    ;(async () => {
      try {
        await dispatch(fetchCartItems())
      } catch (err) {
        let errorMessage = ''
        if (err instanceof AxiosError) {
          errorMessage = err.message
        } else {
          errorMessage = 'Unexpected error'
        }
        toast.error(errorMessage)
      }
    })()
  }, [])
  return (
    <GridTemplate>
      {cartItems?.map(
        (
          { title, image, description, id, price }: CartProductInterface,
          index: number
        ) => {
          return (
            <ProductCard
              key={nanoid()}
              deleteHandler={{
                fn: deleteHandler,
                identifier: index,
                resource: 'cart',
              }}
              title={title}
              image={image}
              description={description}
              id={id}
              price={price}
            />
          )
        }
      )}
    </GridTemplate>
  )
}

export default CartPage
