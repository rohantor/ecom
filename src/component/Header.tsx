import React, { Dispatch, SetStateAction } from 'react'
import { ProductInterface } from '../Interface'
import { CartValueCalculator } from '../utils/helper'
import { NavLink } from 'react-router-dom'

interface NewType {
  cartIsOpen: boolean
  setCartIsOpen: Dispatch<SetStateAction<boolean>>
  setFormOpen: Dispatch<SetStateAction<boolean>>
  cartItems: ProductInterface[]
}

export default function Header() {
  return (
    <>
      <header className='App-header'>
        <nav>
          <li id='ShopCartTitle'>ShopCart</li>
          <li>
            <NavLink
              exact
              to='/'
              activeClassName='selected'
              style={{ textDecoration: 'none' }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/shop'
              activeClassName='selected'
              style={{ textDecoration: 'none' }}
            >
              {' '}
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/admin'
              activeClassName='selected'
              style={{ textDecoration: 'none' }}
            >
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/cart'
              activeClassName='selected'
              style={{ textDecoration: 'none' }}
            >
              Cart
            </NavLink>
          </li>
        </nav>
        <div></div>
        
      </header>
     
    </>
  )
}
