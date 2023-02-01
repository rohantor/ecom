import { useState,useEffect, useContext } from 'react'
import { CardPropsInterface } from '../Interface'
import { useHistory } from 'react-router-dom'
import { store } from '../Context/ContextStore'

interface Props{
  product:CardPropsInterface
}

export default function Card(props: Props) {
  const { title, image, description, id, price, wishListed,index } = props.product

  const [deleteStatus, setDeleteStatus] = useState(false)
  const { setCardDetailsArray, AddToLocalStorage } = useContext(store)
  useEffect(() => {
    console.log('Component Mounted')

    return () => {
      console.log('Component Unmounted')
    }
  }, [])
  const history = useHistory()
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
              onClick={() =>
                AddToLocalStorage({
                  title,
                  image,
                  description,
                  id,
                  price,
                  wishListed,
                })
              }
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
