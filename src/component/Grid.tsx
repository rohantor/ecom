import text from '../data'
import React from 'react'
import Card from './Card'
export default function Grid() {
  const [cardDetailsArray, setCardDeatailsArray] = React.useState([...text])
  const [removed, setRemoved] = React.useState([])

  return (
    <div className='grid-container'>
      {cardDetailsArray
        .filter((item) => {
          return !removed.includes(item.id as never)
        })
        .map((item) => {
          return (
            <Card
              Product={{
                title: item.title,
                url: item.url,
                description: item.description,
                id: item.id,
                setRemoved: setRemoved,
              }}
            />
          )
        })}{' '}
    </div>
  )
}
