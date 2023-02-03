import React, { useContext, useEffect } from 'react'
import { ProductInterface } from '../Interface'
import { RemoveFromLocalStorage } from '../utils/helper'
import { store } from '../Context/ContextStore'
import style from '../component/Card.module.css'
import cartPageStyle from './CartPage.module.css'
import GridStyle from '../component/Grid.module.css'

export default function CartPage() {
  const ctx = useContext(store)
  const { setCartItems, cartItems } = ctx

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('Cart') || '[]'))
  }, [])
  const Remove = (index: number) => {
    RemoveFromLocalStorage(index)
    setCartItems(JSON.parse(localStorage.getItem('Cart') || '[]'))
  }
  return (
    <>
      <div>
        <div className={GridStyle['grid-container']}>
          {cartItems.length === 0 ? (
            <div id={cartPageStyle['CartPageOuterDiv']}>
              <hr />
              <h1 id={cartPageStyle['CartPageIsEmpty']}>Cart is Empty</h1>
            </div>
          ) : (
            <>
              {cartItems?.map((item: ProductInterface, index: number) => {
                return (
                  <div
                    className={style.card_outer}
                    style={{ backgroundColor: '#84e1f3' }}
                    id={'cart_' + item.id.toString()}
                  >
                    <div>
                      <h3 className={style.title}>Price :{item.price}</h3>{' '}
                      <h3>{item.title}</h3>
                      <img
                        src='/trash.png'
                        alt=''
                        style={{ display: 'inline-block' }}
                        onClick={() => {
                          Remove(index)
                        }}
                      />
                    </div>

                    <img
                      src={item.image}
                      alt='Logo'
                      className={style.Card_img}
                    />
                  </div>
                )
              })}
            </>
          )}
        </div>
      </div>
    </>
  )
}
