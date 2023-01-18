import { useState } from 'react'
import { PropsInterface } from '../Interface'
import Modal from './Modal'

export default function Card(props: PropsInterface) {
  const {
    title,
    url,
    description,
    id,
    price,
    wishlisted,
  } = props.product
  const { setRemoved, AddToLocalStorage, setCardDetailsArray, index } =
    props.func

  const [deleteStatus, setDeleteStatus] = useState(false)
  const [modalPos, setModalPos] = useState(false)

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
              console.log('Delete')
            }}
            style={{ display: 'inline-block' }}
          />
        </div>
        <img
          src={url}
          alt='Logo'
          onClick={() => {
            setModalPos((old) => !old)
          }}
          className='Card_img'
        />

        {deleteStatus ? (
          <button
            className='btn'
            style={{ backgroundColor: 'red' }}
            onClick={() =>
              setRemoved((currentState: any) => [...currentState, id])
            }
          >
            Delete
          </button>
        ) : (
          <>
            <button
              className='btn'
              style={
                wishlisted
                  ? { backgroundColor: 'blue' }
                  : { backgroundColor: 'green' }
              }
              onClick={() => {
                setCardDetailsArray((prv) => {
                  let NewArr = prv

                  NewArr[index].wishlisted = !NewArr[index].wishlisted

                  return [...NewArr]
                })
              }}
            >
              {wishlisted ? 'Added to wishlist' : 'Wishlist'}
            </button>
            &nbsp; &nbsp;
            <button
              className='btn'
              onClick={() =>
                AddToLocalStorage({
                  title,
                  url,
                  description,
                  id,
                  price,
                  wishlisted,
                })
              }
            >
              Add to cart
            </button>
          </>
        )}
        <p>{description}</p>
      </div>
      <Modal
        isClose={modalPos}
        setModalPos={setModalPos}
        Product={props.product}
      ></Modal>
    </>
  )
}
