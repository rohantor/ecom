import React, { useContext, useEffect } from 'react'
import { ProductInterface } from '../Interface'
import { store } from '../Context/ContextStore'

import { cartPageStyle, GridStyle,CardStyle } from '../component'
import axios from 'axios'
import {Error} from '../component'
import { ToastContainer, toast } from 'react-toastify'
export default function CartPage() {
  const ctx = useContext(store)
  const { setCartItems, cartItems } = ctx

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + 'cart')
      .then((res) => res.data)
      .then((data) => {
        setCartItems(data)
      })
  }, [])
  const Remove = (id: number, index: number) => {
    const promiseObj =axios.delete(process.env.REACT_APP_BASE_URL + 'cart/' + id)
    .then(() => {
      setCartItems((prv) =>
        prv.filter((_: ProductInterface, i: number) => i !== index)
      )
    })
       toast.promise(promiseObj, {
         pending: 'Deleting ...',
         success: 'Deleted',
         error: {
           render({ data }) {
             return <Error message={data} />
           },
         },
       })
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
                    className={CardStyle.card_outer}
                    style={{ backgroundColor: '#84e1f3' }}
                    id={'cart_' + item.id?.toString()}
                  >
                    <div>
                      <h3 className={CardStyle.title}>Price :{item.price}</h3>{' '}
                      <h3>{item.title}</h3>
                      <img
                        src='/trash.png'
                        alt=''
                        style={{ display: 'inline-block' }}
                        onClick={() => {
                          Remove(item.id, index)
                        }}
                      />
                    </div>

                    <img
                      src={item.image}
                      alt='Logo'
                      className={CardStyle.Card_img}
                    />
                  </div>
                )
              })}
            </>
          )}
        </div>
      </div>
      <ToastContainer
        position='bottom-center'
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </>
  )
}
