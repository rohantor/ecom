import React, { Dispatch, SetStateAction } from 'react'
import { ProductInterface } from '../Interface'

interface NewType {
 cartIsOpen: boolean
 setCartIsOpen: Dispatch<SetStateAction<boolean>>
 setFormOpen: Dispatch<SetStateAction<boolean>>
 cartItems: ProductInterface[]
}

export default function Header({
  cartIsOpen,
  setCartIsOpen,
  setFormOpen,
  cartItems,
}: NewType) {
  return (
    <>
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
    </>
  )
}
