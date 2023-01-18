import React, { useState } from 'react'
import './App.css'
import Grid from './component/Grid'
import Form from './component/Form'
import text from './data'

import { ProductInterface } from './Interface'
function App() {
  const [cartIsOpen, setCartIsOpen] = React.useState(false)
  const [cardDetailsArray, setCardDeatailsArray] = useState(text)
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
      <header className='App-header'>
        <h6
          style={
            cartIsOpen
              ? {
                  display: 'inline-block',
                  marginLeft: '2rem',
                  color: '#282c34',
                }
              : { display: 'inline-block', marginLeft: '2rem' }
          }
          onClick={() => {
            if (!cartIsOpen) {
              setFormOpen((old) => !old)
            }
          }}
        >
          Add Items
        </h6>
        <h1 style={{ display: 'inline-block', marginLeft: '23rem' }}>
          E-Commerce Project{' '}
        </h1>
        {cartIsOpen ? (
          <h4
            style={{ marginLeft: '23rem', color: 'red' }}
            className='grab'
            onClick={() => {
              setCartIsOpen((curr) => {
                return !curr
              })
            }}
          >
            Cart &nbsp;
            {cartItems.length}
          </h4>
        ) : (
          <h4
            className='grab'
            style={{ marginLeft: '23rem' }}
            onClick={() => {
              setCartIsOpen((curr) => {
                return !curr
              })
            }}
          >
            Cart &nbsp;{cartItems.length}
          </h4>
        )}
      </header>
      {isFormOpen ? (
        <Form
          setFormOpen={setFormOpen}
          setCardDeatailsArray={setCardDeatailsArray}
        ></Form>
      ) : (
        true
      )}

      {!cartIsOpen ? (
        <Grid
          AddToLocalStorage={AddToLocalStorage}
          cardDetailsArray={cardDetailsArray}
          setCardDeatailsArray={setCardDeatailsArray}
        ></Grid>
      ) : (
        <>
          <div>
            <div className='grid-container'>
              {cartItems.length === 0 ? (
                <h1>Cart is Empty</h1>
              ) : (
                <>
                  {cartItems?.map((item) => {
                    return (
                      <div
                        className='card_outer'
                        style={{ backgroundColor: '#84e1f3' }}
                      >
                        <div>
                          <h3
                            className='title'
                            style={{ display: 'inline-block' }}
                          >
                            Price :{item.price}
                          </h3>{' '}
                          <h3>{item.title}</h3>
                          <img
                            src='/trash.png'
                            alt=''
                            style={{ display: 'inline-block' }}
                            onClick={() => {
                              RemoveFromLocalStorage(item.id)
                            }}
                          />
                        </div>
                      
                        <img src={item.url} alt='Logo' className='Card_img' />

                        <p>{item.description}</p>
                      </div>
                    )
                  })}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default App
