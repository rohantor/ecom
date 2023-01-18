import React, { useState } from 'react'
import './App.css'
import Grid from './component/Grid'
import Form from './component/Form'
import text from './data'
import Header from './component/Header'
import Cart from './component/Cart'
import { ProductInterface } from './Interface'
function App() {
  const [cartIsOpen, setCartIsOpen] = React.useState(false)
  const [cardDetailsArray, setCardDetailsArray] = useState(text)
  const [isFormOpen, setFormOpen] = useState(false)
  const [cartItems, setCartItems] = useState<Array<ProductInterface>>(
    JSON.parse(localStorage.getItem('Cart') || '[]')
  )

  const AddToLocalStorage = (item: ProductInterface) => {
    setCartItems((curr) => {
      localStorage.setItem('Cart', JSON.stringify([...curr, item]))
      return [...curr, item]
    })
  }

  const RemoveFromLocalStorage = (id: number): void => {
    setCartItems((prv) => {
      let flag = true
      let index: number = -1
      for (let i in prv) {
        if (prv[i].id === id && flag) {
          index = parseInt(i)
        }
      }
      let newprv = prv.filter((_, i) => i !== index)
      localStorage.setItem('Cart', JSON.stringify(newprv))
      return newprv
    })

    console.log('Remove')
  }

  return (
    <div className='App'>
      <Header
        cartIsOpen={cartIsOpen}
        setCartIsOpen={setCartIsOpen}
        setFormOpen={setFormOpen}
        cartItems={cartItems}
      ></Header>
      {isFormOpen ? (
        <Form
          setFormOpen={setFormOpen}
          setCardDetailsArray={setCardDetailsArray}
        ></Form>
      ) : (
        true
      )}

      {!cartIsOpen ? (
        <Grid
          AddToLocalStorage={AddToLocalStorage}
          cardDetailsArray={cardDetailsArray}
          setCardDetailsArray={setCardDetailsArray}
        ></Grid>
      ) : (
        <>
          <Cart
            cartItems={cartItems}
            RemoveFromLocalStorage={RemoveFromLocalStorage}
          ></Cart>
        </>
      )}
    </div>
  )
}

export default App
