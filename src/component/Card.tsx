import React, { useState, useEffect, useContext, FC } from 'react'
import { CardPropsInterface } from '../Interface'
import { useHistory } from 'react-router-dom'
import { store } from '../Context/ContextStore'
import { toast } from 'react-toastify'
import axios, { AxiosResponse } from 'axios'
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
  const history = useHistory()

  const getPromise = () => {
    return axios.post(process.env.REACT_APP_BASE_URL+'carts', {
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

  return (
    <>
      <div className='card_outer' id={id.toString()}>
        <div>
          <h3 className='title' style={{ display: 'inline-block' }}>
            Price :{price}
          </h3>{' '}
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
            history.push(`/shop/${id}`)
          }}
          className='Card_img'
        />

        {deleteStatus ? (
          <button
            className='btn'
            style={{ backgroundColor: 'red' }}
            onClick={() =>
              setCardDetailsArray((currentState) => {
                return currentState.filter((item) => item.id !== id)
              })
            }
          >
            Delete
          </button>
        ) : (
          <>
            <button
              className='btn'
              style={
                wishListed
                  ? { backgroundColor: 'blue' }
                  : { backgroundColor: 'green' }
              }
              onClick={() => {
                setCardDetailsArray((prv) => {
                  let NewArr = prv

                  NewArr[index].wishListed = !NewArr[index].wishListed

                  return [...NewArr]
                })
              }}
            >
              {wishListed ? 'Added to wishlist' : 'Wishlist'}
            </button>
            &nbsp; &nbsp;
            <button
              className='btn'
              onClick={() => {
                AddToCartUsingPostApi()
                AddToLocalStorage({
                  title,
                  image,
                  description,
                  id,
                  price,
                  wishListed,
                })
              }}
            >
              Add to cart
            </button>
          </>
        )}
        {/* <p>{description}</p> */}
      </div>
    </>
  )
}

export default Card