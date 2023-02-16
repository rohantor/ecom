import React, { useEffect } from 'react'
import GridTemplate from '../component/Grid/GridTemp'
import CardTemp from '../component/Card/CardTemp'
import { CartProductInterface } from '../Interface'
import { useDispatch, useSelector } from 'react-redux'
import { RootStateType } from '../store/rootReducer'
import axios from 'axios'
import { CartActions } from '../store/CartReducer'

function CartPageTemp() {
  const { cartItems } = useSelector((state: RootStateType) => state.cart)
  console.log(cartItems)
  const dispatch = useDispatch()
  const deleteHandler=(index:number)=>{
    dispatch(CartActions.RemoveCartItem(index))
  
  }
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + 'cart')
      .then((res) => res.data)
      .then((data) => {
        dispatch(CartActions.SetCart(data));
      })
  }, [])
  return (
    <GridTemplate>
      
      {cartItems?.map((item: CartProductInterface, index: number) => {
        return (
          <CardTemp
            deleteHandler={{ fn: deleteHandler, identifier: index,resource:'cart' }}
            title={item.title}
            image={item.image}
            description={item.description}
            id={item.id}
            price={item.price}
          />
        )
      })} 
    </GridTemplate>
  )
}

export default CartPageTemp
