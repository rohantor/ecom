import { useContext } from 'react'
import Card from './Card'

import { store } from '../Context/ContextStore'
export default function Grid() {
  const ctx = useContext(store)
  const { cardDetailsArray } = ctx

  return (
    <>
      <div className='grid-container' id='GridBox' style={{ float: 'left' }}>
        {cardDetailsArray?.map((item, index) => {
          return <Card product={{ ...item, index: index }} />
        })}{' '}
      </div>
    </>
  )
}
