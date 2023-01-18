import  { useState } from 'react'
import Card from './Card'
import {  AddToLocal } from '../Interface'




export default function Grid(props: AddToLocal) {
  const [removed, setRemoved] = useState<Array<number>>([])
  return (
    <>
      <div>
        <h1>{props.cardDetailsArray.length - removed.length}</h1>
      </div>
      <div className='grid-container' id='GridBox' style={{ float: 'left' }}>
        {props.cardDetailsArray
          ?.filter((item) => !removed?.includes(item.id))
          ?.map((item, index) => {
            return (
              <Card
                
                product={{
                  title: item.title,
                  url: item.url,
                  description: item.description,
                  id: item.id,
                  price: item.price,
                  wishlisted: item.wishlisted,
                  index: index,
                  setRemoved: setRemoved,
                  AddToLocalStorage: props.AddToLocalStorage,
                  setCardDeatailsArray: props.setCardDeatailsArray,
                }}
              />
            )
          })}{' '}
      </div>
    </>
  )
}
