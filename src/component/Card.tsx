import React, { useState, useEffect, useContext, FC } from 'react'
import { CardPropsInterface } from '../Interface'
import { useNavigate } from 'react-router-dom'
import { store } from '../Context/ContextStore'
import { ToastContentProps, toast } from 'react-toastify'
import axios, { AxiosResponse } from 'axios'
import style from './Card.module.css'
import Error from './Error'
import { CardOuterDiv, Button, H3Price } from './CardStyled'
interface Props {
  product: CardPropsInterface
}

export const Card: FC<Props> = (props) => {
  const { title, image, description, id, price, wishListed, index } =
    props.product

  const [deleteStatus, setDeleteStatus] = useState(false)
  const { setCardDetailsArray } = useContext(store)
  useEffect(() => {
    console.log('Component Mounted')

    return () => {
      console.log('Component Unmounted')
    }
  }, [])
  const navigate = useNavigate()

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

  const notify = (
    POSTPromise: Promise<AxiosResponse<any>>,
    pending: string,
    success: string
  ) => {
    toast.promise(POSTPromise, {
      pending: pending,
      success: success,
      error: {
        render({ data }) {
          return <Error message={data} />
        },
      },
    })
  }
  const deleteHandler = () => {
    setCardDetailsArray((currentState) => {
      return currentState.filter((item) => item.id !== id)
    })
    notify(
      getPromise(process.env.REACT_APP_BASE_URL + 'products/' + id, 'delete'),
      ' Trying delete product ',
      'Product Deleted !👌'
    )
  }
  const addToWishListedHandler = () => {


    setCardDetailsArray((prv) => {
      let NewArr = prv
      NewArr[index].wishListed = !NewArr[index].wishListed
      return [...NewArr]
    })
    console.log(id)
    axios.put(process.env.REACT_APP_BASE_URL + 'products/' + id)
  }
  const addToCartHandler = () => {
    notify(
      getPromise(process.env.REACT_APP_BASE_URL + 'cart/', 'post'),
      ' Trying to add item to cart',
      '🛒 Added to cart!👌'
    )
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
