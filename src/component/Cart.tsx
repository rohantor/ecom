import React from 'react'
import { ProductInterface } from '../Interface'

export default function Cart({
  cartItems,
  RemoveFromLocalStorage,
}: {
  cartItems: ProductInterface[]
  RemoveFromLocalStorage:(id: number)=> void
}) {
  return (
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
                    <h3 className='title' style={{ display: 'inline-block' }}>
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
  )
}
