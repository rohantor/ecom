import Card from '../Card/Card'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import style from '../Styles/Grid.module.css'
import { useSelector } from 'react-redux'
import { ProductInterface } from '../../Interface'
export default function Grid() {
  interface State {
    cardDetailsArray: ProductInterface[]
    cartItems: ProductInterface[]
  }
  const data = useSelector((state: State) => state.cardDetailsArray)

  return (
    <>
      <div
        className={style['grid-container']}
        id='GridBox'
        style={{ float: 'left' }}
      >
        {data?.map((item, index) => {
          return <Card product={{ ...item, index: index }} />
        })}{' '}
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
