import { useContext } from 'react'
import Card from '../Card/Card'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { store } from '../../Context/ContextStore'
import style from '../Styles/Grid.module.css'
export default function Grid() {
  const ctx = useContext(store)
  const { cardDetailsArray } = ctx

  return (
    <>
      <div
        className={style["grid-container"]}
        id='GridBox'
        style={{ float: 'left' }}
      >
        {cardDetailsArray?.map((item, index) => {
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
