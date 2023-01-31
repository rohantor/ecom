import { useState } from 'react'
import Card from './Card'
import { AddToLocal } from '../Interface'

export default function Grid(props: AddToLocal) {
  const [removed, setRemoved] = useState<Array<number>>([])
  return (
    <>
      <div className='grid-container' id='GridBox' style={{ float: 'left' }}>
        {props.cardDetailsArray
          ?.filter((item) => !removed?.includes(item.id))
          ?.map((item, index) => {
            return (
              <Card
                product={item}
                func={{
                  setRemoved: setRemoved,
                  AddToLocalStorage: props.AddToLocalStorage,
                  setCardDetailsArray: props.setCardDetailsArray,
                  index: index,
                }}
              />
            )
          })}{' '}
      </div>
    </>
  )
}
