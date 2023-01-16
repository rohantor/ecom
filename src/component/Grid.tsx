import text from '../data'
import React from 'react'
import Card from './Card'
export default function Grid() {
  const [cardDetailsArray, setCardDeatailsArray] = React.useState([...text])
  const [removed, setRemoved] = React.useState<Array<number>>([])

  return (
    <div className='grid-container'>
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
                removedNew: removed,
                setRemoved: setRemoved,
              }}
            />
          )
        })}{' '}
    </div>
  )
}
