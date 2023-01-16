import React, { Dispatch, SetStateAction } from 'react'
import Button from '@mui/material/Button'
interface ProductInterface {
  title: string
  url: string
  description: string
  id: number
  removedNew: Array<number>
  setRemoved: (value: any) => void
}

interface PropsInterface {
  product: ProductInterface
}
export default function Card(props: PropsInterface) {
  const { title, url, description, id, setRemoved, removedNew } = props.product
  const [deleteStatus, setDeleteStatus] = React.useState(false)
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
            // setModalPos((old) => !old);
          }}
          // alt='Image of the '
          className='Card_img'
        />
        {/* {deleteStatus ?  (<button>Primary</button>) : (<button>Prime</button>)} */}
        {deleteStatus ? (
          <button onClick={() => setRemoved([...removedNew, id])}>
            Delete
          </button>
        ) : (
          <>
            <button>WishList</button>
            <button>Add to cart</button>
          </>
        )}
      </div>
    </>
  )
}
