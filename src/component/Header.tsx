import React, { Dispatch, SetStateAction } from 'react'
import { ProductInterface } from '../Interface'
import { CartValueCalculator } from './helper'

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
          className='grab'
        >
          Add Items
        </h6>
        <h1 style={{ display: 'inline-block', marginLeft: '23rem' }}>
          E-Commerce Project{' '}
        </h1>
        {cartIsOpen ? (
          <>
            <h6 style={{ marginLeft: '10rem', color: 'green' }}>
              Value :{CartValueCalculator(cartItems)}
            </h6>
            <h4
              style={{ marginLeft: '10rem', color: 'red' }}
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
            <br />
          </>
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
