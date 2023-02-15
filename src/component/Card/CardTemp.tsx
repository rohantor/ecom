import React, {  useState } from 'react'
import { Button, CardOuterDiv, H3Price } from '../Styles/CardStyled'
import style from '../Styles/Card.module.css'
import { useDispatch } from 'react-redux'
import { notify } from '../Utils/Notify'
import axios, { AxiosResponse } from 'axios'

interface Props {
  deleteHandler: {
    action: string
    resource: string
    value: number
  }
  title: string
  image: string
  description: string
  id: number
  price: number
  wishListed?: boolean
  addToWishListed?: {
    action: string
    value: number
  }
  addToCart?: () => {}
}
export default function CardTemp(props: Props) {
  const {
    deleteHandler,
    title,
    image,
    description,
    id,
    price,
    wishListed,
    
    addToWishListed,
    
  } = props

  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const handleWhishList = () => {
    axios.put(process.env.REACT_APP_BASE_URL + 'products/' + id)
    dispatch({ type: addToWishListed?.action, payload: addToWishListed?.value })
  }
  const getPromise = (
    url: string,
    promiseType: string
  ): Promise<AxiosResponse<any>> => {
    if (promiseType === 'post') {
      return axios.post(url, {
        id: id,
        title: title,
        price: price,
        description: description,
        image: image,
      })
    } else if (promiseType === 'delete') {
      return axios.delete(url)
    } else return axios.get(url)
  }
  const addToCartHandler = () => {
    notify(
      getPromise(process.env.REACT_APP_BASE_URL + 'cart/', 'post'),
      ' Trying to add item to cart',
      '🛒 Added to cart!👌'
    )
  }
  const openHandler = () => {
    setOpen((prv) => !prv)
  }
  const handleDelete = () => {
    dispatch({ type: deleteHandler.action, payload: deleteHandler.value })
    notify(
      getPromise(process.env.REACT_APP_BASE_URL + deleteHandler.resource+'/' + id, 'delete'),
      ' Trying tp delete  ',
      'Product Deleted !👌'
    )
  }

  return (
    <>
      <CardOuterDiv>
        <div>
          <H3Price>Price:{price} </H3Price>
          <h3>{title}</h3>
          <img
            src='/trash.png'
            alt='I'
            style={{ display: 'inline-block' }}
            onClick={openHandler}
          />
        </div>
        <img alt='Logo' src={image} className={style.Card_img} />
        {open ? (
          <Button style={{ backgroundColor: 'red' }} onClick={handleDelete}>
            Delete
          </Button>
        ) : (
          typeof wishListed !== 'undefined' && (
            <>
              <Button
                style={
                  wishListed
                    ? { backgroundColor: 'blue' }
                    : { backgroundColor: 'green' }
                }
                onClick={handleWhishList}
              >
                {wishListed ? 'Added to wishlist' : 'Wishlist'}
              </Button>
              &nbsp; &nbsp;{' '}
              <Button onClick={addToCartHandler}>Add to cart</Button>
            </>
          )
        )}
      </CardOuterDiv>
    </>
  )
}
