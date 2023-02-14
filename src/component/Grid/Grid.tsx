import Card from '../Card/Card'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import style from '../Styles/Grid.module.css'
import { useSelector } from 'react-redux'
import { ProductInterface } from '../../Interface'
import { RootStateType } from '../../store/rootReducer'

export default function Grid() {
  
  const {cardDetailsArray} = useSelector((state: RootStateType) => state.card);


  return (
    <>
      <div
        className={style['grid-container']}
        id='GridBox'
        style={{ float: 'left' }}
      >
        {cardDetailsArray?.map((item: ProductInterface, index: number) => {
          return <Card key={index} product={{ ...item, index: index }} />
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
