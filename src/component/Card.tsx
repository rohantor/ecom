import React, { Dispatch, MouseEventHandler, SetStateAction,useState } from 'react'
import {
  ProductInterface,
  ProductWithFuncInterface,
  PropsInterface,
} from '../Interface'
import Modal from './Modal'

export default function Card(props: PropsInterface) {
  const { title, url, description, id, setRemoved, AddToLocalStorage } =
    props.product

  const [deleteStatus, setDeleteStatus] = React.useState(false)
  const [modalPos, setModalPos] = React.useState(false)

  return (
    <>
      <div className='card_outer' id={id.toString()}>
        <div>
          <h3 className='title' style={{ display: 'inline-block' }}>
            {id}

            {title}
          </h3>

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
        {/* <Modal product ={props.product}/> */}
        <img
          src={url}
          alt='Logo'
          onClick={() => {
            setModalPos((old) => !old)
          }}
          // alt='Image of the '
          className='Card_img'
        />
        {/* {deleteStatus ?  (<button>Primary</button>) : (<button>Prime</button>)} */}
        {deleteStatus ? (
          <button
            onClick={() =>
              setRemoved((currentState: any) => [...currentState, id])
            }
          >
            Delete
          </button>
        ) : (
          <>
            <button>WishList</button>
            <button onClick={()=>AddToLocalStorage({title,url,description,id})}>Add to cart</button>
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
