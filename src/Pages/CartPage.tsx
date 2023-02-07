import React, { useContext, useEffect } from 'react'
import { ProductInterface } from '../Interface'
import { store } from '../Context/ContextStore'
import style from '../component/Card.module.css'
import cartPageStyle from './CartPage.module.css'
import GridStyle from '../component/Grid.module.css'
import axios from 'axios'
import Error from '../component/Error'
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
                    className={style.card_outer}
                    style={{ backgroundColor: '#84e1f3' }}
                    id={'cart_' + item.id?.toString()}
                  >
                    <div>
                      <h3 className={style.title}>Price :{item.price}</h3>{' '}
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
                      className={style.Card_img}
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
