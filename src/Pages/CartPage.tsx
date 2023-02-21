import React, { useEffect } from 'react'
import GridTemplate from '../component/Grid/Grid'
import CardTemp from '../component/Card/ProductCard'
import { CartProductInterface } from '../Interface'
import { useDispatch, useSelector } from 'react-redux'
import { RootStateType } from '../store/rootReducer'
import axios, { AxiosError } from 'axios'
import { CartActions } from '../store/CartReducer'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'

function CartPage() {
  const { cartItems } = useSelector((state: RootStateType) => state.cart)
  const dispatch = useDispatch()
  const deleteHandler = (index: number) => {
    dispatch(CartActions.RemoveCartItem(index))
  }
  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(
          process.env.REACT_APP_BASE_URL + 'cart'
        )

        dispatch(CartActions.SetCart(data))
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
            <CardTemp
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
