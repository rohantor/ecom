import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
export default function Header(props: { children: ReactElement }) {
  return (
    <>
      <header className={style['App-header']}>
        <nav>
          <li id={style['ShopCartTitle']}>ShopCart</li>
          <li>
            <NavLink
              exact
              to='/'
              activeClassName={style.selected}
              style={{ textDecoration: 'none' }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/shop'
              activeClassName={style.selected}
              style={{ textDecoration: 'none' }}
            >
              {' '}
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
            id={style["Admin"]}
              to='/admin'
              activeClassName={style.selected}
              style={{ textDecoration: 'none' }}
            >
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/cart'
              activeClassName={style.selected}
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
