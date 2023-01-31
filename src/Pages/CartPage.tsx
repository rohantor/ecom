import React, { useEffect, useState } from 'react'
import { ProductInterface } from '../Interface'
import { RemoveFromLocalStorage } from '../utils/helper'
import { maxWidth } from '@mui/system'
export default function CartPage() {
  const [cartItems, setCartItems] = useState<Array<ProductInterface>>([])

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
        <div className='grid-container'>
          {cartItems.length === 0 ? (
            <div style={{ marginTop: '3rem', width: '100vw' }}>
              <hr />
              <h1
                style={{
                  marginTop: '8rem',
                  marginBottom: '8rem',
                  marginLeft: '5rem',
                  width: 'fit-content',
                }}
              >
                Cart is Empty
              </h1>
            </div>
          ) : (
            <>
              {cartItems?.map((item: ProductInterface, index: number) => {
                return (
                  <div
                    className='card_outer'
                    style={{ backgroundColor: '#84e1f3' }}
                  >
                    <div>
                      <h3 className='title' style={{ display: 'inline-block' }}>
                        Price :{item.price}
                      </h3>{' '}
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
  )
}