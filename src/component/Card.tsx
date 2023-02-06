import React, { useState, useEffect, useContext, FC } from 'react'
import { CardPropsInterface } from '../Interface'
import { useNavigate } from 'react-router-dom'
import { store } from '../Context/ContextStore'
import { toast } from 'react-toastify'
import axios, { AxiosResponse } from 'axios'
import style from './Card.module.css'
import { CardOuterDiv, Button, H3Price } from './CardStyled'
interface Props {
  product: CardPropsInterface
}

export const Card: FC<Props> = (props) => {
  const { title, image, description, id, price, wishListed, index } =
    props.product

  const [deleteStatus, setDeleteStatus] = useState(false)
  const { setCardDetailsArray, AddToLocalStorage } = useContext(store)
  useEffect(() => {
    console.log('Component Mounted')

    return () => {
      console.log('Component Unmounted')
    }
  }, [])
  const navigate = useNavigate()

  const getPromise = () => {
    return axios.post(process.env.REACT_APP_BASE_URL + 'carts', {
      userId: 5,
      date: '2020-02-03',
      products: [
        { productId: 5, quantity: 1 },
        { productId: 1, quantity: 5 },
      ],
    })
  }
  const AddToCartUsingPostApi = () => {
    notify(getPromise())
  }
  const notify = (POSTPromise: Promise<AxiosResponse<any>>) => {
    toast.promise(POSTPromise, {
      pending: ' Trying to add item to cart',
      success: '🛒 Added to cart!👌',
      error: 'Failed to add 🤯',
    })
  }
  const deleteHandler = () => {
    setCardDetailsArray((currentState) => {
      return currentState.filter((item) => item.id !== id)
    })
  }
  const addToWishListedHandler = () => {
    setCardDetailsArray((prv) => {
      let NewArr = prv

      NewArr[index].wishListed = !NewArr[index].wishListed

      return [...NewArr]
    })
  }
  const addToCartHandler = () => {
    AddToCartUsingPostApi()
    AddToLocalStorage({
      title,
      image,
      description,
      id,
      price,
      wishListed,
    })
  }

  return (
    <>
      <CardOuterDiv>
        <div>
          <H3Price>Price :{price}</H3Price>
           <h3>{title}</h3>
          <img
            src='/trash.png'
            alt=''
            onClick={() => {
              setDeleteStatus(!deleteStatus)
            }}
            style={{ display: 'inline-block' }}
          />
        </div>
        <img
          src={image}
          alt='Logo'
          onClick={() => {
            navigate(`/shop/${id}`)
          }}
          className={style.Card_img}
        />

        {deleteStatus ? (
          <Button style={{ backgroundColor: 'red' }} onClick={deleteHandler}>
            Delete
          </Button>
        ) : (
          <>
            <Button
              style={
                wishListed
                  ? { backgroundColor: 'blue' }
                  : { backgroundColor: 'green' }
              }
              onClick={addToWishListedHandler}
            >
              {wishListed ? 'Added to wishlist' : 'Wishlist'}
            </Button>
            &nbsp; &nbsp;{' '}
            <Button onClick={addToCartHandler}>Add to cart</Button>
          </>
        )}
      </CardOuterDiv>
    </>
  )
}

export default Card
