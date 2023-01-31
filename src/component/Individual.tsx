import React from 'react'
import { ProductInterface } from '../Interface'
import { useParams } from 'react-router-dom'

function Individual() {
  let {id,price}=useParams()
  
  return (
    <>
      <h1>{id}</h1>
      <h1>{price}</h1>
    </>
  )
}

export default Individual
