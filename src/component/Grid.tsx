import text from '../data'
import React, { useState } from 'react'
import Card from './Card'
interface ProductInterface {
  title: string
  url: string
  description: string
  id: number
}
interface AddToLocal{
  AddToLocalStorage:(value:ProductInterface)=>void
}
export default function Grid(props: AddToLocal) {
  const [cardDetailsArray, setCardDeatailsArray] = useState([...text])
  const [removed, setRemoved] = React.useState<Array<number>>([])
  const [cartItems, setCartItems] = useState<Array<ProductInterface>>(
    JSON.parse(localStorage.getItem('Cart') || '[]')
  )

  return (
    <div className='grid-container' id='GridBox' style={{ float: 'left' }}>
      {cardDetailsArray
        ?.filter((item) => !removed?.includes(item.id))
        ?.map((item) => {
          return (
            <Card
              product={{
                title: item.title,
                url: item.url,
                description: item.description,
                id: item.id,
                setRemoved: setRemoved,
                AddToLocalStorage: props.AddToLocalStorage,
              }}
            />
          )
        })}{' '}
    </div>
  )
}
