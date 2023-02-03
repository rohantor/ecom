import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(props: { children: ReactElement }) {
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
            id="Admin"
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
      {props.children}
    </>
  )
}
