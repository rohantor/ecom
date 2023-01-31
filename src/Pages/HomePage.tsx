import React, { useState, useEffect } from 'react'
import Grid from '../component/Grid'
import { HomePageInterface, ProductInterface } from '../Interface'
import text from '../data'
import { AddToLocal } from '../Interface'

export default function HomePage({
  cardDetailsArray,
  setCardDetailsArray,
}: HomePageInterface) {
  const [cartItems, setCartItems] = useState<Array<ProductInterface>>([])

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('Cart') || '[]'))
  }, [])
  const AddToLocalStorage = (item: ProductInterface) => {
    setCartItems((curr) => {
      localStorage.setItem('Cart', JSON.stringify([...curr, item]))
      return [...curr, item]
    })
  }


  return (
    <>
      <Grid
        AddToLocalStorage={AddToLocalStorage}
        cardDetailsArray={cardDetailsArray}
        setCardDetailsArray={setCardDetailsArray}
      ></Grid>
    </>
  )
}
