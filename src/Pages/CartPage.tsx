import  {  useEffect } from 'react'
import { CartProductInterface, ProductInterface } from '../Interface'


import { cartPageStyle, GridStyle,CardStyle } from '../component'
import axios from 'axios'
import {Error} from '../component'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { RootStateType } from '../store/rootReducer'
export default function CartPage() {
  const dispatch=useDispatch()
  const  {cartItems} = useSelector((state:RootStateType)=>state.cart)

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + 'cart')
      .then((res) => res.data)
      .then((data) => {
        dispatch({ type: 'SetCart', payload: data })
        
      })
  }, [])
  const Remove = (id: number, index: number) => {
    const promiseObj =axios.delete(process.env.REACT_APP_BASE_URL + 'cart/' + id)
    .then(() => {
      dispatch({type: 'RemoveCartItem', payload:index})
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
              {cartItems?.map((item: CartProductInterface, index: number) => {
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
