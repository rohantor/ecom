import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header,Individual,NFP404} from './component'
import { HomePage, AdminPage, CartPage, ShoppingPage, CartPageTemp } from './Pages'
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <div className='App'>
      <Header>
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='/shop' element={<ShoppingPage />}></Route>
          <Route exact path='/shop/:index/' element={<Individual />} />

          <Route path='/admin' element={<AdminPage />}></Route>
          <Route path='/cart' element={<CartPageTemp />}></Route>
          <Route path='/*' element={<NFP404 />}></Route>
        </Routes>
      </Header>
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
    </div>
  )
}

export default App
